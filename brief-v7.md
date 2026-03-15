# PIP-DASH — Project Brief

**Project Name:** PIP-DASH  
**Version:** 7  
**Status:** In Progress  
**Last Updated:** 2026-03-15 | 22:00

---

## 📝 NOTES FOR CLAUDE
> This is where you leave instructions, feedback, or requests before each session.
> Claude reads this first. Be as brief or detailed as you like.
> Clear this section after each session and write fresh notes for the next one.

```
1. sperete the index.html to sperete files as you suggest before, for easy future fix and replacing files.
2. make it responsive for the height (for example i want the dashboard buttons area to fill the all screen)
3. upgrade the design so it will fit to a wide screen. for example in the radio and the list you can change the design to two rows side by side. and i like the todo list have a scroll of its own.
4. in the scan page. make it so it scan the all screen and not just the circle.
5. make the icons bigger. it will look more nice.
```

---

## Workflow (Read This First)

1. User writes notes in **NOTES FOR CLAUDE** above
2. User shares latest brief URL
3. Claude fetches brief, reads notes, works on current step
4. Claude delivers: updated `brief-v(N+1).md` + all output files
5. User uploads files to server
6. Repeat

**Session start:** share latest `brief-vN.md` URL  
**Session end:** `brief-v(N+1).md` + `index.html` + `style.css` + `app.js` + `manifest.json` + `icon.svg`

**Versioning:** `brief-vN.md` to avoid GitHub Pages caching.

---

## What Is This

A Pip-Boy inspired retro terminal dashboard. PWA — installable via "Add to Home Screen".
Black & white, monospace, CRT aesthetic. Full-screen, no scroll, no browser UI when installed.
Focus is on **look, feel, and interaction** — all data is fake/hardcoded.

Brief URL pattern: `https://rancmd.github.io/test/brief-vN.md`  
Live URL: `https://rancmd.github.io/test/`

---

## File Structure

```
index.html     — HTML, all 8 pages, SVG icons, PWA meta tags
style.css      — styling, full-screen DVH, safe-area insets, animations
app.js         — clock, navigation, radio, scan, vault, tasks, calc, compass
manifest.json  — PWA manifest (name, fullscreen, theme color)
icon.svg       — home screen icon
```

---

## PWA / Full Screen

- `manifest.json` sets `"display": "fullscreen"` — no browser chrome when installed
- Meta tags: `apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`
- CSS uses `100dvh` (dynamic viewport height) + `env(safe-area-inset-*)` for notch/home bar
- **To install:** open in Safari → Share → Add to Home Screen

---

## Pages

| Tab | Icon | Description |
|-----|------|-------------|
| HOME | house SVG | overview grid of all 8 sections |
| STAT | bar chart SVG | live clock, battery, vitals bars |
| SCAN | target/radar SVG | tap to scan, sweep animation, readout |
| VAULT | lock SVG | retrieve classified records, glitch effect |
| RADIO | radio SVG | 4 stations, waveform animation |
| TASKS | checklist SVG | add/check/delete tasks |
| CALC | calculator SVG | working terminal calculator |
| MAP | compass SVG | rotating compass, coordinates, radar ping |

---

## Design

- **Color:** Black & white only, high contrast
- **Font:** VT323 (display) + Share Tech Mono (body)
- **Icons:** Custom inline SVG, flat 8-bit pixel style
- **Layout:** Full screen DVH, no scroll, content centered per page
- **Effects:** CRT scanlines, flicker, blink, sweep, sonar ping, waveform
- **Touch:** Large tap targets, active states on all buttons

---

## Current Step

v4 built — PWA full screen, DVH layout, safe area insets. Awaiting user review.

---

## Next Steps

- [x] v1 — single file, all 8 tabs
- [x] v2 — Hebrew, 3 files, emoji icons
- [x] v3 — English, SVG icons, full-screen, minimal, high contrast
- [x] v4 — PWA install support, true full screen, safe area
- [ ] User reviews v4
- [ ] Iterate based on feedback
- [ ] Final polish

---

## Decisions Log

| Date | Decision |
|------|----------|
| 2026-03-15 | Project started — Pip-Boy dashboard |
| 2026-03-15 | Black & white only |
| 2026-03-15 | 8 tabs: HOME STAT SCAN VAULT RADIO TASKS CALC MAP |
| 2026-03-15 | Split into 3 files: index.html + style.css + app.js |
| 2026-03-15 | Versioned briefs to avoid GitHub Pages caching |
| 2026-03-15 | v2: Hebrew UI, emoji icons |
| 2026-03-15 | v3: English, inline SVG icons, full-screen, high contrast |
| 2026-03-15 | v4: PWA manifest + Add to Home Screen = true full screen app |
