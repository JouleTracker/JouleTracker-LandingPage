import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { scrollToId } from "../utils/scroll";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" data-anchor className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <SectionHeading
            tone="onLight"
            align="left"
            eyebrow={t.faq.eyebrow}
            title={t.faq.title}
            subtitle={t.faq.subtitle}
          />
          <Reveal delay={0.15}>
            <div className="relative mt-8 overflow-hidden rounded-xl bg-ink-900 p-7">
              <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent)]" aria-hidden="true" />
              <div className="relative">
                <h3 className="font-display text-lg font-semibold text-paper">{t.faq.more.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{t.faq.more.text}</p>
                <Button size="sm" arrow="right" className="mt-5" onClick={() => scrollToId("contacto")}>
                  {t.faq.more.cta}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="border-b border-ink-900/10">
                  <h3>
                    <button
                      type="button"
                      id={`faq-btn-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span
                        className={`text-[15px] font-semibold transition-colors duration-200 sm:text-base ${
                          isOpen ? "text-ink-950" : "text-ink-700"
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-volt-500 bg-volt-400 text-ink-950"
                            : "border-ink-900/15 text-ink-500"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-10 text-sm leading-relaxed text-ink-500">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
