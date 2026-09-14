import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Music2, VolumeX } from "lucide-react";

export function AudioPlayer({ autoPlayTrigger }: { autoPlayTrigger: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Romantic wedding background music — Ed Sheeran - Perfect
  const audioSrc = "/music/ed-sheeran-perfect.mp3";

  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (autoPlayTrigger && !hasTriggeredRef.current && audioRef.current) {
      hasTriggeredRef.current = true;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay was blocked by browser policy until user interacts
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggle}
        aria-label={isPlaying ? "Mute audio" : "Play audio"}
        className="fixed top-5 right-5 z-[60] lg:top-6 lg:right-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#dfba73]/60 bg-[#0c2214]/85 text-ivory shadow-[0_8px_25px_rgba(0,0,0,0.45)] backdrop-blur-md transition-colors hover:bg-[#133320] hover:border-[#dfba73]"
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {isPlaying ? (
            <Music2 className="h-4 w-4 text-[#dfba73]" />
          ) : (
            <VolumeX className="h-4 w-4 text-ivory/70" />
          )}
        </motion.div>
      </motion.button>
    </>
  );
}
