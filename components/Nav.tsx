"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#membership", label: "Membership" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#service-area", label: "Service Area" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Add a subtle shadow once the page has scrolled past 50px.
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-sand transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Wordmark */}
        <Link href="#top" className="leading-tight" onClick={() => setOpen(false)}>
          <span className="block font-heading text-xl font-extrabold text-deepwater">
            Paradise Pools
          </span>
          <span className="block font-body text-xs text-pool">
            &amp; Pressure Cleaning
          </span>
        </Link>

        {/* Desktop links plus CTA */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-charcoal transition-colors hover:text-pool"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            className="rounded-full bg-sunburst px-5 py-2 font-heading text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Get My Free Quote
          </a>
        </div>

        {/* Mobile: CTA stays visible, hamburger toggles the link menu */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#quote"
            className="rounded-full bg-sunburst px-4 py-2 font-heading text-sm font-bold text-white"
          >
            Get My Free Quote
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="text-deepwater"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div className="border-t border-wavetint bg-sand md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 font-body text-charcoal transition-colors hover:text-pool"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
