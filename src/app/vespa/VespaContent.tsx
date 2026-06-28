"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { VESPA_MODELS } from "@/lib/constants";

export default function VespaContent() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream">
        <div className="absolute inset-0">
          <Image src="/images/vespa-milan-kovai.webp" alt="Vespa — Milan to Kovai" fill className="object-cover opacity-15" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/80 to-cream" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-vespa-teal/5 blur-[200px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-vespa-teal"
          >
            Live More Vespa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-heading text-6xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-8xl lg:text-9xl"
          >
            Arrive
            <br />
            Differently.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-charcoal/50"
          >
            For over 75 years, Vespa has been more than a scooter. It&apos;s a
            symbol of freedom, style, and the Italian art of living beautifully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-charcoal px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-matte-black"
            >
              Book a Test Ride
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Italian Lifestyle ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
                A Way of Life
              </p>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
                Not Just
                <br />
                a Scooter.
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-gray-muted">
                Vespa isn&apos;t transportation — it&apos;s a declaration. It says
                you value design over convention. Freedom over conformity. That you
                understand the difference between moving and truly arriving.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-gray-muted">
                Born in Italy in 1946, Vespa has graced the streets of every great
                city in the world. And now, it calls Coimbatore home.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="/images/vespa-lifestyle-3.webp" alt="Vespa lifestyle — world-class style now in your city" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Model Range ─── */}
      <section className="bg-off-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
              The Collection
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Choose Your Icon
            </h2>
          </AnimatedSection>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {VESPA_MODELS.map((model, i) => (
              <AnimatedSection key={model.name} delay={i * 0.12}>
                <div className="group relative overflow-hidden bg-white p-10 transition-all hover:shadow-xl hover:shadow-charcoal/5">
                  <div className="mb-8 aspect-[4/3] bg-gradient-to-br from-cream to-off-white transition-transform duration-500 group-hover:scale-[1.02]" />
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-vespa-teal">
                    {model.tagline}
                  </p>
                  <h3 className="mb-3 font-heading text-2xl font-bold tracking-tight text-charcoal">
                    {model.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-muted">
                    {model.description}
                  </p>
                  <Link
                    href="/contact"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-charcoal transition-colors hover:text-vespa-teal"
                  >
                    Enquire Now
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              &ldquo;Whoever rides a Vespa
              <br />
              has a smile on their face.&rdquo;
            </h2>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-gray-muted">
              — Enrico Piaggio, Founder
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Features Grid ─── */}
      <section className="bg-cream py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-px bg-charcoal/5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "75+", label: "Years of Heritage" },
              { number: "100+", label: "Countries Worldwide" },
              { number: "19M+", label: "Vespas Built" },
              { number: "01", label: "Destination in Coimbatore" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="bg-cream p-10 text-center">
                <p className="font-heading text-4xl font-bold text-vespa-teal">{stat.number}</p>
                <p className="mt-2 text-sm text-gray-muted">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-charcoal py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Ride?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/50">
              Visit our showroom and experience the Vespa magic in person.
              Test rides available every day.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-vespa-teal px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-vespa-teal/90"
              >
                Visit Showroom
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center gap-3 border border-white/20 px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:border-white/40"
              >
                Book Service
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
