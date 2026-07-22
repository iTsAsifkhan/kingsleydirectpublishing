'use client'

import { useActionState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { subscribeNewsletter } from '@/app/actions'

export default function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, null)

  if (state?.success) {
    return (
      <p className="footer-news-done" role="status">
        <Check size={16} aria-hidden="true" /> {state.message}
      </p>
    )
  }

  return (
    <form className="footer-news" action={formAction}>
      <label htmlFor="footer-news-email" className="footer-news-label">
        Get publishing tips in your inbox
      </label>
      <div className="footer-news-row">
        <input
          id="footer-news-email"
          name="email"
          type="email"
          required
          placeholder="Your email address"
          autoComplete="email"
          disabled={isPending}
          aria-invalid={state && !state.success ? true : undefined}
          aria-describedby={state && !state.success ? 'footer-news-err' : undefined}
        />
        <button type="submit" aria-label="Subscribe to newsletter" disabled={isPending}>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
      {state && !state.success && (
        <span id="footer-news-err" className="footer-news-error" role="alert">
          {state.message}
        </span>
      )}
    </form>
  )
}
