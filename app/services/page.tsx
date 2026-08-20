import type { Metadata } from 'next'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button, Container, ServiceCard } from '@/components/ui'
import { services } from '@/lib/content'
import { breadcrumbSchema } from '@/lib/schema'

const URL = 'https://kimberleydirectpublishing.com/services'

export const metadata: Metadata = {
  title: 'Book Publishing Services for Authors',
  description:
    'Explore UK book publishing services: ghostwriting, editing, cover design, publishing, and marketing, everything authors need from manuscript to market.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Book Publishing Services for Authors | Kimberley Direct Publishing',
    description:
      'Ghostwriting, editing, cover design, publishing, and marketing services for authors.',
    url: URL,
    type: 'website',
    siteName: 'Kimberley Direct Publishing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Publishing Services for Authors | Kimberley Direct Publishing',
    description:
      'Ghostwriting, editing, cover design, publishing, and marketing services for authors.',
  },
}

export default function ServicesIndexPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://kimberleydirectpublishing.com' },
    { name: 'Services', url: URL },
  ])

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${service.title} Services`,
      url: `https://kimberleydirectpublishing.com/services/${service.slug}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <section className="service-hero">
        <Container>
          <div className="service-hero-inner">
            <div className="service-hero-content">
              <span className="index-banner-sub-heading service-kicker d-inline-flex align-items-center fw-600 text-white">
                Kimberley Direct Publishing
              </span>
              <h1 className="service-hero-title fw-700">
                Everything You Need to <span className="clr-1">Publish With Confidence</span>
              </h1>
              <p className="service-hero-desc">
                From a first idea to a finished, marketed book, our services cover every
                stage of the journey. Explore how we help authors write, edit, design,
                publish, and promote their work.
              </p>
              <div className="service-hero-ctas">
                <Button variant="yellow" href="/contact" icon={ArrowRight}>
                  Get A Quote
                </Button>
                <Button variant="blue" href="/contact" icon={MessageCircle}>
                  Live Chat
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="index-wrap-3 position-relative">
        <Container className="relative z-10">
          <div className="index-wrap-3-heading">
            <div>
              <span className="span-tag-border">Services We Provide</span>
              <h2 className="mb-0 fw-700 pt-3">
                Our Book <span className="clr-1">Publishing Services</span> And Expertise
              </h2>
            </div>
            <p className="mb-0">
              Professional editing, formatting, cover design, and global distribution.
              We make your publishing journey simple and successful.
            </p>
          </div>

          <div className="index-wrap-3-padding-top services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="pt-5 text-center">
            <Button variant="yellow" href="/contact" icon={ArrowRight}>
              Get A Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
