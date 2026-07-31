'use client'

import { useEffect } from 'react'
import { RefreshCw, AlertTriangle } from 'lucide-react'
import { Button, Container } from '@/components/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Surface the error for monitoring; replace with your logger when added.
    console.error(error)
  }, [error])

  return (
    <section className="service-hero">
      <Container>
        <div className="service-hero-inner">
          <div className="service-hero-content">
            <span className="index-banner-sub-heading service-kicker d-inline-flex align-items-center fw-600 text-white">
              Something Went Wrong
              <AlertTriangle size={20} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h1 className="service-hero-title fw-700">
              We Hit an <span className="clr-1">Unexpected Error</span>
            </h1>
            <p className="service-hero-desc">
              Sorry, something broke on our end. You can try again, or head back home and
              pick up where you left off.
            </p>
            <div className="service-hero-ctas">
              <button type="button" className="btn btn-yellow" onClick={() => reset()}>
                <span className="span-1">Try Again</span>
                <span className="span-2" aria-hidden="true">
                  <RefreshCw size={18} />
                </span>
              </button>
              <Button variant="blue" href="/">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
