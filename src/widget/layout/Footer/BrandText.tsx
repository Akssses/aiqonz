'use client';

import { useEffect, useRef, useState, CSSProperties } from 'react';
import styles from './BrandText.module.scss';

const LETTERS = 'aiqonz'.split('');

export default function BrandText() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.brand} ${mounted && inView ? styles.visible : ''}`}>
      {LETTERS.map((letter, i) => (
        <span
          key={i}
          className={styles.letter}
          style={{ '--i': i } as CSSProperties}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
