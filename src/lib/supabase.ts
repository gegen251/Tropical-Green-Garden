import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { seedWishes, type Wish } from "./invitation-data";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const LOCAL_STORAGE_KEY = "verdant_wishes_db";

function getLocalWishes(): Wish[] {
  if (typeof window === "undefined") return seedWishes;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seedWishes));
      return seedWishes;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : seedWishes;
  } catch {
    return seedWishes;
  }
}

function saveLocalWishes(wishes: Wish[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishes));
  } catch (err) {
    console.debug("Local storage write error:", err);
  }
}

export type DbWishRow = {
  id: string;
  name: string;
  title?: string | null;
  attendance: "hadir" | "tidak" | "ragu";
  guests: number;
  message: string;
  created_at: number;
};

/** Fetch all wishes, ordered from newest to oldest. */
export async function fetchWishes(): Promise<Wish[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("wishes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Supabase fetch error, using local data fallback:", error.message);
        return getLocalWishes();
      }

      if (data && data.length > 0) {
        const mapped: Wish[] = data.map((row: DbWishRow) => ({
          id: row.id,
          name: row.name,
          title: row.title ?? undefined,
          attendance: row.attendance,
          guests: row.guests,
          message: row.message,
          createdAt: typeof row.created_at === "number" ? row.created_at : Number(row.created_at),
        }));
        // Sync local cache
        saveLocalWishes(mapped);
        return mapped;
      }
    } catch (err) {
      console.warn("Error reaching Supabase, using local fallback:", err);
    }
  }

  return getLocalWishes();
}

/** Insert a new wish to the backend database with local persistence guarantee. */
export async function insertWish(wish: Omit<Wish, "id" | "createdAt">): Promise<Wish> {
  const newWish: Wish = {
    ...wish,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  };

  // Always update local cache first
  const currentLocal = getLocalWishes();
  const updatedLocal = [newWish, ...currentLocal.filter((w) => w.id !== newWish.id)];
  saveLocalWishes(updatedLocal);

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("wishes")
        .insert([
          {
            id: newWish.id,
            name: newWish.name,
            title: newWish.title ?? null,
            attendance: newWish.attendance,
            guests: newWish.guests,
            message: newWish.message,
            created_at: newWish.createdAt,
          },
        ])
        .select()
        .single();

      if (error) {
        console.warn("Supabase insert error (saved locally):", error.message);
      } else if (data) {
        return {
          id: data.id,
          name: data.name,
          title: data.title ?? undefined,
          attendance: data.attendance,
          guests: data.guests,
          message: data.message,
          createdAt: Number(data.created_at),
        };
      }
    } catch (err) {
      console.warn("Supabase insert exception (saved locally):", err);
    }
  }

  return newWish;
}
