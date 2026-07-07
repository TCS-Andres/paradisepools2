"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import FadeUp from "./FadeUp";

// Anchor id is "quote": every CTA on the page links here.
// This is the final and loudest section, the conversion point of the site.

type ServiceOption =
  | "Pool Maintenance"
  | "Pressure Washing"
  | "Bin Cleaning"
  | "Paradise Plan Membership";

const SERVICE_OPTIONS: ServiceOption[] = [
  "Pool Maintenance",
  "Pressure Washing",
  "Bin Cleaning",
  "Paradise Plan Membership",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: ServiceOption;
  message: string;
};

type FormErrors = {
  name?: string;
  contact?: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "Pool Maintenance",
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate(values: FormState): FormErrors {
    const nextErrors: FormErrors = {};
    if (values.name.trim() === "") {
      nextErrors.name = "Please tell us your name.";
    }
    if (values.phone.trim() === "" && values.email.trim() === "") {
      nextErrors.contact =
        "Add a phone number or an email so we can reach you.";
    }
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    // DEMO FORM. WIRE TO FORMSPREE, EMAIL, OR CRM ENDPOINT BEFORE LAUNCH.
    setSubmitted(true);
  }

  const inputClasses =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-body text-charcoal placeholder:text-charcoal/40 focus:border-pool focus:outline-none focus:ring-2 focus:ring-pool/60";
  const labelClasses =
    "mb-1.5 block font-body font-semibold text-deepwater";

  return (
    <section
      id="quote"
      className="bg-sunburst px-4 py-24 pb-40 md:pb-24"
    >
      <div className="mx-auto max-w-xl">
        <FadeUp className="text-center">
          <h2 className="font-heading font-extrabold text-white text-[clamp(2rem,4vw,3rem)] leading-tight">
            Ready for a pool that takes care of itself?
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-lg text-white/90">
            Get your free quote today. No pressure, no obligation, just clear
            pricing.
          </p>
        </FadeUp>

        <FadeUp delay={120} className="mt-10">
          <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-10">
            {submitted ? (
              <div
                className="flex flex-col items-center py-8 text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2
                  className="h-16 w-16 text-pool"
                  aria-hidden="true"
                />
                <p className="mt-4 font-heading text-xl font-bold text-deepwater">
                  Thanks! We will reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5">
                  <div>
                    <label htmlFor="quote-name" className={labelClasses}>
                      Name
                    </label>
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={
                        errors.name ? "quote-name-error" : undefined
                      }
                    />
                    {errors.name ? (
                      <p
                        id="quote-name-error"
                        role="alert"
                        className="mt-1.5 font-body text-sm text-sunburst"
                      >
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="quote-phone" className={labelClasses}>
                      Phone
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      aria-invalid={errors.contact ? true : undefined}
                      aria-describedby={
                        errors.contact ? "quote-contact-error" : undefined
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                      aria-invalid={errors.contact ? true : undefined}
                      aria-describedby={
                        errors.contact ? "quote-contact-error" : undefined
                      }
                    />
                    {errors.contact ? (
                      <p
                        id="quote-contact-error"
                        role="alert"
                        className="mt-1.5 font-body text-sm text-sunburst"
                      >
                        {errors.contact}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="quote-service" className={labelClasses}>
                      Service interested in
                    </label>
                    <select
                      id="quote-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-message" className={labelClasses}>
                      Message{" "}
                      <span className="font-normal text-charcoal/50">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-deepwater px-6 py-4 font-heading font-bold text-white transition-colors hover:bg-deepwater/90 focus:outline-none focus:ring-2 focus:ring-deepwater/60 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Send My Free Quote Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="mt-8 text-center font-body text-white">
            Or call us directly at{" "}
            {/* PLACEHOLDER PHONE */}
            <a
              href="tel:+15550000000"
              className="font-semibold underline underline-offset-4 hover:text-white/80"
            >
              (555) 000-0000
            </a>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
