import type { Metadata } from 'next'
import { ArrowLeft, Compass } from 'lucide-react'
import { Button, Container } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    'The page you were looking for could not be found. Explore Kimberley Direct Publishing services or head back home.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="service-hero">
      <Container>
        <div className="service-hero-inner">
          <div className="service-hero-content">
            <span className="index-banner-sub-heading service-kicker d-inline-flex align-items-center fw-600 text-white">
              Error 404
              <Compass size={20} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h1 className="service-hero-title fw-700">
              This Page Has <span className="clr-1">Gone Off-Script</span>
            </h1>
            <p className="service-hero-desc">
              The page you were looking for doesn&apos;t exist or may have moved. Let&apos;s
              get you back to your publishing journey.
            </p>
            <div className="service-hero-ctas">
              <Button variant="yellow" href="/" icon={ArrowLeft}>
                Back to Home
              </Button>
              <Button variant="blue" href="/services">
                Browse Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
