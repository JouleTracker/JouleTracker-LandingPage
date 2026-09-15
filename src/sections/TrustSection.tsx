import { useLanguage } from "../hooks/useLanguage";
import { trustIcons } from "../data/features";
import Reveal from "../components/Reveal";

export default function TrustSection() {
  const { t } = useLanguage();

  return (
    <section className="relative border-t border-white/[0.06] bg-ink-950 py-14" aria-label={t.trust.title}>
      <div className="noise-layer" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mx-auto max-w-xl text-center font-display text-lg font-medium text-ink-200 sm:text-xl">
            {t.trust.title}
          </p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.items.map((item, i) => {
            const Icon = trustIcons[i];
            return (
              <li key={item.label} className="h-full">
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="group flex h-full items-center gap-4 rounded-xl border border-white/[0.07] bg-ink-900/60 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-volt-400/30">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-ink-850 text-volt-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-paper">{item.label}</span>
                      <span className="mt-0.5 block text-xs text-ink-400">{item.desc}</span>
                    </span>
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
