import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { Syne } from "next/font/google";
import CTAButton from "@/shared/ui/CTAButton";
import SectionTag from "@/shared/ui/SectionTag";
import AnimatedHeading from "@/shared/ui/AnimatedHeading";
import styles from "./Pricing.module.scss";

const syne = Syne({ subsets: ["latin"], weight: ["600", "700", "800"] });

const MONTHLY_FEATURES = [
  "Custom design",
  "Fleet admin panel",
  "Booking form",
  "Mobile optimized",
  "7-day delivery",
  "Full ownership",
];

export default function Pricing() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionTag>Pricing</SectionTag>
        <AnimatedHeading className={`${styles.heading} ${syne.className}`}>
          One price. Everything <em>included.</em>
        </AnimatedHeading>
      </div>

      <div className={styles.top}>
        <div className={styles.leftCol}>
          <div className={styles.promoCard}>
            <p className={styles.promoText}>
              Premium websites for luxury car rental businesses. With fleet
              admin panel.
            </p>

            <div className={styles.founderRow}>
              <Image
                src="/assets/images/akbar.png"
                alt="Founder"
                width={100}
                height={100}
                className={styles.founderAvatar}
              />
              <div className={styles.founderInfo}>
                <span className={styles.founderName}>Akbar K.</span>
                <span className={styles.founderRole}>Founder of Aiqonz</span>
                <p className={styles.founderNote}>
                  I personally oversee every project.
                </p>
              </div>
            </div>
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
            <CTAButton size="md">Start a project</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
