'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'done'>('idle')
  const [email, setEmail] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: wire to a real email provider (Resend/Mailchimp) before launch.
    setStatus('done')
  }

  if (status === 'done') {
    return (
      <p className="footer-news-done" role="status">
        <Check size={16} aria-hidden="true" /> You&apos;re subscribed — thank you!
      </p>
    )
  }

  return (
    <form className="footer-news" onSubmit={onSubmit}>
      <label htmlFor="footer-news-email" className="footer-news-label">
        Get publishing tips in your inbox
      </label>
      <div className="footer-news-row">
        <input
          id="footer-news-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          autoComplete="email"
        />
        <button type="submit" aria-label="Subscribe to newsletter">
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
