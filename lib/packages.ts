/**
 * Single source of truth for Packages page pricing.
 *
 * All amounts are stored in the base currency (AUD). The Packages page converts
 * these to the visitor's currency at render time via `hooks/useCurrency`. Edit
 * the numbers here and every card + JSON-LD offer updates automatically.
 *
 * `unit` keeps the pricing model attached to each amount so the UI can render
 * the right label ("one-time" / "per word" / "per illustration") after conversion.
 */

export const BASE_CURRENCY = 'AUD' as const

export type PriceUnit = 'one-time' | 'per word' | 'per illustration' | 'per month'

export interface Price {
  /** Amount in AUD (base currency). */
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

/** Three flagship publishing tiers: a Basic → Best Seller → Global ladder. */
export const TIERS: Tier[] = [
  {
    id: 'basic-publishing',
    name: 'Basic Publishing Package',
    price: { amount: 550, unit: 'one-time' },
    tagline:
      'Everything you need to format, design and publish your book on Amazon KDP, while keeping 100% of your rights and royalties.',
    features: [
      'Professional interior formatting (paperback & Kindle)',
      'Custom front & back cover design',
      'Proofreading & page layout',
      'Amazon KDP account setup & publishing',
      'Kindle & paperback publishing',
      'Book description formatting',
      'Keyword & category optimization',
      'ISBN guidance',
      'Final quality check before publication',
      'Dedicated publishing consultant',
      '100% ownership of your book',
      '100% royalties paid directly to you',
    ],
  },
  {
    id: 'best-seller-publishing',
    name: 'Best Seller Publishing Package',
    price: { amount: 1450, unit: 'one-time' },
    tagline:
      'Reach readers everywhere with distribution across 10+ major publishing platforms, richer metadata and multiple revision rounds.',
    popular: true,
    lead: 'Everything in Basic, plus:',
    features: [
      'Distribution to 10+ major online publishing platforms',
      'Basic editing',
      'Publishing on Amazon, Apple Books, Google Play, Kobo, Barnes & Noble, Draft2Digital, Smashwords, Lulu, Everand (Scribd) & more',
      'Enhanced metadata optimization',
      'Author profile setup & optimization',
      'eBook conversion for all major devices',
      'Multiple revision rounds before publishing',
      'Publishing consultation & launch guidance',
      'Ongoing publishing support',
    ],
  },
  {
    id: 'global-distribution',
    name: 'Global Distribution',
    price: { amount: 3500, unit: 'one-time' },
    tagline:
      'Our flagship package with premium editing, hardcover formatting and worldwide distribution to 4,000+ platforms, libraries and stores.',
    lead: 'Everything in Best Seller, plus:',
    features: [
      'Professional editing',
      'Hardcover, paperback & eBook formatting',
      'Premium front, back & spine cover design',
      'Worldwide distribution to 4,000+ platforms, libraries & stores',
      'Print on Demand (POD) setup',
      'ISBN provided by us',
      'Copyright page creation',
      'Expanded distribution eligibility',
      'Dedicated publishing project manager',
      'Post-publication & priority support',
      '100% ownership & 100% royalties, no hidden fees',
    ],
  },
]

/** Ongoing, monthly author marketing retainer (rendered as its own band). */
export const MARKETING_PACKAGE: Tier = {
  id: 'marketing-package',
  name: 'Marketing Package',
  price: { amount: 2500, unit: 'per month' },
  tagline:
    'A dedicated marketing engine for your book, with content, ads and strategy managed month over month by a dedicated marketing manager.',
  features: [
    'Social media management (up to 3 platforms)',
    '3 custom social media posts per week',
    '2 professional book trailers or promo videos (30s) per month',
    'Custom promotional graphics & branded creatives',
    'Author landing page with book purchase links',
    'Monthly content calendar',
    'Meta (Facebook & Instagram) ad management, optional (ad spend not included)',
    'Monthly performance report',
    'Dedicated marketing manager',
    'Priority email & chat support',
    'Ongoing marketing strategy & campaign optimization',
  ],
}

/** À-la-carte individual services. */
export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'book-publication',
    name: 'Book Publication',
    price: { amount: 300, unit: 'one-time' },
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
    price: { amount: 200, unit: 'one-time' },
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
    price: { amount: 3900, unit: 'one-time' },
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
    price: { amount: 0.3, unit: 'per word' },
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
    price: { amount: 100, unit: 'per illustration' },
    features: [
      'Multiple style samples',
      '2 to 3 initial mockups',
      'Story-based sketching & design',
      'Unlimited revisions',
    ],
  },
  {
    id: 'video-trailer',
    name: 'Video Trailer',
    price: { amount: 750, unit: 'one-time' },
    features: [
      'Professional production',
      'Custom animations',
      'Voiceover included',
      'Multiple formats',
    ],
  },
]
