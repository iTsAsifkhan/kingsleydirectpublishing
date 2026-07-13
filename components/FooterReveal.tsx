'use client'

import { useEffect } from 'react'

/**
 * Enables the "sticky reveal" footer: the footer is pinned behind the page
 * content, which scrolls up and over it. We measure the footer height and
 * reserve exactly that much space below the content so nothing overlaps.
 * No-JS and reduced-motion both fall back to a normal in-flow footer.
 */
export default function FooterReveal() {
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>('.site-footer')
    if (!footer) return

    const root = document.documentElement
    const setHeight = () => root.style.setProperty('--footer-h', `${footer.offsetHeight}px`)

    setHeight()
    document.body.classList.add('footer-reveal-on')

    const ro = new ResizeObserver(setHeight)
    ro.observe(footer)
    window.addEventListener('resize', setHeight)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', setHeight)
      document.body.classList.remove('footer-reveal-on')
    }
  }, [])

  return null
}
