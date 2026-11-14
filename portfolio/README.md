# noah-scott.onrender.com

Personal portfolio for Noah Scott. Design direction: *a calm Sunday-morning café run by a hardware engineer*: cream paper, copper circuit traces, a `&mut` coffee cup, and chip-die project cards.

## Stack

- **Create React App** (`react-scripts` 5) with React 19, plain JavaScript.
- Plain CSS with design tokens in `src/styles/tokens.css`. No UI framework, no animation library.
- Self-hosted variable fonts (Fraunces, Inter, JetBrains Mono; latin subsets, OFL) in `public/fonts`, declared in `src/styles/fonts.css` and preloaded from `public/index.html`.
- Deployed on **Render as a Static Site**: build command `npm run build`, publish directory `build`. There is no backend.

## Editing content

All site copy lives in `src/data/`. Components only render what's there.

| File | What it controls |
|---|---|
| `profile.js` | Name, pronouns, hero headline/subline/tech list, intro paragraphs, quick facts, meta description |
| `experience.js` | Work history (most recent first). Bullets can be strings or `{ before, link, after }` for inline links. Grouped roles use `roles: []`. |
| `projects.js` | Project "dies". `part` is the mono part number; `featured: true` makes a full-width card with the sage label. |
| `skills.js` | The menu board: sections → items with `name`, `price` (`●●●●○`, `&mut`, `CCE L3`...) and a one-line tasting `note`. |
| `education.js`, `certifications.js` | Education list and the certifications receipt (`featured: true` highlights a line). |
| `links.js` | Email, LinkedIn, GitHub, DeFOG repo. |
| `navigation.js` | Section ids, nav labels and die-map block names. |

Search for `TODO(Noah)` in `src/data/` for entries that still need details.

## Theme

Light "paper" is the default. The "evening espresso" dark theme follows `prefers-color-scheme` unless a visitor picks a theme with the toggle (stored in `localStorage` as `theme`). Tokens for both live in `src/styles/tokens.css`; every text/background pair was checked against WCAG AA.

## Interactive pieces

- **Hero pour-over** (`PourOver.js`): the cup fills while a Rust snippet "compiles"; click the cup to replay. Steam drifts toward the pointer.
- **Die map** (`DieMap.js`): chip floorplan navigation; collapses to a list on small screens.
- **Experience trace** (`Experience.js`): vias light up as entries scroll into view (IntersectionObserver).
- **Menu board** (`MenuBoard.js`): hover/focus/tap a skill for its tasting note.
- **Counter terminal** (`CounterTerminal.js`): small REPL. `help` lists commands; there are a few easter eggs. Lazy-loaded.

Every animation has a `prefers-reduced-motion` path that shows the finished state.

## Scripts

```
npm start        # dev server on :3000
npm test         # jest + testing-library
npm run build    # production build into ./build
```

## Static assets

`public/` holds `index.html` (meta/OG tags, no-flash theme script), `404.html` (served by Render for unknown paths), `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.png` (1200×630), `robots.txt`, `sitemap.xml`, and the portrait.
