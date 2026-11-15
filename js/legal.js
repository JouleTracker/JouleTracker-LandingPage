import { translations, t } from "./i18n.js";

const LANG_KEY = "jt-lang";
const root = document.documentElement;
const pageType = document.body.dataset.legalPage === "privacy" ? "privacy" : "terms";

function detectLang() {
  try {
    const stored = window.localStorage.getItem(LANG_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    /* storage unavailable */
  }
  return (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
}

function applyTranslations(code) {
  const dict = translations[code] || translations.es;
  const pageDict = dict.legal[pageType];

  root.lang = code;
  if (pageDict?.metaTitle) document.title = pageDict.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && pageDict?.metaDesc) {
    metaDesc.setAttribute("content", pageDict.metaDesc);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(dict, el.dataset.i18n);
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll("[data-lang-group]").forEach((group) => {
    group.setAttribute("aria-label", dict.language.label);
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const active = btn.dataset.lang === code;
    btn.setAttribute("aria-pressed", String(active));
    btn.classList.toggle("is-active", active);
  });
}

let currentLang = detectLang();
applyTranslations(currentLang);

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nextLang = btn.dataset.lang;
    if (nextLang !== currentLang && (nextLang === "es" || nextLang === "en")) {
      currentLang = nextLang;
      try {
        window.localStorage.setItem(LANG_KEY, currentLang);
      } catch {
        /* storage unavailable */
      }
      applyTranslations(currentLang);
    }
  });
});
