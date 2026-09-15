import { useLanguage } from "../hooks/useLanguage";
import type { Lang } from "../i18n";

interface LanguageSwitcherProps {
  className?: string;
}

const LANGS: { code: Lang; short: string }[] = [
  { code: "es", short: "ES" },
  { code: "en", short: "EN" },
];

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`inline-flex items-center rounded-lg border border-ink-600/70 bg-ink-850/80 p-0.5 ${className}`}
    >
      {LANGS.map(({ code, short }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            aria-label={code === "es" ? t.language.es : t.language.en}
            onClick={() => setLang(code)}
            className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-medium tracking-widest transition-colors duration-200 ${
              active
                ? "bg-volt-400 text-ink-950"
                : "text-ink-300 hover:text-paper"
            }`}
          >
            {short}
          </button>
        );
      })}
    </div>
  );
}
