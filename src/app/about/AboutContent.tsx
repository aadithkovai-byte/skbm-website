"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { SHOWROOMS } from "@/lib/constants";

export default function AboutContent() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="grain-surface relative overflow-hidden px-4 pt-36 pb-16 sm:px-6">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-off-white via-background to-cream" />
        <div className="absolute right-10 top-28 -z-10 h-72 w-72 rounded-full bg-bronze/12 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-kicker text-bronze"
          >
            Our story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mt-6 max-w-3xl font-heading text-5xl leading-[1.0] tracking-tight text-charcoal sm:text-7xl"
          >
            Italian excellence,
            <br />
            rooted in Coimbatore.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-muted"
          >
            Sri Kovai Bhairavaa Motocrafts is an authorized Vespa &amp; Aprilia
            dealership — bringing world-class scooters and genuine Piaggio service
            to the city we call home.
          </motion.p>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <p className="section-kicker text-bronze">Since 2022</p>
              <h2 className="mt-5 font-heading text-4xl tracking-tight text-charcoal sm:text-5xl">
                A flagship at Sungam.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-muted">
                <p>
                  We opened our doors in 2022 with our flagship showroom at Sungam
                  Junction, Ramanathapuram — a proper home for Vespa and Aprilia in
                  Coimbatore, built around genuine parts, trained service, and
                  honest advice.
                </p>
                <p>
                  Since then we&apos;ve grown — adding our newly opened Sulur
                  showroom so more riders across the city can experience the brands
                  in person, take a test ride, and be supported long after delivery.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="editorial-shadow relative aspect-[5/4] overflow-hidden rounded-[32px] border border-charcoal/8">
                <Image
                  src="/images/editorial-vespa-showroom.webp"
                  alt="Inside the SKBM showroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Delivery moments ─── */}
      <section className="bg-off-white px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="max-w-2xl">
            <p className="section-kicker text-bronze">What we&apos;re about</p>
            <h2 className="mt-5 font-heading text-4xl tracking-tight text-charcoal sm:text-5xl">
              We don&apos;t just sell scooters.
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-muted">
              Every delivery is a small ceremony — a cloth pulled back, a smile, a
              first ride home. That moment is the reason we do this.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/images/delivery-unveil-2.webp",
              "/images/customer-joy-2.webp",
              "/images/delivery-group.webp",
            ].map((src, i) => (
              <AnimatedSection key={src} delay={i * 0.1}>
                <div className="editorial-shadow relative aspect-[4/3] overflow-hidden rounded-[26px] border border-charcoal/8">
                  <Image
                    src={src}
                    alt="A delivery day at SKBM"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Showrooms ─── */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="text-center">
            <p className="section-kicker justify-center text-bronze">Find us</p>
            <h2 className="mt-5 font-heading text-4xl tracking-tight text-charcoal sm:text-5xl">
              Two showrooms in Coimbatore.
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SHOWROOMS.map((showroom, i) => (
              <AnimatedSection key={showroom.name} delay={i * 0.1}>
                <div className="lux-panel h-full rounded-[28px] p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bronze">
                    {showroom.type}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl tracking-tight text-charcoal">
                    {showroom.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-muted">{showroom.address}</p>
                  <a
                    href={showroom.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal hover:text-vespa-teal"
                  >
                    Get directions
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-matte-black"
            >
              Plan your visit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
