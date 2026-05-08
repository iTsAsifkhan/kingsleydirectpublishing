import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XTwitterIcon,
} from '@/components/icons/SocialIcons'

const SOCIAL = [
  { href: 'https://www.facebook.com/profile.php?id=61574663760511', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://www.instagram.com/bookpublishingpartner/', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/bookpublishingpartner/', icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'https://x.com/partner_book', icon: XTwitterIcon, label: 'X (Twitter)' },
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
  { label: 'E-Book Writing', href: '/services/ghostwriting' },
]

const SERVICES_COL_2 = [
  { label: 'Novel Writing', href: '/services/ghostwriting' },
  { label: 'Autobiography', href: '/services/ghostwriting' },
  { label: 'Audio Book', href: '/services/publishing' },
  { label: 'Book Formatting', href: '/services/editing' },
  { label: 'Fantasy Ghostwriting', href: '/services/ghostwriting' },
  { label: 'Non Fiction', href: '/services/ghostwriting' },
]

export default function Footer() {
  return (
    <footer className="site-footer relative">
      <span className="footer-star" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="footer-main">
          {/* Brand column */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link" aria-label="Book Publishing Partner home">
              <span className="footer-logo-mark">BPP</span>
              <span className="footer-logo-text">
                <span>Book Publishing</span>
                <span>Partner</span>
              </span>
            </Link>
            <p className="footer-brand-desc">
              Book Publishing Partner has become a leading agency known for providing top-tier
              professional book writing services.
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
          <p className="fw-500 mb-0">Copyright &copy; 2025 Book Publishing Partner.</p>
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
