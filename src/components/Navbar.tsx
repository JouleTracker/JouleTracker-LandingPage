import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useActiveSection, useScrolled } from "../hooks/useScroll";
import { useLanguage } from "../hooks/useLanguage";
import { SECTION_IDS } from "../data/site";
import { scrollToId } from "../utils/scroll";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

interface NavItem {
  id: string;
  labelKey:
    | "inicio"
    | "solucion"
    | "comoFunciona"
    | "planes"
    | "testimonios"
    | "faq"
    | "contacto";
}

const NAV_ITEMS: NavItem[] = [
  { id: "inicio", labelKey: "inicio" },
  { id: "solucion", labelKey: "solucion" },
  { id: "como-funciona", labelKey: "comoFunciona" },
  { id: "planes", labelKey: "planes" },
  { id: "testimonios", labelKey: "testimonios" },
  { id: "faq", labelKey: "faq" },
  { id: "contacto", labelKey: "contacto" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const scrolled = useScrolled(28);
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // Wait for the drawer to unmount so body overflow is released first.
    window.setTimeout(() => scrollToId(id), open ? 80 : 0);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-ink-950/85 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.7)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
            scrolled ? "h-14" : "h-[74px]"
          }`}
        >
          <Logo tone="onDark" />

          {/* Desktop navigation */}
          <nav aria-label="Principal" className="hidden items-center gap-0.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.id);
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-volt-300" : "text-ink-300 hover:text-paper"
                  }`}
                >
                  {t.nav[item.labelKey]}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-volt-400 transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <Button
              size="sm"
              arrow="right"
              className="hidden md:inline-flex"
              onClick={() => go("contacto")}
            >
              {t.nav.cta}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              className="grid size-10 place-items-center rounded-lg border border-ink-600/70 bg-ink-850/80 text-ink-100 transition-colors hover:border-volt-400/50 lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              aria-label="Menú móvil"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[min(320px,88vw)] flex-col gap-1 overflow-y-auto border-l border-white/10 bg-ink-900 p-6 pt-[140px]"
            >
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.nav.closeMenu}
                className="absolute right-4 top-[84px] grid size-10 place-items-center rounded-lg border border-ink-600/70 bg-ink-900 text-ink-200 hover:border-volt-400/50"
              >
                <X className="size-5" aria-hidden="true" />
              </button>

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.id);
                  }}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    active === item.id
                      ? "bg-ink-800 text-volt-300"
                      : "text-ink-200 hover:bg-ink-800 hover:text-paper"
                  }`}
                >
                  {t.nav[item.labelKey]}
                </a>
              ))}

              <div className="mt-4 flex items-center justify-between border-t border-white/10 px-4 pt-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                  {t.language.label}
                </span>
                <LanguageSwitcher />
              </div>

              <Button className="mt-5 w-full" size="lg" arrow="right" onClick={() => go("contacto")}>
                {t.nav.cta}
              </Button>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
