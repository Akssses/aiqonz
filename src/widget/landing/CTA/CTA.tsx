import Button from "@/shared/ui/Button";
import styles from "./CTA.module.scss";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.glow} aria-hidden />

        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to see your
            <br />
            brand elevated?
          </h2>

          <p className={styles.lead}>
            We&apos;ll build a free concept for your website — no calls, no
            commitments. Just see what your brand could look like.
          </p>

          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className={styles.btn}
          >
            Get your free concept
          </Button>

          <div className={styles.tagsRow}>
            <ul className={styles.tagsCluster}>
              <li
                className={`${styles.tag} ${styles.tagDark} ${styles.tagTiltLeft}`}
              >
                Done in 7 days
              </li>
              <li
                className={`${styles.tag} ${styles.tagAccent} ${styles.tagFlatLeft}`}
              >
                Luxury brands
              </li>
            </ul>

            <ul className={styles.tagsCluster}>
              <li
                className={`${styles.tag} ${styles.tagDark} ${styles.tagTiltRightHigh}`}
              >
                Custom design
              </li>
              <li
                className={`${styles.tag} ${styles.tagDark} ${styles.tagTiltRight}`}
              >
                Fixed price
              </li>
              <li
                className={`${styles.tag} ${styles.tagAccent} ${styles.tagFlatRight}`}
              >
                No hidden fees
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
