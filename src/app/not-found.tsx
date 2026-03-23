import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-32">
      <div className="text-center">
        <h1 className="text-display font-heading mb-4">Page not found</h1>
        <p className="text-body text-ink-light mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="link-draw text-warm inline-flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to home
        </Link>
      </div>
    </section>
  )
}
