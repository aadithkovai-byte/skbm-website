"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { MAPS_SULUR, MAPS_SUNGAM } from "@/lib/constants";
import { META_PIXEL_ID, getMarketingConsent, setMarketingConsent } from "@/lib/meta-pixel";
import {
  GA_MEASUREMENT_ID,
  analyticsEnabled,
  analyticsPageUrl,
  analyticsReferrer,
  getAnalyticsConsent,
  initializeAnalytics,
  setAnalyticsConsent,
  subscribeToConsent,
  trackEnquiry,
} from "@/lib/analytics";

const getServerConsent = () => null;

export default function WebsiteAnalytics() {
  const consent = useSyncExternalStore(subscribeToConsent, getAnalyticsConsent, getServerConsent);
  const marketingConsent = useSyncExternalStore(subscribeToConsent, getMarketingConsent, getServerConsent);
  const pathname = usePathname();
  const previousPage = useRef("");
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  function saveChoices(analytics: boolean, marketing: boolean) {
    setAnalyticsConsent(analytics ? "accepted" : "declined");
    setMarketingConsent(marketing ? "accepted" : "declined");
    setPreferencesOpen(false);
  }

  useEffect(() => {
    if (consent !== "accepted") {
      previousPage.current = "";
      window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      return;
    }
    if (!analyticsEnabled()) return;
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
    initializeAnalytics();
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    const page = analyticsPageUrl(window.location.href);
    if (previousPage.current === page) return;
    const referrer = previousPage.current || analyticsReferrer(document.referrer);
    previousPage.current = page;
    window.gtag?.("set", { page_location: page, page_referrer: referrer });
    window.gtag?.("event", "page_view", {
      send_to: GA_MEASUREMENT_ID,
      page_location: page,
      page_referrer: referrer,
    });
  }, [consent, pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com") {
        trackEnquiry("whatsapp_click");
      } else if (url.protocol === "tel:") {
        trackEnquiry("phone_click");
      } else if (link.href === MAPS_SUNGAM || link.href === MAPS_SULUR) {
        // Review links share the same Maps URL, but are not requests for directions.
        if (/reviews|stars/i.test(link.textContent || "")) return;
        trackEnquiry("directions_click", { showroom: link.href === MAPS_SUNGAM ? "sungam" : "sulur" });
      } else if (url.hostname === "www.instagram.com" || url.hostname === "www.facebook.com") {
        trackEnquiry("social_click", { channel: url.hostname.includes("instagram") ? "instagram" : "facebook" });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {consent === "accepted" && analyticsEnabled() && (
        <Script
          id="skbm-google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
          // Preview and development visits must not enter the live reports.
          onLoad={initializeAnalytics}
        />
      )}
      <button
        type="button"
        onClick={() => setPreferencesOpen(true)}
        className="fixed bottom-2 left-3 z-40 rounded-full border border-charcoal/20 bg-cream px-3 py-1.5 text-xs text-charcoal shadow-sm"
      >
        Cookie preferences
      </button>
      {(consent === null || (META_PIXEL_ID && marketingConsent === null) || preferencesOpen) && (
        <section
          aria-label="Cookie preferences"
          className="fixed inset-x-3 bottom-12 z-[70] mx-auto max-w-xl rounded-2xl border border-bronze/40 bg-cream p-5 text-charcoal shadow-xl sm:inset-x-auto sm:left-5 sm:bottom-14"
        >
          <h2 className="font-heading text-xl">A better visit, with your permission.</h2>
          <p className="mt-2 text-sm leading-6">
            Choose which optional cookies we may use. You can change your choice here anytime.
            {" "}<Link href="/privacy" className="underline underline-offset-2">Privacy details</Link>
          </p>
          <form
            key={`${consent}-${marketingConsent}`}
            className="mt-4 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              const choices = new FormData(event.currentTarget);
              saveChoices(choices.has("analytics"), choices.has("marketing"));
            }}
          >
            <label className="flex items-start gap-3 text-sm leading-6">
              <input type="checkbox" name="analytics" defaultChecked={consent === "accepted"} className="mt-1 h-4 w-4 accent-[#b8874e]" />
              <span><span className="font-semibold">Google Analytics.</span> Understand visits, traffic sources and enquiry clicks. Form details and message text are excluded.</span>
            </label>
            {META_PIXEL_ID && (
              <label className="flex items-start gap-3 text-sm leading-6">
                <input type="checkbox" name="marketing" defaultChecked={marketingConsent === "accepted"} className="mt-1 h-4 w-4 accent-[#b8874e]" />
                <span><span className="font-semibold">Meta marketing.</span> Share website visits and enquiry actions with Meta to measure and improve Facebook and Instagram ads.</span>
              </label>
            )}
          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="rounded-full border border-charcoal bg-charcoal px-5 py-2 text-sm text-cream"
            >
              Save choices
            </button>
            <button
              type="button"
              onClick={() => saveChoices(false, false)}
              className="rounded-full border border-charcoal px-5 py-2 text-sm text-charcoal"
            >
              Decline optional cookies
            </button>
          </div>
          </form>
        </section>
      )}
    </>
  );
}
