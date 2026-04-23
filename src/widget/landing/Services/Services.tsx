import { DM_Sans } from "next/font/google";
import SectionTag from "@/shared/ui/SectionTag";
import {
  TbCircleHalf,
  TbCircles,
  TbLayoutGridFilled,
  TbMessages,
  TbCirclesFilled,
  TbSparkles,
} from "react-icons/tb";
import styles from "./Services.module.scss";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const ITEMS = [
  {
    Icon: TbCircleHalf,
    title: "Strategy & direction",
    desc: "Positioning, and clarity baked into every project.",
  },
  {
    Icon: TbCircles,
    title: "Motion & interaction",
    desc: "Subtle animations that elevate the user experience.",
  },
  {
    Icon: TbLayoutGridFilled,
    title: "Interface design",
    desc: "User-first interfaces that are functional, and intuitive.",
  },
  {
    Icon: TbMessages,
    title: "Web & product design",
    desc: "From landing pages to full products built to perform.",
  },
  {
    Icon: TbCirclesFilled,
    title: "Brand foundations",
    desc: "Everything you need to build with consistency.",
  },
  {
    Icon: TbSparkles,
    title: "Launch-ready delivery",
    desc: "All files, assets, and handoff included. Fully yours.",
  },
];

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionTag>What we do</SectionTag>
        <h2 className={styles.heading}>
          The way we
          <br />
          bring ideas to <em>life.</em>
        </h2>
        <p className={`${styles.sub} ${dmSans.className}`}>
          These are the principles that guide our
          <br />
          creative process and client relationships.
        </p>
      </div>

      <div className={styles.grid}>
        {ITEMS.map(({ Icon, title, desc }) => (
          <div key={title} className={styles.cell}>
            <Icon className={styles.icon} />
            <h3 className={styles.title}>{title}</h3>
            <p className={`${styles.desc} ${dmSans.className}`}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
