import { test } from "node:test";
import assert from "node:assert/strict";
import {
  META_PIXEL_ID,
  MARKETING_CONSENT_KEY,
  metaPixelEnabled,
  initializeMetaPixel,
  trackMetaPageView,
  trackMetaEnquiry,
  setMarketingConsent,
} from "../src/lib/meta-pixel.ts";

const testPixel = "123456789012345";

function browser({ marketing = null, analytics = "accepted", hostname = "www.skbm.in" } = {}) {
  const values = new Map([
    [MARKETING_CONSENT_KEY, marketing],
    ["skbm-analytics-consent-v1", analytics],
  ]);
  const mockWindow = { location: { hostname }, dispatchEvent: () => true };
  Object.defineProperty(globalThis, "window", { configurable: true, value: mockWindow });
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: {
    getItem: (key) => values.get(key),
    setItem: (key, value) => values.set(key, value),
  } });
  Object.defineProperty(globalThis, "document", { configurable: true, value: { cookie: "" } });
  Object.defineProperty(globalThis, "location", { configurable: true, value: { hostname } });
  return mockWindow;
}

test("analytics permission does not permit Meta; missing IDs, declined choices and previews stay off", () => {
  browser();
  assert.equal(metaPixelEnabled(testPixel), false);
  initializeMetaPixel(testPixel);
  assert.equal(window.fbq, undefined);
  browser({ marketing: "declined" });
  assert.equal(metaPixelEnabled(testPixel), false);
  browser({ marketing: "accepted", hostname: "localhost" });
  assert.equal(metaPixelEnabled(testPixel), false);
  browser({ marketing: "accepted", hostname: "skbm-preview.vercel.app" });
  assert.equal(metaPixelEnabled(testPixel), false);
  browser({ marketing: "accepted" });
  assert.equal(metaPixelEnabled(""), false);
  assert.equal(metaPixelEnabled("not-a-pixel"), false);
  if (META_PIXEL_ID) assert.match(META_PIXEL_ID, /^\d{8,20}$/);
});

test("Meta-only consent initializes one pixel and disables automatic form/button collection", () => {
  const mock = browser({ marketing: "accepted", analytics: "declined" });
  initializeMetaPixel(testPixel);
  initializeMetaPixel(testPixel);
  trackMetaPageView(testPixel);
  assert.equal(mock.fbq.queue.filter((args) => args[0] === "init").length, 1);
  assert.deepEqual(mock.fbq.queue.find((args) => args[1] === "autoConfig"), ["set", "autoConfig", false, testPixel]);
  assert.equal(mock.fbq.disablePushState, true);
  assert.deepEqual(mock.fbq.queue.find((args) => args[2] === "PageView"), ["trackSingle", testPixel, "PageView"]);
});

test("handoffs remain custom actions, exclude unexpected fields and never report a Lead or Purchase", () => {
  const mock = browser({ marketing: "accepted" });
  trackMetaEnquiry("test_ride_handoff", { model: "Vespa", showroom: "sungam", name: "PRIVATE NAME", phone: "PRIVATE PHONE", message: "PRIVATE MESSAGE" }, testPixel);
  trackMetaEnquiry("whatsapp_click", {}, testPixel);
  trackMetaEnquiry("social_click", {}, testPixel);
  const events = mock.fbq.queue.filter((args) => args[0].startsWith("track"));
  assert.deepEqual(events, [
    ["trackSingleCustom", testPixel, "TestRideHandoff", { content_name: "Vespa", showroom: "sungam" }],
    ["trackSingleCustom", testPixel, "WhatsAppClick", {}],
  ]);
  assert.ok(!JSON.stringify(events).includes("PRIVATE"));
  assert.ok(!events.some((args) => ["Purchase", "Lead", "Schedule"].includes(args[2])));
});

test("withdrawing marketing consent prevents new tracking and removes queued events before SDK loading", () => {
  const mock = browser({ marketing: "accepted" });
  trackMetaPageView(testPixel);
  trackMetaEnquiry("whatsapp_click", {}, testPixel);
  setMarketingConsent("declined");
  trackMetaPageView(testPixel);
  assert.equal(metaPixelEnabled(testPixel), false);
  assert.equal(mock.fbq.queue.filter((args) => args[0].startsWith("track")).length, 0);
  assert.deepEqual(mock.fbq.queue.at(-1), ["consent", "revoke"]);
});
