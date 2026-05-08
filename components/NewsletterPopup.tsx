'use client'

import { useState, useEffect } from 'react'
import { X, Mail } from 'lucide-react'

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('nl-dismissed')) return
    const t = setTimeout(() => setVisible(true), 6000)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    sessionStorage.setItem('nl-dismissed', '1')
    setVisible(false)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(dismiss, 2000)
  }

  if (!visible) return null

  return (
    <div
      className="nl-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="nl-title"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss() }}
    >
      <div className="nl-card">
        <button
          className="nl-close"
          type="button"
          aria-label="Close newsletter popup"
          onClick={dismiss}
        >
          <X size={18} aria-hidden="true" />
        </button>

        <span className="nl-icon" aria-hidden="true">
          <Mail size={32} />
        </span>

        {submitted ? (
          <div className="nl-success">
            <h3 id="nl-title" className="fw-700">You&apos;re in!</h3>
            <p className="mb-0">Thanks for subscribing. Watch your inbox.</p>
          </div>
        ) : (
          <>
            <h3 id="nl-title" className="fw-700 mb-0">Get Publishing Tips</h3>
            <p className="nl-sub">
              Join 5,000+ authors getting expert advice on writing, publishing,
              and marketing — delivered free.
            </p>
            <form className="nl-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="nl-email">Email address</label>
              <input
                id="nl-email"
                name="email"
                type="email"
                placeholder="Your email address"
                required
                className="nl-input"
              />
              <button type="submit" className="nl-submit btn btn-yellow">
                <span className="span-1">Subscribe</span>
                <span className="span-2">→</span>
              </button>
            </form>
            <p className="nl-fine">No spam, ever. Unsubscribe anytime.</p>
          </>
        )}
      </div>
    </div>
  )
}
