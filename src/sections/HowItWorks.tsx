import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { stepIcons } from "../data/features";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function HowItWorks() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 68%"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section id="como-funciona" data-anchor className="relative overflow-hidden bg-ink-950 py-20 sm:py-24 lg:py-28">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-volt-400/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="onDark"
          eyebrow={t.how.eyebrow}
          title={t.how.title}
          subtitle={t.how.subtitle}
        />

        <div ref={ref} className="relative mt-16">
          {/* Connector — desktop */}
          <div className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-white/10 md:block" aria-hidden="true">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-volt-400 to-voltteal-400"
              style={{ scaleX }}
            />
          </div>
          {/* Connector — mobile */}
          <div className="absolute bottom-8 left-7 top-8 w-px bg-white/10 md:hidden" aria-hidden="true">
            <motion.div
              className="w-full origin-top bg-gradient-to-b from-volt-400 to-voltteal-400"
              style={{ scaleY }}
            />
          </div>

          <ol className="flex flex-col gap-12 md:grid md:grid-cols-3 md:gap-8">
            {t.how.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <li key={step.title} className="relative">
                  <Reveal
                    delay={i * 0.12}
                    className="flex gap-6 md:flex-col md:items-center md:gap-0 md:text-center"
                  >
                    <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-volt-400/40 bg-ink-900 text-volt-300 shadow-[0_0_24px_-6px_rgba(201,242,84,0.4)]">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <div className="pt-1 md:pt-7">
                      <p className="font-mono text-xs tracking-[0.3em] text-volt-300" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-paper">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-ink-400 md:mx-auto">
                        {step.desc}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
