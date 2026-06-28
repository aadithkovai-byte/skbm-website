import type { Metadata } from "next";
import ApriliaContent from "./ApriliaContent";

export const metadata: Metadata = {
  title: "Aprilia — Designed for Racers, Built for Those Who Are",
  description:
    "Explore the Aprilia range at Sri Kovai Bhairavaa Motocrafts, Coimbatore. SXR 160, Storm 125, SR 125 — MotoGP DNA in every ride.",
};

export default function ApriliaPage() {
  return <ApriliaContent />;
}
