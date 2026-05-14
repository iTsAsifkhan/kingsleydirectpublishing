import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpenCheck,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { Button, Container } from '@/components/ui'
import ContactPageForm from '@/components/sections/ContactPageForm'
import FAQ from '@/components/sections/FAQ'
import { organizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Patrick White Publishing | Author Support',
  description:
    'Contact Patrick White Publishing for book publishing, editing, design, ghostwriting, and marketing support. Speak with our author services team today.',
  alternates: { canonical: 'https://patrickwhitepublishing.com/contact' },
  openGraph: {
    title: 'Contact Patrick White Publishing | Author Support',
    description:
      'Contact Patrick White Publishing for book publishing, editing, design, ghostwriting, and marketing support.',
    url: 'https://patrickwhitepublishing.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Patrick White Publishing | Author Support',
    description:
      'Contact Patrick White Publishing for book publishing, editing, design, ghostwriting, and marketing support.',
  },
}

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+61 485 976 735',
    href: 'tel:+61485976735',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@patrickwhitepublishing.com',
    href: 'mailto:info@patrickwhitepublishing.com',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '2nd Floor, 118 Liverpool Street, Hobart, TAS 7000',
    href: 'https://www.google.com/maps/search/?api=1&query=2nd%20Floor%20118%20Liverpool%20Street%20Hobart%20TAS%207000',
  },
]

const SUPPORT_STEPS = [
  {
    icon: MessageCircle,
    title: 'Tell us about your book',
    text: 'Share your manuscript stage, genre, timeline, and the kind of support you need.',
  },
  {
    icon: BookOpenCheck,
    title: 'Get a publishing plan',
    text: 'Our team reviews your goals and recommends the right services for your next step.',
  },
  {
    icon: Clock3,
    title: 'Start with clarity',
    text: 'You receive clear guidance on scope, timing, and what to prepare before production begins.',
  },
]

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Patrick White Publishing',
  url: 'https://patrickwhitepublishing.com/contact',
  mainEntity: organizationSchema(),
}

export default function ContactPage() {
  return (
    <main className="contact-page bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema(), contactPageSchema]),
        }}
      />

      <section className="contact-hero">
        <span className="contact-hero-shade" aria-hidden="true" />
        <span className="contact-hero-star rotation" aria-hidden="true" />

        <Container className="relative z-10">
          <nav className="subservice-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Contact Us</span>
          </nav>

          <div className="contact-hero-grid">
            <div className="contact-hero-copy">
              <span className="index-banner-sub-heading inline-flex items-center gap-3 fw-600 text-white">
                Author Support
                <Send size={18} aria-hidden="true" />
              </span>
              <h1 className="contact-hero-title fw-700">
                Let&apos;s Talk About Your{' '}
                <span className="clr-1">Publishing Goals</span>
              </h1>
              <p className="contact-hero-desc">
                Whether you need ghostwriting, editing, cover design, publishing
                setup, or marketing support, Patrick White Publishing is ready to
                help you move from manuscript to market with confidence.
              </p>
              <div className="service-hero-ctas">
                <Button variant="yellow" href="tel:+61485976735" icon={Phone}>
                  Call Now
                </Button>
                <Button variant="blue" href="mailto:info@patrickwhitepublishing.com" icon={Mail}>
                  Email Us
                </Button>
              </div>
            </div>

            <div className="contact-hero-panel">
              <span className="span-tag-border-yellow">Contact Details</span>
              <div className="contact-detail-list">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    className="contact-detail-card"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="contact-detail-icon">
                      <Icon size={23} aria-hidden="true" />
                    </span>
                    <span>
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="contact-main-section">
        <Container>
          <div className="contact-main-grid">
            <div className="contact-form-card">
              <span className="span-tag-border">Get A Quote</span>
              <h2 className="fw-700">
                Send Us Your Project Details
              </h2>
              <p>
                Use the form below to tell us what you are working on. A publishing
                consultant will review your message and respond with practical next
                steps for your book.
              </p>
              <ContactPageForm />
            </div>

            <aside className="contact-support-card" aria-labelledby="contact-process-title">
              <span className="span-tag-border-yellow">What Happens Next</span>
              <h2 id="contact-process-title" className="fw-700 text-white">
                A Clear Path From First Message To Finished Book
              </h2>
              <div className="contact-support-steps">
                {SUPPORT_STEPS.map(({ icon: Icon, title, text }) => (
                  <article className="contact-support-step" key={title}>
                    <span className="contact-support-icon">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <Link href="/services/publishing" className="contact-support-link">
                Explore publishing services
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      <FAQ />
    </main>
  )
}
