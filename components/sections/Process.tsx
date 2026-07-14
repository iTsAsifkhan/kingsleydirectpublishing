'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Container } from '@/components/ui'
import { processSteps, type ProcessStep } from '@/lib/content'

const processImagesByStep: Record<string, string> = {
  '1': '/images/manuscript reviews and assesment.webp',
  '2': '/images/editing and proofreading.webp',
  '3': '/images/book design and formating.webp',
  '4': '/images/printing and production.webp',
  '5': '/images/book marketing.webp',
  '6': '/images/royalties.webp',
}

function ProcessCard({ step }: { step: ProcessStep }) {
  const imageSrc = processImagesByStep[step.id]

  return (
    <article className={`process-item process-item-${step.number}`}>
      <div className="process-item-img process-item-img-1">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="process-card-image-bg"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          aria-hidden="true"
        />
        <Image
          src={imageSrc}
          alt={`${step.title} visual`}
          fill
          sizes="(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="process-card-image"
          style={{ objectFit: 'cover', objectPosition: 'center 42%' }}
        />
      </div>
      <div className="process-item-content invisible-scroll">
        <h3 className="process-step-title mb-0 fw-700">
          <span className="clr-1">{String(step.number).padStart(2, '0')}</span>.{' '}
          {step.title}
        </h3>
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
              How We Work at{' '}
              <span className="clr-1">Kimberley Direct Publishing</span>
            </h2>
          </div>
          <p className="mb-0">
            Kimberley Direct Publishing plays a crucial role in helping authors
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
            pagination={{
              clickable: true,
              el: '.process-slider-pagination',
            }}
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
          <div className="process-slider-pagination" />
        </div>
      </Container>
    </section>
  )
}
