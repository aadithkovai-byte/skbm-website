import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About SKBM — Vespa & Aprilia Dealer in Coimbatore, Tamil Nadu",
  description:
    "Sri Kovai Bhairavaa Motocrafts brings Italian automotive excellence to Coimbatore, Tamil Nadu. Authorized Vespa & Aprilia dealership — sales, service, and genuine parts since 2022.",
};

export default function AboutPage() {
  return <AboutContent />;
}
