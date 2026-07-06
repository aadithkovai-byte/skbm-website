import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Visit Our Vespa & Aprilia Showrooms in Coimbatore, Tamil Nadu",
  description:
    "Two Vespa & Aprilia showrooms in Coimbatore, Tamil Nadu — Sungam Junction and Sulur. Book a test ride, call, or WhatsApp Sri Kovai Bhairavaa Motocrafts (SKBM).",
};

export default function ContactPage() {
  return <ContactContent />;
}
