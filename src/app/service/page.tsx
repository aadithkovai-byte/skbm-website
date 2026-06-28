import type { Metadata } from "next";
import ServiceContent from "./ServiceContent";

export const metadata: Metadata = {
  title: "Service — Factory-Trained Care for Your Italian Ride",
  description:
    "Book a service appointment for your Vespa or Aprilia at Sri Kovai Bhairavaa Motocrafts, Coimbatore. Factory-trained technicians, genuine parts, and premium care.",
};

export default function ServicePage() {
  return <ServiceContent />;
}
