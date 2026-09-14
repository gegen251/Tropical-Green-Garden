import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Share2, X } from "lucide-react";
import { toast } from "sonner";
import { invitation } from "@/lib/invitation-data";

export function ShareModal({ defaultGuestName }: { defaultGuestName?: string | undefined }) {
  const [open, setOpen] = useState(false);
  const [recipient, setRecipient] = useState(defaultGuestName ?? "");
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window === "undefined") return "";
    const baseUrl = window.location.origin + window.location.pathname;
    return recipient.trim() ? `${baseUrl}?to=${encodeURIComponent(recipient.trim())}` : baseUrl;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      toast.success("Link undangan berhasil disalin");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Gagal menyalin link");
    }
  };

  const shareToWhatsApp = () => {
    const url = getShareUrl();
    const guestGreeting = recipient.trim() ? `Kepada Yth. *${recipient.trim()}*,\n\n` : "";
    const text =
      `${guestGreeting}Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri hari bahagia pernikahan kami:\n\n` +
      `*${invitation.groom.short} & ${invitation.bride.short}*\n` +
      `📅 Sabtu, 12 Juni 2027\n` +
      `📍 Kebun Raya Bogor\n\n` +
      `Buka undangan digital melalui tautan berikut:\n${url}\n\n` +
      `Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.\n\n` +
      `Terima kasih.`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-sage/60 bg-card/90 px-6 py-3 text-xs font-medium tracking-[0.2em] text-emerald-deep uppercase shadow-[var(--shadow-soft)] transition-colors hover:bg-sage hover:text-primary-foreground backdrop-blur-sm"
      >
        <Share2 className="h-4 w-4 text-sage" /> Bagikan Undangan
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-forest/50 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-[2rem] border border-sage/30 bg-card p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.65rem] tracking-[0.3em] text-sage uppercase font-medium">
                    Personalized Share
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-forest font-medium">
                    Bagikan Undangan
                  </h3>
                </div>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary/60 transition-colors"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-forest mb-1.5">
                    Nama Tamu Penerima (Opsional)
                  </label>
                  <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Contoh: Bpk. Budi Santoso"
                    className="w-full rounded-xl border border-sage/50 bg-background px-4 py-3 text-sm text-forest outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage focus:ring-2 focus:ring-sage/30"
                  />
                  <p className="mt-1 text-[0.7rem] text-muted-foreground">
                    Nama akan otomatis muncul di sampul &amp; ucapan undangan.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-forest mb-1.5">
                    Tautan Undangan
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={getShareUrl()}
                      className="w-full rounded-xl border border-sage/40 bg-secondary/30 px-3.5 py-2.5 text-xs text-forest/90 outline-none truncate select-all"
                    />
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.94 }}
                      onClick={copyLink}
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-sage bg-sage px-3.5 py-2.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-emerald-deep"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      Salin
                    </motion.button>
                  </div>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={shareToWhatsApp}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-xs font-medium tracking-[0.15em] text-white uppercase shadow-md transition-colors hover:bg-[#20bd5a]"
                >
                  Kirim ke WhatsApp
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
