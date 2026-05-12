import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="container-page pb-16 pt-4">
      <div className="bg-ink-100 rounded-2xl px-6 md:px-10 py-7 md:py-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
        {/* Mic icon */}
        <div className="shrink-0 w-14 h-14 rounded-full bg-brand-700 inline-flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect
              x="9"
              y="3"
              width="6"
              height="11"
              rx="3"
              fill="white"
            />
            <path
              d="M6 11a6 6 0 0012 0M12 17v3M9 20h6"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="text-[20px] md:text-[22px] font-bold text-ink-900">
            Ready to add voice to your website?
          </h3>
          <p className="mt-1 text-ink-500 text-[15px]">
            Enable your website visitors to listen to your content, and improve
            your website metrics.
          </p>
        </div>

        <Link
          href="/signup"
          className="bg-accent-500 hover:bg-accent-600 text-white font-bold tracking-wide uppercase text-[14px] px-7 py-3.5 rounded-full transition-colors whitespace-nowrap"
        >
          Start Free Trial
        </Link>
      </div>
    </section>
  );
}
