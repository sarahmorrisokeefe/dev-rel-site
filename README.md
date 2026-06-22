# dev-rel-site

Marketing site for my freelance Developer Relations consulting practice.

I'm a senior frontend engineer (six years of production React + TypeScript) who specializes in the human side of developer tools: content, community, and the relational work that turns first-time API users into advocates. I work with Series A/B startups that have a developer-facing product — an API, SDK, or platform — and no one yet owning the developer experience.

**Services offered:**
- **Launch Engagement** — an 8-week sprint to stand up a working DevRel function: discovery with real users, a content and community plan, published content, and a first live touchpoint (AMA / office hours)
- **Ongoing DevRel Retainer** — continued content production, community management, and a steady public presence for your developers, on a monthly basis after a Launch Engagement
- **Docs Health Check** — a fast, fixed-price audit of existing docs and first-run developer experience, delivered as a prioritized report of gaps and quick wins

The site lives at [dx.okeefesarah.com](https://dx.okeefesarah.com) and will eventually move to [sarahokeefe.dev](https://sarahokeefe.dev).

---

## Running locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`. Changes to any file in `src/` hot-reload automatically.

### Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

### Project structure

```
src/
├── layouts/
│   └── BaseLayout.astro       # <html>, fonts, OG tags, reveal-animation script
├── styles/
│   └── global.css             # design tokens, hover states, responsive breakpoints
├── pages/
│   └── index.astro            # single page — import/uncomment sections here
└── components/
    ├── Nav.astro              # sticky nav + mobile hamburger
    ├── Hero.astro
    ├── TheGap.astro
    ├── HowItWorks.astro       # Launch Engagement + Ongoing Retainer cards
    ├── Process.astro          # 8-week timeline breakdown
    ├── StartHere.astro        # Docs Health Check (secondary offering)
    ├── WhyMe.astro
    ├── Proof.astro            # placeholder case studies — commented out in index.astro
    ├── FAQ.astro
    ├── Contact.astro          # mailto form
    └── Footer.astro
```

### Common edits

| What | Where |
|---|---|
| Contact email | `src/components/Contact.astro` line 2 |
| Accent color | `src/styles/global.css` — `--accent` in `:root` |
| Enable case studies section | Uncomment `Proof` in `src/pages/index.astro` |
| Site URL / OG tags | `astro.config.mjs` + `src/layouts/BaseLayout.astro` |

---

## Deployment

The site is deployed to [Vercel](https://vercel.com) and served at **[dx.okeefesarah.com](https://dx.okeefesarah.com)**.

Pushing to `main` triggers an automatic production deployment. Vercel picks up the build config from `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

No server required — this is a fully static site (`output: 'static'` in `astro.config.mjs`).
