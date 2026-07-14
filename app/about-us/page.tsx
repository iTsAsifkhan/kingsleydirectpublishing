import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronRight,
  Globe,
  Headphones,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { Button, Container } from '@/components/ui'
import StatsStrip from '@/components/sections/StatsStrip'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import PurpleCTA from '@/components/sections/PurpleCTA'
import { organizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Kingsley Direct Publishing - a professional publishing agency dedicated to helping authors achieve their publishing goals with expert editing, cover design, marketing, and global distribution.',
  alternates: { canonical: 'https://kingsleydirectpublishing.com/about-us' },
  openGraph: {
    title: 'About Us | Kingsley Direct Publishing',
    description:
      'Learn about Kingsley Direct Publishing - a professional publishing agency dedicated to helping authors achieve their publishing goals with expert editing, cover design, marketing, and global distribution.',
    url: 'https://kingsleydirectpublishing.com/about-us',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Kingsley Direct Publishing',
    description:
      'Learn about Kingsley Direct Publishing - a professional publishing agency dedicated to helping authors achieve their publishing goals.',
  },
}

const PLATFORM_LOGOS = [
  { src: '/images/3.webp', alt: 'Barnes & Noble' },
  { src: '/images/4.webp', alt: 'Amazon Kindle' },
  { src: '/images/5.webp', alt: 'Apple Books' },
  { src: '/images/6.webp', alt: 'Lulu' },
]

const MISSION_STATS = [
  { value: '93%', label: 'Success Rate' },
  { value: '10+', label: 'Years of Experience' },
  { value: '150+', label: 'National Bestsellers' },
  { value: '50+', label: 'Industry Experts' },
]

const PILLARS = [
  {
    icon: Users,
    title: 'Experienced Professionals',
    desc: 'Our team is composed of seasoned editors, designers, and marketers with decades of combined publishing experience who truly understand your creative vision.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Publishing',
    desc: 'From manuscript to market, we handle every stage of the publishing process - editing, formatting, cover design, printing, and distribution - under one roof.',
  },
  {
    icon: Headphones,
    title: 'Personalized Support',
    desc: 'You get a dedicated publishing consultant from day one. We listen, advise, and guide you at every step so your journey feels personal, not transactional.',
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    desc: 'We place your book on Amazon, Apple Books, Barnes & Noble, Kobo, and IngramSpark, reaching retail and library outlets worldwide.',
  },
  {
    icon: Rocket,
    title: 'Modern Publishing',
    desc: 'We combine traditional publishing craftsmanship with cutting-edge digital tools - from AI-assisted proofreading to data-driven Amazon marketing campaigns.',
  },
  {
    icon: Award,
    title: 'A Proven Track Record',
    desc: 'With over 5,000 satisfied authors, 150+ national bestsellers, and a 97% satisfaction rate, our results speak louder than any promise we could make.',
  },
]

const schema = organizationSchema()

export default function AboutPage() {
  return (
    <main className="about-page min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="about-hero">
        <span className="about-hero-shade" aria-hidden="true" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav className="subservice-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">About Us</span>
          </nav>

          <div className="about-hero-inner">
            <div className="about-hero-content">
              <span className="kdp-hero-eyebrow">
                <span className="kdp-hero-eyebrow-dot" aria-hidden="true" />
                <span>Kingsley Direct Publishing</span>
                <ShieldCheck size={15} aria-hidden="true" />
              </span>
              <h1 className="about-hero-title fw-700">
                Leading the Way in{' '}
                <span className="clr-1">Book Publishing</span> Excellence
              </h1>
              <p className="about-hero-desc">
                We&apos;re dedicated to helping authors achieve their publishing
                goals with exceptional editorial care, stunning design, and
                marketing that puts books in front of the right readers.
              </p>
              <div className="service-hero-ctas">
                <Button variant="yellow" href="/contact" icon={ArrowRight}>
                  Get A Quote
                </Button>
                <Button variant="blue" href="/contact" icon={MessageCircle}>
                  Live Chat
                </Button>
              </div>

              {/* Platform logos */}
              <div className="about-platform-row" aria-label="Publishing platforms">
                {PLATFORM_LOGOS.map((logo) => (
                  <span key={logo.src} className="platform-logo about-platform-logo">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={38}
                      className="platform-logo-image"
                    />
                  </span>
                ))}
              </div>
            </div>

            <div className="about-hero-visual" aria-hidden="true">
              <div className="about-hero-img-wrap">
                <Image
                  src="/images/wrap-2-img.webp"
                  alt="Kingsley Direct Publishing team"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="section-placeholder-image clean-contain"
                />
              </div>
              <span className="about-hero-badge">
                <span className="about-hero-badge-num clr-1 fw-700">5K+</span>
                <span>Published Authors</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <StatsStrip className="about-stats-strip" />

      {/* Mission / value proposition */}
      <section className="about-mission">
        <Container>
          <div className="about-mission-grid">
            <div className="about-mission-copy">
              <span className="span-tag-border">Our Mission</span>
              <h2 className="fw-700 pt-3">
                Your Trusted Partner in{' '}
                <span className="clr-1">Crafting Successful Titles</span>
              </h2>
              <p>
                Kingsley Direct Publishing was founded on a single belief: every author
                deserves a professional publishing experience regardless of their
                background or budget. We built a full-service agency that combines
                the rigor of traditional publishing with the flexibility and
                transparency of modern self-publishing.
              </p>
              <p>
                Our team of editors, designers, marketers, and publishing strategists
                work side-by-side with you to transform your manuscript into a
                polished, market-ready book - and then ensure it reaches readers
                across the globe.
              </p>
              <Button variant="yellow" href="/contact" icon={ArrowRight}>
                Start Your Journey
              </Button>
            </div>

            <div className="about-mission-stats-grid">
              {MISSION_STATS.map((s) => (
                <div className="about-mission-stat-card" key={s.label}>
                  <h3 className="about-stat-num clr-1 fw-700 mb-0">{s.value}</h3>
                  <p className="mb-0 fw-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="about-pillars">
        <span className="about-pillars-shade" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="text-center mb-5">
            <span className="span-tag-border-yellow">Why Work With Us</span>
            <h2 className="fw-700 pt-3 text-white">
              Six Reasons Authors Choose{' '}
              <span className="clr-1">Kingsley Direct Publishing</span>
            </h2>
            <p className="about-pillars-sub">
              We&apos;ve helped over 5,000 authors self-publish with confidence.
              Here&apos;s what sets us apart.
            </p>
          </div>

          <div className="about-pillars-grid">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div className="about-pillar-card" key={title}>
                <span className="about-pillar-icon">
                  <Icon size={28} aria-hidden="true" />
                </span>
                <h3 className="about-pillar-title fw-600">{title}</h3>
                <p className="about-pillar-desc mb-0">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <PurpleCTA />
    </main>
  )
}
