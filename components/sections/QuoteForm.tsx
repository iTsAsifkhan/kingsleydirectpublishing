'use client'

import { useActionState, useId, useState } from 'react'
import { Check, ChevronDown, Send } from 'lucide-react'
import { submitContactForm } from '@/app/actions'
import { SERVICE_OPTIONS } from '@/lib/nav'

type Variant = 'cta' | 'page'

interface QuoteFormProps {
  variant?: Variant
}

type FieldName = 'name' | 'phone' | 'email' | 'message'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(name: FieldName, value: string): string | null {
  const v = value.trim()
  switch (name) {
    case 'name':
      return v.length < 2 ? 'Please enter your full name.' : null
    case 'phone':
      return v.replace(/\D/g, '').length < 7 ? 'Please enter a valid phone number.' : null
    case 'email':
      return !EMAIL_RE.test(v) ? 'Please enter a valid email address.' : null
    case 'message':
      return v.length < 10 ? 'Please add a few details about your project.' : null
  }
}

export default function QuoteForm({ variant = 'page' }: QuoteFormProps) {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const uid = useId()

  const setError = (name: FieldName, value: string) =>
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) ?? undefined }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const next: Partial<Record<FieldName, string>> = {}
    ;(['name', 'phone', 'email', 'message'] as FieldName[]).forEach((n) => {
      const el = form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | null
      const err = validate(n, el?.value ?? '')
      if (err) next[n] = err
    })
    if (Object.keys(next).length) {
      e.preventDefault()
      setErrors(next)
      const first = form.elements.namedItem(Object.keys(next)[0]) as HTMLElement | null
      first?.focus()
    }
  }

  const fieldId = (n: string) => `${uid}-${n}`
  const errId = (n: string) => `${uid}-${n}-err`

  if (state?.success) {
    return (
      <div className={`qf qf-${variant} qf-success`} role="status" aria-live="polite">
        <span className="qf-success-check" aria-hidden="true">
          <Check size={28} />
        </span>
        <h3 className="qf-success-title">Message sent</h3>
        <p className="qf-success-text">{state.message}</p>
      </div>
    )
  }

  return (
    <form className={`qf qf-${variant}`} action={formAction} onSubmit={handleSubmit} noValidate>
      <div className="qf-row">
        <div className="qf-field">
          <label htmlFor={fieldId('name')}>
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Author"
            disabled={isPending}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? errId('name') : undefined}
            onBlur={(e) => setError('name', e.target.value)}
          />
          {errors.name && (
            <span className="qf-error" id={errId('name')} role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="qf-field">
          <label htmlFor={fieldId('phone')}>
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+44 …"
            disabled={isPending}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? errId('phone') : undefined}
            onBlur={(e) => setError('phone', e.target.value)}
          />
          {errors.phone && (
            <span className="qf-error" id={errId('phone')} role="alert">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="qf-row">
        <div className="qf-field">
          <label htmlFor={fieldId('email')}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            disabled={isPending}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? errId('email') : undefined}
            onBlur={(e) => setError('email', e.target.value)}
          />
          {errors.email && (
            <span className="qf-error" id={errId('email')} role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="qf-field">
          <label htmlFor={fieldId('service')}>Service interested in</label>
          <div className="qf-select-wrap">
            <select id={fieldId('service')} name="service" defaultValue="" disabled={isPending}>
              <option value="" disabled>
                Choose a service
              </option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown size={18} className="qf-select-caret" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="qf-field">
        <label htmlFor={fieldId('message')}>
          Project details <span aria-hidden="true">*</span>
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={variant === 'cta' ? 3 : 5}
          placeholder="Tell us about your manuscript, service needs, or publishing goals."
          disabled={isPending}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? errId('message') : undefined}
          onBlur={(e) => setError('message', e.target.value)}
        />
        {errors.message && (
          <span className="qf-error" id={errId('message')} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      {state && !state.success && (
        <p className="qf-form-error" role="alert">
          {state.message}
        </p>
      )}

      <button type="submit" className="btn btn-yellow qf-submit" disabled={isPending}>
        <span className="span-1">{isPending ? 'Sending…' : 'Send Message'}</span>
        <span className="span-2" aria-hidden="true">
          <Send size={18} />
        </span>
      </button>
    </form>
  )
}
