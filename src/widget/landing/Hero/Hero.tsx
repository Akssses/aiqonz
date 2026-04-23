import { FaPlay } from "react-icons/fa6";
import Button from "@/shared/ui/Button";
import styles from "./Hero.module.scss";

const STATS = [
  { label: "Delivery time", value: "7 Days" },
  { label: "Starting price", value: "$3,000" },
  { label: "Custom design", value: "100%" },
  { label: "Luxury niches", value: "10+" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.center}>
        <div className={styles.badge}>
          <span className={styles.badgeNew}>NEW</span>
          <span className={styles.badgeText}>No. 1 Studio of 2025</span>
        </div>

        <h1 className={styles.heading}>
          Your business is luxury.
          <br />
          Your website should be too.
        </h1>

        <p className={styles.description}>
          We build premium websites for luxury brands.
          <br />
          Delivered in 7 days.
        </p>

        <div className={styles.ctas}>
          <Button href="#contact" variant="secondary" size="lg">
            Get your free concept
          </Button>
          <Button href="#work" variant="primary" size="lg">
            See our work
          </Button>
        </div>
      </div>

      <div className={styles.videoWrap}>
        <button className={styles.playBtn} aria-label="Play reel">
          <FaPlay size={16} />
        </button>
      </div>

      <div className={styles.stats}>
        {STATS.map(({ label, value }) => (
          <div key={label} className={styles.statItem}>
            <span className={styles.statLabel}>{label}</span>
            <span className={styles.statValue}>{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
