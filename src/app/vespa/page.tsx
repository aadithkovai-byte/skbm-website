import type { Metadata } from "next";
import VespaContent from "./VespaContent";

export const metadata: Metadata = {
  title: "Vespa Showroom in Coimbatore, Tamil Nadu — ZX, S, Tech & Qala",
  description:
    "Authorized Vespa dealer in Coimbatore, Tamil Nadu. Explore the Vespa ZX, Vespa, Vespa S, and Vespa Tech / Qala at SKBM — prices on WhatsApp, test rides at Sungam Junction and Sulur.",
};

export default function VespaPage() {
  return <VespaContent />;
}
