# PIP-DASH — Project Brief

**Project Name:** PIP-DASH  
**Version:** 4  
**Status:** In Progress  
**Last Updated:** 2026-03-15 | 19:30

---

## 📝 NOTES FOR CLAUDE
> This is where you leave instructions, feedback, or requests before each session.
> Claude reads this first. Be as brief or detailed as you like.
> Clear this section after each session and write fresh notes for the next one.

```
1. i want the design to be horzintal (like a big watch on the hand).
2. i want it in hebrew so kids can play with it (only the interface).
3. use separate files for easy fix (html, inner pages, js, css).
4. call the main file index.html
5. make it responive.
6. add some icons and graphic so it will look more nice (no images)
7. make the UI bigger so it will fit more to touch screen

```

---

## Workflow (Read This First)

This project uses a loop-based collaboration between the user and Claude:

1. The user writes notes in the **NOTES FOR CLAUDE** section above
2. The user shares the latest brief URL at the start of each session
3. Claude fetches and reads the brief to get full context
4. Claude works based on the notes + current step
5. After completing work, Claude:
   - Produces an updated brief (next version number, updated timestamp, notes cleared)
   - Delivers downloadable output files to the user
6. The user uploads all files to the server
7. Loop repeats in the next session

**Every session starts with:** user shares latest `brief-vN.md` URL  
**Every session ends with:** `brief-v(N+1).md` + all output files for download

**Versioning:** Brief files are named `brief-v1.md`, `brief-v2.md` etc. to avoid GitHub Pages caching.

---

## What Is This

A Pip-Boy inspired retro terminal dashboard.
Black & white, monospace, CRT aesthetic. Mobile-first and fully responsive.
Focus is on **look, feel, and interaction** — not real functionality. All data is fake/hardcoded.

Brief URL pattern: `https://rancmd.github.io/test/brief-vN.md`  
Live URL: `https://rancmd.github.io/test/`

---

## Goal

Build a Pip-Boy inspired retro terminal dashboard as separate files:
- `index.html` — structure
- `style.css` — all styling
- `app.js` — all interactivity

Responsive, mobile-first. Black & white. CRT aesthetic. Fake/hardcoded data.

---

## Scope

**Included:**
- 8 tabs with smooth navigation
- Retro terminal font, CRT scanline effect
- Satisfying click interactions and animations
- Fake/hardcoded data throughout
- Fully responsive (mobile first)
- Split into index.html + style.css + app.js

**Not included:**
- Real APIs or live data
- Backend or server
- User accounts or persistence

---

## Pages

| Tab | Name | Description |
|-----|------|-------------|
| HOME | Dashboard | Minimal overview — quick glance at all sections |
| STAT | Status | Fake vitals — battery, signal, temperature, time, date |
| SCAN | Scanner | Tap to scan — fake readout with loading animation |
| VAULT | Vault | Retrieve random "classified" facts with animation |
| RADIO | Radio | Fake stations, waveform animation, tuning effect |
| TASKS | Tasks | Simple interactive checklist |
| CALC | Calc | Terminal-style calculator |
| MAP | Map | Fake location and compass |

---

## Design

- **Color:** Black & white only
- **Font:** VT323 + Share Tech Mono (Google Fonts)
- **Effects:** CRT scanlines, flicker, glitch animations, vignette
- **Interactions:** Buttons feel tactile, screens animate on tab switch
- **Mobile:** Touch friendly, fits phone screen, horizontal scrolling tab bar at top

---

## Current Step

Awaiting user notes and feedback on v1 before splitting into separate files.

---

## Next Steps

- [x] Build v1 — all 8 tabs, full layout, basic interactions
- [x] User reviews v1
- [ ] Split into index.html + style.css + app.js
- [ ] Apply any feedback from user notes
- [ ] Final polish and cleanup

---

## Decisions Log

| Date | Decision |
|------|----------|
| 2026-03-15 | Project started — Pip-Boy dashboard |
| 2026-03-15 | Color scheme: black & white |
| 2026-03-15 | 8 tabs: HOME, STAT, SCAN, VAULT, RADIO, TASKS, CALC, MAP |
| 2026-03-15 | Single HTML file for v1, split to 3 files from v2 onward |
| 2026-03-15 | Versioned briefs (brief-vN.md) to avoid GitHub Pages caching |
| 2026-03-15 | Output renamed from pip-dash.html to index.html |
