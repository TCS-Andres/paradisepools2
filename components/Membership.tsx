import Image from "next/image";
import { Check } from "lucide-react";
import FadeUp from "./FadeUp";

const benefits: string[] = [
  "Weekly pool service",
  "Seasonal pressure washing included",
  "Monthly bin cleaning add-on",
];

export default function Membership() {
  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-gradient-to-br from-navy to-midnight py-28"
    >
      {/* DECORATIVE STOCK IMAGERY, REPLACE WITH REAL JOB PHOTOS WHEN AVAILABLE. */}
      {/* Low-opacity dusk pool photo tints the navy gradient so white text stays far above AA. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1600&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-4">
        <FadeUp>
          <div className="rounded-2xl border-t-[6px] border-gold bg-white p-8 shadow-luxe md:p-12">
            <p className="flex items-center gap-3 font-body text-sm font-semibold uppercase tracking-wider text-navy">
              <span className="h-px w-10 bg-champagne" aria-hidden="true" />
              The Paradise Plan
            </p>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-navy">
              One simple membership. Whole property covered.
            </h2>
            <p className="mt-4 font-body leading-relaxed text-ink">
              Bundle weekly pool maintenance with scheduled pressure washing and
              monthly bin cleaning in one flat monthly rate. No contracts to
              decode, no surprise invoices, just a property that stays clean year
              round.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Check
                    className="h-5 w-5 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span className="font-body font-semibold text-ink">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              {/* PLACEHOLDER PRICE TODO CONFIRM WITH CLIENT */}
              <p className="font-heading text-2xl font-bold text-navy">
                Starting at $199/month
              </p>
              <p className="mt-1 font-body text-sm text-ink/70">
                Final pricing depends on pool size and property.
              </p>
            </div>

            <a
              href="#quote"
              className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-body text-base font-semibold uppercase tracking-wider text-navy transition duration-300 ease-out hover:brightness-110"
            >
              Ask About the Paradise Plan
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
