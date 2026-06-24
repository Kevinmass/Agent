import { useRef, useEffect } from 'react';
import { animate, createScope, spring, createDraggable } from 'animejs';

const AnimeSpring = ({
  children,
  bounce = 0.5,
  stiffness = 200,
  damping = 20,
  mass = 1,
  draggable = true,
  scaleOnHover = 1.08,
  className = '',
  style,
}) => {
  const root = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const scope = createScope({ root: root.current });

    scope.add(() => {
      const springEase = spring({ bounce, stiffness, damping, mass });

      animate(el, {
        scale: {
          from: scaleOnHover,
          to: 1,
          ease: springEase,
          duration: 400,
        },
        loop: true,
        alternate: true,
        autoplay: false,
      });

      el.addEventListener('mouseenter', () => {
        animate(el, {
          scale: scaleOnHover,
          ease: springEase,
          duration: 400,
        });
      });

      el.addEventListener('mouseleave', () => {
        animate(el, {
          scale: 1,
          ease: springEase,
          duration: 400,
        });
      });

      if (draggable) {
        createDraggable(el, {
          releaseEase: springEase,
        });
      }
    });

    return () => scope.revert();
  }, [bounce, stiffness, damping, mass, draggable, scaleOnHover]);

  return (
    <div ref={root} className={className} style={style}>
      <div ref={cardRef} style={{ display: 'inline-block', cursor: draggable ? 'grab' : 'pointer' }}>
        {children}
      </div>
    </div>
  );
};

export default AnimeSpring;
