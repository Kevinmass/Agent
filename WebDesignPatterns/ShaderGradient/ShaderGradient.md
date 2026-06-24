## Integrate the <ShaderGradient /> component from React Bits

You are helping integrate an open-source React component into an existing application.

### Component: ShaderGradient
### Variant: JavaScript + CSS

### Dependencies
```
npm install @shadergradient/react @react-three/fiber three three-stdlib camera-controls
```

### Usage Example
```jsx
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

function App() {
  return (
    <ShaderGradientCanvas
      style={{ position: 'absolute', inset: 0 }}
      pixelDensity={1.5}
      fov={45}
    >
      <ShaderGradient
        type="plane"
        animate="on"
        uSpeed={0.4}
        uStrength={0.2}
        uFrequency={1.5}
        color1="#ff6b6b"
        color2="#4ecdc4"
        color3="#45b7d1"
        cDistance={3.6}
        cPolarAngle={90}
        lightType="3d"
      />
    </ShaderGradientCanvas>
  );
}
```

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | 'plane' \| 'sphere' \| 'waterPlane' | 'plane' | Mesh geometry type for the gradient surface. |
| animate | 'on' \| 'off' | 'on' | Enables or disables the animation loop. |
| uSpeed | number | 0.4 | Animation speed factor. |
| uStrength | number | 0.2 | Distortion strength of the gradient waves. |
| uFrequency | number | 1.5 | Wave frequency of the gradient pattern. |
| uDensity | number | 1.5 | Density of the gradient mesh. |
| uAmplitude | number | 0 | Amplitude of the wave distortion. |
| color1 | string | '#ff6b6b' | First gradient color (hex). |
| color2 | string | '#4ecdc4' | Second gradient color (hex). |
| color3 | string | '#45b7d1' | Third gradient color (hex). |
| cDistance | number | 3.6 | Camera distance from the mesh. |
| cPolarAngle | number | 90 | Camera polar angle in degrees. |
| cAzimuthAngle | number | 0 | Camera azimuth angle in degrees. |
| brightness | number | 1 | Overall brightness of the scene. |
| lightType | '3d' \| 'env' | '3d' | Lighting type: 3d lights or environment map. |
| grain | 'on' \| 'off' | 'off' | Film grain overlay. |
| reflection | number | 0 | Reflection intensity. |
| wireframe | boolean | false | Show wireframe mesh instead of solid. |

### Integration Instructions

1. **Install dependencies:**
   ```bash
   npm install @shadergradient/react @react-three/fiber three three-stdlib camera-controls
   ```

2. **Copy the component source** from `showcase/src/components/ShaderGradient/ShaderGradient.jsx` or use the `@shadergradient/react` package directly as shown in the Usage Example.

3. **Import and render:**
   ```jsx
   import ShaderGradientComponent from './path/to/ShaderGradient';
   // or import directly from the package:
   // import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
   
   function MyComponent() {
     return (
       <div style={{ width: '100%', height: 400 }}>
         <ShaderGradientComponent
           type="sphere"
           color1="#ff6b6b"
           color2="#4ecdc4"
           color3="#45b7d1"
         />
       </div>
     );
   }
   ```

4. **Customize** the gradient by adjusting props like `color1`, `color2`, `color3`, `uSpeed`, `uStrength`, and `cDistance`.

### Notes
- `ShaderGradientCanvas` is the wrapper that provides the Three.js canvas context. It must contain one or more `<ShaderGradient>` children.
- For R3F v9 + React 19 (Next.js 15 App Router), use matching versions.
- The component works with React 18 or 19.
