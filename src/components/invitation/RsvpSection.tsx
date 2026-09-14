import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  CheckCircle2,
  Clock,
  Heart,
  MessageSquare,
  Send,
  Sparkles,
  User,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";

import { seedWishes, type Wish } from "@/lib/invitation-data";
import { fetchWishes, insertWish } from "@/lib/supabase";
import estateArchBg from "@/assets/estate-arch-bg.webp";
import { Reveal, SectionTitle } from "./Reveal";
import { FlyingButterflies } from "./Ambience";

const attendanceOptions: {
  value: Wish["attendance"];
  label: string;
  icon: typeof CheckCircle2;
  color: string;
}[] = [
  { value: "hadir", label: "Hadir", icon: CheckCircle2, color: "text-[#2e6843]" },
  { value: "tidak", label: "Tidak Hadir", icon: Heart, color: "text-[#8a4a4a]" },
  { value: "ragu", label: "Masih Ragu", icon: Clock, color: "text-[#856b36]" },
];

export function RsvpSection({ guestName }: { guestName?: string | undefined }) {
  const [wishes, setWishes] = useState<Wish[]>(seedWishes);
  const [name, setName] = useState(guestName ?? "");
  const [title, setTitle] = useState("");
  const [attendance, setAttendance] = useState<Wish["attendance"]>("hadir");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState<Wish | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchWishes().then((data) => {
      if (mounted && data) setWishes(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error("Nama dan untaian doa wajib diisi");
      return;
    }
    setSubmitting(true);
    try {
      const saved = await insertWish({
        name: name.trim(),
        title: title.trim() || undefined,
        attendance,
        guests,
        message: message.trim(),
      });
      setWishes((prev) => [saved, ...prev.filter((w) => w.id !== saved.id)]);
      setMessage("");
      toast.success("Terima kasih atas konfirmasi dan untaian doa restu Anda!");
    } catch {
      toast.error("Gagal mengirim ucapan, silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#c59b4c]/35 bg-[#fdfcf9] px-4 py-3 text-sm text-[#163321] outline-none transition-all placeholder:text-[#5a7b64]/60 focus:border-[#c59b4c] focus:ring-2 focus:ring-[#c59b4c]/20 shadow-sm";

  return (
    <section
      id="section-rsvp"
      className="section-shell scroll-mt-6 sm:scroll-mt-8 relative z-10 overflow-hidden bg-[#f7f6f1] py-16 sm:py-20"
    >
      {/* Background Estate Arch Architectural Atmosphere - Clear & Immersive */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={estateArchBg}
          alt=""
          className="h-full w-full object-cover object-center filter saturate-[1.1] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f6f1]/75 via-[#f7f6f1]/45 to-[#f7f6f1]/75" />
      </div>

      <FlyingButterflies count={3} />
      <div className="relative z-10 mx-auto max-w-lg px-4">
        <SectionTitle kicker="Royal Guest Registry" title="Konfirmasi & Doa Restu" />

        <Reveal className="mx-auto w-full max-w-md mt-8">
          {/* RSVP FORM CARD */}
          <form
            onSubmit={submit}
            className="grid gap-4 rounded-[2.25rem] bg-[#fdfcf9]/95 backdrop-blur-md p-6 sm:p-8 shadow-[0_15px_40px_-15px_rgba(22,51,33,0.18)] border border-[#c59b4c]/35"
          >
            <div className="text-center pb-2">
              <p className="font-display italic text-sm text-[#5a7b64]">
                Kehadiran & Doa Anda adalah kehormatan bagi kami
              </p>
            </div>

            {/* Nama Lengkap */}
            <div>
              <label className="block text-[0.62rem] font-semibold tracking-[0.25em] text-[#366848] uppercase mb-1.5">
                Nama Lengkap
              </label>
              <input
                className={inputClass}
                placeholder="Contoh: Bpk. Ahmad Fauzi"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Gelar / Jabatan (Opsional) */}
            <div>
              <label className="block text-[0.62rem] font-semibold tracking-[0.25em] text-[#366848] uppercase mb-1.5">
                Gelar / Instansi (Opsional)
              </label>
              <input
                className={inputClass}
                placeholder="Contoh: S.T. / Rekan Kantor"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Status Kehadiran */}
            <div>
              <label className="block text-[0.62rem] font-semibold tracking-[0.25em] text-[#366848] uppercase mb-2">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-3 gap-2">
                {attendanceOptions.map((opt) => {
                  const active = attendance === opt.value;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setAttendance(opt.value)}
                      className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl border p-3 text-center transition-all cursor-pointer ${
                        active
                          ? "border-[#c59b4c] bg-gradient-to-b from-[#183a23] to-[#102718] text-ivory shadow-md"
                          : "border-[#c59b4c]/30 bg-[#fbf9f4] text-[#163321] hover:border-[#c59b4c]/70 hover:bg-white"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${active ? "text-[#dfba73]" : opt.color}`} />
                      <span className="text-[0.65rem] font-medium tracking-wider uppercase">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Jumlah Tamu */}
            <div>
              <label className="block text-[0.62rem] font-semibold tracking-[0.25em] text-[#366848] uppercase mb-1.5">
                Jumlah Tamu
              </label>
              <select
                className={inputClass}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              >
                <option value={1}>1 Orang</option>
                <option value={2}>2 Orang</option>
                <option value={3}>3 Orang</option>
                <option value={4}>4 Orang</option>
              </select>
            </div>

            {/* Pesan Doa */}
            <div>
              <label className="block text-[0.62rem] font-semibold tracking-[0.25em] text-[#366848] uppercase mb-1.5">
                Untaian Doa & Ucapan
              </label>
              <textarea
                rows={3}
                className={inputClass}
                placeholder="Tuliskan ucapan dan doa restu Anda untuk Gilang & Silva..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 w-full rounded-full border border-[#dfba73]/80 bg-gradient-to-r from-[#173722] via-[#245234] to-[#173722] px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-[#fcfbfa] uppercase shadow-md transition-all hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="h-3.5 w-3.5 text-[#dfba73]" />
              <span>{submitting ? "Mengirimkan Doa..." : "Kirim Konfirmasi & Doa"}</span>
            </motion.button>
          </form>

          {/* GILDED WISHING REGISTRY LIST */}
          <div className="mt-10">
            <div className="flex items-center justify-between px-2 mb-4">
              <h4 className="font-display text-lg text-[#163321] font-medium">
                Untaian Doa Tamu Undangan
              </h4>
              <span className="text-[0.68rem] tracking-wider text-[#366848] bg-[#e8e4d5] px-2.5 py-1 rounded-full font-medium">
                {wishes.length} Doa
              </span>
            </div>

            <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
              {wishes.map((w) => {
                const initial = w.name ? w.name.trim().charAt(0).toUpperCase() : "G";
                const isHadir = w.attendance === "hadir";

                return (
                  <motion.div
                    key={w.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl bg-[#fdfcf9] p-4 sm:p-5 shadow-sm border border-[#c59b4c]/25 relative overflow-hidden"
                  >
                    <div className="flex items-start gap-3">
                      {/* Monogram Avatar */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dfba73]/70 bg-gradient-to-br from-[#1b3a24] to-[#0f2518] text-[#e8d09b] font-display font-medium text-base shadow-sm">
                        {initial}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="font-display text-base font-medium text-[#163321] truncate">
                            {w.name}
                          </p>
                          <span
                            className={`shrink-0 rounded-full px-2 py-0.5 text-[0.6rem] font-medium tracking-wide uppercase ${
                              isHadir
                                ? "bg-[#e2efe6] text-[#245234]"
                                : w.attendance === "tidak"
                                  ? "bg-[#f5e6e6] text-[#783636]"
                                  : "bg-[#f5efe2] text-[#6e5625]"
                            }`}
                          >
                            {w.attendance === "hadir"
                              ? "Hadir"
                              : w.attendance === "tidak"
                                ? "Tidak Hadir"
                                : "Ragu"}
                          </span>
                        </div>

                        <p className="mt-2 text-xs sm:text-sm text-[#163321]/90 leading-relaxed whitespace-pre-wrap break-words">
                          {w.message}
                        </p>

                        <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#c59b4c]/15 text-[0.65rem] text-[#5a7b64]">
                          <span>
                            {new Date(w.createdAt).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>

                          {w.title && (
                            <button
                              type="button"
                              onClick={() => setDetails(w)}
                              className="text-[#366848] underline hover:text-[#163321]"
                            >
                              Detail Gelar
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Modal Detail Pangkat / Gelar (PRD Rule Compliance) */}
        <AnimatePresence>
          {details && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetails(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-xs w-full rounded-2xl bg-[#fdfcf9] p-6 shadow-2xl border border-[#c59b4c]/40 text-center"
              >
                <button
                  type="button"
                  onClick={() => setDetails(null)}
                  className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
                <p className="font-display text-lg text-[#163321]">{details.name}</p>
                <p className="mt-2 text-xs font-semibold tracking-wider text-[#366848] uppercase">
                  {details.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Jumlah Tamu: {details.guests} Orang
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
