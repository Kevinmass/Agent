---
name: design-boost
description: >
  A reference library of 124 modern React design patterns for UI inspiration.
  Load this skill when the user's task involves designing or improving any
  frontend interface — hero sections, text animations, cards, galleries,
  navigation, cursors, backgrounds, effects, or micro-interactions.
  This is NOT a callable component library. It is an inspiration catalog:
  study the patterns, adapt the techniques, write your own code.
version: 1.0.0
---

# Design Boost — AI Agent Instructions

This project is a **design inspiration catalog**, not a package. Do not import,
require, or reference these components as dependencies. Instead, use them as a
teacher: read the source, understand the technique, then write original code
in the target project.

---

## How to Use

### 1. Find the right pattern

Open `showcase/AGENT_INDEX.md` for a keyword-driven lookup table:

> "text that types itself" → **TextType**
> "3D card that follows the cursor" → **TiltedCard**
> "liquid blob cursor" → **BlobCursor**
> "glassmorphism card" → **ProfileCard**

Or browse `WebDesignPatterns/INDEX.md` for the full 124-component index
organised by category with descriptions and tags.

### 2. Study the source

Each pattern lives in `WebDesignPatterns/<Component>/` as a single `.md` file
containing:
- **Installation** (shadcn-style — for reference only)
- **Usage** with all props documented
- **Full source code** (JSX + CSS)
- **Prop interface** and defaults

### 3. Extract and adapt

- Read the animation technique (GSAP timeline, spring physics, canvas loop, etc.)
- Understand the interaction model (cursor tracking, scroll triggers, gestures)
- Adapt the visual style to match the target project's design system
- Rewrite in the target project's framework if needed (it's all React, but the
  patterns translate to any component model)

### 4. Never import

These files are not published, not versioned as a package, and not importable.
The code is here to be read and rewritten — not consumed.

---

## Quick Reference

### When the user asks for...

| Request | Look in |
|---------|---------|
| "make this text look cool" | Text Animations (23 patterns) |
| "design a card" | Cards & Galleries (20 patterns) |
| "custom cursor effect" | Interactive & Cursor (15 patterns) |
| "beautiful navigation" | Nav & Menus (8 patterns) |
| "animated background" | Backgrounds & Effects (49 patterns) |
| "page entrance animation" | Animations + Miscellaneous (12 patterns) |

### Common techniques this library demonstrates

- **GSAP ScrollTrigger** — scroll-driven reveals, parallax, sequenced animations
- **Spring physics** — natural-feeling motion with `motion` (Framer Motion)
- **Canvas/WebGL** — real-time shaders, particle systems, 3D rendering
- **CSS-only** — gradient text, shine effects, glassmorphism, noise overlays
- **Pointer tracking** — cursor-reactive UI, magnetic elements, tilt effects
- **3D transforms** — perspective cards, cube grids, orbit galleries
- **SVG filters** — gooey morphing, dithering, glitch distortions

---

## Directory Layout

```
.
├── WebDesignPatterns/          # 97 pattern folders (source + guide per component)
│   ├── INDEX.md                # Master index
│   ├── AnimatedContent/
│   ├── Aurora/
│   └── ...
├── showcase/                   # Live demo app
│   ├── AGENT_INDEX.md          # Agent keyword lookup
│   └── src/components/         # 129 component implementations
├── ExampleLogos/               # Brand logos for mockups
├── ExamplePhotos/              # Photos for mockups
├── DESIGN_BOOST_SKILL.md       # This file (also at root for easy access)
└── README.md                   # Human-readable project overview
```

---

## Important Notes

- **Do not call or import** any file from `WebDesignPatterns/` or `showcase/src/components/`. These are not entry points.
- **Do use** the patterns as design reference. The value is in *how* the effect is achieved (the technique, the math, the easing curve), not in the component itself.
- **Every component** has sensible defaults and works standalone — this makes them easy to study in isolation.
- **Example assets** in `ExampleLogos/` and `ExamplePhotos/` can be used for realistic mockups.
- **The showcase app** (`showcase/`) runs on port 5173 and lets you see every component live.
