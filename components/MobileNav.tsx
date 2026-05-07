'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

interface MobileNavProps {
  links: NavItem[]
}

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (label: string) =>
    setExpanded((prev) => (prev === label ? null : label))

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
        <div className="mobile-nav-overlay" aria-modal="true" role="dialog">
          <button
            className="mobile-nav-close"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          >
            <X size={26} />
          </button>

          <ul className="mobile-header-list">
            {links.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="mobile-nav-parent"
                      onClick={() => toggle(item.label)}
                      aria-expanded={expanded === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={expanded === item.label ? 'rotate-180' : ''}
                        aria-hidden="true"
                      />
                    </button>
                    {expanded === item.label && (
                      <ul className="mobile-submenu">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="mobile-submenu-link"
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
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
