import type { Metadata } from 'next'
import { GalleryContent } from './GalleryContent'

export const metadata: Metadata = {
  title: 'Gallery | Plaza Park Salon Suites | Irving TX',
  description:
    'See inside Plaza Park Salon Suites. Private salon suites with canal views and natural light in Irving, TX.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return <GalleryContent />
}
