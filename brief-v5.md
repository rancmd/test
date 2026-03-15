# PIP-DASH — Project Brief

**Project Name:** PIP-DASH  
**Version:** 5  
**Status:** In Progress  
**Last Updated:** 2026-03-15 | 20:00

---

## 📝 NOTES FOR CLAUDE
> This is where you leave instructions, feedback, or requests before each session.
> Claude reads this first. Be as brief or detailed as you like.
> Clear this section after each session and write fresh notes for the next one.

```
1. change it back to english (it look bad in hebrew)
2. i want flat black and white icon (think 8 bit style) 
3. the visual need to be more simple and minimal (big text and flat button)
4. i want it to fill the screen like a full screen app (no scroll). make the screen simple and align to the center. it will help you get the effect i am talking about.
5. you can add black and white flat shapes with no images like a retro computer. it will give it more style.
6. the text need to be more contrast. its hard to read.
7. add more simple loop animation. it will make it feel more alive.

```

---

## Workflow (Read This First)

This project uses a loop-based collaboration between the user and Claude:

1. The user writes notes in the **NOTES FOR CLAUDE** section above
2. The user shares the latest brief URL at the start of each session
3. Claude fetches and reads the brief to get full context
4. Claude works based on the notes + current step
5. After completing work, Claude:
   - Produces an updated brief (next version, updated timestamp, notes cleared)
   - Delivers all output files for download
6. The user uploads all files to the server
7. Loop repeats in the next session

**Every session starts with:** user shares latest `brief-vN.md` URL  
**Every session ends with:** `brief-v(N+1).md` + all output files for download

**Versioning:** Brief files are named `brief-v1.md`, `brief-v2.md` etc. to avoid GitHub Pages caching.

---

## What Is This

A Pip-Boy inspired retro terminal dashboard. Hebrew UI for kids.
Black & white, monospace, CRT aesthetic. Mobile-first and fully responsive.
Focus is on **look, feel, and interaction** — not real functionality. All data is fake/hardcoded.

Brief URL pattern: `https://rancmd.github.io/test/brief-vN.md`  
Live URL: `https://rancmd.github.io/test/`

---

## Goal

Pip-Boy inspired retro terminal dashboard split into 3 files:
- `index.html` — structure + Hebrew labels + icons
- `style.css` — all styling, CRT effects, responsive layout
- `app.js` — all interactivity, animations, fake data

---

## File Structure

```
index.html   — main HTML, all 8 tab pages, Hebrew labels, emoji icons
style.css    — all CSS, CRT scanlines, animations, responsive
app.js       — clock, navigation, radio, scan, vault, tasks, calc, compass
```

---

## Pages

| Tab | Hebrew | Icon | Description |
|-----|--------|------|-------------|
| HOME | בית | 🏠 | סקירת מערכת — overview of all sections |
| STAT | סטטוס | 📊 | נתונים חיוניים — vitals, clock, battery |
| SCAN | סריקה | 🔍 | סורק סביבה — tap to scan, fake readout |
| VAULT | כספת | 🔒 | ארכיון חסוי — retrieve classified records |
| RADIO | רדיו | 📻 | תקשורת — fake stations, waveform |
| TASKS | משימות | ✅ | יומן משימות — interactive checklist |
| CALC | מחשבון | 🧮 | מחשבון — terminal calculator |
| MAP | מפה | 🗺️ | ניווט — compass, coordinates |

---

## Design

- **Color:** Black & white only
- **Font:** VT323 + Share Tech Mono (Google Fonts)
- **Direction:** RTL (right to left) for Hebrew
- **Effects:** CRT scanlines, flicker, glitch, vignette
- **Icons:** Emoji icons on tabs and section headers
- **Interactions:** Large touch targets, tactile feel
- **Layout:** Device frame on desktop, full screen on mobile

---

## Current Step

v2 built with Hebrew UI, 3 separate files, icons, larger touch targets. Awaiting user review.

---

## Next Steps

- [x] Build v1 — all 8 tabs, single file
- [x] User reviews v1, gives feedback
- [x] Rebuild v2 — Hebrew, 3 files, icons, bigger touch targets
- [ ] User reviews v2 and gives feedback
- [ ] Iterate based on feedback
- [ ] Final polish

---

## Decisions Log

| Date | Decision |
|------|----------|
| 2026-03-15 | Project started — Pip-Boy dashboard |
| 2026-03-15 | Color scheme: black & white |
| 2026-03-15 | 8 tabs: HOME, STAT, SCAN, VAULT, RADIO, TASKS, CALC, MAP |
| 2026-03-15 | Single HTML file for v1 |
| 2026-03-15 | Versioned briefs to avoid GitHub Pages caching |
| 2026-03-15 | v2: Hebrew UI, split into 3 files, emoji icons, larger touch targets |
| 2026-03-15 | Output files: index.html + style.css + app.js |
