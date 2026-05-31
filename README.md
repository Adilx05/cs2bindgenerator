# CS2 Bind Generator

A modern, dark-themed CS2 buy bind generator built with Next.js 15. Created by **QWRpbA==**.

## Features

- **Buy Bind Generator** — Select weapons, utility, and armor; pick a key; generate ready-to-use CS2 bind commands
- **Interactive Weapon Grid** — 44 weapons + equipment with realistic CS2-style SVG silhouettes
- **Kevlar & Helmet Support** — Full armor loadout options included
- **Dark CS2 Theme** — Premium dark UI with amber/gold accents, glass-morphism cards, terminal-style output
- **Framer Motion Animations** — Smooth transitions, collapsible sections, hover effects
- **Static Export** — Fully client-side, no backend required

## Install

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output in `out/` — ready for GitHub Pages or any static host.

## Deployment

- **GitHub Pages**: Push to `main`, workflow at `.github/workflows/deploy-pages.yml` auto-deploys
- **Vercel**: Supported via `vercel.json`

## Structure

```
app/
  binds/       Buy bind generator (homepage)
  about/       About page
  layout.tsx   Root layout with navbar
components/
  navbar.tsx   Sticky nav with mobile hamburger menu
  copy-button.tsx  Reusable copy button
public/
  weapon-icons/  44 weapon/equipment SVG silhouettes
  favicon.svg    CS2 crosshair favicon
lib/
  paths.ts     Asset path helper (GitHub Pages basePath support)
  types.ts     TypeScript type definitions
data/
  weapons.json    Weapon data
  crosshairs.json Pro crosshair presets
  lineups.json    Smoke lineups
  binds.json      Bind presets
```

## Tech Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion · Lucide React

## License

MIT
