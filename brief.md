# Project Brief

**Project Name:** PIP-DASH  
**Status:** In Progress  
**Last Updated:** 2026-03-15  

---

## Goal
Build a Pip-Boy inspired retro terminal dashboard as a single HTML file.
Responsive, mobile-first. Black & white color scheme. CRT/terminal aesthetic.
Focus is on look, feel and interaction — not real functionality. Data can be fake/hardcoded.

## Scope

**Included:**
- 8 pages/tabs with smooth navigation
- Retro terminal font, CRT scanline effect
- Satisfying click interactions and animations
- Fake/hardcoded data throughout
- Fully responsive (mobile first)

**Not included:**
- Real APIs or live data
- Backend or server
- User accounts or persistence

## Pages

| Tab | Name | Description |
|-----|------|-------------|
| HOME | Dashboard | Minimal overview — quick glance at all sections |
| STAT | Status | Fake vitals — battery, signal, temperature, time, date |
| SCAN | Scanner | Point and scan — fake readout with loading animation |
| VAULT | Vault | Retrieve random "classified" facts with animation |
| RADIO | Radio | Fake stations, waveform animation, tuning effect |
| TASKS | Tasks | Simple interactive checklist |
| CALC | Calc | Terminal-style calculator |
| MAP | Map | Fake location and compass |

## Design

- Color: Black & white only
- Font: Monospace / retro terminal style
- Effects: CRT scanlines, flicker, glitch animations
- Interactions: Button clicks feel tactile, screens animate on load
- Sound: Optional subtle click sounds on interaction

## Current Step
Build the first version of the HTML file.

## Next Steps
- [ ] Build full HTML/CSS/JS one-pager with all 8 tabs
- [ ] Review and iterate based on feedback
- [ ] Final polish

## Notes & Decisions
- Single HTML file — no dependencies, no build step
- All data is fake/hardcoded for visual effect
- Workflow: brief lives at https://rancmd.github.io/test/brief.md
