import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "../hooks/useCursor";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const imageWrap = useRef<HTMLDivElement>(null);
  const { hoverProps } = useCursor();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32">
      <div className="container-edge grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Portrait */}
        <div ref={imageWrap} className="relative mx-auto w-full max-w-md">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2rem]"
            {...hoverProps}
          >
            <motion.img
              src="./julia.jpg"
              alt="Julia Sheldon — Auntie Julia, sex and relationship educator"
              style={{ y: imgY, scale: 1.12 }}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-ink/10" />
          </motion.div>

          {/* Rotating badge */}
          <motion.div
            style={{ rotate: badgeRotate }}
            className="absolute -bottom-9 -right-6 h-28 w-28 sm:-right-10 sm:h-32 sm:w-32"
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path
                  id="badge-circle"
                  d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="fill-ink/70 text-[8.5px] font-semibold uppercase tracking-[0.22em]">
                <textPath href="#badge-circle" startOffset="0%">
                  · she/her · waterloo, on · in-person &amp; virtual
                </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="h-3 w-3 rounded-full bg-coral" />
            </span>
          </motion.div>
        </div>

        {/* Copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-6"
          >
            Hi there
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl"
          >
            I’m Julia — but the kids call me{" "}
            <span className="spectrum-text animate-shimmer">Auntie</span>.
          </motion.h2>

          <div className="mt-8 max-w-xl space-y-5 text-lg text-ink/70">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-pretty"
            >
              I’m a sex and relationship educator with ten years of
              trauma-informed experience helping people talk about the stuff
              most adults fumble. Think of me as the cool aunt who tells you the
              truth, makes you laugh, and never makes it weird.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="text-pretty"
            >
              I’ve led 150+ workshops for over 1,500 teens and adults, directed
              three week-long summer camps, and built 2SLGBTQIA+ programming as
              Program Director for Rainbow Mentors. Whether it’s a classroom of
              100 or a one-on-one conversation, I meet people exactly where they
              are.
            </motion.p>
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-10 border-l-2 border-coral pl-5"
          >
            <p className="font-display text-xl font-semibold italic leading-snug">
              “You don’t judge the way most adults do — I know I can tell you
              anything, and you’ll find a way to make it funny and teach me
              something.”
            </p>
            <footer className="mt-3 text-sm text-ink/55">— Teen Client</footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
