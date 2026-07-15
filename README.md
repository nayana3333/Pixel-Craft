# VertechX // NEXT

An independent student-built concept for the VertechX technical fest at MVJ College of Engineering. This is a portfolio project, not an official MVJCE registration portal.

## What the product demonstrates

- Responsive, accessible event-discovery experience
- Search, category filters and a saved-event shortlist
- Data-driven event cards, details and two-day schedule
- Multi-step registration with validation and local persistence
- Clearly labeled payment sandbox demonstrating the intended checkout journey
- Dark/light themes, keyboard support and reduced-motion support
- Firebase Hosting configuration and production architecture notes

## Run locally

Serve the `pixelcraft` directory with any static server, then open `index.html`. For example:

```powershell
python -m http.server 8000 --directory pixelcraft
```

## Deploy on Google Firebase Hosting

1. Create a Firebase project at https://console.firebase.google.com/.
2. Install the Firebase CLI: `npm install -g firebase-tools`.
3. Sign in: `firebase login`.
4. From this repository, connect the project: `firebase use --add`.
5. Deploy: `firebase deploy --only hosting`.
6. Add the deployed URL to Google Search Console and submit the sitemap when the content and official ownership are ready.

Google Search and Google Hosting are different things. Firebase publishes the website; Search Console helps Google discover and index it.

## Real payment architecture

The current checkout is intentionally a no-charge sandbox simulation. A real Razorpay integration must use this flow:

1. The browser sends selected event IDs to a trusted server.
2. The server recalculates the amount and creates a Razorpay order using the secret key.
3. The browser opens Razorpay Checkout with the returned order ID.
4. The server verifies the Razorpay signature after payment.
5. A webhook confirms the final payment state before issuing a registration ID or ticket.

Never place a Razorpay secret, webhook secret or service-account key in browser JavaScript.

Recommended production stack: Firebase Hosting, Firebase Authentication, Firestore, Cloud Functions, Razorpay Checkout, App Check, Analytics and Error Reporting.

## How to present this on a resume

Use honest, measurable bullets after deploying and testing. Example:

> Built a responsive event-platform concept for MVJCE VertechX with data-driven discovery, saved events, schedule planning and a validated three-step registration journey; designed a secure Razorpay/Firebase payment architecture and deployed the frontend on Firebase Hosting.

Do not claim real users, real payments, official ownership or performance numbers until you can prove them. Add Lighthouse scores, test coverage, analytics and usage numbers only after measuring them.

## Next engineering milestones

- Move event data to Firestore and build an organizer dashboard
- Add Firebase Authentication and role-based access
- Implement Cloud Functions for Razorpay orders, verification and webhooks
- Generate QR tickets and email confirmations
- Add inventory limits, waitlists and team invitations
- Add automated tests, Lighthouse CI and GitHub Actions deployment
- Add privacy policy, refund terms and official organizer content before accepting payments

## Visual asset

The cinematic hero image and social sharing card were generated specifically for this project using OpenAI's built-in image generation workflow.

- Hero prompt: a cinematic futuristic technology-festival arena with holographic circuitry, robotics silhouettes, dark negative space for copy, cyan/violet/amber lighting, and no text, logos or watermarks.
- Social-card prompt: a 1200×630 dark technology-festival card with the exact title “VERTECHX // NEXT”, the line “BUILD BEYOND THE OBVIOUS.” and the label “INDEPENDENT STUDENT CONCEPT · MVJCE”.
