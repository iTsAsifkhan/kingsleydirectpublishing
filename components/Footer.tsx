import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui'
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '@/components/icons/SocialIcons'

const SOCIAL = [
  { href: 'https://facebook.com/', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://instagram.com/', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://wa.me/442079460000', icon: WhatsAppIcon, label: 'WhatsApp' },
]

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Stories', href: '/stories' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-conditions' },
]

const SERVICES_COL_1 = [
  { label: 'Publishing', href: '/services/publishing' },
  { label: 'Marketing', href: '/services/marketing' },
  { label: 'Ghostwriting', href: '/services/ghostwriting' },
  { label: 'Editing', href: '/services/editing' },
  { label: 'Cover Design', href: '/services/cover-design' },
  { label: 'E-Book Writing', href: '/services/ghostwriting/e-book-writing' },
]

const SERVICES_COL_2 = [
  { label: 'Novel Writing', href: '/services/ghostwriting/novel-writing' },
  { label: 'Autobiography', href: '/services/ghostwriting/autobiography-writing' },
  { label: 'Audio Book', href: '/services/publishing/audiobook' },
  { label: 'Book Formatting', href: '/services/editing/book-formatting' },
  { label: 'Fantasy Ghostwriting', href: '/services/ghostwriting/fantasy-writing' },
  { label: 'Non Fiction', href: '/services/ghostwriting/non-fiction-writing' },
]

export default function Footer() {
  return (
    <footer className="site-footer relative">
      <span className="footer-star" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="footer-main">
          {/* Brand column */}
          <div className="footer-brand">
            {/* TODO: replace this text wordmark with the real Kingsley Direct Publishing logo image */}
            <Link href="/" className="footer-logo-link brand-wordmark brand-wordmark-light" aria-label="Kingsley Direct Publishing home">
              <span className="brand-wordmark-name">Kingsley</span>
              <span className="brand-wordmark-sub">Direct Publishing</span>
            </Link>
            <p className="footer-brand-desc">
              Kingsley Direct Publishing is a professional publishing agency known for providing
              top-tier book writing, editing, design, and marketing services.
            </p>
            <ul className="social-links" aria-label="Social media links">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-list-item">
            <h4 className="fw-400">Quick Links</h4>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col 1 */}
          <div className="footer-list-item">
            <h4 className="fw-400">Services</h4>
            <ul>
              {SERVICES_COL_1.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col 2 */}
          <div className="footer-list-item">
            <h4 className="fw-400">Services</h4>
            <ul>
              {SERVICES_COL_2.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="copyright-div">
          <p className="fw-500 mb-0">Copyright &copy; 2026 Kingsley Direct Publishing. Registered in England & Wales · Company No. (TBD)</p>
          <Image
            src="/images/payment.webp"
            alt="Accepted payment methods"
            width={280}
            height={32}
            className="object-contain"
          />
        </div>
      </Container>
    </footer>
  )
}
