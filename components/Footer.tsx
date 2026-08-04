import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui'
import NewsletterForm from './NewsletterForm'
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '@/components/icons/SocialIcons'
import {
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_PHONE_DIGITS as WHATSAPP_DIGITS,
  CONTACT_EMAIL,
  OFFICE_ADDRESS,
  OFFICE_ADDRESS_SECONDARY,
} from '@/lib/contact'

// Social profile URLs. WhatsApp is built from the confirmed UK business number;
// Facebook/Instagram default to the brand handles and can be overridden per
// environment via env vars if the official handles differ.
const FACEBOOK_URL =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ??
  'https://www.facebook.com/kimberleydirectpublishing'
const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
  'https://www.instagram.com/kimberleydirectpublishing'

const SOCIAL = [
  WHATSAPP_DIGITS && {
    href: `https://wa.me/${WHATSAPP_DIGITS}`,
    icon: WhatsAppIcon,
    label: 'WhatsApp',
  },
  FACEBOOK_URL && {
    href: FACEBOOK_URL,
    icon: FacebookIcon,
    label: 'Facebook',
  },
  INSTAGRAM_URL && {
    href: INSTAGRAM_URL,
    icon: InstagramIcon,
    label: 'Instagram',
  },
].filter(Boolean) as { href: string; icon: typeof FacebookIcon; label: string }[]

const CONTACT = [
  {
    icon: Phone,
    label: 'Call us',
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE_TEL}`,
  },
  {
    icon: Mail,
    label: 'Email us',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: MapPin,
    label: 'UK office',
    value: OFFICE_ADDRESS,
  },
  {
    icon: MapPin,
    label: 'Italy office',
    value: OFFICE_ADDRESS_SECONDARY,
  },
]

const COMPANY = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Packages', href: '/packages' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
]

const SERVICES = [
  { label: 'Publishing', href: '/services/publishing' },
  { label: 'Marketing', href: '/services/marketing' },
  { label: 'Ghostwriting', href: '/services/ghostwriting' },
  { label: 'Editing', href: '/services/editing' },
  { label: 'Cover Design', href: '/services/cover-design' },
  { label: 'Audio Book', href: '/services/publishing/audiobook' },
]

const WRITING = [
  { label: 'Novel Writing', href: '/services/ghostwriting/novel-writing' },
  { label: 'Autobiography', href: '/services/ghostwriting/autobiography-writing' },
  { label: 'Fantasy', href: '/services/ghostwriting/fantasy-writing' },
  { label: 'Fiction', href: '/services/ghostwriting/fiction-writing' },
  { label: 'Non-Fiction', href: '/services/ghostwriting/non-fiction-writing' },
  { label: "Children's Book", href: '/services/ghostwriting/children-book-writing' },
]

// Only render the registration line once a real company number is provided.
const COMPANY_NO = process.env.NEXT_PUBLIC_COMPANY_NUMBER

export default function Footer() {
  return (
    <footer className="site-footer relative">
      <Container className="relative z-10">
        {/* Contact strip */}
        <div className="footer-contact">
          {CONTACT.map(({ icon: Icon, label, value, href }) => {
            const body = (
              <>
                <span className="footer-contact-icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <span className="footer-contact-text">
                  <span className="lbl">{label}</span>
                  <b>{value}</b>
                </span>
              </>
            )
            return href ? (
              <a className="footer-contact-item" href={href} key={label}>
                {body}
              </a>
            ) : (
              <div className="footer-contact-item" key={label}>
                {body}
              </div>
            )
          })}
        </div>

        <div className="footer-main">
          {/* Brand column */}
          <div className="footer-brand">
            <Link
              href="/"
              className="footer-logo-link"
              aria-label="Kimberley Direct Publishing home"
            >
              <Image
                src="/images/kimberley-logo-white.webp"
                alt="Kimberley Direct Publishing"
                width={212}
                height={52}
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-brand-desc">
              We help authors turn a finished manuscript into a book the world can
              actually buy, with editing, design, publishing, and marketing handled
              by one dedicated team.
            </p>

            <NewsletterForm />

            {SOCIAL.length > 0 && (
              <ul className="social-links" aria-label="Social media links">
                {SOCIAL.map(({ href, icon: Icon, label }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon size={14} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Company */}
          <div className="footer-list-item">
            <h4 className="fw-400">Company</h4>
            <ul>
              {COMPANY.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-list-item">
            <h4 className="fw-400">Services</h4>
            <ul>
              {SERVICES.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Writing */}
          <div className="footer-list-item">
            <h4 className="fw-400">Writing</h4>
            <ul>
              {WRITING.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="copyright-div">
          <p className="fw-500 mb-0">
            Copyright &copy; 2026 Kimberley Direct Publishing.
            {COMPANY_NO
              ? ` Registered in England & Wales · Company No. ${COMPANY_NO}`
              : ''}
          </p>
          <nav className="footer-legal" aria-label="Legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms of Service</Link>
          </nav>
          <Image
            src="/images/payment.webp"
            alt="Accepted payment methods: Visa, Mastercard, American Express, PayPal"
            width={200}
            height={35}
            className="object-contain"
          />
        </div>
      </Container>
    </footer>
  )
}
