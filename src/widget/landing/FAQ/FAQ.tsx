"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import SectionTag from "@/shared/ui/SectionTag";
import AnimatedHeading from "@/shared/ui/AnimatedHeading";
import styles from "./FAQ.module.scss";

const FAQS = [
  {
    question: "What's included in the $3,000 package?",
    answer:
      "A fully custom website + admin panel where you can add, edit, and remove cars from your fleet yourself. Custom design, booking form, mobile optimized. Ready in 7 days. You own everything.",
  },
  {
    question: "Can I manage my fleet without a developer?",
    answer:
      "Yes. We build a simple admin panel where you can add new cars, upload photos, set availability and pricing. No technical knowledge needed.",
  },
  {
    question: "How does 7-day delivery work?",
    answer:
      "Day 1: brief and your fleet details. Day 2–3: design. Day 4: your feedback. Day 5–6: development and admin panel. Day 7: live. We work on one project at a time so nothing gets delayed.",
  },
  {
    question: "Do you work outside Malaysia?",
    answer:
      "Yes. We work with luxury car rental businesses across Malaysia, Singapore, and Dubai. All communication is via text — no calls required.",
  },
  {
    question: "What if your concepts don't match my brand?",
    answer:
      "We offer a fully custom build from scratch starting at $5,000. Tell us your vision and we'll build it exactly how you want.",
  },
  {
    question: "How do I get started?",
    answer:
      "Message us directly on WhatsApp or Telegram. We'll get back to you within a few hours.",
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
