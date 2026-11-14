# Portfolio redesign: "Sunday-morning café × silicon"

You are working in the repo for my personal portfolio site, currently deployed on Render at https://noah-scott.onrender.com. I want a full visual redesign, new interactive features, and updated content. Read this entire prompt before touching any code, then follow the phases in order.

---

## 0. Ground rules (read first)

- **Do not use git or GitHub at all.** Only edit files in this working directory. Don't run any `git` command (no `branch`, `checkout`, `add`, `commit`, `stash`, `reset`, `push`, `pull`, `merge`, or `rebase`), don't use the `gh` CLI, and don't open PRs or touch remotes. I handle all version control and deployment myself. If you think something git-related needs doing, tell me in your final summary instead of doing it.
- **Do not break the backend or the deploy.** The backend is Node (probably Express). Keep every existing API route, environment variable, and the Render build/start commands working exactly as they do now, unless I approve a change.
- **Secrets:** if you find any hard-coded keys or tokens, tell me. Do not move, print, or copy them into new files.
- **Ask, don't guess, on facts about me.** If a date, title, link, or claim isn't in this prompt or already in the repo, ask me rather than inventing it.
- **Keep what works.** Existing projects, links, resume file, contact method, and analytics stay unless this prompt says to change them.

---

## 1. Phase 1: Recon (report back before building)

I don't remember the exact stack. I believe it's React + Express on Node, hosted on Render. Find out and report:

1. **Frontend:** framework and build tool (Create React App, Vite, Next.js, something else?), React version, routing library, styling approach (plain CSS, CSS modules, Tailwind, styled-components…), and any animation libraries.
2. **Backend:** the server entry file, framework, every route it exposes (API routes, contact form, static file serving), and how it serves the built frontend (including SPA fallback for deep links).
3. **Render setup:** `render.yaml` if present, the build and start commands from `package.json`, Node version (`engines` / `.nvmrc`), and the environment variables the code reads.
4. **Content:** where the site's text lives (hard-coded in JSX, JSON/TS data files, Markdown, a database?). List every section currently on the site and what it contains.
5. **Current "hacker" styling:** list every hacker-themed element to remove (green-on-black terminal colors, matrix rain, glitch effects, scanlines, typing-terminal heroes, skulls, neon, etc.).
6. **Health:** does `npm install` + build succeed right now? Are there failing tests, lint errors, or outdated or vulnerable dependencies worth knowing about? Do not upgrade major versions without asking.

Then give me a **short plan**: the files you'll create or change, any new dependencies (keep these minimal and justify each one), and anything in this prompt that conflicts with the existing code. **Wait for my "go" before Phase 2.**

---

## 2. Phase 2: Centralize content

