'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import { CONTACT_PHONE } from '@/lib/contact'

type Tab = 'Fantasy' | 'Fiction' | 'Romance' | 'Horror' | 'Cook Books' | 'Adventure' | 'Mystery'

const TABS: readonly Tab[] = [
  'Fantasy',
  'Fiction',
  'Romance',
  'Horror',
  'Cook Books',
  'Adventure',
  'Mystery',
]

// Kimberley's own cover set (22 designs). Each genre shows a distinct rotating
// window of the pool so switching tabs feels fresh without needing 8 unique
// covers per genre.
const COVER_POOL = Array.from({ length: 22 }, (_, i) => `/images/kdp-cover-${i + 1}.webp`)
const tabCovers = (offset: number, count = 6) =>
  Array.from({ length: count }, (_, i) => COVER_POOL[(offset + i) % COVER_POOL.length])

const portfolioImagesByTab: Record<Tab, string[]> = {
  Fantasy: tabCovers(0),
  Fiction: tabCovers(3),
  Romance: tabCovers(6),
  Horror: tabCovers(9),
  'Cook Books': tabCovers(12),
  Adventure: tabCovers(15),
  Mystery: tabCovers(18),
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('Fantasy')
  const covers = portfolioImagesByTab[activeTab]

  return (
    <section className="home-portfolio position-relative">
      <Container className="relative z-10">
        <div className="home-portfolio-head">
          <span className="span-tag-border-yellow">Recent Work</span>
          <h2 className="home-portfolio-title fw-700 pt-3">
            Books We&apos;ve Helped <span className="clr-1">Bring to Life</span>
          </h2>
          <p>
            A look across the genres we work in, from fantasy and romance to
            cookbooks and memoir. Every cover here started as someone&apos;s
            manuscript.
          </p>
        </div>

        <div className="home-portfolio-tabs" role="tablist" aria-label="Portfolio genres">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`pf-tab${activeTab === tab ? ' is-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </Container>

      <div className="home-portfolio-rail-wrap">
        <div
          key={activeTab}
          className="home-portfolio-rail"
          role="tabpanel"
          aria-label={`${activeTab} projects`}
        >
          {covers.map((src, i) => (
            <figure className="pf-cover" key={src}>
              <Image
                src={src}
                alt={`${activeTab} book cover sample ${i + 1}`}
                fill
                sizes="230px"
                className="pf-cover-img"
              />
            </figure>
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div className="home-portfolio-cta">
          <Button variant="yellow" href="/contact" icon={ArrowRight}>
            Start Your Book
          </Button>
          {CONTACT_PHONE && (
            <a
              className="anchor-number-cta anchor-number-cta--light align-items-center d-inline-flex"
              href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`}
            >
              <span className="span-1">
                <PhoneCall aria-hidden="true" size={16} />
              </span>
              <span className="span-2 fw-600 d-inline-block">
                Call Now
                <b>{CONTACT_PHONE}</b>
              </span>
            </a>
          )}
        </div>
      </Container>
    </section>
  )
}
