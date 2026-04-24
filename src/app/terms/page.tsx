import type { Metadata } from "next";
import styles from "../legal.module.scss";

export const metadata: Metadata = {
  title: "Terms of Service — Aiqonz",
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.tag}>Legal</p>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.meta}>Last updated: April 24, 2025</p>
      </div>

      <div className={styles.body}>
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By engaging Aiqonz Studio for any service, you agree to these Terms
            of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2>2. Services</h2>
          <p>
            Aiqonz Studio provides web design, development, and related digital
            services. The scope, deliverables, timeline, and pricing for each
            project are defined in a separate proposal or agreement signed by
            both parties.
          </p>
        </section>

        <section>
          <h2>3. Payment</h2>
          <p>
            Payment terms are outlined in the project proposal. Unless otherwise
            agreed:
          </p>
          <ul>
            <li>A 50% deposit is required before work begins</li>
            <li>The remaining balance is due upon project completion</li>
            <li>
              Late payments (beyond 14 days) may incur a 1.5% monthly fee
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Revisions & Scope</h2>
          <p>
            Each project includes a defined number of revision rounds as stated
            in the proposal. Requests beyond the agreed scope will be quoted
            separately and require written approval before proceeding.
          </p>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            Upon receipt of full payment, the client receives full ownership of
            the final deliverables. Aiqonz Studio retains the right to display
            the work in its portfolio unless otherwise agreed in writing.
          </p>
          <p>
            Any third-party assets (fonts, stock images, plugins) remain subject
            to their respective licenses.
          </p>
        </section>

        <section>
          <h2>6. Client Responsibilities</h2>
          <p>The client agrees to:</p>
          <ul>
            <li>Provide all required content, assets, and feedback in a timely manner</li>
            <li>Ensure they have rights to any materials they supply</li>
            <li>
              Not use our deliverables for unlawful or harmful purposes
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Cancellation</h2>
          <p>
            Either party may terminate the project with 7 days written notice.
            The client is responsible for payment of all work completed up to the
            cancellation date. The deposit is non-refundable once work has begun.
          </p>
        </section>

        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            Aiqonz Studio is not liable for indirect, incidental, or
            consequential damages arising from use of our services. Our total
            liability shall not exceed the amount paid for the specific project
            in question.
          </p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by applicable law. Any disputes shall be
            resolved through good-faith negotiation before pursuing formal legal
            action.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            Questions about these terms?{" "}
            <a href="mailto:hello@aiqonz.com">hello@aiqonz.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
