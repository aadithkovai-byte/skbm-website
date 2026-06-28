"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceForm from "@/components/ServiceForm";
import { PHONE_PRIMARY, WHATSAPP_NUMBER } from "@/lib/constants";

export default function ServiceContent() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-matte-black grain">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/40 via-matte-black to-matte-black" />
        <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-vespa-teal/5 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-vespa-teal"
          >
            Service Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-heading text-5xl font-bold tracking-tight text-white sm:text-7xl"
          >
            Expert Care for
            <br />
            Italian Machines.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mx-auto mt-6 max-w-lg text-lg text-white/40"
          >
            Factory-trained technicians. Genuine Piaggio parts. Diagnostic tools
            built for precision. Your vehicle deserves nothing less.
          </motion.p>
        </div>
      </section>

      {/* ─── Service Offerings ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-px bg-charcoal/5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Periodic Service",
                description: "Scheduled maintenance to keep your ride performing at its peak. Oil changes, filter replacements, and full inspections.",
              },
              {
                title: "Repairs & Overhaul",
                description: "From minor fixes to complete engine overhauls. Expert diagnostics and precision repair work.",
              },
              {
                title: "Genuine Parts",
                description: "Only Piaggio-certified components. Every part is built to the exact specifications of your vehicle.",
              },
              {
                title: "Warranty Service",
                description: "Full manufacturer warranty coverage. Your vehicle is protected by the Piaggio Group promise.",
              },
            ].map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1} className="bg-white p-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center bg-charcoal/5 text-sm font-bold text-charcoal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-charcoal">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-muted">
                  {service.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Booking Form ─── */}
      <section className="bg-off-white py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
              Book an Appointment
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Schedule Your Service
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-gray-muted">
              Fill in the details below and we&apos;ll confirm your appointment via
              WhatsApp within the hour.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-white p-8 shadow-sm sm:p-12">
              <ServiceForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Quick Contact ─── */}
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/30">
              Need Immediate Help?
            </p>
            <h3 className="font-heading text-3xl font-bold tracking-tight text-white">
              Call or WhatsApp us directly.
            </h3>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:border-white/40"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                +91 {PHONE_PRIMARY}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-[#25D366]/90"
              >
                <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
