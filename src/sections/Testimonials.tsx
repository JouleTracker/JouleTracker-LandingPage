import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { testimonials } from "../data/testimonials";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${i < rating ? "fill-volt-500 text-volt-500" : "text-ink-200"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const count = testimonials.length;

  const go = (next: number, direction: number) => {
    setDir(direction);
    setIndex((next + count) % count);
  };

  const card = (i: number) => {
    const meta = testimonials[i];
    const item = t.testimonials.items[i];
    return (
      <article className="flex h-full flex-col rounded-xl border border-ink-900/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        <Stars rating={meta.rating} />
        <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
          “{item.quote}”
        </blockquote>
        <footer className="mt-6 flex items-center gap-3">
          <img
            src={meta.photo}
            alt={`${item.name} — ${item.role}`}
            loading="lazy"
            width={44}
            height={44}
            className="size-11 rounded-full border border-ink-900/10 object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-ink-900">{item.name}</p>
            <p className="text-xs text-ink-500">{item.role}</p>
          </div>
        </footer>
      </article>
    );
  };

  return (
    <section id="testimonios" data-anchor className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading tone="onLight" eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        <Reveal delay={0.1}>
          <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
            {t.testimonials.demo}
          </p>
        </Reveal>

        {/* Desktop grid */}
        <div className="mt-14 hidden gap-5 md:grid md:grid-cols-3">
          {testimonials.map((_, i) => (
            <Reveal key={testimonials[i].id} delay={i * 0.1} className="h-full">
              {card(i)}
            </Reveal>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="mt-10 md:hidden">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: dir * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -48 }}
                transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
              >
                {card(index)}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1, -1)}
              aria-label={t.testimonials.prev}
              className="grid size-10 place-items-center rounded-lg border border-ink-900/15 bg-white text-ink-700 transition-colors hover:border-volt-500/50 hover:text-ink-950"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2" aria-label={t.testimonials.title}>
              {testimonials.map((tm, i) => (
                <button
                  key={tm.id}
                  type="button"
                  aria-pressed={i === index}
                  aria-label={t.testimonials.goTo.replace("{n}", String(i + 1))}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-volt-600" : "w-2 bg-ink-900/20 hover:bg-ink-900/40"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1, 1)}
              aria-label={t.testimonials.next}
              className="grid size-10 place-items-center rounded-lg border border-ink-900/15 bg-white text-ink-700 transition-colors hover:border-volt-500/50 hover:text-ink-950"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
