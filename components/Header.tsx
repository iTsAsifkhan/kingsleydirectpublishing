'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronDown, Mail, Phone, X } from 'lucide-react'
import MobileNav from './MobileNav'
import { MAIN_NAV, type NavItem } from '@/lib/nav'

// Real phone not confirmed — only shown when a dialable number is configured.
const PHONE_DISPLAY = process.env.NEXT_PUBLIC_CONTACT_PHONE
const PHONE_TEL = PHONE_DISPLAY?.replace(/[^\d+]/g, '')
const EMAIL = 'info@kingsleydirectpublishing.com'
const PROMO_KEY = 'kdp-promo-dismissed'

/** Re-exported so existing imports of `NAV` keep working. */
export const NAV = MAIN_NAV

export default function Header() {
  const pathname = usePathname()
  const [pinned, setPinned] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [promoOpen, setPromoOpen] = useState(true)
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isActive = useCallback(
    (href: string) =>
      href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  )

  // Close any open mega panel on route change.
  useEffect(() => setOpenMenu(null), [pathname])

  // Restore promo dismissal.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(PROMO_KEY) === '1') setPromoOpen(false)
    } catch {
      /* ignore */
    }
  }, [])

  // Pin the header into pill mode after a short scroll.
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        setPinned(window.scrollY > 100)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // Close mega panel on outside click + Escape.
  useEffect(() => {
    if (!openMenu) return
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [openMenu])

  const dismissPromo = () => {
    setPromoOpen(false)
    try {
      sessionStorage.setItem(PROMO_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }
  const open = (label: string) => {
    cancelClose()
    setOpenMenu(label)
  }

  const activeItem: NavItem | undefined = MAIN_NAV.find((i) => i.label === openMenu && i.mega)

  return (
    <header className={`kdp-header${pinned ? ' is-pinned' : ''}`}>
      {/* Utility / promo bar (State A only) */}
      {promoOpen && (
        <div className="kdp-promo" role="region" aria-label="Announcement">
          <p className="kdp-promo-text">
            <span className="kdp-promo-badge">Offer</span>
            <span>20% off your first publishing package — limited time.</span>
            <Link href="/contact" className="kdp-promo-link">
              Claim now
            </Link>
          </p>
          <div className="kdp-promo-contact">
            {PHONE_DISPLAY && (
              <a href={`tel:${PHONE_TEL}`} className="kdp-promo-info">
                <Phone size={13} aria-hidden="true" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            )}
            <a href={`mailto:${EMAIL}`} className="kdp-promo-info kdp-promo-info-email">
              <Mail size={13} aria-hidden="true" />
              <span>{EMAIL}</span>
            </a>
            <button type="button" className="kdp-promo-close" onClick={dismissPromo} aria-label="Dismiss announcement">
              <X size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* Main bar */}
      <div className="kdp-bar-wrap">
        <div className="kdp-bar">
          <Link href="/" className="kdp-logo" aria-label="Kingsley Direct Publishing home">
            <span className="kdp-logo-name">Kingsley</span>
            <span className="kdp-logo-sub">Direct Publishing</span>
          </Link>

          <div className="kdp-nav-wrap" ref={navRef} onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
            <nav aria-label="Main navigation">
              <ul className="kdp-nav">
                {MAIN_NAV.map((item) => {
                  const itemActive =
                    isActive(item.href) || item.mega?.some((c) => isActive(c.href))
                  if (!item.mega) {
                    return (
                      <li key={item.label} className="kdp-nav-item">
                        <Link
                          href={item.href}
                          className={`kdp-nav-link${itemActive ? ' is-active' : ''}`}
                          aria-current={itemActive ? 'page' : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  }
                  const expanded = openMenu === item.label
                  return (
                    <li
                      key={item.label}
                      className="kdp-nav-item kdp-nav-item-mega"
                      onMouseEnter={() => open(item.label)}
                    >
                      <button
                        type="button"
                        className={`kdp-nav-link kdp-nav-trigger${itemActive ? ' is-active' : ''}`}
                        aria-haspopup="true"
                        aria-expanded={expanded}
                        onClick={() => setOpenMenu(expanded ? null : item.label)}
                        onFocus={() => open(item.label)}
                      >
                        {item.label}
                        <ChevronDown size={14} aria-hidden="true" className="kdp-nav-caret" />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Single mega panel, content swaps by active item */}
            <div
              className={`kdp-mega${activeItem ? ' is-open' : ''}`}
              role="region"
              aria-label={activeItem ? `${activeItem.label} menu` : undefined}
              hidden={!activeItem}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              {activeItem && (
                <div className="kdp-mega-inner">
                  <ul className="kdp-mega-grid">
                    {activeItem.mega!.map((link) => {
                      const Icon = link.icon
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={`kdp-mega-link${isActive(link.href) ? ' is-active' : ''}`}
                            onClick={() => setOpenMenu(null)}
                          >
                            <span className="kdp-mega-ico" aria-hidden="true">
                              <Icon size={18} />
                            </span>
                            <span className="kdp-mega-copy">
                              <span className="kdp-mega-label">{link.label}</span>
                              <span className="kdp-mega-desc">{link.desc}</span>
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>

                  {activeItem.featured && (
                    <Link
                      href={activeItem.featured.href}
                      className="kdp-mega-featured"
                      onClick={() => setOpenMenu(null)}
                    >
                      <span className="kdp-mega-featured-eyebrow">{activeItem.featured.eyebrow}</span>
                      <span className="kdp-mega-featured-title">{activeItem.featured.title}</span>
                      <span className="kdp-mega-featured-text">{activeItem.featured.text}</span>
                      <span className="kdp-mega-featured-cta">{activeItem.featured.cta}</span>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="kdp-actions">
            <Link href="/contact" className="btn btn-yellow kdp-cta">
              <span className="span-1">Get A Quote</span>
              <span className="span-2" aria-hidden="true">
                <ChevronDown size={18} className="-rotate-90" />
              </span>
            </Link>
            <div className="kdp-mobile-toggle">
              <MobileNav links={MAIN_NAV} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
