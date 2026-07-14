import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, CheckCircle, MessageCircle, PhoneCall } from 'lucide-react'
import { Button, Container, ServiceCard } from '@/components/ui'
import { services } from '@/lib/content'
import { serviceSchema } from '@/lib/schema'

interface Props {
  params: Promise<{ slug: string }>
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
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}

  const title = `${service.title} Services`
  const url = `https://kimberleydirectpublishing.com/services/${service.slug}`

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
  const descParagraphs = service.longDescription.split('\n\n')
  const visuals = serviceVisuals[service.slug] ?? serviceVisuals.publishing

  const schema = serviceSchema({
    name: `${service.title} Services`,
    description: service.shortDescription,
    url: `https://kimberleydirectpublishing.com/services/${service.slug}`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="service-hero">
        <Container>
          <div className="service-hero-inner">
            <div className="service-hero-content">
              <span className="index-banner-sub-heading service-kicker d-inline-flex align-items-center fw-600 text-white">
                Kimberley Direct Publishing
                {Icon && <Icon size={20} strokeWidth={1.7} aria-hidden="true" />}
              </span>
              <h1 className="service-hero-title fw-700">
                Professional <span className="clr-1">{service.title}</span> Services
              </h1>
              <p className="service-hero-desc">{service.shortDescription}</p>
              <div className="service-hero-ctas">
                <Button variant="yellow" href="/contact" icon={ArrowRight}>
                  Get A Quote
                </Button>
                <Button variant="blue" href="/contact" icon={MessageCircle}>
                  Live Chat
                </Button>
              </div>
            </div>

            <div className="service-hero-visual" aria-hidden="true">
              <div className="service-visual-circle">
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
                <span className="service-visual-card">
                  {Icon && <Icon size={44} strokeWidth={1.5} />}
                  <b>{service.title}</b>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="service-stats-strip">
        <Container>
          <div className="service-stats-grid">
            <div>
              <strong>5K<span>+</span></strong>
              <p>Published Happy Clients</p>
            </div>
            <div>
              <strong>100<span>+</span></strong>
              <p>Five out of Five Reviews</p>
            </div>
            <div>
              <strong>97%<span>+</span></strong>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="service-about">
        <Container>
          <div className="service-about-grid">
            <div className="service-about-copy">
              <span className="span-tag-border">What We Do</span>
              <h2 className="fw-700 pt-3">
                We Shape Your <span className="clr-1">{service.title}</span> Project for Publishing Success
              </h2>
              <div className="service-long-desc">
                {descParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="service-about-media">
              <Image
                src={visuals.tertiary}
                alt={`${service.title} services at Kimberley Direct Publishing`}
                fill
                quality={82}
                sizes="(min-width: 1024px) 420px, 100vw"
                className="section-placeholder-image clean-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="service-features-section">
        <Container>
          <div className="service-section-heading">
            <span className="span-tag-border">What&apos;s Included</span>
            <h2 className="fw-700 pt-3">
              Complete <span className="clr-1">{service.title}</span> Support
            </h2>
          </div>
          <div className="service-feature-grid">
            {service.features.map((feat, i) => (
              <article className="service-feature-card" key={feat}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <CheckCircle size={28} className="service-feature-check" aria-hidden="true" />
                <h3 className="fw-700">{feat}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="service-process-section">
        <Container>
          <div className="service-process-header">
            <span className="span-tag-border">How It Works</span>
            <h2 className="fw-700 pt-3">
              Our <span className="clr-1">{service.title}</span> Process
            </h2>
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

      <section className="service-bottom-cta">
        <Container>
          <div className="service-bottom-cta-inner">
            <div>
              <h2 className="fw-700 mb-0 text-white">
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
