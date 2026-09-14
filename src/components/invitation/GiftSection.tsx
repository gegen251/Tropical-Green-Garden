import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, Landmark, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { invitation } from "@/lib/invitation-data";
import royalGardenBg from "@/assets/royal-garden-bg.webp";
import { Reveal, SectionTitle } from "./Reveal";

export function GiftSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      toast.success(`${label} berhasil disalin ke papan klip!`);
      setTimeout(() => setCopied(null), 2500);
    } catch {
      toast.error("Gagal menyalin");
    }
  };

  return (
    <section
      id="section-gift"
      className="section-shell scroll-mt-6 sm:scroll-mt-8 relative z-10 overflow-hidden bg-[#f7f6f1] py-16 sm:py-20"
    >
      {/* Background Royal Garden Atmosphere - Clear & Luminous */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={royalGardenBg}
          alt=""
          className="h-full w-full object-cover object-center filter saturate-[1.1] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f6f1]/80 via-[#f7f6f1]/50 to-[#f7f6f1]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-lg px-4">
        <SectionTitle kicker="Tanda Kasih & Restu" title="Wedding Gift" />

        <Reveal className="mx-auto max-w-md">
          <p className="mt-4 mb-8 text-center text-xs sm:text-sm leading-relaxed break-words text-[#5a7b64]">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun apabila berkenan memberikan
            tanda kasih secara cashless, Anda dapat menyalurkannya melalui rekening resmi berikut:
          </p>

          {/* BANK TRANSFER TITANIUM CARDS */}
          <div className="grid gap-6">
            {invitation.gifts.transfers.map((t) => {
              const cleanNumber = t.number.replace(/\s/g, "");
              const isCopied = copied === cleanNumber;

              return (
                <div
                  key={t.number}
                  className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#183a23] via-[#102718] to-[#0a1a0f] p-6 sm:p-7 text-ivory shadow-[0_18px_40px_-10px_rgba(10,24,15,0.45)] border border-[#dfba73]/40"
                >
                  {/* Background Luxury Card Watermark */}
                  <div className="pointer-events-none absolute -right-6 -bottom-6 text-[#dfba73]/5 font-serif text-8xl font-bold select-none">
                    {t.bank}
                  </div>

                  {/* Top Card Row: Bank Name & Chip */}
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <span className="font-display text-lg tracking-wider text-[#e8d09b] font-medium uppercase">
                        {t.bank}
                      </span>
                      <p className="text-[0.6rem] tracking-[0.25em] text-ivory/60 uppercase">
                        Private Titanium Card
                      </p>
                    </div>

                    {/* 3D Gold Metallic Chip Symbol */}
                    <div className="flex h-7 w-10 items-center justify-center rounded-md border border-[#dfba73]/70 bg-gradient-to-br from-[#dfba73] to-[#9c7832] shadow-inner">
                      <Sparkles className="h-3.5 w-3.5 text-[#102718]" />
                    </div>
                  </div>

                  {/* Account Number in Spaced Digits */}
                  <div className="my-6 relative z-10">
                    <p className="text-[0.62rem] tracking-[0.25em] text-[#dfba73] uppercase font-medium">
                      Nomor Rekening
                    </p>
                    <p className="mt-1 font-mono text-xl sm:text-2xl tracking-[0.18em] font-medium text-ivory drop-shadow-sm">
                      {t.number}
                    </p>
                  </div>

                  {/* Bottom Row: Account Holder & Copy Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-[#dfba73]/20 relative z-10">
                    <div>
                      <p className="text-[0.6rem] tracking-[0.2em] text-ivory/60 uppercase">
                        Atas Nama
                      </p>
                      <p className="font-display text-base text-ivory font-medium">{t.holder}</p>
                    </div>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copy(cleanNumber, `Nomor rekening ${t.bank}`)}
                      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-all shadow-sm cursor-pointer ${
                        isCopied
                          ? "bg-[#366848] text-white border border-[#5a9370]"
                          : "bg-[#dfba73] text-[#0f2518] hover:bg-[#ebd195] border border-[#dfba73]"
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-white" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-[#0f2518]" />
                          <span>Salin No. Rek</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
