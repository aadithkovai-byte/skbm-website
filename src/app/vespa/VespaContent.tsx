"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { VespaLogo } from "@/components/BrandLogos";
import { VESPA_MODELS, whatsappPriceLink } from "@/lib/constants";

export default function VespaContent() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="grain-surface relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 sm:pt-36">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-off-white via-background to-cream" />
        <div className="absolute right-10 top-28 -z-10 h-72 w-72 rounded-full bg-vespa-teal/14 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="section-kicker text-vespa-teal"
              >
                Live more
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-5"
              >
                <VespaLogo className="h-10 w-auto text-vespa-teal" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1 }}
                className="mt-6 font-heading text-6xl leading-[0.95] tracking-tight text-charcoal sm:text-7xl lg:text-8xl"
              >
                Arrive
                <br />
                <span className="italic font-normal">differently.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 max-w-md text-lg leading-8 text-gray-muted"
              >
                For over 75 years, Vespa has been more than a scooter — it&apos;s
                the symbol of Italian style, freedom, and arriving beautifully.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-9"
              >
                <Link
                  href="/contact#test-ride"
                  className="inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-matte-black"
                >
                  Book a test ride
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.18 }}
              className="hero-frame relative overflow-hidden rounded-[36px]"
            >
              {/* Frame matches the poster's own shape so its artwork text is never cropped */}
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/vespa-hero-arrived.webp"
                  alt="Vespa — for those who've arrived. Now in Coimbatore."
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <p className="section-kicker text-vespa-teal">A way of life</p>
              <h2 className="mt-5 font-heading text-4xl tracking-tight text-charcoal sm:text-5xl">
                Not just a scooter.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-gray-muted">
                Vespa is a declaration. It says you value design over convention,
                freedom over conformity — the difference between moving and truly
                arriving. Born in Italy in 1946, and now riding the roads of
                Coimbatore.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="editorial-shadow relative aspect-[4/5] overflow-hidden rounded-[32px] border border-charcoal/8">
                <Image
                  src="/images/vespa-cafe.webp"
                  alt="A Vespa parked beside a street café"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Model collection ─── */}
      <section className="bg-off-white px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="text-center">
            <p className="section-kicker justify-center text-vespa-teal">The collection</p>
            <h2 className="mt-5 font-heading text-4xl tracking-tight text-charcoal sm:text-5xl">
              Choose your icon.
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VESPA_MODELS.map((model, i) => (
              <AnimatedSection key={model.name} delay={i * 0.1}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-charcoal/8 bg-white">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-vespa-teal">
                      {model.tagline}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl tracking-tight text-charcoal">
                      {model.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-muted">{model.description}</p>
                    <a
                      href={whatsappPriceLink(model.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal hover:text-vespa-teal"
                    >
                      Get price on WhatsApp
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 shrink-0">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quote ─── */}
      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl italic leading-[1.2] tracking-tight text-charcoal sm:text-5xl">
              &ldquo;Whoever rides a Vespa has a smile on their face.&rdquo;
            </h2>
            <p className="mt-8 text-xs uppercase tracking-[0.32em] text-gray-muted">
              Enrico Piaggio, Founder
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="grain-surface relative overflow-hidden bg-charcoal px-4 py-24 text-white sm:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(54,95,88,0.3),transparent_30%)]" />
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Ready to ride?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-8 text-white/58">
              Test rides are available at both our Sungam Junction and Sulur
              showrooms.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact#test-ride"
                className="inline-flex items-center gap-3 rounded-full bg-bronze px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal hover:bg-bronze-soft"
              >
                Book a test ride
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center gap-3 rounded-full border border-white/16 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:border-white/32"
              >
                Book service
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
