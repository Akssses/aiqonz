'use client';

import clsx from 'clsx';
import styles from '@/shared/ui/Button/Button.module.scss';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface CTAButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
}: CTAButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new Event('contact:open'));
  };

  return (
    <button
      className={clsx(styles.btn, styles[variant], styles[size], className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
