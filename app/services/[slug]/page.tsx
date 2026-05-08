import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button, Container, ServiceCard } from '@/components/ui'
import { services } from '@/lib/content'
import { serviceSchema } from '@/lib/schema'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}

  const title = `${service.title} Services`
  const url = `https://bookpublishingpartner.com/services/${service.slug}`

  return {
    title,
    description: service.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: service.shortDescription,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: service.shortDescription,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as LucideIcon | undefined

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  const schema = serviceSchema({
    name: `${service.title} Services`,
    description: service.shortDescription,
    url: `https://bookpublishingpartner.com/services/${service.slug}`,
  })

  const descParagraphs = service.longDescription.split('\n\n')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ── */}
      <section className="service-hero">
        <Container>
          <div className="service-hero-inner">
            <div className="service-hero-content">
              <span className="span-tag-border">Our Services</span>
              <h1 className="service-hero-title fw-700">{service.title} Services</h1>
              <p className="service-hero-desc">{service.shortDescription}</p>
              <div className="service-hero-ctas">
                <Button variant="yellow" href="/contact" icon={ArrowRight}>
                  Get A Quote
                </Button>
                <a href="tel:+18554297565" className="anchor-number-cta">
                  <span className="anchor-number-cta-circle">
                    <ArrowRight size={18} aria-hidden="true" />
                  </span>
                  +1 (855) 429-7565
                </a>
              </div>
            </div>

            <div className="service-hero-icon-wrap" aria-hidden="true">
              <div className="service-hero-icon-bg">
                {Icon && <Icon size={80} strokeWidth={1.2} />}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── About this service ── */}
      <section className="service-about">
        <Container>
          <div className="service-about-grid">
            <div>
              <span className="span-tag-border">What We Do</span>
              <h2 className="fw-700 pt-3">
                Professional <span className="clr-1">{service.title}</span> Services
              </h2>
              <div className="service-long-desc">
                {descParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="service-features-box">
              <h3 className="service-features-heading fw-700">What&apos;s Included</h3>
              <ul className="service-features-list">
                {service.features.map((feat) => (
                  <li key={feat}>
                    <CheckCircle size={18} className="service-feature-check" aria-hidden="true" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Process ── */}
      <section className="service-process-section">
        <Container>
          <div className="service-process-header">
            <span className="span-tag-border">How It Works</span>
            <h2 className="fw-700 pt-3">Our {service.title} Process</h2>
          </div>

          <ol className="service-process-steps">
            {service.process.map((step, i) => (
              <li key={step} className="service-process-step">
                <div className="service-step-number">{String(i + 1).padStart(2, '0')}</div>
                <p className="service-step-label fw-600">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Related services ── */}
      <section className="service-related">
        <Container>
          <div className="service-related-header">
            <span className="span-tag-border">Explore More</span>
            <h2 className="fw-700 pt-3">Related Services</h2>
          </div>

          <div className="service-related-grid">
            {related.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="service-bottom-cta">
        <Container>
          <div className="service-bottom-cta-inner">
            <div>
              <h2 className="fw-700 mb-0" style={{ color: '#ffffff' }}>
                Ready to Start Your <span className="clr-1">{service.title}</span> Journey?
              </h2>
              <p className="service-bottom-cta-desc">
                Talk to our team today and get a free consultation for your project.
              </p>
            </div>
            <div className="service-bottom-cta-actions">
              <Button variant="yellow" href="/contact" icon={ArrowRight}>
                Get A Free Quote
              </Button>
              <Link href="/" className="service-all-services-link">
                View All Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
