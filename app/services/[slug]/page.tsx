import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, CheckCircle, MessageCircle, PhoneCall } from 'lucide-react'
import { Button, Container, ServiceCard } from '@/components/ui'
import { services } from '@/lib/content'
import { getPostBySlug } from '@/lib/blog'
import { serviceSchema, breadcrumbSchema } from '@/lib/schema'
import { CONTACT_PHONE } from '@/lib/contact'

// Service -> supporting blog post. Feeds internal link equity down from the
// service pages into the long-form posts (the direction the SEO audit flagged
// as missing). Only rendered when a post exists for that service.
const servicePostSlug: Record<string, string> = {
  ghostwriting: 'how-much-does-a-ghostwriter-cost',
  publishing: 'how-to-self-publish-a-book',
  editing: 'types-of-book-editing-explained',
}

interface Props {
  params: Promise<{ slug: string }>
}

const serviceVisuals: Record<string, { primary: string; secondary: string; tertiary: string }> = {
  ghostwriting: {
    primary: '/images/ayaan and little village light.webp',
    secondary: '/images/3d-book-cover (5).webp',
    tertiary: '/images/3d-book-cover (6).webp',
  },
  editing: {
    primary: '/images/ayaan and little village light.webp',
    secondary: '/images/3d-book-cover (8).webp',
    tertiary: '/images/3d-book-cover (9).webp',
  },
  publishing: {
    primary: '/images/ayaan and little village light.webp',
    secondary: '/images/3d-book-cover (11).webp',
    tertiary: '/images/3d-book-cover (12).webp',
  },
  marketing: {
    primary: '/images/ayaan and little village light.webp',
    secondary: '/images/3d-book-cover (6).webp',
    tertiary: '/images/3d-book-cover (10).webp',
  },
  'cover-design': {
    primary: '/images/ayaan and little village light.webp',
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

  const title = service.metaTitle ?? `${service.title} Services`
  const description = service.metaDescription ?? service.shortDescription
  const url = `https://kimberleydirectpublishing.com/services/${service.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Kimberley Direct Publishing`,
      description,
      url,
      type: 'website',
      siteName: 'Kimberley Direct Publishing',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Kimberley Direct Publishing`,
      description,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as LucideIcon | undefined
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const relatedPost = servicePostSlug[service.slug]
    ? getPostBySlug(servicePostSlug[service.slug])
    : undefined
  const descParagraphs = service.longDescription.split('\n\n')
  const visuals = serviceVisuals[service.slug] ?? serviceVisuals.publishing

  const schema = serviceSchema({
    name: `${service.title} Services`,
    description: service.shortDescription,
    url: `https://kimberleydirectpublishing.com/services/${service.slug}`,
  })

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://kimberleydirectpublishing.com' },
    { name: 'Services', url: 'https://kimberleydirectpublishing.com/services' },
    {
      name: `${service.title} Services`,
      url: `https://kimberleydirectpublishing.com/services/${service.slug}`,
    },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumb]) }}
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
                    alt={`Book cover mockup illustrating Kimberley Direct Publishing ${service.title.toLowerCase()} services`}
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
                    alt={`Published book cover from the Kimberley Direct Publishing ${service.title.toLowerCase()} portfolio`}
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
              <span className="service-stat-icon" aria-hidden="true">
                <LucideIcons.BadgeCheck size={30} strokeWidth={2} />
              </span>
              <p>Trusted by Authors</p>
            </div>
            <div>
              <span className="service-stat-icon" aria-hidden="true">
                <LucideIcons.Star size={30} strokeWidth={2} />
              </span>
              <p>Five-Star Reviews</p>
            </div>
            <div>
              <span className="service-stat-icon" aria-hidden="true">
                <LucideIcons.ShieldCheck size={30} strokeWidth={2} />
              </span>
              <p>Proven Satisfaction</p>
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

      {service.subServices.length > 0 && (
        <section className="service-related subservice-siblings-section">
          <Container>
            <div className="service-related-header">
              <span className="span-tag-border">{service.title} Services</span>
              <h2 className="fw-700 pt-3">Explore Our {service.title} Options</h2>
            </div>
            <div className="subservice-sibling-grid">
              {service.subServices.map((sub, i) => (
                <Link
                  key={sub.slug}
                  href={`/services/${service.slug}/${sub.slug}`}
                  className="subservice-sibling-card"
                >
                  <span className="subservice-sibling-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="subservice-sibling-title fw-600">{sub.title}</h3>
                  <p className="subservice-sibling-desc">{sub.shortDescription}</p>
                  <span className="subservice-sibling-cta">
                    Learn More <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {relatedPost && (
        <section className="service-related">
          <Container>
            <div className="service-related-header">
              <span className="span-tag-border">From the Blog</span>
              <h2 className="fw-700 pt-3">Learn More About {service.title}</h2>
            </div>
            <Link href={`/blogs/${relatedPost.slug}`} className="service-blog-link">
              <span className="service-blog-link-label">{relatedPost.category}</span>
              <span className="service-blog-link-title fw-700">{relatedPost.title}</span>
              <span className="service-blog-link-desc">{relatedPost.excerpt}</span>
              <span className="service-blog-link-cta fw-600">
                Read the guide <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          </Container>
        </section>
      )}

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
              <Link href="/services" className="service-all-services-link">
                View All Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
