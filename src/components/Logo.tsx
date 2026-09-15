import { Zap } from "lucide-react";
import { scrollToTop } from "../utils/scroll";

interface LogoProps {
  tone?: "onDark" | "onLight";
  className?: string;
}

export default function Logo({ tone = "onDark", className = "" }: LogoProps) {
  return (
    <a
      href="#inicio"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      aria-label="JouleTracker — inicio"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        className="grid size-9 place-items-center rounded-[10px] bg-gradient-to-br from-volt-300 to-volt-600 shadow-[0_6px_18px_-6px_rgba(201,242,84,0.6)] transition-transform duration-300 group-hover:rotate-6"
        aria-hidden="true"
      >
        <Zap className="size-[18px] text-ink-950" strokeWidth={2.6} />
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          tone === "onDark" ? "text-paper" : "text-ink-900"
        }`}
      >
        Joule<span className="text-volt-500">Tracker</span>
      </span>
    </a>
  );
}
