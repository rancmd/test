# PIP-DASH — Project Brief

**Project Name:** PIP-DASH  
**Version:** 10b  
**Status:** In Progress  
**Last Updated:** 2026-03-16 | 17:33 

---

## 📝 NOTES FOR CLAUDE
> This is where you leave instructions, feedback, or requests before each session.
> Claude reads this first. Be as brief or detailed as you like.
> Clear this section after each session and write fresh notes for the next one.

```
1. remove pages title. it will look better.
2. create icon fav(its not working in my old iphone 8)
3. add glow effect to the UI
4. bigger icons
5. make the scan bigger so it will scan all the screen
```

---

## Workflow (Read This First)

1. User writes notes in **NOTES FOR CLAUDE** above
2. User shares latest brief URL
3. Claude fetches brief, reads notes, works on current step
4. After completing work, Claude:
   - Delivers all output files for download
   - Updates brief to next version
   - Triggers notification by fetching: https://ntfy.sh/pipdash-ran77/publish?message=Claude+is+done&t=1
5. User uploads files to server (all in root `/test/` folder)
6. Repeat

**Session start:** share latest `brief-vN.md` URL  
**Session end:** files delivered + brief updated + notification sent

---

## Notifications

**Ntfy topic:** `pipdash-ran77`  
**Trigger URL:** `https://ntfy.sh/pipdash-ran77/publish?message=Claude+is+done&t=1`  
Claude fetches this URL at the end of every session with a unique `t` value to bypass caching.  
Free, no account needed, works on locked screen.

---

## What Is This

A Pip-Boy inspired retro terminal dashboard. PWA — installable via "Add to Home Screen".
Black & white, monospace, CRT aesthetic. Landscape only. Full-screen when installed.
Focus is on **look, feel, and interaction** — all data is fake/hardcoded.

Brief URL pattern: `https://rancmd.github.io/test/brief-vN.md`  
Live URL: `https://rancmd.github.io/test/`

---

## File Structure (all files in root /test/ folder)

```
index.html       — shell: header, tabbar, page containers, rotate message
style.css        — all styling, two-column layouts, rotate overlay, animations
app.js           — page loader, clock, nav, radio, scan, vault, tasks, calc, compass
manifest.json    — PWA: fullscreen, orientation: landscape
icon.svg         — home screen icon
page-home.html   — HOME
page-stat.html   — STAT (two-column)
page-scan.html   — SCAN (two-column)
page-vault.html  — VAULT (two-column)
page-radio.html  — RADIO (two-column)
page-tasks.html  — TASKS (two-column)
page-calc.html   — CALC (two-column)
page-map.html    — MAP (two-column)
brief-vN.md      — latest project brief
```

---

## Landscape Lock

- `manifest.json`: `"orientation": "landscape"`
- CSS portrait media query: shows "ROTATE DEVICE" overlay
- **To install:** Safari → Share → Add to Home Screen

---

## Pages

| Tab | Layout | Notes |
|-----|--------|-------|
| HOME | 4×2 grid | fills full screen |
| STAT | two-column | clock + stats left, vitals bars right |
| SCAN | two-column | crosshair left, readout right |
| VAULT | two-column | lock icon + button left, record right |
| RADIO | two-column | display left, stations right |
| TASKS | two-column | input + stats left, scrollable list right |
| CALC | two-column | screen + history left, keypad right |
| MAP | two-column | compass left, radar + info right |

---

## Current Step

v7 built — all pages two-column landscape layout. Awaiting review.

---

## Next Steps

- [x] v1–v7 — iterations to current state
- [x] Ntfy notifications added to workflow
- [ ] Test ntfy trigger from brief URL
- [ ] User reviews v7
- [ ] Final polish

---

## Decisions Log

| Date | Decision |
|------|----------|
| 2026-03-15 | Project started — Pip-Boy dashboard |
| 2026-03-15 | Black & white, 8 tabs, split files |
| 2026-03-15 | PWA + Add to Home Screen |
| 2026-03-15 | Separate page files for easy editing |
| 2026-03-15 | Flat root structure for easy upload |
| 2026-03-15 | Landscape lock via manifest + CSS overlay |
| 2026-03-15 | All pages two-column landscape layout |
| 2026-03-16 | Switched from Vybit to Ntfy for notifications |
