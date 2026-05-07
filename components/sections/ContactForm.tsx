'use client'

import { useActionState } from 'react'
import { Send } from 'lucide-react'
import { Container } from '@/components/ui'
import { submitContactForm } from '@/app/actions'

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <section className="index-wrap-9">
      <Container>
        <div className="footer-cta">
          <form className="footer-cta-form" action={formAction}>
            <div className="footer-cta-fields">
              <h2 className="fw-700">Let&apos;s Connect</h2>

              <div className="footer-cta-row">
                <div className="footer-cta-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="full name"
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="footer-cta-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="phone number"
                    required
                    disabled={isPending}
                  />
                </div>
              </div>

              <div className="footer-cta-group footer-cta-custom-margin">
                <input
                  type="email"
                  name="email"
                  placeholder="email address"
                  required
                  disabled={isPending}
                />
              </div>

              <div className="footer-cta-group footer-cta-custom-margin">
                <input
                  type="text"
                  name="message"
                  placeholder="type message"
                  required
                  disabled={isPending}
                />
              </div>

              {state?.success && (
                <p className="footer-cta-feedback footer-cta-success" role="status">
                  {state.message}
                </p>
              )}
              {state && !state.success && (
                <p className="footer-cta-feedback footer-cta-error" role="alert">
                  {state.message}
                </p>
              )}
            </div>

            <div className="footer-cta-submit-col">
              <button
                type="submit"
                className="footer-cta-submit-btn"
                disabled={isPending}
                aria-label="Send message"
              >
                <Send size={42} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}
