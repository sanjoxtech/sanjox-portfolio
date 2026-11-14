# sanjox.tech

Personal engineering leadership portfolio. Static HTML, CSS and JavaScript, deployed through GitHub Pages from `main` at the repository root. `CNAME` preserves the existing custom domain.

## Preview

Run `python3 -m http.server 4190 --bind 127.0.0.1` and open http://127.0.0.1:4190/.

## Content

- `index.html`: page, career timeline and project overview
- `script.js`: case study content, system tabs, mobile navigation and email copy
- `styles.css`: responsive layout; Google Fonts with local system fallbacks
- `assets/Sanjay-Kumar-Resume.pdf`: factual resume, not the illustrative review draft

Independent AI projects are described as in development. Employer code and private repositories are not published. New metrics must be supported by verified evidence. There are no analytics, form backends, cookies or external scripts.

## Deployment

Push reviewed changes to `main` to trigger the existing GitHub Pages deployment. Keep `CNAME` unchanged. Source and PDF are public on deployment.

## Motion version (v2)

The original v1 is preserved in the `portfolio-v1-2026-11-14` Git tag, backup branch and `/previous/` static directory (noindexed). A local ZIP backup is stored alongside the Career documents.

V2 adds progressive scroll reveals, a sticky navigation with active-section feedback, reading progress, animated signal diagrams, project-panel transitions and light portrait parallax. The Motion switch persists the visitor's preference locally. OS reduced-motion settings disable animations. There is no scroll interception, automatic tab switching or content carousel.
