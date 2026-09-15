import { socialLinks } from "../data/socialLinks";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";

interface SocialLinksProps {
  tone?: "onDark" | "onLight";
  className?: string;
}

const ICONS: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};

export default function SocialLinks({ tone = "onDark", className = "" }: SocialLinksProps) {
  const base = "grid size-10 place-items-center rounded-lg border transition-all duration-200";
  const look =
    tone === "onDark"
      ? "border-ink-600/70 text-ink-300 hover:border-volt-400/50 hover:text-volt-300"
      : "border-ink-900/12 text-ink-500 hover:border-ink-900/30 hover:text-ink-900";

  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = ICONS[link.id];
        if (link.href) {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`${base} ${look} hover:-translate-y-0.5`}
              >
                <Icon className="size-[18px]" />
              </a>
            </li>
          );
        }
        return (
          <li key={link.id}>
            <span
              aria-hidden="true"
              title={link.label}
              className={`${base} ${look} cursor-not-allowed opacity-40`}
            >
              <Icon className="size-[18px]" />
            </span>
          </li>
        );
      })}
    </ul>
  );
}
