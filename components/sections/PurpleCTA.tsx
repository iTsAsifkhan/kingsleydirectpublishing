import { ArrowRight, MessageCircle, PhoneCall } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import { CONTACT_PHONE } from '@/lib/contact'

export default function PurpleCTA() {
  return (
    <div className="index-wrap-4-shell position-relative">
      <section className="index-wrap-4 index-wrap-4--centered position-relative">
        <Container className="relative z-10">
          <div className="index-wrap-4-content index-wrap-4-content--center text-white">
            <span className="span-tag-border-yellow">
              Connect With the Right Team
            </span>
            <h2 className="mb-0 fw-700 text-white">
              Work with a Top-Rated Book Publishing Company to Become a #1
              Best-Selling Author
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
              {CONTACT_PHONE ? (
                <a
                  className="anchor-number-cta align-items-center d-inline-flex"
                  href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`}
                >
                  <span className="span-1">
                    <PhoneCall aria-hidden="true" className="clr-1" size={18} />
                  </span>
                  <span className="span-2 fw-600 clr-1 d-inline-block">
                    Call Now <br />
                    <b className="text-white">{CONTACT_PHONE}</b>
                  </span>
                </a>
              ) : (
                <a
                  className="anchor-number-cta align-items-center d-inline-flex"
                  href="/contact"
                >
                  <span className="span-1">
                    <MessageCircle aria-hidden="true" className="clr-1" size={18} />
                  </span>
                  <span className="span-2 fw-600 clr-1 d-inline-block">
                    Prefer to talk? <br />
                    <b className="text-white">Message the team</b>
                  </span>
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
