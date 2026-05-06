'use client'

import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Container } from '@/components/ui'
import { processSteps, type ProcessStep } from '@/lib/content'

function ProcessCard({ step }: { step: ProcessStep }) {
  const Icon = LucideIcons[
    step.icon as keyof typeof LucideIcons
  ] as LucideIcon | undefined

  return (
    <article className={`process-item process-item-${step.number}`}>
      <div className="process-item-img process-item-img-1" aria-hidden="true">
        <div className="process-visual">
          <span className="process-visual-screen">
            {Icon ? <Icon aria-hidden="true" /> : null}
          </span>
          <span className="process-visual-person one" />
          <span className="process-visual-person two" />
          <span className="process-visual-line" />
          <span className="process-visual-line short" />
        </div>
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

        <div className="process-row-padding-top process-desktop-grid">
          {processSteps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>

        <div className="process-row-padding-top process-mobile-slider">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
            }}
          >
            {processSteps.map((step) => (
              <SwiperSlide key={step.id}>
                <ProcessCard step={step} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
