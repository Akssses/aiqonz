import Button from "@/shared/ui/Button";
import SectionTag from "@/shared/ui/SectionTag";
import styles from "./Work.module.scss";

const CASES = [
  { title: "Flow state", duration: "10 Weeks", tags: "Framer, Figma" },
  { title: "Swift track", duration: "12 Weeks", tags: "Figma, Notion" },
  { title: "Design base", duration: "14 Weeks", tags: "Spline, Canva" },
  { title: "Archi flow", duration: "16 Weeks", tags: "Framer, Spline" },
];

export default function Work() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <SectionTag>Work</SectionTag>
          <h2 className={styles.heading}>
            Highlights from our
            <br />
            most recent <em>work.</em>
          </h2>
        </div>
        <Button href="#work" size="md">
          View all
        </Button>
      </div>

      <div className={styles.grid}>
        {CASES.map(({ title, duration, tags }) => (
          <article key={title} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.duration}>{duration}</span>
              <span className={styles.tags}>{tags}</span>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
