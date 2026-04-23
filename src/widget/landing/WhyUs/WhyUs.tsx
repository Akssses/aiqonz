import Image from "next/image";
import { Syne, DM_Sans } from "next/font/google";
import Button from "@/shared/ui/Button";
import SectionTag from "@/shared/ui/SectionTag";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiFramer,
  SiVercel,
} from "react-icons/si";
import styles from "./WhyUs.module.scss";

const syne = Syne({ subsets: ["latin"], weight: ["600", "700", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const TOOLS = [
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiReact, label: "React" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiFigma, label: "Figma" },
  { Icon: SiFramer, label: "Framer" },
  { Icon: SiVercel, label: "Vercel" },
];

const BENEFITS = [
  "Tailored strategy",
  "Customer insights",
  "Market analysis",
  "Brand positioning",
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionTag>Why Brands Trust Us</SectionTag>
        <h2 className={`${styles.heading} ${syne.className}`}>
          How we deliver better
          <br />
          work that lasts
        </h2>
      </div>

      <div className={styles.grid}>
        {/* Card 1 — Fast Turnarounds (Video) */}
        <div className={`${styles.card} ${styles.videoCard}`}>
          <video
            src="/assets/video/speed.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={styles.cardVideo}
          />
          <div className={styles.videoOverlay} />
          <div className={styles.videoContent}>
            <h3 className={`${styles.videoTitle} ${syne.className}`}>
              Fast turnarounds
            </h3>
            <p className={`${styles.videoDesc} ${dmSans.className}`}>
              Timelines are very respected here. Expect quick handoffs, clear
              communication, and momentum that doesn&apos;t stall.
            </p>
          </div>
        </div>

        {/* Card 2 — Built with the Best */}
        <div className={`${styles.card} ${styles.builtCard}`}>
          <div className={styles.builtLeft}>
            <h3 className={`${styles.builtTitle} ${syne.className}`}>
              Built with the best
            </h3>
            <p className={`${styles.builtDesc} ${dmSans.className}`}>
              Access the latest tools, fully integrated and ready to go.
            </p>
          </div>
          <div className={styles.toolsGrid}>
            <div className={`${styles.toolsRow} ${styles.toolsRowCentered}`}>
              {TOOLS.slice(0, 3).map(({ Icon, label }) => (
                <div key={label} className={styles.toolIcon} title={label}>
                  <Icon />
                </div>
              ))}
            </div>
            <div className={styles.toolsRow}>
              {TOOLS.slice(3).map(({ Icon, label }) => (
                <div key={label} className={styles.toolIcon} title={label}>
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 — Our Place */}
        <div className={`${styles.card} ${styles.locationCard}`}>
          <Image
            src="/assets/images/ml.png"
            alt="Malaysia map"
            width={500}
            height={500}
            className={styles.locationMap}
          />
          <h3 className={`${styles.locationTitle} ${syne.className}`}>
            Based in Malaysia
          </h3>
        </div>

        {/* Card 4 — Quote */}
        <div className={`${styles.card} ${styles.ratingCard}`}>
          <span className={`${styles.quoteMark} ${syne.className}`}>
            &ldquo;
          </span>
          <p className={`${styles.quoteText} ${syne.className}`}>
            Most luxury brands lose clients before they even say hello — because
            of their website.
          </p>
        </div>

        {/* Card 5 — Strategic Solutions */}
        <div className={`${styles.card} ${styles.strategicCard}`}>
          <Image
            src="/assets/images/light.png"
            alt=""
            width={320}
            height={400}
            className={styles.strategicImg}
            aria-hidden
          />

          <div className={styles.strategicContent}>
            <h3 className={`${styles.strategicTitle} ${syne.className}`}>
              Strategic solutions
            </h3>
            <ul className={styles.benefitsList}>
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className={`${styles.benefitItem} ${dmSans.className}`}
                >
                  <span className={styles.benefitIcon}>✦</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className={styles.projectBtnWrapper}>
              <Button href="#work" variant="secondary" size="md">
                View All Works
              </Button>
            </div>
          </div>

          <p className={`${styles.strategicFootnote} ${dmSans.className}`}>
            © 2025 aiqonz creative studio
          </p>
        </div>
      </div>
    </section>
  );
}
