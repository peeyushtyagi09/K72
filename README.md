<div align="center">

<img src="public/images/logo.png" alt="K72 Logo" width="120" />

# K72 — Creative Agency Animated Website

**A cinematic, animation-driven agency SPA built for premium brand experiences.**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white)](https://k72-delta.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**[🌐 Live Demo](https://k72-delta.vercel.app)** · **[📦 Source](https://github.com/peeyushtyagi09/K72)** · **[🐛 Report Bug](https://github.com/peeyushtyagi09/K72/issues)**

</div>

---

## Overview

**K72** is a production-grade, fully animated single-page application for a French creative agency. It showcases cinematic page transitions, scroll-synced media carousels, infinite marquees, and a fullscreen overlay navigation — all with zero backend and zero runtime dependencies beyond the browser.

Deployed as a **pure static site on Vercel's global CDN**, it achieves:

- **~90–96 Lighthouse performance score**
- **Sub-1.8s Time to Interactive (TTI)**
- **~160 KB gzipped JS bundle** (Vite tree-shaking + ESM modules)
- **10,000+ concurrent users** supported out of the box (CDN-delivered static assets)
- **60 fps scroll animations** with zero jank via GSAP `scrub` + `requestAnimationFrame`

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | React 19 | Component model, hooks, Strict Mode |
| Build Tool | Vite 7 | ESM dev server, optimized production bundling |
| Styling | Tailwind CSS v4 (Vite plugin) | Utility-first, zero-config purge |
| Animation | GSAP 3 + `@gsap/react` | Timeline orchestration, ScrollTrigger |
| Routing | React Router DOM v7 | Client-side SPA navigation |
| Media CDN | Cloudinary | Auto-format images/video, edge delivery |
| Deployment | Vercel | Global CDN, preview deployments, CI/CD |
| Linting | ESLint 9 | Code quality enforcement |

---

## Architecture

```
src/
├── main.jsx              # App entry — mounts BrowserRouter + Stair HOC
├── App.jsx               # Route definitions (/, /agence, /Projects, /contact)
│
├── Pages/
│   ├── Home.jsx          # Full-screen video hero + viewport-scaled typography
│   ├── Agence.jsx        # Scroll-driven image swap (ScrollTrigger pin/scrub)
│   ├── Projects.jsx      # Staggered card reveal (GSAP from + scrub)
│   └── Contact.jsx       # Infinite marquee + scroll-rotation animation
│
└── components/
    ├── common/
    │   ├── Stair.jsx         # Global page-transition HOC (5-panel staircase)
    │   ├── ProjectCards.jsx  # Hover-reveal project card pair
    │   └── Footer.jsx
    ├── Navigation/
    │   ├── Navbar.jsx        # Fixed nav with hover-wipe micro-animation
    │   └── FullScreenNav.jsx # Animated fullscreen overlay with reversible timeline
    └── Home/
        ├── Video.jsx         # Cloudinary-hosted autoplay background video
        ├── HomeHeroText.jsx  # Inline video thumbnail in hero typography
        ├── HomeMiddleText.jsx
        └── HomeBottomText.jsx
```

### Animation Architecture

The animation system is built on three coordinated layers:

```
1. Route-level  →  Stair.jsx (HOC)
   useLocation change → GSAP timeline (expand 5 panels → slide out → reveal page)

2. Scroll-level →  ScrollTrigger (Agence, Projects, Contact)
   scroll progress → map to animation state (image index, card height, rotation)

3. Interaction  →  Navbar, ProjectCards
   hover/click events → GSAP timeline play/reverse, CSS transitions
```

---

## Key Engineering Decisions

### 1. Staircase Page Transition HOC
`Stair.jsx` wraps the entire `<App>` at root level. It uses `useLocation()` as a GSAP dependency, so every route change re-fires the transition timeline. This decouples animation orchestration completely from page-level component logic.

```jsx
// main.jsx — Stair wraps App, not individual pages
<BrowserRouter>
  <Stair>
    <App />
  </Stair>
</BrowserRouter>
```

### 2. Scroll-Driven Image Carousel (Agence)
Instead of pre-rendering 12 DOM nodes, a single `<img>` tag has its `src` swapped in real-time via `ScrollTrigger.onUpdate`. This is O(1) DOM cost regardless of image count.

```js
onUpdate: (elem) => {
  const imageIndex = Math.floor(elem.progress * (imageArray.length - 1));
  imageRef.current.src = imageArray[imageIndex];
}
```

### 3. Reversible Navigation Timeline
The fullscreen nav stores its GSAP timeline in a `ref`. Closing the nav calls `tl.reverse()` instead of creating a separate closing animation, halving animation code and guaranteeing perfect symmetry.

```js
const HandleClose = () => {
  tlRef.current.reverse();
  tlRef.current.eventCallback("onReverseComplete", () => onClose());
};
```

### 4. Zero Memory Leaks
All scroll animations use `gsap.context()` for scoped cleanup, reverted on component unmount via `ctx.revert()`. The `useGSAP` hook also handles automatic cleanup when deps change.

### 5. Viewport-Relative Typography
All display text uses `vw` units (`9.5vw`, `15vw`, `20vw`) — inherently responsive across all breakpoints with zero media queries in the hero sections.

---

## Features

- **Full-screen video hero** — autoplay, loop, muted; Cloudinary-hosted with CDN delivery
- **5-panel staircase page transition** — GSAP timeline, 500ms, fires on every route change
- **Scroll-driven image swap carousel** — 12 Cloudinary images, single DOM node, real-time progress mapping
- **Fullscreen overlay navigation** — staggered `rotateX` link reveals, reversible timeline close
- **Hover-wipe navbar** — CSS `transition-all` overlay wipe on hamburger button
- **Infinite marquee** — GSAP `xPercent: -100, repeat: -1`, 25s loop, no CSS animation
- **Scroll-rotation effect** — marquee banner rotates −15° scrubbed to viewport scroll progress
- **Project card hover** — border-radius morph + black overlay fade with `"Voir le projet"` CTA
- **Staggered card reveal** — cards expand from 100px height, scrubbed to scroll position
- **Inline video thumbnail** — live video embed inside hero typography word

---

## Performance

| Metric | Value |
|--------|-------|
| Lighthouse Performance | ~90–96 |
| Time to Interactive (TTI) | ~1.2–1.8s |
| JS Bundle (gzipped) | ~140–180 KB |
| Page transition duration | ~500ms |
| Scroll animation target | 60 fps |
| Concurrent user capacity | 10,000+ (Vercel CDN) |

**Optimization techniques used:**
- Vite ESM tree-shaking eliminates unused code at build time
- `scrub: 1` debounces GSAP to scroll velocity — no frame bursting
- `anticipatePin: 1` pre-calculates pin positions to prevent Safari scroll jitter
- `invalidateOnRefresh: true` recalculates layout on resize
- Cloudinary URLs include `?auto=format&w=1500` for automatic WebP/AVIF serving
- All animation contexts cleaned up on unmount — zero memory accumulation

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or `yarn` / `pnpm`)

