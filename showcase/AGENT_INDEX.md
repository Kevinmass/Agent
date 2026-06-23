# Design Pattern Showcase — Agent Reference Index

This file is a lookup table for AI agents. Each entry lists **keywords** and **use-case hints** so an agent can quickly decide which component to recommend or reuse when working on a new design.

---

## How to use this index

1. The user describes a desired effect (e.g. "text that types itself" or "3D card that follows the cursor").
2. Search this file for matching keywords.
3. Read the corresponding component folder (`showcase/src/components/<Name>/<Name>.jsx` + `.css`) and copy / adapt the code.

---

## Component Registry

| Name | Keywords / Triggers | Use-Case / When to Use |
|------|---------------------|------------------------|
| AnimatedContent | animate-in, fade-up, stagger, entrance, reveal children | Wrap a block of text or cards so they animate in on mount with a light stagger. |
| AnimatedList | list stagger, stagger children, animate list items | Animate a list of items where each child fades / slides in sequentially. |
| Antigravity | antigravity, floating objects, physics hover, playful hover | Cards or icons that float up and nudge away from the cursor like they are defying gravity. |
| AsciiText | ascii, terminal text, hacker text, monospace art | Display text rendered as ASCII / matrix-style characters for a cyberpunk terminal look. |
| Beams | light beams, rays, ambient glow, moving light | Soft animated light beams sweeping across a dark surface (often used as a premium background). |
| BlobCursor | blob cursor, organic cursor, morphing cursor, liquid cursor | Replace the system cursor with a large organic blob that morphs while moving. |
| BlurText | blur text, focus text, unblur, cinematic title | Headline that starts heavily blurred and gradually sharpens on scroll / interaction. |
| BorderGlow | border glow, mouse glow, reactive border, cursor border | Card whose border emits colored glow that follows the cursor proximity. |
| BounceCards | bounce cards, stack bounce, playful cards, spring cards | Small stack of cards that bounce apart when hovered, springing back on leave. |
| BubbleMenu | circular menu, bubble nav, orbiting icons, radial menu | Navigation or action menu arranged as a ring of bubbles that expand on hover. |
| CardNav | card navigation, tab cards, icon cards, horizontal nav | Horizontal navigation rendered as cards with icons that grow on hover. |
| CardSwap | card swap, swap cards, flip carousel, 3D card rotation | Carousel of cards that rotate in 3D to show the next / previous item. |
| Carousel | carousel, slider, 3D carousel, drag slider, coverflow | Draggable 3D carousel with perspective rotation and autoplay support. |
| ChromaGrid | spotlight grid, mouse spotlight, radial highlight grid | Grid of cards with a radial spotlight that follows the mouse over the grid. |
| CircularGallery | circular gallery, orbit images, 3D carousel, ring gallery | Images arranged in a ring that the user can rotate in 3D space. |
| CircularText | circular text, text on path, rotating text ring, logo ring | Text or icons placed on a circle that rotates continuously. |
| ClickSpark | click sparks, particle burst, confetti click, celebration | Emits a burst of sparks / particles from the click point. |
| CountUp | count up, number counter, animate number, rolling number | Animated counter that rolls from 0 to a target number on scroll into view. |
| Counter | counter, increment, decrement, number control | Simple +/- counter button with animated number transitions. |
| Crosshair | crosshair, custom cursor, targeting cursor, aim cursor | Custom crosshair cursor that follows the mouse with a trailing reticle. |
| Cubes | 3d cubes, rotating cubes, cube grid, floating cubes | Grid of 3D cubes that rotate and react to the mouse. |
| CurvedLoop | curved loop, image carousel, curved track, infinite scroll | Infinite image strip that follows a curved path, auto-scrolling. |
| Decay | decay, fade out, disappearing cards, shrinking cards | Cards that shrink and fade over time once they enter the viewport. |
| Decrypted | decrypted text, scramble text, hacker text, decode | Text that reveals itself by cycling through random characters before settling. |
| Dither | dither, pixel dither, halftone, retro pixel | Retro halftone / dither pattern effect over an image or background. |
| Dock | dock, mac dock, magnifying dock, osx dock | macOS-style dock where icons magnify as the cursor approaches. |
| DomeGallery | dome gallery, 3d gallery, curved images, fisheye gallery | Images displayed on a curved dome surface that rotates with the mouse. |
| DotField | dot field, dot grid, particle field, animated dots | Field of small animated dots that connect when the cursor is near. |
| DotGrid | dot grid, interactive dots, ripple grid, dot canvas | Canvas-rendered dot grid where dots ripple outward from the cursor. |
| ElasticSlider | elastic slider, spring slider, rubber slider, fun slider | Range slider with an elastic, overshooting spring animation. |
| ElectricBorder | electric border, neon border, energy border, glow border | Border that looks like cracked / flowing electric energy. |
| FadeContent | fade content, fade in, fade section, appear on scroll | Sections that fade and slide in as they enter the viewport. |
| FallingText | falling text, rain text, matrix text, cascading text | Characters / words fall like rain down the screen. |
| FlowingMenu | flowing menu, wave menu, organic menu, liquid menu | Menu items that undulate / flow like a ribbon when hovered. |
| FluidGlass | fluid glass, glassmorphism, glass card, frosted glass | Card with a frosted glass look and a fluid, shifting gradient background. |
| Folder | folder, paper folder, file folder, 3d folder | 3D folder with paper-like sheets that peek out; great for document UIs. |
| FuzzyText | fuzzy text, out of focus text, blur hover text | Text that becomes readable only when hovered, otherwise stays blurred. |
| GlareHover | glare, reflection hover, sheen hover, glossy card | Card with a moving glare / gloss sheen that follows the cursor. |
| GlassIcons | glass icons, frosted icons, icon set, gradient icons | Icon set rendered as frosted glass pills with soft gradients. |
| GlassSurface | glass surface, glass panel, frosted panel, translucent panel | Full-screen glassmorphism surface layered over a gradient / image background. |
| GlitchText | glitch text, cyberpunk text, distortion text, rgb split | Text with a CRT-style RGB split / jitter glitch animation. |
| GooeyNav | gooey nav, organic nav, blob nav, sticky nav | Nav items that merge like liquid blobs when one is active. |
| GradientText | gradient text, animated gradient text, rainbow text | Text fill animated with a moving gradient. |
| GradualBlur | gradual blur, progressive blur, scroll blur, depth blur | Background elements that blur progressively based on scroll position. |
| GridMotion | grid motion, moving grid, perspective grid, 3d grid | Infinite grid of 3D planes that move toward the viewer (often used as a hero bg). |
| ImageTrail | image trail, cursor trail, image follow cursor | A trail of images that follows the cursor with fade-out. |
| Lanyard | lanyard, 3d card, rope physics, three.js card, wallet card | A physics-driven 3D card hanging from a rope — draggable and responds to gravity. |
| LetterGlitch | letter glitch, per-letter glitch, scramble reveal | Text where each letter glitches independently before resolving. |
| LightPillar | light pillar, volumetric light, god ray, light column | Vertical beams of light that pulse or shift in a dark environment. |
| LightRays | light rays, sun rays, radiant beams, light leak | Overlapping semi-transparent light rays rotated and animated. |
| Lightning | lightning, electric arc, bolt, plasma | Simulated lightning bolt that strikes from the top of the container. |
| LogoLoop | logo loop, infinite logo scroll, marquee logos | Infinite horizontal scroll of logos / images with fade-out edges. |
| MagicBento | bento grid, glowing grid, spotlight bento, interactive cards | Bento-style grid where each card lights up on hover with a purple glow halo. |
| MagicRings | rings, orbital rings, 3d rings, spinning rings | Concentric 3D rings rotating at different speeds, commonly used as a loading or hero element. |
| Magnet | magnet, magnetic button, pull cursor, snap button | Button or element that subtly pulls toward the cursor when nearby. |
| MagnetLines | magnetic lines, grid lines, cursor grid, attract lines | Grid of lines that tilt / bend toward the cursor position. |
| Masonry | masonry, pinterest grid, waterfall layout, uneven grid | Responsive CSS masonry grid for image or card layouts. |
| MetallicPaint | metallic paint, brushed metal, shiny text, chrome text | Text or element with a metallic sheen that shifts color on hover. |
| ModelViewer | 3d model, gltf viewer, three.js model, product viewer | Loads and renders a `.glb` / `.gltf` model in a React component with orbit controls. |
| Noise | noise, grain, film grain, texture overlay | Animated noise / grain overlay for a film-like texture. |
| OrbitImages | orbit images, circular images, rotating images, 3d orbit | Images floating in 3D space that orbit a central point. |
| PillNav | pill nav, floating nav, dock nav, rounded nav | Floating pill-shaped navigation bar with smooth active-state transitions. |
| PixelCard | pixel card, retro card, pixelated card, game card | Card with a pixel-art / retro gaming aesthetic. |
| PixelTrail | pixel trail, cursor pixels, retro cursor, block cursor | Cursor leaves a trail of pixel blocks that fade out. |
| PixelTransition | pixel transition, block transition, mosaic transition | Images transition via a blocky pixel-wipe effect. |
| Plasma | plasma, lava lamp, gradient blob, colorful background | Animated colorful plasma / lava-lamp gradient background. |
| ProfileCard | profile card, user card, glass card, tilt card | Glassmorphism profile card that tilts in 3D following the cursor. |
| ReflectiveCard | reflective card, mirror card, glossy card, shiny card | Card with a reflective / metallic surface that distorts underlying content. |
| RotatingText | rotating text, spinning text, circular text, word carousel | A word or phrase that cycles through by rotating in 3D. |
| ScrambledText | scrambled text, random text, shuffle text, jitter text | Text characters scramble randomly before resolving to the final string. |
| ScrollFloat | scroll float, parallax float, floating elements, scroll parallax | Elements that float at different speeds while scrolling (parallax). |
| ScrollReveal | scroll reveal, reveal on scroll, animate on scroll | Elements animate (fade / slide) into view when they enter the viewport. |
| ScrollStack | scroll stack, stacking cards, card stack, scroll cards | Cards that stack / layer as the user scrolls down. |
| ScrollVelocity | scroll velocity, speed scroll, fast scroll effect | Animations that react to the speed of scrolling (fast = more intense). |
| ShapeGrid | shape grid, floating shapes, geometric background | Grid of floating geometric shapes used as an animated background. |
| ShinyText | shiny text, metallic text, foil text, gloss text | Text with a sweeping gloss / shine animation across the letters. |
| Shuffle | shuffle, randomize, card shuffle, grid shuffle | Grid of cards that shuffle / randomize positions on click. |
| Silk | silk, fabric, cloth simulation, wave fabric | Animated silk / fabric-like waving background. |
| SplitText | split text, per character, per letter, text animation | Text split into individual characters / words that animate independently. |
| SpotlightCard | spotlight card, mouse light, hover light, card highlight | Card with a radial spotlight that follows the mouse over the card. |
| Stack | stack, card stack, layered cards, overlapping cards | Horizontally scrolling stack of overlapping cards. |
| StaggeredMenu | staggered menu, menu reveal, animated menu, cascade menu | Menu items that cascade in with a stagger when opened. |
| StarBorder | star border, animated border, glow border, gradient border | Card with an animated star-shaped or gradient border. |
| Stepper | stepper, step indicator, progress steps, multi-step | Multi-step progress indicator with animated transitions between steps. |
| StickerPeel | sticker peel, peel sticker, lifted sticker, corner peel | Card or sticker with a peel-off corner effect on hover. |
| Strands | strands, thread, hair, flowing lines | Smooth flowing strand / hair-like curves animated in the background. |
| TargetCursor | target cursor, aim cursor, bullseye cursor, reticle | Custom cursor styled as a target / bullseye that follows the mouse. |
| TextCursor | text cursor, custom cursor, text follow cursor | Cursor replaced by a text label that follows the mouse pointer. |
| TextPressure | text pressure, pressure text, dynamic weight, variable weight | Text whose stroke weight varies based on cursor proximity. |
| TextType | text type, typing effect, typewriter, typing animation | Text that types out character by character like a typewriter. |
| TiltedCard | tilted card, 3d tilt, hover tilt, card perspective | Card that tilts in 3D proportional to cursor position over it. |
| TrueFocus | true focus, focus ring, focus glow, input focus | Input or card with a glowing focus ring on focus. |
| VariableProximity | variable proximity, proximity text, reactive text | Text letters spread or animate based on distance to the cursor. |
| Waves | waves, wave canvas, water ripple, mouse ripple | Canvas-based wave / ripple effect emanating from the cursor. |