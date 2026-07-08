"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
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

  // Page scroll progress, 0 to 1, drives the gold bar under the header.
  // framer-motion tracks this without React re-renders; under reduced motion
  // it still updates instantly, just without any easing.
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Add a subtle shadow once the page has scrolled past 50px.
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Wordmark */}
        <Link href="#top" className="leading-tight" onClick={() => setOpen(false)}>
          <span className="block whitespace-nowrap font-heading text-base font-bold text-navy sm:text-xl">
            Paradise Pools
          </span>
          <span className="block font-body text-xs text-navy">
            &amp; Pressure Cleaning
          </span>
        </Link>

        {/* Desktop links plus CTA */}
        <div className="hidden items-center gap-5 md:flex lg:gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            className="whitespace-nowrap rounded-full bg-gold px-5 py-2 font-body text-base font-semibold uppercase tracking-wider text-navy transition duration-300 hover:brightness-110"
          >
            Get My Free Quote
          </a>
        </div>

        {/* Mobile: CTA stays visible, hamburger toggles the link menu */}
        <div className="flex items-center gap-1.5 md:hidden">
          <a
            href="#quote"
            className="whitespace-nowrap rounded-full bg-gold px-2.5 py-2 font-body text-base font-semibold uppercase tracking-wide text-navy transition duration-300 hover:brightness-110"
          >
            Get My Free Quote
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="text-navy"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div className="border-t border-pearl bg-ivory md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 font-body text-ink transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Thin gold scroll progress bar pinned to the header's bottom edge. */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gold"
      />
    </header>
  );
}
