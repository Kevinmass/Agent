import { lazy, Suspense } from 'react';

const Aurora = lazy(() => import('../components/Aurora/Aurora.jsx'));
const GradientText = lazy(() => import('../components/GradientText/GradientText.jsx'));
const RotatingText = lazy(() => import('../components/RotatingText/RotatingText.jsx'));
const StaggeredMenu = lazy(() => import('../components/StaggeredMenu/StaggeredMenu.jsx'));
const MagicBento = lazy(() => import('../components/MagicBento/MagicBento.jsx'));
const SpotlightCard = lazy(() => import('../components/SpotlightCard/SpotlightCard.jsx'));
const TiltedCard = lazy(() => import('../components/TiltedCard/TiltedCard.jsx'));
const Ribbons = lazy(() => import('../components/Ribbons/Ribbons.jsx'));
const Beams = lazy(() => import('../components/Beams/Beams.jsx'));
const DotField = lazy(() => import('../components/DotField/DotField.jsx'));
const SplashCursor = lazy(() => import('../components/SplashCursor/SplashCursor.jsx'));
const FloatingLines = lazy(() => import('../components/FloatingLines/FloatingLines.jsx'));
const DecryptedText = lazy(() => import('../components/Decrypted/Decrypted.jsx'));
const CountUp = lazy(() => import('../components/CountUp/CountUp.jsx'));
const ImageTrail = lazy(() => import('../components/ImageTrail/ImageTrail.jsx'));
const BlobCursor = lazy(() => import('../components/BlobCursor/BlobCursor.jsx'));
const Ferrofluid = lazy(() => import('../components/Ferrofluid/Ferrofluid.jsx'));
const Galaxy = lazy(() => import('../components/Galaxy/Galaxy.jsx'));
const Particles = lazy(() => import('../components/Particles/Particles.jsx'));

