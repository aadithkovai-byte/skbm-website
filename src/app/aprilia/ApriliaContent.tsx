"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxImage from "@/components/ParallaxImage";
import { APRILIA_MODELS } from "@/lib/constants";

export default function ApriliaContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="bg-matte-black">
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Image
            src="/images/aprilia-not-for-everyone.webp"
            alt="Aprilia — Not For Everyone"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-matte-black/40" />
          <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-aprilia-red/10 blur-[200px]" />
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
            <span className="h-px w-12 bg-aprilia-red" />
            <p className="text-[11px] font-medium uppercase tracking-[0.5em] text-aprilia-red">
              Designed for Racers
            </p>
            <span className="h-px w-12 bg-aprilia-red" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-heading text-7xl font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-8xl lg:text-[10vw] xl:text-[160px]"
          >
            <span className="block">Not For</span>
            <span className="block text-gradient-aprilia">Everyone.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg"
          >
            Built for those who are. 54 world titles. 294 Grand Prix wins.
            Decades of MotoGP dominance — distilled into every machine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-aprilia-red bg-aprilia-red/10 px-12 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white backdrop-blur-sm transition-all"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-aprilia-red transition-transform duration-500 group-hover:scale-x-100" />
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
            className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── Racing Heritage ─── */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black via-charcoal/20 to-matte-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <ParallaxImage
                src="/images/aprilia-not-for-everyone.webp"
                alt="Aprilia Racing"
                className="aspect-[4/5]"
                intensity={40}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-aprilia-red">
                Racing DNA
              </p>
              <h2 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Born on
                <br />
                the Track.
              </h2>
              <div className="mt-10 space-y-6 text-base leading-relaxed text-white/50">
                <p>
                  Aprilia doesn&apos;t just build vehicles — it engineers
                  dominance. With 54 world championship titles, it has proven
                  itself on the most demanding circuits on earth.
                </p>
                <p>
                  That same obsession with precision and performance lives in
                  every Aprilia you can ride today. From Mugello to Coimbatore,
                  the heritage rides with you.
                </p>
              </div>
              <div className="mt-12 grid max-w-md grid-cols-3 gap-8">
                <div>
                  <p className="font-heading text-4xl font-bold text-aprilia-red">
                    <AnimatedCounter value={54} duration={2} />
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">World Titles</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-bold text-aprilia-red">
                    <AnimatedCounter value={294} duration={2.5} />
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">GP Wins</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-bold text-aprilia-red">1945</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">Founded</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Model Range ─── */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-aprilia-red">
              The Lineup
            </p>
            <h2 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Choose Your Weapon
            </h2>
          </AnimatedSection>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {APRILIA_MODELS.map((model, i) => (
              <AnimatedSection key={model.name} delay={i * 0.12}>
                <div className="group relative overflow-hidden border border-white/5 bg-charcoal/40 transition-all hover:border-aprilia-red/40 hover:bg-charcoal/70">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-charcoal-light to-matte-black">
                    <div className="absolute inset-0 flex items-end justify-end p-6">
                      <div className="h-1 w-16 bg-aprilia-red transition-all duration-500 group-hover:w-24" />
                    </div>
                  </div>
                  <div className="p-10">
                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.25em] text-aprilia-red">
                      {model.tagline}
                    </p>
                    <h3 className="mb-3 font-heading text-2xl font-bold tracking-tight text-white">
                      {model.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/40">
                      {model.description}
                    </p>
                    <Link
                      href="/contact"
                      className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-aprilia-red"
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

      {/* ─── Statement ─── */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aprilia-red/6 blur-[200px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl">
              Sales. Service.
              <br />
              <span className="text-gradient-aprilia">Genuine Parts.</span>
            </h2>
            <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
              Every Aprilia at SKBM comes with the full backing of Piaggio
              Group — factory warranty, certified service, and genuine parts
              that keep your machine performing at its peak.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-white/5 py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Feel the Difference.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/40">
              Words can&apos;t capture the throttle response, the cornering
              precision, the surge of acceleration. Come ride one.
            </p>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-aprilia-red px-12 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white transition-all hover:bg-aprilia-red/90"
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
    </div>
  );
}
