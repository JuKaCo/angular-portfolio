# Portfolio — Juan Carlos Condori Caviña

Personal portfolio of a Full Stack Developer & E-commerce (Adobe Commerce / Magento 2) specialist.
Rebuilt with a modern, visual-first stack and deployed to GitHub Pages.

**Live:** https://jukaco.github.io/angular-portfolio/

> The repository name is kept as `angular-portfolio` to preserve the existing
> GitHub Pages URL. The site itself is now built with Astro (not Angular).

## Tech stack

- **[Astro 5](https://astro.build/)** — static site generation, zero-JS by default
- **React 18** islands — only hydrated where interactivity is needed
- **Tailwind CSS 4** (CSS-first `@theme`, via the Vite plugin)
- **React Three Fiber + three.js** — interactive 3D starfield/nebula background
- **GSAP + ScrollTrigger** — scroll-driven reveals & parallax
- **motion** — micro-interactions & the testimonials carousel
- **Astro View Transitions** — smooth EN ↔ ES navigation
- **astro-icon** (Iconify) — tree-shaken SVG icons
- **@astrojs/sitemap** + bilingual i18n routing (`/en/`, `/es/`)

## Project structure

```
src/
├─ data/            Single source of truth — typed, per-locale content
│  ├─ site.ts       Locale-agnostic identity (name, email, socials, SEO)
│  ├─ images.ts     Maps content keys → optimized build-time images
│  ├─ types.ts      Shared content types
│  ├─ en/  es/      hero · about · skills · experience · education ·
│  │                projects · testimonials · ui  (+ index barrel)
├─ i18n/ui.ts       Locale resolver (getData)
├─ layouts/         BaseLayout.astro (SEO head, 3D bg, nav, view transitions)
├─ components/
│  ├─ astro/        Static, zero-JS sections (About, Skills, CV, Projects…)
│  └─ react/        Islands (SpaceBackground, Hero, Nav, SkillBar, Carousel)
├─ pages/           index (redirect) · 404 · en/index · es/index
└─ styles/global.css  Tailwind 4 theme tokens & component utilities
```

### Editing content

All editable text lives under `src/data/en/` and `src/data/es/` (mirrored files).
To update a job, project, skill, or any copy, edit the matching `.ts` file in
both locales — no component changes required.

## Local development

Requires **Node 20+**.

```bash
npm install
npm run dev       # http://localhost:4321/angular-portfolio/
npm run build     # static output → dist/
npm run preview   # serve the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it via GitHub Pages (`actions/deploy-pages`).

One-time setup: **Repo Settings → Pages → Source → "GitHub Actions"**.

Key config (in `astro.config.mjs`):

- `site: 'https://jukaco.github.io'`
- `base: '/angular-portfolio/'`

`public/.nojekyll` is shipped so GitHub Pages serves the hashed `_astro/` assets.
