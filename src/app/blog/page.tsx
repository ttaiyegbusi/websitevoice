import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { POSTS } from '@/data/posts';

const CATEGORY_COLORS: Record<string, string> = {
  Industry: 'bg-brand-100 text-brand-700',
  Accessibility: 'bg-green-100 text-green-700',
  Technology: 'bg-purple-100 text-purple-700',
  Tutorials: 'bg-amber-100 text-amber-700',
  Analytics: 'bg-pink-100 text-pink-700',
  Growth: 'bg-orange-100 text-orange-700',
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="The blog"
        title="Notes on voice, audio, and the modern web"
        subtitle="Stories, tutorials, and research from the WebsiteVoice team."
      />

      <section className="container-page py-14">
        {/* Featured */}
        <Link
          href={`/blog/${featured.slug}`}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 rounded-2xl bg-white border border-ink-200 p-6 md:p-10 hover:shadow-card-hover transition-shadow group"
        >
          <div className="aspect-[16/10] rounded-xl bg-hero-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid opacity-50" />
            <div className="absolute bottom-4 left-4 text-white/70 text-[12px] uppercase tracking-wider font-semibold">
              Featured
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center px-2.5 h-6 rounded-full text-[12px] font-semibold ${
                  CATEGORY_COLORS[featured.category] ?? 'bg-ink-100 text-ink-700'
                }`}
              >
                {featured.category}
              </span>
              <span className="text-ink-500 text-[13px]">{featured.date}</span>
              <span className="text-ink-500 text-[13px]">·</span>
              <span className="text-ink-500 text-[13px]">{featured.readTime}</span>
            </div>
            <h2 className="text-[26px] md:text-[30px] font-bold text-ink-900 leading-tight group-hover:text-brand-700 transition-colors">
              {featured.title}
            </h2>
            <p className="mt-4 text-ink-500 text-[15.5px] leading-relaxed">
              {featured.excerpt}
            </p>
            <p className="mt-6 text-[14px] text-ink-700 font-semibold">
              By {featured.author}
            </p>
          </div>
        </Link>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="flex flex-col bg-white rounded-2xl border border-ink-200 p-6 hover:shadow-card-hover transition-shadow group"
            >
              <div className="aspect-[16/9] rounded-lg bg-ink-100 mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-brand-200" />
              </div>
              <span
                className={`self-start inline-flex items-center px-2.5 h-6 rounded-full text-[12px] font-semibold ${
                  CATEGORY_COLORS[p.category] ?? 'bg-ink-100 text-ink-700'
                }`}
              >
                {p.category}
              </span>
              <h3 className="mt-3 text-[18px] font-bold text-ink-900 leading-snug group-hover:text-brand-700 transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-ink-500 text-[14.5px] leading-relaxed flex-1">
                {p.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-3 text-[13px] text-ink-500">
                <span className="font-semibold text-ink-700">{p.author}</span>
                <span>·</span>
                <span>{p.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
