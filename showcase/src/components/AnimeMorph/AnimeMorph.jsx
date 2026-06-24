import { useRef, useEffect } from 'react';
import { animate, svg, utils } from 'animejs';

const DEFAULT_SHAPES = [
  'M 50 5 L 95 35 L 80 90 L 20 90 L 5 35 Z',
  'M 50 5 C 80 5 95 30 95 50 C 95 70 80 95 50 95 C 20 95 5 70 5 50 C 5 30 20 5 50 5 Z',
  'M 50 5 L 95 50 L 50 95 L 5 50 Z',
  'M 50 5 Q 95 5 95 50 Q 95 95 50 95 Q 5 95 5 50 Q 5 5 50 5 Z',
];

const AnimeMorph = ({
  shapes = DEFAULT_SHAPES,
  duration = 1200,
  ease = 'inOutCirc',
  autoplay = true,
  loop = true,
  width = 200,
  height = 200,
  viewBox = '0 0 100 100',
  strokeColor = 'currentColor',
  fillColor = 'none',
  strokeWidth = 2,
  className = '',
  style,
}) => {
  const root = useRef(null);
  const pathRef = useRef(null);
  const hiddenRef = useRef(null);
  const indexRef = useRef(0);
  const busyRef = useRef(false);

  useEffect(() => {
    if (!autoplay || shapes.length < 2) return;

    const morph = () => {
      const targetPath = pathRef.current;
      const hiddenPath = hiddenRef.current;
      if (!targetPath || !hiddenPath || busyRef.current) return;

      const nextIndex = (indexRef.current + 1) % shapes.length;
      const nextShape = shapes[nextIndex];

      utils.set(hiddenPath, { d: nextShape });
      busyRef.current = true;
      animate(targetPath, {
        d: svg.morphTo(hiddenPath),
        duration,
        ease,
        onComplete: () => {
          busyRef.current = false;
          indexRef.current = nextIndex;
        },
      });
    };

    if (loop) {
      const interval = setInterval(morph, duration + 500);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(morph, 500);
      return () => clearTimeout(timeout);
    }
  }, [autoplay, loop, shapes, duration, ease]);

  return (
    <div ref={root} className={className} style={style}>
      <svg width={width} height={height} viewBox={viewBox}>
        <path
          ref={pathRef}
          d={shapes[0]}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
        <path
          ref={hiddenRef}
          d={shapes[1] || shapes[0]}
          style={{ display: 'none' }}
        />
      </svg>
    </div>
  );
};

export default AnimeMorph;
