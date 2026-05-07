'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ArrowRight } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import { testimonials } from '@/lib/content'

const PARTNERS = ['Amazon', 'IngramSpark', 'Kobo', 'Draft2Digital', 'Trustpilot', 'Barnes & Noble']

export default function Testimonials() {
  return (
    <section className="index-wrap-7 position-relative">
      <span className="index-wrap-7-star" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Section heading row */}
        <div className="index-wrap-7-heading">
          <div>
            <span className="span-tag-border">Testimonials</span>
            <h2 className="mb-0 fw-700 pt-3">
              Client Testimonials About{' '}
              <span className="clr-1">Our Book Publishing</span> Partner
            </h2>
          </div>
          <div className="hidden lg:flex justify-end">
            <Button variant="yellow" href="/contact" icon={ArrowRight}>
              Get A Quote
            </Button>
          </div>
        </div>
      </Container>

      {/* Full-width slider */}
      <div className="review-swiper-wrap">
        <Container className="relative z-10">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="review-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="review-slide">
                  {/* Left: portrait + book cover */}
                  <div className="review-slide-left">
                    <div className="review-portrait">
                      <Image
                        src={t.photo}
                        alt={`Photo of ${t.name}`}
                        fill
                        sizes="(min-width: 1024px) 380px, 90vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="review-book-cover">
                      <Image
                        src={t.bookCover}
                        alt={`${t.name}'s published book`}
                        fill
                        sizes="130px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Right: text content */}
                  <div className="review-slide-right">
                    <h3 className="review-author-name">{t.name}</h3>
                    <p className="review-quote">{t.quote}</p>
                    <div className="review-logos">
                      <a
                        href={t.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="review-amazon-btn"
                        aria-label={`Buy ${t.name}'s book on Amazon`}
                      >
                        Buy on Amazon
                        <span className="review-amazon-arrow">→</span>
                      </a>
                      <a
                        href="https://www.trustpilot.com/review/patrickwhitepublishing.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="review-trustpilot-btn"
                        aria-label="Read reviews on Trustpilot"
                      >
                        ★★★★★ Trustpilot
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>

      {/* Partners strip */}
      <Container className="relative z-10">
        <ul className="partners-ul" aria-label="Publishing partners and platforms">
          {PARTNERS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
