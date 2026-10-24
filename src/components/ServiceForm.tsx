"use client";

import { useState, type FormEvent } from "react";
import { trackEnquiry } from "@/lib/analytics";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    registration: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = encodeURIComponent(`Service Booking Request\n\nName: ${formData.name}\nPhone: ${formData.phone}\nVehicle: ${formData.vehicle}\nRegistration: ${formData.registration}\nPreferred Date: ${formData.date}`);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
    trackEnquiry("service_handoff");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-vespa-teal/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 text-vespa-teal">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-semibold">Finish in WhatsApp</h3>
        <p className="text-gray-muted">
          Press send in WhatsApp to share your service request. Your appointment is confirmed only after our team replies.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-vespa-teal underline underline-offset-4"
        >
          Book another service
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-gray-muted">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border-b border-charcoal-light/30 bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-gray-muted/50 focus:border-vespa-teal"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-gray-muted">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border-b border-charcoal-light/30 bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-gray-muted/50 focus:border-vespa-teal"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="vehicle" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-gray-muted">
            Vehicle Model
          </label>
          <select
            id="vehicle"
            required
            value={formData.vehicle}
            onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
            className="w-full border-b border-charcoal-light/30 bg-transparent py-3 text-foreground outline-none transition-colors focus:border-vespa-teal"
          >
            <option value="">Select your vehicle</option>
            <optgroup label="Vespa — current range">
              <option>Vespa ZX</option>
              <option>Vespa</option>
              <option>Vespa S</option>
              <option>Vespa Tech / Qala</option>
            </optgroup>
            <optgroup label="Vespa — earlier models">
              <option>Vespa VXL 125</option>
              <option>Vespa VXL 150</option>
              <option>Vespa SXL 125</option>
              <option>Vespa SXL 150</option>
            </optgroup>
            <optgroup label="Aprilia — current range">
              <option>Aprilia Storm 125</option>
              <option>Aprilia SR 175</option>
              <option>Aprilia SR 175 Tribute</option>
            </optgroup>
            <optgroup label="Aprilia — earlier models">
              <option>Aprilia SXR 160</option>
              <option>Aprilia SR 125</option>
              <option>Aprilia SR 160</option>
            </optgroup>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="registration" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-gray-muted">
            Registration Number
          </label>
          <input
            type="text"
            id="registration"
            required
            value={formData.registration}
            onChange={(e) => setFormData({ ...formData, registration: e.target.value })}
            className="w-full border-b border-charcoal-light/30 bg-transparent py-3 text-foreground uppercase outline-none transition-colors placeholder:text-gray-muted/50 placeholder:normal-case focus:border-vespa-teal"
            placeholder="TN 38 XX 0000"
          />
        </div>
      </div>

      <div className="max-w-sm">
        <label htmlFor="date" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-gray-muted">
          Preferred Date
        </label>
        <input
          type="date"
          id="date"
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full border-b border-charcoal-light/30 bg-transparent py-3 text-foreground outline-none transition-colors focus:border-vespa-teal"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 bg-vespa-teal px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-vespa-teal/90 hover:shadow-lg hover:shadow-vespa-teal/20"
        >
          Book Service
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}
