'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  BASE_CURRENCY,
} from '@/lib/packages'
import {
  convert as convertAmount,
  convertAndFormat,
  detectCurrency,
  getRates,
  readOverride,
  writeOverride,
  type Rates,
} from '@/lib/currency'

export type CurrencyStatus = 'loading' | 'ready'

export interface UseCurrency {
  /** Active currency code (starts as USD, updates after detection/override). */
  currency: string
  /** Switch currency and persist the choice; overrides auto-detection on return. */
  setCurrency: (code: string) => void
  /** 'loading' until rates + detection resolve, then 'ready'. Never blocks render. */
  status: CurrencyStatus
  /** Convert a base-USD amount to the active currency (rounded). */
  convert: (amountUsd: number) => number
  /** Convert + format a base-USD amount for display. */
  format: (amountUsd: number) => string
}

/**
 * Reusable currency hook: IP-detects the visitor's currency, loads live cached
 * rates, and honours a persisted manual override. Any page can call this.
 *
 * SSR-safe: first render is always the base currency (USD) so server and client
 * markup match; detection/override are applied in an effect after hydration.
 */
export function useCurrency(): UseCurrency {
  const [currency, setCurrencyState] = useState<string>(BASE_CURRENCY)
  const [rates, setRates] = useState<Rates | null>(null)
  const [status, setStatus] = useState<CurrencyStatus>('loading')

  useEffect(() => {
    let active = true

    async function init() {
      // Rates and currency choice can resolve in parallel.
      const override = readOverride()
      const [loadedRates, detected] = await Promise.all([
        getRates(),
        override ? Promise.resolve(override) : detectCurrency(),
      ])

      if (!active) return
      if (loadedRates) setRates(loadedRates)
      // Only switch away from USD if we actually have a rate for the target.
      if (detected !== BASE_CURRENCY && (!loadedRates || loadedRates[detected])) {
        setCurrencyState(detected)
      } else if (detected === BASE_CURRENCY) {
        setCurrencyState(BASE_CURRENCY)
      }
      setStatus('ready')
    }

    init()
    return () => {
      active = false
    }
  }, [])

  const setCurrency = useCallback((code: string) => {
    setCurrencyState(code)
    writeOverride(code)
  }, [])

  const convert = useCallback(
    (amountUsd: number) => convertAmount(amountUsd, currency, rates),
    [currency, rates],
  )

  const format = useCallback(
    (amountUsd: number) => convertAndFormat(amountUsd, currency, rates),
    [currency, rates],
  )

  return useMemo(
    () => ({ currency, setCurrency, status, convert, format }),
    [currency, setCurrency, status, convert, format],
  )
}
