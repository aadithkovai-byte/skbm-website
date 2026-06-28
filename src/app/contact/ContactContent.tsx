"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  EMAIL,
  ADDRESS,
  HOURS,
  WHATSAPP_NUMBER,
  GOOGLE_MAPS_EMBED,
} from "@/lib/constants";

export default function ContactContent() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-matte-black grain">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/30 via-matte-black to-matte-black" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-vespa-teal"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-heading text-5xl font-bold tracking-tight text-white sm:text-7xl"
          >
            Visit Us.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mx-auto mt-6 max-w-lg text-lg text-white/40"
          >
            Walk into our showroom. See the vehicles. Feel the finish.
            Take a test ride. We&apos;re here for you.
          </motion.p>
        </div>
      </section>

      {/* ─── Contact Info + Map ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Details */}
            <div>
              <AnimatedSection>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vespa-teal">
                  Contact Details
                </p>
                <h2 className="font-heading text-4xl font-bold tracking-tight text-charcoal">
                  Reach Out.
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="mt-12 space-y-10">
                {/* Phone */}
                <div>
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-muted">
                    Phone
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${PHONE_PRIMARY}`}
                      className="block text-xl font-semibold text-charcoal transition-colors hover:text-vespa-teal"
                    >
                      +91 {PHONE_PRIMARY}
                    </a>
                    <a
                      href={`tel:${PHONE_SECONDARY}`}
                      className="block text-xl font-semibold text-charcoal transition-colors hover:text-vespa-teal"
                    >
                      +91 {PHONE_SECONDARY}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-muted">
                    WhatsApp
                  </h3>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#25D366]/90"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat with Us
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-muted">
                    Email
                  </h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-lg text-charcoal transition-colors hover:text-vespa-teal"
                  >
                    {EMAIL}
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-muted">
                    Address
                  </h3>
                  <p className="text-base leading-relaxed text-charcoal">
                    {ADDRESS.line1}
                    <br />
                    {ADDRESS.line2}
                    <br />
                    {ADDRESS.city}, {ADDRESS.state} {ADDRESS.pincode}
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-muted">
                    Showroom Hours
                  </h3>
                  <div className="space-y-2 text-base text-charcoal">
                    <div className="flex justify-between max-w-xs">
                      <span>Monday — Friday</span>
                      <span className="text-gray-muted">{HOURS.weekdays}</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>Saturday</span>
                      <span className="text-gray-muted">{HOURS.saturday}</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>Sunday</span>
                      <span className="text-gray-muted">{HOURS.sunday}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Map */}
            <AnimatedSection delay={0.2} direction="right">
              <div className="relative aspect-square w-full overflow-hidden bg-charcoal/5 lg:aspect-auto lg:h-full lg:min-h-[600px]">
                <iframe
                  src={GOOGLE_MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 600 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Kovai Bhairavaa Motocrafts Location"
                  className="absolute inset-0 h-full w-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Showroom Locations ─── */}
      <section className="bg-off-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Sulur Showroom",
                type: "Flagship — Sales, Service & Parts",
                address: "Next to Aadhi Nexa, Trichy Road, Sulur",
              },
              {
                name: "Sungam Junction",
                type: "Sales & Service",
                address: "Sungam Junction, Coimbatore",
              },
            ].map((loc, i) => (
              <AnimatedSection key={loc.name} delay={i * 0.1}>
                <div className="bg-white p-10 transition-all hover:shadow-lg hover:shadow-charcoal/5">
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-vespa-teal">
                    {loc.type}
                  </p>
                  <h3 className="mb-2 font-heading text-xl font-bold tracking-tight text-charcoal">
                    {loc.name}
                  </h3>
                  <p className="text-sm text-gray-muted">{loc.address}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
