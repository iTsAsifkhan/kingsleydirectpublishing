'use client'

import {
  useActionState,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'
import { Send, X } from 'lucide-react'
import { submitContactForm } from '@/app/actions'

type FieldName = 'name' | 'email' | 'phone' | 'message'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Show once per browser tab session so we don't nag a returning scroller.
const SEEN_KEY = 'kdp_lead_popup_seen'
// Fraction of the scrollable page the visitor must pass before the popup opens.
const SCROLL_TRIGGER = 0.03

function validate(name: FieldName, value: string): string | null {
  const v = value.trim()
  switch (name) {
    case 'name':
      return v.length < 2 ? 'Please enter your full name.' : null
    case 'email':
      return !EMAIL_RE.test(v) ? 'Please enter a valid email address.' : null
    case 'phone':
      return v.replace(/\D/g, '').length < 7
        ? 'Please enter a valid phone number.'
        : null
    case 'message':
      return v.length < 10 ? 'Please tell us a little about your book.' : null
  }
}

export default function LeadPopup() {
  const [open, setOpen] = useState(false)
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const uid = useId()
  const router = useRouter()
  const dialogRef = useRef<HTMLDivElement>(null)

  const markSeen = useCallback(() => {
    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      /* private mode / storage blocked — non-fatal */
    }
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    markSeen()
  }, [markSeen])

  // Open once the visitor has scrolled past the trigger threshold.
  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === '1'
    } catch {
      /* ignore */
    }
    if (seen) return

    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - window.innerHeight
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 1
      if (ratio >= SCROLL_TRIGGER) {
        setOpen(true)
        markSeen()
        window.removeEventListener('scroll', onScroll)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // in case the page is already scrolled (e.g. hash navigation)
    return () => window.removeEventListener('scroll', onScroll)
  }, [markSeen])

  // On success, hand the visitor to the dedicated thank-you page.
  useEffect(() => {
    if (state?.success) {
      markSeen()
      router.push('/thank-you')
    }
  }, [state?.success, router, markSeen])

  // Lock body scroll and support Escape while open; focus the first field.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    const first = dialogRef.current?.querySelector<HTMLInputElement>('input[name="name"]')
    first?.focus()
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  if (!open) return null

  const setError = (name: FieldName, value: string) =>
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) ?? undefined }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const next: Partial<Record<FieldName, string>> = {}
    ;(['name', 'email', 'phone', 'message'] as FieldName[]).forEach((n) => {
      const el = form.elements.namedItem(n) as
        | HTMLInputElement
        | HTMLTextAreaElement
        | null
      const err = validate(n, el?.value ?? '')
      if (err) next[n] = err
    })
    if (Object.keys(next).length) {
      e.preventDefault()
      setErrors(next)
      const firstBad = form.elements.namedItem(
        Object.keys(next)[0],
      ) as HTMLElement | null
      firstBad?.focus()
    }
  }

  const fieldId = (n: string) => `${uid}-${n}`
  const errId = (n: string) => `${uid}-${n}-err`

  return (
    <div
      className="lp-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close()
      }}
    >
      <div
        className="lp-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${uid}-title`}
        ref={dialogRef}
      >
        <span className="lp-orb lp-orb-1" aria-hidden="true" />
        <span className="lp-orb lp-orb-2" aria-hidden="true" />

        <button
          type="button"
          className="lp-close"
          onClick={close}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="lp-inner">
          <h2 className="lp-title" id={`${uid}-title`}>
            Let&rsquo;s talk about your book
          </h2>
          <p className="lp-sub">
            Tell us a little about your project and we&rsquo;ll reply within 24 hours.
          </p>

          <form action={formAction} onSubmit={handleSubmit} noValidate>
            {/* Tags the lead source in the notification email. */}
            <input type="hidden" name="service" value="Homepage popup enquiry" />

            <div className="lp-field">
              <input
                id={fieldId('name')}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                disabled={isPending}
                aria-label="Full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? errId('name') : undefined}
                onBlur={(e) => setError('name', e.target.value)}
              />
              {errors.name && (
                <span className="lp-error" id={errId('name')} role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="lp-field">
              <input
                id={fieldId('email')}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                disabled={isPending}
                aria-label="Email address"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? errId('email') : undefined}
                onBlur={(e) => setError('email', e.target.value)}
              />
              {errors.email && (
                <span className="lp-error" id={errId('email')} role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="lp-field">
              <input
                id={fieldId('phone')}
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone number"
                disabled={isPending}
                aria-label="Phone number"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? errId('phone') : undefined}
                onBlur={(e) => setError('phone', e.target.value)}
              />
              {errors.phone && (
                <span className="lp-error" id={errId('phone')} role="alert">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="lp-field">
              <textarea
                id={fieldId('message')}
                name="message"
                rows={3}
                placeholder="About your book"
                disabled={isPending}
                aria-label="About your book"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? errId('message') : undefined}
                onBlur={(e) => setError('message', e.target.value)}
              />
              {errors.message && (
                <span className="lp-error" id={errId('message')} role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            {state && !state.success && (
              <p className="lp-form-error" role="alert">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-yellow lp-submit"
              disabled={isPending}
            >
              <span className="span-1">{isPending ? 'Sending…' : 'Get My Quote'}</span>
              <span className="span-2" aria-hidden="true">
                <Send size={18} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
