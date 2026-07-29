/**
 * Single source of truth for Kimberley Direct Publishing's public contact
 * details.
 *
 * These are confirmed, permanent business facts, so they ship in the repo as
 * defaults and deploy via git (the `.env*` files are gitignored and never
 * reach the host). An env var can still override any value per environment if
 * the number, address, or email ever changes — set it once in the host
 * dashboard and it wins everywhere.
 */

/** Public business phone (display form). */
export const CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+44 7344 765433'

/** `+` and digits only — for `tel:` links. */
export const CONTACT_PHONE_TEL = CONTACT_PHONE.replace(/[^\d+]/g, '')

/** Digits only — for `wa.me` / WhatsApp links. */
export const CONTACT_PHONE_DIGITS = CONTACT_PHONE.replace(/\D/g, '')

/** Registered office address (single-line display form). */
export const OFFICE_ADDRESS =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS ??
  '29 Cambray Place, Cheltenham, GL50 1JX, United Kingdom'

/** Structured form for schema.org PostalAddress. */
export const OFFICE_ADDRESS_PARTS = {
  streetAddress: '29 Cambray Place',
  addressLocality: 'Cheltenham',
  addressRegion: 'Gloucestershire',
  postalCode: 'GL50 1JX',
  addressCountry: 'GB',
}

/** Primary contact email. */
export const CONTACT_EMAIL = 'info@kimberleydirectpublishing.com'
