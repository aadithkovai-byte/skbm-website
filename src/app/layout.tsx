import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
  metadataBase: new URL("https://skbmotocrafts.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
