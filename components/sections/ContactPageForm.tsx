'use client'

import { useActionState } from 'react'
import { Send } from 'lucide-react'
import { submitContactForm } from '@/app/actions'

export default function ContactPageForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <form className="contact-page-form" action={formAction}>
      <div className="contact-page-form-grid">
        <div className="contact-page-field">
          <label htmlFor="contact-name">Full name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="full name"
            required
            disabled={isPending}
          />
        </div>

        <div className="contact-page-field">
          <label htmlFor="contact-phone">Phone number</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="phone number"
            required
            disabled={isPending}
          />
        </div>
      </div>

      <div className="contact-page-field">
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="email address"
          required
          disabled={isPending}
        />
      </div>

      <div className="contact-page-field">
        <label htmlFor="contact-message">Project details</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell us about your manuscript, service needs, or publishing goals"
          rows={5}
          required
          disabled={isPending}
        />
      </div>

      {state?.success && (
        <p className="contact-page-feedback contact-page-success" role="status">
          {state.message}
        </p>
      )}
      {state && !state.success && (
        <p className="contact-page-feedback contact-page-error" role="alert">
          {state.message}
        </p>
      )}

      <button type="submit" className="contact-page-submit" disabled={isPending}>
        <span>{isPending ? 'Sending' : 'Send Message'}</span>
        <span className="contact-page-submit-icon">
          <Send size={18} aria-hidden="true" />
        </span>
      </button>
    </form>
  )
}
