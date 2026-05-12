# WebsiteVoice

A faithful clone of the WebsiteVoice marketing site, built as a real working Next.js project.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with custom design tokens extracted from the original mock
- **Assistant** typeface (SIL OFL 1.1), self-hosted via `next/font/local`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route             | Purpose                                                 |
| ----------------- | ------------------------------------------------------- |
| `/`               | Renders the pricing page                                |
| `/pricing`        | The designed pricing page                               |
| `/about`          | About / story / values                                  |
| `/blog`           | Blog index with featured post + grid                    |
| `/blog/[slug]`    | Individual blog post                                    |
| `/contact`        | Contact form (visual only — does not submit anywhere)   |
| `/faq`            | Full FAQ list                                           |
| `/login`          | Login form (visual only)                                |
| `/signup`         | Signup form (visual only)                               |

## What's functional vs. visual-only

**Functional:**
- Monthly / Yearly billing toggle (yearly = 12 × monthly × 0.9, displayed as per-month equivalent)
- FAQ accordion (independent state on pricing page and on /faq)
- "See more" expand on the Premium pricing card
- Mobile menu (hamburger)
- Mobile horizontal-scroll testimonials
- Form inputs work (controlled state), but submit handlers are no-ops

**Not implemented (intentional, per spec):**
- Authentication / accounts
- Payments / Stripe
- Backend / API routes

## Project structure

```
src/
├── app/
│   ├── fonts/           # Assistant .ttf files + OFL.txt
│   ├── about/
│   ├── blog/[slug]/
│   ├── contact/
│   ├── faq/
│   ├── login/
│   ├── pricing/
│   ├── signup/
│   ├── globals.css
│   ├── layout.tsx       # Mounts <Header /> and <Footer /> globally
│   └── page.tsx         # Renders pricing at /
├── components/          # All reusable UI (Header, Footer, PricingCard, etc.)
└── data/                # Static content: plans, testimonials, FAQs, blog posts
```

## Design tokens

Defined in `tailwind.config.ts` under `theme.extend.colors`:

- `brand-700` (#2D6BFF) — primary CTA / link blue
- `brand-500..600` — hero & footer gradient
- `accent-500` (#FF8A3D) — Most Popular badge, 10% Off badge, final CTA button
- `success-500` (#00B67A) — Trustpilot-green stars
- `ink-{100..900}` — neutrals from light section bg to body text

## Notes on assets

- The WebsiteVoice logo is rendered as inline SVG inside `src/components/Logo.tsx` so it scales and recolors per-page (white on hero, blue elsewhere).
- Trustpilot / Serchen logos in testimonials are **visual approximations** — not the real trademarked marks. If you ever want the real Trustpilot embed, sign up at Trustpilot and use their official widget.

## Typography

Assistant by Hai Bar Tibi (SIL OFL 1.1). Four weights are bundled: Regular (400), SemiBold (600), Bold (700), ExtraBold (800). The OFL license is included at `src/app/fonts/OFL.txt` — you can redistribute the font as long as that file travels with it.
# websitevoice
# websitevoice
# websitevoice
