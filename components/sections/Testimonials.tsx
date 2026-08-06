import Image from 'next/image'
import { ArrowRight, Quote } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import { testimonials } from '@/lib/content'

const PARTNER_LOGOS = [
  { src: '/images/1.webp', alt: 'Trustpilot' },
  { src: '/images/2.webp', alt: 'IngramSpark' },
  { src: '/images/3.webp', alt: 'Barnes and Noble' },
  { src: '/images/4.webp', alt: 'Amazon Kindle' },
  { src: '/images/5.webp', alt: 'Apple Books' },
  { src: '/images/6.webp', alt: 'Lulu' },
  { src: '/images/7.webp', alt: 'Publishing partner' },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
}

export default function Testimonials() {
  return (
    <section className="home-reviews position-relative">
      <Container className="relative z-10">
        <div className="home-reviews-head">
          <span className="span-tag-border">Author Stories</span>
          <h2 className="home-reviews-title fw-700 pt-3">
            What Our Authors Say After{' '}
            <span className="clr-1">Publishing With Us</span>
          </h2>
          <p>
            A few words from writers who trusted us with their manuscripts, and
            now have a finished book on the shelf.
          </p>
        </div>

        <div className="home-reviews-grid">
          {testimonials.map((t) => (
            <figure className="review-card" key={t.id}>
              <Quote className="review-card-mark" size={30} aria-hidden="true" />
              <blockquote className="review-card-quote">{t.quote}</blockquote>
              <figcaption className="review-card-foot">
                <span className="review-card-avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <span className="review-card-who">
                  <b>{t.name}</b>
                  <span>{t.genre} author · Verified</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="home-reviews-cta">
          <Button variant="yellow" href="/contact" icon={ArrowRight}>
            Start Your Book
          </Button>
        </div>

        <ul className="partners-ul" aria-label="Publishing partners and platforms">
          {PARTNER_LOGOS.map((logo) => (
            <li key={logo.src}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={58}
                className="partner-logo-image"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
