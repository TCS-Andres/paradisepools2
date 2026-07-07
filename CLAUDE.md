# Paradise Pools & Pressure Cleaning: One-Page Site

Speculative demo site built by The Creative Strategist. Next.js 14 App Router, Tailwind CSS, deployed to Vercel.

## Brand Tokens

Colors (Tailwind custom names):
- pool #00A8E8 (primary blue, accents, icons, links)
- deepwater #003D5B (headings, dark sections, footer)
- aqua #7FDBFF (light accent, gradients)
- sunburst #FF6B35 (CTAs ONLY, nothing else is orange)
- sand #FDFCF9 (page background)
- wavetint #EAF7FD (alternate section background)
- charcoal #1F2A33 (body text)

Typography: Montserrat 700/800 headings, Inter 400/600 body, via next/font/google.
Type scale: H1 clamp(2.5rem, 6vw, 4.5rem), H2 clamp(2rem, 4vw, 3rem), H3 1.5rem, body 1.125rem.
Breakpoints: standard Tailwind. Mobile sticky CTA bar appears under 768px.
Motion: fade-up on scroll (0.5s ease-out, 30px), respect prefers-reduced-motion.

## Conventions

- One component per section in /components, rendered in order in app/page.tsx.
- Section ids: services, membership, how-it-works, reviews, service-area, quote.
- All CTAs anchor to #quote. Sunburst orange is reserved for CTAs.
- All unverified facts carry a TODO or PLACEHOLDER code comment. Never remove one without verified client data.
- No fabricated attributed testimonials. Sample quotes stay labeled as samples.

## Writing Rules

- No em dashes anywhere: copy, comments, strings, docs. Use commas, colons, periods, or restructure. Hard rule, zero exceptions.
- Voice: friendly, plain-spoken, confident. Short sentences. No corporate filler, no hype claims, no guaranteed results.

## Quality Targets

- Lighthouse: 90+ performance, 95+ accessibility and SEO.
- WCAG 2.1 AA contrast. White text on orange buttons, minimum 16px Montserrat 700.
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
