"use client";

import { useState, useId } from "react";
import { useSearchParams } from "next/navigation";
import { COMPANIES } from "@/lib/site";

const INQUIRY_TYPES = [
  "Request a quotation",
  "Tender or contract opportunity",
  "Partnership or distribution",
  "Supplier registration",
  "Careers",
  "Media",
  "Compliance, banking or KYC verification",
  "General enquiry",
];

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Contact form.
 *
 * Seven controls, functionally five for a visitor arriving from a
 * company page, because company and enquiry type arrive pre-filled from
 * the query string. Each additional field costs conversion, and the
 * cliff sits between five and seven.
 *
 * Deliberately absent: required phone number (the most damaging common
 * field on B2B forms), job title, "how did you hear about us", budget
 * range, company size, pre-ticked consent, and any visible CAPTCHA.
 * Spam is handled with a honeypot and a time-to-submit check rather
 * than an image grid, which is hostile to screen reader users.
 */
export function ContactForm() {
  const searchParams = useSearchParams();
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [startedAt] = useState(() => Date.now());

  const presetCompany = searchParams.get("company") ?? "";
  const presetType = searchParams.get("type") ?? "";

  const field = (n: string) => `${uid}-${n}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot. A real user never fills this.
    if (data.get("website")) return;
    // Time-to-submit check.
    if (Date.now() - startedAt < 3000) return;

    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim())
      next.name = "Enter your full name";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "Enter your work email address";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address";
    if (!String(data.get("organisation") ?? "").trim())
      next.organisation = "Enter your company or organisation";
    if (!String(data.get("country") ?? "").trim())
      next.country = "Enter your country";
    if (!String(data.get("message") ?? "").trim())
      next.message = "Enter your message";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // No endpoint is wired yet. Submission target is a client decision:
    // it needs a mailbox or CRM that is actually monitored.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    form.reset();
  }

  // The focus ring is transitioned rather than switched on. An
  // instant 3px halo appearing under the caret reads as an error
  // state; the same ring easing in over 160ms reads as focus.
  const inputCls =
    "min-h-11 w-full rounded-[2px] border border-[var(--rule-strong)] bg-[var(--surface)] px-4 py-2.5 text-[0.9375rem] text-[var(--text)] transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-brand)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(57,137,164,0.18)] focus:outline-none";
  const labelCls =
    "mb-1.5 block text-[0.875rem] font-medium text-[var(--text)]";
  // Validation messages arrive after the user has pressed submit, at
  // which point several may appear at once across the form. They fade
  // rather than snap, so the eye can follow where they landed.
  const errCls =
    "enter mt-1.5 text-[0.8125rem] text-[color:var(--color-danger)]";

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        // Replaces a form the user was just looking at. Without an
        // entrance the swap is indistinguishable from a page
        // navigation, and the user loses track of whether the
        // submission or the browser produced this.
        className="enter rounded-[4px] border border-[var(--rule)] bg-[var(--surface-tint)] p-6"
      >
        <p className="font-semibold text-[var(--text)]">
          Your enquiry has been received.
        </p>
        <dl className="mt-4 space-y-2 text-[0.9375rem] text-[var(--text-secondary)]">
          <div className="flex gap-2">
            <dt className="font-medium">Reference</dt>
            <dd className="font-mono">LH-2026-XXXXX</dd>
          </div>
        </dl>
        <p className="mt-4 text-[0.9375rem] text-[var(--text-secondary)]">
          You will receive a reply from an address ending in{" "}
          <strong className="font-semibold text-[var(--text)]">
            @lamerholdings.com
          </strong>
          . If you receive a response from any other domain, treat it as
          fraudulent and report it to compliance@lamerholdings.com.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot, hidden from assistive technology as well as sight */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0">
        <label htmlFor={field("website")}>Leave this field empty</label>
        <input
          id={field("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={field("name")} className={labelCls}>
            Full name
          </label>
          <input
            id={field("name")}
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? field("name-err") : undefined}
            className={inputCls}
          />
          {errors.name ? (
            <p id={field("name-err")} className={errCls}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={field("email")} className={labelCls}>
            Work email
          </label>
          <input
            id={field("email")}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? field("email-err") : undefined}
            className={inputCls}
          />
          {errors.email ? (
            <p id={field("email-err")} className={errCls}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={field("organisation")} className={labelCls}>
            Company or organisation
          </label>
          <input
            id={field("organisation")}
            name="organisation"
            type="text"
            autoComplete="organization"
            aria-invalid={!!errors.organisation}
            aria-describedby={
              errors.organisation ? field("org-err") : undefined
            }
            className={inputCls}
          />
          {errors.organisation ? (
            <p id={field("org-err")} className={errCls}>
              {errors.organisation}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={field("country")} className={labelCls}>
            Country
          </label>
          <input
            id={field("country")}
            name="country"
            type="text"
            autoComplete="country-name"
            aria-invalid={!!errors.country}
            aria-describedby={errors.country ? field("country-err") : undefined}
            className={inputCls}
          />
          {errors.country ? (
            <p id={field("country-err")} className={errCls}>
              {errors.country}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={field("company")} className={labelCls}>
            Which company are you contacting?
          </label>
          <select
            id={field("company")}
            name="company"
            defaultValue={presetCompany}
            className={inputCls}
          >
            <option value="">Group, or not sure</option>
            {COMPANIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={field("type")} className={labelCls}>
            Enquiry type
          </label>
          <select
            id={field("type")}
            name="type"
            defaultValue={presetType}
            className={inputCls}
          >
            <option value="">Select</option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={field("message")} className={labelCls}>
          Your message
        </label>
        <textarea
          id={field("message")}
          name="message"
          rows={6}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? field("msg-err") : undefined}
          className={`${inputCls} min-h-32 resize-y`}
        />
        {errors.message ? (
          <p id={field("msg-err")} className={errCls}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <p className="measure-wide text-[0.8125rem] leading-relaxed text-[var(--text-muted)]">
        By submitting this form you consent to Lamer Holdings processing the
        information you provide in order to respond to your enquiry. We do not
        sell or share your details with third parties for marketing.
      </p>

      {/*
        The label changes width between "Send enquiry" and "Sending",
        and a button that resizes under the cursor mid-submit feels
        unstable. Both labels are laid out in the same grid cell, so
        the button is sized by the longer of the two and holds still
        while they crossfade.

        No spinner. The submit resolves in well under a second, and a
        spinner that appears and leaves inside 600ms is a flash, not a
        loading state.
      */}
      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="press inline-flex min-h-11 items-center justify-center rounded-[4px] bg-[var(--text)] px-6 text-[0.9375rem] font-medium whitespace-nowrap text-[var(--surface)] hover:bg-[var(--text-secondary)] disabled:opacity-60"
      >
        <span className="grid place-items-center">
          <span
            className={`col-start-1 row-start-1 transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-brand)] ${
              status === "submitting" ? "opacity-0" : "opacity-100"
            }`}
          >
            Send enquiry
          </span>
          <span
            aria-hidden={status !== "submitting"}
            className={`col-start-1 row-start-1 transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-brand)] ${
              status === "submitting" ? "opacity-100" : "opacity-0"
            }`}
          >
            Sending
          </span>
        </span>
      </button>

      {status === "error" ? (
        <p
          role="alert"
          className="enter text-[0.875rem] text-[color:var(--color-danger)]"
        >
          Check the fields marked above and try again.
        </p>
      ) : null}
    </form>
  );
}
