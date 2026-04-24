import { FaPlay } from "react-icons/fa6";
import Button from "@/shared/ui/Button";
import CTAButton from "@/shared/ui/CTAButton";
import AnimatedHeading from "@/shared/ui/AnimatedHeading";
import AnimatedStats from "./AnimatedStats";
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
        <AnimatedHeading as="h1" className={styles.heading}>
          Your business is <em>luxury.</em>
          <br />
          Your website should be too.
        </AnimatedHeading>

        <p className={styles.description}>
          We build premium websites for luxury brands.
          <br />
          Delivered in 7 days.
        </p>

        <div className={styles.ctas}>
          <CTAButton variant="secondary" size="lg">
            Start a project
          </CTAButton>
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

      <AnimatedStats stats={STATS} />
    </section>
  );
}
