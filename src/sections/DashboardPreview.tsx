import { motion } from "framer-motion";
import { Check, Info, Lock, Minus, TrendingDown } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { buildLineChart } from "../utils/chart";
import AnimatedCounter from "../components/AnimatedCounter";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const today = [
  1.1, 0.9, 0.8, 0.8, 1.0, 1.4, 2.2, 3.1, 3.8, 3.4, 3.0, 3.6, 4.2, 3.8, 3.4, 3.1, 3.6, 4.1, 4.6, 4.3,
  3.2, 2.2, 1.6, 1.2,
];
const prevDay = [
  1.3, 1.1, 0.9, 0.9, 1.2, 1.5, 2.4, 3.3, 4.0, 3.6, 3.2, 3.7, 4.4, 4.0, 3.5, 3.2, 3.8, 4.3, 4.8, 4.5,
  3.4, 2.4, 1.7, 1.3,
];

const chart = buildLineChart(today, 520, 170, 6);
const prevChart = buildLineChart(prevDay, 520, 170, 6);

const R = 42;
const CIRC = 2 * Math.PI * R;

const DONUT_COLORS: Record<string, string> = {
  volt: "#c9f254",
  teal: "#4cd6be",
  ink: "#3d5378",
};

export default function DashboardPreview() {
  const { t } = useLanguage();
  const d = t.dashboard;

  let cumulative = 0;
  const donutSegments = d.distribution.items.map((item) => {
    const len = (item.pct / 100) * CIRC;
    const start = cumulative;
    cumulative += len;
    return { ...item, len, start };
  });

  return (
    <section className="relative bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading tone="onLight" eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />

        {/* Browser mockup */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-xl border border-ink-900/10 bg-ink-900 shadow-[0_48px_100px_-40px_rgba(10,18,32,0.55)]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-white/[0.07] bg-ink-850 px-4 py-3">
              <span className="size-2.5 rounded-full bg-ink-600" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-ink-600" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-volt-500/70" aria-hidden="true" />
              <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded-md border border-white/[0.06] bg-ink-900/80 px-3 py-1.5">
                <Lock className="size-3 text-volt-400" aria-hidden="true" />
                <span className="font-mono text-[10px] text-ink-400">app.jouletracker.com</span>
              </div>
              <span className="hidden font-mono text-[10px] text-ink-500 sm:block">{d.chart.range}</span>
            </div>

            <div className="grid gap-3.5 p-4 sm:p-6">
              {/* KPI row */}
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {d.kpis.map((kpi, i) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className={`rounded-lg border p-4 ${
                      i === 0
                        ? "border-volt-400/30 bg-volt-400/[0.06]"
                        : "border-white/[0.06] bg-ink-850"
                    }`}
                  >
                    <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">
                      {kpi.label}
                    </p>
                    <p className="mt-1.5 font-display text-2xl font-semibold text-paper">
                      {kpi.value}
                      {kpi.unit && <span className="ml-1 text-xs font-normal text-ink-400">{kpi.unit}</span>}
                    </p>
                    <p
                      className={`mt-1 flex items-center gap-1 text-[11px] ${
                        kpi.tone === "good" ? "text-volt-300" : "text-ink-400"
                      }`}
                    >
                      {kpi.tone === "good" ? (
                        <TrendingDown className="size-3" aria-hidden="true" />
                      ) : (
                        <Minus className="size-3" aria-hidden="true" />
                      )}
                      {kpi.delta}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Chart + distribution */}
              <div className="grid gap-3.5 lg:grid-cols-[1.65fr_1fr]">
                <div className="rounded-lg border border-white/[0.06] bg-ink-850 p-4">
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs font-semibold text-paper">{d.chart.title}</p>
                    <p className="hidden font-mono text-[10px] text-ink-500 sm:block">{d.chart.range}</p>
                  </div>
                  <svg viewBox="0 0 520 170" className="mt-3 h-40 w-full sm:h-48" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#c9f254" stopOpacity="0.24" />
                        <stop offset="100%" stopColor="#c9f254" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[42, 84, 126].map((y) => (
                      <line key={y} x1="6" x2="514" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    ))}
                    {[130, 260, 390].map((x) => (
                      <line key={x} x1={x} x2={x} y1="6" y2="164" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    ))}
                    <motion.path
                      d={prevChart.line}
                      fill="none"
                      stroke="#4cd6be"
                      strokeWidth="1.5"
                      strokeDasharray="4 5"
                      opacity="0.45"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
                    />
                    <motion.path
                      d={chart.area}
                      fill="url(#dashArea)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 1.3 }}
                    />
                    <motion.path
                      d={chart.line}
                      fill="none"
                      stroke="#c9f254"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
                    />
                    <motion.circle
                      cx={chart.pts[chart.pts.length - 1][0]}
                      cy={chart.pts[chart.pts.length - 1][1]}
                      r="4"
                      fill="#ddf97e"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.9 }}
                    />
                  </svg>
                  <div className="mt-2 flex justify-between font-mono text-[9px] text-ink-500">
                    <span>00:00</span>
                    <span>08:00</span>
                    <span>16:00</span>
                    <span>23:00</span>
                  </div>
                </div>

                {/* Distribution donut */}
                <div className="rounded-lg border border-white/[0.06] bg-ink-850 p-4">
                  <p className="text-xs font-semibold text-paper">{d.distribution.title}</p>
                  <div className="mt-3 flex items-center gap-4">
                    <svg viewBox="0 0 112 112" className="size-24 shrink-0 -rotate-90" aria-hidden="true">
                      <circle cx="56" cy="56" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="11" />
                      {donutSegments.map((seg, i) => (
                        <motion.circle
                          key={seg.label}
                          cx="56"
                          cy="56"
                          r={R}
                          fill="none"
                          stroke={DONUT_COLORS[seg.color]}
                          strokeWidth="11"
                          strokeLinecap="butt"
                          strokeDashoffset={-seg.start}
                          initial={{ strokeDasharray: `0 ${CIRC}` }}
                          whileInView={{ strokeDasharray: `${seg.len} ${CIRC - seg.len}` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                        />
                      ))}
                    </svg>
                    <ul className="flex-1 space-y-2">
                      {d.distribution.items.map((item) => (
                        <li key={item.label} className="flex items-center gap-2 text-[11px]">
                          <span
                            className="size-2 rounded-full"
                            style={{ backgroundColor: DONUT_COLORS[item.color] }}
                            aria-hidden="true"
                          />
                          <span className="flex-1 text-ink-300">{item.label}</span>
                          <span className="font-mono text-ink-400">{item.pct}%</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Devices + recommendation */}
              <div className="grid gap-3.5 lg:grid-cols-2">
                <div className="rounded-lg border border-white/[0.06] bg-ink-850 p-4">
                  <p className="text-xs font-semibold text-paper">{d.devices.title}</p>
                  <ul className="mt-3 divide-y divide-white/[0.05]">
                    {d.devices.items.map((dev) => (
                      <li key={dev.name} className="flex items-center justify-between py-2">
                        <span>
                          <span className="block text-xs text-ink-200">{dev.name}</span>
                          <span className="font-mono text-[9px] uppercase tracking-wider text-ink-500">
                            {dev.space}
                          </span>
                        </span>
                        <span
                          className={`flex items-center gap-1.5 font-mono text-[10px] ${
                            dev.status === "online" ? "text-volt-300" : "text-ink-400"
                          }`}
                        >
                          <span
                            className={`size-1.5 rounded-full ${
                              dev.status === "online" ? "bg-volt-400" : "bg-ink-400"
                            }`}
                            aria-hidden="true"
                          />
                          {dev.status === "online" ? d.devices.online : d.devices.standby}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between rounded-lg border border-volt-400/25 bg-volt-400/[0.05] p-4">
                  <div>
                    <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-volt-300">
                      <Check className="size-3.5" aria-hidden="true" />
                      {d.recommendation.label}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-200">{d.recommendation.text}</p>
                  </div>
                  <div className="mt-4 flex gap-1" aria-hidden="true">
                    {[46, 30, 58, 22, 40, 34, 52].map((h, i) => (
                      <motion.span
                        key={i}
                        initial={{ height: 4 }}
                        whileInView={{ height: h }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.6 + i * 0.07, ease: "easeOut" }}
                        className={`w-1.5 rounded-full ${i % 3 === 0 ? "bg-volt-400/70" : "bg-volt-400/30"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Demo stats */}
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {d.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <p className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} pad={stat.pad} />
              </p>
              <p className="mt-2 text-sm text-ink-500">{stat.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
            <Info className="size-3.5" aria-hidden="true" />
            {d.statsNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
