import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Privacy",
  description: "How SKBM measures website visits and handles enquiry details.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-cream px-6 pb-24 pt-40 text-charcoal">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="font-heading text-5xl">Your visit. Your choice.</h1>
        <div className="space-y-3 text-base leading-8">
          <h2 className="font-heading text-2xl">Optional website analytics</h2>
          <p>With your permission, SKBM uses Google Analytics to understand website visits, traffic sources, pages viewed, and clicks to call, get directions, or open WhatsApp. Analytics cookies help distinguish visits. Google also processes device, browser, and approximate location information.</p>
          <p>Analytics starts only after you select Google Analytics and save your cookie choices. You can decline or withdraw your choice using “Cookie preferences” at the bottom left of any page. This does not affect your ability to browse or enquire. Your preference is saved in your browser.</p>
          <p>We exclude names, phone numbers, registration numbers, preferred dates, and message text from our custom analytics events. Form handoffs count an attempt to open WhatsApp; they do not prove a message was sent or a booking confirmed.</p>
          <p>Google Analytics advertising signals and ad personalisation are disabled in this website setup. Read <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Google’s privacy policy</a> for information about Google’s processing.</p>
        </div>
        <div className="space-y-3 text-base leading-8">
          <h2 className="font-heading text-2xl">Optional Meta marketing</h2>
          <p>If you allow Meta marketing cookies, the Meta Pixel shares website page visits and enquiry actions with Meta to measure and improve Facebook and Instagram advertising. This permission is separate from Google Analytics.</p>
          <p>Meta receives information such as the page URL, browser and device information, advertising cookies, and the type of action taken. Our custom events may include a selected vehicle model or showroom. We do not add names, phone numbers, registration numbers, preferred dates or WhatsApp message text to these events. Automatic button and form metadata collection is disabled in our website code.</p>
          <p>Opening WhatsApp or a prepared request is measured as an enquiry action, not a completed purchase or confirmed booking. You can withdraw marketing permission using Cookie preferences. See <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="underline">Meta’s privacy policy</a> for its processing and advertising choices.</p>
        </div>
        <div className="space-y-3 text-base leading-8">
          <h2 className="font-heading text-2xl">Enquiries through WhatsApp</h2>
          <p>Our enquiry forms prepare a WhatsApp message using the details you enter. Those details are sent to SKBM only when you choose to send the message in WhatsApp. WhatsApp and other external services have their own privacy terms.</p>
          <p>For questions about your enquiry or information held by SKBM, use the contact options on our <Link href="/contact" className="underline">contact page</Link>.</p>
        </div>
      </div>
    </section>
  );
}
