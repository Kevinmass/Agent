## Integrate the <LiquidLogo /> component from React Bits

You are helping integrate an open-source React component into an existing application.

### Component: LiquidLogo
### Variant: JavaScript + CSS

### Dependencies
None (uses native WebGL2 — no external libraries required).

### Usage Example
```jsx
import LiquidLogo from './LiquidLogo';

function App() {
  return (
    <div style={{ width: 500, height: 500 }}>
      <LiquidLogo
        imageSrc="/path/to/logo.svg"
        patternScale={2}
        refraction={0.015}
        edge={0.4}
        patternBlur={0.005}
        liquid={0.07}
        speed={0.3}
      />
    </div>
  );
}
```

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| imageSrc | string | '/deepseek.svg' | URL or path to the logo image (SVG or PNG with transparent/white background). |
| patternScale | number | 2 | Scale of the liquid metal stripe pattern (1–10). |
| refraction | number | 0.015 | Chromatic dispersion/refraction strength (0–0.06). |
| edge | number | 0.4 | Edge hardness of the liquid effect (0–1). |
| patternBlur | number | 0.005 | Blur on the stripe pattern edges (0–0.05). |
| liquid | number | 0.07 | Liquify amount — how much the logo deforms (0–1). |
| speed | number | 0.3 | Animation speed of the liquid flow (0–1). |

### How It Works

LiquidLogo uses **WebGL2** to render a real-time liquid metal shader effect over a logo image:

1. **Image Parsing** — The logo is converted into a black-and-white mask with a beveled edge using a Poisson-diffusion algorithm. This creates a smooth distance field used by the shader.
2. **WebGL2 Canvas** — A full-screen quad renders the liquid metal effect using a custom GLSL fragment shader.
3. **Shader Parameters** — The shader takes 6 uniform parameters controlling the visual output: pattern scale, refraction (chromatic aberration), edge hardness, pattern blur, liquify deformation, and animation speed.
4. **Animation Loop** — `requestAnimationFrame` drives the time uniform for continuous liquid flow.

### Integration Instructions

1. **Copy the component source** from `showcase/src/components/LiquidLogo/LiquidLogo.jsx` into your project.

2. **Prepare a logo image** — For best results, use an SVG or high-resolution PNG with a transparent or white background. Shapes work better than text.

3. **Import and render:**
   ```jsx
   import LiquidLogo from './LiquidLogo';
   
   function MyComponent() {
     return (
       <div style={{ width: 400, height: 400 }}>
         <LiquidLogo imageSrc="/my-logo.svg" />
       </div>
     );
   }
   ```

4. **Customize the effect** by adjusting `patternScale`, `refraction`, `edge`, `patternBlur`, `liquid`, and `speed` props.

### Notes
- Requires a browser that supports **WebGL2** (all modern browsers).
- The image preprocessor converts logos to black-and-white masks. Transparent or white backgrounds work best.
- For optimal performance, use images under 1000px on the longest side.
