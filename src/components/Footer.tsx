import { Zap } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { scrollToId } from "../utils/scroll";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

interface FooterLink {
  id: string;
  label: string;
}

export default function Footer() {
  const { t } = useLanguage();

  const product: FooterLink[] = [
    { id: "solucion", label: t.nav.solucion },
    { id: "como-funciona", label: t.nav.comoFunciona },
    { id: "planes", label: t.nav.planes },
    { id: "beneficios", label: t.footer.benefits },
  ];
  const resources: FooterLink[] = [
    { id: "faq", label: t.nav.faq },
    { id: "faq", label: t.footer.help },
    { id: "contacto", label: t.nav.contacto },
  ];
  const company: FooterLink[] = [
    { id: "sobre-nosotros", label: t.footer.about },
    { id: "ubicacion", label: t.footer.location },
  ];

  const renderColumn = (title: string, links: FooterLink[]) => (
    <nav aria-label={title}>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link, i) => (
          <li key={`${link.id}-${i}`}>
            <a
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(link.id);
              }}
              className="text-sm text-ink-300 transition-colors duration-200 hover:text-volt-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="noise-layer" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full bg-volt-500/[0.05] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="onDark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              {t.footer.description}
            </p>
            <SocialLinks tone="onDark" className="mt-6" />
          </div>

          {renderColumn(t.footer.product, product)}
          {renderColumn(t.footer.resources, resources)}
          {renderColumn(t.footer.company, company)}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[13px] text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="transition-colors hover:text-volt-300"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="transition-colors hover:text-volt-300"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
        <p className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
          <Zap className="size-3 text-volt-500" aria-hidden="true" />
          {t.footer.madeIn}
        </p>
      </div>
    </footer>
  );
}
