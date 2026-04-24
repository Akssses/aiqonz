'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.scss';

interface Stat {
  label: string;
  value: string;
}

interface Parsed {
  prefix: string;
  num: number;
  suffix: string;
  comma: boolean;
}

function parse(value: string): Parsed {
  const m = value.match(/^([^0-9]*)([0-9][0-9,]*)([^0-9]*)$/);
  if (!m) return { prefix: '', num: 0, suffix: value, comma: false };
  const [, prefix, numStr, suffix] = m;
  return {
    prefix,
    num: parseInt(numStr.replace(/,/g, ''), 10),
    suffix,
    comma: numStr.includes(','),
  };
}

function fmt(n: number, comma: boolean): string {
  return comma ? n.toLocaleString('en-US') : String(n);
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedStats({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const parsed = stats.map((s) => parse(s.value));
  const [counts, setCounts] = useState<number[]>(parsed.map(() => 0));
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setActive(e.isIntersecting),
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) {
      setCounts(parsed.map(() => 0));
      return;
    }

    const duration = 1800;
    let start: number | null = null;
    let raf: number;

    function tick(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = easeOut(progress);
      setCounts(parsed.map((p) => Math.round(eased * p.num)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div ref={ref} className={styles.stats}>
      {stats.map(({ label }, i) => (
        <div key={label} className={styles.statItem}>
          <span className={styles.statLabel}>{label}</span>
          <span className={styles.statValue}>
            {parsed[i].prefix}{fmt(counts[i], parsed[i].comma)}{parsed[i].suffix}
          </span>
        </div>
      ))}
    </div>
  );
}
