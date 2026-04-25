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
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.center}>
        <img
          className={styles.logo}
          src="/assets/images/logo.png"
          alt="Aiqonz Studio"
        />
        <AnimatedHeading as="h1" className={styles.heading}>
          Premium websites for <br /> car rental <em>businesses.</em>
          <br />
        </AnimatedHeading>

        <p className={styles.description}>
          Custom websites for car rental companies. Manage your fleet, take
          bookings, look premium. Ready in 7 days.
        </p>

        <div className={styles.ctas}>
          <CTAButton variant="secondary" size="lg">
            Start a project
          </CTAButton>
          <Button href="#work" variant="primary" size="lg">
            See concepts
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
