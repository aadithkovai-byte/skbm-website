"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  WHATSAPP_NUMBER,
  SHOWROOMS,
} from "@/lib/constants";

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactContent() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="grain-surface relative overflow-hidden px-4 pt-36 pb-16 sm:px-6">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-off-white via-background to-cream" />
        <div className="absolute right-10 top-28 -z-10 h-72 w-72 rounded-full bg-bronze/12 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-kicker text-bronze"
          >
            Visit · Call · WhatsApp
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mt-6 max-w-3xl font-heading text-5xl leading-[1.0] tracking-tight text-charcoal sm:text-7xl"
          >
            Two showrooms.
            <br />
            One easy hello.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-muted"
          >
            Walk in to see the bikes, sit on them, and take a test ride. Or reach
            us first — we&apos;ll have everything ready when you arrive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-matte-black"
            >
              +91 {PHONE_PRIMARY}
            </a>
            <a
              href={`tel:${PHONE_SECONDARY}`}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-charcoal/12 bg-white/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal hover:border-charcoal/24 hover:bg-white"
            >
              +91 {PHONE_SECONDARY}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#1ebe5b]"
            >
              <WhatsAppGlyph />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Showrooms with maps ─── */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          {SHOWROOMS.map((showroom, index) => (
            <AnimatedSection key={showroom.name} delay={index * 0.1}>
              <div className="overflow-hidden rounded-[32px] border border-charcoal/8 bg-off-white">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 sm:p-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">
                      {showroom.type}
                    </p>
                    <h2 className="mt-4 font-heading text-4xl tracking-tight text-charcoal">
                      {showroom.name}
                    </h2>
                    <p className="mt-4 max-w-sm text-base leading-7 text-gray-muted">
                      {showroom.address}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={`tel:${showroom.phone}`}
                        className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-matte-black"
                      >
                        +91 {showroom.phone}
                      </a>
                      <a
                        href={showroom.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-charcoal/14 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal hover:border-charcoal/28"
                      >
                        Get directions
                      </a>
                    </div>
                  </div>

                  <div className="relative min-h-[320px] border-t border-charcoal/8 lg:border-l lg:border-t-0">
                    <iframe
                      src={showroom.embed}
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: 320 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${showroom.name} location map`}
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
