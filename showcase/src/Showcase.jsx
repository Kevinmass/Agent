import { lazy, Suspense } from 'react';

const componentMap = {
  AnimatedContent: lazy(() => import('./components/AnimatedContent/AnimatedContent.jsx')),
  AnimatedList: lazy(() => import('./components/AnimatedList/AnimatedList.jsx')),
  Antigravity: lazy(() => import('./components/Antigravity/Antigravity.jsx')),
  Aurora: lazy(() => import('./components/Aurora/Aurora.jsx')),
  AsciiText: lazy(() => import('./components/AsciiText/AsciiText.jsx')),
  Balatro: lazy(() => import('./components/Balatro/Balatro.jsx')),
  Beams: lazy(() => import('./components/Beams/Beams.jsx')),
  BlobCursor: lazy(() => import('./components/BlobCursor/BlobCursor.jsx')),
  BlurText: lazy(() => import('./components/BlurText/BlurText.jsx')),
  BorderGlow: lazy(() => import('./components/BorderGlow/BorderGlow.jsx')),
  BounceCards: lazy(() => import('./components/BounceCards/BounceCards.jsx')),
  BubbleMenu: lazy(() => import('./components/BubbleMenu/BubbleMenu.jsx')),
  CardNav: lazy(() => import('./components/CardNav/CardNav.jsx')),
  CardSwap: lazy(() => import('./components/CardSwap/CardSwap.jsx')),
  Carousel: lazy(() => import('./components/Carousel/Carousel.jsx')),
  ChromaGrid: lazy(() => import('./components/ChromaGrid/ChromaGrid.jsx')),
  CircularGallery: lazy(() => import('./components/CircularGallery/CircularGallery.jsx')),
  CircularText: lazy(() => import('./components/CircularText/CircularText.jsx')),
  ColorBends: lazy(() => import('./components/ColorBends/ColorBends.jsx')),
  ClickSpark: lazy(() => import('./components/ClickSpark/ClickSpark.jsx')),
  CountUp: lazy(() => import('./components/CountUp/CountUp.jsx')),
  Crosshair: lazy(() => import('./components/Crosshair/Crosshair.jsx')),
  Cubes: lazy(() => import('./components/Cubes/Cubes.jsx')),
  CurvedLoop: lazy(() => import('./components/CurvedLoop/CurvedLoop.jsx')),
  DarkVeil: lazy(() => import('./components/DarkVeil/DarkVeil.jsx')),
  Decay: lazy(() => import('./components/Decay/Decay.jsx')),
  Decrypted: lazy(() => import('./components/Decrypted/Decrypted.jsx')),
  Dither: lazy(() => import('./components/Dither/Dither.jsx')),
  Dock: lazy(() => import('./components/Dock/Dock.jsx')),
  DomeGallery: lazy(() => import('./components/DomeGallery/DomeGallery.jsx')),
  DotField: lazy(() => import('./components/DotField/DotField.jsx')),
  DotGrid: lazy(() => import('./components/DotGrid/DotGrid.jsx')),
  ElectricBorder: lazy(() => import('./components/ElectricBorder/ElectricBorder.jsx')),
  EvilEye: lazy(() => import('./components/EvilEye/EvilEye.jsx')),
  FadeContent: lazy(() => import('./components/FadeContent/FadeContent.jsx')),
  FallingText: lazy(() => import('./components/FallingText/FallingText.jsx')),
  FaultyTerminal: lazy(() => import('./components/FaultyTerminal/FaultyTerminal.jsx')),
  Ferrofluid: lazy(() => import('./components/Ferrofluid/Ferrofluid.jsx')),
  FloatingLines: lazy(() => import('./components/FloatingLines/FloatingLines.jsx')),
  FlowingMenu: lazy(() => import('./components/FlowingMenu/FlowingMenu.jsx')),
  FlyingPosters: lazy(() => import('./components/FlyingPosters/FlyingPosters.jsx')),
  Folder: lazy(() => import('./components/Folder/Folder.jsx')),
  FuzzyText: lazy(() => import('./components/FuzzyText/FuzzyText.jsx')),
  Galaxy: lazy(() => import('./components/Galaxy/Galaxy.jsx')),
  GhostCursor: lazy(() => import('./components/GhostCursor/GhostCursor.jsx')),
  GlassIcons: lazy(() => import('./components/GlassIcons/GlassIcons.jsx')),
  GlareHover: lazy(() => import('./components/GlareHover/GlareHover.jsx')),
  GlassSurface: lazy(() => import('./components/GlassSurface/GlassSurface.jsx')),
  GlitchText: lazy(() => import('./components/GlitchText/GlitchText.jsx')),
  GooeyNav: lazy(() => import('./components/GooeyNav/GooeyNav.jsx')),
  GradientBlinds: lazy(() => import('./components/GradientBlinds/GradientBlinds.jsx')),
  GradientText: lazy(() => import('./components/GradientText/GradientText.jsx')),
  GradualBlur: lazy(() => import('./components/GradualBlur/GradualBlur.jsx')),
  Grainient: lazy(() => import('./components/Grainient/Grainient.jsx')),
  GridMotion: lazy(() => import('./components/GridMotion/GridMotion.jsx')),
  Hyperspeed: lazy(() => import('./components/Hyperspeed/Hyperspeed.jsx')),
  ImageTrail: lazy(() => import('./components/ImageTrail/ImageTrail.jsx')),
  InfiniteMenu: lazy(() => import('./components/InfiniteMenu/InfiniteMenu.jsx')),
  Iridescence: lazy(() => import('./components/Iridescence/Iridescence.jsx')),
  LaserFlow: lazy(() => import('./components/LaserFlow/LaserFlow.jsx')),
  LetterGlitch: lazy(() => import('./components/LetterGlitch/LetterGlitch.jsx')),
  Lightfall: lazy(() => import('./components/Lightfall/Lightfall.jsx')),
  Lightning: lazy(() => import('./components/Lightning/Lightning.jsx')),
  LightPillar: lazy(() => import('./components/LightPillar/LightPillar.jsx')),
  LightRays: lazy(() => import('./components/LightRays/LightRays.jsx')),
  LineWaves: lazy(() => import('./components/LineWaves/LineWaves.jsx')),
  LiquidChrome: lazy(() => import('./components/LiquidChrome/LiquidChrome.jsx')),
  LiquidEther: lazy(() => import('./components/LiquidEther/LiquidEther.jsx')),
  LogoLoop: lazy(() => import('./components/LogoLoop/LogoLoop.jsx')),
  MagicBento: lazy(() => import('./components/MagicBento/MagicBento.jsx')),
  MagicRings: lazy(() => import('./components/MagicRings/MagicRings.jsx')),
  Magnet: lazy(() => import('./components/Magnet/Magnet.jsx')),
  MagnetLines: lazy(() => import('./components/MagnetLines/MagnetLines.jsx')),
  Masonry: lazy(() => import('./components/Masonry/Masonry.jsx')),
  MetallicPaint: lazy(() => import('./components/MetallicPaint/MetallicPaint.jsx')),
  MetaBalls: lazy(() => import('./components/MetaBalls/MetaBalls.jsx')),
  Noise: lazy(() => import('./components/Noise/Noise.jsx')),
  Orb: lazy(() => import('./components/Orb/Orb.jsx')),
  Particles: lazy(() => import('./components/Particles/Particles.jsx')),
  PillNav: lazy(() => import('./components/PillNav/PillNav.jsx')),
  PixelBlast: lazy(() => import('./components/PixelBlast/PixelBlast.jsx')),
  PixelCard: lazy(() => import('./components/PixelCard/PixelCard.jsx')),
  PixelSnow: lazy(() => import('./components/PixelSnow/PixelSnow.jsx')),
  PixelTrail: lazy(() => import('./components/PixelTrail/PixelTrail.jsx')),
  Plasma: lazy(() => import('./components/Plasma/Plasma.jsx')),
  PlasmaWave: lazy(() => import('./components/PlasmaWave/PlasmaWave.jsx')),
  Prism: lazy(() => import('./components/Prism/Prism.jsx')),
  PrismaticBurst: lazy(() => import('./components/PrismaticBurst/PrismaticBurst.jsx')),
  ProfileCard: lazy(() => import('./components/ProfileCard/ProfileCard.jsx')),
  Radar: lazy(() => import('./components/Radar/Radar.jsx')),
  ReflectiveCard: lazy(() => import('./components/ReflectiveCard/ReflectiveCard.jsx')),
  Ribbons: lazy(() => import('./components/Ribbons/Ribbons.jsx')),
  RippleGrid: lazy(() => import('./components/RippleGrid/RippleGrid.jsx')),
  RotatingText: lazy(() => import('./components/RotatingText/RotatingText.jsx')),
  ScrambledText: lazy(() => import('./components/ScrambledText/ScrambledText.jsx')),
  ScrollFloat: lazy(() => import('./components/ScrollFloat/ScrollFloat.jsx')),
  ScrollReveal: lazy(() => import('./components/ScrollReveal/ScrollReveal.jsx')),
  ScrollStack: lazy(() => import('./components/ScrollStack/ScrollStack.jsx')),
  ScrollVelocity: lazy(() => import('./components/ScrollVelocity/ScrollVelocity.jsx')),
  ShapeBlur: lazy(() => import('./components/ShapeBlur/ShapeBlur.jsx')),
  ShapeGrid: lazy(() => import('./components/ShapeGrid/ShapeGrid.jsx')),
  ShinyText: lazy(() => import('./components/ShinyText/ShinyText.jsx')),
  Shuffle: lazy(() => import('./components/Shuffle/Shuffle.jsx')),
  SideRays: lazy(() => import('./components/SideRays/SideRays.jsx')),
  Silk: lazy(() => import('./components/Silk/Silk.jsx')),
  SoftAurora: lazy(() => import('./components/SoftAurora/SoftAurora.jsx')),
  SplashCursor: lazy(() => import('./components/SplashCursor/SplashCursor.jsx')),
  SplitText: lazy(() => import('./components/SplitText/SplitText.jsx')),
  SpotlightCard: lazy(() => import('./components/SpotlightCard/SpotlightCard.jsx')),
  Stack: lazy(() => import('./components/Stack/Stack.jsx')),
  StaggeredMenu: lazy(() => import('./components/StaggeredMenu/StaggeredMenu.jsx')),
  StarBorder: lazy(() => import('./components/StarBorder/StarBorder.jsx')),
  Stepper: lazy(() => import('./components/Stepper/Stepper.jsx')),
  StickerPeel: lazy(() => import('./components/StickerPeel/StickerPeel.jsx')),
  Strands: lazy(() => import('./components/Strands/Strands.jsx')),
  TargetCursor: lazy(() => import('./components/TargetCursor/TargetCursor.jsx')),
  TextCursor: lazy(() => import('./components/TextCursor/TextCursor.jsx')),
  TextPressure: lazy(() => import('./components/TextPressure/TextPressure.jsx')),
  TextType: lazy(() => import('./components/TextType/TextType.jsx')),
  TiltedCard: lazy(() => import('./components/TiltedCard/TiltedCard.jsx')),
  Threads: lazy(() => import('./components/Threads/Threads.jsx')),
  TrueFocus: lazy(() => import('./components/TrueFocus/TrueFocus.jsx')),
  VariableProximity: lazy(() => import('./components/VariableProximity/VariableProximity.jsx')),
  Waves: lazy(() => import('./components/Waves/Waves.jsx')),
};

