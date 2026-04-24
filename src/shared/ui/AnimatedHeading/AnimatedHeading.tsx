'use client';

import {
  CSSProperties,
  ReactNode,
  ReactElement,
  isValidElement,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './AnimatedHeading.module.scss';

type Tag = 'h1' | 'h2' | 'h3';

interface Props {
  as?: Tag;
  className?: string;
  children: ReactNode;
}

// keyIdx  — unique key for every React element in the tree
// wordIdx — index used for CSS --i stagger (only increments for animated words)
function wrap(
  node: ReactNode,
  keyIdx: { n: number },
  wordIdx: { n: number },
): ReactNode {
  if (node == null || typeof node === 'boolean' || typeof node === 'number') return node;

  if (typeof node === 'string') {
    if (!node.trim()) return node;
    return node.split(/(\s+)/).map((part) => {
      if (!part || /^\s+$/.test(part)) return part || null;
      const wi = wordIdx.n++;
      return (
        <span key={keyIdx.n++} className={styles.word} style={{ '--i': wi } as CSSProperties}>
          {part}
        </span>
      );
    });
  }

  if (Array.isArray(node)) {
    return node.map((child) => wrap(child, keyIdx, wordIdx));
  }

  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;

    if (el.type === 'br') {
      return cloneElement(node as ReactElement, { key: `br${keyIdx.n++}` });
    }

    if (el.type === 'span') {
      return cloneElement(
        el,
        { key: `sp${keyIdx.n++}` },
        wrap(el.props.children, keyIdx, wordIdx),
      );
    }

    // em and other inline elements — animate as one word unit
    const wi = wordIdx.n++;
    return (
      <span key={keyIdx.n++} className={styles.word} style={{ '--i': wi } as CSSProperties}>
        {node}
      </span>
    );
  }

  return node;
}

export default function AnimatedHeading({ as: Tag = 'h2', className = '', children }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
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

  const Heading = Tag as 'h2';
  const cls = `${className} ${mounted && inView ? styles.visible : ''}`.trim();

  return (
    <Heading ref={ref} className={cls}>
      {mounted ? wrap(children, { n: 0 }, { n: 0 }) : children}
    </Heading>
  );
}
