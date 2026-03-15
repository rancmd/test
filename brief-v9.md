# PIP-DASH — Project Brief

**Project Name:** PIP-DASH  
**Version:** 9  
**Status:** In Progress  
**Last Updated:** 2026-03-15 | 23:30

---

## 📝 NOTES FOR CLAUDE
> This is where you leave instructions, feedback, or requests before each session.
> Claude reads this first. Be as brief or detailed as you like.
> Clear this section after each session and write fresh notes for the next one.

```
the new wide design for the radio and map look great.
i want the same for the other pages. it will make better UX/UI design.
home: looks great
stat: side by side
scan: side by side
vault: side by side
radio: looks great
task: side by side
calc: side by side, landscape design
map: looks great
```

---

## Workflow (Read This First)

1. User writes notes in **NOTES FOR CLAUDE** above
2. User shares latest brief URL
3. Claude fetches brief, reads notes, works on current step
4. Claude delivers: updated `brief-v(N+1).md` + all output files
5. User uploads files to server (all in root `/test/` folder)
6. Repeat

**Session start:** share latest `brief-vN.md` URL  
**Session end:** `brief-v(N+1).md` + all output files

**Versioning:** `brief-vN.md` to avoid GitHub Pages caching.

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
index.html       — shell: header, tabbar, empty page containers, rotate message
style.css        — all styling including rotate overlay and landscape lock
app.js           — page loader, clock, nav, all page logic
manifest.json    — PWA: fullscreen, orientation: landscape
icon.svg         — home screen icon
page-home.html   — HOME page content
page-stat.html   — STAT page content
page-scan.html   — SCAN page content
page-vault.html  — VAULT page content
page-radio.html  — RADIO page content
page-tasks.html  — TASKS page content
page-calc.html   — CALC page content
page-map.html    — MAP page content
brief-vN.md      — latest project brief
```

---

## Landscape Lock

- `manifest.json`: `"orientation": "landscape"` — locks when installed as PWA
- CSS `@media (orientation: portrait)`: shows "ROTATE DEVICE" overlay, hides app
- CSS `@media (orientation: landscape)`: hides overlay, shows app

---

## PWA / Full Screen

- **To install on iPhone:** Safari → Share → Add to Home Screen
- Launches fullscreen landscape, no browser UI

---

## Pages

| Tab | Description |
|-----|-------------|
| HOME | grid fills full screen |
| STAT | live clock, battery, vitals |
| SCAN | full-screen H+V beam sweep |
| VAULT | classified records |
| RADIO | two-column layout |
| TASKS | scrollable task list |
| CALC | terminal calculator |
| MAP | two-column: compass + radar |

---

## Current Step

v6 built — flat file structure, landscape lock, rotate message. Awaiting review.

---

## Next Steps

- [x] v1–v5 — iterations (single file → PWA → separate files)
- [x] v6 — flat root structure, landscape lock + rotate message
- [ ] User reviews v6
- [ ] Final polish

---

## Decisions Log

| Date | Decision |
|------|----------|
| 2026-03-15 | Project started — Pip-Boy dashboard |
| 2026-03-15 | Black & white, 8 tabs, 3 files |
| 2026-03-15 | PWA + Add to Home Screen |
| 2026-03-15 | Separate page files for easy editing |
| 2026-03-15 | Flat root structure (no subfolders) for easy upload |
| 2026-03-15 | Landscape lock via manifest + CSS rotate overlay |
