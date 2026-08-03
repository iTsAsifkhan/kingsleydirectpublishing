import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui'

export default function StoryBand() {
  return (
    <section className="home-band" aria-label="From manuscript to published book">
      <Image
        src="/images/scene-reading-plants.webp"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="home-band-img"
      />
      <span className="home-band-overlay" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="home-band-inner">
          <p className="home-band-quote">
            Every published book began as a blank page, and the courage to fill it.
            We help you carry it the rest of the way.
          </p>
          <Link href="/contact" className="home-band-cta">
            <span>Start your book today</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
