import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS } from '@/data/posts';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="py-16 md:py-20">
      <div className="container-page max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-ink-500 hover:text-ink-900 text-[14px] font-semibold mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M10 4L6 8l4 4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to blog
        </Link>

        <div className="flex items-center gap-3 mb-4 text-[13.5px] text-ink-500">
          <span className="font-semibold text-brand-700">{post.category}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-[36px] md:text-[44px] font-bold text-ink-900 leading-tight">
          {post.title}
        </h1>

        <div className="mt-8 flex items-center gap-3 pb-8 border-b border-ink-200">
          <div className="w-10 h-10 rounded-full bg-brand-100 inline-flex items-center justify-center text-brand-700 font-bold">
            {post.author
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <div>
            <p className="text-[14px] font-semibold text-ink-900">
              {post.author}
            </p>
            <p className="text-[13px] text-ink-500">Author</p>
          </div>
        </div>

        <div className="mt-10 prose prose-lg max-w-none space-y-6">
          {post.body.map((para, i) => (
            <p key={i} className="text-ink-700 text-[16.5px] leading-[1.75]">
              {para}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
