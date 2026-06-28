"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxImage from "@/components/ParallaxImage";
import Marquee from "@/components/Marquee";
import {
  HERITAGE_TIMELINE,
  TESTIMONIALS,
  STATS,
  EXPERIENCE_HIGHLIGHTS,
} from "@/lib/constants";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);

  return (
    <>
      {/* ─── Hero — Cinematic, full-bleed, parallax ─── */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-matte-black"
      >
        {/* Background image with subtle scroll parallax */}
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Image
            src="/images/hero-banner.webp"
            alt="Sri Kovai Bhairavaa Motocrafts — Vespa and Aprilia dealership in Coimbatore"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/70 to-matte-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-matte-black/60 via-transparent to-matte-black/60" />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-vespa-teal" />
            <p className="text-[11px] font-medium uppercase tracking-[0.5em] text-vespa-teal">
              Now Open in Coimbatore
            </p>
            <span className="h-px w-12 bg-vespa-teal" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-heading text-[15vw] font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-[10vw] lg:text-[8vw] xl:text-9xl"
          >
            <span className="block">Italian Style.</span>
            <span className="block">Performance.</span>
            <span className="block">Heritage.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Authorized Vespa &amp; Aprilia dealership in Coimbatore.
            <br />
            <span className="text-white/40">Ride excellence. Service excellence.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
          >
            <Link
              href="/vespa"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden border border-white/20 bg-white/5 px-12 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white backdrop-blur-md transition-all hover:border-vespa-teal sm:w-auto"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-vespa-teal transition-transform duration-500 group-hover:scale-x-100" />
              <span className="relative">Explore Vespa</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="relative h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/aprilia"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden border border-white/20 bg-white/5 px-12 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white backdrop-blur-md transition-all hover:border-aprilia-red sm:w-auto"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-aprilia-red transition-transform duration-500 group-hover:scale-x-100" />
              <span className="relative">Explore Aprilia</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="relative h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 text-center"
          >
            <Link
              href="/service"
              className="text-xs font-medium uppercase tracking-[0.3em] text-white/40 transition-colors hover:text-white"
            >
              Book Service →
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Brand Marquee — subtle authority signal ─── */}
      <section className="border-y border-charcoal/5 bg-white py-8">
        <Marquee duration={45}>
          {Array.from({ length: 2 }).flatMap(() =>
            [
              "VESPA",
              "•",
              "APRILIA",
              "•",
              "AUTHORIZED DEALER",
              "•",
              "GENUINE PARTS",
              "•",
              "FACTORY-TRAINED SERVICE",
              "•",
              "PIAGGIO GROUP",
              "•",
            ].map((text, i) => (
              <span
                key={`${text}-${i}-${Math.random()}`}
                className="mx-8 font-heading text-2xl font-bold tracking-tight text-charcoal/20"
              >
                {text}
              </span>
            ))
          )}
        </Marquee>
      </section>

      {/* ─── Dual Brand Showcase — split with real images ─── */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          {/* Vespa side */}
          <Link href="/vespa" className="group relative block min-h-[80vh] overflow-hidden bg-cream">
            <ParallaxImage
              src="/images/vespa-lifestyle-3.webp"
              alt="Vespa — Italian elegance"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              intensity={50}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream/95 via-cream/40 to-cream/20" />
            <div className="relative z-10 flex h-full min-h-[80vh] flex-col items-center justify-end px-8 py-16 text-center">
              <AnimatedSection>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-vespa-teal">
                  Live More
                </p>
                <h2 className="font-heading text-6xl font-bold tracking-tight text-charcoal lg:text-8xl">
                  Vespa
                </h2>
                <p className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-charcoal/70">
                  Rome. Paris. Milan. Kovai. The icon of Italian style arrives in
                  Coimbatore.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-charcoal">
                  Discover
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform group-hover:translate-x-2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </AnimatedSection>
            </div>
          </Link>

          {/* Aprilia side */}
          <Link href="/aprilia" className="group relative block min-h-[80vh] overflow-hidden bg-matte-black">
            <ParallaxImage
              src="/images/aprilia-not-for-everyone.webp"
              alt="Aprilia — designed for racers"
              className="absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
              intensity={50}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black/95 via-matte-black/50 to-matte-black/20" />
            <div className="relative z-10 flex h-full min-h-[80vh] flex-col items-center justify-end px-8 py-16 text-center">
              <AnimatedSection delay={0.15}>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-aprilia-red">
                  Designed for Racers
                </p>
                <h2 className="font-heading text-6xl font-bold tracking-tight text-white lg:text-8xl">
                  Aprilia
                </h2>
                <p className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-white/60">
                  Not for everyone. Built for those who chase the edge.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-white">
                  Discover
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform group-hover:translate-x-2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </AnimatedSection>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── Statement Banner — anchoring "Kovai = Milan" ─── */}
      <section className="relative overflow-hidden bg-matte-black py-32">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-vespa-teal/4 blur-[150px]" />
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-aprilia-red/4 blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-white/40">
              Same Icon. New Destination.
            </p>
            <h2 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Rome. Paris. Milan.
              <br />
              <span className="text-gradient-vespa">Kovai.</span>
            </h2>
            <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg">
              World-class Italian style, now in your city. Two legendary brands.
              One destination — Sri Kovai Bhairavaa Motocrafts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Stats — animated counters for authority bias ─── */}
      <section className="relative bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <p className="font-heading text-5xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
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

      {/* ─── Heritage Timeline — credibility through proven history ─── */}
      <section className="relative bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
              Our Heritage
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Seven Decades.
              <br />
              One Italian Story.
            </h2>
          </AnimatedSection>

          <div className="relative mt-24">
            {/* Center line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-charcoal/10 md:left-1/2" />

            <div className="space-y-16">
              {HERITAGE_TIMELINE.map((event, i) => (
                <AnimatedSection
                  key={event.year}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? "right" : "left"}
                  className="relative"
                >
                  <div className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      <p className="font-heading text-5xl font-bold text-vespa-teal sm:text-6xl">
                        {event.year}
                      </p>
                      <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-charcoal">
                        {event.title}
                      </h3>
                      <p className="mt-4 max-w-sm text-base leading-relaxed text-gray-muted md:max-w-md md:ml-auto md:mr-0">
                        {event.description}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                  </div>
                  {/* Dot on timeline */}
                  <div className="absolute left-4 top-2 h-3 w-3 -translate-x-[5px] rounded-full border-2 border-vespa-teal bg-white md:left-1/2 md:-translate-x-[6px]" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Showroom Experience — reciprocity through narrative ─── */}
      <section className="relative overflow-hidden bg-matte-black py-32">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/vespa-yellow-milan.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/80 to-matte-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
              The SKBM Experience
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              More Than a Purchase.
              <br />A Ceremony.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/50">
              Buying a Vespa or Aprilia should never feel like a transaction.
              At SKBM, every step is designed to honor the brands we represent —
              and the people who choose them.
            </p>
          </AnimatedSection>

          <div className="mt-20 grid gap-px bg-white/5 sm:grid-cols-2">
            {EXPERIENCE_HIGHLIGHTS.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} className="bg-matte-black p-10 lg:p-12">
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-heading text-xs text-vespa-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery — lifestyle context with real imagery ─── */}
      <section className="bg-cream py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
              Lifestyle
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Italian, Embodied.
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[
              { src: "/images/vespa-lifestyle-1.webp", aspect: "aspect-[3/4]", span: "" },
              { src: "/images/vespa-arrive-differently.webp", aspect: "aspect-[3/4]", span: "row-span-2 aspect-[3/8]" },
              { src: "/images/vespa-milan-kovai.webp", aspect: "aspect-square", span: "" },
              { src: "/images/vespa-lifestyle-4.webp", aspect: "aspect-[3/4]", span: "" },
              { src: "/images/vespa-lifestyle-2.webp", aspect: "aspect-square", span: "" },
              { src: "/images/vespa-showroom.webp", aspect: "aspect-square", span: "" },
              { src: "/images/aprilia-not-for-everyone.webp", aspect: "aspect-[3/4]", span: "" },
            ].map((img, i) => (
              <AnimatedSection
                key={img.src}
                delay={i * 0.06}
                className={`relative ${img.aspect} overflow-hidden`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why SKBM ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
              Why Choose SKBM
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Ride Excellence.
              <br />
              Service Excellence.
            </h2>
          </AnimatedSection>

          <div className="mt-20 grid gap-px bg-charcoal/5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Authorized Dealer",
                description: "Official Vespa & Aprilia dealership backed by Piaggio Group. Every vehicle includes full manufacturer warranty.",
              },
              {
                title: "Genuine Parts Only",
                description: "Authentic Piaggio-certified components. No compromises on quality, safety, or performance — ever.",
              },
              {
                title: "Factory-Trained Service",
                description: "Technicians certified by Piaggio with specialized diagnostic equipment. Your bike, treated like it's still on the assembly line.",
              },
              {
                title: "Premium Test Rides",
                description: "Try any model before you commit. Available at both Sulur and Sungam Junction showrooms — no appointment needed.",
              },
              {
                title: "Easy Financing",
                description: "Flexible EMI plans with major banks. We help you ride home your dream — without compromising on the dream.",
              },
              {
                title: "Lifelong Relationship",
                description: "We remember your name, your bike, your service history. SKBM isn't a one-time visit — it's an ongoing partnership.",
              },
            ].map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08} className="bg-white p-10 lg:p-12">
                <span className="mb-6 block font-heading text-xs text-vespa-teal">
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
                <h3 className="mb-3 font-heading text-xl font-bold tracking-tight text-charcoal">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-muted">
                  {feature.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials — social proof ─── */}
      <section className="bg-off-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
              Owner Stories
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              From Those Who Ride.
            </h2>
          </AnimatedSection>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="h-full bg-white p-10 transition-all hover:shadow-xl hover:shadow-charcoal/5 lg:p-12">
                  <div className="mb-6 flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-vespa-teal">
                        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-8 text-lg leading-relaxed text-charcoal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-charcoal/5 pt-6">
                    <p className="font-heading text-base font-bold text-charcoal">{t.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-muted">
                      {t.vehicle} · {t.location}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA — peak-end rule, leave them inspired ─── */}
      <section className="relative overflow-hidden bg-matte-black py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/vespa-arrive-differently.webp"
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/70 to-matte-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
              The next ride
              <br />
              of your life
              <br />
              <span className="text-gradient-vespa">starts here.</span>
            </h2>
            <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
              Walk in. Sit on the bike. Hear the engine. Feel the throttle.
              Some decisions can only be made in person.
            </p>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white px-10 py-4 text-sm font-medium uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-vespa-teal hover:text-white"
              >
                Visit Our Showroom
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center gap-3 border border-white/20 px-10 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white transition-all hover:border-white/50"
              >
                Book a Test Ride
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
