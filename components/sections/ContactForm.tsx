import { Clock, ShieldCheck, Star } from 'lucide-react'
import { Container } from '@/components/ui'
import QuoteForm from './QuoteForm'

const TRUST = [
  { icon: Clock, label: '24-hour response', sub: 'A consultant replies within a day.' },
  { icon: ShieldCheck, label: 'You keep 100% rights', sub: 'Your work stays yours.' },
]

export default function ContactForm() {
  return (
    <section className="index-wrap-9 kdp-connect" aria-labelledby="lets-connect-title">
      <span className="kdp-connect-glow" aria-hidden="true" />
      <span className="kdp-connect-shape" aria-hidden="true" />
      <Container>
        <div className="kdp-connect-card">
          <div className="kdp-connect-info">
            <span className="span-tag-border kdp-connect-tag">Let&apos;s Connect</span>
            <h2 id="lets-connect-title" className="fw-700 kdp-connect-heading">
              Ready to publish? Let&apos;s map out your book.
            </h2>
            <p className="kdp-connect-lede">
              Tell us where you are in the journey and a publishing consultant will come back
              with clear, practical next steps — no pressure, no obligation.
            </p>

            <ul className="kdp-connect-trust">
              {TRUST.map(({ icon: Icon, label, sub }) => (
                <li key={label}>
                  <span className="kdp-connect-trust-ico" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <span className="kdp-connect-trust-copy">
                    <strong>{label}</strong>
                    <span>{sub}</span>
                  </span>
                </li>
              ))}
            </ul>

            <figure className="kdp-connect-quote">
              <span className="kdp-connect-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <blockquote>
                “They made publishing feel simple. From edit to launch, everything just worked.”
              </blockquote>
              <figcaption>Verified author review</figcaption>
            </figure>
          </div>

          <div className="kdp-connect-form">
            <h3 className="kdp-connect-form-title">Get a free quote</h3>
            <QuoteForm variant="cta" />
          </div>
        </div>
      </Container>
    </section>
  )
}
