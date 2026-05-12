'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';

const NAV = [
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Pricing page (and home, which renders pricing) has the blue hero —
  // header is transparent and uses white text variants.
  const onHero = pathname === '/' || pathname === '/pricing';

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 ${
        onHero ? '' : 'bg-white border-b border-ink-200 relative'
      }`}
    >
      <div className="container-page flex items-center justify-between h-[72px]">
        <Link href="/" aria-label="WebsiteVoice home" className="shrink-0">
          <Logo variant={onHero ? 'white' : 'default'} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-semibold transition-opacity hover:opacity-100 ${
                  onHero
                    ? `text-white ${active ? 'opacity-100' : 'opacity-90'}`
                    : `text-ink-900 ${active ? 'opacity-100' : 'opacity-70'}`
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/login"
            className={`text-[15px] font-semibold ${
              onHero ? 'text-white' : 'text-ink-900'
            }`}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-white text-brand-700 font-bold text-[14px] px-5 h-10 rounded-full inline-flex items-center hover:shadow-card-hover transition-shadow"
          >
            Add for Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`md:hidden w-10 h-10 rounded-md inline-flex items-center justify-center ${
            onHero ? 'text-white bg-white/15' : 'text-ink-900 bg-ink-100'
          }`}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-ink-200 shadow-lg">
          <nav className="container-page py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-ink-900 font-semibold"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-ink-200 mt-2 pt-3 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="py-2 text-ink-900 font-semibold"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="bg-brand-700 text-white font-bold text-center py-3 rounded-full"
              >
                Add for Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
