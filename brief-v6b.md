# PIP-DASH — Project Brief

**Project Name:** PIP-DASH  
**Version:** 6  
**Status:** In Progress  
**Last Updated:** 2026-03-15 | 21:00

---

## 📝 NOTES FOR CLAUDE
> This is where you leave instructions, feedback, or requests before each session.
> Claude reads this first. Be as brief or detailed as you like.
> Clear this section after each session and write fresh notes for the next one.

```
make it full screen with no scroll and no adress bar.
and make it so the content fill the screen. 
think like 100% width and height stretch.
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
**Session end:** `brief-v(N+1).md` + `index.html` + `style.css` + `app.js`

**Versioning:** `brief-vN.md` to avoid GitHub Pages caching.

---

## What Is This

A Pip-Boy inspired retro terminal dashboard.
Black & white, monospace, CRT aesthetic. Full-screen, no scroll. Mobile-first.
Focus is on **look, feel, and interaction** — all data is fake/hardcoded.

Brief URL pattern: `https://rancmd.github.io/test/brief-vN.md`  
Live URL: `https://rancmd.github.io/test/`

---

## File Structure

```
index.html   — HTML structure, all 8 pages, inline SVG icons
style.css    — styling, CRT effects, full-screen layout, animations
app.js       — clock, navigation, radio, scan, vault, tasks, calc, compass
```

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
- **Layout:** Full screen, no scroll, content centered per page
- **Effects:** CRT scanlines, flicker, blink, sweep, sonar ping, waveform
- **Touch:** Large tap targets, active states on all buttons

---

## Current Step

v3 built — English, SVG icons, full-screen, high contrast, loop animations. Awaiting review.

---

## Next Steps

- [x] v1 — single file, all 8 tabs
- [x] v2 — Hebrew, 3 files, emoji icons
- [x] v3 — English, SVG icons, full-screen, minimal, high contrast
- [ ] User reviews v3
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
| 2026-03-15 | Versioned briefs to avoid caching |
| 2026-03-15 | v2: Hebrew UI, emoji icons |
| 2026-03-15 | v3: Back to English, inline SVG icons, full-screen no-scroll, high contrast |
