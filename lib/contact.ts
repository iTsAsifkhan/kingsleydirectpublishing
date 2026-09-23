/**
 * Single source of truth for Kimberley Direct Publishing's public contact
 * details.
 *
 * These are confirmed, permanent business facts, so they ship in the repo as
 * defaults and deploy via git (the `.env*` files are gitignored and never
 * reach the host). An env var can still override any value per environment if
 * the number, address, or email ever changes, set it once in the host
 * dashboard and it wins everywhere.
 */

/** Public business phone (display form). */
export const CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+44 7344 765433'

/** `+` and digits only, for `tel:` links. */
export const CONTACT_PHONE_TEL = CONTACT_PHONE.replace(/[^\d+]/g, '')

/** Digits only, for `wa.me` / WhatsApp links. */
export const CONTACT_PHONE_DIGITS = CONTACT_PHONE.replace(/\D/g, '')

/** Registered office address (single-line display form). */
export const OFFICE_ADDRESS =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS ??
  'Star Lodge, Montpellier Dr, Cheltenham, GL50 1TY, United Kingdom'

/** Structured form for schema.org PostalAddress. */
export const OFFICE_ADDRESS_PARTS = {
  streetAddress: 'Star Lodge, Montpellier Dr',
  addressLocality: 'Cheltenham',
  addressRegion: 'Gloucestershire',
  postalCode: 'GL50 1TY',
  addressCountry: 'GB',
}

/**
 * Secondary (Netherlands) office. The UK details above remain the primary
 * contact; this is shown alongside as an additional presence.
 */
export const OFFICE_ADDRESS_SECONDARY =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS_SECONDARY ??
  'Vinkenburgstraat 2A, 3512 AB Utrecht, Netherlands'

/** Structured form for the secondary schema.org PostalAddress. */
export const OFFICE_ADDRESS_SECONDARY_PARTS = {
  streetAddress: 'Vinkenburgstraat 2A',
  addressLocality: 'Utrecht',
  addressRegion: 'Utrecht',
  postalCode: '3512 AB',
  addressCountry: 'NL',
}

/**
 * Tertiary (Pakistan) office. An additional regional presence shown alongside
 * the UK and Netherlands details.
 */
export const OFFICE_ADDRESS_TERTIARY =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS_TERTIARY ??
  '5th Floor Emirates Tower, F-7, Islamabad, Pakistan'

/** Structured form for the tertiary schema.org PostalAddress. */
export const OFFICE_ADDRESS_TERTIARY_PARTS = {
  streetAddress: '5th Floor Emirates Tower, F-7',
  addressLocality: 'Islamabad',
  addressRegion: 'Islamabad Capital Territory',
  postalCode: '44000',
  addressCountry: 'PK',
}

/**
 * Quaternary (Australia) office. An additional regional presence shown
 * alongside the UK, Netherlands, and Pakistan details.
 */
export const CONTACT_PHONE_QUATERNARY =
  process.env.NEXT_PUBLIC_CONTACT_PHONE_QUATERNARY ?? '+61 480 008 029'

/** `+` and digits only, for `tel:` links. */
export const CONTACT_PHONE_QUATERNARY_TEL = CONTACT_PHONE_QUATERNARY.replace(/[^\d+]/g, '')

/** Quaternary (Australia) office address (single-line display form). */
export const OFFICE_ADDRESS_QUATERNARY =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS_QUATERNARY ??
  '19 Smith St, Darwin City NT 0800, Australia'

/** Structured form for the quaternary schema.org PostalAddress. */
export const OFFICE_ADDRESS_QUATERNARY_PARTS = {
  streetAddress: '19 Smith St',
  addressLocality: 'Darwin City',
  addressRegion: 'NT',
  postalCode: '0800',
  addressCountry: 'AU',
}

/** Primary contact email. */
export const CONTACT_EMAIL = 'info@kimberleydirectpublishing.com'

/**
 * Legal entity details. "Kimberley Direct Publishing" is a trading name; the
 * registered company is the entity below. UK law (Companies Act 2006, the
 * Company, Limited Liability Partnership and Business (Names and Trading
 * Disclosures) Regulations 2015) requires these to be shown where visitors can
 * reasonably find them, and UK GDPR requires the legal entity to be named as
 * data controller. Confirmed permanent facts, shipped as defaults.
 */
export const COMPANY_LEGAL_NAME =
  process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME ??
  'Kimberley Design & Publishing Limited'

/** Registered trading name shown to the public. */
export const COMPANY_TRADING_NAME = 'Kimberley Direct Publishing'

/** Companies House registration number. */
export const COMPANY_NUMBER =
  process.env.NEXT_PUBLIC_COMPANY_NUMBER ?? '17422144'

/** Jurisdiction of incorporation. */
export const COMPANY_JURISDICTION = 'England and Wales'

/** Registered office (full display form — uses "Drive" per Companies House). */
export const REGISTERED_OFFICE_ADDRESS =
  process.env.NEXT_PUBLIC_REGISTERED_OFFICE_ADDRESS ??
  'Star Lodge, Montpellier Drive, Cheltenham, GL50 1TY, United Kingdom'
