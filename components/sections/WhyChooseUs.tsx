import Image from 'next/image'
import { ArrowRight, Globe, MessageCircle, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { Button, Container } from '@/components/ui'

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Full Ownership',
    text: 'Your book stays 100% yours, you keep every right and every royalty, always.',
  },
  {
    icon: TrendingUp,
    title: 'Higher Royalties',
    text: 'Set your own pricing and earn a far bigger share of every single sale.',
  },
  {
    icon: Users,
    title: 'One Team, Every Stage',
    text: 'Editing, design, publishing, and marketing handled under a single roof.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    text: 'Distributed across Amazon and every major store and library worldwide.',
  },
]

const PLATFORM_LOGOS = [
  { src: '/images/3.webp', alt: 'Barnes & Noble' },
  { src: '/images/4.webp', alt: 'Amazon Kindle' },
  { src: '/images/5.webp', alt: 'Apple Books' },
  { src: '/images/6.webp', alt: 'Lulu' },
]

export default function WhyChooseUs() {
  return (
    <section className="home-why position-relative">
      <Container className="relative z-10">
        <div className="home-why-top">
          <span className="span-tag-border">Why Kimberley</span>
          <h2 className="home-why-title fw-700 pt-3">
            Publishing Built{' '}
            <span className="clr-1">Around You, Not Us</span>
          </h2>
          <p>
            We give you a full-service team without ever taking your book out of
            your hands. You set the price, keep the royalties, and stay in creative
            control from the first draft to the final sale.
          </p>
          <div className="home-why-ctas">
            <Button variant="yellow" href="/contact" icon={ArrowRight}>
              Start Your Book
            </Button>
            <Button variant="blue" href="/contact" icon={MessageCircle}>
              Talk to a Publisher
            </Button>
          </div>
        </div>

        <div className="home-why-pillars">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <article className="why-pillar" key={title}>
              <span className="why-pillar-icon" aria-hidden="true">
                <Icon size={24} strokeWidth={2} />
              </span>
              <h3 className="why-pillar-title">{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="home-why-platforms">
          <span className="home-why-platforms-label">
            Your book, live everywhere readers are
          </span>
          <div className="home-why-platforms-logos" aria-label="Publishing platforms">
            {PLATFORM_LOGOS.map((logo) => (
              <span key={logo.src} className="platform-logo">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={108}
                  height={42}
                  className="platform-logo-image"
                />
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
