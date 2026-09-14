import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import royalGardenBg from "@/assets/royal-garden-bg.webp";
import waxSealGa from "@/assets/wax-seal-ga.webp";
import luxuryButterfly from "@/assets/luxury-butterfly.webp";
import { invitation } from "@/lib/invitation-data";

type CoverProps = {
  guestName?: string | undefined;
  onOpen: () => void;
  onStartEnter?: () => void;
};

// Floating golden stardust particles
const STARDUST_PARTICLES = [
  { id: 1, left: "15%", top: "65%", size: 3, delay: 0.2, duration: 6 },
  { id: 2, left: "28%", top: "45%", size: 4, delay: 1.0, duration: 7 },
  { id: 3, left: "75%", top: "70%", size: 3, delay: 0.5, duration: 6.5 },
  { id: 4, left: "82%", top: "35%", size: 5, delay: 1.8, duration: 8 },
  { id: 5, left: "20%", top: "25%", size: 3, delay: 2.2, duration: 7.5 },
  { id: 6, left: "68%", top: "55%", size: 4, delay: 0.8, duration: 6.8 },
  { id: 7, left: "45%", top: "80%", size: 3, delay: 1.4, duration: 7.2 },
  { id: 8, left: "88%", top: "60%", size: 4, delay: 2.6, duration: 6.2 },
];

