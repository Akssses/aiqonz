import type { Metadata } from "next";
import Hero from "@/widget/landing/Hero/Hero";
import Work from "@/widget/landing/Work/Work";
import WhyUs from "@/widget/landing/WhyUs/WhyUs";
import Services from "@/widget/landing/Services/Services";
import Testimonials from "@/widget/landing/Testimonials/Testimonials";
import Pricing from "@/widget/landing/Pricing/Pricing";
import FAQ from "@/widget/landing/FAQ/FAQ";
import CTA from "@/widget/landing/CTA/CTA";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  alternates: { canonical: "https://aiqonz.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aiqonz.com/#organization",
      name: "Aiqonz Studio",
      url: "https://aiqonz.com",
      logo: "https://aiqonz.com/assets/images/logo.png",
      email: "hello@aiqonz.com",
      sameAs: ["https://t.me/aiqonz"],
      areaServed: ["Malaysia", "Singapore", "Dubai"],
    },
    {
      "@type": "WebSite",
      "@id": "https://aiqonz.com/#website",
      url: "https://aiqonz.com",
      name: "Aiqonz Studio",
      publisher: { "@id": "https://aiqonz.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://aiqonz.com/#webpage",
      url: "https://aiqonz.com",
      name: "Aiqonz Studio — Premium Websites",
      description:
        "We build premium, custom websites for luxury brands — delivered in 7 days.",
      isPartOf: { "@id": "https://aiqonz.com/#website" },
      about: { "@id": "https://aiqonz.com/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://aiqonz.com/#service",
      name: "Aiqonz Studio",
      url: "https://aiqonz.com",
      description:
        "Premium custom websites for luxury brands delivered in 7 days.",
      priceRange: "$$$",
      email: "hello@aiqonz.com",
      areaServed: ["Malaysia", "Singapore", "Dubai"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Design Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Premium Website Package",
            price: "3000",
            priceCurrency: "USD",
            description:
              "Fully custom website — strategy, design, development, and launch in 7 days.",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What exactly do I get for $3,000?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A fully custom website — strategy, design, development, and launch. No templates, no shortcuts. Built specifically for your brand and your clients. You own everything after delivery.",
          },
        },
        {
          "@type": "Question",
          name: "How is 7-day delivery actually possible?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We run a focused sprint process. Day 1: brief and strategy. Day 2–3: design concept. Day 4: your feedback. Day 5–6: development and polish. Day 7: live. We work on one project at a time so nothing gets delayed.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with businesses outside Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We work with luxury brands across Malaysia, Singapore, and Dubai. All communication is handled remotely via text — no calls required.",
          },
        },
        {
          "@type": "Question",
          name: "What industries do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury car rentals, yacht charters, private villas, fine dining, premium spas, skydiving, private jets, golf clubs, and high-end hospitality.",
          },
        },
        {
          "@type": "Question",
          name: "What if I need changes after the site goes live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every project includes a 14-day post-launch window for small fixes. After that, we offer revisions at a fixed rate — no surprise invoices.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Click Start a project and tell us about your brand. We'll get back to you within a few hours.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
