import { motion } from "framer-motion";
import { audiences } from "../data";

export default function Audience() {
  return (
    <section className="relative bg-ink py-24 text-paper sm:py-32">
      <div className="container-edge">
        <div className="mb-14 flex flex-col gap-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-wider2 text-paper/50">
            Who I work with
          </p>
          <h2 className="max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl">
            Different rooms, same promise: honesty without the awkward.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex min-h-[15rem] flex-col justify-between bg-ink p-7 transition-colors duration-500 hover:bg-plum"
            >
              <span className="font-display text-sm font-bold text-paper/40">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-paper/65">{a.blurb}</p>
              </div>
              <span className="absolute right-6 top-6 h-2 w-2 rounded-full bg-spectrum bg-[length:200%_100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
