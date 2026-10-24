# SKBM website measurement

Set up 24 October 2026 in Aadith's existing Google Analytics account.

- Account: `aadith` / `399478728`
- Existing property: `vespa and aprilia dealorship` / `543502628`
- New web stream: `SKBM — skbm.in` / `16196054314`
- Public measurement ID: `G-LCFY1317Z2` (not a password or API secret)
- Reports: https://analytics.google.com/analytics/web/#/a399478728p543502628/reports/intelligenthome
- Search history: https://search.google.com/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fwww.skbm.in%2F

## What is measured

Consenting visitors on `skbm.in` and `www.skbm.in` only. No tracking from localhost or preview deployments. The website loads GA only after permission, and provides a permanent cookie-preferences control. Declining disables collection and clears previously set GA cookies in the current browser. Ad storage, ad user data, ad personalization, and Google Signals are disabled.

The website explicitly sends page views when Next.js navigation changes the route. In the stream's enhanced measurement settings, history-based page views are OFF to avoid double counting. Automatic outbound clicks, search and form interactions are OFF to avoid collecting WhatsApp message URLs or ambiguous form events. Scroll/video/download measurement remains enabled.

Custom event meanings:

- `whatsapp_click`: clicked a WhatsApp link; no proof of sending.
- `phone_click`: clicked a call link; no proof of a connected call.
- `directions_click`: opened the Sungam or Sulur map.
- `social_click`: opened SKBM's Instagram or Facebook.
- `test_ride_handoff`: valid form handed a prepared request to WhatsApp; not a confirmed booking.
- `service_handoff`: same for the service form.

Custom events exclude names, phones, plates, dates, message text, and full outbound links. Page URLs preserve only allowlisted campaign parameters; referrers retain their origin only. The test-ride event includes only a known vehicle model and showroom slug.

Use UTM campaign links for COYECT, for example `https://www.skbm.in/?utm_source=instagram&utm_medium=paid_social&utm_campaign=campaign_name&utm_content=creative_name`. Counts begin after installation and only cover consenting visitors. GA4 standard reports can take 24–48 hours; use Realtime for immediate verification. Search Console already has historical Google search data, which is separate from all-channel website analytics.

## Meta integration still separate

GA4 does not send events to Meta. No Meta Pixel or Conversions API connection is enabled by this change. For ad learning based on real outcomes, connect the SKBM sales CRM to an SKBM-owned Meta dataset, retaining Meta lead IDs or permitted matching identifiers and actual event times. Send qualified leads, completed test rides and verified sales from their authoritative CRM stages. Exclude synthetic/test records and keep delivery retries repeat-safe. Do not count a WhatsApp click, staff task completion, or a five-message conversation label as a sale.

COYECT can supply the owned dataset ID, proposed event mapping and installation requirements. Pixel installation can be handled in this codebase. CRM CAPI needs a narrow CRM integration plus appropriate Meta dataset access; the agency does not need the GoDaddy account password. SKBM retains ownership. Browser and server copies of the same event must be deduplicated; real CRM outcome events must be distinguished from website click events. Validate in Meta Test Events before enabling live customer event sharing or changing campaign optimisation.

Validation: `node --experimental-strip-types --test tests/analytics.test.mjs`, `npm run lint`, `npx tsc --noEmit`, `npm run build`, then verify live collection and GA Realtime after deployment.
