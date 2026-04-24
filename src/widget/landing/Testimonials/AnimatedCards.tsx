'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from './Testimonials.module.scss';

export default function AnimatedCards({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = [
    className,
    mounted ? styles.cardsReady : '',
    mounted && inView ? styles.cardsVisible : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
