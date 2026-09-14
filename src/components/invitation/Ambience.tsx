import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import luxuryButterfly from "@/assets/luxury-butterfly.webp";
import leaf from "@/assets/leaf.webp";
import vineSide from "@/assets/vine-side.webp";
import vineTop from "@/assets/vine-top.webp";

/* ---------- Butterfly primitives ---------- */

function Wings({ size = 56, flip = false }: { size?: number; flip?: boolean }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.img
      src={luxuryButterfly}
      alt=""
      width={816}
      height={816}
      loading="lazy"
      className="object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.18)]"
      style={{ width: size, height: size, transform: flip ? "scaleX(-1)" : undefined }}
      animate={
        prefersReducedMotion
          ? undefined
          : { scaleY: [1, 0.82, 1], scaleX: flip ? [-1, -0.45, -1] : [1, 0.45, 1] }
      }
      transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/** Two butterflies facing each other, gently hovering. */
export function ButterflyPair({
  className,
  size = 48,
  delay = 0,
}: {
  className?: string;
  size?: number;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none flex items-center gap-1 ${className ?? ""}`}>
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -8, 2, 0], x: [0, -4, 3, 0], rotate: [-6, 4, -6] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <Wings size={size} />
      </motion.div>
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, 6, -5, 0], x: [0, 4, -3, 0], rotate: [6, -4, 6] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: delay + 0.6 }}
      >
        <Wings size={size * 0.82} flip />
      </motion.div>
    </div>
  );
}

/** Butterflies drifting across a section. */
export function FlyingButterflies({ count = 3 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  const paths = [
    { top: "10%", size: 40, dur: 20, x: ["-12vw", "40vw", "88vw"], y: [0, -60, 30] },
    { top: "40%", size: 32, dur: 26, x: ["95vw", "45vw", "-12vw"], y: [0, 70, -40] },
    { top: "68%", size: 36, dur: 23, x: ["-12vw", "55vw", "95vw"], y: [0, -80, 20] },
    { top: "88%", size: 28, dur: 30, x: ["90vw", "30vw", "-12vw"], y: [0, -40, 60] },
  ].slice(0, count);

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {paths.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: p.top }}
          animate={{ x: p.x, y: p.y, opacity: [0, 1, 1, 0.9] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 3 }}
        >
          <Wings size={p.size} flip={i === 1} />
        </motion.div>
      ))}
    </div>
  );
}

/** Soft falling leaves overlay. */
export function FallingLeaves({ count = 8 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  const leaves = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 97) % 92}%`,
    size: 20 + ((i * 13) % 26),
    dur: 14 + ((i * 7) % 12),
    delay: (i * 2.3) % 12,
    drift: i % 2 === 0 ? 40 : -50,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {leaves.map((l, i) => (
        <motion.img
          key={i}
          src={leaf}
          alt=""
          width={512}
          height={512}
          loading="lazy"
          className="absolute -top-24 object-contain opacity-85"
          style={{ left: l.left, width: l.size, height: l.size }}
          animate={{
            y: ["-10vh", "110vh"],
            x: [0, l.drift, -l.drift / 2, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{ duration: l.dur, repeat: Infinity, ease: "linear", delay: l.delay }}
        />
      ))}
    </div>
  );
}

/** Botanical frame: hanging vines on the left/right and garland across the top with subtle continuous sway. */
export function LeafFrame({
  children,
  className,
  right = true,
}: {
  children: ReactNode;
  className?: string;
  right?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`relative overflow-x-clip ${className ?? ""}`}>
      {/* Top garland with continuous gentle sway */}
      <motion.div
        className="pointer-events-none absolute -top-4 -left-6 z-0 w-[115%] max-w-none"
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <motion.img
          src={vineTop}
          alt=""
          width={1536}
          height={512}
          loading="lazy"
          className="w-full object-contain"
          animate={prefersReducedMotion ? undefined : { rotate: [-0.7, 0.7, -0.7], y: [0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Left hanging vine with continuous natural sway */}
      <motion.div
        className="pointer-events-none absolute -top-6 -left-12 sm:-left-14 z-0 w-28 sm:w-36"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 0.7, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        style={{ transformOrigin: "top center" }}
      >
        <motion.img
          src={vineSide}
          alt=""
          width={512}
          height={1280}
          loading="lazy"
          className="w-full object-contain"
          animate={prefersReducedMotion ? undefined : { rotate: [-1.3, 1.3, -1.3] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top center" }}
        />
      </motion.div>

      {/* Right hanging vine, lower and mirrored for balance with organic sway */}
      {right && (
        <motion.div
          className="pointer-events-none absolute top-1/3 -right-12 sm:-right-16 z-0 w-24 sm:w-32 -scale-x-100"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 0.55, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "top center" }}
        >
          <motion.img
            src={vineSide}
            alt=""
            width={512}
            height={1280}
            loading="lazy"
            className="w-full object-contain"
            animate={prefersReducedMotion ? undefined : { rotate: [1.3, -1.3, 1.3] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
          />
        </motion.div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}

/** Full-screen botanical leaf curtain sweep played simultaneously with the gate opening. */
export function LeafCurtain({ active }: { active: boolean }) {
  const prefersReducedMotion = useReducedMotion();

  const items = Array.from({ length: 16 }, (_, i) => ({
    left: `${(i * 6.3 + 2) % 96}%`,
    size: 55 + ((i * 19) % 85),
    delay: (i % 8) * 0.05,
    rot: i % 2 === 0 ? 340 : -320,
    drift: i % 2 === 0 ? 35 : -35,
  }));

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="leaf-curtain-overlay"
          className="pointer-events-none fixed inset-0 z-[70] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Glowing garden veil that sweeps in and gracefully dissolves */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-forest/60 via-amber-100/25 to-forest/70 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.75, 0.75, 0] }}
            transition={{
              duration: 1.6,
              times: [0, 0.25, 0.65, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {!prefersReducedMotion &&
            items.map((it, i) => (
              <motion.img
                key={i}
                src={leaf}
                alt=""
                width={512}
                height={512}
                className="absolute object-contain drop-shadow-lg"
                style={{ left: it.left, width: it.size, height: it.size }}
                initial={{ y: "-25vh", opacity: 0, rotate: 0, x: 0 }}
                animate={{
                  y: "115vh",
                  opacity: [0, 1, 1, 0],
                  rotate: it.rot,
                  x: [0, it.drift, 0],
                }}
                transition={{
                  duration: 1.85,
                  delay: it.delay,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
