"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Phone } from "lucide-react";

// H1 copy split into words so each can fade up in sequence on load.
const HEADLINE_WORDS = [
  "Your",
  "pool,",
  "crystal",
  "clear.",
  "Your",
  "weekends,",
  "yours",
  "again.",
];

// 120ms stagger per word.
const WORD_STAGGER = 0.12;

const headlineContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: WORD_STAGGER },
  },
};

const headlineWord: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Buttons fade up after the headline word sequence finishes, plus 0.3s.
  const buttonsDelay = reduceMotion
    ? 0
    : HEADLINE_WORDS.length * WORD_STAGGER + 0.3;
  const subheadDelay = reduceMotion ? 0 : HEADLINE_WORDS.length * WORD_STAGGER + 0.1;

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background photo with a left-to-right dark overlay for text contrast. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury resort infinity pool lined with palm trees, reflecting warm lights at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent" />
      </div>

      {/* Hero content: vertically centered, left aligned. */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            className="flex items-center gap-3 font-body text-sm font-semibold uppercase tracking-[0.22em] text-champagne"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span aria-hidden="true" className="h-px w-10 bg-champagne" />
            South Florida Pool &amp; Exterior Cleaning
          </motion.p>

          <motion.h1
            className="mt-4 font-heading font-bold leading-[1.05] text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            variants={headlineContainer}
            initial={reduceMotion ? false : "hidden"}
            animate="show"
          >
            {HEADLINE_WORDS.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={headlineWord}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl font-body text-lg text-white/90"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: subheadDelay }}
          >
            Weekly pool maintenance, pressure washing, and bin cleaning from a
            local family-run team that shows up like clockwork.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: buttonsDelay }}
          >
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 font-body text-lg font-semibold uppercase tracking-wider text-navy transition duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Get My Free Quote
            </a>

            {/* PLACEHOLDER PHONE */}
            <a
              href="tel:+15550000000"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-champagne px-8 py-4 font-body text-lg font-semibold uppercase tracking-wider text-champagne transition duration-300 hover:bg-champagne/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call (555) 000-0000
            </a>
          </motion.div>
        </div>
      </div>

      {/* Ivory wave divider that eases into the next section, with a slow drift. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden leading-[0]"
      >
        <svg
          className="pp-wave-drift relative left-[-20%] block h-[60px] w-[140%] md:h-[90px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* fill is ivory #F7F4EC to blend into the light page background. */}
          <path
            fill="#F7F4EC"
            d="M0,40 C240,100 480,0 720,40 C960,80 1200,20 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* Slow horizontal drift for the wave, disabled under reduced motion. */}
      <style>{`
        @keyframes ppWaveDrift {
          from { transform: translateX(-2%); }
          to { transform: translateX(2%); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .pp-wave-drift {
            animation: ppWaveDrift 28s ease-in-out infinite alternate;
          }
        }
      `}</style>
    </section>
  );
}
