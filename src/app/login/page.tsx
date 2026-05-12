'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });

  return (
    <section className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-ink-100 py-16 px-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-card border border-ink-200 p-8 md:p-10">
        <h1 className="text-[28px] font-bold text-ink-900 text-center">
          Welcome back
        </h1>
        <p className="mt-2 text-center text-ink-500 text-[15px]">
          Log in to your WebsiteVoice account
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 space-y-4"
        >
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
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13px] font-semibold text-ink-700">
                Password
              </span>
              <a
                href="#"
                className="text-[13px] font-semibold text-brand-700 hover:underline"
              >
                Forgot?
              </a>
            </div>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              placeholder="••••••••"
              className="w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-3.5 rounded-full transition-colors"
          >
            Log in
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3 text-[13px] text-ink-400">
          <span className="flex-1 h-px bg-ink-200" />
          <span>or</span>
          <span className="flex-1 h-px bg-ink-200" />
        </div>

        <button className="mt-6 w-full border border-ink-200 hover:border-ink-400 transition-colors text-ink-900 font-semibold py-3 rounded-full flex items-center justify-center gap-3">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M16.5 9.2c0-.5 0-1-.1-1.5H9v2.8h4.2c-.2 1-.7 1.8-1.5 2.4v2h2.5c1.5-1.3 2.3-3.3 2.3-5.7z"
              fill="#4285F4"
            />
            <path
              d="M9 17c2 0 3.7-.7 5-1.8l-2.5-2c-.7.5-1.5.8-2.5.8-2 0-3.6-1.3-4.2-3.1H2.3v2C3.5 15.4 6 17 9 17z"
              fill="#34A853"
            />
            <path
              d="M4.8 10.9c-.1-.4-.2-.8-.2-1.3s.1-.9.2-1.3v-2H2.3C1.8 7.3 1.5 8.1 1.5 9c0 .9.3 1.7.8 2.6l2.5-2.7z"
              fill="#FBBC05"
            />
            <path
              d="M9 4.5c1.1 0 2.1.4 2.9 1.1l2.1-2.1C12.7 2.3 11 1.5 9 1.5 6 1.5 3.5 3.1 2.3 5.4l2.5 2c.6-1.8 2.2-3 4.2-3z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        <p className="mt-7 text-center text-[14px] text-ink-500">
          New to WebsiteVoice?{' '}
          <Link
            href="/signup"
            className="text-brand-700 font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
}
