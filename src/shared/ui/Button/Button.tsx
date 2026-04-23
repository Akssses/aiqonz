import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type AsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = AsButton | AsLink;

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const cls = clsx(styles.btn, styles[variant], styles[size], className);

  if ("href" in rest && rest.href) {
    const { href, target, rel } = rest as AsLink;
    return (
      <Link href={href} target={target} rel={rel} className={cls}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonRest } = rest as AsButton & { href?: never };
  return (
    <button className={cls} {...buttonRest}>
      {children}
    </button>
  );
}
