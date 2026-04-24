'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from './Work.module.scss';

export default function AnimatedGrid({
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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = [
    className,
    mounted ? styles.gridReady : '',
    mounted && inView ? styles.gridVisible : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
