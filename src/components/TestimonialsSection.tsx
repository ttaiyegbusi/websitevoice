import { TESTIMONIALS, type Testimonial } from '@/data/testimonials';

function Stars({ rating }: { rating: number }) {
  // Trustpilot-style green star blocks (approximation, not the real logo)
  return (
    <div className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rating;
        return (
          <span
            key={i}
            className={`w-[22px] h-[22px] inline-flex items-center justify-center ${
              filled ? 'bg-success-500' : 'bg-ink-200'
            }`}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
              <path d="M7 0.5l1.8 4.2 4.5.4-3.4 3 1 4.4L7 10.2 3.1 12.5l1-4.4L.7 5.1l4.5-.4L7 .5z" />
            </svg>
          </span>
        );
      })}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="bg-white rounded-xl border border-ink-200 p-6 flex flex-col min-h-[260px] shrink-0 w-[320px] sm:w-auto relative overflow-hidden">
      {/* Green left edge accent */}
      <span className="absolute left-0 top-0 bottom-0 w-1 bg-success-500" />

      <p className="text-[12.5px] text-ink-500 mb-3">{t.date}</p>
      <div className="flex items-center gap-2 mb-4">
        <Stars rating={t.rating} />
        <span className="text-[13.5px] font-semibold text-ink-700">
          {t.rating}/5
        </span>
        <span className="text-[13.5px] text-ink-500">{t.platform}</span>
      </div>
      <p className="text-[14.5px] text-ink-900 leading-relaxed flex-1">
        {t.quote}
      </p>
      <div className="mt-5">
        <p className="font-bold text-[14px] text-ink-900">{t.author}</p>
        <p className="text-[13px] text-ink-500">{t.role}</p>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="container-page py-20">
      <div className="text-center mb-12">
        <p className="text-ink-500 text-[14px] mb-2">Testimonials</p>
        <h2 className="text-[28px] md:text-[34px] font-bold text-ink-900">
          Trusted by Listeners who love us
        </h2>
        <p className="mt-3 text-ink-500 text-[15px]">
          Hear what people actually say about us
        </p>
      </div>

      {/* Mobile: horizontal scroll. Desktop: 3-column grid */}
      <div className="md:hidden -mx-5 px-5 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 snap-x snap-mandatory">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="snap-center">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:grid grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </section>
  );
}
