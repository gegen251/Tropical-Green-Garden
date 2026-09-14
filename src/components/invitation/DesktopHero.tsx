import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CalendarDays, MapPin } from "lucide-react";

import estateArchBg from "@/assets/estate-arch-bg.webp";
import luxuryButterfly from "@/assets/luxury-butterfly.webp";
import { invitation } from "@/lib/invitation-data";

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

export function DesktopHero() {
  const left = useCountdown(invitation.weddingDate);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-forest flex flex-col justify-between p-8 xl:p-12 2xl:p-16 text-ivory select-none">
      {/* Background with ultra-slow breathing effect */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={estateArchBg}
          alt="Royal Estate Garden"
          width={1080}
          height={1920}
          className="h-full w-full object-cover object-center brightness-[0.88] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/40 to-forest/70" />
      </motion.div>

      {/* Sunbeams and light leakage */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        animate={{ opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -top-1/4 left-1/4 h-[150%] w-36 rotate-12 bg-gradient-to-b from-ivory/70 via-ivory/20 to-transparent blur-3xl" />
        <div className="absolute -top-1/4 right-1/4 h-[150%] w-48 -rotate-12 bg-gradient-to-b from-ivory/60 via-ivory/15 to-transparent blur-3xl" />
      </motion.div>

      {/* Floating Butterflies on Hero */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute top-1/4 left-16 z-20 h-12 w-12"
            animate={{
              x: [0, 25, -15, 0],
              y: [0, -30, 15, 0],
              rotate: [-5, 8, -5],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src={luxuryButterfly}
              alt=""
              className="h-full w-full object-contain drop-shadow-lg"
              animate={{ scaleX: [1, 0.35, 1] }}
              transition={{ duration: 0.45, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute bottom-1/3 right-20 z-20 h-10 w-10"
            animate={{
              x: [0, -35, 20, 0],
              y: [0, 25, -20, 0],
              rotate: [8, -6, 8],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <motion.img
              src={luxuryButterfly}
              alt=""
              className="h-full w-full object-contain drop-shadow-lg -scale-x-100"
              animate={{ scaleX: [-1, -0.35, -1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </motion.div>
        </>
      )}

      {/* Top Header Tag */}
      <header className="relative z-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-ivory/30 bg-forest/40 px-4 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <p className="font-body text-[0.65rem] tracking-[0.35em] text-ivory uppercase font-medium">
            The Wedding Celebration
          </p>
        </div>
      </header>

      {/* Middle: Majestic Couple Typography */}
      <div className="relative z-20 my-auto max-w-xl">
        <p className="font-script text-3xl xl:text-4xl text-sage-soft/90 drop-shadow-sm">
          Menuju Hari Bahagia
        </p>
        <h1 className="mt-2 font-display text-5xl xl:text-7xl 2xl:text-8xl font-medium tracking-tight text-ivory drop-shadow-md leading-[1.08]">
          {invitation.groom.short}
          <span className="font-script mx-3 xl:mx-4 text-4xl xl:text-6xl text-gold font-normal">
            &amp;
          </span>
          {invitation.bride.short}
        </h1>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          <p className="font-display text-2xl xl:text-3xl tracking-[0.25em] text-ivory/90 font-light">
            {invitation.year}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-xs tracking-wider text-ivory/85">
          <div className="flex items-center gap-2 rounded-xl bg-forest/50 px-4 py-2.5 backdrop-blur-md border border-ivory/15">
            <CalendarDays className="h-4 w-4 text-gold" />
            <span>Sabtu, 12 Juni 2027</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-forest/50 px-4 py-2.5 backdrop-blur-md border border-ivory/15">
            <MapPin className="h-4 w-4 text-gold" />
            <span>Kebun Raya Bogor</span>
          </div>
        </div>
      </div>

      {/* Bottom: Countdown Widgets */}
      <footer className="relative z-20">
        <p className="text-[0.65rem] tracking-[0.3em] text-ivory/70 uppercase mb-3 font-medium">
          Hitung Mundur Acara
        </p>
        <div className="grid grid-cols-4 gap-3 max-w-md">
          {[
            { label: "Hari", value: left.days },
            { label: "Jam", value: left.hours },
            { label: "Menit", value: left.minutes },
            { label: "Detik", value: left.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-ivory/20 bg-forest/60 p-3 text-center backdrop-blur-md shadow-lg"
            >
              <p className="font-display text-2xl xl:text-3xl font-medium text-ivory tabular-nums">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="mt-0.5 text-[0.6rem] tracking-[0.2em] text-gold uppercase font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
