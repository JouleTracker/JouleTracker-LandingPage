import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { scrollToId } from "../utils/scroll";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-32" aria-label={t.finalCta.title}>
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)]" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[380px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt-500/[0.07] blur-3xl"
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg
        className="pointer-events-none absolute bottom-10 left-0 w-full text-volt-400/20"
        viewBox="0 0 1440 60"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 40 C 260 36, 380 12, 640 20 C 900 28, 1020 52, 1240 36 C 1360 28, 1410 14, 1440 8"
          stroke="currentColor"
          strokeWidth="1.5"
          className="energy-line"
        />
      </svg>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-volt-300">JouleTracker</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-5xl">
            {t.finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {t.finalCta.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex justify-center">
            <Button size="lg" arrow="right" onClick={() => scrollToId("contacto")}>
              {t.finalCta.button}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
