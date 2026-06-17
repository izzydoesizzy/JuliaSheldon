import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featuredTestimonials } from "../testimonialsData";
import { useCursor } from "../hooks/useCursor";

gsap.registerPlugin(ScrollTrigger);

const sizeMap: Record<string, string> = {
  lg: "lg:col-span-2 text-2xl sm:text-3xl",
  md: "text-xl sm:text-2xl",
  sm: "text-lg sm:text-xl",
};

export default function Testimonials() {
  const section = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { hoverProps } = useCursor();

  // Lightweight scrub parallax on the heading only — the cards themselves use
  // Framer Motion's whileInView so they reveal reliably regardless of layout
  // timing (the previous GSAP `from` tween could leave them stuck invisible).
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !headingRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(headingRef.current, {
        xPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="voices" ref={section} className="relative py-24 sm:py-32">
      <div className="container-edge">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-5">
            <p className="eyebrow">What people say</p>
            <h2
              ref={headingRef}
              className="font-display text-5xl font-extrabold leading-none tracking-tight sm:text-7xl lg:text-8xl"
            >
              Don’t take my word for it
            </h2>
          </div>
          <a
            href="./testimonials.html"
            {...hoverProps}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold transition-colors duration-500 ease-expo hover:border-ink/70"
          >
            Read all 50+ testimonials
            <span className="transition-transform duration-500 ease-expo group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="grid auto-rows-auto grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTestimonials.map((t, i) => (
            <motion.figure
              key={i}
              {...hoverProps}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`flex flex-col justify-between rounded-2xl border border-ink/12 bg-paper-warm p-7 transition-all duration-500 ease-expo hover:-translate-y-1.5 hover:border-teal hover:shadow-[0_30px_60px_-40px_rgba(35,94,110,0.55)] ${
                sizeMap[t.size ?? "md"]
              }`}
            >
              <blockquote className="font-display font-semibold leading-snug">
                <span className="mr-1 text-teal">“</span>
                {t.quote.replace(/^“|”$/g, "")}
                <span className="ml-0.5 text-teal">”</span>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-2 text-sm text-ink/55">
                <span className="h-px w-6 bg-teal/50" />
                {t.author}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
