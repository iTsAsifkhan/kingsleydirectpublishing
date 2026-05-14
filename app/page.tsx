import type { Metadata } from 'next'
import {
  ContactForm,
  FAQ,
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
  title: 'Patrick White Publishing | Professional Book Publishing Services',
  description:
    'Patrick White Publishing helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
  alternates: {
    canonical: 'https://patrickwhitepublishing.com',
  },
  openGraph: {
    title: 'Patrick White Publishing | Professional Book Publishing Services',
    description:
      'Patrick White Publishing helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
    url: 'https://patrickwhitepublishing.com',
    type: 'website',
    images: [
      {
        url: 'https://patrickwhitepublishing.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Patrick White Publishing professional book publishing services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrick White Publishing | Professional Book Publishing Services',
    description:
      'Patrick White Publishing helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
    images: ['https://patrickwhitepublishing.com/og-image.png'],
  },
}

export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Patrick White Publishing',
    url: 'https://patrickwhitepublishing.com',
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
      <FAQ />
      <ContactForm />
    </main>
  )
}
