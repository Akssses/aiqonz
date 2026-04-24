import { FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import styles from "./Footer.module.scss";
import NewsletterForm from "./NewsletterForm";
import BrandText from "./BrandText";

const AGENCY_LINKS = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

const INFO_LINKS = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Created with <em>care</em>
          </h2>
          <p className={styles.description}>
            Get the latest in tech and design straight to your inbox.
          </p>
          <NewsletterForm />
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.navGroup}>
            <span className={styles.navTitle}>Agency</span>
            <ul className={styles.navList}>
              {AGENCY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.navLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.navGroup}>
            <span className={styles.navTitle}>Information</span>
            <ul className={styles.navList}>
              {INFO_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.navLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <p className={styles.copy}>Copyright © Design by @aqbaarrz</p>
      </div>

      <BrandText />
    </footer>
  );
}
