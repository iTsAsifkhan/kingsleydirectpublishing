'use client'

import { useEffect, useRef, useState } from 'react'
import {
  BadgeDollarSign,
  FileSearch,
  LayoutTemplate,
  Megaphone,
  Printer,
  Wand2,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/ui'
import { processSteps } from '@/lib/content'

const ICONS: Record<string, LucideIcon> = {
  FileSearch,
  Wand2,
  LayoutTemplate,
  Printer,
  Megaphone,
  BadgeDollarSign,
}

export default function Process() {
  const listRef = useRef<HTMLOListElement>(null)
  const [track, setTrack] = useState({ top: 0, height: 0, fill: 0 })
  const [activeCount, setActiveCount] = useState(0)

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const measure = () => {
      const markers = Array.from(
        list.querySelectorAll<HTMLElement>('.timeline-marker'),
      )
      if (markers.length === 0) return null
      const listTop = list.getBoundingClientRect().top
      const half = markers[0].offsetHeight / 2
      const first = markers[0].getBoundingClientRect().top + half - listTop
      const last =
        markers[markers.length - 1].getBoundingClientRect().top + half - listTop
      return { markers, listTop, first, last, half, span: Math.max(1, last - first) }
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      const m = measure()
      if (m) setTrack({ top: m.first, height: m.span, fill: m.span })
      setActiveCount(processSteps.length)
      return
    }

    let raf = 0
    const update = () => {
      raf = 0
      const m = measure()
      if (!m) return

      // Activation line ~ 58% down the viewport.
      const activationY = window.innerHeight * 0.58
      let reached = 0
      let progressPx = 0
      m.markers.forEach((marker) => {
        const center = marker.getBoundingClientRect().top + m.half
        if (center <= activationY) {
          reached += 1
          progressPx = center - m.listTop - m.first
        }
      })

      setActiveCount(reached)
      setTrack({
        top: m.first,
        height: m.span,
        fill: Math.min(m.span, Math.max(0, progressPx)),
      })
    }

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="home-process position-relative" aria-labelledby="process-heading">
      <Container className="relative z-10">
        <div className="home-process-head">
          <span className="span-tag-border">How It Works</span>
          <h2 id="process-heading" className="home-process-title fw-700 pt-3">
            From Manuscript to Marketplace,{' '}
            <span className="clr-1">Step by Step</span>
          </h2>
          <p>
            A clear, predictable path from your first draft to a finished book on
            sale worldwide, with a specialist owning every stage so nothing slips
            through the cracks.
          </p>
        </div>

        <div className="timeline-wrap">
          <span
            className="timeline-track"
            aria-hidden="true"
            style={{ top: `${track.top}px`, height: `${track.height}px` }}
          >
            <span className="timeline-track-fill" style={{ height: `${track.fill}px` }} />
          </span>
          <ol className="timeline" ref={listRef}>
            {processSteps.map((step, i) => {
              const Icon = ICONS[step.icon] ?? FileSearch
              const isActive = i < activeCount
              return (
                <li
                  className={`timeline-item${isActive ? ' is-active' : ''}`}
                  key={step.id}
                >
                  <div className="timeline-marker" aria-hidden="true">
                    {String(step.number).padStart(2, '0')}
                  </div>
                  <div className="timeline-card">
                    <span className="timeline-icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="timeline-title">{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
