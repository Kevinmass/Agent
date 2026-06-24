import { lazy, Suspense, useState, useEffect } from 'react';
import PropControls from './PropControls.jsx';
import { propConfigs } from './propConfigs.js';

const componentMap = {
  AnimatedContent: lazy(() => import('./components/AnimatedContent/AnimatedContent.jsx')),
  AnimatedList: lazy(() => import('./components/AnimatedList/AnimatedList.jsx')),
  AnimeMorph: lazy(() => import('./components/AnimeMorph/AnimeMorph.jsx')),
  AnimeScroll: lazy(() => import('./components/AnimeScroll/AnimeScroll.jsx')),
  AnimeSpring: lazy(() => import('./components/AnimeSpring/AnimeSpring.jsx')),
  AnimeText: lazy(() => import('./components/AnimeText/AnimeText.jsx')),
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
  StaggeredMenu: lazy(() => import('./components/StaggeredMenu/StaggeredMenu.jsx')),
  StarBorder: lazy(() => import('./components/StarBorder/StarBorder.jsx')),
  Stepper: lazy(() => import('./components/Stepper/Stepper.jsx')),
  StickerPeel: lazy(() => import('./components/StickerPeel/StickerPeel.jsx')),
  Strands: lazy(() => import('./components/Strands/Strands.jsx')),
  TargetCursor: lazy(() => import('./components/TargetCursor/TargetCursor.jsx')),
  TextPressure: lazy(() => import('./components/TextPressure/TextPressure.jsx')),
  TextType: lazy(() => import('./components/TextType/TextType.jsx')),
  TiltedCard: lazy(() => import('./components/TiltedCard/TiltedCard.jsx')),
  Threads: lazy(() => import('./components/Threads/Threads.jsx')),
  TrueFocus: lazy(() => import('./components/TrueFocus/TrueFocus.jsx')),
  VariableProximity: lazy(() => import('./components/VariableProximity/VariableProximity.jsx')),
  Waves: lazy(() => import('./components/Waves/Waves.jsx')),
  ShaderGradient: lazy(() => import('./components/ShaderGradient/ShaderGradient.jsx')),
  LiquidLogo: lazy(() => import('./components/LiquidLogo/LiquidLogo.jsx')),
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
  AnimatedContent: ({ controls = {} }) => {
    const Comp = componentMap.AnimatedContent;
    const { distance = 60, direction = 'vertical', reverse = false, duration = 0.5 } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem' }}>
        <Comp distance={distance} direction={direction} reverse={reverse} duration={duration} ease="power3.out">
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

  AnimeMorph: ({ controls = {} }) => {
    const Comp = componentMap.AnimeMorph;
    const { width = 180, height = 180, strokeWidth = 2, loop = true, autoplay = true } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp width={width} height={height} strokeColor="#a78bfa" strokeWidth={strokeWidth} loop={loop} autoplay={autoplay} />
      </div>
    );
  },

  AnimeScroll: () => {
    const Comp = componentMap.AnimeScroll;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', minHeight: 400 }}>
        <div style={{ paddingTop: '8rem' }}>
          <Comp>
            <h3 style={{ color: '#fff', margin: '0 0 0.75rem', fontSize: '1.1rem' }}>✦ Anime Scroll Reveal</h3>
            {LOREM}
          </Comp>
        </div>
      </div>
    );
  },

  AnimeSpring: ({ controls = {} }) => {
    const Comp = componentMap.AnimeSpring;
    const { bounce = 0.6, stiffness = 180, damping = 18, draggable = true } = controls;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp bounce={bounce} stiffness={stiffness} damping={damping} draggable={draggable}>
          <div style={{
            width: 200, height: 160,
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1rem',
            userSelect: 'none'
          }}>
            Drag or hover me
          </div>
        </Comp>
      </div>
    );
  },

  AnimeText: ({ controls = {} }) => {
    const Comp = componentMap.AnimeText;
    const { staggerDelay = 50, direction = 'up', splitBy = 'chars' } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text="Anime.js Text Animation" staggerDelay={staggerDelay} direction={direction} splitBy={splitBy} />
      </div>
    );
  },

  Antigravity: ({ controls = {} }) => {
    const Comp = componentMap.Antigravity;
    const { count = 200, magnetRadius = 6, ringRadius = 7, waveSpeed = 0.4, waveAmplitude = 1, particleSize = 1.5 } = controls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative' }}>
        <Comp count={count} magnetRadius={magnetRadius} ringRadius={ringRadius} waveSpeed={waveSpeed} waveAmplitude={waveAmplitude} particleSize={particleSize} color="#a78bfa" />
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

  Beams: ({ controls = {} }) => {
    const Comp = componentMap.Beams;
    const { beamWidth = 3, beamHeight = 30, beamNumber = 15, speed = 1.5, noiseIntensity = 1.5, scale = 0.2, rotation = 30 } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative', background: '#080812' }}>
        <Comp beamWidth={beamWidth} beamHeight={beamHeight} beamNumber={beamNumber} lightColor="#ffffff" speed={speed} noiseIntensity={noiseIntensity} scale={scale} rotation={rotation} />
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

  BlurText: ({ controls = {} }) => {
    const Comp = componentMap.BlurText;
    const { delay = 150, animateBy = 'words', direction = 'top' } = controls;
    return (
      <div style={{ ...cardStyle, padding: '3rem 2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text="Blur Reveal Effect" delay={delay} animateBy={animateBy} direction={direction} />
      </div>
    );
  },

  BorderGlow: ({ controls = {} }) => {
    const Comp = componentMap.BorderGlow;
    const { edgeSensitivity = 30, borderRadius = 24, glowRadius = 40, glowIntensity = 1, coneSpread = 25 } = controls;
    return (
      <div style={{ margin: '1rem' }}>
        <Comp edgeSensitivity={edgeSensitivity} glowColor="60 80 120" backgroundColor="#0f0f18" borderRadius={borderRadius} glowRadius={glowRadius} glowIntensity={glowIntensity} coneSpread={coneSpread}>
          <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', margin: '0 0 0.5rem' }}>✦ Border Glow</h3>
            <p style={{ color: '#888', margin: 0 }}>Hover near the edges</p>
          </div>
        </Comp>
      </div>
    );
  },

  BounceCards: ({ controls = {} }) => {
    const Comp = componentMap.BounceCards;
    const { containerWidth = 520, containerHeight = 280, animationDelay = 0.4, animationStagger = 0.06, enableHover = true } = controls;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp
          images={IMAGES}
          containerWidth={containerWidth}
          containerHeight={containerHeight}
          animationDelay={animationDelay}
          animationStagger={animationStagger}
          easeType="elastic.out(1, 0.5)"
          enableHover={enableHover}
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
          logo="/1.png"
          items={[
            { label: 'Design', bgColor: '#6366f1', textColor: '#fff', links: [{ label: 'UI Library', href: '#', ariaLabel: 'UI Library' }, { label: 'Components', href: '#', ariaLabel: 'Components' }] },
            { label: 'Development', bgColor: '#ec4899', textColor: '#fff', links: [{ label: 'React', href: '#', ariaLabel: 'React' }, { label: 'API', href: '#', ariaLabel: 'API' }] },
            { label: 'Resources', bgColor: '#10b981', textColor: '#fff', links: [{ label: 'Blog', href: '#', ariaLabel: 'Blog' }, { label: 'Docs', href: '#', ariaLabel: 'Docs' }] },
          ]}
        />
      </div>
    );
  },

  CardSwap: ({ controls = {} }) => {
    const Comp = componentMap.CardSwap;
    const { cardDistance = 70, verticalDistance = 80, delay = 4000, pauseOnHover = false, skewAmount = 8, width = 320, height = 220 } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 480 }}>
        <Comp cardDistance={cardDistance} verticalDistance={verticalDistance} delay={delay} pauseOnHover={pauseOnHover} skewAmount={skewAmount} width={width} height={height}>
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

  Carousel: ({ controls = {} }) => {
    const Comp = componentMap.Carousel;
    const { baseWidth = 300, autoplay = true, autoplayDelay = 3000, pauseOnHover = true, loop = true } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp images={IMAGES} baseWidth={baseWidth} autoplay={autoplay} autoplayDelay={autoplayDelay} pauseOnHover={pauseOnHover} loop={loop} />
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

  CircularGallery: ({ controls = {} }) => {
    const Comp = componentMap.CircularGallery;
    const { bend = 3, borderRadius = 0.05, scrollEase = 0.1 } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp bend={bend} textColor="#ffffff" borderRadius={borderRadius} scrollEase={scrollEase} />
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

  ClickSpark: ({ controls = {} }) => {
    const Comp = componentMap.ClickSpark;
    const { sparkSize = 8, sparkRadius = 25, sparkCount = 6, duration = 400 } = controls;
    return (
      <div
        style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center', cursor: 'pointer' }}
        onClick={() => {}}
      >
        <Comp sparkColor="#a78bfa" sparkSize={sparkSize} sparkRadius={sparkRadius} sparkCount={sparkCount} duration={duration}>
          <span style={{ fontSize: '1rem', color: '#fff', display: 'block', padding: '2rem' }}>✨ Click anywhere on this card</span>
        </Comp>
      </div>
    );
  },

  CountUp: ({ controls = {} }) => {
    const Comp = componentMap.CountUp;
    const { duration = 2.5 } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp from={0} to={1000000} duration={duration} />
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

  Dither: ({ controls = {} }) => {
    const Comp = componentMap.Dither;
    const { disableAnimation = false, enableMouseInteraction = true } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp waveColor={[0.5, 0.5, 0.5]} disableAnimation={disableAnimation} enableMouseInteraction={enableMouseInteraction} />
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

  DotField: ({ controls = {} }) => {
    const Comp = componentMap.DotField;
    const { dotRadius = 1.5, dotSpacing = 14, bulgeStrength = 67, glowRadius = 16 } = controls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative' }}>
        <Comp dotRadius={dotRadius} dotSpacing={dotSpacing} bulgeStrength={bulgeStrength} glowRadius={glowRadius} />
      </div>
    );
  },

  DotGrid: ({ controls = {} }) => {
    const Comp = componentMap.DotGrid;
    const { dotSize = 10, gap = 15 } = controls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative' }}>
        <Comp dotSize={dotSize} gap={gap} baseColor="#5227FF" activeColor="#5227FF" />
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

  FadeContent: ({ controls = {} }) => {
    const Comp = componentMap.FadeContent;
    const { blur = true, duration = 1000, initialOpacity = 0 } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem' }}>
        <Comp blur={blur} duration={duration} easing="ease-out" initialOpacity={initialOpacity}>
          <div>
            <h3 style={{ color: '#fff', margin: '0 0 0.5rem' }}>✦ Fade Content</h3>
            {LOREM}
          </div>
        </Comp>
      </div>
    );
  },

  FallingText: ({ controls = {} }) => {
    const Comp = componentMap.FallingText;
    const { gravity = 1.5, fontSize = 1 } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', height: 600 }}>
        <Comp
          text="React Bits design patterns for modern interfaces"
          highlightWords={['React', 'Bits', 'design', 'modern']}
          highlightClass="highlighted"
          trigger="click"
          gravity={gravity}
          fontSize={`${fontSize}rem`}
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

  FuzzyText: ({ controls = {} }) => {
    const Comp = componentMap.FuzzyText;
    const { baseIntensity = 0.15, hoverIntensity = 0.4, enableHover = true } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp baseIntensity={baseIntensity} hoverIntensity={hoverIntensity} enableHover={enableHover}>
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

  GhostCursor: ({ controls = {} }) => {
    const Comp = componentMap.GhostCursor;
    const { trailLength = 50, inertia = 0.5, bloomStrength = 0.1 } = controls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative' }}>
        <Comp trailLength={trailLength} inertia={inertia} color="#B497CF" bloomStrength={bloomStrength} />
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

  GlareHover: ({ controls = {} }) => {
    const Comp = componentMap.GlareHover;
    const { glareOpacity = 0.3, glareAngle = -30, glareSize = 300 } = controls;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp glareColor="#ffffff" glareOpacity={glareOpacity} glareAngle={glareAngle} glareSize={glareSize}>
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

  GlitchText: ({ controls = {} }) => {
    const Comp = componentMap.GlitchText;
    const { speed = 1, enableShadows = true, enableOnHover = false } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp speed={speed} enableShadows={enableShadows} enableOnHover={enableOnHover}>
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

  LaserFlow: ({ controls = {} }) => {
    const Comp = componentMap.LaserFlow;
    const { flowSpeed = 0.35, wispDensity = 1 } = controls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#0a0a0f' }}>
        <Comp color="#FF79C6" flowSpeed={flowSpeed} wispDensity={wispDensity} />
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

  Lightning: ({ controls = {} }) => {
    const Comp = componentMap.Lightning;
    const { hue = 220, xOffset = 0, speed = 1, intensity = 1, size = 1 } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative', background: '#030308' }}>
        <Comp hue={hue} xOffset={xOffset} speed={speed} intensity={intensity} size={size} />
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

  LightRays: ({ controls = {} }) => {
    const Comp = componentMap.LightRays;
    const { raysSpeed = 1.5, lightHeight = 0.5 } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp raysOrigin="top-center" raysColor="#00ffff" raysSpeed={raysSpeed} lightHeight={lightHeight} />
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

  MagicRings: ({ controls = {} }) => {
    const Comp = componentMap.MagicRings;
    const { ringCount = 6, speed = 1 } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp color="#fc42ff" colorTwo="#42fcff" ringCount={ringCount} speed={speed} />
      </div>
    );
  },

  Magnet: ({ controls = {} }) => {
    const Comp = componentMap.Magnet;
    const { padding = 80, strength = 25 } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp padding={padding} strength={strength}>
          <div style={{ width: 180, height: 100, background: 'linear-gradient(135deg, #6366f1, #a855f7)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', fontSize: '1rem' }}>
            🧲 Hover Me
          </div>
        </Comp>
      </div>
    );
  },

  MagnetLines: ({ controls = {} }) => {
    const Comp = componentMap.MagnetLines;
    const { rows = 8, columns = 14 } = controls;
    return (
      <div style={{ ...cardStyle, height: 320, margin: '1rem', overflow: 'hidden' }}>
        <Comp rows={rows} columns={columns} />
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

  MetaBalls: ({ controls = {} }) => {
    const Comp = componentMap.MetaBalls;
    const { speed = 0.3, ballCount = 15, enableMouseInteraction = true } = controls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp color="#ffffff" speed={speed} ballCount={ballCount} enableMouseInteraction={enableMouseInteraction} />
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

  Noise: ({ controls = {} }) => {
    const Comp = componentMap.Noise;
    const { patternSize = 250, patternScaleX = 1.5, patternScaleY = 1.5, patternAlpha = 1.5 } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative', overflow: 'hidden' }}>
        <Comp patternSize={patternSize} patternScaleX={patternScaleX} patternScaleY={patternScaleY} patternAlpha={patternAlpha} />
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

  PixelTrail: ({ controls = {} }) => {
    const Comp = componentMap.PixelTrail;
    const { gridSize = 35, trailSize = 0.08, maxAge = 180 } = controls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp gridSize={gridSize} trailSize={trailSize} maxAge={maxAge} color="#a78bfa" />
      </div>
    );
  },

  Plasma: ({ controls = {} }) => {
    const Comp = componentMap.Plasma;
    const { speed = 0.6, direction = 'forward', scale = 1.1, opacity = 1 } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp color="#ff6b35" speed={speed} direction={direction} scale={scale} opacity={opacity} />
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

  Ribbons: ({ controls = {} }) => {
    const Comp = componentMap.Ribbons;
    const { baseThickness = 30, enableShaderEffect = false } = controls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp colors={['#FC8EAC', '#FF6B6B', '#C084FC', '#60A5FA']} baseThickness={baseThickness} enableShaderEffect={enableShaderEffect} />
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

  ScrollReveal: ({ controls = {} }) => {
    const Comp = componentMap.ScrollReveal;
    const { baseOpacity = 0.1, enableBlur = true, baseRotation = 3, blurStrength = 4 } = controls;
    return (
      <div style={{ ...cardStyle, height: 500, margin: '1rem', position: 'relative' }}>
        <div style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Comp baseOpacity={baseOpacity} enableBlur={enableBlur} baseRotation={baseRotation} blurStrength={blurStrength}>
            Scroll into view to reveal this content with smooth blur and rotation
          </Comp>
        </div>
      </div>
    );
  },

  ScrollStack: ({ controls = {} }) => {
    const Comp = componentMap.ScrollStack;
    const { itemDistance = 120, itemScale = 0.04, itemStackDistance = 35, rotationAmount = 2, blurAmount = 3 } = controls;
    return (
      <div style={{ width: '100%', height: 500, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp itemDistance={itemDistance} itemScale={itemScale} itemStackDistance={itemStackDistance} rotationAmount={rotationAmount} blurAmount={blurAmount}>
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

  ShapeBlur: ({ controls = {} }) => {
    const Comp = componentMap.ShapeBlur;
    const { variation = 0, shapeSize = 1.2, roundness = 0.4 } = controls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp variation={variation} shapeSize={shapeSize} roundness={roundness} />
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

  Shuffle: ({ controls = {} }) => {
    const Comp = componentMap.Shuffle;
    const { shuffleDirection = 'right', duration = 0.35, shuffleTimes = 1, stagger = 0.03 } = controls;
    return (
      <div style={{ ...cardStyle, padding: '1rem', margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Comp text="Hello World" shuffleDirection={shuffleDirection} duration={duration} animationMode="evenodd" shuffleTimes={shuffleTimes} ease="power3.out" stagger={stagger} />
      </div>
    );
  },

  SideRays: ({ controls = {} }) => {
    const Comp = componentMap.SideRays;
    const { speed = 2.5, intensity = 2 } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp speed={speed} rayColor1="#EAB308" rayColor2="#96c8ff" intensity={intensity} />
      </div>
    );
  },

  SplashCursor: ({ controls = {} }) => {
    const Comp = componentMap.SplashCursor;
    const { SPLAT_FORCE = 6000, COLOR_UPDATE_SPEED = 10, RAINBOW_MODE = true } = controls;
    return (
      <div style={{ width: '100%', height: 400, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp SPLAT_FORCE={SPLAT_FORCE} COLOR_UPDATE_SPEED={COLOR_UPDATE_SPEED} RAINBOW_MODE={RAINBOW_MODE} />
      </div>
    );
  },

  Silk: ({ controls = {} }) => {
    const Comp = componentMap.Silk;
    const { speed = 5, scale = 1, noiseIntensity = 1.5, rotation = 0 } = controls;
    return (
      <div style={{ ...cardStyle, height: 360, margin: '1rem', overflow: 'hidden' }}>
        <Comp speed={speed} scale={scale} color="#7B7481" noiseIntensity={noiseIntensity} rotation={rotation} />
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

  Strands: ({ controls = {} }) => {
    const Comp = componentMap.Strands;
    const { count = 3, speed = 0.5, amplitude = 1 } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp colors={['#F97316', '#7C3AED', '#06B6D4']} count={count} speed={speed} amplitude={amplitude} />
      </div>
    );
  },

  TargetCursor: ({ controls = {} }) => {
    const Comp = componentMap.TargetCursor;
    const { spinDuration = 2, hideDefaultCursor = true, parallaxOn = true } = controls;
    return (
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, height: 360, margin: '1rem', position: 'relative', cursor: 'none', overflow: 'hidden' }}>
        <Comp spinDuration={spinDuration} hideDefaultCursor={hideDefaultCursor} parallaxOn={parallaxOn} />
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

  TextType: ({ controls = {} }) => {
    const Comp = componentMap.TextType;
    const { typingSpeed = 75, pauseDuration = 1500, showCursor = true } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp text={['Hello World', 'React Bits', 'Design Patterns']} typingSpeed={typingSpeed} pauseDuration={pauseDuration} showCursor={showCursor} cursorCharacter="|" />
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

  TrueFocus: ({ controls = {} }) => {
    const Comp = componentMap.TrueFocus;
    const { manualMode = false, blurAmount = 5, animationDuration = 0.5, pauseBetweenAnimations = 1 } = controls;
    return (
      <div style={{ ...cardStyle, padding: '2rem', margin: '1rem', textAlign: 'center' }}>
        <Comp sentence="True Focus" manualMode={manualMode} blurAmount={blurAmount} borderColor="red" animationDuration={animationDuration} pauseBetweenAnimations={pauseBetweenAnimations} />
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

  Waves: ({ controls = {} }) => {
    const Comp = componentMap.Waves;
    const { waveSpeedX = 0.02, waveSpeedY = 0.01, waveAmpX = 40, waveAmpY = 20, friction = 0.9, tension = 0.01 } = controls;
    return (
      <div style={{ width: '100%', height: 360, margin: '1rem', position: 'relative' }}>
        <Comp lineColor="#fff" backgroundColor="rgba(255, 255, 255, 0.2)" waveSpeedX={waveSpeedX} waveSpeedY={waveSpeedY} waveAmpX={waveAmpX} waveAmpY={waveAmpY} friction={friction} tension={tension} />
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

  ShaderGradient: ({ controls = {} }) => {
    const Comp = componentMap.ShaderGradient;
    const { uSpeed = 0.4, uStrength = 0.2, uFrequency = 1.5, type = 'plane', cDistance = 3.6 } = controls;
    return (
      <div style={{ width: '100%', height: 450, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp type={type} uSpeed={uSpeed} uStrength={uStrength} uFrequency={uFrequency} cDistance={cDistance} />
      </div>
    );
  },

  LiquidLogo: ({ controls = {} }) => {
    const Comp = componentMap.LiquidLogo;
    const { patternScale = 2, refraction = 0.015, edge = 0.4, patternBlur = 0.005, liquid = 0.07, speed = 0.3 } = controls;
    return (
      <div style={{ width: '100%', height: 450, margin: '1rem', position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
        <Comp patternScale={patternScale} refraction={refraction} edge={edge} patternBlur={patternBlur} liquid={liquid} speed={speed} />
      </div>
    );
  },
};

export default function Showcase({ componentName, allComponents, onSelect }) {
  const [controls, setControls] = useState({});
  const [replayCount, setReplayCount] = useState(0);

  useEffect(() => {
    const config = propConfigs[componentName];
    if (config) {
      const defaults = {};
      config.forEach(p => { defaults[p.name] = p.default; });
      setControls(defaults);
    } else {
      setControls({});
    }
    setReplayCount(0);
  }, [componentName]);

  const handleControlChange = (name, value) => {
    setControls(prev => ({ ...prev, [name]: value }));
  };

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
          <DemoComponent key={replayCount} controls={controls} />
        </Suspense>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0 1rem' }}>
        <button className="nav-btn" onClick={() => setReplayCount(c => c + 1)}>
          ⟳ Replay
        </button>
      </div>
      <PropControls
        config={propConfigs[componentName]}
        values={controls}
        onChange={handleControlChange}
      />
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