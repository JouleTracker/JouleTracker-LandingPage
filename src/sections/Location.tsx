import { MapPin } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { MAPS_URL } from "../data/site";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function MapVisual({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-ink-900/10 bg-[#E9EFE2] shadow-card">
      <svg viewBox="0 0 440 330" className="h-full w-full" role="img" aria-label={label}>
        {/* blocks */}
        <rect x="0" y="0" width="440" height="330" fill="#E9EFE2" />
        <rect x="20" y="24" width="120" height="86" rx="6" fill="#DFE8D8" />
        <rect x="170" y="24" width="150" height="86" rx="6" fill="#E2EAD9" />
        <rect x="20" y="150" width="120" height="80" rx="6" fill="#E2EAD9" />
        <rect x="250" y="170" width="150" height="70" rx="6" fill="#DFE8D8" />
        <rect x="340" y="34" width="80" height="66" rx="6" fill="#E2EAD9" />
        <rect x="30" y="270" width="140" height="44" rx="6" fill="#E2EAD9" />
        <rect x="330" y="262" width="90" height="52" rx="6" fill="#DFE8D8" />
        {/* side streets */}
        {[60, 160, 240, 360].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="330" stroke="#D4DFCB" strokeWidth="7" />
        ))}
        {[130, 248].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="440" y2={y} stroke="#D4DFCB" strokeWidth="7" />
        ))}
        {/* main avenue */}
        <path d="M-10 320 L450 60" stroke="#C7D6BC" strokeWidth="18" />
        <path d="M-10 320 L450 60" stroke="#F4F8F0" strokeWidth="1.5" strokeDasharray="10 12" />
        <text
          x="180"
          y="228"
          fill="#8FA183"
          fontSize="11"
          fontFamily="JetBrains Mono, monospace"
          transform="rotate(-30 180 228)"
        >
          Av. La Marina
        </text>
        {/* reference dot */}
        <circle cx="220" cy="166" r="26" fill="#C9F254" opacity="0.16" />
      </svg>

      {/* Pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <span className="relative flex size-5 items-center justify-center">
          <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-volt-500/70" />
          <span className="relative inline-flex size-3.5 rounded-full border-2 border-volt-300 bg-ink-900 shadow" />
        </span>
      </div>

      <span className="absolute bottom-4 left-4 rounded-lg border border-ink-900/10 bg-white/95 px-3 py-2 font-mono text-[10px] text-ink-600 shadow backdrop-blur">
        {label}
      </span>
      <span
        className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-ink-900/10 bg-white/95 font-mono text-[10px] font-semibold text-ink-700 shadow"
        aria-hidden="true"
      >
        N↑
      </span>
    </div>
  );
}

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="ubicacion" data-anchor className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading tone="onLight" eyebrow={t.location.eyebrow} title={t.location.title} />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.25fr]">
          <Reveal>
            <div className="rounded-xl border border-ink-900/10 bg-white p-8 shadow-card">
              <span className="grid size-12 place-items-center rounded-lg bg-ink-900 text-volt-300">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink-900">
                {t.location.campus}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{t.location.address}</p>
              <p className="mt-4 rounded-lg bg-paper-50 p-3.5 text-xs leading-relaxed text-ink-500">
                {t.location.tip}
              </p>
              <Button href={MAPS_URL} external arrow="up-right" className="mt-6">
                {t.location.view}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <MapVisual label={t.location.mapLabel} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
