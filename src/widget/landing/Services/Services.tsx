import { DM_Sans } from "next/font/google";
import SectionTag from "@/shared/ui/SectionTag";
import AnimatedHeading from "@/shared/ui/AnimatedHeading";
import {
  TbPhoto,
  TbClick,
  TbLayoutDashboard,
  TbDeviceMobile,
  TbDiamond,
  TbRocket,
} from "react-icons/tb";
import styles from "./Services.module.scss";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const ITEMS = [
  {
    Icon: TbPhoto,
    title: "Fleet showcase",
    desc: "Beautiful gallery for your cars.",
  },
  {
    Icon: TbClick,
    title: "Booking requests",
    desc: "Clear CTA that converts visitors.",
  },
  {
    Icon: TbLayoutDashboard,
    title: "Admin panel",
    desc: "Manage your fleet without a developer.",
  },
  {
    Icon: TbDeviceMobile,
    title: "Mobile optimized",
    desc: "70% of bookings start on mobile.",
  },
  {
    Icon: TbDiamond,
    title: "Brand identity",
    desc: "Site that matches your premium fleet.",
  },
  {
    Icon: TbRocket,
    title: "7-day delivery",
    desc: "From brief to live in one week.",
  },
];

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionTag>What we do</SectionTag>
        <AnimatedHeading className={styles.heading}>
          The way we
          <br />
          bring ideas to <em>life.</em>
        </AnimatedHeading>
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
