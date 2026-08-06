'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Play } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import { videoTestimonials, type VideoTestimonial } from '@/lib/videoTestimonials'

/**
 * Author Spotlight — video testimonials from published authors.
 *
 * The first entry renders as a large featured spotlight (portrait "reel" player
 * paired with the author's photo); any further entries render as a compact
 * video-card row beneath. Data lives in `lib/videoTestimonials.ts`.
 *
 * The <video> uses `preload="none"` so the file is only fetched once the visitor
 * hits play — a large clip never costs page-load performance.
 */

function ReelPlayer({
  item,
  className = '',
}: {
  item: VideoTestimonial
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const start = () => {
    setPlaying(true)
    // Let the controls attribute apply before requesting playback.
    requestAnimationFrame(() => {
      ref.current?.play().catch(() => setPlaying(false))
    })
  }

  return (
    <div className={`spotlight-reel ${className}`}>
      <video
        ref={ref}
        src={item.video}
        className="spotlight-reel-video"
        playsInline
        preload="none"
        controls={playing}
        controlsList="nodownload noremoteplayback"
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          className="spotlight-reel-cover"
          onClick={start}
          aria-label={`Play video: ${item.author}'s story`}
        >
          <span className="spotlight-reel-play" aria-hidden="true">
            <Play size={22} fill="currentColor" />
          </span>
          <span className="spotlight-reel-meta">
            <span className="spotlight-reel-eyebrow">Author’s story</span>
            {item.duration && (
              <span className="spotlight-reel-time">{item.duration}</span>
            )}
          </span>
        </button>
      )}
    </div>
  )
}

export default function AuthorSpotlight() {
  if (videoTestimonials.length === 0) return null

  const [featured, ...rest] = videoTestimonials

  return (
    <section className="author-spotlight position-relative" aria-label="Author video testimonials">
      <span className="spotlight-shade" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="spotlight-head">
          <span className="span-tag-border spotlight-eyebrow">In Their Own Words</span>
          <h2 className="spotlight-title fw-700 pt-3">
            Author Stories, <span className="clr-1">On Camera</span>
          </h2>
          <p className="spotlight-sub">
            Hear directly from the writers we have worked with, from first
            manuscript to the moment they hold the finished book.
          </p>
        </div>

        <div className="spotlight-featured">
          <div className="spotlight-stage">
            <figure className="spotlight-photo">
              <Image
                src={featured.image}
                alt={`${featured.author} holding her book, ${featured.bookTitle}`}
                width={1080}
                height={1440}
                className="spotlight-photo-img"
                sizes="(max-width: 680px) 60vw, 300px"
              />
              <figcaption className="spotlight-photo-tag">
                <BookOpen size={14} aria-hidden="true" />
                {featured.bookTitle}
              </figcaption>
            </figure>

            <ReelPlayer item={featured} className="spotlight-reel--featured" />
          </div>

          <div className="spotlight-copy">
            <span className="spotlight-copy-eyebrow">Author Spotlight</span>
            <h3 className="spotlight-copy-name">{featured.author}</h3>
            <p className="spotlight-copy-role">
              {featured.role} · <span>{featured.bookTitle}</span>
            </p>
            <p className="spotlight-copy-intro">{featured.intro}</p>
            <div className="spotlight-copy-actions">
              <Button variant="yellow" href="/contact" icon={ArrowRight}>
                Start Your Book
              </Button>
              {featured.bookUrl ? (
                <a
                  href={featured.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotlight-ghost"
                >
                  View the Book on Amazon
                </a>
              ) : (
                <Link href="/packages" className="spotlight-ghost">
                  View Packages
                </Link>
              )}
            </div>
          </div>
        </div>

        {rest.length > 0 && (
          <ul className="spotlight-more" aria-label="More author videos">
            {rest.map((item) => (
              <li key={item.id} className="spotlight-more-item">
                <ReelPlayer item={item} className="spotlight-reel--card" />
                <div className="spotlight-more-meta">
                  <b>{item.author}</b>
                  <span>{item.bookTitle}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  )
}
