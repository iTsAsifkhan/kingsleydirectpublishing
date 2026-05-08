import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button, Container } from '@/components/ui'

const platformLogos = [
  { src: '/images/3.webp', alt: 'Barnes & Noble' },
  { src: '/images/4.webp', alt: 'Amazon Kindle' },
  { src: '/images/5.webp', alt: 'Apple Books' },
  { src: '/images/6.webp', alt: 'Lulu' },
]

export default function WhyChooseUs() {
  return (
    <section className="index-wrap-2">
      <Container>
        <div className="index-wrap-2-grid">
          <div className="index-wrap-2-media-wrap">
            <span className="index-wrap-2-star rotation" aria-hidden="true" />
            <div
              className="index-wrap-2-placeholder"
            >
              <Image
                src="/images/wrap-2-img.webp"
                alt="Author working with a publishing support team"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="section-placeholder-image clean-contain"
              />
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
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
