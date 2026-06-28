"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-matte-black grain">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.webp"
            alt="Sri Kovai Bhairavaa Motocrafts — Vespa and Aprilia dealership"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/70 to-matte-black/50" />
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-vespa-teal/5 blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-aprilia-red/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-vespa-teal">
              Now Open in Coimbatore
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            Italian Style.
            <br />
            Performance.
            <br />
            Heritage.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="mx-auto mt-8 max-w-xl text-lg text-white/50"
          >
            Authorized Vespa &amp; Aprilia dealership in Coimbatore.
            <br className="hidden sm:block" />
            Ride excellence. Service excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/vespa"
              className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:border-vespa-teal hover:bg-vespa-teal/10"
            >
              Explore Vespa
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/aprilia"
              className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:border-aprilia-red hover:bg-aprilia-red/10"
            >
              Explore Aprilia
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
            >
              Book Service
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Dual Brand Showcase ─── */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Vespa side */}
          <div className="relative min-h-[600px] overflow-hidden bg-cream lg:min-h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-off-white to-cream" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-24 text-center">
              <AnimatedSection>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
                  Live More
                </p>
                <h2 className="font-heading text-5xl font-bold tracking-tight text-charcoal lg:text-6xl">
                  Vespa
                </h2>
                <p className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-charcoal/60">
                  Rome. Paris. Milan. Kovai. The icon of Italian style arrives in
                  Coimbatore. Timeless elegance for those who ride differently.
                </p>
                <Link
                  href="/vespa"
                  className="group mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-vespa-teal"
                >
                  Discover
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </AnimatedSection>
            </div>
          </div>

          {/* Aprilia side */}
          <div className="relative min-h-[600px] overflow-hidden bg-matte-black lg:min-h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-bl from-charcoal/50 via-matte-black to-matte-black" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-aprilia-red/5 blur-[100px]" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-24 text-center">
              <AnimatedSection delay={0.15}>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-aprilia-red">
                  Designed for Racers
                </p>
                <h2 className="font-heading text-5xl font-bold tracking-tight text-white lg:text-6xl">
                  Aprilia
                </h2>
                <p className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-white/50">
                  Not for everyone. Built for those who chase the edge. MotoGP DNA in
                  every ride. Performance without compromise.
                </p>
                <Link
                  href="/aprilia"
                  className="group mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-aprilia-red"
                >
                  Discover
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why SKBM ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gray-muted">
              Why Choose Us
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Ride Excellence.<br />Service Excellence.
            </h2>
          </AnimatedSection>

          <div className="mt-20 grid gap-px bg-charcoal/5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Authorized Dealer",
                description: "Official Vespa & Aprilia dealership backed by Piaggio Group. Every vehicle comes with full manufacturer warranty and genuine certification.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Genuine Parts",
                description: "Only authentic Piaggio-certified components. No compromises on quality, safety, or performance. Every part meets factory specifications.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Expert Service",
                description: "Factory-trained technicians with specialized diagnostic tools. Your vehicle receives the same level of care as it did on the assembly line.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M11.42 15.17l-5.69-5.69a2.25 2.25 0 113.18-3.18l5.69 5.69m-5.69 5.69a2.25 2.25 0 003.18 0l5.69-5.69a2.25 2.25 0 000-3.18l-5.69-5.69" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Test Rides",
                description: "Experience the thrill before you decide. Walk in or book a test ride at our Sulur or Sungam Junction showrooms.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Easy Financing",
                description: "Flexible EMI options and partnerships with all major banks. Drive home your dream ride with plans that fit your budget.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Premium Experience",
                description: "From the moment you walk in, expect nothing less than world-class hospitality. Our showrooms are designed to match the brands we represent.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08} className="bg-white p-10">
                <div className="mb-6 text-charcoal">{feature.icon}</div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-charcoal">
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

      {/* ─── Statement Banner ─── */}
      <section className="relative overflow-hidden bg-matte-black py-32 grain">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-vespa-teal/3 blur-[150px]" />
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-aprilia-red/3 blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Rome. Paris. Milan.
              <br />
              <span className="text-gradient-vespa">Kovai.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/40">
              World-class Italian style, now in your city. Two legendary brands.
              One destination. Experience the finest in two-wheel craftsmanship at
              Sri Kovai Bhairavaa Motocrafts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
                Visit Our Showroom
              </p>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
                See Them.<br />Touch Them.<br />Ride Them.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-gray-muted">
                Pictures can only say so much. Walk into our showroom and experience
                the craftsmanship, the finish, and the feeling that only Italian
                engineering delivers.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-matte-black px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-charcoal"
                >
                  Get Directions
                </Link>
                <Link
                  href="/service"
                  className="inline-flex items-center gap-3 border border-charcoal/20 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-charcoal transition-all hover:border-charcoal"
                >
                  Book a Test Ride
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src="/images/vespa-lifestyle-1.webp" alt="Vespa lifestyle" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/images/vespa-showroom.webp" alt="Vespa showroom" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/images/aprilia-not-for-everyone.webp" alt="Aprilia" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src="/images/vespa-lifestyle-2.webp" alt="Vespa elegance" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
