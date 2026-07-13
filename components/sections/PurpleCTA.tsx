import Image from 'next/image'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { Button, Container } from '@/components/ui'

export default function PurpleCTA() {
  return (
    <div className="index-wrap-4-shell position-relative">
      <span className="cta-item-img-3" aria-hidden="true">
        <Image
          src="/images/romantic book.webp"
          alt=""
          fill
          sizes="210px"
          className="cta-floating-image"
        />
      </span>
      <span className="cta-shade" aria-hidden="true" />
      <span className="cta-star" aria-hidden="true" />

      <section className="index-wrap-4 position-relative">
        <Container className="relative z-10">
          <div className="index-wrap-4-grid">
            <div className="index-wrap-4-content text-white">
              <span className="span-tag-border-yellow">
                Connect With the Right Team
              </span>
              <h2 className="mb-0 fw-700 text-white">
                Work with a Top-Rated Book Publishing Company to Become a #1
                Best-Selling Author in the USA
              </h2>
              <p>
                Ready to become a published author? Partner with our expert team
                for editing, publishing, and marketing to turn your manuscript
                into a bestseller. Build your author brand and achieve long-term
                success today!
              </p>
              <div className="index-wrap-4-actions">
                <Button variant="yellow" href="/contact" icon={ArrowRight}>
                  Get A Quote
                </Button>
                <a
                  className="anchor-number-cta align-items-center d-inline-flex"
                  href="tel:+442079460000"
                >
                  <span className="span-1">
                    <PhoneCall aria-hidden="true" className="clr-1" size={18} />
                  </span>
                  <span className="span-2 fw-600 clr-1 d-inline-block">
                    Call Now <br />
                    <b className="text-white">+44 20 7946 0000</b>
                  </span>
                </a>
              </div>
            </div>

            <div className="index-wrap-4-visual" aria-hidden="true">
              <div className="index-wrap-4-cta-circle position-relative">
                <span className="cta-img">
                  <Image
                    src="/images/open book stacked with colorful.webp"
                    alt=""
                    fill
                    sizes="430px"
                    className="cta-main-image"
                  />
                </span>
                <span className="cta-item-img-1">
                  <Image
                    src="/images/open book logo.webp"
                    alt=""
                    fill
                    sizes="180px"
                    className="cta-floating-image"
                  />
                </span>
                <span className="cta-item-img-2">
                  <Image
                    src="/images/kid reading educational book.webp"
                    alt=""
                    fill
                    sizes="190px"
                    className="cta-floating-image"
                  />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
