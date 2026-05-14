import Image from 'next/image'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { Button, Container } from '@/components/ui'

export default function PurpleCTA() {
  return (
    <div className="index-wrap-4-shell position-relative">
      <span className="cta-item-img-3" aria-hidden="true">
        <Image
          src="/images/1.webp"
          alt=""
          fill
          sizes="210px"
          className="section-placeholder-image contain"
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
                  href="tel:+61485976735"
                >
                  <span className="span-1">
                    <PhoneCall aria-hidden="true" className="clr-1" size={18} />
                  </span>
                  <span className="span-2 fw-600 clr-1 d-inline-block">
                    Call Now <br />
                    <b className="text-white">+61 485 976 735</b>
                  </span>
                </a>
              </div>
            </div>

            <div className="index-wrap-4-visual" aria-hidden="true">
              <div className="index-wrap-4-cta-circle position-relative">
                <span className="cta-img">
                  <Image
                    src="/images/book1.webp"
                    alt=""
                    fill
                    sizes="270px"
                    className="section-placeholder-image contain"
                  />
                </span>
                <span className="cta-item-img-1">
                  <Image
                    src="/images/81YnsHtfDSL._SL1500_-1-e1777872972273.webp"
                    alt=""
                    fill
                    sizes="118px"
                    className="section-placeholder-image contain"
                  />
                </span>
                <span className="cta-item-img-2">
                  <Image
                    src="/images/81TmWd7H0bL._SL1500_-e1777872951701.webp"
                    alt=""
                    fill
                    sizes="118px"
                    className="section-placeholder-image contain"
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
