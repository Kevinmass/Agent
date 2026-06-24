# Design Pattern Library

A curated showcase of **124 copy-paste React components** sourced from [ReactBits](https://github.com/DavidHDev/react-bits). Every component is self-contained, fully customizable, and ready to drop into any React project.

## Quick Start

```bash
cd showcase
npm install
npm run dev
```

Opens at `http://localhost:5173`. The landing page serves as the default view; click **Browse Showcase →** to enter the full component browser.

### Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Features

- **Landing Page** — hero (Aurora + GradientText + RotatingText) with 19 live component demos including BlobCursor, SplashCursor, Particles, Ferrofluid, Galaxy, Stack, ImageTrail, FloatingLines, and more
- **Showcase Browser** — sidebar with 7 categories, lazy-loaded component previews, prev/next navigation
- **124 Components** across Text Animations (23), Cards & Galleries (20), Interactive & Cursor (15), Nav & Menus (8), Backgrounds & Effects (49), Animations (2), and Miscellaneous (10)
- **Zero Config** — each component works with sensible defaults, just import and use
- **You can also find the integration guide for each component in `../WebDesignPatterns/[Component]/`**

## Tech Stack

- [React](https://react.dev) 19 + [Vite](https://vitejs.dev)
- [Three.js](https://threejs.org) — 3D backgrounds and WebGL effects
- [GSAP](https://gsap.com) — scroll-triggered animations
- [Framer Motion](https://motion.dev) — spring-based UI animations
- [Matter.js](https://brm.io/matter-js) — physics simulations
- [Lenis](https://lenis.studiofreight.com) — smooth scrolling
- [react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) — declarative Three.js
- [@use-gesture/react](https://use-gesture.netlify.app) — gesture handling

## Project Structure

```
showcase/src/
├── App.jsx              # Root — toggles between Landing and Showcase
├── App.css              # Global styles, landing layout, glassmorphism theme
├── Showcase.jsx         # Component browser with lazy imports + demo wrappers
├── Sidebar.jsx          # Category sidebar navigation
├── pages/Landing.jsx    # Landing page with live component demos
└── components/          # 124 component folders, each with JSX + CSS
    ├── TextAnimations/
    ├── Components/
    ├── CardsGalleries/
    └── ...
```

## Credits

All component source code by [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits). This showcase wraps every component with a demo preview, a landing page, and a browsable catalog.
