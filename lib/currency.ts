/**
 * Currency utilities — framework-agnostic, reusable across any page.
 *
 * Responsibilities:
 *  - Describe the set of supported currencies (easy to extend — add a row).
 *  - Detect the visitor's currency from IP geolocation (no permission prompt).
 *  - Fetch + cache live USD exchange rates (localStorage, 24h TTL).
 *  - Convert base-USD amounts to a target currency with "clean" marketing rounding.
 *  - Format amounts with Intl.NumberFormat.
 *
 * The React state/wiring lives in `hooks/useCurrency.ts`; this file has no React
 * dependency so it can be used from anywhere.
 */

import { BASE_CURRENCY, type PriceUnit } from './packages'

export interface CurrencyMeta {
  code: string
  /** BCP-47 locale used for Intl formatting (chosen to render Latin digits). */
  locale: string
  /** Human label for the dropdown. */
  label: string
}

/**
 * Supported currencies. Add a row to extend — detection, conversion and
 * formatting all read from this map, so nothing else needs to change.
 */
export const SUPPORTED_CURRENCIES: Record<string, CurrencyMeta> = {
  USD: { code: 'USD', locale: 'en-US', label: 'US Dollar' },
  EUR: { code: 'EUR', locale: 'en-IE', label: 'Euro' },
  GBP: { code: 'GBP', locale: 'en-GB', label: 'British Pound' },
  AUD: { code: 'AUD', locale: 'en-AU', label: 'Australian Dollar' },
  CAD: { code: 'CAD', locale: 'en-CA', label: 'Canadian Dollar' },
  PKR: { code: 'PKR', locale: 'en-PK', label: 'Pakistani Rupee' },
  INR: { code: 'INR', locale: 'en-IN', label: 'Indian Rupee' },
  AED: { code: 'AED', locale: 'en-AE', label: 'UAE Dirham' },
}

export const CURRENCY_CODES = Object.keys(SUPPORTED_CURRENCIES)

export function isSupported(code: string | null | undefined): code is string {
  return !!code && code in SUPPORTED_CURRENCIES
}

/**
 * Country (ISO 3166-1 alpha-2) → currency code. Only needs entries where we
 * can't rely on the geo API's own currency field; the eurozone is mapped here
 * so any member country resolves to EUR.
 */
export const COUNTRY_TO_CURRENCY: Record<string, string> = {
  US: 'USD',
  GB: 'GBP',
  AU: 'AUD',
  CA: 'CAD',
  PK: 'PKR',
  IN: 'INR',
  AE: 'AED',
  // Eurozone
  AT: 'EUR', BE: 'EUR', CY: 'EUR', DE: 'EUR', EE: 'EUR', ES: 'EUR', FI: 'EUR',
  FR: 'EUR', GR: 'EUR', IE: 'EUR', IT: 'EUR', LT: 'EUR', LU: 'EUR', LV: 'EUR',
  MT: 'EUR', NL: 'EUR', PT: 'EUR', SI: 'EUR', SK: 'EUR', HR: 'EUR',
}

const RATES_CACHE_KEY = 'kdp_rates_v1'
const OVERRIDE_KEY = 'kdp_currency'
const RATES_TTL_MS = 24 * 60 * 60 * 1000 // 24h

export type Rates = Record<string, number>

interface RatesCache {
  ts: number
  base: string
  rates: Rates
}

/* ------------------------------------------------------------------ *
 *  Persisted manual override
 * ------------------------------------------------------------------ */

export function readOverride(): string | null {
  if (typeof window === 'undefined') return null
  try {
    const v = window.localStorage.getItem(OVERRIDE_KEY)
    return isSupported(v) ? v : null
  } catch {
    return null
  }
}

export function writeOverride(code: string): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(OVERRIDE_KEY, code)
  } catch {
    /* storage unavailable — non-fatal */
  }
}

/* ------------------------------------------------------------------ *
 *  Exchange rates (cached, with live fetch + fallback)
 * ------------------------------------------------------------------ */

function readCachedRates(): Rates | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(RATES_CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as RatesCache
    if (
      parsed.base !== BASE_CURRENCY ||
      Date.now() - parsed.ts > RATES_TTL_MS ||
      !parsed.rates?.[BASE_CURRENCY]
    ) {
      return null
    }
    return parsed.rates
  } catch {
    return null
  }
}

function writeCachedRates(rates: Rates): void {
  if (typeof window === 'undefined') return
  try {
    const payload: RatesCache = { ts: Date.now(), base: BASE_CURRENCY, rates }
    window.localStorage.setItem(RATES_CACHE_KEY, JSON.stringify(payload))
  } catch {
    /* non-fatal */
  }
}

