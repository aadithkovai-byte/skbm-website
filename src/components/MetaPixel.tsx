"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { ENQUIRY_EVENT, subscribeToConsent, type EnquiryEvent } from "@/lib/analytics";
import {
  getMarketingConsent,
  initializeMetaPixel,
  metaPixelEnabled,
  revokeMetaConsent,
  trackMetaEnquiry,
  trackMetaPageView,
} from "@/lib/meta-pixel";

const getServerConsent = () => null;

export default function MetaPixel() {
  const consent = useSyncExternalStore(subscribeToConsent, getMarketingConsent, getServerConsent);
  const pathname = usePathname();
  const previousPage = useRef("");

  useEffect(() => {
    if (consent !== "accepted") {
      previousPage.current = "";
      revokeMetaConsent();
      return;
    }
    if (!metaPixelEnabled()) return;
    initializeMetaPixel();
    window.fbq?.("consent", "grant");
    if (previousPage.current === pathname) return;
    previousPage.current = pathname;
    trackMetaPageView();
  }, [consent, pathname]);

  useEffect(() => {
    function onEnquiry(event: Event) {
      const { name, details } = (event as CustomEvent<{
        name: EnquiryEvent;
        details: { model?: string; showroom?: string };
      }>).detail;
      trackMetaEnquiry(name, details);
    }
    window.addEventListener(ENQUIRY_EVENT, onEnquiry);
    return () => window.removeEventListener(ENQUIRY_EVENT, onEnquiry);
  }, []);

  if (consent !== "accepted" || !metaPixelEnabled()) return null;
  return (
    <Script
      id="skbm-meta-pixel"
      src="https://connect.facebook.net/en_US/fbevents.js"
      strategy="afterInteractive"
    />
  );
}
