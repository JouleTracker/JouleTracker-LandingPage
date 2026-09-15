import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "onDark" | "onLight";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "onLight",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <p
        className={`inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] sm:text-xs ${
          centered ? "justify-center" : ""
        } ${tone === "onDark" ? "text-volt-300" : "text-volt-700"}`}
      >
        <span className="inline-block size-1.5 rounded-[2px] bg-volt-400" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[44px] ${
          tone === "onDark" ? "text-paper" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "onDark" ? "text-ink-300" : "text-ink-500"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
