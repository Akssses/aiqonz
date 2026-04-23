import styles from "./SectionTag.module.scss";

export default function SectionTag({ children }: { children: React.ReactNode }) {
  return <span className={styles.tag}>{children}</span>;
}
