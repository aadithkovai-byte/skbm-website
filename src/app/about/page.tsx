import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Our Story",
  description:
    "Sri Kovai Bhairavaa Motocrafts brings Italian automotive excellence to Coimbatore. Authorized Vespa & Aprilia dealership — sales, service, and genuine parts.",
};

export default function AboutPage() {
  return <AboutContent />;
}
