import { useRef, useEffect } from 'react';
import { animate, createScope, splitText, stagger } from 'animejs';

const AnimeText = ({
  text = '',
  splitBy = 'chars',
  direction = 'up',
  staggerDelay = 40,
  duration = 800,
  delay = 0,
  ease = 'inOut(3)',
  loop = false,
  className = '',
  style,
}) => {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el || !text) return;

    const scope = createScope({ root: el });

    scope.add(() => {
      const split = splitText(el, {
        [splitBy]: true,
      });

      const targets = split[splitBy];

      if (!targets || targets.length === 0) return;

      const yVal = direction === 'up' ? '40%' : '-40%';

      animate(targets, {
        opacity: [0, 1],
        y: [yVal, '0%'],
        duration,
        delay: stagger(staggerDelay),
        ease,
        loop,
      });
    });

    return () => scope.revert();
  }, [text, splitBy, direction, staggerDelay, duration, delay, ease, loop]);

  return (
    <div ref={root} className={className} style={style}>
      {text}
    </div>
  );
};

export default AnimeText;
