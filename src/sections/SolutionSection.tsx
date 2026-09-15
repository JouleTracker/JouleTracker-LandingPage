import { useLanguage } from "../hooks/useLanguage";
import { featureIcons } from "../data/features";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function SolutionSection() {
  const { t } = useLanguage();

  return (
    <section id="solucion" data-anchor className="relative bg-paper-50 py-20 sm:py-24 lg:py-28">
      <div
        className="bg-grid-light absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="onLight"
          eyebrow={t.solution.eyebrow}
          title={t.solution.title}
          subtitle={t.solution.subtitle}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.solution.features.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <li key={feature.title} className="h-full">
                <Reveal delay={(i % 3) * 0.08 + Math.floor(i / 3) * 0.05} className="h-full">
                  <article className="group h-full rounded-xl border border-ink-900/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-volt-500/40 hover:shadow-card-hover">
                    <span className="grid size-12 place-items-center rounded-lg bg-ink-900 text-volt-300 shadow-[0_10px_24px_-12px_rgba(10,18,32,0.6)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{feature.desc}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
