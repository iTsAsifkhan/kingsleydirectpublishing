import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronRight,
  Globe,
  GraduationCap,
  Headphones,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Star,
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
    'Learn about Kimberley Direct Publishing - a professional publishing agency dedicated to helping authors achieve their publishing goals with expert editing, cover design, marketing, and global distribution.',
  alternates: { canonical: 'https://kimberleydirectpublishing.com/about-us' },
  openGraph: {
    title: 'About Us | Kimberley Direct Publishing',
    description:
      'Learn about Kimberley Direct Publishing - a professional publishing agency dedicated to helping authors achieve their publishing goals with expert editing, cover design, marketing, and global distribution.',
    url: 'https://kimberleydirectpublishing.com/about-us',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Kimberley Direct Publishing',
    description:
      'Learn about Kimberley Direct Publishing - a professional publishing agency dedicated to helping authors achieve their publishing goals.',
  },
}

const PLATFORM_LOGOS = [
  { src: '/images/3.webp', alt: 'Barnes & Noble' },
  { src: '/images/4.webp', alt: 'Amazon Kindle' },
  { src: '/images/5.webp', alt: 'Apple Books' },
  { src: '/images/6.webp', alt: 'Lulu' },
]

const MISSION_STATS = [
  { icon: Award, label: 'Proven Track Record' },
  { icon: GraduationCap, label: 'Experienced Team' },
  { icon: BookOpen, label: 'Bestselling Titles' },
  { icon: Users, label: 'Expert Publishing Team' },
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
    desc: 'We combine traditional publishing craftsmanship with cutting-edge digital tools, from professional proofreading to data-driven Amazon marketing campaigns.',
  },
  {
    icon: Award,
    title: 'A Proven Track Record',
    desc: 'We have helped authors successfully bring their books to market through a professional publishing process focused on quality, transparency, and attention to detail.',
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
                <span>Kimberley Direct Publishing</span>
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
                  src="/images/scene-library-study.webp"
                  alt="Author surrounded by books in a library"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="section-placeholder-image"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className="about-hero-badge">
                <span className="about-hero-badge-icon" aria-hidden="true">
                  <Star size={20} fill="currentColor" strokeWidth={0} />
                </span>
                <span>Trusted by Authors Worldwide</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <StatsStrip className="about-stats-strip" />

      {/* Our Story */}
      <section className="about-story">
        <Container>
          <div className="about-story-inner">
            <span className="span-tag-border">Our Story</span>
            <h2 className="about-story-title fw-700 pt-3">
              Every Book Begins With a Story,{' '}
              <span className="clr-1">and So Does Ours</span>
            </h2>
            <p>
              The name <strong>Kimberley</strong> is inspired by a place known for its
              enduring landscapes, rich heritage, and timeless character. It reflects
              strength and a sense of legacy, the same values we hope every book carries
              long after it reaches its readers. A well-written book is more than words
              on a page. It preserves ideas, shares experiences, and leaves something
              meaningful behind.
            </p>
            <p>
              The word <strong>Direct</strong> reflects our philosophy. We believe
              publishing should be simple, honest, and built around the author. From your
              first manuscript to your final published book, we are committed to providing
              professional guidance, clear communication, and the highest standards of
              quality at every stage.
            </p>
            <p>
              At Kimberley Direct Publishing, we know that behind every manuscript is a
              dream, years of dedication, and the courage to share a unique voice with the
              world. That is why we treat every project with the same care and respect we
              would give our own.
            </p>
            <p className="about-story-closing">
              Because every story deserves more than to be published. It deserves to be
              remembered.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
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
                Our mission is simple: to help authors create books that are not only
                professionally published, but remembered for years to come. Every story
                deserves the opportunity to leave a lasting legacy.
              </p>
              <p>
                Whether it is your first book or your fifth, our editors, designers,
                marketers, and publishing strategists work side-by-side with you,
                bringing the rigor of traditional publishing together with the
                transparency of modern self-publishing so your voice reaches readers
                across the globe.
              </p>
              <Button variant="yellow" href="/contact" icon={ArrowRight}>
                Start Your Journey
              </Button>
            </div>

            <div className="about-mission-stats-grid">
              {MISSION_STATS.map(({ icon: Icon, label }) => (
                <div className="about-mission-stat-card" key={label}>
                  <span className="about-stat-icon" aria-hidden="true">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <p className="mb-0 fw-600">{label}</p>
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
              <span className="clr-1">Kimberley Direct Publishing</span>
            </h2>
            <p className="about-pillars-sub">
              We&apos;ve helped countless authors self-publish with confidence.
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
