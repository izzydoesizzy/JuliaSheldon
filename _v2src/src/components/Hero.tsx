import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { useCursor } from "../hooks/useCursor";

const headlineTop = ["The", "talk", "they’ll"];
const headlineBottom = ["actually", "remember."];

const wordReveal = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1.1,
      delay: 0.25 + i * 0.09,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { hoverProps } = useCursor();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28"
    >
      {/* Ambient gradient orbs */}
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute -right-40 -top-20 h-[34rem] w-[34rem] rounded-full bg-teal/25 blur-[120px]"
      />
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-violet/20 blur-[120px]"
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-teal-light/25 blur-[130px]" />

      <motion.div style={{ y: yText, opacity }} className="container-edge relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-7 flex items-center gap-3"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-violet" />
          Ask Auntie Julia · Sex &amp; Relationship Education
        </motion.p>

        <h1 className="font-display font-extrabold leading-[0.86] tracking-[-0.02em]">
          <span className="block text-[clamp(3rem,12vw,11rem)]">
            {headlineTop.map((word, i) => (
              <span
                key={word}
                className="mr-[0.22em] inline-block overflow-hidden align-bottom"
              >
                <motion.span
                  variants={wordReveal}
                  initial="hidden"
                  animate="show"
                  custom={i}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
          <span className="block text-[clamp(3rem,12vw,11rem)]">
            {headlineBottom.map((word, i) => (
              <span
                key={word}
                className="mr-[0.22em] inline-block overflow-hidden align-bottom"
              >
                <motion.span
                  variants={wordReveal}
                  initial="hidden"
                  animate="show"
                  custom={i + headlineTop.length}
                  className={`inline-block ${
                    word === "remember." ? "spectrum-text animate-shimmer" : ""
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-pretty text-lg text-ink/70 sm:text-xl"
          >
            Warm, funny, shame-free sex and relationship education for teens,
            adults, schools, and orgs — the kind that sticks long after the
            workshop ends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#contact" variant="solid">
              Book Auntie Julia
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticButton>
            <MagneticButton href="#workshops" variant="outline">
              See the workshops
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        {...hoverProps}
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="container-edge mt-16 flex items-center gap-3 text-ink/50"
      >
        <span className="relative flex h-9 w-9 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-ink/20" />
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 2v8M3 7l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </span>
        <span className="text-[0.7rem] font-semibold uppercase tracking-wider2">
          Navigating sex, identity &amp; love
        </span>
      </motion.a>
    </section>
  );
}
