import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-data'
import { Arrow } from '@/components/Arrow'

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

// ---------------------------------------------------------------------------
// Dynamic SEO metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

// ---------------------------------------------------------------------------
// Structured data
// ---------------------------------------------------------------------------

function BlogPostingSchema({
  post,
}: {
  post: { title: string; metaDescription: string; date: string; slug: string }
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Plaza Park Salon Suites',
      url: 'https://plazaparksalonsuites.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Plaza Park Salon Suites',
      url: 'https://plazaparksalonsuites.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://plazaparksalonsuites.com/blog/${post.slug}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function BreadcrumbSchema({
  post,
}: {
  post: { title: string; slug: string }
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://plazaparksalonsuites.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://plazaparksalonsuites.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://plazaparksalonsuites.com/blog/${post.slug}`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ---------------------------------------------------------------------------
// Date formatting
// ---------------------------------------------------------------------------

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <BlogPostingSchema post={post} />
      <BreadcrumbSchema post={post} />

      <article className="bg-cream min-h-screen">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-24 sm:pb-32">
          {/* Breadcrumb */}
          <nav className="text-small text-ink-muted font-body mb-10">
            <Link href="/blog" className="link-draw">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{post.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-display font-heading text-ink leading-heading tracking-tighter">
            {post.title}
          </h1>

          {/* Date */}
          <time
            dateTime={post.date}
            className="block text-small text-ink-muted font-body mt-2 mb-12"
          >
            {formatDate(post.date)}
          </time>

          {/* Content */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Back link */}
          <div className="mt-16 pt-10 border-t border-ink/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-warm font-body link-draw"
            >
              Back to all posts
              <Arrow className="rotate-180" />
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
