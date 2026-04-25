import Button from "@/shared/ui/Button";
import SectionTag from "@/shared/ui/SectionTag";
import AnimatedHeading from "@/shared/ui/AnimatedHeading";
import AnimatedGrid from "./AnimatedGrid";
import styles from "./Work.module.scss";

const CASES = [
  { title: "Flow state", duration: "10 Weeks", tags: "Framer, Figma" },
  { title: "Swift track", duration: "12 Weeks", tags: "Figma, Notion" },
  { title: "Design base", duration: "14 Weeks", tags: "Spline, Canva" },
];

export default function Work() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <SectionTag>Work</SectionTag>
          <AnimatedHeading className={styles.heading}>
            Car rental concepts we've <em>built.</em>
          </AnimatedHeading>
        </div>
        <Button href="#work" size="md">
          View all
        </Button>
      </div>

      <AnimatedGrid className={styles.grid}>
        {CASES.map(({ title, duration, tags }) => (
          <article key={title} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.duration}>{duration}</span>
              <span className={styles.tags}>{tags}</span>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
          </article>
        ))}
      </AnimatedGrid>
    </section>
  );
}