export default function Landing({ onEnterShowcase }) {
  const demoMenuItems = [
    { label: 'Overview', ariaLabel: 'Overview section', link: '#overview' },
    { label: 'Stats', ariaLabel: 'Stats section', link: '#stats' },
    { label: 'Interactive', ariaLabel: 'Interactive demos', link: '#interactive' },
    { label: 'Gallery', ariaLabel: 'Gallery section', link: '#gallery' },
    { label: 'Showcase', ariaLabel: 'Browse all components', link: '#showcase' },
  ];

  const featureItems = [
    { title: 'Ready to Copy', description: 'Self-contained components. Copy the source directly into your project.', color: '#6c5ce7' },
    { title: 'Zero Config', description: 'No complex build setup. Import and use instantly.', color: '#00cec9' },
    { title: 'Highly Customizable', description: 'Rich prop APIs for every component.', color: '#ff6b6b' },
  ];

  return (
    <div className="landing">
      <Suspense fallback={null}>
        <StaggeredMenu
          position="right"
          items={demoMenuItems}
          socialItems={[
            { label: 'GitHub', link: 'https://github.com' },
            { label: 'Docs', link: '#' },
          ]}
          displaySocials={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#6c5ce7', '#00cec9']}
          accentColor="#ff6b6b"
          isFixed={true}
        />
      </Suspense>

      <Suspense fallback={null}>
        <BlobCursor blobType="circle" fillColor="#6c5ce7" trailCount={3} sizes={[60, 100, 70]} innerSizes={[20, 30, 22]} />
      </Suspense>

      <Suspense fallback={null}>
        <SplashCursor />
      </Suspense>

      <section className="landing-hero" id="overview">
        <div className="landing-hero-bg">
          <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#050510' }} />}>
            <Aurora colorStops={["#3A29FF", "#FF4BDB", "#FF8C5A"]} speed={0.3} />
          </Suspense>
        </div>
        <div className="landing-hero-content">
          <Suspense fallback={<h1 className="landing-title">Design Pattern Library</h1>}>
            <GradientText colors={["#f0f0f5", "#6c5ce7", "#00cec9", "#f0f0f5"]}>
              <h1 className="landing-title">Design Pattern Library</h1>
            </GradientText>
          </Suspense>
          <Suspense fallback={<p className="landing-subtitle">Animations · Components · Backgrounds</p>}>
            <RotatingText
              texts={['Animations · Components · Backgrounds · Text', 'Copy-Paste Components', 'Built with React & Three.js', 'Open Source Design Patterns']}
              mainClassName="landing-subtitle"
              staggerDuration={0.03}
              staggerFrom="last"
              rotationInterval={3000}
              splitBy="characters"
              splitLevel={10}
              elementLevel={20}
            />
          </Suspense>
          <button className="landing-cta" onClick={onEnterShowcase}>
            Browse Showcase →
          </button>
        </div>
      </section>

      <section className="landing-section" style={{ padding: 0, position: 'relative', height: 420, overflow: 'hidden' }}>
        <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#080818' }} />}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Particles
              particleColors={['#6c5ce7', '#00cec9', '#ff6b6b']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticleOnHover={true}
              alphaParticle={true}
              disableRotation={false}
            />
          </div>
        </Suspense>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <h2 className="landing-section-title" style={{ margin: 0, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            <Suspense fallback="Explore the Library">
              <DecryptedText text="Explore the Library" speed={100} maxIterations={20} />
            </Suspense>
          </h2>
        </div>
      </section>

      <section className="landing-section" id="features">
        <h2 className="landing-section-title">What's Inside</h2>
        <p className="landing-section-sub">124 curated React components spanning every UI category</p>
        <div className="landing-bento">
          <Suspense fallback={<div style={{ height: 400 }} />}>
            <MagicBento />
          </Suspense>
        </div>
      </section>

      <section className="landing-section" style={{ paddingTop: 0 }}>
        <div className="landing-features">
          {featureItems.map((item, i) => (
            <Suspense key={i} fallback={
              <div style={{ height: 220, background: 'rgba(255,255,255,0.02)', borderRadius: 20, padding: '2rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ color: item.color, margin: '0 0 0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#888', margin: 0, fontSize: '0.9rem' }}>{item.description}</p>
              </div>
            }>
              <SpotlightCard spotlightColor={`${item.color}20`} style={{ height: '100%' }}>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ color: item.color, margin: '0 0 0.5rem', fontSize: '1.2rem' }}>{item.title}</h3>
                  <p style={{ color: '#8888aa', margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              </SpotlightCard>
            </Suspense>
          ))}
        </div>
      </section>

      <section id="stats" className="landing-section" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <Suspense fallback={null}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
            <DotField
              glowColor="rgba(108,92,231,0.1)"
            />
          </div>
        </Suspense>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="landing-section-title">By the Numbers</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <div>
              <div style={{ fontSize: '3.5rem', fontWeight: 700, color: '#6c5ce7' }}>
                <Suspense fallback="124"><CountUp from={0} to={124} duration={2.5} /></Suspense>
              </div>
              <p style={{ color: '#888', fontSize: '0.9rem', margin: '0.5rem 0 0' }}>Components</p>
            </div>
            <div>
              <div style={{ fontSize: '3.5rem', fontWeight: 700, color: '#00cec9' }}>
                <Suspense fallback="7"><CountUp from={0} to={7} duration={2} /></Suspense>
              </div>
              <p style={{ color: '#888', fontSize: '0.9rem', margin: '0.5rem 0 0' }}>Categories</p>
            </div>
            <div>
              <div style={{ fontSize: '3.5rem', fontWeight: 700, color: '#ff6b6b' }}>
                <Suspense fallback="50"><CountUp from={0} to={50} duration={2} /></Suspense>
              </div>
              <p style={{ color: '#888', fontSize: '0.9rem', margin: '0.5rem 0 0' }}>Background Effects</p>
            </div>
          </div>
        </div>
      </section>

      <section id="interactive" className="landing-section" style={{ position: 'relative', overflow: 'hidden', minHeight: 500 }}>
        <h2 className="landing-section-title">Interactive Demos</h2>
        <p className="landing-section-sub">Try these interactive components right on the landing page</p>
        <Suspense fallback={null}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 20, overflow: 'hidden', margin: '1rem' }}>
            <Ferrofluid
              cursorColor="#6c5ce7"
              contourColor="#00cec9"
              bgColor="#050510"
              fluidColor="#6c5ce7"
            />
          </div>
        </Suspense>
        <div style={{ position: 'relative', zIndex: 1, padding: '2rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: 400, height: 420 }}>
          </div>
        </div>
      </section>

      <section style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
        <Suspense fallback={null}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Galaxy />
          </div>
        </Suspense>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>
            Endless Possibilities
          </h2>
        </div>
      </section>

      <section className="landing-section" id="gallery">
        <h2 className="landing-section-title">Capabilities</h2>
        <p className="landing-section-sub">From 3D WebGL to physics-based animations</p>
        <Suspense fallback={
          <div className="landing-gallery">
            {[1, 2, 3].map(i => <div key={i} style={{ height: 300, background: 'rgba(255,255,255,0.02)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)' }} />)}
          </div>
        }>
          <ImageTrail
            items={[
              '/1.png',
              '/2.png',
              '/3.png',
              '/4.png',
              '/5.png',
              '/6.png',
            ]}
            variant={2}
          />
        </Suspense>
      </section>

      <section style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
        <Suspense fallback={null}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <FloatingLines />
          </div>
        </Suspense>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 500, letterSpacing: '-0.02em', margin: 0, opacity: 0.8 }}>
            Ready to build something amazing?
          </h2>
          <button className="landing-cta" onClick={onEnterShowcase}>
            Browse Showcase →
          </button>
        </div>
      </section>

      <footer className="landing-footer">
        <Suspense fallback={null}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.3 }}>
            <Beams beamWidth={2} beamHeight={60} beamNumber={30} lightColor="#6c5ce7" speed={1.5} noiseIntensity={1} scale={0.3} rotation={0} />
          </div>
        </Suspense>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ margin: '0 0 0.25rem' }}>Design Pattern Library &copy; 2026</p>
          <p style={{ margin: 0, opacity: 0.5 }}>Powered by ReactBits &mdash; 124 components</p>
        </div>
      </footer>

      <Suspense fallback={null}>
        <Ribbons />
      </Suspense>
    </div>
  );
}
