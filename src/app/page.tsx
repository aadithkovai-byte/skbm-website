"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ADDRESS,
  PHONE_PRIMARY,
  HOME_PROOF_STRIP,
  TRUST_PILLARS,
  SERVICE_STEPS,
  SHOWROOMS,
} from "@/lib/constants";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M12 21s6-4.35 6-11a6 6 0 10-12 0c0 6.65 6 11 6 11z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const brandCards = [
  {
    name: "Vespa",
    href: "/vespa",
    eyebrow: "Live more",
    image: "/images/editorial-vespa-milan.webp",
    background: "bg-off-white",
    border: "border-charcoal/8",
    accent: "text-vespa-teal",
    headingClass: "text-charcoal",
    bodyClass: "text-gray-muted",
    buttonClass: "text-charcoal hover:text-vespa-teal",
    line: "For riders drawn to timeless Italian style, ease, and head-turning elegance.",
  },
  {
    name: "Aprilia",
    href: "/aprilia",
    eyebrow: "Designed for racers",
    image: "/images/aprilia-studio.webp",
    background: "bg-charcoal",
    border: "border-white/8",
    accent: "text-aprilia-red",
    headingClass: "text-white",
    bodyClass: "text-white/55",
    buttonClass: "text-white hover:text-aprilia-red",
    line: "For riders who want sharper energy, bolder design, and track-bred attitude.",
  },
];

