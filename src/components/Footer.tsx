import Link from "next/link";
import {
  SITE_NAME,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  EMAIL,
  ADDRESS,
  SOCIAL_LINKS,
  HOURS,
  NAV_LINKS,
} from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-matte-black text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-0.5">
              {"SKBM".split("").map((letter, i) => (
                <span
                  key={i}
                  className="inline-flex h-8 w-8 items-center justify-center border border-white/20 text-sm font-bold tracking-wider"
                >
                  {letter}
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              {SITE_NAME}. Authorized Vespa &amp; Aprilia dealership bringing
              Italian excellence to Coimbatore.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-vespa-teal"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-vespa-teal"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-vespa-teal"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href={`tel:${PHONE_PRIMARY}`} className="transition-colors hover:text-white">
                  +91 {PHONE_PRIMARY}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_SECONDARY}`} className="transition-colors hover:text-white">
                  +91 {PHONE_SECONDARY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                {ADDRESS.full}
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Showroom Hours
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex justify-between">
                <span>Mon — Fri</span>
                <span>{HOURS.weekdays}</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>{HOURS.saturday}</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>{HOURS.sunday}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 text-xs text-white/30 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Vespa&reg; and Aprilia&reg; are registered trademarks of Piaggio Group.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
