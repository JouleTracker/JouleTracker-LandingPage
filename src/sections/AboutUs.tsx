import { useLanguage } from "../hooks/useLanguage";
import { valueIcons } from "../data/features";
import { ABOUT_IMAGE } from "../data/testimonials";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="sobre-nosotros" data-anchor className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading tone="onLight" align="left" eyebrow={t.about.eyebrow} title={t.about.title} />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500">{t.about.text}</p>
          </Reveal>
          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {t.about.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal key={value.title} delay={0.15 + i * 0.07}>
                  <li className="group flex h-full gap-3.5 rounded-xl border border-ink-900/10 bg-paper-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-volt-500/40 hover:shadow-card">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-ink-900 text-volt-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink-900">{value.title}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">{value.desc}</span>
                    </span>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative">
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-xl border-2 border-volt-500/30"
              aria-hidden="true"
            />
            <div
              className="absolute -left-8 -top-8 size-28 rounded-full border border-dashed border-ink-900/15"
              aria-hidden="true"
            />
            <figure className="relative overflow-hidden rounded-xl shadow-card">
              <img
                src={ABOUT_IMAGE}
                alt={t.about.imageAlt}
                loading="lazy"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent"
                aria-hidden="true"
              />
              <span className="absolute right-4 top-4 rounded-md bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-volt-300 backdrop-blur">
                JTL · 2026
              </span>
            </figure>
            <div className="soft-float absolute -bottom-6 left-5 sm:left-8">
              <div className="rounded-xl border border-ink-900/10 bg-white/95 px-5 py-3.5 shadow-card-hover backdrop-blur">
                <p className="font-display text-2xl font-bold tracking-tight text-ink-900">
                  {t.about.floatCard.value}
                </p>
                <p className="mt-0.5 text-[11px] text-ink-500">{t.about.floatCard.label}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
