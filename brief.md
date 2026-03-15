# PIP-DASH — Project Brief

**Project Name:** PIP-DASH  
**Status:** In Progress  
**Last Updated:** 2026-03-15  

---

## What Is This

A Pip-Boy inspired retro terminal dashboard built as a single HTML file.
Black & white, monospace, CRT aesthetic. Mobile-first and fully responsive.
The focus is on **look, feel, and interaction** — not real functionality. All data is fake/hardcoded.

This brief is the single source of truth for this project.
It lives at: `https://rancmd.github.io/test/brief.md`

---

## Workflow (Read This First)

This project uses a loop-based collaboration between the user and Claude:

1. The user shares this brief URL at the start of each session
2. Claude fetches and reads the brief to get full context
3. Claude works on the current step
4. After completing work, Claude:
   - Updates this brief (status, current step, next steps, notes)
   - Delivers a downloadable output file to the user
5. The user uploads the updated brief to the server (same URL)
6. Loop repeats in the next session

**Every session starts with:** fetch `https://rancmd.github.io/test/brief.md`  
**Every session ends with:** updated `brief.md` + deliverable for download

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
- **Font:** Monospace / retro terminal (e.g. Share Tech Mono or VT323 from Google Fonts)
- **Effects:** CRT scanlines, flicker, glitch animations
- **Interactions:** Buttons feel tactile, screens animate on tab switch
- **Mobile:** Touch friendly, fits phone screen, tab bar at bottom

---

## Current Step

Build v1 — full HTML/CSS/JS single file with all 8 tabs.

---

## Next Steps

- [ ] Build v1 — all 8 tabs, full layout, basic interactions
- [ ] User reviews v1 and gives feedback
- [ ] Iterate based on feedback
- [ ] Final polish and cleanup

---

## Notes & Decisions

- Single HTML file — no dependencies, no build step
- All data is fake/hardcoded for visual effect
- Brief URL: https://rancmd.github.io/test/brief.md
- Output file should always be named `pip-dash.html`
- After each work session, Claude must provide both an updated `brief.md` and the latest `pip-dash.html` for download
