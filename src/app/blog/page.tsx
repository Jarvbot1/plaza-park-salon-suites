import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog | Plaza Park Salon Suites | Irving TX',
  description:
    'Insights and advice for independent beauty professionals considering a private salon suite in Valley Ranch, TX.',
  alternates: { canonical: '/blog' },
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <section className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-24 sm:pb-32">
        {/* Heading */}
        <h1 className="text-display font-heading text-ink leading-heading tracking-tighter mb-16 sm:mb-20">
          From the building
        </h1>

        {/* Post list */}
        <div>
          {sorted.map((post, idx) => (
            <article
              key={post.slug}
              className={`pb-10 mb-10 ${idx < sorted.length - 1 ? 'border-b border-ink/10' : ''}`}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="text-subtitle font-heading text-ink link-draw"
              >
                {post.title}
              </Link>
              <time
                dateTime={post.date}
                className="block text-small text-ink-muted font-body mt-2"
              >
                {formatDate(post.date)}
              </time>
              <p className="text-body font-light text-ink-light leading-body mt-3">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
