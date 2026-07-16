# VertechX // NEXT

An independent, frontend-focused redesign concept for the VertechX technical fest at MVJ College of Engineering. It is a portfolio project, not an official MVJCE registration portal.

## Frontend highlights

- Cinematic fixed-background hero and image-led festival storytelling
- Responsive layouts from mobile screens to wide desktop displays
- Eight event cards generated from structured JavaScript data
- Instant search, category filters and a locally saved shortlist
- Detailed event modals with missions, pricing, formats and venues
- Two-day interactive schedule with accessible tab states
- Three-step registration preview with inline form validation
- Dark and light themes stored on the visitor's device
- Keyboard shortcuts, reduced-motion support and semantic landmarks
- Scroll progress, active navigation states and reveal animations
- Shareable event-detail pages with full mission rules and venue information
- Device-local festival planner with automatic schedule-conflict warnings
- Downloadable `.ics` calendar itinerary for selected events
- QR-coded registration preview pass with downloadable PNG output
- Installable PWA with offline fallback and cached event imagery
- Runtime hero asset reduced from 2.1 MB to approximately 217 KB
- Optimized WebP event artwork with descriptive alternative text
- Open Graph and X sharing metadata

## Run locally

Serve the `pixelcraft` directory with a static server, then open `index.html`.

```powershell
python -m http.server 8000 --directory pixelcraft
```

## Deploy on Firebase Hosting

The repository includes `firebase.json` for static hosting. Connect it to a Firebase project and deploy the `pixelcraft` directory after confirming the final festival content and ownership.

## Important project note

The checkout is a no-payment frontend preview. It saves a confirmation only on the current device and does not accept real registrations or payments. Official dates, prices, rules and branding should be verified before public release.

See `PORTFOLIO.md` for the complete case-study narrative, interview walkthrough and resume bullet.

## Resume summary

> Designed and developed a responsive technical-fest frontend featuring data-driven event discovery, category filtering, saved events, schedule planning, event-detail modals and a validated multi-step registration experience; optimized original artwork for web delivery and implemented accessible keyboard, theme and motion preferences.

## Visual assets

The cinematic hero and eight event-specific images were created for this project with OpenAI's built-in image generation workflow, then exported to optimized WebP for the live interface.
