# CS2 Arsenal

Premium static CS2 utility site built with Next.js 15.

## Features
- Weapon command database with search/filter/copy
- Bind generator + premade packs
- CFG generator
- Crosshair presets and code copy
- Practice launch options and helpers
- Smoke lineups listing
- Skin inspect URL generator
- Static export + GitHub Pages workflow

## Screenshots
Add screenshots from local run for home/commands/binds pages.

## Install
```bash
npm install
npm run dev
```

## Docker
```bash
docker compose up --build
```

## Deployment
- GitHub Pages via `.github/workflows/deploy-pages.yml`
- Vercel supported via `vercel.json`

## Structure
- `app/` pages and routes
- `components/` reusable UI
- `data/` JSON data layer
- `lib/` typed schemas

## Contributing
Fork, branch, commit with clear messages, open PR.
