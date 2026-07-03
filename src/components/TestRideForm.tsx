"use client";

import { useState, type FormEvent } from "react";
import {
  APRILIA_MODELS,
  SHOWROOMS,
  VESPA_MODELS,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export default function TestRideForm() {
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    showroom: "",
    day: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = encodeURIComponent(
      `Test Ride Request\n\nName: ${formData.name}\nBike: ${formData.model}\nShowroom: ${formData.showroom}\nPreferred day: ${formData.day || "Flexible"}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-bronze/15">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 text-bronze">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mb-2 font-heading text-2xl font-semibold text-charcoal">Request sent</h3>
        <p className="max-w-sm text-gray-muted">
          Your test ride request is on its way to our WhatsApp. We&apos;ll confirm
          your slot shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-bronze underline underline-offset-4"
        >
          Book another test ride
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="tr-name" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-gray-muted">
            Your Name
          </label>
          <input
            type="text"
            id="tr-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border-b border-charcoal-light/30 bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-gray-muted/50 focus:border-bronze"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="tr-model" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-gray-muted">
            Which bike?
          </label>
          <select
            id="tr-model"
            required
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
            className="w-full border-b border-charcoal-light/30 bg-transparent py-3 text-foreground outline-none transition-colors focus:border-bronze"
          >
            <option value="">Select a bike</option>
            <optgroup label="Vespa">
              {VESPA_MODELS.map((m) => (
                <option key={m.name}>{m.name}</option>
              ))}
            </optgroup>
            <optgroup label="Aprilia">
              {APRILIA_MODELS.map((m) => (
                <option key={m.name}>{m.name}</option>
              ))}
            </optgroup>
            <option>Not sure yet — help me choose</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="tr-showroom" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-gray-muted">
            Which showroom?
          </label>
          <select
            id="tr-showroom"
            required
            value={formData.showroom}
            onChange={(e) => setFormData({ ...formData, showroom: e.target.value })}
            className="w-full border-b border-charcoal-light/30 bg-transparent py-3 text-foreground outline-none transition-colors focus:border-bronze"
          >
            <option value="">Select a showroom</option>
            {SHOWROOMS.map((s) => (
              <option key={s.name} value={`${s.name} (${s.address})`}>
                {s.name} — {s.address}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="tr-day" className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-gray-muted">
            Preferred day <span className="normal-case text-gray-muted/70">(optional)</span>
          </label>
          <input
            type="date"
            id="tr-day"
            value={formData.day}
            onChange={(e) => setFormData({ ...formData, day: e.target.value })}
            className="w-full border-b border-charcoal-light/30 bg-transparent py-3 text-foreground outline-none transition-colors focus:border-bronze"
          />
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-matte-black"
        >
          Send via WhatsApp
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <p className="mt-4 text-xs text-gray-muted">
          Opens WhatsApp with your request pre-written — nothing is sent until you
          press send.
        </p>
      </div>
    </form>
  );
}
