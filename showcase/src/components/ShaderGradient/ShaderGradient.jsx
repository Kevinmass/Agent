import { ShaderGradientCanvas, ShaderGradient as SG } from '@shadergradient/react'

const ShaderGradientComponent = ({
  type = 'plane',
  animate = 'on',
  uSpeed = 0.4,
  uStrength = 0.2,
  uFrequency = 1.5,
  uDensity = 1.5,
  uAmplitude = 0,
  color1 = '#ff6b6b',
  color2 = '#4ecdc4',
  color3 = '#45b7d1',
  cDistance = 3.6,
  cPolarAngle = 90,
  cAzimuthAngle = 0,
  brightness = 1,
  lightType = '3d',
  grain = 'off',
  reflection = 0,
  wireframe = false,
}) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: 16 }}>
      <ShaderGradientCanvas
        style={{ width: '100%', height: '100%' }}
        pixelDensity={1}
        fov={45}
        pointerEvents="none"
      >
        <SG
          type={type}
          animate={animate}
          uSpeed={uSpeed}
          uStrength={uStrength}
          uFrequency={uFrequency}
          uDensity={uDensity}
          uAmplitude={uAmplitude}
          color1={color1}
          color2={color2}
          color3={color3}
          cDistance={cDistance}
          cPolarAngle={cPolarAngle}
          cAzimuthAngle={cAzimuthAngle}
          brightness={brightness}
          lightType={lightType}
          grain={grain}
          reflection={reflection}
          wireframe={wireframe}
        />
      </ShaderGradientCanvas>
    </div>
  )
}

export default ShaderGradientComponent
