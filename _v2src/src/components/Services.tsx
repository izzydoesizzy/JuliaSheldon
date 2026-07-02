import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services, type Service } from "../data";
import { useCursor } from "../hooks/useCursor";

// Light brand tints so the dark ink label stays readable as the fill sweeps up.
const toneMap: Record<string, string> = {
  teal: "bg-teal-tint",
  violet: "bg-violet-soft",
  light: "bg-teal-light",
};

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { hoverProps } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => {
        setHovered(true);
        hoverProps.onMouseEnter();
      }}
      onMouseLeave={() => {
        setHovered(false);
        hoverProps.onMouseLeave();
      }}
      className="group relative cursor-pointer overflow-hidden border-t border-ink/12 py-7"
    >
      {/* Fill sweep on hover */}
      <motion.span
        className={`absolute inset-0 -z-0 ${toneMap[service.tone]} `}
        initial={false}
        animate={{ y: hovered ? "0%" : "101%" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="relative z-10 flex items-baseline gap-5 px-1 sm:gap-8">
        <span className="font-display text-sm font-bold text-ink/40 transition-colors duration-500 group-hover:text-ink/80">
          {service.index}
        </span>
        <div className="flex flex-1 flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <h3 className="font-display text-2xl font-bold leading-none tracking-tight transition-transform duration-500 ease-expo group-hover:translate-x-2 sm:text-4xl">
            {service.title}
          </h3>
          <AnimatePresence>
            <motion.p
              className="max-w-sm text-pretty text-sm text-ink/70 transition-colors duration-500 group-hover:text-ink/90 sm:text-right sm:text-base"
            >
              {service.blurb}
            </motion.p>
          </AnimatePresence>
        </div>
        <motion.span
          animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.35 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden text-2xl sm:block"
        >
          ↗
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="workshops" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-5">What we cover</p>
            <h2 className="max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Workshops that don’t make everyone cringe
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-ink/65">
            Curriculum-aligned, age-appropriate, and refreshingly real. Mix and
            match, or I’ll build something custom for your group.
          </p>
        </div>

        <div className="border-b border-ink/12">
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
