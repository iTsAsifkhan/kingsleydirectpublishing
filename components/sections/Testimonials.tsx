'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowRight } from 'lucide-react'
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

export default function Testimonials() {
  return (
    <section className="index-wrap-7 position-relative">
      <span className="index-wrap-7-star" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="index-wrap-7-heading">
          <h2 className="mb-0 fw-700">
            Client Testimonials About{' '}
            <span className="clr-1">Our Book Publishing</span> Partner
          </h2>
          <div className="hidden lg:flex justify-end">
            <Button variant="yellow" href="/contact" icon={ArrowRight}>
              Get A Quote
            </Button>
          </div>
        </div>
      </Container>

      <div className="review-swiper-wrap">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView="auto"
          centeredSlides
          loop
          spaceBetween={92}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="review-swiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="review-slide">
                <div className="review-slide-left">
                  <div className="review-book-backdrop" aria-hidden="true" />
                  <div className="review-main-book">
                    <Image
                      src={t.bookCover}
                      alt={`${t.name}'s published book`}
                      fill
                      sizes="(min-width: 1024px) 320px, 75vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="review-slide-right">
                  <div className="review-profile-row">
                    <div className="review-author-photo">
                      <Image
                        src={t.photo}
                        alt={`Photo of ${t.name}`}
                        fill
                        sizes="86px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="review-author-name">{t.name}</h3>
                      <p className="review-author-role">Author</p>
                    </div>
                  </div>

                  <p className="review-quote">{t.quote}</p>

                  <div className="review-detail-row">
                    <div className="review-detail">
                      <h4>Genre</h4>
                      <p>{t.genre}</p>
                    </div>
                    <div className="review-detail">
                      <h4>Published</h4>
                      <p>{t.published}</p>
                    </div>
                    <a
                      href={t.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="review-author-link"
                      aria-label={`More about ${t.name}`}
                    >
                      More About Author
                      <span>
                        <ArrowRight aria-hidden="true" size={18} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Container className="relative z-10">
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
