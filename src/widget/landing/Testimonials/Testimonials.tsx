import Button from "@/shared/ui/Button";
import SectionTag from "@/shared/ui/SectionTag";
import AnimatedHeading from "@/shared/ui/AnimatedHeading";
import AnimatedCards from "./AnimatedCards";
import { DM_Sans } from "next/font/google";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Testimonials.module.scss";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

const REVIEWS = [
  {
    name: "Marcus Reid",
    role: "Founder, Lumos Studio",
    gradient: "135deg, #8b5cf6, #3b82f6",
    quote: "Working with aiqonz was a game-changer",
    body: "for our rebrand. They delivered on time, on budget, and the result genuinely blew our team away.",
    stars: 5,
    date: "01/14/2025",
  },
  {
    name: "Priya Nair",
    role: "Head of Marketing, Vanta",
    gradient: "135deg, #f59e0b, #ef4444",
    quote: "This team doesn't just build websites",
    body: "they build experiences. Our conversion rate jumped 40% after the redesign. Incredible ROI.",
    stars: 5,
    date: "02/08/2025",
  },
  {
    name: "Jordan Okafor",
    role: "CEO, Drift Collective",
    gradient: "135deg, #10b981, #06b6d4",
    quote: "Fast, strategic, and genuinely creative",
    body: "aiqonz understood our brand immediately. The attention to detail is unmatched across agencies I've tried.",
    stars: 5,
    date: "03/22/2025",
  },
];

function Stars({ count, accent }: { count: number; accent?: boolean }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={accent ? styles.starAccent : styles.star}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <SectionTag>Testimonials</SectionTag>
          <AnimatedHeading className={styles.heading}>
            Chosen by 50+ growing
            <br />
            <em>brands worldwide.</em>
          </AnimatedHeading>
        </div>
        <Button href="#contact" size="md">
          Work With Us
        </Button>
      </div>

      <AnimatedCards className={styles.cards}>
        {REVIEWS.map((r) => (
          <div key={r.name} className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardTop}>
                <div className={styles.authorRow}>
                  <div
                    className={styles.avatar}
                    style={{ background: `linear-gradient(${r.gradient})` }}
                  />
                  <div>
                    <p className={styles.authorName}>{r.name}</p>
                    <p className={`${styles.authorRole} ${dmSans.className}`}>
                      {r.role}
                    </p>
                  </div>
                </div>
                <FaXTwitter className={styles.xIcon} />
              </div>

              <div className={styles.quoteWrap}>
                <p className={styles.quoteStrong}>&ldquo;{r.quote}</p>
                <p className={`${styles.quoteBody} ${dmSans.className}`}>
                  {r.body}&rdquo;
                </p>
              </div>

              <div className={styles.cardBottom}>
                <Stars count={r.stars} accent />
                <span className={`${styles.date} ${dmSans.className}`}>
                  {r.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </AnimatedCards>
    </section>
  );
}
