import { translations, t } from "./i18n.js";

/* ============================================================
   JouleTracker — main.js (vanilla, no dependencies)
   ============================================================ */

const root = document.documentElement;
root.classList.remove("no-js");
root.classList.add("js");

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ---------------- Language (ES / EN) ---------------- */

const LANG_KEY = "jt-lang";

function detectLang() {
  try {
    const stored = window.localStorage.getItem(LANG_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    /* storage unavailable */
  }
  return (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
}

let lang = detectLang();

function applyTranslations(code) {
  const dict = translations[code];
  root.lang = code;
  document.title = dict.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", dict.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(dict, el.dataset.i18n);
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const idx = pair.indexOf(":");
      const attr = pair.slice(0, idx).trim();
      const key = pair.slice(idx + 1).trim();
      const value = t(dict, key);
      if (value != null) el.setAttribute(attr, value);
    });
  });

  document.querySelectorAll("[data-lang-group]").forEach((g) => {
    g.setAttribute("aria-label", dict.language.label);
  });

  document.querySelectorAll("[data-lang]").forEach((b) => {
    const active = b.dataset.lang === code;
    b.setAttribute("aria-pressed", String(active));
    b.classList.toggle("is-active", active);
  });

  // Testimonial dot labels (contain a placeholder {n})
  document.querySelectorAll(".t-dot").forEach((dot, i) => {
    dot.setAttribute("aria-label", dict.testimonials.dot.replace("{n}", String(i + 1)));
  });
}

function setLang(code) {
  lang = code;
  try {
    window.localStorage.setItem(LANG_KEY, code);
  } catch {
    /* storage unavailable */
  }
  applyTranslations(code);
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.lang !== lang) setLang(btn.dataset.lang);
  });
});

applyTranslations(lang);

/* ---------------- Smooth scroll (custom, header-aware) ---------------- */

let scrollAnim = null;
const cancelScrollAnim = () => {
  if (scrollAnim) {
    cancelAnimationFrame(scrollAnim);
    scrollAnim = null;
  }
};
// Any user interaction cancels an in-flight programmatic scroll.
["wheel", "touchstart", "keydown"].forEach((evt) =>
  window.addEventListener(evt, cancelScrollAnim, { passive: true }),
);

function headerOffset() {
  const h = document.getElementById("site-header");
  return (h ? h.getBoundingClientRect().height : 60) + 12;
}

function easeInOutQuint(x) {
  return x < 0.5 ? 16 * x ** 5 : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

function smoothScrollTo(targetY) {
  cancelScrollAnim();
  const startY = window.scrollY;
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.max(0, Math.min(targetY, maxY));
  const distance = endY - startY;
  if (Math.abs(distance) < 2) return;

  if (REDUCED) {
    window.scrollTo(0, endY);
    return;
  }

  // Duration scales with distance, clamped between 450ms and 1100ms.
  const duration = Math.min(1100, Math.max(450, Math.abs(distance) * 0.45));
  const start = performance.now();

  const step = (now) => {
    const p = Math.min(1, (now - start) / duration);
    window.scrollTo(0, startY + distance * easeInOutQuint(p));
    if (p < 1) {
      scrollAnim = requestAnimationFrame(step);
    } else {
      scrollAnim = null;
    }
  };
  scrollAnim = requestAnimationFrame(step);
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset();
  smoothScrollTo(id === "inicio" ? 0 : y);
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", id === "inicio" ? window.location.pathname : `#${id}`);
  }
  // Move focus to the section for keyboard/screen-reader users (without re-scrolling).
  if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}

document.querySelectorAll("a[data-scroll]").forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").replace("#", "");
    if (!id) return;
    e.preventDefault();
    closeDrawer();
    scrollToId(id);
  });
});

document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
  btn.addEventListener("click", () => {
    closeDrawer();
    scrollToId(btn.dataset.scrollTo);
  });
});

// "Prepared for the future" placeholder links
document.querySelectorAll("a[data-noop]").forEach((a) => {
  a.addEventListener("click", (e) => e.preventDefault());
});

// Deep link on load (header-aware, no animation)
if (window.location.hash) {
  const id = window.location.hash.replace("#", "");
  window.setTimeout(() => {
    const el = document.getElementById(id);
    if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - headerOffset());
  }, 80);
}

// Drawer links: wait for the drawer to close before scrolling (avoids a jump).
document.querySelectorAll(".drawer a[data-scroll], .drawer [data-scroll-to]").forEach((el) => {
  el.addEventListener(
    "click",
    (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      const id = el.dataset.scrollTo || el.getAttribute("href").replace("#", "");
      closeDrawer();
      window.setTimeout(() => scrollToId(id), 120);
    },
    true,
  );
});

/* ---------------- Navbar state ---------------- */

const header = document.getElementById("site-header");

