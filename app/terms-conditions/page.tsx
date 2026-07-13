import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, FileText } from 'lucide-react'
import { Button, Container } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Kingsley Direct Publishing terms of service for website use, publishing services, payments, project materials, and client responsibilities.',
  alternates: { canonical: 'https://kingsleydirectpublishing.com/terms-conditions' },
  openGraph: {
    title: 'Terms of Service | Kingsley Direct Publishing',
    description:
      'Read the Kingsley Direct Publishing terms of service for website use and publishing service engagements.',
    url: 'https://kingsleydirectpublishing.com/terms-conditions',
    type: 'website',
  },
}

const TERMS_SECTIONS = [
  {
    title: 'Use Of Our Website',
    body: [
      'You agree to use this website lawfully and respectfully. You must not attempt to interfere with site security, copy content in a way that infringes rights, submit harmful code, or use the website for fraudulent or misleading activity.',
    ],
  },
  {
    title: 'Services And Quotes',
    body: [
      'Our services may include ghostwriting, editing, proofreading, formatting, cover design, illustration, publishing support, audiobook support, marketing, author websites, and related publishing assistance.',
      'Quotes, timelines, inclusions, deliverables, and revision limits are confirmed in writing before work begins. Any extra work outside the agreed scope may require a revised quote or additional approval.',
    ],
  },
  {
    title: 'Client Responsibilities',
    body: [
      'You are responsible for providing accurate project information, timely feedback, required approvals, and any materials needed for the service. Delays in feedback, approvals, or source materials may affect project timelines.',
      'You confirm that any content, images, manuscripts, or other materials you provide are owned by you or properly licensed for use in your project.',
    ],
  },
  {
    title: 'Payments, Cancellations, And Refunds',
    body: [
      'Fees, payment schedules, and payment methods are confirmed in your quote or service agreement. Work may pause if required payments are overdue.',
      'Cancellation and refund eligibility depends on the service type, project stage, completed work, third-party costs, and the terms agreed for your project. Nothing in these terms limits rights that cannot be excluded under applicable consumer law.',
    ],
  },
  {
    title: 'Revisions And Approvals',
    body: [
      'Revision rounds are limited to the number and type agreed for your service. Revision requests should be clear, consolidated, and related to the approved scope.',
      'Once you approve a deliverable, later changes may be treated as new work unless required to correct an error within the agreed scope.',
    ],
  },
  {
    title: 'Intellectual Property',
    body: [
      'Unless otherwise agreed, rights in final paid deliverables transfer to you after full payment is received. We may retain ownership of internal tools, templates, methods, draft concepts not selected, and pre-existing materials.',
      'You remain responsible for the originality, accuracy, legality, and permissions for materials you provide, including any quotes, images, names, likenesses, trademarks, or third-party content.',
    ],
  },
  {
    title: 'Publishing And Marketing Outcomes',
    body: [
      'Publishing platforms, distributors, retailers, search engines, advertising networks, and social platforms are operated by third parties. Their rules, review processes, timelines, fees, and decisions are outside our control.',
      'Marketing services are designed to improve presentation, visibility, and campaign quality, but we do not guarantee sales, rankings, reviews, media coverage, platform acceptance, or specific commercial results.',
    ],
  },
  {
    title: 'Confidentiality',
    body: [
      'We treat manuscripts, business information, and unpublished project materials as confidential and use them only for the purpose of providing agreed services, unless you give permission or disclosure is legally required.',
    ],
  },
  {
    title: 'Limitation Of Liability',
    body: [
      'To the extent permitted by law, Kingsley Direct Publishing is not liable for indirect, incidental, consequential, or loss-of-profit damages arising from website use or services. Our liability for a paid service is limited to the amount paid for that service, except where the law does not permit such limitation.',
    ],
  },
  {
    title: 'Changes To These Terms',
    body: [
      'We may update these terms from time to time. The updated version will be posted on this page with a revised date. Continued use of our website or services after an update means you accept the updated terms.',
    ],
  },
]

export default function TermsConditionsPage() {
  return (
    <main className="legal-page bg-white">
      <section className="legal-hero">
        <span className="legal-hero-shade" aria-hidden="true" />
        <Container className="relative z-10">
          <nav className="subservice-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Terms of Service</span>
          </nav>

          <div className="legal-hero-copy">
            <span className="index-banner-sub-heading inline-flex items-center gap-3 fw-600 text-white">
              Service Terms
              <FileText size={18} aria-hidden="true" />
            </span>
            <h1 className="legal-hero-title fw-700">
              Terms of <span className="clr-1">Service</span>
            </h1>
            <p className="legal-hero-desc">
              These terms explain how our website and publishing services may be
              used, how project work is managed, and what clients can expect when
              working with Kingsley Direct Publishing.
            </p>
            <p className="legal-updated mb-0">Last updated: May 14, 2026</p>
          </div>
        </Container>
      </section>

      <section className="legal-content-section">
        <Container>
          <div className="legal-content-card">
            <section className="legal-block">
              <h2>Agreement To These Terms</h2>
              <p>
                By using this website, contacting us, requesting a quote, or
                purchasing services from Kingsley Direct Publishing, you agree to
                these Terms of Service and any written service agreement or quote
                that applies to your project.
              </p>
            </section>

            {TERMS_SECTIONS.map((section) => (
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
                Questions about these terms can be sent to{' '}
                <a href="mailto:info@kingsleydirectpublishing.com">
                  info@kingsleydirectpublishing.com
                </a>{' '}
                or discussed by calling{' '}
                <a href="tel:+442079460000">+44 20 7946 0000</a>.
              </p>
            </section>

            <div className="legal-cta-row">
              <Button variant="yellow" href="/contact">
                Contact Us
              </Button>
              <Link href="/privacy-policy" className="legal-secondary-link">
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