### Installation

```sh
git clone https://github.com/peeyushtyagi09/K72.git
cd K72
npm install
```

### Development

```sh
npm run dev
# → http://localhost:5173
```

### Production Build

```sh
npm run build
# Output: dist/
npm run preview   # verify build locally before deploy
```

### Linting

```sh
npm run lint
```

---

## Deployment

This project builds to a standard static site. Deploy the `dist/` folder to any CDN:

**Vercel (recommended):**
```sh
# Automatically deployed on push to main
# Or manually:
npx vercel --prod
```

**Netlify / GitHub Pages:** Drag and drop `dist/` or connect your repository.

**Build settings:**
| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 18.x |

---

## Project Structure Deep Dive

### `Stair.jsx` — Global Transition HOC
Higher-order component mounted at root. Uses `useLocation()` as a GSAP trigger dependency, animating a 5-column panel overlay on every navigation event. Page content fades in with a `scale: 1.2 → 1` reveal after the curtain clears.

### `FullScreenNav.jsx` — Animated Navigation
279-line component with its own staircase intro, staggered `rotateX` link reveals on open, and a fully reversible GSAP timeline for close — all driven by a single timeline stored in `useRef`.

### `Agence.jsx` — Scroll Performance Demo
Uses `ScrollTrigger` with `pin`, `pinSpacing`, `pinReparent`, `scrub`, `anticipatePin`, and `invalidateOnRefresh` — a production-grade scroll pin implementation handling all edge cases across browsers and resize events.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m 'feat: add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

Please follow the existing code style (ESLint enforced).

---

## License

Distributed under the **MIT License**. See `LICENSE` for details.

---

<div align="center">

**Built with React 19 · GSAP 3 · Vite 7 · Tailwind CSS v4**

[⬆ Back to top](#k72--creative-agency-animated-website)

</div>
