"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import SectionTag from "@/shared/ui/SectionTag";
import AnimatedHeading from "@/shared/ui/AnimatedHeading";
import styles from "./FAQ.module.scss";

const FAQS = [
  {
    question: "What exactly do I get for $3,000?",
    answer:
      "A fully custom website — strategy, design, development, and launch. No templates, no shortcuts. Built specifically for your brand and your clients. You own everything after delivery.",
  },
  {
    question: "How is 7-day delivery actually possible?",
    answer:
      "We run a focused sprint process. Day 1: brief and strategy. Day 2–3: design concept. Day 4: your feedback. Day 5–6: development and polish. Day 7: live. We work on one project at a time so nothing gets delayed.",
  },
  {
    question: "Do you work with businesses outside Malaysia?",
    answer:
      "Yes. We work with luxury brands across Malaysia, Singapore, and Dubai. All communication is handled remotely via text — no calls required.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Luxury car rentals, yacht charters, private villas, fine dining, premium spas, skydiving, private jets, golf clubs, and high-end hospitality. If your business is premium, we're the right fit.",
  },
  {
    question: "What if I need changes after the site goes live?",
    answer:
      "Every project includes a 14-day post-launch window for small fixes. After that, we offer revisions at a fixed rate — no surprise invoices.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click Start a project and tell us about your brand. We'll get back to you within a few hours.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.open : ""}`}>
      <button className={styles.trigger} onClick={() => setOpen(!open)}>
        <span className={styles.question}>{question}</span>
        <FiChevronDown
          size={20}
          className={`${styles.icon} ${open ? styles.iconOpen : ""}`}
        />
      </button>
      <div className={styles.body}>
        <div className={styles.bodyInner}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const left = FAQS.filter((_, i) => i % 2 === 0);
  const right = FAQS.filter((_, i) => i % 2 === 1);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionTag>FAQs</SectionTag>
        <AnimatedHeading className={styles.heading}>
          Got questions?
          <br />
          <span className={styles.headingRow}>
            we <em>got answers.</em>
          </span>
        </AnimatedHeading>
        <p className={styles.description}>
          Everything you need to know find quick
          <br />
          answers to the most common questions.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.col}>
          {left.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
        <div className={styles.col}>
          {right.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
