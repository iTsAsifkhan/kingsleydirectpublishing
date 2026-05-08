import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, CheckCircle, ChevronRight, MessageCircle } from 'lucide-react'
import { Button, Container, ServiceCard } from '@/components/ui'
import { services } from '@/lib/content'
import { serviceSchema } from '@/lib/schema'

interface Props {
  params: Promise<{ slug: string; subslug: string }>
}

export function generateStaticParams() {
  return services.flatMap((service) =>
    service.subServices.map((sub) => ({
      slug: service.slug,
      subslug: sub.slug,
    })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, subslug } = await params
  const service = services.find((s) => s.slug === slug)
  const sub = service?.subServices.find((s) => s.slug === subslug)
  if (!service || !sub) return {}

  const title = sub.title
  const url = `https://bookpublishingpartner.com/services/${slug}/${subslug}`

  return {
    title,
    description: sub.shortDescription,
    alternates: { canonical: url },
    openGraph: { title, description: sub.shortDescription, url, type: 'website' },
    twitter: { card: 'summary_large_image', title, description: sub.shortDescription },
  }
}

export default async function SubServicePage({ params }: Props) {
  const { slug, subslug } = await params
  const service = services.find((s) => s.slug === slug)
  const sub = service?.subServices.find((s) => s.slug === subslug)
  if (!service || !sub) notFound()

  const ParentIcon = LucideIcons[service.icon as keyof typeof LucideIcons] as LucideIcon | undefined
  const descParagraphs = sub.longDescription.split('\n\n')
  const otherSubs = service.subServices.filter((s) => s.slug !== subslug).slice(0, 3)
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  const schema = serviceSchema({
    name: sub.title,
    description: sub.shortDescription,
    url: `https://bookpublishingpartner.com/services/${slug}/${subslug}`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ── */}
      <section className="service-hero">
        <Container>
          {/* Breadcrumb */}
          <nav className="subservice-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{sub.title}</span>
          </nav>

          <div className="service-hero-inner">
            <div className="service-hero-content">
              <span className="index-banner-sub-heading service-kicker d-inline-flex align-items-center fw-600 text-white">
                Book Publishing Partner
                {ParentIcon && <ParentIcon size={20} strokeWidth={1.7} aria-hidden="true" />}
              </span>
              <h1 className="service-hero-title fw-700">
                Professional <span className="clr-1">{sub.title}</span> Services
              </h1>
              <p className="service-hero-desc">{sub.shortDescription}</p>
              <div className="service-hero-ctas">
                <Button variant="yellow" href="/contact" icon={ArrowRight}>
                  Get A Quote
                </Button>
                <Button variant="blue" href="/contact" icon={MessageCircle}>
                  Live Chat
                </Button>
              </div>
            </div>

            <div className="service-hero-icon-wrap" aria-hidden="true">
              <div className="service-hero-icon-bg">
                {ParentIcon && <ParentIcon size={80} strokeWidth={1.2} />}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── About ── */}
      <section className="service-about">
        <Container>
          <div className="service-about-grid single-col">
            <div className="service-about-copy">
              <span className="span-tag-border">What We Do</span>
              <h2 className="fw-700 pt-3">
                Expert <span className="clr-1">{sub.title}</span> You Can Trust
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
                {sub.features.map((feat) => (
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

      {/* ── Other sub-services under same parent ── */}
      {otherSubs.length > 0 && (
        <section className="service-related">
          <Container>
            <div className="service-related-header">
              <span className="span-tag-border">{service.title} Services</span>
              <h2 className="fw-700 pt-3">Explore More {service.title} Options</h2>
            </div>
            <div className="subservice-sibling-grid">
              {otherSubs.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${service.slug}/${s.slug}`}
                  className="subservice-sibling-card"
                >
                  <h3 className="subservice-sibling-title fw-600">{s.title}</h3>
                  <p className="subservice-sibling-desc">{s.shortDescription}</p>
                  <span className="subservice-sibling-cta">
                    Learn More <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── Related parent services ── */}
      <section className="service-related" style={{ background: '#fffbf2' }}>
        <Container>
          <div className="service-related-header">
            <span className="span-tag-border">Our Services</span>
            <h2 className="fw-700 pt-3">Other Services We Offer</h2>
          </div>
          <div className="service-related-grid">
            {relatedServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="service-bottom-cta">
        <Container>
          <div className="service-bottom-cta-inner">
            <div>
              <h2 className="fw-700 mb-0" style={{ color: '#ffffff' }}>
                Ready to Get Started with <span className="clr-1">{sub.title}</span>?
              </h2>
              <p className="service-bottom-cta-desc">
                Contact our team today for a free consultation.
              </p>
            </div>
            <div className="service-bottom-cta-actions">
              <Button variant="yellow" href="/contact" icon={ArrowRight}>
                Get A Free Quote
              </Button>
              <Link href={`/services/${service.slug}`} className="service-all-services-link">
                Back to {service.title}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
