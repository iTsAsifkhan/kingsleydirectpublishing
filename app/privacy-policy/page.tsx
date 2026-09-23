import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
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
  title: 'Privacy Policy',
  description:
    'Read the Kimberley Direct Publishing privacy policy, including who our data controller is and how we collect, use, protect, and manage personal information under UK GDPR.',
  alternates: { canonical: 'https://kimberleydirectpublishing.com/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Kimberley Direct Publishing',
    description:
      'Read how Kimberley Direct Publishing collects, uses, protects, and manages personal information under UK GDPR.',
    url: 'https://kimberleydirectpublishing.com/privacy-policy',
    type: 'website',
    siteName: 'Kimberley Direct Publishing',
  },
}

const PHONE_TEL = CONTACT_PHONE.replace(/[^\d+]/g, '')

const LEGAL_BASIS_ROWS = [
  ['Responding to enquiries', 'Replying to quote requests and questions', 'Legitimate interest / pre-contract steps'],
  ['Delivering services', 'Editing, ghostwriting, design, publishing, and marketing your book', 'Performance of a contract'],
  ['Payment processing', 'Taking payment for services', 'Performance of a contract'],
  ['Client communication', 'Project updates, approvals, revisions', 'Performance of a contract'],
  ['Marketing emails', 'Sending publishing tips and offers, if you opt in', 'Consent'],
  ['Site analytics', 'Understanding how visitors use the Site', 'Legitimate interest'],
  ['Portfolio & testimonials', 'Featuring your book cover, quote, or story on our Site, with your permission', 'Consent'],
  ['Legal compliance', 'Accounting, tax, and regulatory obligations', 'Legal obligation'],
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
              This policy explains how {COMPANY_LEGAL_NAME}, trading as{' '}
              {COMPANY_TRADING_NAME}, handles personal information collected through
              our website, enquiries, and publishing service engagements.
            </p>
            <p className="legal-updated mb-0">Last updated: 29 August 2026</p>
          </div>
        </Container>
      </section>

      <section className="legal-content-section">
        <Container>
          <div className="legal-content-card">
            {/* 1. Who we are */}
            <section className="legal-block">
              <h2>Who We Are</h2>
              <p>
                This website, kimberleydirectpublishing.com (the &ldquo;Site&rdquo;), is
                operated under the trading name {COMPANY_TRADING_NAME} by:
              </p>
              <div className="legal-entity-box">
                <p className="legal-entity-name">{COMPANY_LEGAL_NAME}</p>
                <p>
                  Registered in {COMPANY_JURISDICTION}, company number {COMPANY_NUMBER}
                </p>
                <p>Registered office: {REGISTERED_OFFICE_ADDRESS}</p>
                <p>(&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)</p>
              </div>
              <p>
                We are the <strong>data controller</strong> responsible for your personal
                data under the UK General Data Protection Regulation (UK GDPR) and the
                Data Protection Act 2018.
              </p>
              <p>
                If you have any questions about this policy or how we handle your data,
                contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, call{' '}
                <a href={`tel:${PHONE_TEL}`}>{CONTACT_PHONE}</a>, or write to us at{' '}
                {REGISTERED_OFFICE_ADDRESS}.
              </p>
            </section>

            {/* 2. What we collect */}
            <section className="legal-block">
              <h2>What Information We Collect</h2>
              <h3>Information you give us directly</h3>
              <ul>
                <li>
                  Name, email address, phone number, and project details submitted
                  through our &ldquo;Get a Quote&rdquo; / contact form
                </li>
                <li>
                  Manuscripts, outlines, drafts, cover briefs, or other creative material
                  you send us for editing, ghostwriting, design, or publishing services
                </li>
                <li>Correspondence you send us by email, WhatsApp, or phone</li>
                <li>
                  Payment and billing details when you purchase a service (processed via
                  our payment providers — see &ldquo;Who We Share Your Information
                  With&rdquo;)
                </li>
                <li>Any information you provide if you leave a review or testimonial</li>
              </ul>
              <h3>Information collected automatically</h3>
              <ul>
                <li>
                  IP address, browser type, device information, and general location
                </li>
                <li>Pages visited, time spent on the Site, and referral source</li>
                <li>Cookie data (see &ldquo;Cookies&rdquo;)</li>
              </ul>
              <p>
                We do not knowingly collect any special category data (e.g. health,
                religious belief, political opinion) unless you choose to include it
                within a manuscript or project brief you send us — in which case it is
                processed only for the purpose of delivering that manuscript&rsquo;s
                editing, design, or publishing service.
              </p>
            </section>

            {/* 3. How we use / legal basis */}
            <section className="legal-block">
              <h2>How We Use Your Information And Our Legal Basis</h2>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th scope="col">Purpose</th>
                      <th scope="col">What we use it for</th>
                      <th scope="col">Legal basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LEGAL_BASIS_ROWS.map(([purpose, use, basis]) => (
                      <tr key={purpose}>
                        <td>{purpose}</td>
                        <td>{use}</td>
                        <td>{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                You can withdraw consent for marketing or portfolio use at any time by
                contacting us — see &ldquo;Your Rights&rdquo;.
              </p>
            </section>

            {/* 4. Cookies */}
            <section className="legal-block">
              <h2>Cookies</h2>
              <p>
                We use cookies and similar technologies to operate the Site and understand
                how it is used. This may include:
              </p>
              <ul>
                <li>
                  <strong>Essential cookies</strong> — required for the Site to function
                  correctly.
                </li>
                <li>
                  <strong>Analytics cookies</strong> — help us understand visitor
                  behaviour (e.g. Google Analytics or a similar tool), which you can opt
                  out of via our cookie banner or your browser settings.
                </li>
                <li>
                  <strong>Marketing cookies</strong> — used if you interact with linked
                  social platforms (Facebook, Instagram, WhatsApp).
                </li>
              </ul>
              <p>
                You can control or disable cookies through your browser settings at any
                time. Disabling essential cookies may affect how the Site functions.
              </p>
            </section>

            {/* 5. Who we share with */}
            <section className="legal-block">
              <h2>Who We Share Your Information With</h2>
              <p>We share personal data only where necessary, with:</p>
              <ul>
                <li>
                  <strong>Service providers</strong> who help us run our business — e.g.
                  website hosting, email delivery, payment processors (such as PayPal or
                  card processors), and cloud storage for manuscripts.
                </li>
                <li>
                  <strong>Publishing and distribution platforms</strong> — e.g. Amazon
                  KDP, IngramSpark, Apple Books, Barnes &amp; Noble, and Lulu, where
                  necessary to publish and distribute your book as instructed by you.
                </li>
                <li>
                  <strong>Professional advisers</strong> (accountants, auditors, legal
                  advisers) where necessary.
                </li>
                <li>
                  <strong>Regulators or law enforcement</strong>, where required by law.
                </li>
              </ul>
              <p>We do not sell your personal data to third parties.</p>
            </section>

            {/* Site-specific: IP-based localisation (preserved technical disclosure) */}
            <section className="legal-block">
              <h2>Third-Party Services And IP-Based Localisation</h2>
              <p>
                To display prices in your local currency, our pricing pages may send your
                IP address to third-party geolocation and exchange-rate providers,
                ipwho.is and ipapi.co (to estimate your country and currency) and
                open.er-api.com and frankfurter.app (to retrieve current exchange rates).
                These providers process your IP address under their own privacy policies.
                If localisation is unavailable, prices are shown in US Dollars.
              </p>
              <p>
                We do not store your IP address for this purpose beyond the request needed
                to determine your currency, and your currency preference is kept only in
                your browser.
              </p>
            </section>

            {/* 6. International transfers */}
            <section className="legal-block">
              <h2>International Transfers</h2>
              <p>
                We operate internationally and have team members and offices in the United
                Kingdom, the Netherlands, Australia, and Pakistan. As a result, your personal data
                may be accessed or processed outside the UK.
              </p>
              <p>
                Where we transfer personal data outside the UK, we ensure appropriate
                safeguards are in place, such as the UK&rsquo;s International Data Transfer
                Agreement, adequacy regulations, or equivalent contractual protections, in
                accordance with UK GDPR.
              </p>
            </section>

            {/* 7. Retention */}
            <section className="legal-block">
              <h2>How Long We Keep Your Data</h2>
              <p>
                We retain personal data only as long as necessary for the purposes
                described in this policy, including:
              </p>
              <ul>
                <li>
                  Contact form enquiries that do not proceed to a project: up to 12 months
                </li>
                <li>
                  Client project data (manuscripts, briefs, correspondence): for the
                  duration of our working relationship and for a reasonable period
                  afterwards to support any warranty, royalty, or legal obligations
                </li>
                <li>Financial records: as required by UK tax law (currently 6 years)</li>
                <li>Marketing consent records: until you withdraw consent</li>
              </ul>
            </section>

            {/* 8. Rights */}
            <section className="legal-block">
              <h2>Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Erase your data (&ldquo;right to be forgotten&rdquo;), where applicable</li>
                <li>Restrict or object to certain processing</li>
                <li>Data portability — receive your data in a portable format</li>
                <li>Withdraw consent at any time, where processing is based on consent</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond
                within one month, as required by law.
              </p>
              <p>
                If you are unhappy with how we&rsquo;ve handled your data, you have the
                right to complain to the UK Information Commissioner&rsquo;s Office (ICO)
                at{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
                  ico.org.uk
                </a>{' '}
                or by calling 0303 123 1113.
              </p>
            </section>

            {/* 9. Security */}
            <section className="legal-block">
              <h2>Data Security</h2>
              <p>
                We take appropriate technical and organisational measures to protect your
                personal data against unauthorised access, loss, or misuse, including
                secure file storage, restricted access to manuscripts, and secure payment
                processing. However, no method of transmission over the internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* 10. Children */}
            <section className="legal-block">
              <h2>Children&rsquo;s Privacy</h2>
              <p>
                Our services are intended for individuals aged 18 and over. We do not
                knowingly collect personal data from children. If you believe a child has
                provided us with personal data, please contact us so we can remove it.
              </p>
            </section>

            {/* 11. Changes */}
            <section className="legal-block">
              <h2>Changes To This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in
                our practices or legal requirements. The &ldquo;Last updated&rdquo; date at
                the top of this page will reflect the most recent revision. We encourage
                you to review this page periodically.
              </p>
            </section>

            {/* 12. Contact */}
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
