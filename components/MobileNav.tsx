'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import type { NavItem } from '@/lib/nav'

interface MobileNavProps {
  links: NavItem[]
}

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  const toggle = (label: string) =>
    setExpanded((prev) => (prev === label ? null : label))
  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

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
        onClick={() => setOpen(true)}
      >
        <Menu size={26} />
      </button>

      {open && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="mobile-nav-head">
            <span className="mobile-nav-brand">Kingsley Direct Publishing</span>
            <button
              className="mobile-nav-close"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-header-list">
            {links.map((item) => (
              <li key={item.label}>
                {item.mega ? (
                  <>
                    <button
                      className={`mobile-nav-parent${
                        isActive(item.href) || item.mega.some((child) => isActive(child.href))
                          ? ' is-active'
                          : ''
                      }`}
                      onClick={() => toggle(item.label)}
                      aria-expanded={expanded === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={expanded === item.label ? 'rotate-180' : ''}
                        aria-hidden="true"
                      />
                    </button>
                    {expanded === item.label && (
                      <ul className="mobile-submenu">
                        <li>
                          <Link
                            href={item.href}
                            className="mobile-submenu-link mobile-submenu-all"
                            onClick={() => setOpen(false)}
                          >
                            All {item.label}
                          </Link>
                        </li>
                        {item.mega.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`mobile-submenu-link${isActive(child.href) ? ' is-active' : ''}`}
                              aria-current={isActive(child.href) ? 'page' : undefined}
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={isActive(item.href) ? 'is-active' : ''}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-nav-foot">
            <Link href="/contact" className="btn btn-yellow" onClick={() => setOpen(false)}>
              <span className="span-1">Get A Quote</span>
              <span className="span-2" aria-hidden="true">
                <ChevronDown size={18} className="-rotate-90" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
