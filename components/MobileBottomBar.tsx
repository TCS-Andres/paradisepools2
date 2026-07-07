import { Phone } from "lucide-react";

// Mobile-only sticky bottom bar. Appears under 768px, hidden on md and up.
export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 md:hidden">
      {/* PLACEHOLDER PHONE: replace +15550000000 with the verified business line. */}
      <a
        href="tel:+15550000000"
        className="flex items-center justify-center gap-2 bg-deepwater py-4 font-heading font-bold text-white"
      >
        <Phone size={18} aria-hidden="true" />
        Call Now
      </a>
      <a
        href="#quote"
        className="flex items-center justify-center bg-sunburst py-4 font-heading font-bold text-white"
      >
        Free Quote
      </a>
    </div>
  );
}
