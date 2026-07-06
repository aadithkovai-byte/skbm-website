import type { Metadata } from "next";
import ApriliaContent from "./ApriliaContent";

export const metadata: Metadata = {
  title: "Aprilia Showroom in Coimbatore, Tamil Nadu — Storm 125, SR 175 & Tribute",
  description:
    "Authorized Aprilia dealer in Coimbatore, Tamil Nadu. Storm 125, SR 175, and SR 175 Tribute at SKBM — racing DNA, genuine parts, and test rides at Sungam Junction and Sulur.",
};

export default function ApriliaPage() {
  return <ApriliaContent />;
}
