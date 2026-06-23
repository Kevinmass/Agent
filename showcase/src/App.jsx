import { useState, useMemo } from 'react';
import Sidebar from './Sidebar';
import Showcase from './Showcase';
import './App.css';

const CATEGORIES = {
  'Text Animations': ['BlurText', 'FallingText', 'FuzzyText', 'GlitchText', 'GradientText', 'GradualBlur', 'RotatingText', 'ScrambledText', 'ScrollFloat', 'ScrollReveal', 'ShinyText', 'SplitText', 'TextCursor', 'TextPressure', 'TextType', 'TrueFocus', 'VariableProximity', 'AsciiText', 'Decrypted', 'LetterGlitch', 'CircularText', 'CountUp'],
  'Cards & Galleries': ['BounceCards', 'CardSwap', 'Carousel', 'CircularGallery', 'GridMotion', 'ImageTrail', 'Masonry', 'OrbitImages', 'PixelCard', 'ProfileCard', 'SpotlightCard', 'TiltedCard', 'Stack', 'MagicBento', 'GlareHover', 'CardNav'],
  'Interactive & Cursor': ['BlobCursor', 'ClickSpark', 'Crosshair', 'Magnet', 'MagnetLines', 'TargetCursor', 'TextCursor', 'Dock', 'Strands', 'VariableProximity'],
  'Nav & Menus': ['BubbleMenu', 'GooeyNav', 'PillNav', 'FlowingMenu', 'StarBorder', 'BorderGlow'],
  'Backgrounds & Effects': ['Beams', 'ChromaGrid', 'Cubes', 'Decay', 'Dither', 'DotField', 'DotGrid', 'ElectricBorder', 'LightPillar', 'LightRays', 'Lightning', 'Noise', 'Plasma', 'ShapeGrid', 'SideRays', 'Silk', 'Waves', 'Antigravity'],
  'Miscellaneous': ['AnimatedContent', 'AnimatedList', 'FadeContent', 'Folder', 'GlassSurface', 'LogoLoop', 'MagicRings', 'PixelTransition', 'ScrollVelocity', 'Shuffle', 'CurvedLoop']
};

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const allComponents = useMemo(() => {
    const list = [];
    for (const [cat, comps] of Object.entries(CATEGORIES)) {
      comps.forEach(name => list.push({ name, category: cat }));
    }
    return list;
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎨 Design Pattern Showcase</h1>
        <p className="app-subtitle">React Bits Component Library — Pick a pattern to preview</p>
      </header>
      <div className="app-body">
        <Sidebar
          categories={CATEGORIES}
          activeComponent={activeComponent}
          onSelect={setActiveComponent}
        />
        <main className="main-content">
          <Showcase componentName={activeComponent} allComponents={allComponents} onSelect={setActiveComponent} />
        </main>
      </div>
    </div>
  );
}

export default App;