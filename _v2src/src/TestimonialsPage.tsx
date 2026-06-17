import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { CursorProvider, useCursor } from "./hooks/useCursor";
import CustomCursor from "./components/CustomCursor";
import FloatingNav, { ScrollProgress } from "./components/FloatingNav";
import Footer from "./components/Footer";
import {
  allTestimonials,
  categories,
  categoryAccent,
  type Category,
} from "./testimonialsData";

type Filter = "All" | Category;

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  const { hoverProps } = useCursor();
  return (
    <button
      onClick={onClick}
      {...hoverProps}
      className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
        active ? "text-paper" : "text-ink/70 hover:text-ink"
      }`}
    >
      {active && (
        <motion.span
          layoutId="filter-active"
          className="absolute inset-0 -z-10 rounded-full bg-ink"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      {label}
      <span
        className={`text-xs font-bold ${
          active ? "text-paper/60" : "text-ink/35"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function Card({
  quote,
  author,
  category,
  index,
}: {
  quote: string;
  author: string;
  category: Category;
  index: number;
}) {
  const { hoverProps } = useCursor();
  return (
    <motion.figure
      {...hoverProps}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.028, 0.5),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mb-5 flex break-inside-avoid flex-col gap-5 rounded-2xl border border-ink/12 bg-paper-warm p-7 transition-all duration-500 ease-expo hover:-translate-y-1 hover:border-teal hover:shadow-[0_30px_60px_-40px_rgba(35,94,110,0.55)]"
    >
      <blockquote className="font-display text-lg font-semibold leading-snug sm:text-xl">
        <span className="mr-1 text-teal">“</span>
        {quote}
        <span className="ml-0.5 text-teal">”</span>
      </blockquote>
      <figcaption className="flex items-center justify-between gap-3 text-sm">
        <span className="text-ink/55">— {author}</span>
        <span className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-ink/45">
          <span
            className={`h-2 w-2 rounded-full ${categoryAccent[category]}`}
          />
          {category}
        </span>
      </figcaption>
    </motion.figure>
  );
}

function PageBody() {
  useLenis();
  const [filter, setFilter] = useState<Filter>("All");
  const { hoverProps } = useCursor();

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: allTestimonials.length };
    categories.forEach((c) => {
      map[c] = allTestimonials.filter((t) => t.category === c).length;
    });
    return map;
  }, []);

  const visible = useMemo(
    () =>
      filter === "All"
        ? allTestimonials
        : allTestimonials.filter((t) => t.category === filter),
    [filter]
  );

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <FloatingNav hrefBase="index.html" />

      <main className="grain relative">
        {/* Header */}
        <header className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
          <div className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-teal/20 blur-[120px]" />
          <div className="pointer-events-none absolute -left-32 top-20 h-[24rem] w-[24rem] rounded-full bg-violet/15 blur-[120px]" />

          <div className="container-edge relative">
            <a
              href="index.html"
              {...hoverProps}
              className="eyebrow mb-8 inline-flex items-center gap-2 transition-colors duration-300 hover:text-ink"
            >
              <span>←</span> Back to home
            </a>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            >
              Kind words, <span className="spectrum-text animate-shimmer">on the record.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-pretty text-lg text-ink/70"
            >
              {allTestimonials.length}+ unfiltered notes from the teens, adults,
              educators, parents, camps, and organizations Julia has worked with
              over the last decade. Filter by who said it.
            </motion.p>
          </div>
        </header>

        {/* Filters */}
        <div className="sticky top-20 z-40 mb-12">
          <div className="container-edge">
            <div className="flex flex-wrap gap-1.5 rounded-3xl border border-ink/10 bg-paper/80 p-2 backdrop-blur-xl">
              <FilterChip
                label="All"
                count={counts.All}
                active={filter === "All"}
                onClick={() => setFilter("All")}
              />
              {categories.map((c) => (
                <FilterChip
                  key={c}
                  label={c}
                  count={counts[c]}
                  active={filter === c}
                  onClick={() => setFilter(c)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Masonry grid — keyed by filter so cards re-stagger on each change */}
        <section className="container-edge pb-28">
          <div
            key={filter}
            className="columns-1 gap-5 sm:columns-2 lg:columns-3"
          >
            {visible.map((t, i) => (
              <Card
                key={`${filter}-${i}`}
                quote={t.quote}
                author={t.author}
                category={t.category}
                index={i}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer hrefBase="index.html" />
    </>
  );
}

export default function TestimonialsPage() {
  return (
    <CursorProvider>
      <PageBody />
    </CursorProvider>
  );
}