Before redesigning, move all site content (bio, experience, projects, skills, education, certifications, links) into typed data files, such as `src/data/experience.ts` or `.json` (match the project's JS/TS choice). Components render from data, so future updates are one-file edits. Preserve every existing project, link, and entry unless section 5 says otherwise.

---

## 3. Phase 3: Design direction

### The vibe

**A calm Sunday-morning café that happens to be run by a hardware engineer.** Warm, unhurried, a lot of whitespace, and paper-and-espresso tones. The tech identity comes through as **chip design / VLSI and code**, not "cyber." Think quiet copper circuit traces on cream paper, a die-shot floorplan used as a layout, and a coffee cup whose steam is made of `0`s and `1`s.

**It must stay consistent with my new LinkedIn banner**, which already establishes this brand:
- Cream background with faint, light-tan circuit traces running in from the edges
- Small lowercase monospace eyebrow: `cybersecurity engineer`
- Large serif headline: **"Brewing better detections."** with *detections.* in italic
- Subline: "Data pipelines & low-level security tools"
- Monospace tech list: `── Go · Rust · C/C++ · Cribl · AI/ML`
- A line-drawn coffee cup labeled `&mut` (a Rust mutable-reference joke), in a soft latte-colored circle, with `0 1 0 1` steam rising

Reuse that headline, subline, tech list and `&mut` cup in the site hero.

### Explicitly avoid

Green-on-black, neon, matrix rain, glitch/RGB-split effects, scanlines, skulls, hoodies, padlock clip-art, "h4ck3r" typography, and aggressive dark mode as the default. Also avoid generic SaaS-template looks (purple gradients, glassmorphism everywhere).

### Design tokens (CSS custom properties in one theme file)

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FBF8F3` | page background |
| `--cream` | `#F4ECE1` | section bands, cards |
| `--foam` | `#EADFCF` | borders, dividers, subtle fills |
| `--trace` | `#D9CBB6` | circuit-trace line art |
| `--latte` | `#C8A27C` | soft accents, cup circle |
| `--copper` | `#B0703F` | primary accent: links, highlights, active traces (copper interconnect + coffee) |
| `--roast` | `#6B4A38` | secondary text, icons |
| `--espresso` | `#2B1F19` | primary text, headings |
| `--sage` | `#7F8C6B` | rare secondary accent (success / "available" states) |

Check every text and background pair against WCAG AA contrast and adjust the shades if needed. Add an optional **"evening espresso"** dark theme (dark roast background, cream text, copper accents) behind a small toggle that respects `prefers-color-scheme`. Light is the default.

### Typography

- **Display/headings:** a warm, high-contrast serif with a good italic, such as **Fraunces**, Instrument Serif, or Newsreader.
- **Body:** a calm sans such as **Inter** or IBM Plex Sans.
- **Mono (labels, code, tech lists):** **JetBrains Mono** or IBM Plex Mono.
- Self-host the fonts (e.g. `@fontsource/*`) with `font-display: swap`. No render-blocking Google Fonts calls.
- Lowercase monospace "eyebrow" labels above section titles, like the banner (`experience`, `projects`, `the menu`).

### Recurring motifs (use with restraint)

- **Circuit traces:** thin SVG traces with small via dots, entering from page edges and section corners, in `--trace`. They are background decoration, never behind body text at a contrast-hurting opacity.
- **Die / chip packaging:** project cards styled as chip dies, with a thin border, tiny pin pads along one or two edges, and a monospace "part number" label (e.g. `NS-DEFOG-01`).
- **Steam made of bits:** `0`/`1` characters drifting up from cups.
- **Paper texture:** optionally a very subtle grain overlay (CSS or tiny SVG noise), under 2% visible.
- Generous whitespace, soft rounded corners (8–14px), soft shadows. Calm, not busy.

---

## 4. Phase 4: Interactivity ("codey coffee")

Build these. Each must be keyboard-accessible, work on mobile, degrade gracefully, and **fully respect `prefers-reduced-motion`** (show a static state instead of animating). The site must be fully navigable without using any of them. Prefer CSS/SVG and small hand-written React over heavy libraries; justify anything over ~15 KB gzipped.

### 4.1 Hero: the `&mut` pour-over
- The line-drawn `&mut` cup from the banner, as inline SVG.
- On load, the cup **fills** with coffee while a short code snippet beside it "compiles" line by line, as if the build process is brewing:
  ```rust
  let mut cup = Cup::new();
  cup.brew(Origin::Detections)?;
  cup.pour(&mut you);
  ```
  It ends with a quiet `✓ brewed in 0.42s` in mono.
- Steam is `0`/`1` glyphs rising and fading. On cursor hover or focus, the steam gently swirls toward the pointer.
- Clicking the cup "refills" it (replays the animation). Keep the replay subtle.

### 4.2 The menu board (skills)
- Skills presented as a **café chalk-free menu board** (paper menu, not chalkboard). Use serif item names, dotted leaders, and mono "prices."
- Group into sections such as **Espresso Bar (Languages)**: Go, Rust, C/C++, Python, JavaScript/TypeScript; **Pipelines & Data**: Cribl Stream/Edge, Azure Monitor / Data Collection Rules, Azure Arc, SQL audit logging; **Detection & DFIR**: CrowdStrike Falcon (EDR, RTR), CyberArk, SIEM detection engineering, memory forensics (WinPmem/WMI); **Systems**: Windows internals, low-level programming, computer engineering; **AI/ML**.
- "Prices" are playful but meaningful, such as years of use or a proficiency level: `Go ........ ●●●●○`, or `Rust ...... &mut`.
- Hovering or focusing an item reveals a **"tasting note"**: one line on what I've actually built with it (e.g. Go → "FOGLight / DeFOG: a single-binary Windows triage collector with concurrent artifact collection, used in a real malware case"). Pull the notes from the data files.

### 4.3 The counter terminal (optional REPL)
- A small, warm-toned terminal styled like an order ticket or receipt printer, not a hacker console: cream paper, espresso mono text, perforated edge.
- Commands: `help`, `menu` (skills), `whoami`, `brew experience`, `brew projects`, `ls certs`, `contact`, `clear`, plus Easter eggs: `espresso --shot=double`, `sudo make me a latte` (→ "Nice try. Permission denied: you're not in the baristas group."), `rustc cup.rs` (→ a borrow-checker joke about `&mut cup`).
- Commands that match site sections also scroll to them.
- Tab completion and up-arrow history. Hidden behind a small "☕ order at the counter" button on mobile.

### 4.4 Die-shot navigation
- A stylized **chip floorplan** (SVG) in which each functional block is a section: e.g. `CORE: about`, `CACHE: experience`, `ALU: projects`, `MEM: education & certs`, `I/O: contact`.
- Hovering or focusing a block lights up its copper traces; clicking scrolls to the section.
- Use it as a section overview right after the hero, or as a compact sticky mini-map on desktop. Keep a normal text nav bar as well. On mobile, collapse it to a simple list.

### 4.5 Experience as a signal trace
- The experience timeline is a vertical **PCB trace**, with a **via** (small ringed dot) at each role.
- As you scroll, a soft copper "signal" travels down the trace and each via lights up when its entry enters view (IntersectionObserver; static with reduced motion).

### 4.6 Small touches
- Favicon: a tiny cup with a chip-pin base, or the `&mut` cup.
- Custom 404 page: "This cup is empty. `404: brew not found`", with a link home.
- Footer: `brewed with Go, Rust & too much coffee · © {current year} Noah Scott`.
- Copy buttons on any code snippets.

---

## 5. Phase 5: Content updates

### Headline / hero
- Name: **Noah Scott** (he/him)
- Eyebrow: `cybersecurity engineer`
- Title: **Brewing better *detections.***
- Subline: **Data pipelines & low-level security tools**
- Tech line: `Go · Rust · C/C++ · Cribl · AI/ML`
- Short intro (refine the wording, keep the substance): Cybersecurity engineer at SAIC, building detections, data pipelines, and low-level security tools. Cribl Certified Engineer and my team's Cribl SME. I love programming, especially Go and Rust right now, and I'm pursuing an M.S. in Computer Engineering at CSUF, with interests in embedded and cyber-physical security.

### Experience: replace the existing section with this (most recent first)

**Remove any "Cybersecurity Analyst – County of Orange" entry.** It only reflects where my SAIC contract is placed, not a separate job. Do not mention "analyst" as a title anywhere.

1. **Cybersecurity Engineer**, SAIC · Contract
   Jul 2026 – Present · Orange County, CA · Hybrid
   - Support a county government's security operations on SAIC's security engineering team, splitting time between engineering projects and alert triage and investigation.
   - Team's Cribl subject-matter expert: onboarded an agency's machines from Azure Arc to Cribl Edge, built pipelines for SQL audit logging, and delivered Claude Code telemetry ingestion end to end (collector → pipeline → route → destination) after earlier attempts had stalled on misconfigurations.
   - Onboard agency endpoints to Azure data collection rules and stand up Cribl collectors and pipelines.
   - Build detections for CyberArk privileged-access auditing.
   - Root-caused recurring CrowdStrike brute-force alerts against a domain admin account: used Real Time Response to trace them to a SolarWinds Orion agent misconfiguration (`IP\admin` instead of `HOSTNAME\admin`). Wrote the fix-up report that got the configuration changed environment-wide, eliminating the false-positive noise.
   - Built **FOGLight**, a Go-based volatile memory and live-response collection tool (WinPmem + concurrent WMI queries, single binary, faster than its PowerShell predecessor). The forensics team used it on a real malware investigation. I released an open-source version, **DeFOG** (link to it from this bullet).

2. **Cybersecurity Associate, Orange County Cyber Innovation Clinic**, ECS Cyber – CSUF Center for Cybersecurity · Apprenticeship
   Jan 2025 – May 2025 · Fullerton, CA · Hybrid
   - Keep the existing site description if there is one; otherwise ask me for 2–3 bullets.

3. **IT Support Specialist**, California State University, Fullerton · Part-time
   Sep 2024 – Jun 2026 · Fullerton, CA · Hybrid
   - Keep or refine the existing description; otherwise ask me.

4. **Geek Squad** (Best Buy) · Part-time · Jun 2022 – Jul 2024 (group both roles under one company entry)
   - **Advanced Repair Agent**: Aug 2023 – Jul 2024 · On-site. Hardware and software repairs following company SOPs; clear, proactive repair-order updates for clients.
   - **Consultation Agent**: Jun 2022 – Aug 2023 · San Bernardino, CA. Customer-facing troubleshooting across IT and security issues, including helping victims of malware and scams.

5. **Earlier roles:** I was a **research assistant in augmented reality and robotics** and a **machine learning engineer at the startup Boundary RSS**. If these are already on the site, keep their existing dates and details. If not, add placeholders and ask me for the dates and descriptions. Do not invent them.

### Projects
- Keep all existing projects.
- Add or feature **DeFOG** (https://github.com/BareMetal-Alchemist/DeFOG): "Lightweight Windows triage collector in Go." It is the **open-source version of FOGLight**, the internal tool I built at SAIC that our forensics team used on a real malware case. Say that on the card (e.g. a small label: `open-source edition of FOGLight · used in a real malware investigation`), because it's the project's strongest credibility point. Don't describe FOGLight internals beyond what's in this prompt. A single executable with no PowerShell/.NET dependency that captures volatile memory (embedded WinPmem) and collects 30+ live-response artifacts concurrently (network, processes with SHA-256 hashes and signature checks, persistence such as WMI subscriptions, scheduled tasks and services, plus security posture) into a timestamped case folder. Style it as a featured "die" card. Read the repo's README to get details right.
- GitHub profile: https://github.com/BareMetal-Alchemist. Use it for the projects section's "more on GitHub" link.

### Education
- **M.S. Computer Engineering**, California State University, Fullerton (in progress). Interests: low-level programming, embedded and cyber-physical security.
- **B.S. Computer Science, Cybersecurity concentration**, CSUF. Also completed all coursework for the AI concentration, which wasn't offered yet when I graduated.
- **A.S. Computer Science** and **A.S. Mathematics**. Keep the school names and dates already on the site; ask me if missing.

### Certifications
- **Cribl Certified Engineer (Level 3)**, Cribl. Issued Nov 2026, expires Nov 2029. Highlight it; I've completed the full Cribl certification track.
- **CompTIA Security+**
- **C++ certificate** and **Python certificate**
- Keep any other certifications already on the site. LinkedIn lists 11 in total, so ask me if the site has fewer.

### Links
- LinkedIn and GitHub (BareMetal-Alchemist) in the header or footer and the contact section. Keep the existing contact method (email/form) working.

---

## 6. Phase 6: Quality bar

- **Responsive:** looks intentional at 360px, 768px, 1280px, and 1600px+.
- **Accessibility:** semantic landmarks, one `h1`, logical heading order, visible focus styles (copper outline), alt text and `aria-label`s on SVG interactions, AA contrast, full keyboard operation, and a reduced-motion path for every animation.
- **Performance:** no layout shift from fonts or animations, lazy-load below-the-fold heavy pieces, and keep the JS bundle lean. Aim for Lighthouse ≥ 90 in Performance, Accessibility, Best Practices and SEO.
- **SEO/meta:** title `Noah Scott · Cybersecurity Engineer`, a meta description matching the hero, Open Graph/Twitter tags, and an OG image generated in the same café-silicon style (1200×630 PNG in `public/`).
- **SPA routing:** deep links and refreshes work through the Express fallback; the 404 page works.
- **No console errors or warnings** in dev or prod builds.

---

## 7. Phase 7: Verify, then report

1. Run the production build and start the server **exactly the way Render does** (same build and start commands, same `PORT` handling). Load the site and click through every section, nav item, interaction, and terminal command.
2. If a headless browser is available, take screenshots at mobile and desktop widths, in light and dark themes, and review them for overflow, overlap, contrast, and alignment issues. Fix what you find.
3. Confirm every pre-existing API route still responds as before.
4. Leave all changes as uncommitted local edits. Don't stage, commit, or push anything.
5. Give me a summary: every file created, changed, or deleted; the new dependencies and why; anything you couldn't verify; and **a list of every question or placeholder that needs my input** (dates, descriptions, missing certs). I'll review the diff and handle commits and deployment myself.
