'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import type { NavItem } from '@/lib/nav'

interface MobileNavProps {
  links: NavItem[]
}

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  // Portal target only exists on the client.
  useEffect(() => setMounted(true), [])

  const close = () => setOpen(false)
  const toggle = (label: string) =>
    setExpanded((prev) => (prev === label ? null : label))
  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

  // Close on route change.
  useEffect(() => setOpen(false), [pathname])

  // Lock scroll + close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        className="mobile-hamburger"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen(true)}
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      {mounted &&
        createPortal(
          <div className={`mobile-nav-root${open ? ' is-open' : ''}`}>
            <div className="mobile-nav-backdrop" onClick={close} aria-hidden="true" />

        <aside
          id="mobile-drawer"
          className="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="mobile-nav-head">
            <span className="mobile-nav-brand">
              <span className="mobile-nav-brand-name">Kimberley</span>
              <span className="mobile-nav-brand-sub">Direct Publishing</span>
            </span>
            <button className="mobile-nav-close" aria-label="Close navigation menu" onClick={close}>
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <nav className="mobile-nav-scroll" aria-label="Mobile">
            <ul className="mobile-header-list">
              {links.map((item) => (
                <li key={item.label}>
                  {item.mega ? (
                    <>
                      <button
                        className={`mobile-nav-parent${
                          expanded === item.label ? ' is-expanded' : ''
                        }${
                          isActive(item.href) || item.mega.some((c) => isActive(c.href))
                            ? ' is-active'
                            : ''
                        }`}
                        onClick={() => toggle(item.label)}
                        aria-expanded={expanded === item.label}
                      >
                        {item.label}
                        <ChevronDown className="mobile-nav-caret" size={18} aria-hidden="true" />
                      </button>
                      <div
                        className="mobile-submenu-wrap"
                        style={{ gridTemplateRows: expanded === item.label ? '1fr' : '0fr' }}
                      >
                        <ul className="mobile-submenu">
                          <li>
                            <Link href={item.href} className="mobile-submenu-link mobile-submenu-all" onClick={close}>
                              All {item.label}
                            </Link>
                          </li>
                          {item.mega.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`mobile-submenu-link${isActive(child.href) ? ' is-active' : ''}`}
                                aria-current={isActive(child.href) ? 'page' : undefined}
                                onClick={close}
                              >
                                <ChevronRight size={14} aria-hidden="true" />
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`mobile-nav-link${isActive(item.href) ? ' is-active' : ''}`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav-foot">
            <Link href="/contact" className="btn btn-yellow" onClick={close}>
              <span className="span-1">Get A Quote</span>
              <span className="span-2" aria-hidden="true">
                <ChevronRight size={18} />
              </span>
            </Link>
              </div>
            </aside>
          </div>,
          document.body,
        )}
    </>
  )
}
