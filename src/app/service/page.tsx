import type { Metadata } from "next";
import ServiceContent from "./ServiceContent";

export const metadata: Metadata = {
  title: "Vespa & Aprilia Service Center in Coimbatore, Tamil Nadu",
  description:
    "Book Vespa or Aprilia service in Coimbatore, Tamil Nadu at SKBM. Factory-trained technicians, genuine Piaggio parts, pick-up and drop available — confirm your slot on WhatsApp.",
};

export default function ServicePage() {
  return <ServiceContent />;
}
