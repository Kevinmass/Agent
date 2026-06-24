import { useState, useMemo } from 'react';
import Sidebar from './Sidebar';
import Showcase from './Showcase';
import Landing from './pages/Landing';
import './App.css';

const CATEGORIES = {
  'Text Animations': ['BlurText', 'FallingText', 'FuzzyText', 'GlitchText', 'GradientText', 'GradualBlur', 'RotatingText', 'ScrambledText', 'ScrollFloat', 'ScrollReveal', 'ShinyText', 'SplitText', 'TextCursor', 'TextPressure', 'TextType', 'TrueFocus', 'VariableProximity', 'AsciiText', 'Decrypted', 'LetterGlitch', 'CircularText', 'CountUp'],
  'Cards & Galleries': ['BounceCards', 'CardSwap', 'Carousel', 'CircularGallery', 'DomeGallery', 'FlyingPosters', 'GlassIcons', 'GridMotion', 'ImageTrail', 'Masonry', 'PixelCard', 'ProfileCard', 'ReflectiveCard', 'ScrollStack', 'SpotlightCard', 'TiltedCard', 'Stack', 'MagicBento', 'GlareHover', 'CardNav'],
  'Interactive & Cursor': ['BlobCursor', 'ClickSpark', 'Crosshair', 'Magnet', 'MagnetLines', 'PixelTrail', 'Stepper', 'StickerPeel', 'TargetCursor', 'TextCursor', 'Dock', 'Strands', 'VariableProximity', 'GhostCursor', 'SplashCursor'],
  'Nav & Menus': ['BubbleMenu', 'GooeyNav', 'PillNav', 'FlowingMenu', 'StarBorder', 'BorderGlow', 'StaggeredMenu', 'InfiniteMenu'],
  'Backgrounds & Effects': ['Antigravity', 'Aurora', 'Balatro', 'Beams', 'ChromaGrid', 'ColorBends', 'Cubes', 'DarkVeil', 'Decay', 'Dither', 'DotField', 'DotGrid', 'ElectricBorder', 'EvilEye', 'FaultyTerminal', 'Ferrofluid', 'FloatingLines', 'Galaxy', 'GradientBlinds', 'Grainient', 'Hyperspeed', 'Iridescence', 'LaserFlow', 'LightPillar', 'LightRays', 'Lightfall', 'Lightning', 'LineWaves', 'LiquidChrome', 'LiquidEther', 'MetallicPaint', 'Noise', 'Orb', 'Particles', 'Plasma', 'PlasmaWave', 'PixelBlast', 'PixelSnow', 'Prism', 'PrismaticBurst', 'Radar', 'RippleGrid', 'ShapeBlur', 'ShapeGrid', 'SideRays', 'Silk', 'SoftAurora', 'Threads', 'Waves'],
  'Animations': ['Ribbons', 'MetaBalls'],
  'Miscellaneous': ['AnimatedContent', 'AnimatedList', 'FadeContent', 'Folder', 'GlassSurface', 'LogoLoop', 'MagicRings', 'ScrollVelocity', 'Shuffle', 'CurvedLoop']
};

function App() {
  const [page, setPage] = useState('landing');
  const [activeComponent, setActiveComponent] = useState(null);

  const allComponents = useMemo(() => {
    const list = [];
    for (const [cat, comps] of Object.entries(CATEGORIES)) {
      comps.forEach(name => list.push({ name, category: cat }));
    }
    return list;
  }, []);

  if (page === 'landing') {
    return (
      <div className="app">
        <Landing onEnterShowcase={() => setPage('showcase')} />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <h1>Design Pattern Showcase</h1>
          <p className="app-subtitle">{allComponents.length} components</p>
        </div>
        <div className="header-actions">
          <button className="toggle-btn" onClick={() => setPage('landing')}>
            ← Back to Home
          </button>
        </div>
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
