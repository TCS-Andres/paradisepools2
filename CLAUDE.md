# Paradise Pools & Pressure Cleaning: One-Page Site

Speculative demo site built by The Creative Strategist. Next.js 14 App Router, Tailwind CSS, deployed to Vercel.

## Brand Tokens

Premium resort palette. Colors (Tailwind custom names):
- navy #0B1D33 (primary dark: hero overlay, dark section backgrounds, headings on light, text on gold buttons)
- midnight #071423 (footer and deepest sections, depth partner to navy in gradients)
- gold #C9A227 (the ONLY CTA color: all button fills, checkmarks, key highlights, hover states)
- champagne #E8D9A0 (soft accent: eyebrow labels on dark, icons on dark, rule lines, links on dark)
- ivory #F7F4EC (light page background)
- pearl #EDEAE0 (alternate light section background)
- ink #1A2230 (body text on light backgrounds)

Contrast: never place gold or champagne text on light backgrounds (ivory, pearl, white) at body or label sizes; both fail AA there. On light backgrounds use navy or ink text, with gold reserved for button fills, icons, and thick decorative elements. Body text on navy or midnight is white at 85 percent opacity minimum.

Typography: Playfair Display 600/700 headings, Inter 400/600 body, via next/font/google. Headlines are never uppercase and use normal letter spacing. Eyebrow labels and buttons stay uppercase Inter 600 with wide letter spacing. Each eyebrow gets a short 40px champagne rule line beside or above it.
Type scale: H1 clamp(2.5rem, 6vw, 4.5rem), H2 clamp(2rem, 4vw, 3rem), H3 1.5rem, body 1.125rem.
Breakpoints: standard Tailwind. Mobile sticky CTA bar appears under 768px.
Motion: fade-up on scroll (0.7s, softer ease cubic-bezier(0.22, 1, 0.36, 1), 20px), Hero H1 word stagger 120ms between words, button hovers use a gold brightness shift over 0.3s ease with no scale, respect prefers-reduced-motion.
Shadows: use the shared shadow-luxe token (0 24px 60px -16px rgba(11, 29, 51, 0.18)) for cards.
Rhythm: section vertical padding is py-28.

## Conventions

- One component per section in /components, rendered in order in app/page.tsx.
- Section ids: services, membership, how-it-works, reviews, service-area, quote.
- All CTAs anchor to #quote. Gold is reserved for CTAs. Gold and champagne text is banned on light backgrounds at text sizes.
- All unverified facts carry a TODO or PLACEHOLDER code comment. Never remove one without verified client data.
- No fabricated attributed testimonials. Sample quotes stay labeled as samples.

## Writing Rules

- No em dashes anywhere: copy, comments, strings, docs. Use commas, colons, periods, or restructure. Hard rule, zero exceptions.
- Voice: friendly, plain-spoken, confident. Short sentences. No corporate filler, no hype claims, no guaranteed results.

## Quality Targets

- Lighthouse: 90+ performance, 95+ accessibility and SEO.
- WCAG 2.1 AA contrast. Navy text on gold buttons, minimum 16px Inter 600.
- Exactly one h1. Sequential h2s. next/image everywhere, priority only on hero.

## How to Work in This Repo

Build sections in the order of the build guide. Commit after each section. Run npm run build before calling anything done. Before finishing any task, grep the codebase for the em dash character and list all remaining TODO comments.

## Multi-Agent Work
All multi-agent workflows follow /ORCHESTRATION_STANDARD.md. In particular:
- You act as orchestrator. Use the Task tool to spawn subagents as workers.
- Decompose per section 5, brief workers per section 6, log per section 13.
- Present a plan and wait for approval before any run over 5 subagent calls
  or any run touching production data.
- Never send, publish, deploy, or delete without explicit approval.
- Hard style rule inherited by every worker brief: no em dashes anywhere.
