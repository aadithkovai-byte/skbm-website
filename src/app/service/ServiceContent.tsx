"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceForm from "@/components/ServiceForm";
import { PHONE_PRIMARY, WHATSAPP_NUMBER } from "@/lib/constants";

const SERVICES = [
  {
    title: "Periodic service",
    description: "Scheduled maintenance, oil and filter changes, and full inspections to keep your ride at its peak.",
  },
  {
    title: "Repairs & overhaul",
    description: "From minor fixes to complete engine work — precise diagnostics, done right the first time.",
  },
  {
    title: "Genuine parts",
    description: "Only Piaggio-certified components, built to the exact specification of your Vespa or Aprilia.",
  },
  {
    title: "Warranty service",
    description: "Full manufacturer warranty support, backed by the Piaggio Group promise.",
  },
];

export default function ServiceContent() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="grain-surface relative overflow-hidden px-4 pt-36 pb-16 sm:px-6">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-off-white via-background to-cream" />
        <div className="absolute left-10 top-28 -z-10 h-72 w-72 rounded-full bg-vespa-teal/12 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-kicker text-bronze"
          >
            Service & genuine parts
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mt-6 max-w-3xl font-heading text-5xl leading-[1.0] tracking-tight text-charcoal sm:text-7xl"
          >
            Expert care for
            <br />
            Italian machines.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-muted"
          >
            Factory-trained technicians, genuine Piaggio parts, and proper
            diagnostics. Book in a minute — we confirm over WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* ─── Service offerings ─── */}
      <section className="px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="lux-panel h-full rounded-[26px] p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bronze font-heading text-sm font-semibold text-charcoal">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-muted">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Booking form ─── */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection className="mb-12 text-center">
            <p className="section-kicker justify-center text-bronze">Book an appointment</p>
            <h2 className="mt-5 font-heading text-4xl tracking-tight text-charcoal sm:text-5xl">
              Schedule your service
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-muted">
              Fill in the details and we&apos;ll confirm your slot over WhatsApp.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="lux-panel rounded-[30px] p-8 sm:p-12">
              <ServiceForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Quick contact ─── */}
      <section className="grain-surface relative overflow-hidden bg-charcoal px-4 py-20 text-white sm:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(184,135,78,0.18),transparent_30%)]" />
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="section-kicker justify-center text-bronze-soft">Need help now?</p>
            <h3 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-4xl">
              Call or WhatsApp us directly.
            </h3>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/16 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:border-white/32"
              >
                +91 {PHONE_PRIMARY}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#1ebe5b]"
              >
                WhatsApp us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
