/**
 * Single source of truth for Packages page pricing.
 *
 * All amounts are stored in the base currency (USD). The Packages page converts
 * these to the visitor's currency at render time via `hooks/useCurrency` — edit
 * the numbers here and every card + JSON-LD offer updates automatically.
 *
 * `unit` keeps the pricing model attached to each amount so the UI can render
 * the right label ("one-time" / "per word" / "per illustration") after conversion.
 */

export const BASE_CURRENCY = 'USD' as const

export type PriceUnit = 'one-time' | 'per word' | 'per illustration'

export interface Price {
  /** Amount in USD (base currency). */
  amount: number
  unit: PriceUnit
}

export interface Tier {
  id: string
  name: string
  price: Price
  tagline: string
  /** Feature bullets. `lead` renders as an emphasised "Everything in X, plus:" row. */
  features: string[]
  lead?: string
  popular?: boolean
}

export interface ServicePackage {
  id: string
  name: string
  price: Price
  features: string[]
}

/** Two flagship publishing tiers. */
export const TIERS: Tier[] = [
  {
    id: 'standard-book-publishing',
    name: 'Standard Book Publishing',
    price: { amount: 799, unit: 'one-time' },
    tagline:
      'Complete Amazon KDP package that formats, designs, optimises and publishes your book while you keep 100% rights and royalties.',
    features: [
      'Professional book formatting',
      'Custom book cover design',
      'Metadata & listing optimisation',
      'Full Amazon KDP publishing setup',
      'ISBN guidance',
      'Dedicated publishing support',
      '100% satisfaction & money-back guarantee',
    ],
  },
  {
    id: 'premium-book-publishing',
    name: 'Premium Book Publishing',
    price: { amount: 1399, unit: 'one-time' },
    tagline: 'Advanced package with distribution across 10+ major platforms.',
    popular: true,
    lead: 'Everything in Standard, plus:',
    features: [
      'Publishing on 10+ platforms (Amazon, Barnes & Noble, Kobo, Draft2Digital, Google Books, Apple Books & more)',
      'Author profile & page optimisation',
      'ISBN guidance',
      '100% satisfaction & money-back guarantee',
    ],
  },
]

/** À-la-carte individual services. */
export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'book-publication',
    name: 'Book Publication',
    price: { amount: 299, unit: 'one-time' },
    features: [
      'Professional formatting',
      'ISBN assignment',
      'Global distribution',
      'Royalty management',
    ],
  },
  {
    id: 'book-cover',
    name: 'Book Cover',
    price: { amount: 199, unit: 'one-time' },
    features: [
      'Custom artwork',
      'Multiple concepts',
      'Print & digital formats',
      'Unlimited revisions',
    ],
  },
  {
    id: 'ghostwriting',
    name: 'Ghostwriting',
    price: { amount: 2500, unit: 'one-time' },
    features: [
      'Custom content creation',
      'Genre-specific expertise',
      'Unlimited revisions',
      'Fast turnaround',
    ],
  },
  {
    id: 'editorial-services',
    name: 'Editorial Services',
    price: { amount: 0.2, unit: 'per word' },
    features: [
      'Developmental editing',
      'Copy editing',
      'Proofreading',
      'Style-guide compliance',
    ],
  },
  {
    id: 'custom-illustration',
    name: 'Custom Illustration',
    price: { amount: 65, unit: 'per illustration' },
    features: [
      'Multiple style samples',
      '2–3 initial mockups',
      'Story-based sketching & design',
      'Unlimited revisions',
    ],
  },
  {
    id: 'book-marketing',
    name: 'Book Marketing',
    price: { amount: 899, unit: 'one-time' },
    features: [
      'Social media campaigns',
      'Press release distribution',
      'Book reviews',
      'Launch strategy',
    ],
  },
  {
    id: 'video-trailer',
    name: 'Video Trailer',
    price: { amount: 999, unit: 'one-time' },
    features: [
      'Professional production',
      'Custom animations',
      'Voiceover included',
      'Multiple formats',
    ],
  },
]
