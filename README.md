# Hyderabad Urban Observatory — Tools

The Tools site of the Hyderabad Urban Observatory (https://tools.hyderabad.urbanobservatory.in):
one page listing the Observatory's interactive tools (weather dashboard, Accessibility Atlas,
flood reports, Lake Atlas, City Timeline) as theme-filterable cards. React 19 + Vite + Ant Design,
no backend. Built by GitHub Actions and published to GitHub Pages.

The Observatory's web presence is three small sites that share one look:

| Site | Repo | Content |
|---|---|---|
| https://hyderabad.urbanobservatory.in | `site` | home (HMDA terrain), About, Disclaimer; redirects of old `/explore/…` and `/stories/…` addresses |
| https://tools.hyderabad.urbanobservatory.in | `tools` (this repo) | the tool cards |
| https://stories.hyderabad.urbanobservatory.in | `stories` | the stories & datasets cards and the story pages |

The shared pieces (header, footer, logo, cards, filter bubbles, not-found page, `links.js`,
`styles/index.css`, fonts, favicon) are **copied** into each repo rather than packaged: three
copies to keep in step by hand, which is cheaper than a shared package for code this small.
The design reference is `DESIGN-SYSTEM.md` in the observatory-work repo.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ (postbuild copies index.html to 404.html for SPA deep links)
```

## Environment variables (build time)

| Variable            | Default                                            | Purpose |
|---------------------|----------------------------------------------------|---------|
| `VITE_BASE`         | `/`                                                | Path the site is served from. |
| `VITE_SITE_URL`     | `https://hyderabad.urbanobservatory.in`            | Main site: header brand, About, Disclaimer. |
| `VITE_TOOLS_URL`    | `https://tools.hyderabad.urbanobservatory.in/`     | This site (header nav). |
| `VITE_STORIES_URL`  | `https://stories.hyderabad.urbanobservatory.in/`   | Stories site (header nav). |
| `VITE_MAPS_URL`     | `https://maps.hyderabad.urbanobservatory.in`       | Spatial Data Repository (map viewer). |
| `VITE_TIMELINE_URL` | `https://timeline.hyderabad.urbanobservatory.in/`  | City Timeline card. |
| `VITE_DATA_URL`     | `https://data.hyderabad.urbanobservatory.in/`      | Open-data site ("Data sources"). |

## Deploys

Every push to `main` (or a manual run of the workflow) runs `.github/workflows/pages.yml`:
`npm ci`, `npm run build`, upload `dist/`, deploy to Pages. The repository's Pages source
must be set to **GitHub Actions** (Settings → Pages → Build and deployment → Source), with the
custom domain `tools.hyderabad.urbanobservatory.in` (a `CNAME` record for `tools.hyderabad` →
`hulf-observatory.github.io`; the `hyderabad.urbanobservatory.in` domain is already verified for
the `hulf-observatory` account, which covers its subdomains). The workflow reads the repository
variables listed above; the fallback for `VITE_BASE` is `/`.

## Licence

MIT, see `LICENSE`. Content and data have their own attributions on the pages.
