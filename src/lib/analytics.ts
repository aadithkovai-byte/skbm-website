// Public measurement ID for Aadith's existing GA4 property (543502628).
export const GA_MEASUREMENT_ID = "G-LCFY1317Z2";
export const CONSENT_KEY = "skbm-analytics-consent-v1";
export const CONSENT_EVENT = "skbm-analytics-consent";
export const ENQUIRY_EVENT = "skbm-website-enquiry";

export type AnalyticsConsent = "accepted" | "declined" | null;
export type EnquiryEvent =
  | "whatsapp_click"
  | "phone_click"
  | "directions_click"
  | "social_click"
  | "test_ride_handoff"
  | "service_handoff";

declare global {
  interface Window {
    [key: `ga-disable-${string}`]: boolean | undefined;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    skbmAnalyticsInitialized?: boolean;
  }
}

let sessionConsent: AnalyticsConsent = null;

export function getAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "accepted" || value === "declined" ? value : sessionConsent;
  } catch {
    return sessionConsent;
  }
}

export function setAnalyticsConsent(value: Exclude<AnalyticsConsent, null>) {
  sessionConsent = value;
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // The choice still works for this page when browser storage is unavailable.
  }
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = value !== "accepted";
  if (value === "declined") {
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    // Remove Analytics cookies set by an earlier visit or earlier consent.
    for (const cookie of document.cookie.split(";")) {
      const name = cookie.trim().split("=")[0];
      if (name === "_ga" || name.startsWith("_ga_")) {
        for (const domain of ["", ";domain=skbm.in", ";domain=.skbm.in", `;domain=${location.hostname}`]) {
          document.cookie = `${name}=;max-age=0;path=/${domain}`;
        }
      }
    }
  } else {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function subscribeToConsent(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

// Do not copy arbitrary query strings (or WhatsApp message text) into reports.
export function analyticsPageUrl(rawUrl: string): string {
  const url = new URL(rawUrl);
  const safe = new URL(url.pathname, url.origin);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id"]) {
    const value = url.searchParams.get(key);
    if (value && value.length <= 100 && /^[\w .~-]+$/.test(value)) {
      safe.searchParams.set(key, value);
    }
  }
  return safe.href;
}

export function analyticsReferrer(rawUrl: string): string {
  if (!rawUrl) return "";
  try {
    // The referring domain is enough for source reports; omit its query and path.
    return new URL(rawUrl).origin;
  } catch {
    return "";
  }
}

export function analyticsEnabled() {
  return (
    typeof window !== "undefined" &&
    ["skbm.in", "www.skbm.in"].includes(window.location.hostname) &&
    getAnalyticsConsent() === "accepted"
  );
}

export function initializeAnalytics() {
  if (!analyticsEnabled() || window.skbmAnalyticsInitialized) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // gtag's queue expects an Arguments object, as in Google's installation code.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: analyticsPageUrl(window.location.href),
    page_referrer: analyticsReferrer(document.referrer),
  });
  window.skbmAnalyticsInitialized = true;
}

export function trackEnquiry(event: EnquiryEvent, details: { model?: string; showroom?: string; channel?: string } = {}) {
  if (typeof window === "undefined") return;
  // Each destination checks its own consent. Analytics permission never grants marketing permission.
  window.dispatchEvent(new CustomEvent(ENQUIRY_EVENT, { detail: { name: event, details } }));
  if (!analyticsEnabled()) return;
  initializeAnalytics();
  window.gtag?.("event", event, {
    ...details,
    send_to: GA_MEASUREMENT_ID,
    page_location: analyticsPageUrl(window.location.href),
    page_referrer: analyticsReferrer(document.referrer),
  });
}
