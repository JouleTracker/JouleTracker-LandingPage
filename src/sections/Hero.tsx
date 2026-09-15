import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Cpu, TrendingDown } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { buildLineChart } from "../utils/chart";
import { scrollToId } from "../utils/scroll";
import Button from "../components/Button";

const heroChart = buildLineChart([3.2, 4.4, 3.8, 5.2, 4.1, 3.4, 4.6], 260, 88);

const fadeItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

export default function Hero() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const m = t.hero.mock;

  const spaces = [
    { name: m.space1, pct: 46 },
    { name: m.space2, pct: 33 },
    { name: m.space3, pct: 21 },
  ];

  return (
    <section
      id="inicio"
      data-anchor
      aria-label={t.hero.eyebrow}
      className="relative overflow-hidden bg-ink-950"
    >
      {/* Ambient background */}
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" aria-hidden="true" />
      <div
        className="absolute -top-40 left-[8%] h-[420px] w-[420px] rounded-full bg-volt-500/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-10%] top-[30%] h-[380px] w-[380px] rounded-full bg-voltteal-500/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div className="noise-layer" aria-hidden="true" />
      {/* Energy line crossing the section */}
      <svg
        className="pointer-events-none absolute bottom-24 left-0 hidden w-full text-volt-400/25 lg:block"
        viewBox="0 0 1440 80"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60 C 240 55, 320 20, 560 28 C 800 36, 900 66, 1120 50 C 1300 38, 1380 18, 1440 12"
          stroke="currentColor"
          strokeWidth="1.5"
          className="energy-line"
        />
        <circle cx="560" cy="28" r="3" fill="currentColor" />
        <circle cx="1120" cy="50" r="3" fill="currentColor" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-40">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={fadeItem}
            className="inline-flex items-center gap-2.5 rounded-full border border-ink-600/70 bg-ink-900/70 px-4 py-1.5"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-volt-400" />
              <span className="relative inline-flex size-2 rounded-full bg-volt-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-volt-300">
              {t.hero.eyebrow}
            </span>
          </motion.p>

          <motion.h1
            variants={fadeItem}
            className="mt-7 font-display text-[40px] font-bold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-[64px]"
          >
            {t.hero.titleA}
            <span className="mt-1 block text-volt-300">{t.hero.titleB}</span>
          </motion.h1>

          <motion.p
            variants={fadeItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div variants={fadeItem} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" arrow="right" onClick={() => scrollToId("contacto")}>
              {t.hero.ctaPrimary}
            </Button>
            <Button size="lg" variant="secondary" tone="onDark" onClick={() => scrollToId("solucion")}>
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>

        {/* Product mockup */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.97 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div
            className="absolute -right-10 -top-10 size-40 rounded-full border border-dashed border-ink-600/50"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-8 -left-8 size-24 rounded-full bg-volt-400/10 blur-xl"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)] backdrop-blur">
            {/* Window bar */}
            <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
              <span className="size-2.5 rounded-full bg-ink-600" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-ink-600" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-volt-500/70" aria-hidden="true" />
              <span className="ml-2 flex-1 truncate font-mono text-[11px] text-ink-400">
                {m.windowTitle}
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-volt-400/30 px-2 py-0.5 font-mono text-[10px] text-volt-300">
                <span className="size-1.5 animate-pulse rounded-full bg-volt-400" aria-hidden="true" />
                {m.live}
              </span>
            </div>

            <div className="space-y-3.5 p-4 sm:p-5">
              {/* KPI cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-white/[0.06] bg-ink-850 p-3">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-ink-500">{m.current}</p>
                  <p className="mt-1.5 font-display text-xl font-semibold text-paper">
                    12.4 <span className="text-[10px] font-normal text-ink-400">kWh</span>
                  </p>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-ink-850 p-3">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-ink-500">{m.devices}</p>
                  <p className="mt-1.5 font-display text-xl font-semibold text-paper">12</p>
                </div>
                <div className="rounded-lg border border-volt-400/20 bg-volt-400/[0.07] p-3">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-volt-300/70">7d</p>
                  <p className="mt-1.5 flex items-center gap-1 font-display text-xl font-semibold text-volt-300">
                    <TrendingDown className="size-4" aria-hidden="true" />
                    −8%
                  </p>
                </div>
              </div>

              {/* Chart */}
              <div className="rounded-lg border border-white/[0.06] bg-ink-850 p-3.5">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs font-semibold text-paper">{m.chart}</p>
                  <p className="font-mono text-[10px] text-ink-500">{m.chartSub}</p>
                </div>
                <svg viewBox="0 0 260 88" className="mt-2 h-24 w-full" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c9f254" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#c9f254" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[22, 44, 66].map((y) => (
                    <line key={y} x1="4" x2="256" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  ))}
                  <motion.path
                    d={heroChart.area}
                    fill="url(#heroArea)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                  <motion.path
                    d={heroChart.line}
                    fill="none"
                    stroke="#c9f254"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx={heroChart.pts[heroChart.pts.length - 1][0]}
                    cy={heroChart.pts[heroChart.pts.length - 1][1]}
                    r="3.5"
                    fill="#ddf97e"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.1 }}
                  />
                </svg>
              </div>

              {/* Spaces */}
              <div className="rounded-lg border border-white/[0.06] bg-ink-850 p-3.5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-ink-500">{m.spaces}</p>
                <div className="mt-2.5 space-y-2">
                  {spaces.map((s, i) => (
                    <div key={s.name} className="flex items-center gap-3">
                      <span className="w-20 shrink-0 truncate text-[11px] text-ink-300">{s.name}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-700/70">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-volt-500 to-volt-300"
                          initial={{ width: 0 }}
                          animate={{ width: `${s.pct}%` }}
                          transition={{ duration: 0.9, delay: 1 + i * 0.15, ease: "easeOut" }}
                        />
                      </div>
                      <span className="w-8 text-right font-mono text-[10px] text-ink-400">{s.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating widgets */}
          <div className="soft-float absolute -right-3 -top-5 sm:-right-6">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-ink-800/95 px-3.5 py-2.5 shadow-xl backdrop-blur">
              <TrendingDown className="size-4 text-volt-300" aria-hidden="true" />
              <span className="font-mono text-[11px] text-volt-300">{m.trendDown}</span>
            </div>
          </div>
          <div className="soft-float-slow absolute -bottom-5 -left-3 sm:-left-6">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-ink-800/95 px-3.5 py-2.5 shadow-xl backdrop-blur">
              <Cpu className="size-4 text-voltteal-300" aria-hidden="true" />
              <span className="text-[11px] font-medium text-ink-200">{m.floatDevices}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="relative hidden justify-center pb-8 md:flex">
        <button
          type="button"
          onClick={() => scrollToId("solucion")}
          className="group flex flex-col items-center gap-2.5"
          aria-label={t.hero.scroll}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-500 transition-colors group-hover:text-volt-300">
            {t.hero.scroll}
          </span>
          <span className="flex h-9 w-5 justify-center rounded-full border border-ink-600 pt-1.5">
            {reduced ? (
              <ChevronDown className="size-3 text-ink-400" aria-hidden="true" />
            ) : (
              <motion.span
                animate={{ y: [0, 7, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-volt-400"
                aria-hidden="true"
              />
            )}
          </span>
        </button>
      </div>
    </section>
  );
}
