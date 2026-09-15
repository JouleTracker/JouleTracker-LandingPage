/** Event used to prefill the contact form subject (e.g., from a plan selection). */
export const SUBJECT_EVENT = "jt:subject";

export function dispatchSubjectPrefill(subject: string): void {
  window.dispatchEvent(new CustomEvent(SUBJECT_EVENT, { detail: subject }));
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", window.location.pathname);
  }
}

/** Scrolls to an element from a stored hash (on initial load). */
export function handleInitialHash(): void {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;
  window.setTimeout(() => {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
  }, 60);
}
