import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button, Container } from '@/components/ui'

export default function WhyChooseUs() {
  return (
    <section className="index-wrap-2">
      <Container>
        <div className="index-wrap-2-grid">
          <div className="index-wrap-2-media-wrap">
            <span className="index-wrap-2-star rotation" aria-hidden="true" />
            <div
              className="index-wrap-2-placeholder"
              role="img"
              aria-label="Placeholder for an author working on a publishing project"
            >
              <div className="about-desk" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="about-screen" aria-hidden="true">
                <span />
                <span />
              </div>
              <p>About Image Placeholder</p>
            </div>
          </div>

          <div className="index-wrap-2-content">
            <span className="span-tag-border">About Book Publishing Partner</span>
            <h2 className="mb-0 font-700">
              Why Authors Choose Our{' '}
              <span className="clr-1">Book Publishing Partner</span> Platform
            </h2>
            <p className="mb-0">
              Publish and sell your book worldwide with Book Publishing Partner.
              Get professional services like formatting, custom cover design,
              and Amazon marketing. Set your pricing, earn high royalties, and
              maintain full creative control.
            </p>
            <div
              className="platforms"
              role="img"
              aria-label="Placeholder for publishing platform logos"
            >
              <span>KDP</span>
              <span>Print</span>
              <span>Ebook</span>
              <span>Retail</span>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <Button variant="yellow" href="/contact" icon={ArrowRight}>
                Get A Quote
              </Button>
              <Button variant="blue" href="/contact" icon={MessageCircle}>
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
