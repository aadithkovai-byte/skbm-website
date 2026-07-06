"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { ApriliaLogo, VespaLogo } from "@/components/BrandLogos";
import {
  PHONE_PRIMARY,
  HOME_PROOF_STRIP,
  TRUST_PILLARS,
  SERVICE_STEPS,
  SHOWROOMS,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS,
  HERITAGE_TIMELINE,
  MAPS_SUNGAM,
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

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2.92 6.26 6.87.63-5.2 4.55 1.54 6.73L12 16.7l-6.13 3.47 1.54-6.73-5.2-4.55 6.87-.63L12 2z" />
    </svg>
  );
}

const brandCards = [
  {
    name: "Vespa",
    href: "/vespa",
    eyebrow: "Live more",
    image: "/images/brand-vespa-courtyard.webp",
    imageClass: "object-[70%_center]",
    background: "bg-off-white",
    border: "border-white/10",
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
    imageClass: "",
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
  { src: "/images/delivery-cust-3.webp", tag: "The big reveal", className: "lg:col-span-4" },
  { src: "/images/delivery-family.webp", tag: "A family ride", className: "lg:col-span-3" },
  { src: "/images/delivery-cust-2.webp", tag: "New rider, new Vespa", className: "lg:col-span-3" },
  { src: "/images/customer-portrait.webp", tag: "Picked it in person", className: "lg:col-span-3" },
  { src: "/images/delivery-cust-1.webp", tag: "First look", className: "lg:col-span-2" },
  { src: "/images/delivery-cust-4.webp", tag: "Keys in hand", className: "lg:col-span-3" },
  { src: "/images/delivery-couple.webp", tag: "Handed over with care", className: "lg:col-span-4" },
];

export default function HomePage() {
  return (
    <div className="bg-matte-black text-white">
      {/* ─── Hero: both icons, one stage (image behind text on desktop; pure black + image below on mobile) ─── */}
      <section className="relative flex items-end overflow-hidden px-4 pb-14 pt-40 lg:min-h-[94vh] lg:pb-20 lg:pt-44 sm:px-6">
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/images/hero-duo.webp"
            alt="A Vespa and an Aprilia together in the SKBM studio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-matte-black/92 via-matte-black/55 to-matte-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-matte-black to-transparent" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-matte-black/70 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-kicker text-bronze-soft"
          >
            Authorized Vespa &amp; Aprilia dealer · Coimbatore
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mt-6 max-w-3xl font-heading text-5xl leading-[0.98] tracking-tight text-off-white sm:text-7xl lg:text-[5.4rem]"
          >
            Italian icons,
            <br />
            tuned for <span className="text-gradient-bronze">Coimbatore.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-white/65"
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
              href="/contact#test-ride"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-bronze px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-charcoal hover:bg-bronze-soft"
            >
              Book a test ride
              <ArrowIcon />
            </Link>
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/[0.04] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm hover:border-white/32"
            >
              +91 {PHONE_PRIMARY}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/45">
              Authorized dealer of
            </p>
            <VespaLogo className="h-7 w-auto text-white/85" />
            <ApriliaLogo className="h-7 w-auto text-white/85" />
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <a
              href={MAPS_SUNGAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/55 hover:text-bronze-soft"
            >
              <StarIcon className="h-3.5 w-3.5 text-bronze" />
              {GOOGLE_RATING}+ stars on Google · {GOOGLE_REVIEW_COUNT} reviews
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Mobile-only: the hero image in full, right below the text ─── */}
      <section className="px-4 pb-8 sm:px-6 lg:hidden">
        <div className="overflow-hidden rounded-[24px] border border-white/10">
          <Image
            src="/images/hero-duo.webp"
            alt="A Vespa and an Aprilia together in the SKBM studio"
            width={2000}
            height={1125}
            priority
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* ─── Proof strip ─── */}
      <section className="px-4 pb-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="lux-panel-dark rounded-[30px] p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-4">
                {HOME_PROOF_STRIP.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0 lg:border-b-0 lg:border-r lg:pr-6 lg:last:border-r-0"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-bronze-soft">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/55">{item.description}</p>
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
              <p className="section-kicker text-bronze-soft">Choose your personality</p>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight text-off-white sm:text-5xl">
                Decide by identity first.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-white/55">
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
                        className={`object-cover ${card.imageClass}`}
                      />
                    </div>
                    <div className="p-8 sm:p-10">
                      <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${card.accent}`}>
                        {card.eyebrow}
                      </p>
                      <h3 className={`mt-5 ${card.headingClass}`}>
                        {card.name === "Vespa" ? (
                          <VespaLogo className="h-9 w-auto" />
                        ) : (
                          <ApriliaLogo className="h-9 w-auto" />
                        )}
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

      {/* ─── Real ownership moments ─── */}
      <section className="px-4 py-4 pb-20 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker text-bronze-soft">From our showroom floor</p>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight text-off-white sm:text-5xl">
                Real riders. Real delivery days.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-white/55">
              No stock photos. These are the moments that happen at SKBM when a
              Vespa or Aprilia finds its owner.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid auto-rows-[220px] gap-4 lg:grid-cols-9">
            {ownershipMoments.map((item, index) => (
              <AnimatedSection key={item.src} delay={index * 0.08} className={item.className}>
                <div className="group relative h-full min-h-[220px] overflow-hidden rounded-[26px] border border-white/10">
                  <Image
                    src={item.src}
                    alt={item.tag}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    {item.tag}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Real Google reviews ─── */}
      <section className="grain-surface relative overflow-hidden bg-charcoal px-4 py-20 sm:px-6 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(184,135,78,0.16),transparent_30%)]" />
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker text-bronze-soft">What riders say</p>
              <h2 className="mt-5 font-heading text-4xl tracking-tight text-off-white sm:text-5xl">
                Rated {GOOGLE_RATING}+ on Google.
              </h2>
            </div>
            <a
              href={MAPS_SUNGAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-bronze-soft hover:text-bronze"
            >
              Read all {GOOGLE_REVIEW_COUNT} reviews
              <ArrowIcon />
            </a>
          </AnimatedSection>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {GOOGLE_REVIEWS.map((review, index) => (
              <AnimatedSection key={review.name} delay={index * 0.1}>
                <figure className="editorial-shadow flex h-full flex-col rounded-[24px] bg-white p-7 sm:p-8">
                  <figcaption>
                    <p className="text-base font-semibold text-charcoal">{review.name}</p>
                    <p className="mt-1 text-xs text-gray-muted">
                      {review.context} · Google review
                    </p>
                  </figcaption>
                  <div className="mt-4 flex gap-1" aria-label="5 star rating">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarIcon key={i} className="h-4 w-4 text-charcoal" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-7 text-charcoal/80">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Heritage timeline ─── */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="text-center">
            <p className="section-kicker justify-center text-bronze-soft">Our heritage</p>
            <h2 className="mt-5 font-heading text-4xl tracking-tight text-off-white sm:text-5xl">
              Eighty years in the making.
            </h2>
          </AnimatedSection>

          <div className="relative mt-16">
            {/* the line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-bronze/60 via-bronze/25 to-transparent md:left-1/2" />

            <div className="space-y-14 md:space-y-20">
              {HERITAGE_TIMELINE.map((event, i) => (
                <AnimatedSection key={event.year} delay={i * 0.08}>
                  <div className="relative pl-12 md:grid md:grid-cols-2 md:gap-14 md:pl-0">
                    {/* dot */}
                    <div className="absolute left-4 top-2 h-3 w-3 -translate-x-[5.5px] rounded-full border-2 border-bronze bg-matte-black md:left-1/2 md:-translate-x-[6px]" />

                    <div className={i % 2 === 0 ? "md:text-right" : "md:order-2 md:text-left"}>
                      <p className="font-heading text-5xl tracking-tight text-bronze sm:text-6xl">
                        {event.year}
                      </p>
                    </div>
                    <div className={i % 2 === 0 ? "mt-3 md:order-2 md:mt-1" : "mt-3 md:text-right md:mt-1"}>
                      <h3 className="font-heading text-xl font-semibold text-white">
                        {event.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-7 text-white/55 md:inline-block">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust pillars ─── */}
      <section className="grain-surface relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(184,135,78,0.14),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(214,44,52,0.14),transparent_26%)]" />
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
      <section className="px-4 pb-20 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatedSection className="lux-panel-dark rounded-[32px] p-8 sm:p-10">
              <p className="section-kicker text-bronze-soft">From curiosity to confidence</p>
              <h2 className="mt-5 font-heading text-4xl tracking-tight text-off-white sm:text-5xl">
                Three simple steps.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-white/55">
                Understand the fit, see the vehicle in person, and stay supported
                long after the keys are yours.
              </p>
              <Link
                href="/contact#test-ride"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-bronze px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal hover:bg-bronze-soft"
              >
                Book a test ride
                <ArrowIcon />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="grid gap-4">
                {SERVICE_STEPS.map((step, index) => (
                  <div key={step.title} className="lux-panel-dark rounded-[28px] p-6 sm:p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bronze font-heading text-sm font-semibold text-charcoal">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-white/55">
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

      {/* ─── Two legendary brands, one destination ─── */}
      <section className="px-4 pb-20 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="hero-frame relative overflow-hidden rounded-[36px]">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/brand-banner.webp"
                  alt="Iconic by heritage, driven by passion — Vespa and Aprilia at Sungam Junction and Sulur"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="grain-surface relative overflow-hidden px-4 pb-24 text-white sm:px-6">
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
                    href="/contact#test-ride"
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
    </div>
  );
}
