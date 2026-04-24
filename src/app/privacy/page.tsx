import type { Metadata } from "next";
import styles from "../legal.module.scss";

export const metadata: Metadata = {
  title: "Privacy Policy — Aiqonz",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.tag}>Legal</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.meta}>Last updated: April 24, 2025</p>
      </div>

      <div className={styles.body}>
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            When you contact us via our website, we collect the information you
            voluntarily provide — such as your name, email address, and project
            details. We do not collect data automatically beyond standard server
            logs (IP address, browser type, referring URL).
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and deliver the services you request</li>
            <li>Send project updates and invoices</li>
            <li>Improve our website and services</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal data with third parties
            for marketing purposes.
          </p>
        </section>

        <section>
          <h2>3. Cookies</h2>
          <p>
            Our website uses minimal cookies necessary for the site to function.
            We do not use tracking or advertising cookies. You can disable
            cookies in your browser settings without affecting your ability to
            use the site.
          </p>
        </section>

        <section>
          <h2>4. Data Storage & Security</h2>
          <p>
            Your data is stored on secure servers. We implement industry-standard
            measures to protect against unauthorized access. However, no method of
            transmission over the internet is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Services</h2>
          <p>
            We may use third-party tools (such as email providers or analytics
            services) that process data on our behalf. These providers are
            contractually bound to handle your data securely and only for the
            purposes we specify.
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:hello@aiqonz.com">hello@aiqonz.com</a>.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated date. Continued use of our
            website constitutes acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            If you have any questions about this policy, reach out at{" "}
            <a href="mailto:hello@aiqonz.com">hello@aiqonz.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
