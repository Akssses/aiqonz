import { FiCheck } from "react-icons/fi";
import { Syne } from "next/font/google";
import Button from "@/shared/ui/Button";
import SectionTag from "@/shared/ui/SectionTag";
import styles from "./Pricing.module.scss";

const syne = Syne({ subsets: ["latin"], weight: ["600", "700", "800"] });

const MONTHLY_FEATURES = [
  "Custom design — no templates",
  "7-day delivery",
  "Mobile optimized",
  "Full ownership",
  "2 revision rounds",
  "Handed over ready to launch",
];

export default function Pricing() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionTag>Pricing</SectionTag>
        <h2 className={`${styles.heading} ${syne.className}`}>
          One price. Everything included.
        </h2>
      </div>

      <div className={styles.top}>
        <div className={styles.leftCol}>
          <div className={styles.promoCard}>
            <p className={styles.promoText}>
              Premium websites for luxury brands.
              <br />
              Delivered in 7 days.
            </p>
          </div>
        </div>

        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <h2 className={styles.planTitle}>Premium Website Package</h2>
            <p className={styles.planDesc}>
              Everything your luxury brand needs. One flat price. No surprises
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.priceRow}>
            <span className={styles.price}>$3,000</span>
            <span className={styles.pricePer}>&nbsp;/ per project</span>
          </div>

          <ul className={styles.featureGrid}>
            {MONTHLY_FEATURES.map((f) => (
              <li key={f} className={styles.featureItem}>
                <FiCheck className={styles.check} />
                {f}
              </li>
            ))}
          </ul>

          <div className={styles.planActions}>
            <Button href="#contact" size="md">
              Get your free concept
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
