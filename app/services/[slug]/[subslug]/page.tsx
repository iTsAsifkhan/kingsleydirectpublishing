import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, CheckCircle, ChevronRight, MessageCircle, PhoneCall } from 'lucide-react'
import { Button, Container, ServiceCard } from '@/components/ui'
import { services } from '@/lib/content'
import { serviceSchema } from '@/lib/schema'

interface Props {
  params: Promise<{ slug: string; subslug: string }>
}

// Real phone not confirmed — show "Call Now" only when a dialable number exists.
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE

const serviceVisuals: Record<string, { primary: string; secondary: string; tertiary: string }> = {
  ghostwriting: {
    primary: '/images/3d-book-cover (4).webp',
    secondary: '/images/3d-book-cover (5).webp',
    tertiary: '/images/3d-book-cover (6).webp',
  },
  editing: {
    primary: '/images/3d-book-cover (7).webp',
    secondary: '/images/3d-book-cover (8).webp',
    tertiary: '/images/3d-book-cover (9).webp',
  },
  publishing: {
    primary: '/images/3d-book-cover (10).webp',
    secondary: '/images/3d-book-cover (11).webp',
    tertiary: '/images/3d-book-cover (12).webp',
  },
  marketing: {
    primary: '/images/3d-book-cover (1).webp',
    secondary: '/images/3d-book-cover (6).webp',
    tertiary: '/images/3d-book-cover (10).webp',
  },
  'cover-design': {
    primary: '/images/3d-book-cover (2).webp',
    secondary: '/images/3d-book-cover (8).webp',
    tertiary: '/images/3d-book-cover (12).webp',
  },
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
  const url = `https://kimberleydirectpublishing.com/services/${slug}/${subslug}`

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
  const otherSubs = service.subServices.filter((s) => s.slug !== subslug).slice(0, 6)
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3)
  const visuals = serviceVisuals[service.slug] ?? serviceVisuals.publishing

  const schema = serviceSchema({
    name: sub.title,
    description: sub.shortDescription,
    url: `https://kimberleydirectpublishing.com/services/${slug}/${subslug}`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="service-hero subservice-hero">
        <Container>
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
                Kimberley Direct Publishing
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

            <div className="service-hero-visual subservice-hero-visual" aria-hidden="true">
              <div className="service-visual-circle subservice-visual-circle">
                <span className="service-visual-cover service-visual-cover-primary">
                  <Image
                    src={visuals.primary}
                    alt=""
                    fill
                    priority
                    quality={82}
                    sizes="280px"
                    className="section-placeholder-image clean-contain"
                  />
                </span>
                <span className="service-visual-cover service-visual-cover-secondary">
                  <Image
                    src={visuals.secondary}
                    alt=""
                    fill
                    quality={82}
                    sizes="210px"
                    className="section-placeholder-image clean-contain"
                  />
                </span>
                <span className="service-visual-card subservice-visual-card">
                  {ParentIcon && <ParentIcon size={42} strokeWidth={1.5} />}
                  <b>{sub.title}</b>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="service-stats-strip subservice-stats-strip">
        <Container>
          <div className="service-stats-grid">
            <div>
              <strong>
                5K<span>+</span>
              </strong>
              <p>Published Happy Clients</p>
            </div>
            <div>
              <strong>
                100<span>+</span>
              </strong>
              <p>Five out of Five Reviews</p>
            </div>
            <div>
              <strong>
                97%<span>+</span>
              </strong>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="service-about subservice-about">
        <Container>
          <div className="service-about-grid subservice-about-grid">
            <div className="service-about-copy">
              <span className="span-tag-border">What We Do</span>
              <h2 className="fw-700 pt-3">
                Expert <span className="clr-1">{sub.title}</span> Crafted Around Your Book
              </h2>
              <div className="service-long-desc">
                {descParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="service-about-media subservice-about-media" aria-hidden="true">
              <Image
                src={visuals.tertiary}
                alt=""
                fill
                quality={82}
                sizes="(min-width: 1024px) 420px, 100vw"
                className="section-placeholder-image clean-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="service-features-section subservice-features-section">
        <Container>
          <div className="service-section-heading">
            <span className="span-tag-border">What&apos;s Included</span>
            <h2 className="fw-700 pt-3">
              Focused <span className="clr-1">{sub.title}</span> Deliverables
            </h2>
          </div>

          <div className="service-feature-grid subservice-feature-grid">
            {sub.features.map((feat, i) => (
              <article className="service-feature-card subservice-feature-card" key={feat}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <CheckCircle size={28} className="service-feature-check" aria-hidden="true" />
                <h3 className="fw-700">{feat}</h3>
                <p>
                  Every part of the package is shaped to keep your project polished,
                  professional, and ready for the next publishing step.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="service-process-section subservice-process-section">
        <Container>
          <div className="service-process-header">
            <span className="span-tag-border">How It Works</span>
            <h2 className="fw-700 pt-3">A Clear Path from Brief to Finished Work</h2>
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

      {otherSubs.length > 0 && (
        <section className="service-related subservice-siblings-section">
          <Container>
            <div className="service-related-header">
              <span className="span-tag-border">{service.title} Services</span>
              <h2 className="fw-700 pt-3">Explore More {service.title} Options</h2>
            </div>
            <div className="subservice-sibling-grid">
              {otherSubs.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${service.slug}/${s.slug}`}
                  className="subservice-sibling-card"
                >
                  <span className="subservice-sibling-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
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

      <section className="service-related subservice-parent-related">
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

      <section className="service-bottom-cta">
        <Container>
          <div className="service-bottom-cta-inner">
            <div>
              <h2 className="fw-700 mb-0 text-white">
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
              {CONTACT_PHONE && (
                <a
                  href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`}
                  className="anchor-number-cta align-items-center d-inline-flex"
                >
                  <span className="span-1">
                    <PhoneCall aria-hidden="true" className="clr-1" size={18} />
                  </span>
                  <span className="span-2 fw-600 clr-1 d-inline-block">
                    Call Now <br />
                    <b className="text-white">{CONTACT_PHONE}</b>
                  </span>
                </a>
              )}
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