const IMAGES = [
  'https://picsum.photos/id/1015/400/300',
  'https://picsum.photos/id/1016/400/300',
  'https://picsum.photos/id/1018/400/300',
  'https://picsum.photos/id/1020/400/300',
  'https://picsum.photos/id/1024/400/300',
  'https://picsum.photos/id/1025/400/300',
];

const LOGOS = [
  { src: 'https://picsum.photos/id/1/80/80', title: 'Logo 1' },
  { src: 'https://picsum.photos/id/2/80/80', title: 'Logo 2' },
  { src: 'https://picsum.photos/id/3/80/80', title: 'Logo 3' },
  { src: 'https://picsum.photos/id/4/80/80', title: 'Logo 4' },
  { src: 'https://picsum.photos/id/5/80/80', title: 'Logo 5' },
  { src: 'https://picsum.photos/id/6/80/80', title: 'Logo 6' },
  { src: 'https://picsum.photos/id/7/80/80', title: 'Logo 7' },
  { src: 'https://picsum.photos/id/8/80/80', title: 'Logo 8' },
];

const LOREM = (
  <>
    <p style={{ color: '#aaa', lineHeight: 1.7, marginBottom: '1rem' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p style={{ color: '#888', lineHeight: 1.7, marginBottom: '1rem' }}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p style={{ color: '#777', lineHeight: 1.7 }}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>
  </>
);

const cardStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 16,
  backdropFilter: 'blur(10px)',
};

const demos = {
  AnimatedContent: () => {
    const Comp = componentMap.AnimatedContent;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem' }}>
        <Comp distance={60} direction="vertical" reverse={false} duration={0.5} ease="power3.out">
          <div>
            <h3 style={{ color: '#fff', margin: '0 0 0.75rem', fontSize: '1.1rem' }}>✦ Animated Content</h3>
            {LOREM}
          </div>
        </Comp>
      </div>
    );
  },

  AnimatedList: () => {
    const Comp = componentMap.AnimatedList;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem' }}>
        <Comp items={['Design Patterns', 'React Components', 'CSS Animations', 'Modern UI', 'Interactive Effects']} />
      </div>
    );
  },

  Antigravity: () => {
    const Comp = componentMap.Antigravity;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative' }}>
        <Comp count={200} magnetRadius={6} ringRadius={7} waveSpeed={0.4} waveAmplitude={1} particleSize={1.5} color="#a78bfa" />
      </div>
    );
  },

  Aurora: () => {
    const Comp = componentMap.Aurora;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  AsciiText: () => {
    const Comp = componentMap.AsciiText;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center', minHeight: 300 }}>
        <Comp text="Hello World" ascii="░▒▓█" animationDirection="down" />
      </div>
    );
  },

  Balatro: () => {
    const Comp = componentMap.Balatro;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  Beams: () => {
    const Comp = componentMap.Beams;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative', background: '#080812' }}>
        <Comp beamWidth={3} beamHeight={30} beamNumber={15} lightColor="#ffffff" speed={1.5} noiseIntensity={1.5} scale={0.2} rotation={30} />
      </div>
    );
  },

  BlobCursor: () => {
    const Comp = componentMap.BlobCursor;
    return (
      <div style={{ ...cardStyle, height: 360, margin: '1rem', position: 'relative', overflow: 'hidden', cursor: 'none' }}>
        <Comp blobType="circle" fillColor="#8b5cf6" trailCount={3} sizes={[60, 100, 70]} innerSizes={[20, 30, 22]} />
      </div>
    );
  },

  BlurText: () => {
    const Comp = componentMap.BlurText;
    return (
      <div style={{ ...cardStyle, padding: '3rem 2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text="Blur Reveal Effect" delay={150} animateBy="words" direction="top" />
      </div>
    );
  },

  BorderGlow: () => {
    const Comp = componentMap.BorderGlow;
    return (
      <div style={{ margin: '1rem' }}>
        <Comp edgeSensitivity={30} glowColor="60 80 120" backgroundColor="#0f0f18" borderRadius={24} glowRadius={40} glowIntensity={1} coneSpread={25}>
          <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', margin: '0 0 0.5rem' }}>✦ Border Glow</h3>
            <p style={{ color: '#888', margin: 0 }}>Hover near the edges</p>
          </div>
        </Comp>
      </div>
    );
  },

  BounceCards: () => {
    const Comp = componentMap.BounceCards;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp
          images={IMAGES}
          containerWidth={520}
          containerHeight={280}
          animationDelay={0.4}
          animationStagger={0.06}
          easeType="elastic.out(1, 0.5)"
          enableHover={true}
        />
      </div>
    );
  },

  BubbleMenu: () => {
    const Comp = componentMap.BubbleMenu;
    return (
      <div style={{ ...cardStyle, padding: '4rem 3rem', margin: '1rem', display: 'flex', justifyContent: 'center', minHeight: 500, overflow: 'visible', position: 'relative' }}>
        <Comp items={[
          { label: 'home', href: '#', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
          { label: 'about', href: '#', ariaLabel: 'About', rotation: -2, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
          { label: 'projects', href: '#', ariaLabel: 'Projects', rotation: 2, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
          { label: 'contact', href: '#', ariaLabel: 'Contact', rotation: 8, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
        ]} />
      </div>
    );
  },

  CardNav: () => {
    const Comp = componentMap.CardNav;
    return (
      <div style={{ ...cardStyle, padding: '3rem 2rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp
          logo="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=100&auto=format"
          items={[
            { label: 'Design', bgColor: '#6366f1', textColor: '#fff', links: [{ label: 'UI Library', href: '#', ariaLabel: 'UI Library' }, { label: 'Components', href: '#', ariaLabel: 'Components' }] },
            { label: 'Development', bgColor: '#ec4899', textColor: '#fff', links: [{ label: 'React', href: '#', ariaLabel: 'React' }, { label: 'API', href: '#', ariaLabel: 'API' }] },
            { label: 'Resources', bgColor: '#10b981', textColor: '#fff', links: [{ label: 'Blog', href: '#', ariaLabel: 'Blog' }, { label: 'Docs', href: '#', ariaLabel: 'Docs' }] },
          ]}
        />
      </div>
    );
  },

  CardSwap: () => {
    const Comp = componentMap.CardSwap;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 480 }}>
        <Comp cardDistance={70} verticalDistance={80} delay={4000} pauseOnHover={false} skewAmount={8} width={320} height={220}>
          <div style={{ width: 320, height: 220, background: 'linear-gradient(135deg, #6366f1, #ec4899)', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', padding: '1rem' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>Card 1</h3>
            <p style={{ fontSize: '0.85rem', opacity: 0.9, margin: 0, textAlign: 'center' }}>Beautiful gradient design</p>
          </div>
          <div style={{ width: 320, height: 220, background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', padding: '1rem' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>Card 2</h3>
            <p style={{ fontSize: '0.85rem', opacity: 0.9, margin: 0, textAlign: 'center' }}>Warm sunset colors</p>
          </div>
          <div style={{ width: 320, height: 220, background: 'linear-gradient(135deg, #10b981, #3b82f6)', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', padding: '1rem' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>Card 3</h3>
            <p style={{ fontSize: '0.85rem', opacity: 0.9, margin: 0, textAlign: 'center' }}>Fresh nature tones</p>
          </div>
        </Comp>
      </div>
    );
  },

  Carousel: () => {
    const Comp = componentMap.Carousel;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp images={IMAGES} baseWidth={300} autoplay={true} autoplayDelay={3000} pauseOnHover={true} loop={true} />
      </div>
    );
  },

  ChromaGrid: () => {
    const Comp = componentMap.ChromaGrid;
    return (
      <div style={{ ...cardStyle, height: 360, margin: '1rem', overflow: 'hidden' }}>
        <Comp radius={120} />
      </div>
    );
  },

  CircularGallery: () => {
    const Comp = componentMap.CircularGallery;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.1} />
      </div>
    );
  },

  CircularText: () => {
    const Comp = componentMap.CircularText;
    return (
      <div style={{ ...cardStyle, padding: '3rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text="✦ React Bits Design Patterns ✦ " onHover="speedUp" spinDuration={8} />
      </div>
    );
  },

  ColorBends: () => {
    const Comp = componentMap.ColorBends;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  ClickSpark: () => {
    const Comp = componentMap.ClickSpark;
    return (
      <div
        style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center', cursor: 'pointer' }}
        onClick={() => {}}
      >
        <Comp sparkColor="#a78bfa" sparkSize={8} sparkRadius={25} sparkCount={6} duration={400}>
          <span style={{ fontSize: '1rem', color: '#fff', display: 'block', padding: '2rem' }}>✨ Click anywhere on this card</span>
        </Comp>
      </div>
    );
  },

  CountUp: () => {
    const Comp = componentMap.CountUp;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp from={0} to={1000000} duration={2.5} />
      </div>
    );
  },

  Crosshair: () => {
    const Comp = componentMap.Crosshair;
    const containerRef = { current: null };
    return (
      <div ref={containerRef} style={{ ...cardStyle, height: 360, margin: '1rem', position: 'relative', overflow: 'hidden' }}>
        <Comp color="white" containerRef={containerRef} />
      </div>
    );
  },

  Cubes: () => {
    const Comp = componentMap.Cubes;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative' }}>
        <Comp color="#a78bfa" />
      </div>
    );
  },

  CurvedLoop: () => {
    const Comp = componentMap.CurvedLoop;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center', minHeight: 280 }}>
        <Comp marqueeText="✦ React Bits Design Patterns ✦ " />
      </div>
    );
  },

  DarkVeil: () => {
    const Comp = componentMap.DarkVeil;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  Decay: () => {
    const Comp = componentMap.Decay;
    return (
      <div style={{ ...cardStyle, height: 400, margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Comp width={200} height={300} image="https://picsum.photos/id/1015/300/400">
          <h2 style={{ color: '#fff', margin: 0 }}>Decay<br/>Card</h2>
        </Comp>
      </div>
    );
  },

  Decrypted: () => {
    const Comp = componentMap.Decrypted;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text="Hello World" speed={80} />
      </div>
    );
  },

  Dither: () => {
    const Comp = componentMap.Dither;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp waveColor={[0.5, 0.5, 0.5]} disableAnimation={false} enableMouseInteraction={true} />
      </div>
    );
  },

  Dock: () => {
    const Comp = componentMap.Dock;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 320, aspectRatio: '9/19', maxHeight: 400, overflow: 'hidden', borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)' }}>
          <Comp items={[
            { icon: '🏠', label: 'Home', onClick: () => {} },
            { icon: '📁', label: 'Files', onClick: () => {} },
            { icon: '🌐', label: 'Browser', onClick: () => {} },
            { icon: '⚙️', label: 'Settings', onClick: () => {} },
            { icon: '📧', label: 'Mail', onClick: () => {} },
          ]} />
        </div>
      </div>
    );
  },

  DomeGallery: () => {
    const Comp = componentMap.DomeGallery;
    return (
      <div style={{ width: '100%', height: 450, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  DotField: () => {
    const Comp = componentMap.DotField;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative' }}>
        <Comp dotRadius={1.5} dotSpacing={14} bulgeStrength={67} glowRadius={16} />
      </div>
    );
  },

  DotGrid: () => {
    const Comp = componentMap.DotGrid;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative' }}>
        <Comp dotSize={10} gap={15} baseColor="#5227FF" activeColor="#5227FF" />
      </div>
    );
  },

  ElectricBorder: () => {
    const Comp = componentMap.ElectricBorder;
    return (
      <div style={{ ...cardStyle, height: 400, margin: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Comp color="#7df9ff" speed={1}>
          <div style={{ padding: '3rem 4rem', color: '#fff', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.3rem' }}>⚡ Electric Border</h3>
            <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>Jittering energy border effect</p>
          </div>
        </Comp>
      </div>
    );
  },

  EvilEye: () => {
    const Comp = componentMap.EvilEye;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  FadeContent: () => {
    const Comp = componentMap.FadeContent;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem' }}>
        <Comp blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <div>
            <h3 style={{ color: '#fff', margin: '0 0 0.5rem' }}>✦ Fade Content</h3>
            {LOREM}
          </div>
        </Comp>
      </div>
    );
  },

  FallingText: () => {
    const Comp = componentMap.FallingText;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', minHeight: 500 }}>
        <Comp
          text="React Bits design patterns for modern interfaces"
          highlightWords={['React', 'Bits', 'design', 'modern']}
          highlightClass="highlighted"
          trigger="click"
          gravity={1.5}
          fontSize="1.1rem"
        />
      </div>
    );
  },

  FaultyTerminal: () => {
    const Comp = componentMap.FaultyTerminal;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  Ferrofluid: () => {
    const Comp = componentMap.Ferrofluid;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  FloatingLines: () => {
    const Comp = componentMap.FloatingLines;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  FlowingMenu: () => {
    const Comp = componentMap.FlowingMenu;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp items={[
          { link: '#', text: 'Mojave', image: 'https://picsum.photos/id/1015/600/400' },
          { link: '#', text: 'Sonoma', image: 'https://picsum.photos/id/1016/600/400' },
          { link: '#', text: 'Ventura', image: 'https://picsum.photos/id/1018/600/400' },
        ]} />
      </div>
    );
  },

  FlyingPosters: () => {
    const Comp = componentMap.FlyingPosters;
    return (
      <div style={{ width: '100%', height: 420, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp items={[
          'https://picsum.photos/id/1015/600/600',
          'https://picsum.photos/id/1016/600/600',
          'https://picsum.photos/id/1018/600/600',
          'https://picsum.photos/id/1020/600/600',
          'https://picsum.photos/id/1024/600/600',
        ]} />
      </div>
    );
  },

  Folder: () => {
    const Comp = componentMap.Folder;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp name="Design Patterns" files={['BounceCards.jsx', 'BlurText.jsx', 'DotField.jsx', 'styles.css', 'index.js']} />
      </div>
    );
  },

  FuzzyText: () => {
    const Comp = componentMap.FuzzyText;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp baseIntensity={0.15} hoverIntensity={0.4} enableHover={true}>
          404
        </Comp>
      </div>
    );
  },

  Galaxy: () => {
    const Comp = componentMap.Galaxy;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  GhostCursor: () => {
    const Comp = componentMap.GhostCursor;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative' }}>
        <Comp trailLength={50} inertia={0.5} color="#B497CF" bloomStrength={0.1} />
      </div>
    );
  },

  GlassIcons: () => {
    const Comp = componentMap.GlassIcons;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp items={[
          { icon: '⚡', label: 'Home', color: 'blue' },
          { icon: '★', label: 'Favorites', color: 'purple' },
          { icon: '♥', label: 'Likes', color: 'red' },
          { icon: '◆', label: 'Premium', color: 'indigo' },
        ]} />
      </div>
    );
  },

  GlareHover: () => {
    const Comp = componentMap.GlareHover;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp glareColor="#ffffff" glareOpacity={0.3} glareAngle={-30} glareSize={300}>
          <div style={{ width: 240, height: 180, background: 'linear-gradient(135deg, #6366f1, #a855f7)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.1rem' }}>
            Hover Me
          </div>
        </Comp>
      </div>
    );
  },

  GlassSurface: () => {
    const Comp = componentMap.GlassSurface;
    const BgComp = componentMap.Aurora;
    return (
      <div style={{ ...cardStyle, height: 400, margin: '1rem', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <BgComp colorStops={["#3A29FF", "#FF4BDB", "#FF8C5A"]} speed={0.5} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Comp width={320} height={220} borderRadius={16} />
        </div>
      </div>
    );
  },

  GlitchText: () => {
    const Comp = componentMap.GlitchText;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp speed={1} enableShadows={true} enableOnHover={false}>
          GLITCH EFFECT
        </Comp>
      </div>
    );
  },

  GooeyNav: () => {
    const Comp = componentMap.GooeyNav;
    return (
      <div style={{ background: '#080812', borderRadius: 16, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp items={[
          { label: 'Home', href: '#' },
          { label: 'About', href: '#' },
          { label: 'Work', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Contact', href: '#' },
        ]} />
      </div>
    );
  },

  GradientBlinds: () => {
    const Comp = componentMap.GradientBlinds;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  GradientText: () => {
    const Comp = componentMap.GradientText;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}>
          Gradient Text
        </Comp>
      </div>
    );
  },

  GradualBlur: () => {
    const Comp = componentMap.GradualBlur;
    return (
      <div style={{ ...cardStyle, height: 500, margin: '1rem', overflow: 'hidden', position: 'relative' }}>
        <Comp>
          <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.3rem', margin: '0 0 0.75rem' }}>✦ Gradual Blur</h3>
            <p style={{ color: '#ccc', lineHeight: 1.7, marginBottom: '1rem' }}>Scroll through this content to see the gradual blur effect. The text becomes clearer as you scroll down.</p>
            <p style={{ color: '#bbb', lineHeight: 1.7, marginBottom: '1rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p style={{ color: '#aaa', lineHeight: 1.7, marginBottom: '1rem' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p style={{ color: '#999', lineHeight: 1.7, marginBottom: '1rem' }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p style={{ color: '#888', lineHeight: 1.7, marginBottom: '1rem' }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p style={{ color: '#777', lineHeight: 1.7, marginBottom: '1rem' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.</p>
            <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <p style={{ color: '#444', lineHeight: 1.7 }}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
          </div>
        </Comp>
      </div>
    );
  },

  Grainient: () => {
    const Comp = componentMap.Grainient;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  GridMotion: () => {
    const Comp = componentMap.GridMotion;
    return (
      <div style={{ ...cardStyle, height: 360, margin: '1rem', overflow: 'hidden' }}>
        <Comp images={IMAGES} />
      </div>
    );
  },

  Hyperspeed: () => {
    const Comp = componentMap.Hyperspeed;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  LaserFlow: () => {
    const Comp = componentMap.LaserFlow;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#0a0a0f' }}>
        <Comp color="#FF79C6" flowSpeed={0.35} wispDensity={1} />
      </div>
    );
  },

  ImageTrail: () => {
    const Comp = componentMap.ImageTrail;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative', overflow: 'hidden' }}>
        <Comp key="demo" items={[
          'https://picsum.photos/id/287/300/300',
          'https://picsum.photos/id/288/300/300',
          'https://picsum.photos/id/289/300/300',
          ...IMAGES,
        ]} />
      </div>
    );
  },

  InfiniteMenu: () => {
    const Comp = componentMap.InfiniteMenu;
    const demoItems = [
      { image: 'https://picsum.photos/id/1015/600/600', link: '#', title: 'Explore', description: 'Discover new patterns' },
      { image: 'https://picsum.photos/id/1016/600/600', link: '#', title: 'Design', description: 'Create beautiful UI' },
      { image: 'https://picsum.photos/id/1018/600/600', link: '#', title: 'Build', description: 'Ship fast' },
    ];
    return (
      <div style={{ width: '100%', height: 450, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#000' }}>
        <Comp items={demoItems} />
      </div>
    );
  },

  Iridescence: () => {
    const Comp = componentMap.Iridescence;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  LetterGlitch: () => {
    const Comp = componentMap.LetterGlitch;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text="GLITCH" />
      </div>
    );
  },

  Lightfall: () => {
    const Comp = componentMap.Lightfall;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  Lightning: () => {
    const Comp = componentMap.Lightning;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative', background: '#030308' }}>
        <Comp hue={220} xOffset={0} speed={1} intensity={1} size={1} />
      </div>
    );
  },

  LightPillar: () => {
    const Comp = componentMap.LightPillar;
    return (
      <div style={{ width: '100%', height: 420, margin: '1rem', position: 'relative' }}>
        <Comp topColor="#5227FF" bottomColor="#FF9FFC" intensity={1.0} />
      </div>
    );
  },

  LightRays: () => {
    const Comp = componentMap.LightRays;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp raysOrigin="top-center" raysColor="#00ffff" raysSpeed={1.5} lightHeight={0.5} />
      </div>
    );
  },

  LineWaves: () => {
    const Comp = componentMap.LineWaves;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  LiquidChrome: () => {
    const Comp = componentMap.LiquidChrome;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  LiquidEther: () => {
    const Comp = componentMap.LiquidEther;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  LogoLoop: () => {
    const Comp = componentMap.LogoLoop;
    return (
      <div style={{ ...cardStyle, padding: '1.5rem', margin: '1rem' }}>
        <Comp logos={LOGOS} />
      </div>
    );
  },

  MagicBento: () => {
    const Comp = componentMap.MagicBento;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem' }}>
        <Comp items={[
          { title: 'Design', desc: 'Beautiful patterns', image: IMAGES[0] },
          { title: 'Code', desc: 'Clean components', image: IMAGES[1] },
          { title: 'Deploy', desc: 'Ship fast', image: IMAGES[2] },
        ]} />
      </div>
    );
  },

  MagicRings: () => {
    const Comp = componentMap.MagicRings;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp color="#fc42ff" colorTwo="#42fcff" ringCount={6} speed={1} />
      </div>
    );
  },

  Magnet: () => {
    const Comp = componentMap.Magnet;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp padding={80} strength={25}>
          <div style={{ width: 180, height: 100, background: 'linear-gradient(135deg, #6366f1, #a855f7)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', fontSize: '1rem' }}>
            🧲 Hover Me
          </div>
        </Comp>
      </div>
    );
  },

  MagnetLines: () => {
    const Comp = componentMap.MagnetLines;
    return (
      <div style={{ ...cardStyle, height: 320, margin: '1rem', overflow: 'hidden' }}>
        <Comp rows={8} columns={14} />
      </div>
    );
  },

  MetallicPaint: () => {
    const Comp = componentMap.MetallicPaint;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp imageSrc={IMAGES[0]} />
      </div>
    );
  },

  MetaBalls: () => {
    const Comp = componentMap.MetaBalls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp color="#ffffff" speed={0.3} ballCount={15} enableMouseInteraction={true} />
      </div>
    );
  },

  Masonry: () => {
    const Comp = componentMap.Masonry;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem' }}>
        <Comp items={[
          { id: '1', img: IMAGES[0], url: '#', height: 300 },
          { id: '2', img: IMAGES[1], url: '#', height: 400 },
          { id: '3', img: IMAGES[2], url: '#', height: 350 },
          { id: '4', img: IMAGES[3], url: '#', height: 450 },
          { id: '5', img: IMAGES[4], url: '#', height: 320 },
        ]} />
      </div>
    );
  },

  Noise: () => {
    const Comp = componentMap.Noise;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative', overflow: 'hidden' }}>
        <Comp patternSize={250} patternScaleX={1.5} patternScaleY={1.5} patternAlpha={1.5} />
      </div>
    );
  },

  Orb: () => {
    const Comp = componentMap.Orb;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  Particles: () => {
    const Comp = componentMap.Particles;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  PillNav: () => {
    const Comp = componentMap.PillNav;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp logo="🏢" logoAlt="Company Logo" items={[
          { label: 'Home', href: '#' },
          { label: 'About', href: '#about' },
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'FAQ', href: '#faq' },
        ]} />
      </div>
    );
  },

  PixelBlast: () => {
    const Comp = componentMap.PixelBlast;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  PixelCard: () => {
    const Comp = componentMap.PixelCard;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp variant="pink">
          <div style={{ width: 260, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.1rem', position: 'absolute', inset: 0 }}>
            🎮 Pixel Card
          </div>
        </Comp>
      </div>
    );
  },

  PixelSnow: () => {
    const Comp = componentMap.PixelSnow;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  PixelTrail: () => {
    const Comp = componentMap.PixelTrail;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp gridSize={35} trailSize={0.08} maxAge={180} color="#a78bfa" />
      </div>
    );
  },

  Plasma: () => {
    const Comp = componentMap.Plasma;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp color="#ff6b35" speed={0.6} direction="forward" scale={1.1} opacity={1} />
      </div>
    );
  },

  PlasmaWave: () => {
    const Comp = componentMap.PlasmaWave;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  Prism: () => {
    const Comp = componentMap.Prism;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  PrismaticBurst: () => {
    const Comp = componentMap.PrismaticBurst;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  Ribbons: () => {
    const Comp = componentMap.Ribbons;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp colors={['#FC8EAC', '#FF6B6B', '#C084FC', '#60A5FA']} baseThickness={30} enableShaderEffect={false} />
      </div>
    );
  },

  ProfileCard: () => {
    const Comp = componentMap.ProfileCard;
    return (
      <div style={{ background: '#0a0a0f', borderRadius: 30, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp
          name="Jane Doe"
          title="Design Engineer"
          handle="@janedoe"
          status="Online"
          contactText="Contact Me"
          avatarUrl={IMAGES[0]}
          showUserInfo={true}
          enableTilt={true}
          enableSpotlight={true}
        />
      </div>
    );
  },

  Radar: () => {
    const Comp = componentMap.Radar;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  ReflectiveCard: () => {
    const Comp = componentMap.ReflectiveCard;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp />
      </div>
    );
  },

  RippleGrid: () => {
    const Comp = componentMap.RippleGrid;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  RotatingText: () => {
    const Comp = componentMap.RotatingText;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp texts={['Design', 'Develop', 'Deploy', 'Delight']} />
      </div>
    );
  },

  ScrambledText: () => {
    const Comp = componentMap.ScrambledText;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp className="scrambled-text-demo">Scrambled Text Effect</Comp>
      </div>
    );
  },

  ScrollFloat: () => {
    const Comp = componentMap.ScrollFloat;
    return (
      <div style={{ ...cardStyle, height: 500, margin: '1rem', position: 'relative' }}>
        <div style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Comp>
            Scroll into view to see the floating text animation effect
          </Comp>
        </div>
      </div>
    );
  },

  ScrollReveal: () => {
    const Comp = componentMap.ScrollReveal;
    return (
      <div style={{ ...cardStyle, height: 500, margin: '1rem', position: 'relative' }}>
        <div style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Comp baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
            Scroll into view to reveal this content with smooth blur and rotation
          </Comp>
        </div>
      </div>
    );
  },

  ScrollStack: () => {
    const Comp = componentMap.ScrollStack;
    return (
      <div style={{ width: '100%', height: 500, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp itemDistance={120} itemScale={0.04} itemStackDistance={35} rotationAmount={2} blurAmount={3}>
          <div className="scroll-stack-card">
            <div style={{ height: 280, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem' }}>Card 1</div>
          </div>
          <div className="scroll-stack-card">
            <div style={{ height: 280, background: 'linear-gradient(135deg, #ec4899, #f43f5e)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem' }}>Card 2</div>
          </div>
          <div className="scroll-stack-card">
            <div style={{ height: 280, background: 'linear-gradient(135deg, #10b981, #3b82f6)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem' }}>Card 3</div>
          </div>
        </Comp>
      </div>
    );
  },

  ScrollVelocity: () => {
    const Comp = componentMap.ScrollVelocity;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', overflow: 'hidden' }}>
        <Comp texts={['Design', 'Develop', 'Deploy']} />
      </div>
    );
  },

  ShapeBlur: () => {
    const Comp = componentMap.ShapeBlur;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp variation={0} shapeSize={1.2} roundness={0.4} />
      </div>
    );
  },

  ShapeGrid: () => {
    const Comp = componentMap.ShapeGrid;
    return (
      <div style={{ ...cardStyle, height: 360, margin: '1rem', overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  ShinyText: () => {
    const Comp = componentMap.ShinyText;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text="✨ Shiny Text Effect" speed={2} shineColor="#ffffff" color="#b5b5b5" />
      </div>
    );
  },

  Shuffle: () => {
    const Comp = componentMap.Shuffle;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp text="Hello World" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} />
      </div>
    );
  },

  SideRays: () => {
    const Comp = componentMap.SideRays;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp speed={2.5} rayColor1="#EAB308" rayColor2="#96c8ff" intensity={2} />
      </div>
    );
  },

  SplashCursor: () => {
    const Comp = componentMap.SplashCursor;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp SPLAT_FORCE={6000} COLOR_UPDATE_SPEED={10} RAINBOW_MODE={true} />
      </div>
    );
  },

  Silk: () => {
    const Comp = componentMap.Silk;
    return (
      <div style={{ ...cardStyle, height: 360, margin: '1rem', overflow: 'hidden' }}>
        <Comp speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
      </div>
    );
  },

  SoftAurora: () => {
    const Comp = componentMap.SoftAurora;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  SplitText: () => {
    const Comp = componentMap.SplitText;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text="Split Text Animation" />
      </div>
    );
  },

  SpotlightCard: () => {
    const Comp = componentMap.SpotlightCard;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp spotlightColor="rgba(0, 229, 255, 0.2)">
          <div style={{ padding: '2rem', minWidth: 260 }}>
            <h3 style={{ color: '#fff', margin: '0 0 0.5rem' }}>✦ Spotlight Card</h3>
            <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>Move your mouse over this card</p>
          </div>
        </Comp>
      </div>
    );
  },

  Stack: () => {
    const Comp = componentMap.Stack;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp cards={[
          <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" alt="card-1" className="card-image" />,
          <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" alt="card-2" className="card-image" />,
          <img src="https://images.unsplash.com/photo-1508014464832-8e604b4f5c28?q=80&w=500&auto=format" alt="card-3" className="card-image" />,
        ]} />
      </div>
    );
  },

  StarBorder: () => {
    const Comp = componentMap.StarBorder;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp color="cyan" speed="5s">
          <div style={{ padding: '1.5rem 2rem', color: '#fff', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 0.25rem' }}>⭐ Star Border</h3>
            <p style={{ color: '#aaa', margin: 0, fontSize: '0.85rem' }}>Shining border effect</p>
          </div>
        </Comp>
      </div>
    );
  },

  Stepper: () => {
    const Comp = componentMap.Stepper;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center', minHeight: 300 }}>
        <Comp>
          <div style={{ padding: '2rem', textAlign: 'center', color: '#fff' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>Step 1</h3>
            <p style={{ color: '#aaa' }}>Enter your details</p>
          </div>
          <div style={{ padding: '2rem', textAlign: 'center', color: '#fff' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>Step 2</h3>
            <p style={{ color: '#aaa' }}>Configure settings</p>
          </div>
          <div style={{ padding: '2rem', textAlign: 'center', color: '#fff' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>Step 3</h3>
            <p style={{ color: '#aaa' }}>Review and confirm</p>
          </div>
        </Comp>
      </div>
    );
  },

  StickerPeel: () => {
    const Comp = componentMap.StickerPeel;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 350 }}>
        <Comp imageSrc={IMAGES[0]} width={180} />
      </div>
    );
  },

  Strands: () => {
    const Comp = componentMap.Strands;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp colors={['#F97316', '#7C3AED', '#06B6D4']} count={3} speed={0.5} amplitude={1} />
      </div>
    );
  },

  TargetCursor: () => {
    const Comp = componentMap.TargetCursor;
    return (
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, height: 360, margin: '1rem', position: 'relative', cursor: 'none', overflow: 'hidden' }}>
        <Comp spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />
      </div>
    );
  },

  TextCursor: () => {
    const Comp = componentMap.TextCursor;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center', minHeight: 280, cursor: 'none', position: 'relative', overflow: 'hidden' }}>
        <Comp text="Hello! This is a text cursor demo with trailing effect." spacing={80} followMouseDirection={true} randomFloat={true} exitDuration={0.3} removalInterval={20} maxPoints={10} />
      </div>
    );
  },

  TextPressure: () => {
    const Comp = componentMap.TextPressure;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text="PRESSURE" />
      </div>
    );
  },

  TextType: () => {
    const Comp = componentMap.TextType;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text={['Hello World', 'React Bits', 'Design Patterns']} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|" />
      </div>
    );
  },

  TiltedCard: () => {
    const Comp = componentMap.TiltedCard;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp imageSrc={IMAGES[0]} altText="Demo image" captionText="Tilted Card" />
      </div>
    );
  },

  Threads: () => {
    const Comp = componentMap.Threads;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp />
      </div>
    );
  },

  TrueFocus: () => {
    const Comp = componentMap.TrueFocus;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp sentence="True Focus" manualMode={false} blurAmount={5} borderColor="red" animationDuration={2} pauseBetweenAnimations={1} />
      </div>
    );
  },

  VariableProximity: () => {
    const Comp = componentMap.VariableProximity;
    const containerRef = { current: null };
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <div ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
          <Comp
            label="Hover near this text"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={120}
            falloff="linear"
          />
        </div>
      </div>
    );
  },

  Waves: () => {
    const Comp = componentMap.Waves;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp lineColor="#fff" backgroundColor="rgba(255, 255, 255, 0.2)" waveSpeedX={0.02} waveSpeedY={0.01} waveAmpX={40} waveAmpY={20} friction={0.9} tension={0.01} />
      </div>
    );
  },

  StaggeredMenu: () => {
    const Comp = componentMap.StaggeredMenu;
    const demoMenuItems = [
      { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
      { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
      { label: 'Services', ariaLabel: 'View our services', link: '/services' },
      { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];
    const demoServices = [
      { label: 'Twitter', link: 'https://twitter.com' },
      { label: 'GitHub', link: 'https://github.com' },
      { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];
    return (
      <div style={{ width: '100%', height: 420, margin: '1rem', position: 'relative', background: '#1a1a1a' }}>
        <Comp
          position="right"
          items={demoMenuItems}
          socialItems={demoServices}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B497CF', '#5227FF']}
          accentColor="#ff6b6b"
          isFixed={false}
        />
      </div>
    );
  },
};

export default function Showcase({ componentName, allComponents, onSelect }) {
  if (!componentName) {
    return (
      <div className="welcome">
        <div className="welcome-icon">🎨</div>
        <h2>Design Pattern Showcase</h2>
        <p>Select a component from the sidebar to preview it live.</p>
        <p className="welcome-hint">{allComponents.length} design patterns available</p>
      </div>
    );
  }

  const DemoComponent = demos[componentName];
  if (!DemoComponent) {
    return <div className="error">Component "{componentName}" demo not configured yet.</div>;
  }

  const Comp = componentMap[componentName];
  if (!Comp) {
    return <div className="error">Component "{componentName}" not found in the library.</div>;
  }

  return (
    <div className="showcase-preview" key={componentName}>
      <h2 className="component-title">{componentName}</h2>
      <div className="demo-area">
        <Suspense fallback={<div className="loading">Loading {componentName}...</div>}>
          <DemoComponent />
        </Suspense>
      </div>
      <div className="component-nav">
        <div className="nav-buttons">
          <button className="nav-btn prev-btn" onClick={() => {
            const idx = allComponents.findIndex(c => c.name === componentName);
            if (idx > 0) onSelect(allComponents[idx - 1].name);
          }}>← Previous</button>
          <button className="nav-btn next-btn" onClick={() => {
            const idx = allComponents.findIndex(c => c.name === componentName);
            if (idx < allComponents.length - 1) onSelect(allComponents[idx + 1].name);
          }}>Next →</button>
        </div>
      </div>
    </div>
  );
}