'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Container } from '@/components/ui'
import { processSteps, type ProcessStep } from '@/lib/content'

const processImages = [
  '/images/wrap-2-img.webp',
  '/images/book1.webp',
  '/images/epileptic girl.webp',
  '/images/rangers on patrol.webp',
  '/images/81TmWd7H0bL._SL1500_-e1777872951701.webp',
  '/images/81YnsHtfDSL._SL1500_-1-e1777872972273.webp',
]

function ProcessCard({ step }: { step: ProcessStep }) {
  return (
    <article className={`process-item process-item-${step.number}`}>
      <div className="process-item-img process-item-img-1">
        <Image
          src={processImages[(step.number - 1) % processImages.length]}
          alt={`${step.title} visual`}
          fill
          sizes="(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="section-placeholder-image contain"
        />
      </div>
      <div className="process-item-content invisible-scroll">
        <h6 className="mb-0 fw-700">
          <span className="clr-1">{String(step.number).padStart(2, '0')}</span>.{' '}
          {step.title}
        </h6>
        <p className="mb-0">{step.description}</p>
      </div>
    </article>
  )
}

export default function Process() {
  return (
    <section className="index-wrap-5 position-relative" aria-labelledby="process-heading">
      <span className="index-wrap-5-shade-1" aria-hidden="true" />
      <span className="index-wrap-5-shade-2" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="index-wrap-5-heading">
          <div>
            <span className="span-tag-border">Process We Follow</span>
            <h2 id="process-heading" className="mb-0 fw-700 pt-3">
              Understanding the Role of a{' '}
              <span className="clr-1">Book Publishing Partner</span>
            </h2>
          </div>
          <p className="mb-0">
            A Book Publishing Partner plays a crucial role in helping authors
            transform their manuscripts into professionally published books by
            managing essential services like editing, book design, marketing,
            and global distribution.
          </p>
        </div>

        <div className="process-row-padding-top process-slider-wrap">
          <Swiper
            modules={[Autoplay, Pagination]}
            className="process-slider"
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {processSteps.map((step) => (
              <SwiperSlide key={step.id} className="process-slide">
                <ProcessCard step={step} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
