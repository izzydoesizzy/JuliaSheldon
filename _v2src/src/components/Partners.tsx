import { partners } from "../data";
import Marquee from "./Marquee";

export default function Partners() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container-edge mb-12">
        <p className="text-center text-sm text-ink/55">
          Trusted by schools &amp; organizations across Ontario
        </p>
      </div>

      <Marquee
        className="text-ink/80"
        items={partners.map((p) => (
          <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            {p}
          </span>
        ))}
        separator={<span className="mx-8 text-coral">·</span>}
      />
      <Marquee
        className="mt-6 text-ink/35"
        reverse
        items={partners.map((p) => (
          <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            {p}
          </span>
        ))}
        separator={<span className="mx-8 text-lilac">·</span>}
      />
    </section>
  );
}
