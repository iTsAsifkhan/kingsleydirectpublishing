'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Mail, MessageCircle, Phone } from 'lucide-react'
import { Container } from '@/components/ui'
import MobileNav from './MobileNav'
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '@/components/icons/SocialIcons'

const SOCIAL = [
  { href: 'https://www.facebook.com/p/Patrick-White-Publishing-61581158636974/', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://www.instagram.com/patrickwhitepublishing/', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://wa.link/q4xswu', icon: WhatsAppIcon, label: 'WhatsApp' },
]

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Publishing',
    href: '/services/publishing',
    children: [
      { label: 'Audiobook', href: '/services/publishing/audiobook' },
      { label: 'Self-Publishing', href: '/services/publishing/self-publishing' },
      { label: 'Digital Publishing', href: '/services/publishing/digital-publishing' },
      { label: 'Global Publishing', href: '/services/publishing/global-publishing' },
    ],
  },
  {
    label: 'Marketing',
    href: '/services/marketing',
    children: [
      { label: 'Social Media Marketing', href: '/services/marketing/social-media-marketing' },
      { label: 'Amazon Marketing', href: '/services/marketing/amazon-marketing' },
      { label: 'Search Engine Optimization', href: '/services/marketing/search-engine-optimization' },
      { label: 'Influencer Marketing', href: '/services/marketing/influencer-marketing' },
      { label: 'Content Marketing', href: '/services/marketing/content-marketing' },
      { label: 'Book Launch Marketing', href: '/services/marketing/book-launch-marketing' },
    ],
  },
  {
    label: 'Ghostwriting',
    href: '/services/ghostwriting',
    children: [
      { label: 'Book Writing', href: '/services/ghostwriting/book-writing' },
      { label: 'Ebook Writing', href: '/services/ghostwriting/e-book-writing' },
      { label: 'Fantasy Writing', href: '/services/ghostwriting/fantasy-writing' },
      { label: 'Screenplay Writing', href: '/services/ghostwriting/screenplay-writing' },
      { label: 'Fiction Writing', href: '/services/ghostwriting/fiction-writing' },
      { label: 'Non-Fiction', href: '/services/ghostwriting/non-fiction-writing' },
      { label: 'Autobiography', href: '/services/ghostwriting/autobiography-writing' },
      { label: 'Novel Writing', href: '/services/ghostwriting/novel-writing' },
      { label: "Children's Book", href: '/services/ghostwriting/children-book-writing' },
    ],
  },
  {
    label: 'Editing',
    href: '/services/editing',
    children: [
      { label: 'Editing and Proofreading', href: '/services/editing/editing-and-proofreading' },
      { label: 'Book Formatting', href: '/services/editing/book-formatting' },
      { label: 'Book Proofreading', href: '/services/editing/book-proofreading' },
    ],
  },
  {
    label: 'Branding',
    href: '/services/cover-design',
    children: [
      { label: 'Author Website', href: '/services/cover-design/author-website' },
      { label: 'Video Book Trailer', href: '/services/cover-design/video-book-trailer' },
      { label: 'Book Cover Design', href: '/services/cover-design/book-cover-design' },
      { label: 'Book Illustration', href: '/services/cover-design/book-illustration' },
    ],
  },
  { label: 'Blogs', href: '/blogs' },
]

export default function Header() {
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="site-header">
      <Container>
        {/* Top bar — navy strip with social + contact info */}
        <div className="header-top-bar">
          <div className="header-top-inner">
            <ul className="social-links-ul" aria-label="Social media links">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon size={13} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <ul className="header-top-number-ul" aria-label="Contact information">
              <li>
                <a href="tel:+61485976735" className="header-contact-link">
                  <Phone size={14} className="clr-1" aria-hidden="true" />
                  +61 485 976 735
                </a>
              </li>
              <li>
                <a href="mailto:info@patrickwhitepublishing.com" className="header-contact-link">
                  <Mail size={14} className="clr-1" aria-hidden="true" />
                  info@patrickwhitepublishing.com
                </a>
              </li>
              <li>
                <button className="header-chat-btn" type="button">
                  <MessageCircle size={14} className="clr-1" aria-hidden="true" />
                  Chat Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar — logo + desktop nav + mobile hamburger */}
      <Container>
        <div className="header-bottom-bar">
          <Link href="/" className="header-logo" aria-label="Patrick White Publishing home">
            <span className="header-logo-mark">PWP</span>
            <span className="header-logo-text">
              <span>Patrick White</span>
              <span>Publishing</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="header-desktop-nav" aria-label="Main navigation">
            <ul className="desktop-header-links fw-500">
              {NAV.map((item) => {
                const itemActive =
                  isActive(item.href) || item.children?.some((child) => isActive(child.href))

                return (
                <li key={item.label} className={item.children ? 'position-relative menu-dropdown' : ''}>
                  <Link
                    href={item.href}
                    className={[
                      item.children ? 'd-inline-flex align-items-center' : '',
                      itemActive ? 'is-active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-current={itemActive ? 'page' : undefined}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className="ms-1" aria-hidden="true" />}
                  </Link>
                  {item.children && (
                    <ul className="submenu" role="menu">
                      {item.children.map((child) => {
                        const childActive = isActive(child.href)

                        return (
                        <li key={child.label} className="submenu-item" role="none">
                          <Link
                            href={child.href}
                            className={`submenu-link${childActive ? ' is-active' : ''}`}
                            role="menuitem"
                            aria-current={childActive ? 'page' : undefined}
                          >
                            {child.label}
                          </Link>
                        </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile hamburger (client component) */}
          <div className="header-mobile-toggle">
            <MobileNav links={NAV} />
          </div>
        </div>
      </Container>
    </header>
  )
}
