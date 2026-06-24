export const propConfigs = {
  AnimatedContent: [
    { name: 'distance', label: 'Distance', type: 'range', min: 0, max: 300, step: 10, default: 60 },
    { name: 'direction', label: 'Direction', type: 'select', options: ['vertical', 'horizontal'], default: 'vertical' },
    { name: 'reverse', label: 'Reverse', type: 'checkbox', default: false },
    { name: 'duration', label: 'Duration', type: 'range', min: 0.1, max: 3, step: 0.1, default: 0.5 },
  ],

  AnimeMorph: [
    { name: 'width', label: 'Width', type: 'range', min: 80, max: 400, step: 10, default: 180 },
    { name: 'height', label: 'Height', type: 'range', min: 80, max: 400, step: 10, default: 180 },
    { name: 'duration', label: 'Duration', type: 'range', min: 200, max: 3000, step: 100, default: 1200 },
    { name: 'strokeWidth', label: 'Stroke Width', type: 'range', min: 1, max: 10, step: 1, default: 2 },
    { name: 'loop', label: 'Loop', type: 'checkbox', default: true },
    { name: 'autoplay', label: 'Autoplay', type: 'checkbox', default: true },
  ],

  AnimeSpring: [
    { name: 'bounce', label: 'Bounce', type: 'range', min: 0, max: 1, step: 0.05, default: 0.6 },
    { name: 'stiffness', label: 'Stiffness', type: 'range', min: 20, max: 500, step: 10, default: 180 },
    { name: 'damping', label: 'Damping', type: 'range', min: 1, max: 50, step: 1, default: 18 },
    { name: 'draggable', label: 'Draggable', type: 'checkbox', default: true },
  ],

  AnimeText: [
    { name: 'staggerDelay', label: 'Stagger Delay', type: 'range', min: 10, max: 200, step: 10, default: 50 },
    { name: 'direction', label: 'Direction', type: 'select', options: ['up', 'down', 'left', 'right'], default: 'up' },
    { name: 'splitBy', label: 'Split By', type: 'select', options: ['chars', 'words', 'lines'], default: 'chars' },
  ],

  Antigravity: [
    { name: 'count', label: 'Count', type: 'range', min: 50, max: 500, step: 10, default: 200 },
    { name: 'magnetRadius', label: 'Magnet Radius', type: 'range', min: 1, max: 20, step: 1, default: 6 },
    { name: 'ringRadius', label: 'Ring Radius', type: 'range', min: 1, max: 20, step: 1, default: 7 },
    { name: 'waveSpeed', label: 'Wave Speed', type: 'range', min: 0.1, max: 2, step: 0.1, default: 0.4 },
    { name: 'waveAmplitude', label: 'Amplitude', type: 'range', min: 0.1, max: 5, step: 0.1, default: 1 },
    { name: 'particleSize', label: 'Particle Size', type: 'range', min: 0.5, max: 5, step: 0.5, default: 1.5 },
  ],

  Beams: [
    { name: 'beamWidth', label: 'Beam Width', type: 'range', min: 1, max: 10, step: 1, default: 3 },
    { name: 'beamHeight', label: 'Beam Height', type: 'range', min: 10, max: 100, step: 5, default: 30 },
    { name: 'beamNumber', label: 'Beam Count', type: 'range', min: 5, max: 50, step: 1, default: 15 },
    { name: 'speed', label: 'Speed', type: 'range', min: 0.5, max: 5, step: 0.5, default: 1.5 },
    { name: 'noiseIntensity', label: 'Noise', type: 'range', min: 0.5, max: 5, step: 0.5, default: 1.5 },
    { name: 'scale', label: 'Scale', type: 'range', min: 0.1, max: 1, step: 0.1, default: 0.2 },
    { name: 'rotation', label: 'Rotation', type: 'range', min: 0, max: 90, step: 5, default: 30 },
  ],

  BlurText: [
    { name: 'delay', label: 'Delay', type: 'range', min: 0, max: 500, step: 10, default: 150 },
    { name: 'animateBy', label: 'Animate By', type: 'select', options: ['words', 'characters'], default: 'words' },
    { name: 'direction', label: 'Direction', type: 'select', options: ['top', 'bottom'], default: 'top' },
  ],

  BorderGlow: [
    { name: 'edgeSensitivity', label: 'Sensitivity', type: 'range', min: 5, max: 100, step: 5, default: 30 },
    { name: 'borderRadius', label: 'Radius', type: 'range', min: 8, max: 48, step: 4, default: 24 },
    { name: 'glowRadius', label: 'Glow Radius', type: 'range', min: 10, max: 100, step: 5, default: 40 },
    { name: 'glowIntensity', label: 'Intensity', type: 'range', min: 0.1, max: 3, step: 0.1, default: 1 },
    { name: 'coneSpread', label: 'Cone Spread', type: 'range', min: 5, max: 60, step: 5, default: 25 },
  ],

  BounceCards: [
    { name: 'containerWidth', label: 'Width', type: 'range', min: 280, max: 700, step: 20, default: 520 },
    { name: 'containerHeight', label: 'Height', type: 'range', min: 180, max: 500, step: 20, default: 280 },
    { name: 'animationDelay', label: 'Delay', type: 'range', min: 0, max: 2, step: 0.1, default: 0.4 },
    { name: 'animationStagger', label: 'Stagger', type: 'range', min: 0, max: 0.5, step: 0.02, default: 0.06 },
    { name: 'enableHover', label: 'Hover', type: 'checkbox', default: true },
  ],

  CardSwap: [
    { name: 'width', label: 'Width', type: 'range', min: 200, max: 600, step: 20, default: 320 },
    { name: 'height', label: 'Height', type: 'range', min: 140, max: 400, step: 20, default: 220 },
    { name: 'cardDistance', label: 'Card Distance', type: 'range', min: 20, max: 200, step: 10, default: 70 },
    { name: 'verticalDistance', label: 'Vertical Dist', type: 'range', min: 20, max: 200, step: 10, default: 80 },
    { name: 'delay', label: 'Delay (ms)', type: 'range', min: 500, max: 10000, step: 500, default: 4000 },
    { name: 'pauseOnHover', label: 'Pause on Hover', type: 'checkbox', default: false },
    { name: 'skewAmount', label: 'Skew', type: 'range', min: 0, max: 20, step: 1, default: 8 },
  ],

  Carousel: [
    { name: 'baseWidth', label: 'Card Width', type: 'range', min: 150, max: 500, step: 10, default: 300 },
    { name: 'autoplayDelay', label: 'Autoplay Delay', type: 'range', min: 500, max: 8000, step: 500, default: 3000 },
    { name: 'autoplay', label: 'Autoplay', type: 'checkbox', default: true },
    { name: 'pauseOnHover', label: 'Pause on Hover', type: 'checkbox', default: true },
    { name: 'loop', label: 'Loop', type: 'checkbox', default: true },
  ],

  ClickSpark: [
    { name: 'sparkSize', label: 'Spark Size', type: 'range', min: 2, max: 30, step: 1, default: 8 },
    { name: 'sparkRadius', label: 'Spark Radius', type: 'range', min: 5, max: 60, step: 5, default: 25 },
    { name: 'sparkCount', label: 'Spark Count', type: 'range', min: 2, max: 20, step: 1, default: 6 },
    { name: 'duration', label: 'Duration', type: 'range', min: 100, max: 1000, step: 50, default: 400 },
  ],

  DotField: [
    { name: 'dotRadius', label: 'Dot Radius', type: 'range', min: 0.5, max: 5, step: 0.5, default: 1.5 },
    { name: 'dotSpacing', label: 'Spacing', type: 'range', min: 5, max: 40, step: 1, default: 14 },
    { name: 'bulgeStrength', label: 'Bulge', type: 'range', min: 10, max: 200, step: 5, default: 67 },
    { name: 'glowRadius', label: 'Glow', type: 'range', min: 4, max: 40, step: 2, default: 16 },
  ],

  DotGrid: [
    { name: 'dotSize', label: 'Dot Size', type: 'range', min: 3, max: 30, step: 1, default: 10 },
    { name: 'gap', label: 'Gap', type: 'range', min: 5, max: 40, step: 1, default: 15 },
  ],

  FadeContent: [
    { name: 'blur', label: 'Blur', type: 'checkbox', default: true },
    { name: 'duration', label: 'Duration', type: 'range', min: 200, max: 3000, step: 100, default: 1000 },
    { name: 'initialOpacity', label: 'Initial Opacity', type: 'range', min: 0, max: 1, step: 0.1, default: 0 },
  ],

  FuzzyText: [
    { name: 'baseIntensity', label: 'Base Intensity', type: 'range', min: 0, max: 1, step: 0.05, default: 0.15 },
    { name: 'hoverIntensity', label: 'Hover Intensity', type: 'range', min: 0, max: 1, step: 0.05, default: 0.4 },
    { name: 'enableHover', label: 'Enable Hover', type: 'checkbox', default: true },
  ],

  GhostCursor: [
    { name: 'trailLength', label: 'Trail Length', type: 'range', min: 5, max: 150, step: 5, default: 50 },
    { name: 'inertia', label: 'Inertia', type: 'range', min: 0, max: 1, step: 0.1, default: 0.5 },
    { name: 'bloomStrength', label: 'Bloom', type: 'range', min: 0, max: 0.5, step: 0.05, default: 0.1 },
  ],

  GlareHover: [
    { name: 'glareOpacity', label: 'Opacity', type: 'range', min: 0, max: 1, step: 0.1, default: 0.3 },
    { name: 'glareAngle', label: 'Angle', type: 'range', min: -90, max: 90, step: 5, default: -30 },
    { name: 'glareSize', label: 'Size', type: 'range', min: 50, max: 600, step: 50, default: 300 },
  ],

  GlitchText: [
    { name: 'speed', label: 'Speed', type: 'range', min: 0.1, max: 5, step: 0.1, default: 1 },
    { name: 'enableShadows', label: 'Shadows', type: 'checkbox', default: true },
    { name: 'enableOnHover', label: 'On Hover Only', type: 'checkbox', default: false },
  ],

  LaserFlow: [
    { name: 'flowSpeed', label: 'Flow Speed', type: 'range', min: 0.05, max: 1, step: 0.05, default: 0.35 },
    { name: 'wispDensity', label: 'Density', type: 'range', min: 0.5, max: 5, step: 0.5, default: 1 },
  ],

  Lightning: [
    { name: 'hue', label: 'Hue', type: 'range', min: 0, max: 360, step: 10, default: 220 },
    { name: 'xOffset', label: 'X Offset', type: 'range', min: -100, max: 100, step: 5, default: 0 },
    { name: 'speed', label: 'Speed', type: 'range', min: 0.1, max: 5, step: 0.1, default: 1 },
    { name: 'intensity', label: 'Intensity', type: 'range', min: 0.1, max: 3, step: 0.1, default: 1 },
    { name: 'size', label: 'Size', type: 'range', min: 0.1, max: 3, step: 0.1, default: 1 },
  ],

  MagicRings: [
    { name: 'ringCount', label: 'Ring Count', type: 'range', min: 2, max: 20, step: 1, default: 6 },
    { name: 'speed', label: 'Speed', type: 'range', min: 0.1, max: 5, step: 0.1, default: 1 },
  ],

  Magnet: [
    { name: 'padding', label: 'Padding', type: 'range', min: 20, max: 200, step: 10, default: 80 },
    { name: 'strength', label: 'Strength', type: 'range', min: 5, max: 80, step: 5, default: 25 },
  ],

  MagnetLines: [
    { name: 'rows', label: 'Rows', type: 'range', min: 3, max: 20, step: 1, default: 8 },
    { name: 'columns', label: 'Columns', type: 'range', min: 6, max: 30, step: 1, default: 14 },
  ],

  MetaBalls: [
    { name: 'speed', label: 'Speed', type: 'range', min: 0.05, max: 1, step: 0.05, default: 0.3 },
    { name: 'ballCount', label: 'Ball Count', type: 'range', min: 5, max: 40, step: 1, default: 15 },
    { name: 'enableMouseInteraction', label: 'Mouse Interact', type: 'checkbox', default: true },
  ],

  Noise: [
    { name: 'patternSize', label: 'Pattern Size', type: 'range', min: 50, max: 500, step: 10, default: 250 },
    { name: 'patternScaleX', label: 'Scale X', type: 'range', min: 0.5, max: 5, step: 0.5, default: 1.5 },
    { name: 'patternScaleY', label: 'Scale Y', type: 'range', min: 0.5, max: 5, step: 0.5, default: 1.5 },
    { name: 'patternAlpha', label: 'Alpha', type: 'range', min: 0.1, max: 5, step: 0.1, default: 1.5 },
  ],

  PixelTrail: [
    { name: 'gridSize', label: 'Grid Size', type: 'range', min: 10, max: 80, step: 5, default: 35 },
    { name: 'trailSize', label: 'Trail Size', type: 'range', min: 0.01, max: 0.5, step: 0.02, default: 0.08 },
    { name: 'maxAge', label: 'Max Age', type: 'range', min: 30, max: 500, step: 10, default: 180 },
  ],

  Plasma: [
    { name: 'speed', label: 'Speed', type: 'range', min: 0.1, max: 3, step: 0.1, default: 0.6 },
    { name: 'direction', label: 'Direction', type: 'select', options: ['forward', 'reverse'], default: 'forward' },
    { name: 'scale', label: 'Scale', type: 'range', min: 0.5, max: 3, step: 0.1, default: 1.1 },
    { name: 'opacity', label: 'Opacity', type: 'range', min: 0.1, max: 1, step: 0.1, default: 1 },
  ],

  Ribbons: [
    { name: 'baseThickness', label: 'Thickness', type: 'range', min: 5, max: 100, step: 5, default: 30 },
    { name: 'enableShaderEffect', label: 'Shader Effect', type: 'checkbox', default: false },
  ],

  ScrollReveal: [
    { name: 'baseOpacity', label: 'Opacity', type: 'range', min: 0, max: 1, step: 0.1, default: 0.1 },
    { name: 'enableBlur', label: 'Enable Blur', type: 'checkbox', default: true },
    { name: 'baseRotation', label: 'Rotation', type: 'range', min: 0, max: 20, step: 1, default: 3 },
    { name: 'blurStrength', label: 'Blur Strength', type: 'range', min: 1, max: 20, step: 1, default: 4 },
  ],

  ScrollStack: [
    { name: 'itemDistance', label: 'Item Distance', type: 'range', min: 30, max: 300, step: 10, default: 120 },
    { name: 'itemScale', label: 'Scale', type: 'range', min: 0.01, max: 0.15, step: 0.01, default: 0.04 },
    { name: 'itemStackDistance', label: 'Stack Dist', type: 'range', min: 5, max: 100, step: 5, default: 35 },
    { name: 'rotationAmount', label: 'Rotation', type: 'range', min: 0, max: 10, step: 1, default: 2 },
    { name: 'blurAmount', label: 'Blur', type: 'range', min: 0, max: 10, step: 1, default: 3 },
  ],

  ShapeBlur: [
    { name: 'variation', label: 'Variation', type: 'range', min: 0, max: 1, step: 0.05, default: 0 },
    { name: 'shapeSize', label: 'Shape Size', type: 'range', min: 0.5, max: 3, step: 0.1, default: 1.2 },
    { name: 'roundness', label: 'Roundness', type: 'range', min: 0, max: 1, step: 0.05, default: 0.4 },
  ],

  Shuffle: [
    { name: 'shuffleDirection', label: 'Direction', type: 'select', options: ['left', 'right', 'up', 'down'], default: 'right' },
    { name: 'duration', label: 'Duration', type: 'range', min: 0.1, max: 2, step: 0.05, default: 0.35 },
    { name: 'shuffleTimes', label: 'Shuffle Times', type: 'range', min: 1, max: 10, step: 1, default: 1 },
    { name: 'stagger', label: 'Stagger', type: 'range', min: 0, max: 0.2, step: 0.01, default: 0.03 },
  ],

  SideRays: [
    { name: 'speed', label: 'Speed', type: 'range', min: 0.5, max: 8, step: 0.5, default: 2.5 },
    { name: 'intensity', label: 'Intensity', type: 'range', min: 0.5, max: 5, step: 0.5, default: 2 },
  ],

  Silk: [
    { name: 'speed', label: 'Speed', type: 'range', min: 1, max: 20, step: 1, default: 5 },
    { name: 'scale', label: 'Scale', type: 'range', min: 0.5, max: 3, step: 0.1, default: 1 },
    { name: 'noiseIntensity', label: 'Noise', type: 'range', min: 0.5, max: 5, step: 0.5, default: 1.5 },
    { name: 'rotation', label: 'Rotation', type: 'range', min: 0, max: 360, step: 10, default: 0 },
  ],

  SplashCursor: [
    { name: 'SPLAT_FORCE', label: 'Splat Force', type: 'range', min: 1000, max: 20000, step: 500, default: 6000 },
    { name: 'COLOR_UPDATE_SPEED', label: 'Color Speed', type: 'range', min: 1, max: 30, step: 1, default: 10 },
    { name: 'RAINBOW_MODE', label: 'Rainbow', type: 'checkbox', default: true },
  ],

  Strands: [
    { name: 'count', label: 'Count', type: 'range', min: 1, max: 12, step: 1, default: 3 },
    { name: 'speed', label: 'Speed', type: 'range', min: 0.1, max: 3, step: 0.1, default: 0.5 },
    { name: 'amplitude', label: 'Amplitude', type: 'range', min: 0.1, max: 3, step: 0.1, default: 1 },
  ],

  TargetCursor: [
    { name: 'spinDuration', label: 'Spin Duration', type: 'range', min: 0.5, max: 8, step: 0.5, default: 2 },
    { name: 'hideDefaultCursor', label: 'Hide Cursor', type: 'checkbox', default: true },
    { name: 'parallaxOn', label: 'Parallax', type: 'checkbox', default: true },
  ],

  TextType: [
    { name: 'typingSpeed', label: 'Typing Speed', type: 'range', min: 10, max: 200, step: 10, default: 75 },
    { name: 'pauseDuration', label: 'Pause', type: 'range', min: 200, max: 5000, step: 200, default: 1500 },
    { name: 'showCursor', label: 'Show Cursor', type: 'checkbox', default: true },
  ],

  TrueFocus: [
    { name: 'manualMode', label: 'Manual Mode', type: 'checkbox', default: false },
    { name: 'blurAmount', label: 'Blur Amount', type: 'range', min: 1, max: 20, step: 1, default: 5 },
    { name: 'animationDuration', label: 'Animation Dur', type: 'range', min: 0.1, max: 3, step: 0.1, default: 0.5 },
    { name: 'pauseBetweenAnimations', label: 'Pause', type: 'range', min: 0, max: 5, step: 0.5, default: 1 },
  ],

  Waves: [
    { name: 'waveSpeedX', label: 'Speed X', type: 'range', min: 0, max: 0.1, step: 0.005, default: 0.02 },
    { name: 'waveSpeedY', label: 'Speed Y', type: 'range', min: 0, max: 0.05, step: 0.005, default: 0.01 },
    { name: 'waveAmpX', label: 'Amp X', type: 'range', min: 5, max: 100, step: 5, default: 40 },
    { name: 'waveAmpY', label: 'Amp Y', type: 'range', min: 5, max: 80, step: 5, default: 20 },
    { name: 'friction', label: 'Friction', type: 'range', min: 0.8, max: 1, step: 0.005, default: 0.9 },
    { name: 'tension', label: 'Tension', type: 'range', min: 0.001, max: 0.05, step: 0.002, default: 0.01 },
  ],

  Dither: [
    { name: 'disableAnimation', label: 'Animate', type: 'checkbox', default: false },
    { name: 'enableMouseInteraction', label: 'Mouse Interact', type: 'checkbox', default: true },
  ],

  LightRays: [
    { name: 'raysSpeed', label: 'Speed', type: 'range', min: 0.5, max: 5, step: 0.5, default: 1.5 },
    { name: 'lightHeight', label: 'Light Height', type: 'range', min: 0.1, max: 1, step: 0.1, default: 0.5 },
  ],

  CircularGallery: [
    { name: 'bend', label: 'Bend', type: 'range', min: 1, max: 8, step: 1, default: 3 },
    { name: 'borderRadius', label: 'Border Radius', type: 'range', min: 0, max: 0.2, step: 0.01, default: 0.05 },
    { name: 'scrollEase', label: 'Scroll Ease', type: 'range', min: 0.01, max: 0.5, step: 0.02, default: 0.1 },
  ],

  FallingText: [
    { name: 'gravity', label: 'Gravity', type: 'range', min: 0.1, max: 5, step: 0.1, default: 1.5 },
    { name: 'fontSize', label: 'Font Size', type: 'range', min: 0.8, max: 4, step: 0.1, default: 1 },
  ],

  CountUp: [
    { name: 'duration', label: 'Duration', type: 'range', min: 0.5, max: 10, step: 0.5, default: 2.5 },
  ],

  ShaderGradient: [
    { name: 'type', label: 'Type', type: 'select', options: ['plane', 'sphere', 'waterPlane'], default: 'plane' },
    { name: 'uSpeed', label: 'Speed', type: 'range', min: 0, max: 2, step: 0.1, default: 0.4 },
    { name: 'uStrength', label: 'Strength', type: 'range', min: 0, max: 1, step: 0.05, default: 0.2 },
    { name: 'uFrequency', label: 'Frequency', type: 'range', min: 0, max: 5, step: 0.1, default: 1.5 },
    { name: 'cDistance', label: 'Camera Distance', type: 'range', min: 1, max: 10, step: 0.1, default: 3.6 },
  ],

  LiquidLogo: [
    { name: 'patternScale', label: 'Pattern Scale', type: 'range', min: 1, max: 10, step: 0.1, default: 2 },
    { name: 'refraction', label: 'Refraction', type: 'range', min: 0, max: 0.06, step: 0.001, default: 0.015 },
    { name: 'edge', label: 'Edge', type: 'range', min: 0, max: 1, step: 0.01, default: 0.4 },
    { name: 'patternBlur', label: 'Pattern Blur', type: 'range', min: 0, max: 0.05, step: 0.001, default: 0.005 },
    { name: 'liquid', label: 'Liquify', type: 'range', min: 0, max: 1, step: 0.01, default: 0.07 },
    { name: 'speed', label: 'Speed', type: 'range', min: 0, max: 1, step: 0.01, default: 0.3 },
  ],
};
