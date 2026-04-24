import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.scss";
import Footer from "@/widget/layout/Footer/Footer";
import Header from "@/widget/layout/Header/Header";
import ContactModal from "@/shared/ui/ContactModal";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const BASE_URL = "https://aiqonz.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Aiqonz Studio — Premium Websites for Luxury Brands",
    template: "%s | Aiqonz Studio",
  },
  description:
    "We build premium, custom websites for luxury brands — delivered in 7 days.",
  keywords: [
    "luxury web design",
    "premium website",
    "luxury brand website",
    "web design Malaysia",
    "web design Singapore",
    "web design Dubai",
    "custom website design",
    "7 day website",
    "high-end website design",
    "Aiqonz Studio",
  ],
  authors: [{ name: "Aiqonz Studio", url: BASE_URL }],
  creator: "Aiqonz Studio",
  publisher: "Aiqonz Studio",
  icons: { icon: "/favicon.svg" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Aiqonz Studio",
    title: "Aiqonz Studio — Premium Websites for Luxury Brands",
    description:
      "Custom premium websites for luxury brands. Delivered in 7 days. Strategy, design, and development in one flat price.",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={syne.className}>
      <body>
        <div className="layout">
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </div>
        <ContactModal />
      </body>
    </html>
  );
}
