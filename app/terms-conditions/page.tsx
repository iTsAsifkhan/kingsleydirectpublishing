import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, FileText } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import {
  CONTACT_PHONE,
  CONTACT_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_TRADING_NAME,
  COMPANY_JURISDICTION,
  COMPANY_NUMBER,
  REGISTERED_OFFICE_ADDRESS,
} from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Kimberley Direct Publishing terms of service for website use, publishing services, payments, project materials, and client responsibilities.',
  alternates: { canonical: 'https://kimberleydirectpublishing.com/terms-conditions' },
  openGraph: {
    title: 'Terms of Service | Kimberley Direct Publishing',
    description:
      'Read the Kimberley Direct Publishing terms of service for website use and publishing service engagements.',
    url: 'https://kimberleydirectpublishing.com/terms-conditions',
    type: 'website',
    siteName: 'Kimberley Direct Publishing',
  },
}

const PHONE_TEL = CONTACT_PHONE.replace(/[^\d+]/g, '')

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
              working with {COMPANY_TRADING_NAME}.
            </p>
            <p className="legal-updated mb-0">Last updated: 29 August 2026</p>
          </div>
        </Container>
      </section>

      <section className="legal-content-section">
        <Container>
          <div className="legal-content-card">
            {/* Intro / who provides the services */}
            <section className="legal-block">
              <h2>About These Terms</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website
                kimberleydirectpublishing.com (the &ldquo;Site&rdquo;) and any publishing,
                editing, ghostwriting, design, or marketing services (the
                &ldquo;Services&rdquo;) provided by:
              </p>
              <div className="legal-entity-box">
                <p className="legal-entity-name">{COMPANY_LEGAL_NAME}</p>
                <p>
                  Registered in {COMPANY_JURISDICTION}, company number {COMPANY_NUMBER}
                </p>
                <p>Registered office: {REGISTERED_OFFICE_ADDRESS}</p>
                <p>
                  Trading as {COMPANY_TRADING_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
                  &ldquo;our&rdquo;, the &ldquo;Company&rdquo;)
                </p>
              </div>
              <p>
                By accessing the Site, submitting an enquiry, or engaging our Services, you
                (&ldquo;you&rdquo;, &ldquo;Client&rdquo;, &ldquo;Author&rdquo;) agree to be
                bound by these Terms. If you do not agree, please do not use the Site or our
                Services.
              </p>
            </section>

            {/* 1 */}
            <section className="legal-block">
              <h2>Our Services</h2>
              <p>
                We provide book publishing support services, which may include: manuscript
                assessment, ghostwriting, editing and proofreading, cover and interior
                design, formatting, ISBN assignment and publishing setup, distribution,
                marketing, and author website creation. The specific services included in
                any engagement will be set out in a separate quote, invoice, or service
                agreement (&ldquo;Order&rdquo;).
              </p>
            </section>

            {/* 2 */}
            <section className="legal-block">
              <h2>Quotes, Orders, And Pricing</h2>
              <ul>
                <li>
                  All prices are provided as a personalised quote based on your
                  project&rsquo;s scope, length, and requirements.
                </li>
                <li>A quote is valid for the period stated in it, or 14 days if no period is stated.</li>
                <li>
                  An Order is confirmed once you accept a quote and, where applicable, pay
                  the required deposit.
                </li>
                <li>
                  We reserve the right to amend pricing for additional work not covered in
                  the original scope (e.g. major manuscript changes, extra rounds of
                  revision).
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section className="legal-block">
              <h2>Payment Terms</h2>
              <p>
                We accept payment via the methods listed on the Site (currently Visa,
                Mastercard, American Express, Bank Transfer, Apple Pay, Stripe and PayPal).
              </p>
              <p>
                Unless otherwise agreed in writing, the Client shall pay the required
                deposit prior to the commencement of the Services. If the Client cancels or
                terminates the Services, the Service Provider may deduct from the deposit
                the value of all work performed and costs incurred or committed up to the
                effective date of cancellation, and any remaining balance shall be refunded
                to the Client.
              </p>
              <p>We reserve the right to pause work on any project where payment is overdue.</p>
              <p>
                All prices are quoted in the currency stated on your invoice and are
                exclusive of any applicable taxes unless stated otherwise.
              </p>
            </section>

            {/* 4 */}
            <section className="legal-block">
              <h2>Cancellations And Refunds</h2>
              <ul>
                <li>You may cancel your Order at any time by notifying us in writing.</li>
                <li>
                  Any deposit paid is refundable. If any work has already been completed,
                  the cost of that work will be deducted, and the remaining deposit will be
                  refunded to the Client.
                </li>
                <li>
                  If you cancel after work has begun, you will be charged for all work
                  completed up to the point of cancellation, calculated on a pro-rata basis
                  against the total Order value.
                </li>
                <li>
                  Refunds, where due, will be processed within 14 business days to the
                  original payment method.
                </li>
              </ul>
              <p>
                This section does not affect your statutory rights as a consumer under the
                Consumer Rights Act 2015, where applicable.
              </p>
            </section>

            {/* 5 */}
            <section className="legal-block">
              <h2>Manuscript Submission And Client Responsibilities</h2>
              <p>By submitting a manuscript or other material to us, you confirm that:</p>
              <ul>
                <li>
                  You are the original author of the work, or you hold all necessary rights
                  and permissions to submit it for editing, design, and publishing;
                </li>
                <li>
                  The material does not infringe any third party&rsquo;s copyright,
                  trademark, or other intellectual property rights;
                </li>
                <li>
                  The material does not contain anything unlawful, defamatory, obscene, or
                  otherwise in breach of applicable law.
                </li>
              </ul>
              <p>
                You are responsible for providing accurate information and timely feedback
                during the review and approval stages of your project. Delays in feedback
                may affect delivery timelines.
              </p>
            </section>

            {/* 6 */}
            <section className="legal-block">
              <h2>Intellectual Property And Ownership</h2>
              <ul>
                <li>
                  You retain full ownership of the copyright in your manuscript and the
                  finished book at all times.
                </li>
                <li>
                  You retain 100% of your royalties from sales, as set out on our Site,
                  unless a different arrangement is separately agreed in writing.
                </li>
                <li>
                  Cover designs, illustrations, and formatted interior files created
                  specifically for your project are licensed to you for use in connection
                  with the publication and sale of your book once paid for in full. We
                  retain the right to display such work in our portfolio, subject to
                  &ldquo;Portfolio, Testimonials, And Marketing Use&rdquo;.
                </li>
                <li>
                  We do not claim any ownership interest in your underlying story, ideas, or
                  manuscript content.
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section className="legal-block">
              <h2>Portfolio, Testimonials, And Marketing Use</h2>
              <p>
                Unless you tell us otherwise in writing, we may feature your book cover,
                title, genre, and a brief description in our portfolio, website, and
                marketing materials. We may also feature testimonials or reviews you
                provide, attributed to you by first name and surname initial (or as you
                specify), for promotional purposes.
              </p>
              <p>
                You may opt out of this at any time by emailing{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </section>

            {/* 8 */}
            <section className="legal-block">
              <h2>Delivery Timelines</h2>
              <p>
                Estimated delivery timelines are provided in good faith based on the scope
                of work and your responsiveness during revisions. Timelines are estimates,
                not guarantees, and may be affected by factors including the condition of
                the manuscript, the scope of edits required, and the speed of client
                feedback.
              </p>
            </section>

            {/* 9 */}
            <section className="legal-block">
              <h2>Third-Party Platforms</h2>
              <p>
                Publishing, distribution, and printing may involve third-party platforms
                (including but not limited to Amazon KDP, IngramSpark, Apple Books, Barnes
                &amp; Noble, and Lulu). We are not responsible for the policies,
                availability, pricing structures, or service interruptions of these
                third-party platforms, which are governed by their own terms and conditions.
              </p>
            </section>

            {/* 10 */}
            <section className="legal-block">
              <h2>Limitation Of Liability</h2>
              <ul>
                <li>
                  We provide our Services with reasonable skill and care, but we do not
                  guarantee any specific sales results, royalty income, review outcomes, or
                  commercial success for your book.
                </li>
                <li>
                  To the fullest extent permitted by law, our total liability to you in
                  connection with any Order shall not exceed the total amount paid by you
                  for that Order.
                </li>
                <li>
                  We are not liable for indirect or consequential losses, including loss of
                  profits, loss of opportunity, or reputational harm.
                </li>
                <li>
                  Nothing in these Terms limits or excludes liability for death or personal
                  injury caused by negligence, fraud, or any other liability that cannot be
                  limited or excluded under English law.
                </li>
              </ul>
            </section>

            {/* 11 */}
            <section className="legal-block">
              <h2>Confidentiality</h2>
              <p>
                We treat all manuscripts and project materials as confidential and will not
                share them with third parties other than the freelancers, editors,
                designers, or platforms directly involved in delivering your project, or as
                required by law.
              </p>
            </section>

            {/* 12 */}
            <section className="legal-block">
              <h2>Termination</h2>
              <p>We reserve the right to suspend or terminate an Order if:</p>
              <ul>
                <li>Payment is not received as agreed;</li>
                <li>You submit material that is unlawful, infringing, or in breach of these Terms;</li>
                <li>
                  Continued performance becomes impossible due to circumstances outside our
                  reasonable control.
                </li>
              </ul>
            </section>

            {/* 13 */}
            <section className="legal-block">
              <h2>Force Majeure</h2>
              <p>
                We are not liable for any delay or failure to perform our obligations
                resulting from causes beyond our reasonable control, including but not
                limited to acts of God, internet or platform outages, or third-party
                service failures.
              </p>
            </section>

            {/* 14 */}
            <section className="legal-block">
              <h2>Governing Law And Disputes</h2>
              <p>
                These Terms are governed by the laws of {COMPANY_JURISDICTION}. Any disputes
                arising from these Terms or our Services shall be subject to the exclusive
                jurisdiction of the courts of {COMPANY_JURISDICTION}.
              </p>
            </section>

            {/* 15 */}
            <section className="legal-block">
              <h2>Changes To These Terms</h2>
              <p>
                We may update these Terms from time to time. The &ldquo;Last updated&rdquo;
                date at the top of this page reflects the most recent revision. Continued
                use of our Services after changes are posted constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            {/* 16 */}
            <section className="legal-block">
              <h2>Contact Us</h2>
              <div className="legal-entity-box">
                <p className="legal-entity-name">
                  {COMPANY_LEGAL_NAME} (trading as {COMPANY_TRADING_NAME})
                </p>
                <p>{REGISTERED_OFFICE_ADDRESS}</p>
                <p>
                  Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
                <p>
                  Phone: <a href={`tel:${PHONE_TEL}`}>{CONTACT_PHONE}</a>
                </p>
              </div>
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
