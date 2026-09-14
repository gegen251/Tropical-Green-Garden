import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CalendarDays, Gift, Images, MessageSquareHeart, Sparkles, Users } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: typeof Users;
}

const navItems: NavItem[] = [
  { id: "section-couple", label: "Mempelai", icon: Users },
  { id: "section-story", label: "Kisah", icon: Sparkles },
  { id: "section-events", label: "Acara", icon: CalendarDays },
  { id: "section-gallery", label: "Galeri", icon: Images },
  { id: "section-gift", label: "Hadiah", icon: Gift },
  { id: "section-rsvp", label: "Ucapan", icon: MessageSquareHeart },
];

export function NavigationDock() {
  const [activeSection, setActiveSection] = useState<string>("section-couple");

  // Robust dual ScrollSpy (IntersectionObserver + Scroll Position fallback)
  useEffect(() => {
    // 1. Calculate active section from scroll offset
    const updateActiveByScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let current = navItems[0].id;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    // Initial check after DOM mounts
    const initialTimer = setTimeout(updateActiveByScroll, 200);

    // 2. IntersectionObserver setup with element verification retry
    let observer: IntersectionObserver | null = null;
    let retryTimer: NodeJS.Timeout;

    const setupObserver = () => {
      const elements = navItems
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null);

      if (elements.length < navItems.length) {
        // Retry shortly if sections are still mounting
        retryTimer = setTimeout(setupObserver, 100);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length > 0) {
            const sorted = visible.sort(
              (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top),
            );
            setActiveSection(sorted[0].target.id);
          }
        },
        {
          root: null,
          rootMargin: "-20% 0px -50% 0px",
          threshold: [0.1, 0.3],
        },
      );

      elements.forEach((el) => observer?.observe(el));
    };

    setupObserver();

    // 3. Smooth throttled scroll listener for instantaneous feedback
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveByScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(retryTimer);
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - 16;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.aside
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Navigasi Undangan"
      className="pointer-events-none fixed bottom-3 sm:bottom-4 inset-x-0 z-50 flex justify-center px-2 sm:px-3 lg:inset-x-auto lg:right-0 lg:w-[480px] xl:w-[540px] 2xl:w-[580px]"
    >
      {/* ROYAL GLASSMORPHIC FLOATING PILL */}
      <nav
        role="navigation"
        className="pointer-events-auto flex items-center justify-center gap-0.5 sm:gap-1.5 rounded-full border border-[#dfba73]/45 bg-[#0a1f13]/95 p-1 sm:p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(223,186,115,0.25)] backdrop-blur-xl max-w-[calc(100vw-1rem)] sm:max-w-none"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              aria-label={`Menuju bagian ${item.label}`}
              aria-current={isActive ? "page" : undefined}
              className="group relative flex flex-col items-center justify-center rounded-full py-1 px-2 sm:py-1.5 sm:px-3 text-center transition-all duration-300 cursor-pointer select-none shrink-0"
            >
              {/* Sliding Active Pill Background */}
              {isActive && (
                <motion.div
                  layoutId="activeDockPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#dfba73] via-[#e8cb8d] to-[#c59b4c] shadow-[0_2px_10px_rgba(223,186,115,0.45)]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}

              <Icon
                className={`relative z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-all duration-300 ${
                  isActive
                    ? "scale-110 text-[#091b10]"
                    : "text-[#dfba73]/75 group-hover:scale-105 group-hover:text-[#dfba73]"
                }`}
              />

              <span
                className={`relative z-10 mt-0.5 text-[8px] sm:text-[9.5px] uppercase font-semibold leading-tight tracking-tight sm:tracking-wider transition-colors duration-300 whitespace-nowrap ${
                  isActive ? "text-[#091b10]" : "text-[#e8d09b]/70 group-hover:text-[#dfba73]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </motion.aside>
  );
}
