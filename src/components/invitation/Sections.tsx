import { useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Calendar,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Instagram,
  MapPin,
  Pause,
  Play,
  Sparkles,
  X,
  ZoomIn,
} from "lucide-react";

import { downloadIcsCalendar } from "@/lib/calendar";
import groomImg from "@/assets/groom.jpg";
import brideImg from "@/assets/bride.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import royalGardenBg from "@/assets/royal-garden-bg.webp";
import estateArchBg from "@/assets/estate-arch-bg.webp";
import waxSealGa from "@/assets/wax-seal-ga.webp";
import luxuryButterfly from "@/assets/luxury-butterfly.webp";
import { invitation } from "@/lib/invitation-data";
import {
  Reveal,
  RevealStagger,
  SectionTitle,
  StaggerItem,
  TimelineContent,
  TimelineItem,
  TimelineNode,
} from "./Reveal";
import { FlyingButterflies } from "./Ambience";

/* =========================================================================
   PAGE 2 — HOLY VERSE (ROYAL CALLIGRAPHY PARCHMENT)
   ========================================================================= */
export function VerseSection() {
  return (
    <section className="section-shell relative z-10 overflow-hidden bg-[#0c2214] py-16 sm:py-20 text-ivory">
      {/* Background Royal Conservatory Botanical Atmosphere - Clear & Luminous */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={royalGardenBg}
          alt=""
          className="h-full w-full object-cover object-center filter saturate-[1.1] scale-105 opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07190e]/70 via-[#07190e]/45 to-[#07190e]/75" />
      </div>

      <Reveal className="relative z-10 mx-auto max-w-md px-4">
        <div
          className="relative rounded-[2.25rem] bg-[#fdfcf9] p-7 sm:p-9 text-center"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(197, 155, 76, 0.45), inset 0 0 45px rgba(197, 155, 76, 0.05), 0 25px 50px -15px rgba(0, 0, 0, 0.45)",
          }}
        >
          {/* Inner Hairline Gold Border with Corner Cross Filigree */}
          <div className="pointer-events-none absolute inset-3 rounded-[1.85rem] border border-[#c59b4c]/35">
            <span className="absolute -top-1.5 -left-1.5 text-[0.62rem] text-[#c59b4c]/70 leading-none">
              ✦
            </span>
            <span className="absolute -top-1.5 -right-1.5 text-[0.62rem] text-[#c59b4c]/70 leading-none">
              ✦
            </span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[0.62rem] text-[#c59b4c]/70 leading-none">
              ✦
            </span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[0.62rem] text-[#c59b4c]/70 leading-none">
              ✦
            </span>
          </div>

          {/* Shimmering Gold Calligraphy */}
          <p className="font-script text-3xl sm:text-4xl text-[#c59b4c] drop-shadow-sm">
            Bismillahirrahmanirrahim
          </p>

          {/* Gold Hairline Divider */}
          <div className="mx-auto my-5 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c59b4c]/70" />
            <span className="text-[#c59b4c] text-[0.6rem]">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c59b4c]/70" />
          </div>

          {/* Holy Verse Text */}
          <p className="font-display italic text-base sm:text-lg leading-relaxed break-words text-[#163321]/90">
            &ldquo;{invitation.verse.text}&rdquo;
          </p>

          {/* Source Badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#c59b4c]/30 bg-[#f8f6f0] px-4 py-1.5 shadow-sm">
            <p className="font-body text-[0.65rem] tracking-[0.3em] text-[#245234] uppercase font-semibold">
              {invitation.verse.source}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* =========================================================================
   PAGE 3 — BRIDE & GROOM PROFILE (NEOCLASSICAL MARBLE ARCH)
   ========================================================================= */
function Profile({
  image,
  name,
  role,
  parents,
  instagram,
  delay = 0,
}: {
  image: string;
  name: string;
  role: string;
  parents: string;
  instagram: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="text-center">
      <div className="relative mx-auto w-56 sm:w-64 pb-3">
        {/* Soft Ethereal Gold Halo behind Arch */}
        <div className="absolute inset-x-2 top-4 bottom-2 rounded-[8rem] bg-gradient-to-b from-[#dfba73]/25 via-[#366848]/15 to-transparent blur-xl" />

        {/* Neoclassical Marble Arch with Gold Inset Molding */}
        <div
          className="relative overflow-hidden rounded-t-full rounded-b-[2.25rem] bg-[#fdfcf9] p-2"
          style={{
            boxShadow:
              "inset 0 0 0 1.5px rgba(197, 155, 76, 0.45), 0 20px 45px -12px rgba(22, 51, 33, 0.25)",
          }}
        >
          {/* Inner Hairline Arch Inset */}
          <div className="overflow-hidden rounded-t-full rounded-b-[1.85rem] border border-[#c59b4c]/35">
            <img
              src={image}
              alt={name}
              width={768}
              height={1024}
              loading="lazy"
              className="h-72 sm:h-80 w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Stepped Architectural Pedestal */}
        <div className="relative mx-auto mt-2 h-1.5 w-36 sm:w-40 rounded-full bg-gradient-to-r from-transparent via-[#c59b4c]/50 to-transparent" />
        <div className="relative mx-auto mt-0.5 h-0.5 w-24 sm:w-28 rounded-full bg-gradient-to-r from-transparent via-[#c59b4c]/30 to-transparent" />
      </div>

      {/* Role Kicker */}
      <p className="mt-4 font-body text-[0.62rem] tracking-[0.38em] text-[#366848] uppercase font-semibold">
        {role}
      </p>

      {/* Couple Name */}
      <h3 className="mt-1 font-display text-2xl sm:text-3xl text-[#163321] font-medium tracking-tight">
        {name}
      </h3>

      {/* Parents */}
      <p className="mt-2 text-xs sm:text-sm leading-relaxed break-words text-[#5a7b64] max-w-xs mx-auto">
        {parents}
      </p>

      {/* Gilded Frosted Instagram Badge */}
      <motion.a
        href={`https://instagram.com/${instagram.replace("@", "")}`}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#c59b4c]/35 bg-[#fdfcf9] px-4 py-1.5 text-[0.68rem] font-medium tracking-[0.2em] text-[#245234] shadow-sm transition-colors hover:border-[#c59b4c] hover:bg-[#f5f1e6]"
      >
        <Instagram className="h-3 w-3 text-[#c59b4c]" />
        <span>{instagram}</span>
      </motion.a>
    </Reveal>
  );
}

export function CoupleSection() {
  return (
    <section
      id="section-couple"
      className="section-shell scroll-mt-6 sm:scroll-mt-8 relative z-10 overflow-hidden bg-[#f7f6f1] py-16 sm:py-20"
    >
      {/* Background Estate Arch Atmosphere - Clear & Architectural */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={estateArchBg}
          alt=""
          className="h-full w-full object-cover object-center filter saturate-[1.05] opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f6f1]/75 via-[#f7f6f1]/50 to-[#f7f6f1]/75" />
      </div>

      <FlyingButterflies count={3} />
      <div className="relative z-10 mx-auto max-w-lg px-4">
        <SectionTitle kicker="The Royal Couple" title="Kedua Mempelai" />

        <div className="mx-auto grid max-w-md gap-12 mt-8">
          {/* Mempelai Pria */}
          <Profile
            image={groomImg}
            role="Mempelai Pria"
            name={invitation.groom.name}
            parents={invitation.groom.parents}
            instagram={invitation.groom.instagram}
            delay={0}
          />

          {/* Medallion Monogram G&S Divider with Facing Royal Butterflies */}
          <Reveal className="relative my-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-3 w-full max-w-sm">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c59b4c]/50 to-[#c59b4c]" />

              {/* Left Facing Butterfly */}
              <div className="h-7 w-7 shrink-0 -scale-x-100 opacity-90 filter drop-shadow-sm">
                <img src={luxuryButterfly} alt="" className="h-full w-full object-contain" />
              </div>

              {/* 3D Wax Seal Monogram G&S */}
              <div className="relative h-16 w-16 shrink-0 transition-transform duration-500 hover:scale-110">
                <img
                  src={waxSealGa}
                  alt="Monogram G&S"
                  width={400}
                  height={400}
                  className="h-full w-full object-contain drop-shadow-[0_8px_20px_rgba(22,51,33,0.3)]"
                />
              </div>

              {/* Right Facing Butterfly */}
              <div className="h-7 w-7 shrink-0 opacity-90 filter drop-shadow-sm">
                <img src={luxuryButterfly} alt="" className="h-full w-full object-contain" />
              </div>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c59b4c]/50 to-[#c59b4c]" />
            </div>
            <p className="mt-2 font-display italic text-xs text-[#5a7b64]">
              Dua hati dipersatukan dalam cinta yang abadi
            </p>
          </Reveal>

          {/* Mempelai Wanita */}
          <Profile
            image={brideImg}
            role="Mempelai Wanita"
            name={invitation.bride.name}
            parents={invitation.bride.parents}
            instagram={invitation.bride.instagram}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   PAGE 4 — LOVE STORY (WINDING GOLDEN THREAD TIMELINE)
   ========================================================================= */
export function StorySection() {
  return (
    <section
      id="section-story"
      className="section-shell scroll-mt-6 sm:scroll-mt-8 relative z-10 overflow-hidden bg-[#07170e] text-ivory py-16 sm:py-20"
    >
      {/* Background Estate Archway Night Atmosphere - Clear Visibility */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={estateArchBg}
          alt=""
          className="h-full w-full object-cover object-center filter saturate-[1.1] scale-105 opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07190e]/75 via-[#07190e]/45 to-[#07190e]/75" />
      </div>

      <div className="relative z-10">
        <Reveal className="mb-12 text-center px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfba73]/40 bg-[#163822]/60 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#dfba73] animate-pulse" />
            <p className="text-[0.62rem] tracking-[0.38em] text-[#e8d09b] uppercase font-semibold">
              Our Journey
            </p>
          </div>
          <h2 className="mt-3 font-display text-3xl font-normal text-ivory sm:text-4xl tracking-tight">
            Kisah Kasih Kami
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#dfba73]/60" />
            <span className="text-[#dfba73] text-[0.55rem]">✦</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#dfba73]/60" />
          </div>
        </Reveal>

        <div className="relative mx-auto max-w-md pl-12 pr-4">
          {/* Winding Golden Thread Line */}
          <div className="absolute top-3 bottom-3 left-4 w-0.5 bg-gradient-to-b from-[#dfba73] via-[#c59b4c] to-[#dfba73] shadow-[0_0_8px_rgba(223,186,115,0.4)]" />

          {invitation.story.map((item) => (
            <TimelineItem key={item.year} className="relative mb-10 last:mb-0">
              {/* 3D Emerald Gemstone / Wax Medallion Node */}
              <TimelineNode className="absolute top-2 -left-[2.55rem] flex h-6 w-6 items-center justify-center rounded-full border border-[#dfba73] bg-gradient-to-br from-[#245234] to-[#102719] shadow-[0_0_12px_rgba(223,186,115,0.4)]">
                <span className="h-2 w-2 rounded-full bg-[#dfba73]" />
              </TimelineNode>

              <TimelineContent>
                <div
                  className="rounded-2xl border border-[#c59b4c]/30 bg-[#173a23]/80 p-5 backdrop-blur-md"
                  style={{
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.45)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-display text-2xl text-[#e8d09b] font-medium">{item.year}</p>
                    <span className="text-xs text-[#c59b4c]/60">✦</span>
                  </div>
                  <h3 className="mt-1 font-display text-lg text-ivory font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed break-words text-ivory/80">
                    {item.text}
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   PAGE 5 — EVENT DETAILS (SACRED AKAD & ROYAL RECEPTION CARDS)
   ========================================================================= */
export function EventsSection() {
  return (
    <section
      id="section-events"
      className="section-shell scroll-mt-6 sm:scroll-mt-8 relative z-10 overflow-hidden bg-[#f7f6f1] py-16 sm:py-20"
    >
      {/* Background Royal Garden Atmosphere - Clear Visibility */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={royalGardenBg}
          alt=""
          className="h-full w-full object-cover object-center filter saturate-[1.1] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f6f1]/75 via-[#f7f6f1]/45 to-[#f7f6f1]/75" />
      </div>

      <FlyingButterflies count={3} />
      <div className="relative z-10 mx-auto max-w-lg px-4">
        <SectionTitle kicker="Save The Date" title="Rangkaian Acara" />

        <div className="relative mx-auto grid max-w-md gap-7 mt-8">
          {invitation.events.map((e, i) => {
            const isAkad = i === 0;

            return (
              <Reveal key={e.title} delay={i * 0.1}>
                {isAkad ? (
                  /* KARTU AKAD NIKAH — SACRED ALABASTER & CHAMPAGNE GOLD */
                  <div
                    className="relative overflow-hidden rounded-[2.25rem] bg-[#fdfcf9] p-7 sm:p-8 text-center"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px rgba(197, 155, 76, 0.4), 0 20px 45px -15px rgba(22, 51, 33, 0.18)",
                    }}
                  >
                    {/* Inner Hairline Border */}
                    <div className="pointer-events-none absolute inset-3 rounded-[1.85rem] border border-[#c59b4c]/35">
                      <span className="absolute -top-1.5 -left-1.5 text-[0.6rem] text-[#c59b4c]/70 leading-none">
                        ✦
                      </span>
                      <span className="absolute -top-1.5 -right-1.5 text-[0.6rem] text-[#c59b4c]/70 leading-none">
                        ✦
                      </span>
                      <span className="absolute -bottom-1.5 -left-1.5 text-[0.6rem] text-[#c59b4c]/70 leading-none">
                        ✦
                      </span>
                      <span className="absolute -bottom-1.5 -right-1.5 text-[0.6rem] text-[#c59b4c]/70 leading-none">
                        ✦
                      </span>
                    </div>

                    <p className="font-body text-[0.62rem] tracking-[0.38em] text-[#366848] uppercase font-semibold">
                      The Sacred Vow
                    </p>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl text-[#163321] font-medium">
                      {e.title}
                    </h3>

                    <div className="mx-auto my-4 flex items-center justify-center gap-3">
                      <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#c59b4c]/70" />
                      <span className="text-[#c59b4c] text-[0.55rem]">✦</span>
                      <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#c59b4c]/70" />
                    </div>

                    <div className="space-y-2 text-sm text-[#366848]">
                      <p className="flex items-center justify-center gap-2">
                        <CalendarDays className="h-4 w-4 text-[#c59b4c]" /> {e.date}
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <Clock className="h-4 w-4 text-[#c59b4c]" /> {e.time}
                      </p>
                    </div>

                    <p className="mt-5 font-display text-xl text-[#163321] font-medium">
                      {e.place}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm break-words text-[#5a7b64]">
                      {e.address}
                    </p>

                    <motion.a
                      href={e.maps}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#dfba73]/80 bg-gradient-to-r from-[#173722] via-[#245234] to-[#173722] px-6 py-3 text-xs font-medium tracking-[0.2em] text-[#fcfbfa] uppercase shadow-[0_8px_20px_rgba(23,55,34,0.35)] transition-all hover:shadow-[0_10px_25px_rgba(23,55,34,0.45)]"
                    >
                      <MapPin className="h-3.5 w-3.5 text-[#dfba73]" /> Buka Google Maps
                    </motion.a>
                  </div>
                ) : (
                  /* KARTU RESEPSI — IMPERIAL FOREST GREEN VELVET */
                  <div
                    className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-[#183924] to-[#0f2518] p-7 sm:p-8 text-center text-ivory"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px rgba(223, 186, 115, 0.5), 0 24px 50px -15px rgba(10, 24, 15, 0.5)",
                    }}
                  >
                    {/* Inner Gold Foil Border */}
                    <div className="pointer-events-none absolute inset-3 rounded-[1.85rem] border border-[#dfba73]/40">
                      <span className="absolute -top-1.5 -left-1.5 text-[0.6rem] text-[#dfba73] leading-none">
                        ✦
                      </span>
                      <span className="absolute -top-1.5 -right-1.5 text-[0.6rem] text-[#dfba73] leading-none">
                        ✦
                      </span>
                      <span className="absolute -bottom-1.5 -left-1.5 text-[0.6rem] text-[#dfba73] leading-none">
                        ✦
                      </span>
                      <span className="absolute -bottom-1.5 -right-1.5 text-[0.6rem] text-[#dfba73] leading-none">
                        ✦
                      </span>
                    </div>

                    <p className="font-body text-[0.62rem] tracking-[0.38em] text-[#e8d09b] uppercase font-semibold">
                      The Wedding Celebration
                    </p>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl text-ivory font-medium">
                      {e.title}
                    </h3>

                    <div className="mx-auto my-4 flex items-center justify-center gap-3">
                      <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#dfba73]/70" />
                      <span className="text-[#dfba73] text-[0.55rem]">✦</span>
                      <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#dfba73]/70" />
                    </div>

                    <div className="space-y-2 text-sm text-ivory/85">
                      <p className="flex items-center justify-center gap-2">
                        <CalendarDays className="h-4 w-4 text-[#dfba73]" /> {e.date}
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <Clock className="h-4 w-4 text-[#dfba73]" /> {e.time}
                      </p>
                    </div>

                    <p className="mt-5 font-display text-xl text-[#e8d09b] font-medium">
                      {e.place}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm break-words text-ivory/75">{e.address}</p>

                    <motion.a
                      href={e.maps}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#dfba73] bg-[#c59b4c] px-6 py-3 text-xs font-medium tracking-[0.2em] text-[#0f2518] uppercase shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all hover:bg-[#dfba73]"
                    >
                      <MapPin className="h-3.5 w-3.5" /> Buka Google Maps
                    </motion.a>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Simpan ke Kalender CTA */}
        <Reveal delay={0.2} className="mt-8 text-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={downloadIcsCalendar}
            className="inline-flex items-center gap-2 rounded-full border border-[#c59b4c]/60 bg-[#fdfcf9] px-7 py-3.5 text-xs font-medium tracking-[0.2em] text-[#163321] uppercase shadow-[0_6px_20px_rgba(197,155,76,0.2)] transition-all hover:bg-[#f5f1e6]"
          >
            <Calendar className="h-4 w-4 text-[#c59b4c]" /> Simpan ke Kalender (.ics)
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   PAGE 6 — COUNTDOWN WITH ROYAL CLOCKWORK DIALS
   ========================================================================= */
function useCountdown(target: string) {
  const [left, setLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      setLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return left;
}

function CountdownDigitCard({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, "0");
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative rounded-2xl bg-gradient-to-b from-[#fdfcf9] to-[#f7f4ec] px-1 py-4 sm:py-5 text-center"
      style={{
        boxShadow:
          "inset 0 0 0 1px rgba(197, 155, 76, 0.4), 0 8px 20px -6px rgba(197, 155, 76, 0.22)",
      }}
    >
      <div className="relative h-9 sm:h-10 overflow-hidden font-display text-3xl sm:text-4xl text-[#163321] tabular-nums flex items-center justify-center font-medium">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={formatted}
            initial={prefersReducedMotion ? { opacity: 0 } : { y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { y: 16, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-block"
          >
            {formatted}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="mt-1 text-[0.6rem] sm:text-[0.65rem] tracking-[0.24em] text-[#366848] uppercase font-semibold">
        {label}
      </p>
    </div>
  );
}

export function CountdownSection() {
  const left = useCountdown(invitation.weddingDate);

  const items = [
    { label: "Hari", value: left.days },
    { label: "Jam", value: left.hours },
    { label: "Menit", value: left.minutes },
    { label: "Detik", value: left.seconds },
  ];

  return (
    <section className="section-shell relative z-10 overflow-hidden bg-[#f4f2ea] py-16 sm:py-20">
      {/* Background Atmosphere - Clear & Architectural */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={estateArchBg}
          alt=""
          className="h-full w-full object-cover object-center filter saturate-[1.0] opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f2ea]/75 via-[#f4f2ea]/45 to-[#f4f2ea]/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-4">
        <SectionTitle kicker="Counting Down" title="Menuju Hari Bahagia" />
        <Reveal className="relative mx-auto grid grid-cols-4 gap-2.5 sm:gap-3 mt-8">
          {items.map((it) => (
            <CountdownDigitCard key={it.label} value={it.value} label={it.label} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   PAGE 7 — ROYAL LOOKBOOK GALLERY (INFINITE SMOOTH AUTO-SLIDING MARQUEE)
   ========================================================================= */
type GalleryItem = {
  src: string;
  title: string;
  caption: string;
  tag: string;
  w: number;
  h: number;
  frameClass: string;
};

const royalGalleryItems: GalleryItem[] = [
  {
    src: gallery1,
    title: "The Glasshouse Romance",
    caption:
      "Di antara rimbun dedaunan rumah kaca, dua jiwa berjanji untuk saling mengasihi seumur hidup.",
    tag: "I",
    w: 1024,
    h: 1280,
    frameClass: "rounded-t-[5.5rem] rounded-b-2xl",
  },
  {
    src: gallery2,
    title: "Golden Hour Glow",
    caption: "Cahaya mentari sore menghangatkan langkah kami yang bersanding mesra.",
    tag: "II",
    w: 1024,
    h: 768,
    frameClass: "rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-xl rounded-bl-xl",
  },
  {
    src: gallery3,
    title: "Timeless Smile",
    caption: "Tawa dan tatapan tulus yang selalu menjadi rumah ternyaman bagi hati.",
    tag: "III",
    w: 1024,
    h: 1024,
    frameClass: "rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-xl rounded-br-xl",
  },
  {
    src: gallery4,
    title: "Rose Petal Whispers",
    caption: "Membisikkan doa dan harapan suci diiringi harum semerbak kelopak mawar.",
    tag: "IV",
    w: 1024,
    h: 1400,
    frameClass: "rounded-[2.25rem]",
  },
  {
    src: gallery5,
    title: "The Royal Conservatory",
    caption:
      "Berpegangan tangan di bawah kanopi botani megah, menyongsong hari esok yang gemilang.",
    tag: "V",
    w: 1024,
    h: 1365,
    frameClass: "rounded-[3rem]",
  },
  {
    src: gallery6,
    title: "Grace in Kebaya",
    caption: "Keanggunan busana kebaya berpadu dengan pesona bunga anggrek yang abadi.",
    tag: "VI",
    w: 1024,
    h: 1365,
    frameClass: "rounded-[3rem]",
  },
  {
    src: gallery7,
    title: "The Colonnade Walk",
    caption: "Menyusuri jalan setapak berpilar batu berbalut mawar putih dan palem tropis.",
    tag: "VII",
    w: 1024,
    h: 1365,
    frameClass: "rounded-t-[5.5rem] rounded-b-xl",
  },
  {
    src: gallery8,
    title: "The Sacred Bonds",
    caption: "Dua lingkaran emas dan zamrud abadi sebagai lambang ikatan suci tak terpisahkan.",
    tag: "VIII",
    w: 1024,
    h: 1365,
    frameClass: "rounded-t-xl rounded-b-[4rem]",
  },
];

const marqueeItems = [...royalGalleryItems, ...royalGalleryItems];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % royalGalleryItems.length : null));
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + royalGalleryItems.length) % royalGalleryItems.length : null,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  const activeItem = selectedIndex !== null ? royalGalleryItems[selectedIndex] : null;

  return (
    <section
      id="section-gallery"
      className="section-shell scroll-mt-6 sm:scroll-mt-8 relative z-10 overflow-hidden bg-background/90 py-16 sm:py-20"
    >
      {/* Background Estate Arch Atmosphere - Clear & Luminous */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={estateArchBg}
          alt=""
          className="h-full w-full object-cover object-center filter saturate-[1.1] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      </div>

      <FlyingButterflies count={3} />
      <div className="relative z-10">
        <div className="mx-auto max-w-lg px-4 text-center">
          <SectionTitle kicker="Royal Lookbook Marquee" title="Galeri Prewedding" />
          <p className="mx-auto mt-3 max-w-xs text-xs leading-relaxed text-[#5a7b64]">
            Potret harmoni cinta Gilang &amp; Silva yang terabadikan dalam keindahan taman botani
            kerajaan.
          </p>
        </div>

        {/* INFINITE SMOOTH AUTO-SLIDING CAROUSEL TRACK */}
        <div className="relative mt-8 sm:mt-10 overflow-hidden w-full py-4">
          {/* Subtle edge blur vignettes */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-20" />

          {/* Marquee Track with CSS hardware-accelerated continuous glide */}
          <div
            className="flex w-max space-x-4 cursor-pointer select-none"
            style={{
              animation: isAutoPlay ? "royalMarquee 34s linear infinite" : "none",
              willChange: "transform",
            }}
          >
            {marqueeItems.map((item, idx) => {
              const realIndex = idx % royalGalleryItems.length;

              return (
                <div
                  key={`${item.tag}-${idx}`}
                  onClick={() => setSelectedIndex(realIndex)}
                  className="w-[17rem] sm:w-[19rem] shrink-0 transition-transform duration-300 hover:scale-[1.03] px-1"
                >
                  <div
                    className={`group relative overflow-hidden bg-[#fdfcf9] p-2.5 shadow-[0_12px_30px_-10px_rgba(22,51,33,0.25)] border border-[#c59b4c]/40 hover:border-[#dfba73] hover:shadow-2xl transition-all duration-300 ${item.frameClass}`}
                  >
                    <div
                      className={`relative overflow-hidden aspect-[3/4] w-full ${item.frameClass}`}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        width={item.w}
                        height={item.h}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />

                      {/* Golden Tag Badge */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full border border-[#dfba73]/80 bg-[#163822]/85 px-3 py-1 text-[0.62rem] font-medium tracking-[0.2em] text-[#e8d09b] backdrop-blur-md shadow-sm">
                        <span className="text-[#dfba73]">✦</span>
                        <span>{item.tag}</span>
                      </div>

                      {/* Hover Overlay with Title & Zoom */}
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-[#0a1e12]/90 via-[#0a1e12]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfba73]/60 bg-[#dfba73] text-[#0a1e12] shadow-lg mb-2">
                          <ZoomIn className="h-5 w-5" />
                        </span>
                        <p className="font-display text-base text-ivory font-medium tracking-wide drop-shadow-sm text-center">
                          {item.title}
                        </p>
                        <p className="text-[0.62rem] text-[#dfba73] tracking-[0.18em] uppercase">
                          Sentuh untuk Memperbesar
                        </p>
                      </div>
                    </div>

                    <div className="mt-2.5 pb-1 text-center">
                      <p className="font-display text-sm text-[#163321] font-medium">
                        {item.title}
                      </p>
                      <p className="text-[0.65rem] italic text-[#5a7b64]">
                        {item.tag} • Royal Collection
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CONTROLS & DIRECT SELECTION STRIP */}
        <div className="mx-auto max-w-md px-4 mt-6">
          {/* Play/Pause Auto-Slide Toggle */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsAutoPlay((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[#c59b4c]/40 bg-[#fdfcf9] px-4 py-1.5 text-[0.68rem] font-medium tracking-[0.18em] text-[#245234] uppercase shadow-sm hover:bg-[#f7f5ee] hover:border-[#c59b4c] transition-all cursor-pointer"
            >
              {isAutoPlay ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-[#c59b4c]" />
                  <span>Jeda Slide</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-[#c59b4c]" />
                  <span>Putar Slide</span>
                </>
              )}
            </button>

            <span className="text-xs text-[#5a7b64]/60">•</span>

            <p className="text-[0.65rem] text-[#5a7b64] italic">Geser otomatis berulang halus</p>
          </div>

          {/* Roman Numeral Quick Jump Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
            {royalGalleryItems.map((it, i) => (
              <button
                key={it.tag}
                type="button"
                onClick={() => setSelectedIndex(i)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c59b4c]/30 bg-[#fdfcf9] text-[0.65rem] font-semibold text-[#163321] shadow-sm hover:border-[#c59b4c] hover:bg-[#163822] hover:text-[#e8d09b] transition-all cursor-pointer"
                title={it.title}
              >
                {it.tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ROYAL CINEMA LIGHTBOX SUITE */}
      <AnimatePresence>
        {activeItem && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-[2rem] overflow-hidden bg-[#fdfcf9] p-3 sm:p-4 shadow-2xl border border-[#dfba73]/70 text-center"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#163822]/80 text-[#fcfbfa] hover:bg-[#163822] transition-colors cursor-pointer border border-[#dfba73]/40"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Counter Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-[#163822]/80 px-3 py-1 text-[0.62rem] font-medium tracking-[0.2em] text-[#e8d09b] border border-[#dfba73]/40">
                <span>{String(selectedIndex + 1).padStart(2, "0")}</span>
                <span className="text-[#dfba73]/60">/</span>
                <span>{String(royalGalleryItems.length).padStart(2, "0")}</span>
              </div>

              {/* Image Frame with Navigation Arrows */}
              <div className="relative overflow-hidden rounded-2xl bg-black/5 mt-8 sm:mt-10">
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="w-full h-auto max-h-[65vh] object-contain rounded-xl mx-auto"
                />

                {/* Prev Arrow */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex(
                      (selectedIndex - 1 + royalGalleryItems.length) % royalGalleryItems.length,
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#163822] shadow-md hover:bg-white transition-all cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Next Arrow */}
                <button
                  type="button"
                  onClick={() => setSelectedIndex((selectedIndex + 1) % royalGalleryItems.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#163822] shadow-md hover:bg-white transition-all cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Title & Romantic Poetic Caption */}
              <div className="mt-4 px-2 pb-2">
                <p className="font-display text-xl sm:text-2xl text-[#163321] font-medium">
                  {activeItem.title}
                </p>
                <div className="mx-auto my-2 flex items-center justify-center gap-2">
                  <div className="h-px w-8 bg-[#c59b4c]/40" />
                  <span className="text-[#c59b4c] text-[0.55rem]">✦</span>
                  <div className="h-px w-8 bg-[#c59b4c]/40" />
                </div>
                <p className="text-xs sm:text-sm italic leading-relaxed text-[#5a7b64] max-w-sm mx-auto">
                  &ldquo;{activeItem.caption}&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Keyframes for Marquee */}
      <style>{`
        @keyframes royalMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </section>
  );
}
