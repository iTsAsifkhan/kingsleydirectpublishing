import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, Tag } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import PackagesPricing from '@/components/sections/PackagesPricing'
import PurpleCTA from '@/components/sections/PurpleCTA'
import FAQ from '@/components/sections/FAQ'
import { organizationSchema, breadcrumbSchema } from '@/lib/schema'
import { BASE_CURRENCY, TIERS, SERVICE_PACKAGES, type Price } from '@/lib/packages'

const SITE = 'https://kimberleydirectpublishing.com'

export const metadata: Metadata = {
  title: 'Publishing Packages & Pricing | Kimberley Direct Publishing',
  description:
    'Transparent book publishing packages and à-la-carte pricing — from Amazon KDP setup and cover design to ghostwriting, editing, marketing, and distribution across 10+ platforms. Prices shown in your local currency.',
  alternates: { canonical: `${SITE}/packages` },
  openGraph: {
    title: 'Publishing Packages & Pricing | Kimberley Direct Publishing',
    description:
      'Flagship publishing tiers plus à-la-carte services with transparent, currency-aware pricing.',
    url: `${SITE}/packages`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publishing Packages & Pricing | Kimberley Direct Publishing',
    description:
      'Flagship publishing tiers plus à-la-carte services with transparent, currency-aware pricing.',
  },
}

/** Offer JSON-LD in the base currency (USD) for every priced item. */
function offer(name: string, price: Price) {
  return {
    '@type': 'Offer',
    name,
    price: price.amount,
    priceCurrency: BASE_CURRENCY,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: price.amount,
      priceCurrency: BASE_CURRENCY,
      unitText: price.unit,
    },
    availability: 'https://schema.org/InStock',
    url: `${SITE}/packages`,
  }
}

const offerCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Kimberley Direct Publishing — Packages & Services',
  url: `${SITE}/packages`,
  itemListElement: [
    ...TIERS.map((t) => offer(t.name, t.price)),
    ...SERVICE_PACKAGES.map((s) => offer(s.name, s.price)),
  ],
}

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: `${SITE}/` },
  { name: 'Packages', url: `${SITE}/packages` },
])

export default function PackagesPage() {
  return (
    <main className="packages-page bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema(), offerCatalogSchema, breadcrumb]),
        }}
      />

      {/* Hero */}
      <section className="packages-hero">
        <span className="packages-hero-shade" aria-hidden="true" />

        <Container className="relative z-10">
          <nav className="subservice-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Packages</span>
          </nav>

          <div className="packages-hero-inner">
            <span className="kdp-hero-eyebrow">
              <span className="kdp-hero-eyebrow-dot" aria-hidden="true" />
              <span>Transparent Pricing</span>
              <Tag size={15} aria-hidden="true" />
            </span>
            <h1 className="packages-hero-title fw-700">
              Publishing Packages Built Around{' '}
              <span className="clr-1">Your Book</span>
            </h1>
            <p className="packages-hero-desc">
              Choose an all-in-one flagship tier or hand-pick individual services.
              Every package keeps you in full control of your rights and royalties —
              backed by a 100% satisfaction, money-back guarantee.
            </p>
            <div className="service-hero-ctas">
              <Button variant="yellow" href="/contact" icon={ShieldCheck}>
                Talk to a Consultant
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing (client — dynamic currency) */}
      <section className="packages-pricing-section">
        <Container>
          <PackagesPricing />
        </Container>
      </section>

      <FAQ />
      <PurpleCTA />
    </main>
  )
}
