import { Users, ShieldCheck, MapPin, CalendarCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeUp from "@/components/FadeUp";

type TrustItem = {
  icon: LucideIcon;
  label: string;
};

const TRUST_ITEMS: TrustItem[] = [
  { icon: Users, label: "Family owned and operated" },
  // TODO VERIFY BEFORE LAUNCH
  { icon: ShieldCheck, label: "Licensed and insured" },
  // TODO EXACT CITIES
  { icon: MapPin, label: "Serving South Florida" },
  { icon: CalendarCheck, label: "Simple monthly plans available" },
];

export default function TrustBar() {
  return (
    <section className="bg-wavetint py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon
                  className="h-6 w-6 shrink-0 text-pool"
                  aria-hidden="true"
                />
                <span className="font-body font-semibold text-charcoal">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
