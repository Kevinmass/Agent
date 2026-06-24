# Design Boost

**A curated arsenal of 124 modern, breathtaking React design patterns — built to inspire AI agents, not to be called by them.**

This project is a design reference library. Its sole purpose is to live alongside other projects and serve as a source of visual inspiration, animation techniques, and interaction paradigms. AI agents (including this one) should read, study, and adapt from these components — never import or invoke them directly.

---

## Philosophy

Most UI component libraries are meant to be installed and consumed as dependencies. **Design Boost is the opposite.** It exists to be *explored*, *studied*, and *extracted from* — pixel by pixel, pattern by pattern.

Every component here is:
- **Self-contained** — one JSX file, one CSS file, zero hidden dependencies
- **Copy-paste ready** — grab the code, drop it in your project, customise freely
- **Fully documented** — every pattern includes prop tables, integration guides, and visual examples
- **Production-grade** — polished animations, accessible markup, responsive layouts

When an AI agent needs to design something beautiful — a hero section that hums, a card that breathes, a cursor that dances — it should look here first.

---

## What's Inside

- **97 design patterns** across 7 categories, each with full source code + integration guide in `WebDesignPatterns/<Component>/`
- **129 live component demos** in a Vite + React showcase app at `showcase/`
- **124 unique React components** spanning text animations, cards, galleries, cursors, navigation, backgrounds, and effects
- **Example assets** — logos (`ExampleLogos/`) and photos (`ExamplePhotos/`) for realistic mockups

### Component Categories

| Category | Count | What You'll Find |
|----------|-------|-----------------|
| Text Animations | 23 | Typewriters, glitch effects, gradient text, scroll reveals, shuffle, decrypted text, rotating words, blur reveals, ASCII art |
| Cards & Galleries | 20 | 3D tilt cards, reflective glass cards, bento grids, masonry, image trails, carousels, circular/dome galleries, profile cards |
| Interactive & Cursor | 15 | Blob cursors, splash cursors, magnetic buttons, pixel trails, target cursors, ghost cursors, click sparks, docks |
| Nav & Menus | 8 | Gooey navs, bubble menus, pill navs, flowing menus, staggered menus, star borders, infinite 3D menus |
| Backgrounds & Effects | 49 | Aurora, beams, plasma, waves, silk, noise, lightning, particles, cubes, ferrofluid, galaxy, iridescence, threads, radar, light rays, 3D shaders |
| Animations | 2 | MetaBalls (blob physics), Ribbons (physics trails) |
| Miscellaneous | 10 | Fade/slide wrappers, animated lists, bento grids, logo marquees, glass surfaces, steppers, sticker peels, folders |

---

## Quick Start (Showcase App)

```bash
cd showcase
npm install
npm run dev
```

Opens at `http://localhost:5173` — landing page with live demos, then a full browsable catalog.

```bash
npm run build   # production build → dist/
npm run preview # preview production build
```

---

## How AI Agents Should Use This

1. **Browse the index.** Open `showcase/AGENT_INDEX.md` or `WebDesignPatterns/INDEX.md` to find a component by keyword, use-case, or category.
2. **Study the source.** Each component in `WebDesignPatterns/<Component>/` has a `.md` file with the full JSX + CSS + integration guide.
3. **Extract inspiration.** Adapt the animation technique, layout approach, or interaction pattern into the target project. Rename, restyle, remix.
4. **Do NOT import.** These components are not published to npm. They are not meant to be dependencies. They are teachers, not tools.

---

## Tech Stack (Showcase)

- **React 19 + Vite 8** — modern, fast, no-config
- **Three.js / R3F** — WebGL backgrounds, 3D scenes, shaders
- **GSAP** — scroll-triggered timelines, complex sequencing
- **Motion (Framer Motion)** — spring animations, layout transitions
- **Matter.js** — 2D physics for organic interactions
- **Lenis** — smooth scrolling
- **@use-gesture** — pointer, drag, pinch gestures
- **Chakra UI** — component primitives (showcase UI only)

---

## Project Structure

```
.
├── WebDesignPatterns/        # 97 pattern folders — the heart of the project
│   ├── INDEX.md              # Master index of all components
│   ├── AnimatedContent/      # Each folder = one pattern
│   ├── Aurora/               #   └── <Name>.md (full source + guide)
│   └── ...
├── showcase/                 # Live demo app (Vite + React)
│   ├── AGENT_INDEX.md        # AI agent lookup table (keywords → components)
│   ├── src/
│   │   ├── components/       # 129 component implementations
│   │   ├── pages/            # Landing page
│   │   ├── App.jsx           # App shell
│   │   ├── Showcase.jsx      # Component browser
│   │   └── Sidebar.jsx       # Category navigation
│   └── package.json
├── ExampleLogos/             # Brand logos for mockups
├── ExamplePhotos/            # Stock photos for demos
├── .agents/                  # OpenCode skill definitions
└── DESIGN_BOOST_SKILL.md     # AI agent skill — load this for instructions
```

---

## Credits

All component source code by [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits). The showcase app wraps each component with interactive previews, prop controls, and a browsable catalog.

---

## License

This project is a showcase and reference library. Individual components retain their original licensing from react-bits.
