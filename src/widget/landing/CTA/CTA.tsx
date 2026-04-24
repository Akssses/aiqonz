import CTAButton from "@/shared/ui/CTAButton";
import AnimatedHeading from "@/shared/ui/AnimatedHeading";
import styles from "./CTA.module.scss";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.glow} aria-hidden />

        <div className={styles.content}>
          <AnimatedHeading className={styles.title}>
            Ready to see your
            <br />
            brand <em>elevated?</em>
          </AnimatedHeading>

          <p className={styles.lead}>
            Tell us about your brand and goals. We'll get back to you within a
            few hours — no calls, just real conversation.
          </p>

          <CTAButton variant="primary" size="lg" className={styles.btn}>
            Start a project
          </CTAButton>

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
