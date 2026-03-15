# PIP-DASH — Project Brief

**Project Name:** PIP-DASH  
**Version:** 3  
**Status:** In Progress  
**Last Updated:** 2026-03-15 | 19:00

---

## What Is This

A Pip-Boy inspired retro terminal dashboard built as a single HTML file.
Black & white, monospace, CRT aesthetic. Mobile-first and fully responsive.
The focus is on **look, feel, and interaction** — not real functionality. All data is fake/hardcoded.

This brief is the single source of truth for this project.
Current brief URL: `https://rancmd.github.io/test/brief-v3.md`

---

## Workflow (Read This First)

This project uses a loop-based collaboration between the user and Claude:

1. The user shares the latest brief URL at the start of each session
2. Claude fetches and reads the brief to get full context
3. Claude works on the current step
4. After completing work, Claude:
   - Produces an updated brief (next version number, updated timestamp)
   - Delivers a downloadable `pip-dash.html` to the user
5. The user uploads both files to the server
6. Loop repeats in the next session

**Every session starts with:** user shares latest `brief-vN.md` URL  
**Every session ends with:** `brief-v(N+1).md` + `pip-dash.html` for download

**Versioning:** Brief files are named `brief-v1.md`, `brief-v2.md` etc. to avoid GitHub Pages caching.

---

## Goal

Build a Pip-Boy inspired retro terminal dashboard as a single `pip-dash.html` file.
Responsive, mobile-first. Black & white color scheme. CRT/terminal aesthetic.
Focus is on look, feel and interaction — not real functionality. Data can be fake/hardcoded.

---

## Scope

**Included:**
- 8 tabs with smooth navigation
- Retro terminal font, CRT scanline effect
- Satisfying click interactions and animations
- Fake/hardcoded data throughout
- Fully responsive (mobile first)
- Single HTML file, no dependencies, no build step

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

v1 built. User reviewing and giving feedback.

---

## Next Steps

- [x] Build v1 — all 8 tabs, full layout, basic interactions
- [ ] User reviews v1 and gives feedback
- [ ] Iterate based on feedback
- [ ] Final polish and cleanup

---

## Notes & Decisions

- Single HTML file — no dependencies, no build step
- All data is fake/hardcoded for visual effect
- Output file always named `pip-dash.html`
- Brief versioning: `brief-v1.md`, `brief-v2.md` etc. to avoid GitHub Pages caching
- After each work session: updated brief (next version) + `pip-dash.html` delivered for download
- v1 completed 2026-03-15: all 8 tabs working, live clock, animated waveform, scanner with fake readouts, vault with classified records, working calculator, compass with rotation, task list with add/delete/check
