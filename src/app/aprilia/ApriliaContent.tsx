"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { APRILIA_MODELS } from "@/lib/constants";

export default function ApriliaContent() {
  return (
    <div className="bg-matte-black">
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden grain">
        <div className="absolute inset-0">
          <Image src="/images/aprilia-not-for-everyone.webp" alt="Aprilia — Not For Everyone" fill className="object-cover opacity-20" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-matte-black via-matte-black/70 to-matte-black" />
          <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-aprilia-red/8 blur-[200px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-aprilia-red"
          >
            Designed for Racers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-heading text-6xl font-bold leading-[1.0] tracking-tight text-white sm:text-8xl lg:text-9xl"
          >
            Not For
            <br />
            Everyone.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-white/40"
          >
            Built for those who are. 54 world titles. Decades of MotoGP
            dominance. That racing DNA lives in every Aprilia you ride.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-aprilia-red bg-aprilia-red/10 px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:bg-aprilia-red"
            >
              Book a Test Ride
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Racing Heritage ─── */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black via-charcoal/20 to-matte-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-charcoal via-charcoal-light to-matte-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-heading text-[12rem] font-bold text-white/3">A</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-aprilia-red via-aprilia-red to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-aprilia-red">
                Racing DNA
              </p>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Born on
                <br />
                the Track.
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-white/50">
                Aprilia doesn&apos;t just build vehicles — it engineers dominance.
                With 54 world championship titles, Aprilia has proven itself on the
                most demanding circuits on earth.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/50">
                That same obsession with performance, precision, and pushing
                boundaries is built into every Aprilia you can ride today. From the
                track to the streets of Coimbatore.
              </p>
              <div className="mt-10 grid max-w-sm grid-cols-3 gap-8">
                <div>
                  <p className="font-heading text-3xl font-bold text-aprilia-red">54</p>
                  <p className="mt-1 text-xs text-white/30">World Titles</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-aprilia-red">294</p>
                  <p className="mt-1 text-xs text-white/30">Grand Prix Wins</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-aprilia-red">1945</p>
                  <p className="mt-1 text-xs text-white/30">Founded</p>
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
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Choose Your Weapon
            </h2>
          </AnimatedSection>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {APRILIA_MODELS.map((model, i) => (
              <AnimatedSection key={model.name} delay={i * 0.12}>
                <div className="group relative overflow-hidden border border-white/5 bg-charcoal/50 p-10 transition-all hover:border-aprilia-red/30 hover:bg-charcoal/80">
                  <div className="mb-8 aspect-[4/3] bg-gradient-to-br from-charcoal-light to-matte-black transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="flex h-full items-end justify-end p-4">
                      <div className="h-1 w-12 bg-aprilia-red/50" />
                    </div>
                  </div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-aprilia-red">
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
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-aprilia-red"
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

      {/* ─── Statement ─── */}
      <section className="relative overflow-hidden py-32 grain">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aprilia-red/5 blur-[200px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Sales. Service.
              <br />
              <span className="text-gradient-aprilia">Genuine Parts.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-white/40">
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
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Feel the Difference.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/40">
              Words can&apos;t capture the throttle response, the cornering precision,
              the surge of acceleration. Come ride one.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-aprilia-red px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-aprilia-red/90"
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
    </div>
  );
}
