import { motion } from "framer-motion";
import { stats } from "../data";
import { useCountUp } from "../hooks/useCountUp";
import Marquee from "./Marquee";

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { ref, value: current } = useCountUp(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-2 border-t border-ink/15 pt-5"
    >
      <span
        ref={ref}
        className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl"
      >
        {current.toLocaleString()}
        <span className="text-coral">{suffix}</span>
      </span>
      <span className="text-sm text-ink/60">{label}</span>
    </motion.div>
  );
}

export default function Stats() {
  const strip = [
    "Healthy Relationships",
    "Consent",
    "Queer Sex Ed",
    "Gender Identity",
    "Safer Sex",
    "Puberty",
    "1:1 Coaching",
    "Real Talk",
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="bg-ink py-5 text-paper">
        <Marquee
          items={strip.map((s) => (
            <span className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {s}
            </span>
          ))}
          separator={
            <span className="mx-7 text-coral">✺</span>
          }
        />
      </div>

      <div className="container-edge mt-16">
        <div className="mb-10 flex flex-col gap-2">
          <p className="eyebrow">A decade of real talk</p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} index={i} />
          ))}
        </div>
        <p className="mt-12 text-sm text-ink/50">
          In-person or virtual · teens, adults &amp; 2SLGBTQIA+ communities
        </p>
      </div>
    </section>
  );
}
