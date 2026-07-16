# VertechX NEXT

<p align="center">
  <img src="./pixelcraft/images/hero-optimized.jpg" alt="VertechX NEXT festival experience" width="100%">
</p>

<p align="center">
  A polished, installable frontend concept for discovering, planning and experiencing a college technical festival.
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-0B1020?logo=html5&logoColor=E34F26">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-0B1020?logo=css3&logoColor=1572B6">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-0B1020?logo=javascript&logoColor=F7DF1E">
  <img alt="Progressive Web App" src="https://img.shields.io/badge/PWA-installable-0B1020?logo=pwa&logoColor=5A0FC8">
  <img alt="Firebase ready" src="https://img.shields.io/badge/Firebase-ready-0B1020?logo=firebase&logoColor=FFCA28">
</p>

## The story behind it

This project began with Pixel Craft, a web design event I participated in during VertechX at MVJ College of Engineering. My first submission was simple. I later returned to it with a clearer goal: build the festival website I would have wanted to use as a participant—and the kind of frontend work I would be confident discussing in an interview.

The result is VertechX NEXT: an independent product-design and frontend engineering exercise that takes the experience beyond a static event brochure. Visitors can discover events, build a personal plan, detect timetable conflicts, export a calendar, preview registration and download a QR pass. The entire experience is responsive, keyboard-friendly and installable.

> **Project status:** Portfolio concept. This is not an official MVJCE or VertechX registration website and does not collect real registrations or payments.

## Product experience

| Area | What is implemented |
| --- | --- |
| Event discovery | Eight data-driven events, instant search, category filters and saved events |
| Personal planning | Persistent shortlist, schedule-conflict detection and downloadable `.ics` itinerary |
| Event details | Shareable detail URLs with format, mission, rules, venue and pricing information |
| Registration preview | Validated three-step flow with a locally generated QR pass and PNG download |
| Festival schedule | Accessible two-day timeline with active tab states |
| App experience | Installable PWA, cached event artwork and a dedicated offline fallback |
| Preferences | Remembered dark/light theme, keyboard shortcuts and reduced-motion support |
| Responsive UI | Purpose-built layouts for phones, tablets, laptops and wide displays |

## Engineering highlights

- Built with semantic HTML, modern CSS and vanilla JavaScript—no UI framework or runtime package dependency.
- Uses one structured event model to render cards, filters, modals, planner entries and dedicated event pages consistently.
- Stores non-sensitive preferences and the personal event plan locally, keeping the frontend preview fast and self-contained.
- Generates calendar files and QR passes entirely in the browser.
- Implements a service worker with application-shell caching, image caching and network-first page navigation.
- Includes Open Graph and X metadata for clean link previews.
- Keeps third-party code isolated under `pixelcraft/vendor/` with its original license.

## Performance and accessibility

Performance work focused on the assets and interactions users encounter first:

- Reduced the runtime hero asset from roughly **2.1 MB to 217 KB**—about a **90% reduction**.
- Converted all eight event visuals to WebP and lazy-loads below-the-fold media.
- Preloads only the hero artwork required for the first viewport.
- Uses semantic landmarks, descriptive alternative text and visible focus states.
- Supports keyboard navigation, Escape-key modal dismissal and live status announcements.
- Respects `prefers-reduced-motion` instead of forcing animation.

No Lighthouse score is claimed here; performance numbers above are based on the actual source asset sizes in this repository.

## Architecture

```text
Pixel-Craft/
├── pixelcraft/
│   ├── index.html              # Main festival experience
│   ├── event.html              # Shareable event-detail shell
│   ├── script.js               # Discovery, planner and registration logic
│   ├── event-page.js           # Event-detail rendering
│   ├── style.css               # Responsive visual system
│   ├── manifest.webmanifest    # Installable app metadata
│   ├── sw.js                   # Offline and caching strategy
│   ├── offline.html            # Network fallback
│   ├── images/                 # Optimized interface artwork
│   ├── icons/                  # PWA icons
│   └── vendor/                 # QRCode.js and license
├── firebase.json               # Static hosting configuration
└── PORTFOLIO.md                # Interview-oriented case study
```

The project deliberately stays framework-free. For this scope, that keeps delivery small and makes the event model, state handling, accessibility decisions and browser APIs easy to inspect directly.

## Run locally

Clone the repository and serve the `pixelcraft` directory over HTTP:

```bash
git clone https://github.com/nayana3333/Pixel-Craft.git
cd Pixel-Craft
python -m http.server 8000 --directory pixelcraft
```

Open `http://localhost:8000`. A local server is required for service-worker and offline behavior; opening `index.html` directly is not equivalent.

## Deployment

The repository is configured for Firebase Hosting with `pixelcraft` as the public directory.

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

Before using the project for a real festival, replace the concept content with verified event information and connect registration to an authenticated backend. Payment verification must always happen on a trusted server, never only in browser code.

## Scope and trade-offs

This repository demonstrates a production-minded frontend, not a production registration system. Registration confirmations currently stay on the visitor's device. There is no database, authentication, organizer dashboard or payment gateway. That boundary is intentional: the interface can be explored safely without pretending that browser-only code is sufficient for sensitive transactions.



