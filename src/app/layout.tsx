import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  MAPS_SUNGAM,
  MAPS_SULUR,
} from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Sri Kovai Bhairavaa Motocrafts — Authorized Vespa & Aprilia Dealer, Coimbatore",
    template: "%s | SKBM — Vespa & Aprilia Coimbatore",
  },
  description:
    "Authorized Vespa & Aprilia dealership in Coimbatore. Premium Italian scooters and motorcycles — sales, service, and genuine parts at Sulur & Sungam Junction.",
  keywords: [
    "Vespa Coimbatore",
    "Aprilia Coimbatore",
    "Vespa dealer Coimbatore",
    "Aprilia dealer Coimbatore",
    "Sri Kovai Bhairavaa Motocrafts",
    "SKBM",
    "Vespa showroom Sulur",
    "Aprilia showroom Coimbatore",
    "Italian scooter Coimbatore",
    "Vespa service center",
    "Aprilia service center",
    "Piaggio dealer Coimbatore",
  ],
  authors: [{ name: "Sri Kovai Bhairavaa Motocrafts" }],
  creator: "Sri Kovai Bhairavaa Motocrafts",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sri Kovai Bhairavaa Motocrafts",
    title: "Sri Kovai Bhairavaa Motocrafts — Authorized Vespa & Aprilia Dealer",
    description:
      "Italian style meets Coimbatore. Authorized Vespa & Aprilia dealership — sales, service, and genuine parts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Kovai Bhairavaa Motocrafts",
    description: "Authorized Vespa & Aprilia dealership in Coimbatore.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
};

// Machine-readable business info for Google local search (both showrooms)
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MotorcycleDealer",
      "@id": `${SITE_URL}/#sungam`,
      name: `${SITE_NAME} — Sungam Junction`,
      url: SITE_URL,
      telephone: `+91${PHONE_PRIMARY}`,
      image: `${SITE_URL}/opengraph-image.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sungam Junction, Ramanathapuram",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      hasMap: MAPS_SUNGAM,
      brand: [
        { "@type": "Brand", name: "Vespa" },
        { "@type": "Brand", name: "Aprilia" },
      ],
      sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook],
    },
    {
      "@type": "MotorcycleDealer",
      "@id": `${SITE_URL}/#sulur`,
      name: `${SITE_NAME} — Sulur`,
      url: SITE_URL,
      telephone: `+91${PHONE_SECONDARY}`,
      image: `${SITE_URL}/opengraph-image.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Next to Aadhi Nexa, Trichy Road, Sulur",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      hasMap: MAPS_SULUR,
      brand: [
        { "@type": "Brand", name: "Vespa" },
        { "@type": "Brand", name: "Aprilia" },
      ],
      sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
