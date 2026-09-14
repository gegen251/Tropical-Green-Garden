import { motion } from "motion/react";
import { ChevronUp, Heart, Sparkles } from "lucide-react";
import waxSealGa from "@/assets/wax-seal-ga.webp";
import luxuryButterfly from "@/assets/luxury-butterfly.webp";
import estateArchBg from "@/assets/estate-arch-bg.webp";
import { invitation } from "@/lib/invitation-data";
import { Reveal } from "./Reveal";

export function ClosingSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 overflow-hidden bg-gradient-to-b from-[#091f13] via-[#0d2a1a] to-[#05130b] text-ivory pt-20 pb-28 sm:pb-36 px-4 sm:px-6 shadow-[0_-15px_50px_rgba(0,0,0,0.5)] border-t border-[#dfba73]/40">
      {/* Background Archway Atmosphere - Clear & Regal */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={estateArchBg}
          alt=""
          className="h-full w-full object-cover object-center filter saturate-[1.1] scale-105 opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07190e]/85 via-[#0c2617]/70 to-[#05130b]/95" />
      </div>

      {/* Floating Golden Stardust Particles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <span className="absolute top-1/4 left-8 h-1 w-1 rounded-full bg-[#dfba73] shadow-[0_0_8px_#dfba73] animate-pulse" />
        <span className="absolute top-1/3 right-10 h-1.5 w-1.5 rounded-full bg-[#dfba73] shadow-[0_0_10px_#dfba73] animate-ping" />
        <span className="absolute bottom-1/3 left-14 h-1 w-1 rounded-full bg-[#dfba73] shadow-[0_0_8px_#dfba73]" />
        <span className="absolute top-2/3 right-16 h-1 w-1 rounded-full bg-[#dfba73] shadow-[0_0_8px_#dfba73] animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-md">
        {/* GRAND PARCHMENT FINALE ENVELOPE CARD */}
        <Reveal>
          <div
            className="relative rounded-[2.5rem] bg-[#fdfcf9] p-8 sm:p-10 text-center text-[#163321] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-[#c59b4c]/50"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(197, 155, 76, 0.45), inset 0 0 40px rgba(197, 155, 76, 0.05), 0 30px 60px -15px rgba(0, 0, 0, 0.65)",
            }}
          >
            {/* Inner Hairline Gold Border with Corner Cross Filigree */}
            <div className="pointer-events-none absolute inset-3 rounded-[2.1rem] border border-[#c59b4c]/35">
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

            {/* 3D WAX SEAL MONOGRAM G&S ELEVATED ON PEDESTAL WITH FACING BUTTERFLIES */}
            <div className="relative mx-auto mb-6 flex items-center justify-center gap-3">
              <div className="h-7 w-7 shrink-0 -scale-x-100 opacity-90 filter drop-shadow-sm">
                <img src={luxuryButterfly} alt="" className="h-full w-full object-contain" />
              </div>

              <div className="relative h-20 w-20 shrink-0">
                {/* Ethereal Glow */}
                <div className="absolute inset-0 rounded-full bg-[#dfba73]/30 blur-md animate-pulse" />
                <img
                  src={waxSealGa}
                  alt="Royal Monogram G&S"
                  width={400}
                  height={400}
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_8px_22px_rgba(22,51,33,0.35)]"
                />
              </div>

              <div className="h-7 w-7 shrink-0 opacity-90 filter drop-shadow-sm">
                <img src={luxuryButterfly} alt="" className="h-full w-full object-contain" />
              </div>
            </div>

            {/* Royal Subtitle */}
            <p className="font-body text-[0.62rem] sm:text-[0.65rem] tracking-[0.42em] text-[#366848] uppercase font-semibold">
              Ungkapan Terima Kasih
            </p>

            {/* Script Calligraphy Heading */}
            <h2 className="mt-1 font-script text-5xl sm:text-6xl text-[#c59b4c] drop-shadow-sm">
              Terima Kasih
            </h2>

            {/* Gilded Triple Star Divider */}
            <div className="mx-auto my-5 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c59b4c]/70" />
              <span className="text-[#c59b4c] text-[0.6rem]">✦ ❖ ✦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c59b4c]/70" />
            </div>

            {/* Heartfelt Royal Message */}
            <p className="font-display italic text-sm sm:text-base leading-relaxed break-words text-[#163321]/90 max-w-xs mx-auto">
              Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami, apabila
              Bapak/Ibu/Saudara/i berkenan hadir serta melimpahkan untaian doa restu bagi langkah
              awal ikatan suci kami.
            </p>

            {/* Sign-off & Couple Signature */}
            <div className="mt-8 pt-6 border-t border-[#c59b4c]/25">
              <p className="text-[0.62rem] tracking-[0.3em] text-[#5a7b64] uppercase font-medium">
                Kami yang berbahagia,
              </p>
              <p className="mt-2 font-display text-3xl sm:text-4xl text-[#163321] font-medium tracking-tight">
                {invitation.groom.short} &amp; {invitation.bride.short}
              </p>

              {/* Family Lineage Accents */}
              <div className="mt-6 grid grid-cols-1 gap-4 text-center text-xs text-[#5a7b64] border-t border-[#c59b4c]/15 pt-4">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#366848] font-semibold">
                    Keluarga Besar Mempelai Pria
                  </p>
                  <p className="mt-0.5 font-display text-sm text-[#163321] font-medium">
                    Bapak Amardan &amp; Ibu Suryani
                  </p>
                </div>
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#366848] font-semibold">
                    Keluarga Besar Mempelai Wanita
                  </p>
                  <p className="mt-0.5 font-display text-sm text-[#163321] font-medium">
                    Bapak Hendarto &amp; Ibu Larasati
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* BACK TO TOP INTERACTIVE BUTTON */}
        <Reveal delay={0.15} className="mt-8 text-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-[#dfba73]/70 bg-gradient-to-r from-[#173722] via-[#245234] to-[#173722] px-6 py-3 text-xs font-medium tracking-[0.22em] text-[#fcfbfa] uppercase shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-all hover:border-[#dfba73] hover:shadow-[0_12px_30px_rgba(223,186,115,0.25)] cursor-pointer"
          >
            <ChevronUp className="h-4 w-4 text-[#dfba73]" />
            <span>Kembali ke Awal</span>
          </motion.button>
        </Reveal>

        {/* ROYAL COLOPHON */}
        <div className="mt-10 text-center text-[0.6rem] tracking-[0.35em] text-[#dfba73]/70 uppercase font-medium">
          <p>The Royal Wedding of Gilang &amp; Silva</p>
          <p className="mt-1 text-ivory/40">Bogor, Jawa Barat • {invitation.year}</p>
        </div>
      </div>
    </footer>
  );
}
