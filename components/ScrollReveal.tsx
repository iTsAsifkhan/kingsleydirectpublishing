'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

const SECTION_SELECTOR = [
  'main > section',
  'main > div',
  '.site-footer',
].join(',')

function getRevealHost(section: Element) {
  return (
    section.querySelector<HTMLElement>(':scope > .mx-auto') ??
    section.querySelector<HTMLElement>(':scope > .container') ??
    (section as HTMLElement)
  )
}

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reveal-disabled')
      return
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR)).filter(
      (section) => !section.closest('[data-no-reveal]'),
    )

    const animatedSections = new Set<HTMLElement>()

    sections.forEach((section) => {
      section.dataset.revealSection = ''
      gsap.set(section, {
        autoAlpha: 0,
        y: section.matches('.index-wrap-1, .service-hero') ? 24 : 44,
        scale: section.matches('.index-wrap-counter, .service-stats-strip') ? 0.99 : 0.985,
        filter: 'blur(6px)',
        transformOrigin: '50% 60%',
        force3D: true,
      })

      const host = getRevealHost(section)
      Array.from(host.children)
        .filter((child): child is HTMLElement => {
          if (!(child instanceof HTMLElement)) return false
          if (child.matches('script, style, [aria-hidden="true"], [data-no-reveal]')) return false
          return child.offsetParent !== null
        })
        .slice(0, 8)
        .forEach((child) => {
          child.dataset.revealItem = ''
          gsap.set(child, {
            autoAlpha: 0,
            y: 26,
            force3D: true,
          })
        })
    })

    document.body.classList.add('reveal-ready')

    const revealSection = (section: HTMLElement) => {
      if (animatedSections.has(section)) return
      animatedSections.add(section)

      const items = Array.from(section.querySelectorAll<HTMLElement>('[data-reveal-item]'))

      const timeline = gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
      })

      timeline.to(section, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: section.matches('.index-wrap-1, .service-hero') ? 0.55 : 0.65,
        clearProps: 'transform,filter,willChange',
      })

      if (items.length) {
        timeline.to(
          items,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: {
              each: 0.05,
              from: 'start',
            },
            clearProps: 'transform,willChange',
          },
          '-=0.45',
        )
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const section = entry.target as HTMLElement
          section.classList.add('is-visible')
          revealSection(section)
          observer.unobserve(section)
        })
      },
      {
        // Positive bottom margin: start revealing while the section is still
        // ~22% of a viewport below the fold, so it's ready before it's seen
        // (prevents blank space when scrolling quickly).
        rootMargin: '0px 0px 22% 0px',
        threshold: 0,
      },
    )

    let frame = 0
    let nestedFrame = 0

    frame = window.requestAnimationFrame(() => {
      nestedFrame = window.requestAnimationFrame(() => {
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect()
          if (rect.top < window.innerHeight * 1.15 && rect.bottom > 0) {
            window.setTimeout(() => revealSection(section), index === 0 ? 100 : 0)
            return
          }

          observer.observe(section)
        })
      })
    })

    return () => {
      window.cancelAnimationFrame(frame)
      window.cancelAnimationFrame(nestedFrame)
      observer.disconnect()
      gsap.killTweensOf(sections)
      gsap.killTweensOf(document.querySelectorAll('[data-reveal-item]'))
    }
  }, [])

  return null
}
