"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeUp from "./FadeUp";

const steps = [
  {
    number: "1",
    title: "Request your free quote.",
    body: "Tell us about your pool and property. Takes two minutes.",
  },
  {
    number: "2",
    title: "Get your simple plan.",
    body: "We send clear pricing and a schedule that fits, no pressure.",
  },
  {
    number: "3",
    title: "Enjoy your weekends.",
    body: "We show up, do the work, and send a photo update when it is done.",
  },
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="bg-ivory py-28">
      <div className="mx-auto max-w-6xl px-4">
        <FadeUp>
          <p className="flex items-center gap-3 font-body text-sm font-semibold uppercase tracking-widest text-navy">
            <span className="h-px w-10 bg-champagne" aria-hidden="true" />
            Getting Started
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold text-navy md:text-4xl">
            Three steps to a spotless backyard.
          </h2>
        </FadeUp>

        <div className="relative mt-14">
          {/* Champagne line that ties the three steps into one journey. It draws
              in on desktop as the section reveals, and stays static under
              prefers-reduced-motion. Sits behind the number circles. */}
          <div
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-8 hidden md:block"
            aria-hidden="true"
          >
            {reduceMotion ? (
              <div className="h-px w-full bg-champagne" />
            ) : (
              <motion.div
                className="h-px w-full origin-left bg-champagne"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
              />
            )}
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <FadeUp key={step.number} delay={index * 120}>
                <div className="flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-3xl font-bold text-ivory ring-2 ring-gold/50 ring-offset-4 ring-offset-ivory">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-lg leading-relaxed text-ink">
                    {step.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
