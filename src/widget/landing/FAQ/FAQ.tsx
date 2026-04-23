"use client";

import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import SectionTag from "@/shared/ui/SectionTag";
import styles from "./FAQ.module.scss";

const FAQS = [
  {
    question: "What's included in the $3,000 package?",
    answer:
      "You get a fully custom-designed and developed website — strategy, UI/UX design, copywriting direction, development, and launch. No templates. Built specifically for your brand.",
  },
  {
    question: "How does the 7-day delivery work?",
    answer:
      "We run a focused, sprint-based process. Day 1–2: discovery and strategy. Day 3–4: design. Day 5–6: development. Day 7: final review and handoff. We move fast without cutting corners.",
  },
  {
    question: "Do I own the website after delivery?",
    answer:
      "Yes, fully. All files, source code, and assets are yours. No subscriptions, no lock-in, no recurring fees unless you choose our optional support plan.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Every project includes a 14-day post-launch support window. After that, we offer flexible maintenance packages or ad-hoc revisions at a fixed hourly rate.",
  },
  {
    question: "Which markets do you work in?",
    answer:
      "We work with luxury brands across hospitality, fashion, real estate, wellness, jewellery, and professional services — any business where first impressions determine the sale.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click \"Get your free concept\" and fill out a short brief. We'll review it and send you a concept direction within 24 hours — no commitment required.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.open : ""}`}>
      <button className={styles.trigger} onClick={() => setOpen(!open)}>
        <span className={styles.question}>{question}</span>
        {open ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </button>
      {open && <p className={styles.answer}>{answer}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionTag>FAQs</SectionTag>
        <h2 className={styles.heading}>
          Got questions?
          <br />
          <span className={styles.headingRow}>
            we <em>got answers.</em>
          </span>
        </h2>
        <p className={styles.description}>
          Everything you need to know find quick
          <br />
          answers to the most common questions.
        </p>
      </div>

      <div className={styles.grid}>
        {FAQS.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  );
}
