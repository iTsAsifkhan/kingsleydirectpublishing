'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ArrowRight, Play, X } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import { videoTestimonials, type VideoTestimonial } from '@/lib/videoTestimonials'

/**
 * Author Stories — video testimonials from published authors.
 *
 * Every clip gets an equal card: a branded poster frame (next/image, so the
 * section costs no video bytes on load), play button and clip length. Clicking
 * opens the clip in a full-screen player. On phones the cards become a
 * swipeable row. Data lives in `lib/videoTestimonials.ts`.
 */

function VideoModal({ item, onClose }: { item: VideoTestimonial; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  // Portal to <body>: the section's `isolation: isolate` would otherwise trap
  // the overlay beneath the sticky site header.
  return createPortal(
    <div
      className="sv-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.author}, author of ${item.bookTitle}`}
      onClick={onClose}
    >
      <div className="sv-modal-frame" onClick={(e) => e.stopPropagation()}>
        <video
          className="sv-modal-video"
          src={item.video}
          poster={item.poster}
          controls
          autoPlay
          playsInline
          controlsList="nodownload noremoteplayback"
        />
        <button
          ref={closeRef}
          type="button"
          className="sv-modal-close"
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>
    </div>,
    document.body
  )
}

export default function AuthorSpotlight() {
  const [active, setActive] = useState<VideoTestimonial | null>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setActive(null)
    lastTrigger.current?.focus()
  }, [])

  if (videoTestimonials.length === 0) return null

  return (
    <section className="author-spotlight position-relative" aria-labelledby="author-stories-heading">
      <span className="spotlight-shade" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="spotlight-head">
          <span className="span-tag-border spotlight-eyebrow">In Their Own Words</span>
          <h2 id="author-stories-heading" className="spotlight-title fw-700 pt-3">
            Author Stories, <span className="clr-1">On Camera</span>
          </h2>
          <p className="spotlight-sub">
            Hear directly from the writers we have worked with, from first
            manuscript to the moment they hold the finished book.
          </p>
        </div>

        <ul className="sv-grid" aria-label="Author video testimonials">
          {videoTestimonials.map((item) => (
            <li key={item.id} className="sv-card">
              <button
                type="button"
                className="sv-card-media"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget
                  setActive(item)
                }}
                aria-label={`Play video: ${item.author}, author of ${item.bookTitle} (${item.duration})`}
              >
                <Image
                  src={item.poster}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 74vw, 340px"
                  className="sv-card-poster"
                />
                <span className="sv-card-time" aria-hidden="true">
                  {item.duration}
                </span>
                <span className="sv-card-play" aria-hidden="true">
                  <Play size={22} fill="currentColor" />
                </span>
              </button>
              <div className="sv-card-meta">
                <h3 className="sv-card-name">{item.author}</h3>
                <p className="sv-card-book">
                  Author of <i>{item.bookTitle}</i>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="sv-cta">
          <Button variant="yellow" href="/contact" icon={ArrowRight}>
            Start Your Book
          </Button>
        </div>
      </Container>

      {active && <VideoModal item={active} onClose={close} />}
    </section>
  )
}
