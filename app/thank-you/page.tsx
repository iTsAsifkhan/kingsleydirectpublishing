import type { Metadata } from 'next'
import { ArrowLeft, CheckCircle, Clock } from 'lucide-react'
import { Button, Container } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Thank You',
  description:
    'Thank you for contacting Kimberley Direct Publishing. Our team will be in touch within 24 hours.',
  // Not a page we want indexed or shared as a landing page.
  robots: { index: false, follow: true },
}

export default function ThankYouPage() {
  return (
    <section className="service-hero">
      <Container>
        <div className="service-hero-inner">
          <div className="service-hero-content">
            <span className="index-banner-sub-heading service-kicker d-inline-flex align-items-center fw-600 text-white">
              Message Received
              <CheckCircle size={20} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h1 className="service-hero-title fw-700">
              Thank You — <span className="clr-1">We&apos;ve Got Your Details</span>
            </h1>
            <p className="service-hero-desc">
              Your enquiry is on its way to our team. A publishing specialist will review
              it and reply to your email within 24 hours. Keep an eye on your inbox (and
              your spam folder, just in case).
            </p>
            <p className="service-hero-desc d-inline-flex align-items-center gap-2">
              <Clock size={18} aria-hidden="true" />
              Typical response time: within one business day.
            </p>
            <div className="service-hero-ctas">
              <Button variant="yellow" href="/" icon={ArrowLeft}>
                Back to Home
              </Button>
              <Button variant="blue" href="/services">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
