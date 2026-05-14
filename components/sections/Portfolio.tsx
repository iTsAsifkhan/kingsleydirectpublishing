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

const PORTFOLIO_ITEMS_PER_TAB = 8

const portfolioImagesByTab: Record<Tab, string[]> = {
  Fantasy: Array.from(
    { length: 8 },
    (_, index) => `/images/fantasy (${index + 1}).webp`,
  ),
  Fiction: Array.from(
    { length: 8 },
    (_, index) => `/images/fiction (${index + 1}).webp`,
  ),
  Romance: Array.from(
    { length: 8 },
    (_, index) => `/images/romance (${index + 1}).webp`,
  ),
  Horror: Array.from(
    { length: 8 },
    (_, index) => `/images/horror (${index + 1}).webp`,
  ),
  'Cook Books': Array.from(
    { length: 8 },
    (_, index) => `/images/Cookbook (${index + 1}).webp`,
  ),
  Adventure: Array.from(
    { length: 8 },
    (_, index) => `/images/adeventure (${index + 1}).webp`,
  ),
  Mystery: Array.from(
    { length: 8 },
    (_, index) => `/images/mystery (${index + 1}).webp`,
  ),
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('Fantasy')
  const activePortfolioImages = portfolioImagesByTab[activeTab].slice(
    0,
    PORTFOLIO_ITEMS_PER_TAB,
  )

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
          {activePortfolioImages.map((imageSrc, i) => (
            <div key={imageSrc} className="portfolio-item">
              <Image
                src={imageSrc}
                alt={`${activeTab} portfolio sample ${i + 1}`}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="portfolio-cover-image"
              />
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
            href="tel:+61485976735"
          >
            <span className="span-1">
              <PhoneCall aria-hidden="true" className="clr-1" size={16} />
            </span>
            <span className="span-2 fw-600 clr-1 d-inline-block">
              Call Now <br />
              <b className="text-white">+61 485 976 735</b>
            </span>
          </a>
        </div>
      </Container>
    </section>
  )
}
