import CTAButton from "@/shared/ui/CTAButton";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <a href="/" className={styles.logo}>
        aiqonz
      </a>

      <CTAButton size="md">Start a project</CTAButton>
    </header>
  );
}
