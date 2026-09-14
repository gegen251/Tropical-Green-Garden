-- ============================================================
-- Verdant Whispers Invites — Supabase Database Schema
-- Tabel: wishes (Buku Tamu, Doa & Konfirmasi Kehadiran)
-- ============================================================

create table if not exists public.wishes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text,
  attendance text not null check (attendance in ('hadir', 'tidak', 'ragu')),
  guests integer not null default 1,
  message text not null,
  created_at bigint not null default (extract(epoch from now()) * 1000)::bigint
);

-- Index untuk mempercepat query berdasarkan waktu pembuatan (terbaru di atas)
create index if not exists idx_wishes_created_at on public.wishes (created_at desc);

-- Aktifkan Row Level Security (RLS)
alter table public.wishes enable row level security;

-- Policy 1: Publik dapat membaca seluruh ucapan & konfirmasi kehadiran
create policy "Allow public read wishes"
  on public.wishes
  for select
  using (true);

-- Policy 2: Publik dapat mengirimkan ucapan baru
create policy "Allow public insert wishes"
  on public.wishes
  for insert
  with check (true);