function onScrollNav() {
  header.classList.toggle("is-scrolled", window.scrollY > 28);
}
window.addEventListener("scroll", onScrollNav, { passive: true });
onScrollNav();

/* ---------------- Active section ---------------- */

const NAV_IDS = ["inicio", "solucion", "como-funciona", "planes", "testimonios", "faq", "contacto"];
const navLinks = document.querySelectorAll(".nav__link[data-nav]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) =>
        link.classList.toggle("is-active", link.dataset.nav === entry.target.id),
      );
    });
  },
  { rootMargin: "-30% 0px -55% 0px" },
);

NAV_IDS.forEach((id) => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

/* ---------------- Mobile drawer ---------------- */

const drawer = document.getElementById("mobile-menu");
const burger = document.querySelector("[data-drawer-toggle]");

function openDrawer() {
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  burger.setAttribute("aria-expanded", "true");
  window.setTimeout(() => drawer.querySelector(".drawer__close").focus(), 60);
}

function closeDrawer() {
  if (!drawer.classList.contains("is-open")) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  burger.setAttribute("aria-expanded", "false");
  burger.focus();
}

burger.addEventListener("click", () => {
  drawer.classList.contains("is-open") ? closeDrawer() : openDrawer();
});

drawer.querySelectorAll("[data-drawer-close]").forEach((el) => {
  el.addEventListener("click", closeDrawer);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});

/* ---------------- Scroll reveal ---------------- */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "-60px 0px", threshold: 0.1 },
);

document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

/* ---------------- Charts (smooth SVG paths) ---------------- */

function smoothPath(points) {
  if (points.length < 2) return "";
  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }
  return d;
}

function buildChart(svg) {
  const values = svg.dataset.values.split(",").map(Number);
  const prev = svg.dataset.prev ? svg.dataset.prev.split(",").map(Number) : null;
  const w = Number(svg.dataset.w);
  const h = Number(svg.dataset.h);
  const pad = Number(svg.dataset.pad ?? 6);

  const all = prev ? [...values, ...prev] : values;
  const max = Math.max(...all) * 1.12;
  const min = Math.min(...all) * 0.72;
  const span = max - min || 1;
  const stepX = (w - pad * 2) / (values.length - 1);

  const toPts = (vals) =>
    vals.map((v, i) => [pad + i * stepX, pad + (h - pad * 2) * (1 - (v - min) / span)]);

  const pts = toPts(values);
  const line = smoothPath(pts);
  const last = pts[pts.length - 1];
  const first = pts[0];
  const area = `${line} L ${last[0].toFixed(2)} ${h - pad} L ${first[0].toFixed(2)} ${h - pad} Z`;

  const main = svg.querySelector(".chart__line:not(.chart__line--prev)");
  if (main) main.setAttribute("d", line);
  const areaEl = svg.querySelector(".chart__area");
  if (areaEl) areaEl.setAttribute("d", area);
  const dot = svg.querySelector(".chart__dot");
  if (dot) {
    dot.setAttribute("cx", last[0].toFixed(2));
    dot.setAttribute("cy", last[1].toFixed(2));
  }
  const prevEl = svg.querySelector(".chart__line--prev");
  if (prevEl && prev) prevEl.setAttribute("d", smoothPath(toPts(prev)));
}

document.querySelectorAll("svg.chart").forEach(buildChart);

/* ---------------- Counters ---------------- */

function animateCount(el) {
  const target = Number(el.dataset.count);
  const pad = Number(el.dataset.pad ?? 1);
  const suffix = el.dataset.suffix ?? "";
  const format = (v) => String(Math.round(v)).padStart(pad, "0") + suffix;

  if (REDUCED) {
    el.textContent = format(target);
    return;
  }

  el.textContent = format(0);
  const duration = 1400;
  const start = performance.now();
  const ease = (x) => 1 - Math.pow(1 - x, 3);

  const tick = (now) => {
    const p = Math.min(1, (now - start) / duration);
    el.textContent = format(target * ease(p));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "-40px 0px", threshold: 0.4 },
);

document.querySelectorAll(".count").forEach((el) => countObserver.observe(el));

/* ---------------- How it works progress line ---------------- */

const howSteps = document.getElementById("how-steps");
const howLineH = document.getElementById("how-line-h");
const howLineV = document.getElementById("how-line-v");

let howTicking = false;
function updateHowLine() {
  howTicking = false;
  const rect = howSteps.getBoundingClientRect();
  const vh = window.innerHeight;
  const p = Math.min(1, Math.max(0, (vh * 0.75 - rect.top) / rect.height));
  howLineH.style.transform = `scaleX(${p})`;
  howLineV.style.transform = `scaleY(${p})`;
}

