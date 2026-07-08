import { Phone } from "lucide-react";

// Mobile-only sticky bottom bar. Appears under 768px, hidden on md and up.
export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 md:hidden">
      {/* PLACEHOLDER PHONE: replace +15550000000 with the verified business line. */}
      <a
        href="tel:+15550000000"
        className="flex items-center justify-center gap-2 border-r border-champagne/40 bg-midnight py-4 font-body font-semibold uppercase tracking-wide text-white"
      >
        <Phone size={18} aria-hidden="true" />
        Call Now
      </a>
      <a
        href="#quote"
        className="flex items-center justify-center bg-gold py-4 font-body font-semibold uppercase tracking-wide text-navy"
      >
        Free Quote
      </a>
    </div>
  );
}
