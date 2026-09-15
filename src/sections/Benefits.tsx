import { useLanguage } from "../hooks/useLanguage";
import { benefitIcons } from "../data/features";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section id="beneficios" data-anchor className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="onLight"
          eyebrow={t.benefits.eyebrow}
          title={t.benefits.title}
          subtitle={t.benefits.subtitle}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.benefits.items.map((item, i) => {
            const Icon = benefitIcons[i];
            return (
              <li key={item.title} className="h-full">
                <Reveal delay={i * 0.09} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-xl border border-ink-900/10 bg-paper-50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-volt-500/40 hover:shadow-card-hover">
                    <span
                      className="absolute -right-2 -top-4 font-display text-6xl font-bold text-ink-900/[0.05] transition-colors duration-300 group-hover:text-volt-500/20"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid size-11 place-items-center rounded-lg bg-ink-900 text-volt-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.desc}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
