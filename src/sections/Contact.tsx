import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { CONTACT_EMAIL } from "../data/site";
import { SUBJECT_EVENT } from "../utils/scroll";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  accept: boolean;
}

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", email: "", subject: "", message: "", accept: false };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  /* Prefill subject when a plan is chosen. */
  useEffect(() => {
    const onSubject = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setForm((prev) => ({ ...prev, subject: detail }));
    };
    window.addEventListener(SUBJECT_EVENT, onSubject);
    return () => window.removeEventListener(SUBJECT_EVENT, onSubject);
  }, []);

  const validate = (value: FormState): FieldErrors => {
    const errs: FieldErrors = {};
    if (value.name.trim().length < 2) errs.name = f.errors.name;
    if (!EMAIL_RE.test(value.email.trim())) errs.email = f.errors.email;
    if (value.subject.trim().length < 2) errs.subject = f.errors.subject;
    if (value.message.trim().length < 10) errs.message = f.errors.message;
    if (!value.accept) errs.accept = f.errors.accept;
    return errs;
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const nextValue = type === "checkbox" ? checked : value;
    setForm((prev) => {
      const next = { ...prev, [name]: nextValue } as FormState;
      // Re-validate live once a field has an error.
      if (errors[name as keyof FormState]) {
        setErrors(validate(next));
      }
      return next;
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("loading");
    // Simulated local send — swap for a real API call later.
    window.setTimeout(() => setStatus("success"), 1400);
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setStatus("idle");
  };

  const inputClasses = (hasError: boolean) =>
    `w-full rounded-lg border bg-paper-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-all duration-200 outline-none focus:ring-2 ${
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-red-400/20"
        : "border-ink-900/15 focus:border-volt-500 focus:ring-volt-400/25"
    }`;

  const fieldError = (id: string, message?: string) =>
    message ? (
      <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
        <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
        {message}
      </p>
    ) : null;

  return (
    <section id="contacto" data-anchor className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <SectionHeading
            tone="onLight"
            align="left"
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-xl border border-ink-900/10 bg-white p-5 shadow-card">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-ink-900 text-volt-300">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                    {t.contact.info.emailLabel}
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 block text-sm font-semibold text-ink-900 transition-colors hover:text-volt-700"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p className="mt-1 text-xs text-ink-500">{t.contact.info.response}</p>
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                  {t.contact.info.follow}
                </p>
                <SocialLinks tone="onLight" className="mt-3" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-ink-900/10 bg-white p-6 shadow-card sm:p-9">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                    className="grid size-16 place-items-center rounded-full bg-volt-400/15 text-volt-700"
                  >
                    <CheckCircle2 className="size-9" aria-hidden="true" />
                  </motion.span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">
                    {f.success.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">{f.success.text}</p>
                  <Button variant="secondary" tone="onLight" className="mt-7" onClick={reset}>
                    {f.success.again}
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  noValidate
                  onSubmit={onSubmit}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="ct-name" className="mb-1.5 block text-sm font-medium text-ink-900">
                        {f.name} <span className="text-volt-600" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="ct-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder={f.namePh}
                        value={form.name}
                        onChange={onChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "err-name" : undefined}
                        className={inputClasses(Boolean(errors.name))}
                      />
                      {fieldError("err-name", errors.name)}
                    </div>
                    <div>
                      <label htmlFor="ct-email" className="mb-1.5 block text-sm font-medium text-ink-900">
                        {f.email} <span className="text-volt-600" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="ct-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder={f.emailPh}
                        value={form.email}
                        onChange={onChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "err-email" : undefined}
                        className={inputClasses(Boolean(errors.email))}
                      />
                      {fieldError("err-email", errors.email)}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="ct-subject" className="mb-1.5 block text-sm font-medium text-ink-900">
                      {f.subject} <span className="text-volt-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="ct-subject"
                      name="subject"
                      type="text"
                      placeholder={f.subjectPh}
                      value={form.subject}
                      onChange={onChange}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? "err-subject" : undefined}
                      className={inputClasses(Boolean(errors.subject))}
                    />
                    {fieldError("err-subject", errors.subject)}
                  </div>

                  <div className="mt-5">
                    <label htmlFor="ct-message" className="mb-1.5 block text-sm font-medium text-ink-900">
                      {f.message} <span className="text-volt-600" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="ct-message"
                      name="message"
                      rows={5}
                      placeholder={f.messagePh}
                      value={form.message}
                      onChange={onChange}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "err-message" : undefined}
                      className={`${inputClasses(Boolean(errors.message))} resize-y`}
                    />
                    {fieldError("err-message", errors.message)}
                  </div>

                  <div className="mt-5">
                    <div className="flex items-start gap-3">
                      <input
                        id="ct-accept"
                        name="accept"
                        type="checkbox"
                        checked={form.accept}
                        onChange={onChange}
                        aria-invalid={Boolean(errors.accept)}
                        aria-describedby={errors.accept ? "err-accept" : undefined}
                        className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-ink-900/20 accent-volt-600"
                      />
                      <label htmlFor="ct-accept" className="text-xs leading-relaxed text-ink-500">
                        {f.accept}
                      </label>
                    </div>
                    {fieldError("err-accept", errors.accept)}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    tone="onLight"
                    disabled={status === "loading"}
                    className="mt-7 w-full sm:w-auto"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        {f.sending}
                      </>
                    ) : (
                      <>
                        <Send className="size-4" aria-hidden="true" />
                        {f.send}
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
