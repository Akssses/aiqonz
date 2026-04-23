import Button from "@/shared/ui/Button";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <a href="/" className={styles.logo}>
        aiqonz
      </a>

      <Button href="#contact" size="md">
        Let&apos;s talk
      </Button>
    </header>
  );
}
