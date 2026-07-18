'use client'

import Link from 'next/link'
import { ArrowRight, Check, ChevronDown, Globe, Sparkles, Star } from 'lucide-react'
import { TIERS, SERVICE_PACKAGES, type Price } from '@/lib/packages'
import { CURRENCY_CODES, SUPPORTED_CURRENCIES, unitLabel } from '@/lib/currency'
import { useCurrency } from '@/hooks/useCurrency'

export default function PackagesPricing() {
  const { currency, setCurrency, status, format } = useCurrency()
  const loading = status === 'loading'

  /** Big price + unit label, dimmed while rates resolve. */
  const PriceTag = ({ price, tone = 'dark' }: { price: Price; tone?: 'dark' | 'light' }) => (
    <p className={`pkg-price pkg-price-${tone}`} data-loading={loading || undefined}>
      <span className="pkg-price-amount">{format(price.amount)}</span>
      <span className="pkg-price-unit">{unitLabel(price.unit)}</span>
    </p>
  )

  return (
    <>
      {/* Currency selector */}
      <div className="pkg-currency-bar">
        <span className="pkg-currency-note">
          <Globe size={16} aria-hidden="true" />
          <span>
            Prices shown in{' '}
            <strong>{SUPPORTED_CURRENCIES[currency]?.label ?? currency}</strong>
            {loading && <span className="pkg-currency-loading"> · updating…</span>}
          </span>
        </span>

        <label className="pkg-currency-select-wrap">
          <span className="sr-only-label">Choose currency</span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            aria-label="Choose currency"
          >
            {CURRENCY_CODES.map((code) => (
              <option key={code} value={code}>
                {code} — {SUPPORTED_CURRENCIES[code].label}
              </option>
            ))}
          </select>
          <ChevronDown size={18} className="pkg-currency-caret" aria-hidden="true" />
        </label>
      </div>

      {/* Flagship tiers */}
      <div className="pkg-tiers">
        {TIERS.map((tier) => (
          <article
            key={tier.id}
            className={`pkg-tier-card${tier.popular ? ' pkg-tier-popular' : ''}`}
          >
            {tier.popular && (
              <span className="pkg-popular-badge">
                <Star size={14} aria-hidden="true" />
                Most Popular
              </span>
            )}

            <h3 className="pkg-tier-name">{tier.name}</h3>
            <PriceTag price={tier.price} tone={tier.popular ? 'light' : 'dark'} />
            <p className="pkg-tier-tagline">{tier.tagline}</p>

            <ul className="pkg-feature-list">
              {tier.lead && <li className="pkg-feature-lead">{tier.lead}</li>}
              {tier.features.map((f) => (
                <li key={f} className="pkg-feature">
                  <span className="pkg-check" aria-hidden="true">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`btn ${tier.popular ? 'btn-yellow' : 'btn-blue'} pkg-cta`}
            >
              <span className="span-1">Get started</span>
              <span className="span-2" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </Link>
          </article>
        ))}
      </div>

      {/* À-la-carte services */}
      <div className="pkg-alacarte">
        <div className="pkg-section-head">
          <span className="span-tag-border">À La Carte</span>
          <h2 className="fw-700 pt-3">
            Individual <span className="clr-1">Services</span>
          </h2>
          <p className="pkg-section-sub">
            Need just one piece of the puzzle? Pick exactly the service your book
            requires — no bundle necessary.
          </p>
        </div>

        <div className="pkg-service-grid">
          {SERVICE_PACKAGES.map((svc) => (
            <article key={svc.id} className="pkg-service-card">
              <h3 className="pkg-service-name">{svc.name}</h3>
              <PriceTag price={svc.price} />
              <ul className="pkg-feature-list pkg-feature-list-sm">
                {svc.features.map((f) => (
                  <li key={f} className="pkg-feature">
                    <span className="pkg-check" aria-hidden="true">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-blue pkg-cta pkg-cta-sm">
                <span className="span-1">Get started</span>
                <span className="span-2" aria-hidden="true">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </article>
          ))}

          {/* Custom / tailored card */}
          <article className="pkg-service-card pkg-custom-card">
            <span className="pkg-custom-icon" aria-hidden="true">
              <Sparkles size={26} />
            </span>
            <h3 className="pkg-service-name pkg-custom-title">Need something tailored?</h3>
            <p className="pkg-custom-text">
              Every author&apos;s journey is different. Tell us what you&apos;re
              working on and we&apos;ll build a package around your manuscript,
              timeline, and budget.
            </p>
            <Link href="/contact" className="btn btn-yellow pkg-cta pkg-cta-sm">
              <span className="span-1">Request a custom package</span>
              <span className="span-2" aria-hidden="true">
                <ArrowRight size={16} />
              </span>
            </Link>
          </article>
        </div>
      </div>
    </>
  )
}
