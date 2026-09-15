import { useLanguage } from "../hooks/useLanguage";
import { problemIcons } from "../data/features";
import { scrollToId } from "../utils/scroll";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading tone="onLight" eyebrow={t.problem.eyebrow} title={t.problem.title} />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.problem.items.map((item, i) => {
            const Icon = problemIcons[i];
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="group relative h-full rounded-xl border border-ink-900/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <span
                    className="absolute right-7 top-6 font-mono text-xs tracking-widest text-ink-200 transition-colors group-hover:text-volt-600"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-12 place-items-center rounded-lg bg-paper-100 text-ink-700 transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-volt-300">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{item.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-12 overflow-hidden rounded-xl bg-ink-900 p-8 lg:p-10">
            <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_50%,black,transparent)]" aria-hidden="true" />
            <div className="noise-layer" aria-hidden="true" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-paper">
                  {t.problem.solution.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-300">{t.problem.solution.text}</p>
              </div>
              <Button variant="secondary" tone="onDark" arrow="right" onClick={() => scrollToId("solucion")} className="shrink-0">
                {t.problem.solution.link}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
