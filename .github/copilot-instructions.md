# Project Guidelines

## Project Overview
Personal resume and portfolio site for Faisal Khan — Senior Angular & Frontend Engineer.
Static HTML/CSS only. No build tools, no npm, no frameworks, no JavaScript bundlers.

## Files
| File | Purpose |
|------|---------|
| `faisal_khan_resume.html` | Print-optimized, single-page resume |
| `portfolio.html` | Dark-theme portfolio website |
| `passport-img.jfif` | Profile photo asset |

## Design Conventions

### Resume (`faisal_khan_resume.html`)
- Accent color: `#1a4f9c` (blue), dark heading: `#0d2d6e`
- Fonts: system stack — `'Segoe UI', 'Helvetica Neue', Arial, sans-serif`
- Page width: `860px`, padding: `44px 52px`
- All styles are inline in `<style>` inside `<head>` — no external CSS files
- Print-first layout; avoid changes that break `@media print`

### Portfolio (`portfolio.html`)
- Dark theme via CSS custom properties defined in `:root`
- Accent: `--accent: #00d4ff` (cyan), background: `--bg: #0d0f14`
- Fonts via Google Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (code)
- All styles are inline in `<style>` inside `<head>`
- Includes JSON-LD structured data and Open Graph meta tags — keep them accurate

## Conventions
- **No external CSS/JS files** — keep everything self-contained in each HTML file
- **Semantic HTML** — use `<address>`, `<section>`, `<article>`, `<time>` etc. appropriately
- **No JavaScript** unless strictly necessary (currently JS-free)
- Preserve existing `<meta>` SEO tags and structured data when editing content
- When updating skills or experience, mirror relevant changes across both files to keep them consistent
