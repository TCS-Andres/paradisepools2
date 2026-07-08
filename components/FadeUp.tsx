"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * FadeUp: shared scroll-reveal wrapper used by every section.
 *
 * Props:
 *   children    content to reveal.
 *   delay?      delay before the animation starts, in milliseconds (default 0).
 *   className?  optional class names applied to the wrapping element.
 *
 * Behavior: fades in and slides up 20px over 0.7s with a soft ease. It triggers
 * once, when 20 percent of the element scrolls into view. When the visitor
 * prefers reduced motion, there is no transform and the content shows immediately.
 *
 * Usage: <FadeUp delay={150}><Card /></FadeUp>
 */
export default function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
