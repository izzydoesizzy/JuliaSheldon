import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "../data";
import { useCursor } from "../hooks/useCursor";

gsap.registerPlugin(ScrollTrigger);

const sizeMap: Record<string, string> = {
  lg: "lg:col-span-2 text-2xl sm:text-3xl",
  md: "text-xl sm:text-2xl",
  sm: "text-lg sm:text-xl",
};

export default function Testimonials() {
  const section = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const { hoverProps } = useCursor();

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !grid.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: grid.current,
          start: "top 78%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Subtle parallax drift on the heading
  const headingRef = useRef<HTMLHeadingElement>(null);
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
        <div className="mb-12 flex flex-col gap-5">
          <p className="eyebrow">What people say</p>
          <h2
            ref={headingRef}
            className="font-display text-5xl font-extrabold leading-none tracking-tight sm:text-7xl lg:text-8xl"
          >
            Don’t take my word for it
          </h2>
        </div>

        <div
          ref={grid}
          className="grid auto-rows-auto grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <figure
              key={i}
              {...hoverProps}
              className={`testimonial-card flex flex-col justify-between rounded-2xl border border-ink/12 bg-paper-warm/60 p-7 backdrop-blur-sm transition-all duration-500 ease-expo hover:-translate-y-1.5 hover:border-ink/30 hover:shadow-[0_30px_60px_-40px_rgba(28,16,24,0.6)] ${sizeMap[t.size]}`}
            >
              <blockquote className="font-display font-semibold leading-snug">
                <span className="mr-1 text-coral">“</span>
                {t.quote.replace(/^“|”$/g, "")}
                <span className="ml-0.5 text-coral">”</span>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-2 text-sm text-ink/55">
                <span className="h-px w-6 bg-ink/30" />
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