window.addEventListener(
  "scroll",
  () => {
    if (!howTicking) {
      howTicking = true;
      requestAnimationFrame(updateHowLine);
    }
  },
  { passive: true },
);
updateHowLine();

/* ---------------- Testimonials slider (mobile) ---------------- */

const track = document.getElementById("t-track");
const gridCards = [...document.querySelectorAll(".t-grid .t-card")];
const dots = [...document.querySelectorAll(".t-dot")];

// Clone grid cards into the slider track
gridCards.forEach((card) => {
  const clone = card.cloneNode(true);
  clone.removeAttribute("data-reveal");
  clone.removeAttribute("style");
  track.appendChild(clone);
});
const slides = [...track.children];
let slideIndex = 0;

function goSlide(i) {
  slideIndex = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach((d, di) => {
    d.classList.toggle("is-active", di === slideIndex);
    d.setAttribute("aria-pressed", String(di === slideIndex));
  });
}

document.querySelector("[data-slider-prev]")?.addEventListener("click", () => goSlide(slideIndex - 1));
document.querySelector("[data-slider-next]")?.addEventListener("click", () => goSlide(slideIndex + 1));
dots.forEach((d) => d.addEventListener("click", () => goSlide(Number(d.dataset.dot))));

/* ---------------- FAQ accordion (one open at a time) ---------------- */

const faqButtons = [...document.querySelectorAll("[data-faq-btn]")];

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const wasOpen = item.classList.contains("is-open");
    faqButtons.forEach((b) => {
      b.closest(".faq-item").classList.remove("is-open");
      b.setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      item.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

/* ---------------- Plan → contact prefill ---------------- */

const subjectInput = document.getElementById("ct-subject");

document.querySelectorAll("[data-plan]").forEach((btn) => {
  btn.addEventListener("click", () => {
    subjectInput.value = `${translations[lang].pricing.prefill} ${btn.dataset.plan}`.trim();
    subjectInput.closest(".field").classList.remove("has-error");
    scrollToId("contacto");
    window.setTimeout(() => subjectInput.focus({ preventScroll: true }), 600);
  });
});

/* ---------------- Contact form ---------------- */

const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("contact-submit");
const successPanel = document.getElementById("contact-success");
const SUBMIT_HTML = submitBtn.innerHTML;

const FIELDS = ["name", "email", "subject", "message", "accept"];

function fieldEl(name) {
  return form.elements[name];
}

function validateField(name) {
  const v = fieldEl(name);
  const value = name === "accept" ? v.checked : v.value.trim();
  const dict = translations[lang].contact.form;
  let ok = true;
  if (name === "name") ok = value.length >= 2;
  if (name === "email") ok = EMAIL_RE.test(value);
  if (name === "subject") ok = value.length >= 2;
  if (name === "message") ok = value.length >= 10;
  if (name === "accept") ok = Boolean(value);
  return { ok, message: dict.errors[name] };
}

function showFieldError(name, message) {
  const field = fieldEl(name).closest(".field");
  const errEl = field.querySelector(".field__error");
  if (message) {
    field.classList.add("has-error");
    errEl.textContent = message;
    fieldEl(name).setAttribute("aria-invalid", "true");
  } else {
    field.classList.remove("has-error");
    errEl.textContent = "";
    fieldEl(name).removeAttribute("aria-invalid");
  }
}

FIELDS.forEach((name) => {
  const v = fieldEl(name);
  v.addEventListener("input", () => {
    if (v.closest(".field").classList.contains("has-error")) {
      const { ok, message } = validateField(name);
      showFieldError(name, ok ? "" : message);
    }
  });
  v.addEventListener("change", () => {
    if (name === "accept" && v.closest(".field").classList.contains("has-error")) {
      const { ok, message } = validateField(name);
      showFieldError(name, ok ? "" : message);
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstInvalid = [];
  FIELDS.forEach((name) => {
    const { ok, message } = validateField(name);
    showFieldError(name, ok ? "" : message);
    if (!ok) firstInvalid.push(fieldEl(name));
  });
  if (firstInvalid.length > 0) {
    firstInvalid[0].focus();
    return;
  }

  // Loading state (simulated local send — swap for a real API later)
  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<svg class="icon icon--spin" aria-hidden="true"><use href="#i-loader"/></svg>' +
    `<span>${translations[lang].contact.form.sending}</span>`;

  window.setTimeout(() => {
    form.hidden = true;
    successPanel.hidden = false;
    successPanel.querySelector(".form-success__title").focus();
  }, 1400);
});

document.getElementById("contact-again").addEventListener("click", () => {
  form.reset();
  FIELDS.forEach((name) => showFieldError(name, ""));
  submitBtn.disabled = false;
  submitBtn.innerHTML = SUBMIT_HTML;
  successPanel.hidden = true;
  form.hidden = false;
  fieldEl("name").focus();
});
