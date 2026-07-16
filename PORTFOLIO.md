# VertechX NEXT — Frontend Case Study

## Project summary

VertechX NEXT is an independent frontend redesign concept for the MVJ College of Engineering technical fest. The project turns a static festival brochure into an interactive event-discovery and planning experience.

## Problem

Festival participants need to compare events, understand rules, avoid schedule conflicts and keep registration information together across mobile and desktop screens.

## Frontend solution

- Image-led responsive landing experience
- Data-driven event discovery with search and filters
- Saved events and a persistent personal festival planner
- Automatic schedule-conflict detection
- Shareable event-detail URLs
- Downloadable calendar itinerary
- Multi-step registration preview with validation
- QR-coded downloadable preview pass
- Installable PWA with cached event imagery and offline fallback
- Dark/light themes, keyboard shortcuts and reduced-motion support

## Performance work

- Converted the 2.1 MB hero PNG used at runtime to a 217 KB optimized JPEG, reducing its transfer size by about 90%.
- Uses WebP for all eight event photographs.
- Lazy-loads below-the-fold imagery.
- Preloads only the first-view hero asset.
- Applies long-lived caching to versioned static assets and network-first navigation handling.

## Accessibility work

- Semantic landmarks, headings and descriptive image alternatives
- Keyboard-accessible controls and visible focus behavior
- Escape-key modal dismissal
- Active navigation state with `aria-current`
- Reduced-motion support
- Live regions for filters, confirmations and feedback

## Resume bullet

> Designed and developed an installable technical-fest PWA with data-driven event discovery, saved planning, conflict detection, shareable event pages, calendar export and QR pass generation; reduced the hero transfer size by approximately 90% and implemented responsive, keyboard-accessible interactions.

## Interview walkthrough

1. Explain the event-data model and reusable card rendering.
2. Demonstrate filtering, saving and conflict detection.
3. Open a shareable event page and add it to the plan.
4. Export the `.ics` calendar.
5. Complete the registration preview and download the QR pass.
6. Show installation and offline fallback behavior.

## Honest scope

This is a frontend portfolio concept. It does not accept official registrations or real payments. Timetable dates and event content must be verified before any public or official use.
