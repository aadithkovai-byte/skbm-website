import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS,
  NAV_LINKS,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  SHOWROOMS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SOCIAL_LINKS,
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
      <div className="brand-divider" />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.9fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-[22px] border border-white/10 bg-black/70">
                <Image
                  src="/images/skbm-logo.webp"
                  alt="SKBM logo"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.34em] text-bronze-soft">
                  Sri Kovai Bhairavaa
                </p>
                <p className="font-heading text-xl font-semibold text-white">Motocrafts</p>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/58">
              {SITE_DESCRIPTION}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="rounded-full border border-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/84 hover:border-white/24 hover:text-white"
              >
                Call Sales
              </a>
              <Link
                href="/service"
                className="rounded-full bg-bronze px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal hover:bg-bronze-soft"
              >
                Book Service
              </Link>
            </div>

            <div className="flex gap-4 pt-1 text-white/44">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-bronze-soft"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-bronze-soft"
              >
                <FacebookIcon />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-bronze-soft"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-bronze-soft">
                Navigate
              </p>
              <div className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/58 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/about" className="block text-sm text-white/58 hover:text-white">
                  About
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-bronze-soft">
                Contact
              </p>
              <div className="space-y-3 text-sm leading-6 text-white/58">
                <a href={`tel:${PHONE_PRIMARY}`} className="block hover:text-white">
                  +91 {PHONE_PRIMARY}
                </a>
                <a href={`tel:${PHONE_SECONDARY}`} className="block hover:text-white">
                  +91 {PHONE_SECONDARY}
                </a>
                <p>{ADDRESS.full}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-bronze-soft">
              Our Showrooms
            </p>
            {SHOWROOMS.map((showroom) => (
              <a
                key={showroom.name}
                href={showroom.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-white/16"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                  {showroom.type}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-white">
                  {showroom.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{showroom.address}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-bronze-soft">
                  Get directions
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-white/38 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. {SITE_TAGLINE}
          </p>
          <p>Vespa and Aprilia are registered trademarks of Piaggio Group.</p>
        </div>
      </div>
    </footer>
  );
}
