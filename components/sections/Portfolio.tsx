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

const portfolioImagesByTab: Record<Tab, string[]> = {
  Fantasy: Array.from({ length: 8 }, (_, i) => `/images/fantasy (${i + 1}).webp`),
  Fiction: Array.from({ length: 8 }, (_, i) => `/images/fiction (${i + 1}).webp`),
  Romance: Array.from({ length: 8 }, (_, i) => `/images/romance (${i + 1}).webp`),
  Horror: Array.from({ length: 8 }, (_, i) => `/images/horror (${i + 1}).webp`),
  'Cook Books': Array.from({ length: 8 }, (_, i) => `/images/Cookbook (${i + 1}).webp`),
  Adventure: Array.from({ length: 8 }, (_, i) => `/images/adeventure (${i + 1}).webp`),
  Mystery: Array.from({ length: 8 }, (_, i) => `/images/mystery (${i + 1}).webp`),
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
              className="anchor-number-cta align-items-center d-inline-flex"
              href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`}
            >
              <span className="span-1">
                <PhoneCall aria-hidden="true" className="clr-1" size={16} />
              </span>
              <span className="span-2 fw-600 clr-1 d-inline-block">
                Call Now <br />
                <b className="text-white">{CONTACT_PHONE}</b>
              </span>
            </a>
          )}
        </div>
      </Container>
    </section>
  )
}
