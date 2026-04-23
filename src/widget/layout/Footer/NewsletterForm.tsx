"use client";

import Button from "@/shared/ui/Button";
import styles from "./Footer.module.scss";

export default function NewsletterForm() {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        className={styles.input}
        type="email"
        placeholder="hello@site.com"
      />
      <Button type="submit" size="md">
        Sign up
      </Button>
    </form>
  );
}
