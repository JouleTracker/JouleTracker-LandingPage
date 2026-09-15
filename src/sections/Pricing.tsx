import { Check, Info } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { planMeta } from "../data/pricing";
import { dispatchSubjectPrefill, scrollToId } from "../utils/scroll";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Pricing() {
  const { t } = useLanguage();

  const choose = (planName: string) => {
    dispatchSubjectPrefill(`${t.pricing.prefill} ${planName}`);
    scrollToId("contacto");
  };

  return (
    <section id="planes" data-anchor className="relative overflow-hidden bg-ink-950 py-20 sm:py-24 lg:py-28">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-10 h-[300px] w-[520px] -translate-x-1/2 rounded-full bg-volt-500/[0.05] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading tone="onDark" eyebrow={t.pricing.eyebrow} title={t.pricing.title} subtitle={t.pricing.subtitle} />

        <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 lg:grid-cols-3">
          {t.pricing.plans.map((plan, i) => {
            const meta = planMeta[i];
            const highlighted = meta.highlighted;
            return (
              <Reveal key={plan.name} delay={i * 0.1} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                    highlighted
                      ? "border-volt-400/60 bg-ink-850 shadow-[0_0_60px_-18px_rgba(201,242,84,0.4)] lg:-translate-y-3 lg:hover:-translate-y-4"
                      : "border-white/10 bg-ink-900/70 hover:border-white/20"
                  }`}
                >
                  {highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-volt-400 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-950">
                      {t.pricing.popular}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-paper">{plan.name}</h3>
                  <p className="mt-2 min-h-10 text-sm leading-relaxed text-ink-400">{plan.desc}</p>
                  <p className="mt-5 border-b border-dashed border-white/10 pb-5 font-mono text-sm text-volt-300">
                    {t.pricing.price}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-200">
                        <Check className="mt-0.5 size-4 shrink-0 text-volt-400" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={highlighted ? "primary" : "secondary"}
                    tone="onDark"
                    className="mt-7 w-full"
                    onClick={() => choose(plan.name)}
                  >
                    {t.pricing.cta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-center text-sm text-ink-400">
            <Info className="size-4 shrink-0" aria-hidden="true" />
            {t.pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
