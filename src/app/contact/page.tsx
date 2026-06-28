import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Visit Our Showroom",
  description:
    "Get in touch with Sri Kovai Bhairavaa Motocrafts. Visit our Vespa & Aprilia showrooms at Sulur and Sungam Junction, Coimbatore. Call, WhatsApp, or walk in.",
};

export default function ContactPage() {
  return <ContactContent />;
}
