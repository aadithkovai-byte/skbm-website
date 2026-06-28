import type { Metadata } from "next";
import VespaContent from "./VespaContent";

export const metadata: Metadata = {
  title: "Vespa — Italian Elegance on Two Wheels",
  description:
    "Explore the Vespa range at Sri Kovai Bhairavaa Motocrafts, Coimbatore. VXL, SXL, ZX — timeless Italian design, now in your city. Book a test ride today.",
};

export default function VespaPage() {
  return <VespaContent />;
}
