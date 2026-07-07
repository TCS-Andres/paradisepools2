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
      className="bg-gradient-to-br from-pool to-aqua py-24"
    >
      <div className="mx-auto max-w-3xl px-4">
        <FadeUp>
          <div className="rounded-2xl border-t-[6px] border-sunburst bg-white p-8 shadow-xl md:p-12">
            <p className="font-heading text-sm font-bold uppercase tracking-wide text-pool">
              The Paradise Plan
            </p>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold text-deepwater">
              One simple membership. Whole property covered.
            </h2>
            <p className="mt-4 font-body text-charcoal">
              Bundle weekly pool maintenance with scheduled pressure washing and
              monthly bin cleaning in one flat monthly rate. No contracts to
              decode, no surprise invoices, just a property that stays clean year
              round.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Check
                    className="h-5 w-5 shrink-0 text-sunburst"
                    aria-hidden="true"
                  />
                  <span className="font-body font-semibold text-charcoal">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              {/* PLACEHOLDER PRICE TODO CONFIRM WITH CLIENT */}
              <p className="font-heading text-2xl font-extrabold text-deepwater">
                Starting at $199/month
              </p>
              <p className="mt-1 font-body text-sm text-charcoal/70">
                Final pricing depends on pool size and property.
              </p>
            </div>

            <a
              href="#quote"
              className="mt-8 inline-block rounded-full bg-sunburst px-8 py-4 font-heading text-base font-bold text-white transition-colors duration-200 ease-out hover:bg-sunburst/90"
            >
              Ask About the Paradise Plan
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