const ownershipMoments = [
  { src: "/images/delivery-unveil.webp", tag: "Delivery day", className: "lg:col-span-5 lg:row-span-2" },
  { src: "/images/customer-joy.webp", tag: "New Vespa, first smile", className: "lg:col-span-4" },
  { src: "/images/delivery-family.webp", tag: "A family ride", className: "lg:col-span-3" },
  { src: "/images/customer-portrait.webp", tag: "Picked it in person", className: "lg:col-span-3" },
  { src: "/images/delivery-couple.webp", tag: "Handed over with care", className: "lg:col-span-4" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="grain-surface relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 sm:pt-36">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-off-white via-background to-cream" />
        <div className="absolute left-8 top-28 -z-10 h-56 w-56 rounded-full bg-bronze/12 blur-3xl" />
        <div className="absolute bottom-10 right-12 -z-10 h-72 w-72 rounded-full bg-vespa-teal/12 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="pb-4">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="section-kicker text-bronze"
              >
                Authorized Vespa &amp; Aprilia dealer · Coimbatore
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1 }}
                className="mt-6 max-w-3xl font-heading text-5xl leading-[0.98] tracking-tight text-charcoal sm:text-7xl lg:text-[5.4rem]"
              >
                Italian icons,
                <br />
                tuned for <span className="text-gradient-bronze">Coimbatore.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-8 text-gray-muted"
              >
                Two showrooms. One promise — Vespa elegance and Aprilia intensity,
                delivered with genuine parts, trained service, and a delivery day
                worth remembering.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white hover:bg-matte-black"
                >
                  Book a test ride
                  <ArrowIcon />
                </Link>
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-charcoal/12 bg-white/60 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-charcoal hover:border-charcoal/24 hover:bg-white"
                >
                  +91 {PHONE_PRIMARY}
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.18 }}
              className="relative"
            >
              <div className="hero-frame relative overflow-hidden rounded-[36px] bg-charcoal">
                <div className="relative aspect-[5/6] sm:aspect-[4/4] lg:aspect-[5/6]">
                  <Image
                    src="/images/editorial-vespa-milan.webp"
                    alt="Vespa — same icon, new destination, now in Coimbatore"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-matte-black to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-[28px] border border-white/8 bg-black/36 p-5 backdrop-blur-md">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-bronze-soft">
                    Flagship · Sungam Junction
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-white/78 sm:flex-row sm:items-center sm:justify-between">
                    <p>{ADDRESS.line1}, {ADDRESS.line2}</p>
                    <p>+91 {PHONE_PRIMARY}</p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-6 -left-3 hidden w-40 rotate-[-7deg] overflow-hidden rounded-[22px] border border-charcoal/8 bg-white editorial-shadow xl:block">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/customer-joy.webp"
                    alt="A new Vespa owner on delivery day"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute -right-5 top-8 hidden w-36 rotate-[6deg] overflow-hidden rounded-[22px] border border-white/12 bg-charcoal editorial-shadow xl:block">
                <div className="relative aspect-[3/5]">
                  <Image
                    src="/images/editorial-aprilia-poster.webp"
                    alt="Aprilia — not for everyone"
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <AnimatedSection className="mt-12">
            <div className="lux-panel rounded-[30px] p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-4">
                {HOME_PROOF_STRIP.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-charcoal/8 pb-4 last:border-b-0 last:pb-0 lg:border-b-0 lg:border-r lg:pr-6 lg:last:border-r-0"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-gray-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Brand personalities ─── */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker text-bronze">Choose your personality</p>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight text-charcoal sm:text-5xl">
                Decide by identity first.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-gray-muted">
              Two brands, two temperaments. Pick the one that feels like you — then
              let the test ride confirm it.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {brandCards.map((card, index) => (
              <AnimatedSection key={card.name} delay={index * 0.12}>
                <div className={`overflow-hidden rounded-[32px] border ${card.border} ${card.background}`}>
                  <div className="grid sm:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative min-h-[300px]">
                      <Image
                        src={card.image}
                        alt={`${card.name} at SKBM`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 24vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 sm:p-10">
                      <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${card.accent}`}>
                        {card.eyebrow}
                      </p>
                      <h3 className={`mt-4 font-heading text-4xl tracking-tight ${card.headingClass}`}>
                        {card.name}
                      </h3>
                      <p className={`mt-5 text-sm leading-7 ${card.bodyClass}`}>{card.line}</p>
                      <Link
                        href={card.href}
                        className={`mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] ${card.buttonClass}`}
                      >
                        Explore {card.name}
                        <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Real ownership moments (replaces fake testimonials) ─── */}
      <section className="bg-off-white px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker text-bronze">From our showroom floor</p>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight text-charcoal sm:text-5xl">
                Real riders. Real delivery days.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-gray-muted">
              No stock photos. These are the moments that happen at SKBM when a
              Vespa or Aprilia finds its owner.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid auto-rows-[220px] gap-4 lg:grid-cols-9">
            {ownershipMoments.map((item, index) => (
              <AnimatedSection key={item.src} delay={index * 0.08} className={item.className}>
                <div className="group editorial-shadow relative h-full min-h-[220px] overflow-hidden rounded-[26px] border border-charcoal/8 bg-white">
                  <Image
                    src={item.src}
                    alt={item.tag}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    {item.tag}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust pillars ─── */}
      <section className="grain-surface relative overflow-hidden bg-charcoal px-4 py-20 text-white sm:px-6 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(184,135,78,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(214,44,52,0.18),transparent_26%)]" />
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="section-kicker text-bronze-soft">Why riders trust SKBM</p>
              <h2 className="mt-5 font-heading text-4xl tracking-tight text-white sm:text-5xl">
                Premium feeling,
                <br />
                lower hesitation.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {TRUST_PILLARS.map((pillar) => (
                <div key={pillar.title} className="lux-panel-dark rounded-[26px] p-6">
                  <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/56">{pillar.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Path: choose, visit, own ─── */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatedSection className="lux-panel rounded-[32px] p-8 sm:p-10">
              <p className="section-kicker text-bronze">From curiosity to confidence</p>
              <h2 className="mt-5 font-heading text-4xl tracking-tight text-charcoal sm:text-5xl">
                Three simple steps.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-gray-muted">
                Understand the fit, see the vehicle in person, and stay supported
                long after the keys are yours.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-matte-black"
              >
                Book a test ride
                <ArrowIcon />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="grid gap-4">
                {SERVICE_STEPS.map((step, index) => (
                  <div key={step.title} className="lux-panel rounded-[28px] p-6 sm:p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bronze font-heading text-sm font-semibold text-charcoal">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-charcoal">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-gray-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="grain-surface relative overflow-hidden bg-matte-black px-4 py-20 text-white sm:px-6 lg:py-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/editorial-vespa-showroom.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/85 to-matte-black/70" />
        </div>
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="lux-panel-dark rounded-[34px] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="section-kicker text-bronze-soft">Visit us this week</p>
                <h2 className="mt-5 font-heading text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Come ride one.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
                  Some decisions are only made in person. Walk into either showroom,
                  sit on the bike, and feel it for yourself.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-bronze px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal hover:bg-bronze-soft"
                  >
                    Book a test ride
                    <ArrowIcon />
                  </Link>
                  <a
                    href={`tel:${PHONE_PRIMARY}`}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/14 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:border-white/26"
                  >
                    +91 {PHONE_PRIMARY}
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                {SHOWROOMS.map((showroom) => (
                  <a
                    key={showroom.name}
                    href={showroom.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-[24px] border border-white/8 bg-white/[0.04] p-5 transition-colors hover:border-white/18"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-bronze-soft">
                          {showroom.type}
                        </p>
                        <h3 className="mt-2 font-heading text-lg font-semibold text-white">
                          {showroom.name}
                        </h3>
                        <p className="mt-1 text-sm text-white/56">{showroom.address}</p>
                      </div>
                      <span className="mt-1 text-bronze-soft">
                        <PinIcon />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
