const QUICK_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#membership", label: "Membership" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#service-area", label: "Service Area" },
  { href: "#quote", label: "Get a Quote" },
];

export default function Footer() {
  return (
    <footer className="bg-deepwater pb-20 text-white md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        {/* Column 1: company */}
        <div>
          <p className="font-heading text-xl font-extrabold">
            Paradise Pools &amp; Pressure Cleaning
          </p>
          <p className="mt-3 font-body text-sm text-white/85">
            Weekly pool maintenance, pressure washing, and bin cleaning for South
            Florida homes.
          </p>
          {/* [PHONE] placeholder: add the verified business phone number here. */}
          {/* [EMAIL] placeholder: add the verified business email address here. */}
        </div>

        {/* Column 2: quick links */}
        <div>
          <p className="font-heading font-bold">Quick Links</p>
          <ul className="mt-3 space-y-2 font-body text-sm text-white/85">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-aqua">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: service area */}
        <div>
          <p className="font-heading font-bold">Service Area</p>
          {/* TODO VERIFY CITIES: confirm the real service area before launch. */}
          <ul className="mt-3 space-y-2 font-body text-sm text-white/85">
            <li>Miami</li>
            <li>Fort Lauderdale</li>
            <li>Boca Raton</li>
            <li>West Palm Beach</li>
            <li>Pompano Beach</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 font-body text-xs text-white/60">
          Copyright 2026 Paradise Pools &amp; Pressure Cleaning. Family owned and
          operated in South Florida.
        </p>
      </div>
    </footer>
  );
}
