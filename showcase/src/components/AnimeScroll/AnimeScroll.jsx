import { useRef, useEffect } from 'react';
import { animate, createScope, onScroll } from 'animejs';

const AnimeScroll = ({
  children,
  threshold = 0.2,
  axis = 'y',
  fromOpacity = 0,
  fromY = 60,
  duration = 1500,
  ease = 'out(4)',
  className = '',
  style,
}) => {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const scope = createScope({ root: el });

    scope.add(() => {
      animate(el, {
        opacity: [fromOpacity, 1],
        y: [fromY, 0],
        duration,
        ease,
        autoplay: onScroll({
          target: el,
          axis,
          debug: false,
          thresholds: {
            el: [threshold],
          },
          sync: 'smooth',
        }),
      });
    });

    return () => scope.revert();
  }, [threshold, axis, fromOpacity, fromY, duration, ease]);

  return (
    <div
      ref={root}
      className={className}
      style={{
        opacity: fromOpacity,
        transform: `translateY(${fromY}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default AnimeScroll;
