import { Syne, DM_Sans } from "next/font/google";
import styles from "./Features.module.scss";

const syne = Syne({ subsets: ["latin"], weight: ["600", "700", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const DAYS = [
  { label: "Brief", num: "01" },
  { label: "Design", num: "02" },
  { label: "Review", num: "03" },
  { label: "Build", num: "04" },
  { label: "QA", num: "05" },
  { label: "Polish", num: "06" },
  { label: "Live", num: "07" },
];

const BRAND_STYLES = [
  {
    name: "Minimal",
    style: "Studio",
    accent: "#e0e0e0",
    secondary: "#888888",
    tertiary: "#333333",
    bg: "#1c1c1c",
  },
  {
    name: "Bold",
    style: "Agency",
    accent: "#FF5C5C",
    secondary: "#ff9090",
    tertiary: "#3a1010",
    bg: "#1a0808",
  },
  {
    name: "Luxury",
    style: "Atelier",
    accent: "#D4AF37",
    secondary: "#b89530",
    tertiary: "#5c4010",
    bg: "#120e04",
  },
  {
    name: "Modern",
    style: "Digital",
    accent: "#534AB7",
    secondary: "#7b75cc",
    tertiary: "#1e1a4a",
    bg: "#08061a",
  },
];

const INVOICE_ITEMS = [
  { label: "Strategy & Wireframes", price: "$800" },
  { label: "UI/UX Design", price: "$1,200" },
  { label: "Development", price: "$1,000" },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={`${styles.label} ${dmSans.className}`}>
          WHY AIQONZ
        </span>
        <h2 className={`${styles.heading} ${syne.className}`}>
          Everything your luxury
          <br />
          brand needs.
        </h2>
      </div>

      <div className={styles.grid}>
        {/* Card 1 — 7-Day Delivery */}
        <div className={styles.card}>
          <div className={styles.cardAnim}>
            <div className={styles.timeline}>
              <div className={styles.timelineTrack}>
                <div className={styles.timelineBar}>
                  <div className={styles.timelineProgress} />
                </div>
                {DAYS.map((day, i) => (
                  <div key={day.label} className={styles.timelineStep}>
                    <div
                      className={`${styles.timelineNode} ${syne.className}`}
                      style={{ animationDelay: `${i * 1}s` }}
                    >
                      {day.num}
                    </div>
                    <span
                      className={`${styles.timelineLabel} ${dmSans.className}`}
                    >
                      {day.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={`${styles.cardTitle} ${syne.className}`}>
              7-Day Delivery
            </h3>
            <p className={`${styles.cardSub} ${dmSans.className}`}>
              From brief to live website in one week.
            </p>
          </div>
        </div>

        {/* Card 2 — Built for Luxury */}
        <div className={styles.card}>
          <div className={styles.cardAnim}>
            <div className={styles.floatScene}>
              <div className={`${styles.glassCard} ${styles.glassCard1}`}>
                <div className={styles.glassCardHeader}>
                  <div className={styles.glassCardAvatar} />
                  <div className={styles.glassCardLines}>
                    <div className={styles.glassCardLine} />
                    <div className={styles.glassCardLine} />
                  </div>
                </div>
                <div className={`${styles.glassCardTag} ${dmSans.className}`}>
                  <div className={styles.glassCardTagDot} />
                  Active
                </div>
                <div className={`${styles.glassCardStat} ${syne.className}`}>
                  98
                  <span className={styles.glassCardStatSuffix}>%</span>
                </div>
                <div
                  className={`${styles.glassCardStatLabel} ${dmSans.className}`}
                >
                  Client Score
                </div>
              </div>

              <div className={`${styles.glassCard} ${styles.glassCard2}`}>
                <div className={styles.glassCardHeader}>
                  <div className={styles.glassCardAvatarSm} />
                  <div className={styles.glassCardLines}>
                    <div className={styles.glassCardLine} />
                    <div className={styles.glassCardLine} />
                  </div>
                </div>
                <div
                  className={`${styles.glassCardStat} ${syne.className}`}
                  style={{ fontSize: 18 }}
                >
                  7 Days
                </div>
                <div
                  className={`${styles.glassCardStatLabel} ${dmSans.className}`}
                >
                  Avg. Delivery
                </div>
              </div>

              <div className={`${styles.glowOrb} ${styles.glowOrb1}`} />
              <div className={`${styles.glowOrb} ${styles.glowOrb2}`} />
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={`${styles.cardTitle} ${syne.className}`}>
              Built for Luxury
            </h3>
            <p className={`${styles.cardSub} ${dmSans.className}`}>
              Every pixel crafted for high-end brands.
            </p>
          </div>
        </div>

        {/* Card 3 — Your Brand */}
        <div className={styles.card}>
          <div className={styles.cardAnim}>
            <div className={styles.brandScene}>
              {BRAND_STYLES.map((brand, i) => (
                <div
                  key={brand.name}
                  className={styles.brandSlide}
                  style={{ animationDelay: `${i * 2}s` }}
                >
                  <div
                    className={styles.brandLogo}
                    style={{
                      background: brand.bg,
                      border: `1px solid ${brand.accent}30`,
                    }}
                  />
                  <div className={styles.brandSwatches}>
                    <div
                      className={styles.brandSwatch}
                      style={{ background: brand.accent }}
                    />
                    <div
                      className={styles.brandSwatch}
                      style={{ background: brand.secondary }}
                    />
                    <div
                      className={styles.brandSwatch}
                      style={{ background: brand.tertiary }}
                    />
                  </div>
                  <div className={styles.brandMeta}>
                    <span
                      className={`${styles.brandName} ${syne.className}`}
                    >
                      {brand.name}
                    </span>
                    <span
                      className={`${styles.brandStyle} ${dmSans.className}`}
                    >
                      {brand.style}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={`${styles.cardTitle} ${syne.className}`}>
              Your Brand, Not a Template
            </h3>
            <p className={`${styles.cardSub} ${dmSans.className}`}>
              100% custom. Never a theme.
            </p>
          </div>
        </div>

        {/* Card 4 — Fixed Price */}
        <div className={styles.card}>
          <div className={styles.cardAnim}>
            <div className={styles.invoice}>
              <div className={styles.invoiceHeader}>
                <span
                  className={`${styles.invoiceHeaderTitle} ${dmSans.className}`}
                >
                  Invoice
                </span>
                <span className={`${styles.invoiceId} ${dmSans.className}`}>
                  #2024-001
                </span>
              </div>

              {INVOICE_ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  className={styles.invoiceRow}
                  style={
                    { "--delay": `${0.3 + i * 0.35}s` } as React.CSSProperties
                  }
                >
                  <span
                    className={`${styles.invoiceLabel} ${dmSans.className}`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`${styles.invoicePrice} ${syne.className}`}
                  >
                    {item.price}
                  </span>
                </div>
              ))}

              <div className={styles.invoiceDivider} />

              <div className={styles.invoiceTotal}>
                <span
                  className={`${styles.invoiceTotalLabel} ${dmSans.className}`}
                >
                  Total
                </span>
                <div className={styles.invoiceTotalRight}>
                  <span
                    className={`${styles.invoiceTotalPrice} ${syne.className}`}
                  >
                    $3,000
                  </span>
                  <div className={styles.checkmark}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#534AB7"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7.5 12l3 3 6-6"
                        stroke="#534AB7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={`${styles.cardTitle} ${syne.className}`}>
              Fixed Price. No Surprises.
            </h3>
            <p className={`${styles.cardSub} ${dmSans.className}`}>
              One price. Full delivery. No hidden fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
