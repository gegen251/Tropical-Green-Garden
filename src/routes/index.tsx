import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Toaster } from "@/components/ui/sonner";

import { Cover } from "@/components/invitation/Cover";
import { DesktopHero } from "@/components/invitation/DesktopHero";
import { AudioPlayer } from "@/components/invitation/AudioPlayer";
import {
  VerseSection,
  CoupleSection,
  StorySection,
  EventsSection,
  CountdownSection,
  GallerySection,
} from "@/components/invitation/Sections";
import { GiftSection } from "@/components/invitation/GiftSection";
import { RsvpSection } from "@/components/invitation/RsvpSection";
import { ClosingSection } from "@/components/invitation/ClosingSection";
import { NavigationDock } from "@/components/invitation/NavigationDock";
import { FallingLeaves, LeafCurtain } from "@/components/invitation/Ambience";
import { ShareModal } from "@/components/invitation/ShareModal";
import { invitation } from "@/lib/invitation-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gilang & Silva — Undangan Pernikahan 2027" },
      {
        name: "description",
        content:
          "Undangan pernikahan digital Gilang Dwi Amardan & Silva Ria Dinasty, 12 Juni 2027 di Bogor. Tema Tropical Green Garden.",
      },
      { property: "og:title", content: "Gilang & Silva — Undangan Pernikahan 2027" },
      {
        property: "og:description",
        content: "Dengan penuh sukacita kami mengundang Anda di hari bahagia kami, 12 Juni 2027.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  const [curtainActive, setCurtainActive] = useState(false);
  const [musicTrigger, setMusicTrigger] = useState(false);
  const [guestName, setGuestName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const to = new URLSearchParams(window.location.search).get("to");
    if (to) setGuestName(to);
  }, []);

  const handleStartEnter = () => {
    // Start romantic piano music the exact millisecond the user clicks Buka Undangan
    setMusicTrigger(true);
  };

  const open = () => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setCurtainActive(true);
    setOpened(true);
    setTimeout(() => {
      setCurtainActive(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full bg-forest text-foreground flex flex-col lg:flex-row">
      {/* DESKTOP SPLIT LAYOUT: SISI KIRI = HERO GAMBAR & TIPOGRAFI MEWAH (FIXED TIDAK BERUBAH SAAT SCROLL) */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-[calc(100%-480px)] xl:w-[calc(100%-540px)] 2xl:w-[calc(100%-580px)] h-screen overflow-hidden z-0">
        <DesktopHero />
      </aside>

      {/* SISI KANAN (DESKTOP) / 100% LAYAR (MOBILE) = KANVAS UNDANGAN DIGITAL */}
      <div className="relative z-10 ml-auto w-full lg:w-[480px] xl:w-[540px] 2xl:w-[580px] shrink-0 min-h-screen bg-background shadow-2xl lg:border-l border-sage/25 flex flex-col">
        {/* Synchronized Botanical Leaf Curtain Sweep on Open */}
        <LeafCurtain active={curtainActive} />

        {/* Ambient Falling Leaves */}
        {opened && <FallingLeaves count={7} />}

        {/* Floating Background Music Player */}
        <AudioPlayer autoPlayTrigger={opened || musicTrigger} />

        {/* Royal Floating Navigation Dock */}
        <AnimatePresence>{opened && !curtainActive && <NavigationDock />}</AnimatePresence>

        <AnimatePresence mode="wait">
          {!opened ? (
            /* TAMPILAN AWAL SEBELUM DIBUKA: COVER EDITORIAL HAUTE COUTURE */
            <motion.div
              key="cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full min-h-screen flex items-center justify-center"
            >
              <Cover guestName={guestName} onOpen={open} onStartEnter={handleStartEnter} />
            </motion.div>
          ) : (
            /* SETELAH DIBUKA: ISI LENGKAP UNDANGAN DIGITAL DENGAN SCROLL HALUS */
            <motion.main
              key="invitation-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative min-h-screen flex flex-col justify-between"
            >
              <div>
                <VerseSection />
                <CoupleSection />
                <StorySection />
                <EventsSection />
                <CountdownSection />
                <GallerySection />
                <GiftSection />
                <RsvpSection guestName={guestName} />

                {/* Bagikan Undangan */}
                <section className="section-shell relative z-10 bg-secondary/20 py-12 text-center border-t border-sage/20">
                  <p className="text-[0.65rem] tracking-[0.35em] text-sage uppercase font-medium">
                    Bagikan Kebahagiaan
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-forest font-medium">
                    Kirim Undangan ke Kerabat
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
                    Buat tautan personal dengan nama kerabat Anda dan bagikan langsung via WhatsApp.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <ShareModal defaultGuestName={guestName} />
                  </div>
                </section>
              </div>

              {/* Ultra-Luxury Grand Finale Suite */}
              <ClosingSection />
            </motion.main>
          )}
        </AnimatePresence>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}
