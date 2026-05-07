import type { Metadata } from 'next'
import {
  Hero,
  HeroMarquee,
  Portfolio,
  Process,
  PurpleCTA,
  Services,
  StatsStrip,
  Testimonials,
  WhyChooseUs,
} from '@/components/sections'
import { organizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Book Publishing Partner | Self-Publishing Services',
  description:
    'Book Publishing Partner helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
  alternates: {
    canonical: 'https://bookpublishingpartner.com',
  },
  openGraph: {
    title: 'Book Publishing Partner | Self-Publishing Services',
    description:
      'Book Publishing Partner helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
    url: 'https://bookpublishingpartner.com',
    type: 'website',
    images: [
      {
        url: 'https://bookpublishingpartner.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Book Publishing Partner self-publishing services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Publishing Partner | Self-Publishing Services',
    description:
      'Book Publishing Partner helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
    images: ['https://bookpublishingpartner.com/og-image.png'],
  },
}

export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Book Publishing Partner',
    url: 'https://bookpublishingpartner.com',
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema(), websiteSchema]),
        }}
      />
      <Hero />
      <HeroMarquee />
      <WhyChooseUs />
      <StatsStrip />
      <Services />
      <PurpleCTA />
      <Process />
      <Portfolio />
      <Testimonials />
    </main>
  )
}
