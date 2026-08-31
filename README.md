# Nehal Qadeer — Portfolio

Spatial Sandbox / Cinematic Canvas portfolio. Next.js 14 App Router, React Three Fiber, Lenis smooth scroll, GSAP, Tailwind.

## Setup

```bash
npm install
npm run dev
```

## Design tokens

| Token           | Hex       | Use                                  |
|-----------------|-----------|---------------------------------------|
| `ink`           | `#0D1420` | Base background                       |
| `panel`         | `#141C2B` | Raised surfaces                       |
| `line`          | `#24304A` | Borders, grid, dividers               |
| `signal`        | `#E8A33D` | Primary accent — CTAs, active state   |
| `verify`        | `#6FE3D9` | Secondary accent — success/verified   |
| `text`          | `#EDF1F7` | Primary copy                          |
| `text-muted`    | `#8C99AF` | Secondary copy                        |

Fonts: **Bricolage Grotesque** (display), **IBM Plex Sans** (body), **IBM Plex Mono** (data readouts only — inference metrics, timestamps, scroll depth).

## Build status

**Done:** folder structure, dependencies, root layout, main entry, and all seven sections
(`Hero`, `About`, `Stack`, `Experience`, `Projects`, `Education`, `Contact`) with real copy
sourced from the resume + the verified GitHub profile at github.com/Nehal-qadeer. Nav,
TelemetryRail, Footer with the required attribution line.

**Pending / good next steps:**
- Scroll-triggered reveal on section entry (GSAP + Lenis are wired up; sections currently render static)
- Per-project R3F scenes instead of the current SVG generative visuals, if you want more motion in `Projects`
- Real favicon / OG image
- Deploy config (Vercel is the path of least resistance for Next.js)

## Project sourcing notes

Project data in `src/data/projects.ts` combines the resume with the verified GitHub profile
(github.com/Nehal-qadeer, 9 repos). Two projects link real repos
(`Booking-Automation-Selenium`, `Yell-Business-Data-Extractor`, plus `satellite-trackingsystem`);
the thesis, Apify/Make.com engine, and Zapier automation are resume-sourced with no public
repo (thesis + client IP) and are labeled as such rather than linked to something fake.
Three template-style client sites (Owlkids-Academy-Frontend, RedStore-ECommerce-Frontend,
Freelance-Frontend-Educational-Web) were deliberately left out of the main showcase — they
dilute the AI/CV/automation specialist positioning more than they help it.

No image-generation tool is available in this environment, so instead of fabricated "AI
screenshots," each project card gets a bespoke generative SVG visual keyed to what that
project actually does (`src/components/ui/ProjectVisual.tsx`) — a verification bounding box
for the CV thesis, a node graph for the scraping engine, a linear flow for the Zapier
automation, an orbit diagram for the satellite tracker.
