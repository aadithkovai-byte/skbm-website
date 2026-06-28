"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxImage from "@/components/ParallaxImage";
import { VESPA_MODELS } from "@/lib/constants";

export default function VespaContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Image
            src="/images/vespa-milan-kovai.webp"
            alt="Vespa — Milan style in Kovai"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-cream/20" />
        </motion.div>

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-vespa-teal" />
            <p className="text-[11px] font-medium uppercase tracking-[0.5em] text-vespa-teal">
              Live More Vespa
            </p>
            <span className="h-px w-12 bg-vespa-teal" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-heading text-7xl font-bold leading-[0.95] tracking-[-0.03em] text-charcoal sm:text-8xl lg:text-[10vw] xl:text-[160px]"
          >
            <span className="block">Arrive</span>
            <span className="block italic font-normal">Differently.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-charcoal/60 sm:text-lg"
          >
            For over 75 years, Vespa has been more than a scooter — it&apos;s
            been the symbol of Italian style, freedom, and a way of moving
            through the world beautifully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-charcoal px-12 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white transition-all"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-vespa-teal transition-transform duration-500 group-hover:scale-x-100" />
              <span className="relative">Book a Test Ride</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="relative h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="h-12 w-px bg-gradient-to-b from-charcoal/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
                A Way of Life
              </p>
              <h2 className="font-heading text-5xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                Not Just
                <br />
                a Scooter.
              </h2>
              <div className="mt-10 space-y-6 text-base leading-relaxed text-gray-muted">
                <p>
                  Vespa isn&apos;t transportation — it&apos;s a declaration.
                  It says you value design over convention. Freedom over
                  conformity. That you understand the difference between
                  moving and truly arriving.
                </p>
                <p>
                  Born in Italy in 1946, Vespa has graced the streets of every
                  great city in the world. Rome saw it first. Paris adopted
                  it. Milan made it iconic. And now — it calls Coimbatore home.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <ParallaxImage
                src="/images/vespa-lifestyle-3.webp"
                alt="Vespa lifestyle"
                className="aspect-[4/5]"
                intensity={40}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Full-bleed image break ─── */}
      <section className="relative h-[60vh] overflow-hidden">
        <ParallaxImage
          src="/images/vespa-arrive-differently.webp"
          alt="Vespa — Arrive Differently"
          className="absolute inset-0"
          intensity={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black/30 via-transparent to-matte-black/30" />
      </section>

      {/* ─── Model Range ─── */}
      <section className="bg-off-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
              The Collection
            </p>
            <h2 className="font-heading text-5xl font-bold tracking-tight text-charcoal sm:text-6xl">
              Choose Your Icon
            </h2>
          </AnimatedSection>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {VESPA_MODELS.map((model, i) => (
              <AnimatedSection key={model.name} delay={i * 0.12}>
                <div className="group relative overflow-hidden bg-white transition-all hover:shadow-xl hover:shadow-charcoal/5">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-cream to-off-white">
                    <Image
                      src={i === 0 ? "/images/vespa-lifestyle-1.webp" : i === 1 ? "/images/vespa-lifestyle-2.webp" : "/images/vespa-lifestyle-4.webp"}
                      alt={model.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-10">
                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.25em] text-vespa-teal">
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
                      className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-vespa-teal"
                    >
                      Enquire
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quote ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-8 h-12 w-12 text-vespa-teal/30">
              <path d="M14.017 21v-7.391C14.017 8.815 17.42 5 21.81 5v3.391c-2.226 0-3.793 1.84-3.793 4.218H21.81V21h-7.793zM4 21v-7.391C4 8.815 7.403 5 11.793 5v3.391C9.567 8.391 8 10.231 8 12.609H11.793V21H4z" />
            </svg>
            <h2 className="font-heading text-3xl font-bold leading-[1.2] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              &ldquo;Whoever rides a Vespa
              <br />
              has a smile on their face.&rdquo;
            </h2>
            <p className="mt-10 text-xs uppercase tracking-[0.4em] text-gray-muted">
              — Enrico Piaggio, Founder
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
            {[
              { value: 75, suffix: "+", label: "Years of Heritage" },
              { value: 19, suffix: "M+", label: "Vespas Built" },
              { value: 100, suffix: "+", label: "Countries Worldwide" },
              { value: 1, suffix: "", label: "Destination in Kovai" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <p className="font-heading text-5xl font-bold tracking-tight text-vespa-teal sm:text-6xl lg:text-7xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-muted">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="relative overflow-hidden bg-charcoal py-32">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/vespa-showroom.webp" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Ready to Ride?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60">
              Visit our showroom and experience the Vespa magic in person.
              Test rides available every day.
            </p>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-vespa-teal px-12 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white transition-all hover:bg-vespa-teal/90"
              >
                Visit Showroom
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center gap-3 border border-white/20 px-12 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white transition-all hover:border-white/40"
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
