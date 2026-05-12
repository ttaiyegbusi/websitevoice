'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual-only — no real submit
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Questions, feedback, or a partnership idea — drop us a line and someone on our small team will reply within a day."
      />

      <section className="container-page py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16">
        {/* Left: contact details */}
        <div className="space-y-8">
          <div>
            <h3 className="text-[16px] font-bold text-ink-900 mb-2">
              Email us
            </h3>
            <a
              href="mailto:hello@websitevoice.com"
              className="text-brand-700 font-semibold hover:underline"
            >
              hello@websitevoice.com
            </a>
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-ink-900 mb-2">
              For partnerships
            </h3>
            <a
              href="mailto:partners@websitevoice.com"
              className="text-brand-700 font-semibold hover:underline"
            >
              partners@websitevoice.com
            </a>
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-ink-900 mb-2">
              Office hours
            </h3>
            <p className="text-ink-500 text-[15px] leading-relaxed">
              Monday — Friday<br />
              9:00 — 17:00 UTC
            </p>
          </div>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-ink-200 rounded-2xl p-7 md:p-10 shadow-card space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              label="Your name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              required
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              required
            />
          </div>
          <Field
            label="Subject"
            value={form.subject}
            onChange={(v) => setForm({ ...form, subject: v })}
            required
          />
          <Field
            label="Message"
            textarea
            value={form.message}
            onChange={(v) => setForm({ ...form, message: v })}
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-brand-700 hover:bg-brand-800 text-white font-bold text-[15px] px-7 py-3.5 rounded-full transition-colors"
          >
            Send message
          </button>

          {submitted && (
            <p className="text-success-500 text-[14px] font-semibold animate-fade-in">
              Thanks — we got your message and will reply soon.
            </p>
          )}
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  textarea,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const base =
    'w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100 transition';
  return (
    <label className="block">
      <span className="block text-[13px] font-semibold text-ink-700 mb-1.5">
        {label}
        {required && <span className="text-accent-500 ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea
          required={required}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </label>
  );
}