export function Cover({ guestName, onOpen, onStartEnter }: CoverProps) {
  const prefersReducedMotion = useReducedMotion();
  const [skipped, setSkipped] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  // Helper function for staggered delay based on skipped or reduced-motion preference
  const d = (seconds: number) => {
    if (prefersReducedMotion || skipped) return 0;
    return seconds;
  };

  const handleOpenInvitation = () => {
    if (isEntering) return;
    setIsEntering(true);
    onStartEnter?.();

    // Cinematic garden entrance duration: 1.5s
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <div
      onClick={() => {
        if (!skipped && !isEntering) setSkipped(true);
      }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#0d1f14] select-none cursor-default"
    >
      {/* ========================================================
          FASE 1: ULTRA-LUXURY ROYAL BOTANICAL CONSERVATORY (0.0s – 2.4s)
          Satu kesatuan karya seni lukisan botani istana utuh
          ======================================================== */}

      {/* 1. Masterpiece Background with Cinematic Camera Push-In / Walkthrough */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={
          isEntering
            ? {
                scale: 1.85,
                y: 60,
                opacity: [1, 1, 0.4],
                filter: "blur(2px)",
              }
            : {
                scale: [1, 1.035, 1],
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }
        }
        transition={
          isEntering
            ? { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
            : {
                opacity: { duration: skipped ? 0.4 : 1.8, ease: "easeOut" },
                scale: { duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
              }
        }
      >
        <img
          src={royalGardenBg}
          alt="Royal Conservatory Botanical Garden"
          width={1080}
          height={1920}
          className="h-full w-full object-cover object-center contrast-[1.04] brightness-[0.98]"
        />

        {/* Delicate Vignette Overlay for Depth & Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a180f]/35 via-transparent to-[#0a180f]/60" />
      </motion.div>

      {/* 2. Volumetric Ethereal Sunbeam Light Glow (Pulses and Bursts during Entrance) */}
      <motion.div
        className="pointer-events-none absolute top-0 inset-x-0 mx-auto z-5 h-[450px] w-64 sm:w-80 bg-gradient-to-b from-amber-200/35 via-amber-100/15 to-transparent blur-3xl"
        initial={{ opacity: 0 }}
        animate={
          isEntering
            ? { opacity: [0.5, 0.95, 0], scale: [1, 1.8, 2.4] }
            : { opacity: [0.35, 0.7, 0.35] }
        }
        transition={
          isEntering
            ? { duration: 1.5, ease: "easeInOut" }
            : { duration: 8, repeat: Infinity, ease: "easeInOut", delay: d(0.4) }
        }
      />

      {/* 3. Sunburst Flare Sweep across the screen when entering the garden */}
      {isEntering && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-t from-transparent via-amber-100/35 to-white/60 mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85, 0] }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      )}

      {/* 4. Floating Golden Stardust Particles */}
      {!prefersReducedMotion && (
        <div className="pointer-events-none absolute inset-0 z-15 overflow-hidden">
          {STARDUST_PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
              }}
              className="absolute rounded-full bg-gradient-to-r from-amber-200 to-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
              initial={{ opacity: 0, y: 0 }}
              animate={
                isEntering
                  ? {
                      opacity: [0.8, 0],
                      scale: [1, 3.5],
                      y: -140,
                    }
                  : {
                      opacity: [0, 0.85, 0],
                      y: [0, -90],
                      x: [0, p.id % 2 === 0 ? 12 : -12, 0],
                    }
              }
              transition={
                isEntering
                  ? { duration: 1.2, ease: "easeOut" }
                  : {
                      duration: p.duration,
                      repeat: Infinity,
                      delay: d(p.delay),
                      ease: "easeInOut",
                    }
              }
            />
          ))}
        </div>
      )}

      {/* 5. Guided Emerald & Gold Foil Butterfly (Clean Transparent, no background box) */}
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute top-20 right-6 sm:right-10 z-25 h-12 w-12 sm:h-14 sm:w-14"
          initial={{ opacity: 0, x: 70, y: -40, scale: 0.5, rotate: 15 }}
          animate={
            isEntering
              ? {
                  x: -60,
                  y: 160,
                  scale: 0.25,
                  opacity: 0,
                }
              : {
                  opacity: 1,
                  x: [0, -14, 10, 0],
                  y: [0, 16, -10, 0],
                  scale: 1,
                  rotate: [15, 8, 12, 15],
                }
          }
          transition={
            isEntering
              ? { duration: 1.1, ease: [0.4, 0, 0.2, 1] }
              : {
                  opacity: { duration: skipped ? 0.3 : 1.6, delay: d(0.6) },
                  scale: { duration: skipped ? 0.3 : 1.6, delay: d(0.6) },
                  x: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: d(2.2) },
                  y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: d(2.2) },
                  rotate: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: d(2.2) },
                }
          }
        >
          <motion.img
            src={luxuryButterfly}
            alt=""
            className="h-full w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
            animate={{ scaleX: [1, 0.35, 1] }}
            transition={{ duration: 0.45, repeat: Infinity }}
          />
        </motion.div>
      )}

      {/* ========================================================
          FASE 2: HAUTE COUTURE LUXURY INVITATION CARD (2.4s – 4.5s)
          Saat klik Buka Undangan, kartu melayang mundur halus
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 45, scale: 0.92 }}
        animate={
          isEntering
            ? {
                opacity: 0,
                scale: 0.86,
                y: 30,
                filter: "blur(10px)",
              }
            : {
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }
        }
        exit={{ opacity: 0, scale: 0.92, y: -20 }}
        transition={
          isEntering
            ? { duration: 0.8, ease: [0.32, 0, 0.67, 0] }
            : {
                duration: skipped ? 0.4 : 1.3,
                delay: d(2.2),
                ease: [0.16, 1, 0.3, 1],
              }
        }
        className="relative z-30 my-auto w-full max-w-[340px] sm:max-w-[360px] rounded-[2.25rem] bg-[#fdfcf9]/95 backdrop-blur-md px-6 py-7 sm:px-7 sm:py-9 text-center"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(197, 155, 76, 0.35), inset 0 0 45px rgba(197, 155, 76, 0.05), 0 25px 60px -15px rgba(10, 24, 15, 0.45)",
        }}
      >
        {/* Inner Hairline Gold Foil Border with Corner Filigree */}
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

        {/* 1. EMBOSSED REAL 3D WAX SEAL MONOGRAM ("G & A") */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: skipped ? 0.3 : 0.85,
            delay: d(2.7),
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center"
        >
          <img
            src={waxSealGa}
            alt="Wax Seal Monogram Gilang & Silva"
            width={400}
            height={400}
            className="h-full w-full object-contain drop-shadow-[0_6px_16px_rgba(10,24,15,0.4)]"
          />
        </motion.div>

        {/* 2. SUBTITLE WITH EXTREME LETTER-SPACING & GOLD DIVIDER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: skipped ? 0.3 : 0.7,
            delay: d(3.0),
            ease: "easeOut",
          }}
        >
          <p className="font-body text-[0.58rem] sm:text-[0.62rem] tracking-[0.44em] text-[#366848] uppercase font-semibold">
            The Wedding Celebration Of
          </p>
          <div className="mx-auto my-2.5 flex items-center justify-center gap-3">
            <div className="h-px w-8 sm:w-10 bg-gradient-to-r from-transparent to-[#c59b4c]/75" />
            <span className="text-[#c59b4c] text-[0.55rem] tracking-widest">✦</span>
            <div className="h-px w-8 sm:w-10 bg-gradient-to-l from-transparent to-[#c59b4c]/75" />
          </div>
        </motion.div>

        {/* 3. EDITORIAL NAMES "Gilang & Ayunda" — Unfolds with crystal clarity */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: skipped ? 0.3 : 0.85,
            delay: d(3.3),
            ease: "easeOut",
          }}
        >
          <h1 className="font-display text-[2.4rem] sm:text-[2.75rem] leading-[1.08] font-normal tracking-tight text-[#163321]">
            {invitation.groom.short}
            <span className="font-script mx-2 text-3xl sm:text-4xl text-[#c59b4c] font-normal italic">
              &amp;
            </span>
            {invitation.bride.short}
          </h1>
          <p className="mt-2 font-display text-[0.68rem] tracking-[0.28em] text-[#366848]/90 uppercase font-medium">
            Sabtu, 12 Juni 2027 • Bogor
          </p>
        </motion.div>

        {/* 4. FROSTED VELLUM PLAQUE FOR RECIPIENT ("Kepada Yth.") */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: skipped ? 0.3 : 0.75,
            delay: d(3.6),
            ease: "easeOut",
          }}
          className="mt-5 rounded-2xl border border-[#c59b4c]/25 bg-white/80 p-3.5 sm:p-4 backdrop-blur-sm shadow-[0_4px_16px_-4px_rgba(197,155,76,0.12)]"
        >
          <p className="font-display italic text-xs text-[#5a7b64]">Special Invitation For:</p>
          <p className="mt-0.5 font-display text-base sm:text-lg font-medium break-words text-[#163321]">
            {guestName ?? "Tamu Undangan"}
          </p>
          <div className="mx-auto mt-1.5 h-px w-10 bg-[#c59b4c]/35" />
        </motion.div>

        {/* 5. GILDED JEWEL BUTTON (CLEAN & ULTRA LUXURIOUS) */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: skipped ? 0.3 : 0.8,
            delay: d(3.9),
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-6"
        >
          <motion.button
            type="button"
            disabled={isEntering}
            onClick={(e) => {
              e.stopPropagation();
              handleOpenInvitation();
            }}
            whileHover={isEntering ? undefined : { scale: 1.025 }}
            whileTap={isEntering ? undefined : { scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="relative w-full overflow-hidden rounded-full border border-[#dfba73]/80 bg-gradient-to-r from-[#14331e] via-[#204d2e] to-[#14331e] px-6 py-3.5 text-xs font-medium tracking-[0.24em] text-[#fcfbfa] uppercase shadow-[0_10px_28px_-5px_rgba(10,24,15,0.55)] transition-all hover:shadow-[0_12px_32px_-4px_rgba(10,24,15,0.65)] cursor-pointer"
          >
            {/* Shimmer light beam moving across button */}
            <motion.div
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={prefersReducedMotion ? undefined : { translateX: ["-100%", "200%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.5,
              }}
            />
            <span className="relative z-10 drop-shadow-sm font-semibold tracking-[0.28em]">
              {isEntering ? "Memasuki Taman..." : "Buka Undangan"}
            </span>
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: d(4.2) }}
          className="mt-3.5 text-[0.6rem] tracking-wider text-muted-foreground/80 italic"
        >
          *Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </motion.p>
      </motion.div>
    </div>
  );
}
