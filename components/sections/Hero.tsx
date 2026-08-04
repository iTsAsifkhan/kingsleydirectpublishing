import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, BadgeCheck, Globe, Sparkles, Star } from 'lucide-react'
import { Button, Container } from '@/components/ui'

const TRUST = [
  { icon: BadgeCheck, label: 'Trusted by Authors' },
  { icon: Star, label: 'Five-Star Reviews' },
  { icon: Globe, label: 'Global Distribution' },
]

export default function Hero() {
  return (
    <section className="hero-band">
      <span className="hero-band-glow" aria-hidden="true" />
      <span className="hero-band-grid" aria-hidden="true" />
      <div className="hero-aurora" aria-hidden="true">
        <span className="hero-orb hero-orb-1" />
        <span className="hero-orb hero-orb-2" />
      </div>

      <Container className="relative z-10">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">
              <span className="hero-eyebrow-dot" aria-hidden="true" />
              <span>Kimberley Direct Publishing</span>
              <Sparkles size={14} aria-hidden="true" />
            </span>

            <h1 className="hero-headline">
              Turn Your Manuscript Into a Book the{' '}
              <span className="hero-accent">World Remembers</span>
            </h1>

            <p className="hero-sub">
              Sharp editing, a cover that sells, clean formatting, and
              distribution across Amazon and every major platform — handled by one
              team. You keep the rights. You keep the royalties.
            </p>

            <div className="hero-ctas">
              <Button variant="yellow" href="/contact" icon={ArrowRight}>
                Start Your Book
              </Button>
              <Link href="/contact" className="hero-ghost-cta">
                <span>Talk to a Publisher</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <ul className="hero-trust" aria-label="Why authors trust us">
              {TRUST.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <span className="hero-trust-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            <div className="hero-stage">
              <span className="hero-glow-blob" aria-hidden="true" />

              <figure className="hero-book hero-book-left">
                <Image
                  src="/images/kdp-cover-1.webp"
                  alt=""
                  aria-hidden="true"
                  width={208}
                  height={312}
                  sizes="208px"
                />
              </figure>
              <figure className="hero-book hero-book-right">
                <Image
                  src="/images/kdp-cover-5.webp"
                  alt=""
                  aria-hidden="true"
                  width={208}
                  height={312}
                  sizes="208px"
                />
              </figure>
              <figure className="hero-book hero-book-center">
                <Image
                  src="/images/kdp-cover-3.webp"
                  alt="A book cover from the Kimberley portfolio"
                  width={224}
                  height={336}
                  priority
                  sizes="224px"
                />
              </figure>

              <div className="hero-chip hero-chip-top">
                <span className="hero-chip-ico" aria-hidden="true">
                  <Star size={18} fill="currentColor" strokeWidth={0} />
                </span>
                <div>
                  <b>4.9/5</b>
                  <span>Author rating</span>
                </div>
              </div>
              <div className="hero-chip hero-chip-bottom">
                <div>
                  <b>500+</b>
                  <span>Titles published</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
