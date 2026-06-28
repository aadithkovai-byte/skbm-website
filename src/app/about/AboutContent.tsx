"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutContent() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-off-white to-cream" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-vespa-teal"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-charcoal sm:text-7xl lg:text-8xl"
          >
            Italian Excellence
            <br />
            Arrives in Sulur.
          </motion.h1>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
                The Beginning
              </p>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
                Built on a
                <br />
                Simple Belief.
              </h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-muted">
                <p>
                  Coimbatore deserves more than just another dealership. It deserves
                  a destination — a place where the craft of Italian engineering meets
                  the warmth of South Indian hospitality.
                </p>
                <p>
                  Sri Kovai Bhairavaa Motocrafts was founded with one vision: to bring
                  the full Vespa and Aprilia experience to Coimbatore and the surrounding
                  region. Not just selling vehicles, but delivering a standard of service
                  and care that matches the brands we represent.
                </p>
                <p>
                  As an authorized Piaggio Group dealership, we carry the complete range
                  of Vespa and Aprilia vehicles, backed by factory-trained technicians,
                  genuine parts, and the full manufacturer warranty. From the first test
                  ride to every scheduled service, your experience with us is designed
                  to feel premium at every touchpoint.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="space-y-6">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/vespa-arrive-differently.webp" alt="Vespa — Arrive Differently" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/images/skbm-logo.webp" alt="SKBM Logo" fill className="object-cover" sizes="25vw" />
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/images/vespa-yellow-milan.webp" alt="Vespa in Milan" fill className="object-cover" sizes="25vw" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="bg-matte-black py-32 grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
              What We Stand For
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Principles
            </h2>
          </AnimatedSection>

          <div className="mt-20 grid gap-px bg-white/5 md:grid-cols-3">
            {[
              {
                title: "Authenticity",
                description:
                  "Every vehicle, every part, every service — genuine and authorized. We don't cut corners because the brands we represent never did.",
              },
              {
                title: "Craftsmanship",
                description:
                  "We believe in doing things right, not fast. Our technicians are trained at the factory level because your vehicle deserves precision.",
              },
              {
                title: "Experience",
                description:
                  "From the showroom floor to the service bay, every interaction is designed to feel like the premium brands we carry.",
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.12} className="bg-matte-black p-12">
                <span className="mb-6 block text-xs font-medium text-vespa-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-4 font-heading text-2xl font-bold tracking-tight text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">
                  {value.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Brands We Carry ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Two Legendary Brands.
              <br />
              One Destination.
            </h2>
          </AnimatedSection>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            <AnimatedSection>
              <div className="border border-charcoal/5 p-12 text-center transition-all hover:shadow-xl hover:shadow-charcoal/5">
                <h3 className="font-heading text-3xl font-bold text-charcoal">Vespa</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-vespa-teal">Live More</p>
                <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-gray-muted">
                  The world&apos;s most iconic scooter. Born in Italy in 1946, Vespa
                  represents freedom, elegance, and the art of living beautifully.
                  Over 19 million units sold across 100+ countries.
                </p>
                <Link
                  href="/vespa"
                  className="mt-8 inline-flex text-sm font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-vespa-teal"
                >
                  Explore Vespa
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="border border-charcoal/5 bg-matte-black p-12 text-center transition-all hover:shadow-xl hover:shadow-charcoal/10">
                <h3 className="font-heading text-3xl font-bold text-white">Aprilia</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-aprilia-red">
                  Designed for Racers
                </p>
                <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-white/40">
                  54 world titles. 294 Grand Prix victories. Aprilia&apos;s racing
                  DNA lives in every vehicle they build. Performance, precision, and
                  the relentless pursuit of the edge.
                </p>
                <Link
                  href="/aprilia"
                  className="mt-8 inline-flex text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-aprilia-red"
                >
                  Explore Aprilia
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Locations ─── */}
      <section className="bg-off-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
              Find Us
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Our Showrooms
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              {
                location: "Sulur",
                address: "Next to Aadhi Nexa, Trichy Road, Sulur",
                type: "Flagship Showroom & Service Center",
              },
              {
                location: "Sungam Junction",
                address: "Sungam Junction, Coimbatore",
                type: "Sales & Service",
              },
            ].map((branch, i) => (
              <AnimatedSection key={branch.location} delay={i * 0.12}>
                <div className="bg-white p-10">
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-vespa-teal">
                    {branch.type}
                  </p>
                  <h3 className="mb-3 font-heading text-2xl font-bold tracking-tight text-charcoal">
                    {branch.location}
                  </h3>
                  <p className="text-sm text-gray-muted">{branch.address}</p>
                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-charcoal transition-colors hover:text-vespa-teal"
                  >
                    Get Directions
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