async function fetchFromErApi(): Promise<Rates | null> {
  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${BASE_CURRENCY}`)
    if (!res.ok) return null
    const data = await res.json()
    if (data?.result === 'success' && data?.rates) return data.rates as Rates
    return null
  } catch {
    return null
  }
}

async function fetchFromFrankfurter(): Promise<Rates | null> {
  try {
    const symbols = CURRENCY_CODES.filter((c) => c !== BASE_CURRENCY).join(',')
    const res = await fetch(
      `https://api.frankfurter.app/latest?from=${BASE_CURRENCY}&to=${symbols}`,
    )
    if (!res.ok) return null
    const data = await res.json()
    if (data?.rates) return { ...data.rates, [BASE_CURRENCY]: 1 } as Rates
    return null
  } catch {
    return null
  }
}

/**
 * Live USD rates, cached in localStorage for 24h. Falls back across two free,
 * key-less APIs; returns `null` only if both fail and no cache exists (callers
 * then default to USD-only).
 */
export async function getRates(): Promise<Rates | null> {
  const cached = readCachedRates()
  if (cached) return cached

  const rates = (await fetchFromErApi()) ?? (await fetchFromFrankfurter())
  if (rates) {
    writeCachedRates(rates)
    return rates
  }
  return null
}

/* ------------------------------------------------------------------ *
 *  Geolocation → currency (IP based, no browser permission prompt)
 * ------------------------------------------------------------------ */

export async function detectCurrency(): Promise<string> {
  // ipwho.is returns a `currency.code` plus `country_code`; ipapi.co is the
  // fallback. Either way we map into our supported set, else default to USD.
  try {
    const res = await fetch('https://ipwho.is/')
    if (res.ok) {
      const data = await res.json()
      const direct = data?.currency?.code
      if (isSupported(direct)) return direct
      const byCountry = COUNTRY_TO_CURRENCY[data?.country_code]
      if (isSupported(byCountry)) return byCountry
    }
  } catch {
    /* try fallback */
  }

  try {
    const res = await fetch('https://ipapi.co/json/')
    if (res.ok) {
      const data = await res.json()
      const direct = data?.currency
      if (isSupported(direct)) return direct
      const byCountry = COUNTRY_TO_CURRENCY[data?.country_code]
      if (isSupported(byCountry)) return byCountry
    }
  } catch {
    /* fall through */
  }

  return BASE_CURRENCY
}

/* ------------------------------------------------------------------ *
 *  Conversion + formatting
 * ------------------------------------------------------------------ */

/**
 * Round a converted amount to a clean marketing value. Never applied to the base
 * currency, so the exact source prices (e.g. $799) always render verbatim.
 */
export function roundNice(v: number): number {
  if (v < 1) return Math.round(v * 100) / 100 // sub-unit, e.g. per-word: 2 dp
  if (v < 20) return Math.round(v) // nearest 1
  if (v < 100) return Math.round(v / 5) * 5 // nearest 5
  if (v < 1000) return Math.round(v / 10) * 10 // nearest 10
  if (v < 10000) return Math.round(v / 50) * 50 // nearest 50
  return Math.round(v / 100) * 100 // nearest 100
}

/**
 * Convert a base-USD amount into `currency`. Returns the untouched base amount
 * when no rate is available (or the target is USD) so rendering never blocks.
 */
export function convert(amountUsd: number, currency: string, rates: Rates | null): number {
  if (currency === BASE_CURRENCY) return amountUsd
  const rate = rates?.[currency]
  if (!rate) return amountUsd // graceful fallback: show base figure
  return roundNice(amountUsd * rate)
}

/** Format an amount already expressed in `currency`. */
export function formatAmount(amount: number, currency: string): string {
  const meta = SUPPORTED_CURRENCIES[currency] ?? SUPPORTED_CURRENCIES[BASE_CURRENCY]
  const fractionDigits = amount < 1 ? 2 : 0
  try {
    return new Intl.NumberFormat(meta.locale, {
      style: 'currency',
      currency: meta.code,
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(amount)
  } catch {
    return `${meta.code} ${amount}`
  }
}

/** Convert + format in one step. */
export function convertAndFormat(
  amountUsd: number,
  currency: string,
  rates: Rates | null,
): string {
  return formatAmount(convert(amountUsd, currency, rates), currency)
}

/** Human label for a price unit (empty for the default one-time model). */
export function unitLabel(unit: PriceUnit): string {
  return unit === 'one-time' ? 'one-time' : unit
}
