import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";
type Tone = "onDark" | "onLight";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  tone?: Tone;
  href?: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit";
  disabled?: boolean;
  arrow?: "right" | "up-right" | "none";
  ariaLabel?: string;
  className?: string;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base sm:text-[17px]",
};

function variantClasses(variant: Variant, tone: Tone): string {
  if (variant === "primary") {
    return "bg-volt-400 text-ink-950 shadow-[0_10px_26px_-12px_rgba(201,242,84,0.55)] hover:bg-volt-300 hover:shadow-[0_16px_34px_-12px_rgba(201,242,84,0.65)] hover:-translate-y-0.5 active:translate-y-0";
  }
  if (variant === "secondary") {
    return tone === "onDark"
      ? "border border-ink-600/80 bg-white/[0.03] text-ink-100 hover:border-volt-400/50 hover:bg-white/[0.07] hover:-translate-y-0.5 active:translate-y-0"
      : "border border-ink-900/15 bg-white/70 text-ink-800 hover:border-ink-900/35 hover:bg-white hover:-translate-y-0.5 active:translate-y-0";
  }
  return tone === "onDark" ? "text-ink-200 hover:text-volt-300" : "text-ink-700 hover:text-ink-950";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  tone = "onDark",
  href,
  external = false,
  onClick,
  type = "button",
  disabled = false,
  arrow = "none",
  ariaLabel,
  className = "",
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-200 select-none disabled:pointer-events-none disabled:opacity-60 ${sizeClasses[size]} ${variantClasses(variant, tone)} ${className}`;

  const arrowIcon =
    arrow === "right" ? (
      <ArrowRight
        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    ) : arrow === "up-right" ? (
      <ArrowUpRight
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    ) : null;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
        {arrowIcon}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
      {arrowIcon}
    </button>
  );
}
