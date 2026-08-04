import Link from 'next/link'
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

      {/* Animated aurora + drifting orbs + floating particles */}
      <div className="hero-aurora" aria-hidden="true">
        <span className="hero-orb hero-orb-1" />
        <span className="hero-orb hero-orb-2" />
        <span className="hero-orb hero-orb-3" />
      </div>
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className={`hero-particle hero-particle-${i + 1}`} />
        ))}
      </div>
      <span className="hero-beam" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="hero-band-inner">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            <span>Kimberley Direct Publishing</span>
            <Sparkles size={14} aria-hidden="true" />
          </span>

          <h1 className="hero-headline">
            Your Manuscript Deserves to Become a Book the{' '}
            <span className="hero-accent">World Remembers</span>
          </h1>

          <p className="hero-sub">
            We take you from raw draft to shelf-ready: sharp editing, a cover that
            sells, clean formatting, and distribution across Amazon and every major
            platform. You keep the rights. You keep the royalties.
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
      </Container>
    </section>
  )
}
