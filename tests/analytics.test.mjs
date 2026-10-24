import { test } from "node:test";
import assert from "node:assert/strict";
import {
  GA_MEASUREMENT_ID,
  CONSENT_KEY,
  analyticsPageUrl,
  analyticsReferrer,
  initializeAnalytics,
  trackEnquiry,
} from "../src/lib/analytics.ts";

test("retains campaign tags without forwarding enquiry text, personal details or fragments", () => {
  assert.equal(
    analyticsPageUrl("https://www.skbm.in/contact?utm_source=instagram&utm_medium=paid_social&utm_campaign=diwali&name=Private&phone=1234567890&text=private#booking"),
    "https://www.skbm.in/contact?utm_source=instagram&utm_medium=paid_social&utm_campaign=diwali",
  );
  assert.equal(analyticsPageUrl("https://www.skbm.in/?utm_term=private%40example.com"), "https://www.skbm.in/");
  assert.equal(analyticsReferrer("https://www.google.com/search?q=private"), "https://www.google.com");
});

test("sends nothing before consent, after decline, or from development/preview hosts", () => {
  let choice = null;
  let hostname = "www.skbm.in";
  const calls = [];
  const mockWindow = {
    dispatchEvent: () => true,
    location: { get hostname() { return hostname; }, href: "https://www.skbm.in/contact?name=Private" },
    gtag: (...args) => calls.push(args),
  };
  Object.defineProperty(globalThis, "window", { configurable: true, value: mockWindow });
  Object.defineProperty(globalThis, "document", { configurable: true, value: { referrer: "https://google.com/?q=private" } });
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: { getItem: (key) => key === CONSENT_KEY ? choice : null } });
  initializeAnalytics();
  trackEnquiry("whatsapp_click");
  choice = "declined";
  trackEnquiry("phone_click");
  choice = "accepted";
  hostname = "localhost";
  trackEnquiry("test_ride_handoff");
  hostname = "skbm-preview.vercel.app";
  trackEnquiry("service_handoff");
  assert.equal(calls.length, 0);
});

test("initializes once and sends a consented enquiry to the correct property with a clean URL", () => {
  const mockWindow = {
    dispatchEvent: () => true,
    location: { hostname: "www.skbm.in", href: "https://www.skbm.in/contact?name=Private&utm_source=instagram" },
    dataLayer: [],
  };
  Object.defineProperty(globalThis, "window", { configurable: true, value: mockWindow });
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: { getItem: () => "accepted" } });
  initializeAnalytics();
  initializeAnalytics();
  trackEnquiry("test_ride_handoff", { model: "Vespa", showroom: "sungam" });
  const queue = mockWindow.dataLayer.map((args) => Array.from(args));
  assert.equal(queue.filter((args) => args[0] === "config").length, 1);
  const config = queue.find((args) => args[0] === "config");
  assert.equal(config[1], GA_MEASUREMENT_ID);
  assert.equal(config[2].send_page_view, false);
  const enquiry = queue.find((args) => args[1] === "test_ride_handoff");
  assert.equal(enquiry[2].page_location, "https://www.skbm.in/contact?utm_source=instagram");
  assert.ok(!JSON.stringify(queue).includes("Private"));
});
