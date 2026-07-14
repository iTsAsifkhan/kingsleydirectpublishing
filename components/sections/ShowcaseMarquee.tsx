'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// A curated mix of mockups + portfolio covers.
const COVERS = [
  '/images/3d-book-cover (1).webp',
  '/images/showcase-cover (3).webp',
  '/images/3d-book-cover (4).webp',
  '/images/showcase-cover (7).webp',
  '/images/3d-book-cover (2).webp',
  '/images/showcase-cover (12).webp',
  '/images/3d-book-cover (6).webp',
  '/images/showcase-cover (18).webp',
  '/images/3d-book-cover (3).webp',
  '/images/showcase-cover (21).webp',
  '/images/3d-book-cover (8).webp',
  '/images/showcase-cover (26).webp',
  '/images/3d-book-cover (5).webp',
  '/images/showcase-cover (30).webp',
]

export default function ShowcaseMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Seamless infinite scroll: the track holds two identical sets, so moving
    // it -50% and repeating loops with no visible seam.
    const loop = gsap.to(track, {
      xPercent: -50,
      duration: 48,
      ease: 'none',
      repeat: -1,
    })

    // Ease the loop's speed down while hovering (GSAP timeScale, not a hard stop).
    const slow = () => gsap.to(loop, { timeScale: 0.12, duration: 0.6, overwrite: true })
    const resume = () => gsap.to(loop, { timeScale: 1, duration: 0.6, overwrite: true })
    track.addEventListener('pointerenter', slow)
    track.addEventListener('pointerleave', resume)

    return () => {
      loop.kill()
      track.removeEventListener('pointerenter', slow)
      track.removeEventListener('pointerleave', resume)
    }
  }, [])

  const items = [...COVERS, ...COVERS]

  return (
    <div className="kdp-showcase" aria-label="Featured book covers">
      <div className="kdp-showcase-viewport">
        <div className="kdp-showcase-track" ref={trackRef}>
          {items.map((src, i) => (
            <div className="kdp-showcase-card" key={i}>
              <Image
                src={src}
                alt={i < COVERS.length ? 'Book cover from the Kimberley portfolio' : ''}
                aria-hidden={i >= COVERS.length}
                width={210}
                height={310}
                sizes="210px"
                quality={82}
                className="kdp-showcase-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
