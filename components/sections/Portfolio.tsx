'use client'

import { useState } from 'react'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { Button, Container } from '@/components/ui'

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

interface GenreConfig {
  sceneBg: string
  coverColors: readonly string[]
  accent: string
}

const GENRES: Record<Tab, GenreConfig> = {
  Fantasy: {
    sceneBg: 'linear-gradient(135deg, #150b2d 0%, #2d1166 100%)',
    coverColors: ['#3b1278', '#4c1d95', '#312e81', '#1a0d4a', '#5b21b6', '#2d1155', '#4c1d95', '#3b1278'],
    accent: '#a78bfa',
  },
  Fiction: {
    sceneBg: 'linear-gradient(135deg, #0c1f3d 0%, #1e3a6e 100%)',
    coverColors: ['#1e3a6e', '#1d4ed8', '#1e40af', '#1a336b', '#0f2352', '#2563eb', '#1d4ed8', '#1e3a6e'],
    accent: '#60a5fa',
  },
  Romance: {
    sceneBg: 'linear-gradient(135deg, #2d0a1a 0%, #7f1d3f 100%)',
    coverColors: ['#7f1d3f', '#9d174d', '#be185d', '#6d1c3c', '#4c0d26', '#9d174d', '#be185d', '#7f1d3f'],
    accent: '#f472b6',
  },
  Horror: {
    sceneBg: 'linear-gradient(135deg, #0d0d0d 0%, #3d0000 100%)',
    coverColors: ['#3d0000', '#450a0a', '#7f1d1d', '#991b1b', '#4c0000', '#7f1d1d', '#3d0000', '#450a0a'],
    accent: '#f87171',
  },
  'Cook Books': {
    sceneBg: 'linear-gradient(135deg, #1a1000 0%, #3d2800 100%)',
    coverColors: ['#3d2800', '#78350f', '#92400e', '#451a03', '#4d3400', '#78350f', '#3d2800', '#92400e'],
    accent: '#fbbf24',
  },
  Adventure: {
    sceneBg: 'linear-gradient(135deg, #0a1a0a 0%, #1a3d1a 100%)',
    coverColors: ['#1a3d1a', '#14532d', '#166534', '#052e16', '#15803d', '#14532d', '#1a3d1a', '#166534'],
    accent: '#4ade80',
  },
  Mystery: {
    sceneBg: 'linear-gradient(135deg, #0a0a1f 0%, #1a1a3d 100%)',
    coverColors: ['#1a1a3d', '#312e81', '#1e1b4b', '#3730a3', '#4338ca', '#312e81', '#1a1a3d', '#3730a3'],
    accent: '#818cf8',
  },
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('Fantasy')
  const { sceneBg, coverColors, accent } = GENRES[activeTab]

  return (
    <section className="index-wrap-6 position-relative">
      <span className="index-wrap-6-shade-1" aria-hidden="true" />
      <span className="index-wrap-6-shade-2" aria-hidden="true" />
      <span className="index-wrap-6-star-1" aria-hidden="true" />
      <span className="index-wrap-6-star-2" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Section header */}
        <div className="index-wrap-6-header">
          <div>
            <span className="span-tag-border-yellow">Our Portfolio</span>
            <h2 className="mb-0 fw-700 pt-3">An Overview of Recent Projects</h2>
          </div>
          <p className="mb-0 index-wrap-6-desc">
            Explore our latest projects, showcasing high-quality work across industries.
            From innovative book publishing to successful marketing campaigns, we deliver
            excellence and help clients stand out in a competitive market.
          </p>
        </div>

        {/* Genre tabs */}
        <ul className="index-wrap-6-tabs" role="tablist" aria-label="Portfolio genre tabs">
          {TABS.map((tab) => (
            <li
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveTab(tab)
                }
              }}
              tabIndex={0}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Portfolio grid — key forces re-animation on tab change */}
        <div
          key={activeTab}
          className="portfolio-grid"
          role="tabpanel"
          aria-label={`${activeTab} portfolio items`}
        >
          {coverColors.map((coverColor, i) => (
            <div
              key={i}
              className="portfolio-item"
              style={{ background: sceneBg }}
            >
              {/* CSS book cover placeholder */}
              <div className="portfolio-book-cover" style={{ background: coverColor }}>
                <div className="portfolio-book-spine" />
                <div className="portfolio-book-lines">
                  <span style={{ background: `${accent}dd` }} />
                  <span style={{ width: '70%', background: 'rgba(255,255,255,0.4)' }} />
                  <span style={{ width: '55%', background: 'rgba(255,255,255,0.25)' }} />
                </div>
                <div className="portfolio-book-footer" style={{ background: accent }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="portfolio-cta">
          <Button variant="yellow" href="/contact" icon={ArrowRight}>
            Get A Quote
          </Button>
          <a
            className="anchor-number-cta align-items-center d-inline-flex"
            href="tel:+18554297565"
          >
            <span className="span-1">
              <PhoneCall aria-hidden="true" className="clr-1" size={16} />
            </span>
            <span className="span-2 fw-600 clr-1 d-inline-block">
              Call Now <br />
              <b className="text-white">+1(855) 429-7565</b>
            </span>
          </a>
        </div>
      </Container>
    </section>
  )
}
