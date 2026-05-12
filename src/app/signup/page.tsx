'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    site: '',
  });

  return (
    <section className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-ink-100 py-16 px-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-card border border-ink-200 p-8 md:p-10">
        <h1 className="text-[28px] font-bold text-ink-900 text-center">
          Start your 14-day free trial
        </h1>
        <p className="mt-2 text-center text-ink-500 text-[15px]">
          No credit card required.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 space-y-4"
        >
          <label className="block">
            <span className="block text-[13px] font-semibold text-ink-700 mb-1.5">
              Your name
            </span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <label className="block">
            <span className="block text-[13px] font-semibold text-ink-700 mb-1.5">
              Email
            </span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              placeholder="you@example.com"
              className="w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <label className="block">
            <span className="block text-[13px] font-semibold text-ink-700 mb-1.5">
              Password
            </span>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              placeholder="At least 8 characters"
              className="w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <label className="block">
            <span className="block text-[13px] font-semibold text-ink-700 mb-1.5">
              Your website
            </span>
            <input
              type="url"
              value={form.site}
              onChange={(e) => setForm({ ...form, site: e.target.value })}
              placeholder="https://yoursite.com"
              className="w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 rounded-full transition-colors"
          >
            Create my account
          </button>
        </form>

        <p className="mt-6 text-center text-[12.5px] text-ink-500 leading-relaxed">
          By signing up you agree to our{' '}
          <Link href="/terms" className="text-brand-700 hover:underline">
            Terms
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-brand-700 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <p className="mt-7 text-center text-[14px] text-ink-500">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-brand-700 font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
