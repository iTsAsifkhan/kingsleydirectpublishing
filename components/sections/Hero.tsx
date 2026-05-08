import Image from 'next/image'
import { ArrowRight, Handshake, MessageCircle } from 'lucide-react'
import { Button, Container } from '@/components/ui'

export default function Hero() {
  return (
    <section className="index-wrap-1 relative">
      <span className="hero-star rotation hidden lg:block" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="home-hero-grid grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="index-banner-sub-heading inline-flex items-center gap-3 text-sm font-600 text-white sm:text-base">
              Book Publishing Partner
              <Handshake size={20} aria-hidden="true" />
            </span>
            <h1 className="mb-0 font-700">
              Professional Self-Publishing Services for Author Success
            </h1>
            <p className="p-head mb-0">
              Think of us as your personal guide on the publishing journey. Book
              Publishing Partner is here to take your manuscript and transform it
              into a book you will be proud of, starting with a professional eye
              for editing, a stunning custom cover, and flawless interior
              formatting. Then, we put your book into the hands of readers
              worldwide through major retailers like Amazon and KDP.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button variant="yellow" href="/contact" icon={ArrowRight}>
                Get A Quote
              </Button>
              <Button variant="blue" href="/contact" icon={MessageCircle}>
                Live Chat
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="home-hero-visual ml-auto" aria-label="Featured published books">
              <span className="home-hero-cover home-hero-cover-primary">
                <Image
                  src="/images/book1.webp"
                  alt="The Tortoise and Birds Tree Party book cover"
                  fill
                  priority
                  sizes="285px"
                  className="section-placeholder-image clean-contain"
                />
              </span>
              <span className="home-hero-cover home-hero-cover-secondary">
                <Image
                  src="/images/epileptic girl.webp"
                  alt="The Epileptic Girl book cover"
                  fill
                  priority
                  sizes="220px"
                  className="section-placeholder-image clean-contain"
                />
              </span>
              <span className="home-hero-cover home-hero-cover-tertiary">
                <Image
                  src="/images/rangers on patrol.webp"
                  alt="Rangers on Patrol book cover"
                  fill
                  priority
                  sizes="220px"
                  className="section-placeholder-image clean-contain"
                />
              </span>
              <span className="home-hero-badge">Published Worldwide</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
