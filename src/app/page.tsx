import Hero from "@/widget/landing/Hero/Hero";
import Work from "@/widget/landing/Work/Work";
import WhyUs from "@/widget/landing/WhyUs/WhyUs";
import Services from "@/widget/landing/Services/Services";
import Testimonials from "@/widget/landing/Testimonials/Testimonials";
import Pricing from "@/widget/landing/Pricing/Pricing";
import FAQ from "@/widget/landing/FAQ/FAQ";
import CTA from "@/widget/landing/CTA/CTA";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      {/* <div className={styles.heroBg} aria-hidden>
        <video
          src="/assets/video/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroBgVideo}
        />
        <div className={styles.heroBgOverlay} />
      </div> */}

      <div className={styles.sections}>
        <Hero />
        <WhyUs />
        <Services />
        <Work />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}
