import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import { Button, Container } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Patrick White Publishing privacy policy, including how we collect, use, protect, and manage personal information.',
  alternates: { canonical: 'https://patrickwhitepublishing.com/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Patrick White Publishing',
    description:
      'Read how Patrick White Publishing collects, uses, protects, and manages personal information.',
    url: 'https://patrickwhitepublishing.com/privacy-policy',
    type: 'website',
  },
}

const PRIVACY_SECTIONS = [
  {
    title: 'Information We Collect',
    body: [
      'We may collect personal information you provide when you contact us, request a quote, book a consultation, submit manuscript details, purchase services, or communicate with our team.',
      'This may include your name, email address, phone number, billing details, project information, manuscript materials, communications with us, and website usage information such as device, browser, and analytics data.',
    ],
  },
  {
    title: 'How We Use Information',
    body: [
      'We use personal information to respond to enquiries, provide publishing, writing, editing, design, marketing, and related services, manage projects, process payments, improve our website, and communicate with you about your project.',
      'We may also use your information for administrative, security, record-keeping, legal, and compliance purposes.',
    ],
  },
  {
    title: 'Disclosure Of Information',
    body: [
      'We may share information with trusted service providers who help us operate our business, including writers, editors, designers, marketing specialists, payment processors, hosting providers, analytics tools, and professional advisers.',
      'We do not sell your personal information. We may disclose information if required by law, to protect our legal rights, or with your consent.',
    ],
  },
  {
    title: 'Manuscripts And Project Materials',
    body: [
      'Manuscripts, briefs, notes, illustrations, and related project files are handled as confidential project materials. We use them only to deliver the services you request or as otherwise agreed with you.',
    ],
  },
  {
    title: 'Cookies And Analytics',
    body: [
      'Our website may use cookies, pixels, analytics, and similar technologies to understand visitor activity, improve performance, and support marketing measurement. You can adjust cookie settings through your browser.',
    ],
  },
  {
    title: 'Security And Retention',
    body: [
      'We take reasonable steps to protect personal information from misuse, loss, unauthorised access, modification, or disclosure. No internet transmission or storage system can be guaranteed completely secure.',
      'We keep information for as long as needed for the purposes described in this policy, including service delivery, record keeping, legal obligations, dispute management, and legitimate business needs.',
    ],
  },
  {
    title: 'Access, Correction, And Complaints',
    body: [
      'You may contact us to request access to, or correction of, personal information we hold about you. We may need to verify your identity before responding.',
      'If you have a privacy concern, contact us first so we can review it. If you are not satisfied with our response, you may be able to contact the Office of the Australian Information Commissioner.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page bg-white">
      <section className="legal-hero">
        <span className="legal-hero-shade" aria-hidden="true" />
        <Container className="relative z-10">
          <nav className="subservice-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Privacy Policy</span>
          </nav>

          <div className="legal-hero-copy">
            <span className="index-banner-sub-heading inline-flex items-center gap-3 fw-600 text-white">
              Privacy Notice
              <ShieldCheck size={18} aria-hidden="true" />
            </span>
            <h1 className="legal-hero-title fw-700">
              Privacy <span className="clr-1">Policy</span>
            </h1>
            <p className="legal-hero-desc">
              This policy explains how Patrick White Publishing handles personal
              information collected through our website, enquiries, and publishing
              service engagements.
            </p>
            <p className="legal-updated mb-0">Last updated: May 14, 2026</p>
          </div>
        </Container>
      </section>

      <section className="legal-content-section">
        <Container>
          <div className="legal-content-card">
            <section className="legal-block">
              <h2>Who We Are</h2>
              <p>
                Patrick White Publishing provides book publishing, ghostwriting,
                editing, cover design, marketing, and related author services. For
                privacy questions, contact us at{' '}
                <a href="mailto:info@patrickwhitepublishing.com">
                  info@patrickwhitepublishing.com
                </a>
                .
              </p>
            </section>

            {PRIVACY_SECTIONS.map((section) => (
              <section className="legal-block" key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="legal-block">
              <h2>Contact Us</h2>
              <p>
                If you have questions about this policy or how your information is
                handled, contact Patrick White Publishing at{' '}
                <a href="mailto:info@patrickwhitepublishing.com">
                  info@patrickwhitepublishing.com
                </a>{' '}
                or call <a href="tel:+61485976735">+61 485 976 735</a>.
              </p>
            </section>

            <div className="legal-cta-row">
              <Button variant="yellow" href="/contact">
                Contact Us
              </Button>
              <Link href="/terms-conditions" className="legal-secondary-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
