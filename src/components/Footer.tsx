import Link from 'next/link';
import Logo from './Logo';

const COLUMNS = [
  [
    { href: '/#features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/wordpress-plugin', label: 'Wordpress Plugin' },
  ],
  [
    { href: '/about', label: 'About Us' },
    { href: '/partnership', label: 'Advertising Partnership' },
    { href: '/contact', label: 'Contact' },
  ],
  [
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
  ],
];

const SOCIAL = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: (
      <path
        d="M13.5 8.5h-2v-1.5c0-.5.3-.8.8-.8h1.2V4h-1.7C9.7 4 9 4.9 9 6.5v2H7.5v2.2H9V18h2.5v-7.3h1.7l.3-2.2z"
        fill="currentColor"
      />
    ),
  },
  {
    href: 'https://x.com',
    label: 'X',
    icon: (
      <path
        d="M14.2 5h2l-4.4 5 5.2 6.5h-4l-3.1-4-3.6 4H4.4l4.7-5.3L4 5h4l2.8 3.7L14.2 5zm-.7 10.3h1.1L8 6.2H6.8l6.7 9.1z"
        fill="currentColor"
      />
    ),
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: (
      <>
        <rect
          x="4.5"
          y="4.5"
          width="13"
          height="13"
          rx="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="11"
          cy="11"
          r="3"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="15" cy="7" r="0.9" fill="currentColor" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-footer-gradient text-white overflow-hidden">
      <div className="container-page pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-8">
          {/* Brand block */}
          <div>
            <Logo variant="white" />
            <p className="mt-5 text-white/85 text-[15px] leading-relaxed max-w-sm">
              A text-to-speech tool for bloggers and online content creators to
              improve user engagement, accessibility, and grow subscribers from
              their websites.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 transition-colors inline-flex items-center justify-center"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col, idx) => (
            <ul key={idx} className="space-y-3">
              {col.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/85 hover:text-white text-[15px] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Copyright row */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white/80 text-[13px]">
          <span>©2026 WebsiteVoice</span>
          <Link href="/terms" className="hover:text-white">
            Terms and Conditions
          </Link>
          <span className="hidden sm:inline opacity-50">|</span>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Giant watermark — sits behind the copyright row, clipped at bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center select-none overflow-hidden"
      >
        <span
          className="text-white/[0.08] font-extrabold leading-[0.85] whitespace-nowrap translate-y-[18%]"
          style={{ fontSize: 'clamp(120px, 22vw, 320px)', letterSpacing: '-0.04em' }}
        >
          WebsiteVoice
        </span>
      </div>
    </footer>
  );
}
