'use client'

import Image from 'next/image'
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
}

const GENRES: Record<Tab, GenreConfig> = {
  Fantasy: {
    sceneBg: 'linear-gradient(135deg, #150b2d 0%, #2d1166 100%)',
  },
  Fiction: {
    sceneBg: 'linear-gradient(135deg, #0c1f3d 0%, #1e3a6e 100%)',
  },
  Romance: {
    sceneBg: 'linear-gradient(135deg, #2d0a1a 0%, #7f1d3f 100%)',
  },
  Horror: {
    sceneBg: 'linear-gradient(135deg, #0d0d0d 0%, #3d0000 100%)',
  },
  'Cook Books': {
    sceneBg: 'linear-gradient(135deg, #1a1000 0%, #3d2800 100%)',
  },
  Adventure: {
    sceneBg: 'linear-gradient(135deg, #0a1a0a 0%, #1a3d1a 100%)',
  },
  Mystery: {
    sceneBg: 'linear-gradient(135deg, #0a0a1f 0%, #1a1a3d 100%)',
  },
}

const portfolioImages = [
  '/images/book1.webp',
  '/images/epileptic girl.webp',
  '/images/rangers on patrol.webp',
  '/images/81TmWd7H0bL._SL1500_-e1777872951701.webp',
  '/images/81YnsHtfDSL._SL1500_-1-e1777872972273.webp',
  '/images/book1.webp',
  '/images/epileptic girl.webp',
  '/images/rangers on patrol.webp',
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('Fantasy')
  const { sceneBg } = GENRES[activeTab]

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
          {portfolioImages.map((imageSrc, i) => (
            <div
              key={i}
              className="portfolio-item"
              style={{ background: sceneBg }}
            >
              <div className="portfolio-book-cover">
                <Image
                  src={imageSrc}
                  alt={`${activeTab} portfolio sample ${i + 1}`}
                  fill
                  sizes="(min-width: 992px) 150px, 120px"
                  className="section-placeholder-image contain"
                />
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
