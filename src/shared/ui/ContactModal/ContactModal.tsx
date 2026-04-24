"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa6";
import { FiMail, FiX } from "react-icons/fi";
import styles from "./ContactModal.module.scss";

const CONTACTS = [
  {
    label: "WhatsApp",
    contact: "+60 1X-XXXX XXXX",
    href: "https://wa.me/601XXXXXXXXX",
    icon: FaWhatsapp,
    color: "#25d366",
    bg: "rgb(255, 255, 255)",
  },
  {
    label: "Telegram",
    contact: "@aiqonz",
    href: "https://t.me/aiqonz",
    icon: FaTelegram,
    color: "#29b6f6",
    bg: "rgb(255, 255, 255)",
  },
  {
    label: "Email",
    contact: "hello@aiqonz.com",
    href: "mailto:hello@aiqonz.com",
    icon: FiMail,
    color: "#a78bfa",
    bg: "rgb(255, 255, 255)",
  },
];

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("contact:open", handler);
    return () => window.removeEventListener("contact:open", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={styles.overlay}
      data-open={open}
      onClick={() => setOpen(false)}
    >
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.close}
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          <FiX size={18} />
        </button>

        <div className={styles.cards}>
          {CONTACTS.map(({ label, contact, href, icon: Icon, color, bg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <span
                className={styles.iconWrap}
                style={{ background: bg, color }}
              >
                <Icon size={28} />
              </span>
              <span className={styles.cardLabel}>{label}</span>
              <span className={styles.cardContact}>{contact}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
