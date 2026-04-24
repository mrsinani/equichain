# EquiChain

> Private Markets. Public Access.

A polished, presentation-ready marketing landing page for **EquiChain** , a
concept fintech platform that democratizes access to private equity for
retail investors.

This site is a **student concept prototype for educational purposes**. It does
not offer securities or investment advice.

---

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript + [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll + micro-interactions
- [lucide-react](https://lucide.dev) icons
- Fonts via `next/font`: **Inter** (body) + **Instrument Serif** (display accent)

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
app/
  layout.tsx        # fonts + <html> shell
  page.tsx          # composes all landing sections
  globals.css       # design tokens, navy background, grid overlay, helpers
components/site/
  Navbar.tsx        # sticky blur-on-scroll nav with mobile menu
  Hero.tsx          # headline + CTAs + coded dashboard mock
  DashboardMock.tsx # hand-drawn SVG fintech dashboard (no images)
  Problem.tsx       # 3 pain-point cards
  Solution.tsx      # 4 feature cards
  HowItWorks.tsx    # 4-step journey timeline
  Persona.tsx       # Jasmine Lopez persona + before/after
  Trust.tsx         # compliance / educational-use disclaimer
  CTA.tsx           # waitlist email capture (visual only)
  Footer.tsx        # logo, tagline, links, disclaimer
  Section.tsx       # shared section wrapper
  SectionHeading.tsx
lib/utils.ts        # cn() helper
public/equichain.jpg
```

## Demo tips (for the 15-minute class pitch)

1. Open on a dark display at 1280px+, the hero dashboard mockup pops best here.
2. Scroll slowly to let the section-entry animations play.
3. Navigate via the sticky nav to jump between Problem → Solution → How It Works.
4. The **"Join the waitlist"** form is intentionally non-functional; it just shows a success state.

## Deploy

One-click deploy to Vercel:

1. Push this repo to GitHub.
2. Import into Vercel, no environment variables required.
3. Default build command `next build` works out of the box.

## Disclaimer

EquiChain is a **student concept prototype** built for educational purposes
only. Any funds, performance figures, minimums, IRRs, and opportunities shown
are illustrative. The site does not offer securities and does not constitute
investment advice.
