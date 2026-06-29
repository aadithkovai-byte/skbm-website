"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, PHONE_PRIMARY } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          <div
            className={`hidden items-center justify-between px-3 text-[11px] uppercase tracking-[0.3em] text-charcoal/55 transition-all duration-300 md:flex ${
              scrolled ? "pointer-events-none -translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <p>Authorized Vespa and Aprilia dealership in Coimbatore</p>
            <p>Sungam Junction · Sulur</p>
          </div>

          <div
            className={`lux-panel-dark rounded-[28px] px-4 py-3 sm:px-6 ${
              scrolled ? "shadow-2xl shadow-black/30" : "shadow-xl shadow-black/20"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="flex min-w-0 flex-1 items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-black/70">
                  <Image
                    src="/images/skbm-logo.webp"
                    alt="SKBM logo"
                    fill
                    className="object-cover"
                    sizes="48px"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <p className="hidden truncate text-[10px] uppercase tracking-[0.28em] text-bronze-soft/85 sm:block">
                    Sri Kovai Bhairavaa
                  </p>
                  <p className="truncate text-sm font-semibold text-white">
                    <span className="sm:hidden">SKBM Coimbatore</span>
                    <span className="hidden sm:inline">Vespa &amp; Aprilia Coimbatore</span>
                  </p>
                </div>
              </Link>

              <div className="hidden items-center gap-8 lg:flex">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative text-[13px] font-medium uppercase tracking-[0.22em] ${
                        active ? "text-white" : "text-white/64 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {active ? (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-bronze via-bronze-soft to-transparent"
                        />
                      ) : null}
                    </Link>
                  );
                })}
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/78 hover:border-white/20 hover:text-white"
                >
                  Call SKBM
                </a>
                <Link
                  href="/contact"
                  className="rounded-full bg-bronze px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal hover:bg-bronze-soft"
                >
                  Book Visit
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen((value) => !value)}
                className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <span
                  className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                    mobileOpen ? "rotate-45" : "-translate-y-[4px]"
                  }`}
                />
                <span
                  className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                    mobileOpen ? "-rotate-45" : "translate-y-[4px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-charcoal/96 px-4 pb-8 pt-28 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto flex h-full max-w-xl flex-col justify-between rounded-[30px] border border-white/8 bg-white/[0.03] p-6"
            >
              <div className="space-y-3">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-[22px] px-4 py-4 text-2xl uppercase tracking-[0.2em] ${
                        active
                          ? "bg-white/[0.06] text-white"
                          : "text-white/64 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="space-y-4 rounded-[26px] border border-white/8 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-bronze-soft">
                  Sales, service, and genuine parts
                </p>
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="block text-lg font-semibold text-white"
                >
                  +91 {PHONE_PRIMARY}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-bronze px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal"
                >
                  Plan your visit
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
