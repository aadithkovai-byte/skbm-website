import type { EnquiryEvent } from "./analytics";

// Verified in Events Manager under SKBM's own business portfolio.
// This is a public identifier, never an access token.
export const META_PIXEL_ID: string = "4471979929744832";
export const MARKETING_CONSENT_KEY = "skbm-marketing-consent-v1";
const CONSENT_EVENT = "skbm-analytics-consent";
type MarketingConsent = "accepted" | "declined" | null;

type PixelFunction = ((...args: unknown[]) => void) & {
  queue: unknown[][];
  callMethod?: (...args: unknown[]) => void;
  push?: PixelFunction;
  loaded: boolean;
  version: string;
  disablePushState?: boolean;
};

declare global {
  interface Window {
    fbq?: PixelFunction;
    _fbq?: PixelFunction;
    skbmMetaPixelInitialized?: string;
  }
}

let sessionConsent: MarketingConsent = null;

export function getMarketingConsent(): MarketingConsent {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(MARKETING_CONSENT_KEY);
    return value === "accepted" || value === "declined" ? value : sessionConsent;
  } catch {
    return sessionConsent;
  }
}

export function revokeMetaConsent() {
  // If the SDK is still loading, do not replay earlier queued events after withdrawal.
  if (window.fbq?.queue) {
    window.fbq.queue = window.fbq.queue.filter((args) => !String(args[0]).startsWith("track"));
  }
  window.fbq?.("consent", "revoke");
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if (name === "_fbp" || name === "_fbc") {
      for (const domain of ["", ";domain=skbm.in", ";domain=.skbm.in", `;domain=${location.hostname}`]) {
        document.cookie = `${name}=;max-age=0;path=/${domain}`;
      }
    }
  }
}

export function setMarketingConsent(value: Exclude<MarketingConsent, null>) {
  sessionConsent = value;
  try {
    localStorage.setItem(MARKETING_CONSENT_KEY, value);
  } catch {
    // Keep the choice for this page when storage is unavailable.
  }
  if (value === "declined") {
    revokeMetaConsent();
  } else {
    window.fbq?.("consent", "grant");
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function metaPixelEnabled(pixelId = META_PIXEL_ID) {
  return (
    typeof window !== "undefined" &&
    /^\d{8,20}$/.test(pixelId) &&
    ["skbm.in", "www.skbm.in"].includes(window.location.hostname) &&
    getMarketingConsent() === "accepted"
  );
}

export function initializeMetaPixel(pixelId = META_PIXEL_ID) {
  if (!metaPixelEnabled(pixelId)) return;
  if (!window.fbq) {
    const pixel = function (...args: unknown[]) {
      if (pixel.callMethod) pixel.callMethod(...args);
      else pixel.queue.push(args);
    } as PixelFunction;
    pixel.queue = [];
    pixel.push = pixel;
    pixel.loaded = true;
    pixel.version = "2.0";
    // Next.js page views are sent explicitly, once per route.
    pixel.disablePushState = true;
    window.fbq = pixel;
    window._fbq = pixel;
  }
  if (window.skbmMetaPixelInitialized === pixelId) return;
  window.fbq("consent", "grant");
  // Disable automatic button/form metadata collection; send explicit events only.
  window.fbq("set", "autoConfig", false, pixelId);
  window.fbq("init", pixelId);
  window.skbmMetaPixelInitialized = pixelId;
}

export function trackMetaPageView(pixelId = META_PIXEL_ID) {
  if (!metaPixelEnabled(pixelId)) return;
  initializeMetaPixel(pixelId);
  window.fbq?.("trackSingle", pixelId, "PageView");
}

const ENQUIRY_EVENTS: Partial<Record<EnquiryEvent, string>> = {
  whatsapp_click: "WhatsAppClick",
  phone_click: "PhoneClick",
  directions_click: "DirectionsClick",
  test_ride_handoff: "TestRideHandoff",
  service_handoff: "ServiceHandoff",
};

export function trackMetaEnquiry(
  event: EnquiryEvent,
  details: { model?: string; showroom?: string } = {},
  pixelId = META_PIXEL_ID,
) {
  const name = ENQUIRY_EVENTS[event];
  if (!name || !metaPixelEnabled(pixelId)) return;
  initializeMetaPixel(pixelId);
  const parameters: Record<string, string> = {};
  if (details.model) parameters.content_name = details.model;
  if (details.showroom) parameters.showroom = details.showroom;
  window.fbq?.("trackSingleCustom", pixelId, name, parameters);
}
