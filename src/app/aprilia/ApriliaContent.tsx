"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { APRILIA_MODELS } from "@/lib/constants";

const modelAccent = ["/images/aprilia-studio.webp", "/images/aprilia-lifestyle.webp", "/images/showroom-aprilia.webp"];

export default function ApriliaContent() {
  return (
    <div className="bg-matte-black">
      {/* ─── Hero ─── */}
      <section className="grain-surface relative flex min-h-screen items-center overflow-hidden px-4 pt-32 sm:px-6">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/aprilia-lifestyle.webp"
            alt="Aprilia SR — not for everyone"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/80 to-matte-black/40" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-matte-black to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-kicker text-aprilia-red"
          >
            Designed for racers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mt-6 font-heading text-6xl leading-[0.92] tracking-tight text-white sm:text-8xl lg:text-9xl"
          >
            Not for
            <br />
            <span className="text-gradient-aprilia">everyone.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-8 text-white/55"
          >
            Built for those who are. 54 world titles. 294 Grand Prix wins. That
            racing DNA lives in every Aprilia you ride.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-aprilia-red px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#b81f27]"
            >
              Book a test ride
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Racing heritage ─── */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div className="editorial-shadow relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/8">
                <Image
                  src="/images/aprilia-studio.webp"
                  alt="Aprilia SR studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="section-kicker text-aprilia-red">Racing DNA</p>
              <h2 className="mt-5 font-heading text-4xl tracking-tight text-white sm:text-5xl">
                Born on the track.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-white/55">
                Aprilia doesn&apos;t just build vehicles — it engineers dominance.
                That obsession with precision and performance is built into every
                machine, from Mugello to the streets of Coimbatore.
              </p>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {[
                  { value: "54", label: "World titles" },
                  { value: "294", label: "GP wins" },
                  { value: "1945", label: "Founded" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-4xl tracking-tight text-aprilia-red">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Model lineup ─── */}
      <section className="relative px-4 py-20 sm:px-6 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-charcoal/40" />
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="text-center">
            <p className="section-kicker justify-center text-aprilia-red">The lineup</p>
            <h2 className="mt-5 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Choose your weapon.
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {APRILIA_MODELS.map((model, i) => (
              <AnimatedSection key={model.name} delay={i * 0.12}>
                <div className="group overflow-hidden rounded-[28px] border border-white/8 bg-charcoal/50 transition-colors hover:border-aprilia-red/40">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={modelAccent[i]}
                      alt={model.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-aprilia-red">
                      {model.tagline}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl tracking-tight text-white">
                      {model.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/50">{model.description}</p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:text-aprilia-red"
                    >
                      Enquire
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
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

      {/* ─── CTA ─── */}
      <section className="border-t border-white/8 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Feel the difference.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-8 text-white/50">
              Throttle response, cornering precision, the surge of acceleration —
              words can&apos;t capture it. Come ride one.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-aprilia-red px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#b81f27]"
              >
                Visit a showroom
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
    </div>
  );
}
