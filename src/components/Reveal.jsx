import { useEffect, useRef } from 'react';

const Reveal = ({ as: Component = 'div', children, className = '', delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      node?.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty('--reveal-delay', `${delay}s`);
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay]);

  const classes = ['reveal', className].filter(Boolean).join(' ');

  return (
    <Component ref={ref} className={classes}>
      {children}
    </Component>
  );
};

export default Reveal;
