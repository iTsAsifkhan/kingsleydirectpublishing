import Image from 'next/image'
import { ArrowRight, MessageCircle, Star } from 'lucide-react'
import { Button, Container } from '@/components/ui'

const platformLogos = [
  { src: '/images/3.webp', alt: 'Barnes & Noble' },
  { src: '/images/4.webp', alt: 'Amazon Kindle' },
  { src: '/images/5.webp', alt: 'Apple Books' },
  { src: '/images/6.webp', alt: 'Lulu' },
]

export default function WhyChooseUs() {
  return (
    <section className="index-wrap-2 kdp-why">
      <span className="kdp-why-shape" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="index-wrap-2-grid">
          <div className="index-wrap-2-media-wrap">
            <div className="index-wrap-2-placeholder kdp-why-frame">
              <Image
                src="/images/wrap-2-img.webp"
                alt="Author working with a publishing support team"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="section-placeholder-image clean-contain"
              />
            </div>
            <span className="kdp-why-badge">
              <span className="kdp-why-badge-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <b>5,000+ authors</b>
              <span>published worldwide</span>
            </span>
          </div>

          <div className="index-wrap-2-content">
            <span className="span-tag-border">About Kingsley Direct Publishing</span>
            <h2 className="mb-0 font-700">
              Why Authors Choose{' '}
              <span className="clr-1">Kingsley Direct Publishing</span>
            </h2>
            <p className="mb-0">
              Publish and sell your book worldwide with Kingsley Direct Publishing.
              Get professional services like formatting, custom cover design,
              and Amazon marketing. Set your pricing, earn high royalties, and
              maintain full creative control.
            </p>
            <div
              className="platforms"
              aria-label="Publishing platform logos"
            >
              {platformLogos.map((logo) => (
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
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <Button variant="yellow" href="/contact" icon={ArrowRight}>
                Get A Quote
              </Button>
              <Button variant="blue" href="/contact" icon={MessageCircle}>
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
