import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Default single-card fade-up reveal (Verse, Event cards, etc.) */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container for grids (Gallery, Profile cards) using Framer Motion staggerChildren */
export function RevealStagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.05,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : stagger,
            delayChildren: prefersReducedMotion ? 0 : delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Child item inside RevealStagger */
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Timeline-specific reveal where the circular node springs in 120ms before the card text */
export function TimelineItem({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : 0.12,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Marker dot for timeline item */
export function TimelineNode({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      className={className}
      variants={{
        hidden: prefersReducedMotion ? { opacity: 0 } : { scale: 0, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 450, damping: 22 },
        },
      }}
    />
  );
}

/** Text content for timeline item */
export function TimelineContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal className="mb-10 text-center">
      <p className="text-[0.65rem] tracking-[0.4em] text-sage uppercase">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-medium text-forest sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-20 bg-sage/50" />
    </Reveal>
  );
}
