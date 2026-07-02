import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data";
import { useCursor } from "../hooks/useCursor";

/**
 * A floating pill nav that hides on scroll-down, reveals on scroll-up, and
 * tracks the active section via IntersectionObserver. Brand mark on the left,
 * anchor links centre, CTA right.
 *
 * `hrefBase` lets the nav be reused on a sub-page (e.g. the testimonials page):
 * pass "index.html" so the section links navigate back to the home page first.
 */
export default function FloatingNav({ hrefBase = "" }: { hrefBase?: string }) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const { hoverProps } = useCursor();
  const isSub = hrefBase !== "";
  const linkFor = (id: string) => `${hrefBase}#${id}`;

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > last && y > 320);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isSub) return; // active-section tracking only applies on the home page
    const ids = ["about", "workshops", "voices", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isSub]);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-[80] flex justify-center px-4"
    >
      <nav
        className={`flex items-center gap-1 rounded-full border px-2 py-2 backdrop-blur-xl transition-colors duration-500 ${
          scrolled
            ? "border-ink/10 bg-paper/80 shadow-[0_18px_60px_-30px_rgba(28,16,24,0.5)]"
            : "border-ink/5 bg-paper/40"
        }`}
      >
        <a
          href={isSub ? hrefBase : "#top"}
          {...hoverProps}
          className="flex items-center gap-2 rounded-full px-4 py-1.5"
          aria-label="Ask Auntie Julia — home"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-spectrum bg-[length:200%_100%] animate-shimmer" />
          <span className="font-display text-sm font-bold tracking-tight">
            Auntie&nbsp;Julia
          </span>
        </a>

        <ul className="mx-1 hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={linkFor(link.id)}
                {...hoverProps}
                className="relative block rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors duration-300 hover:text-ink"
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-ink/8"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`${hrefBase}#contact`}
          {...hoverProps}
          className="ml-1 hidden rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-violet sm:block"
        >
          Book Julia
        </a>
      </nav>
    </motion.header>
  );
}

/** Tiny standalone scroll-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed left-0 top-0 z-[90] h-[3px] origin-left bg-spectrum bg-[length:200%_100%]"
        style={{ scaleX: progress, width: "100%" }}
      />
    </AnimatePresence>
  );
}
