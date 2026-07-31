'use server'

export interface ContactFormState {
  success: boolean
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Where leads are delivered. Override in the environment for staging/prod.
const LEAD_INBOX = process.env.LEAD_INBOX ?? 'info@kimberleydirectpublishing.com'
// Resend requires a verified sender domain. `onboarding@resend.dev` works for
// initial testing; switch to a verified brand address once the domain is set up.
const LEAD_FROM =
  process.env.LEAD_FROM ?? 'Kimberley Direct Publishing <onboarding@resend.dev>'

const GENERIC_ERROR =
  'Sorry, something went wrong sending your message. Please try again, or email us directly.'

/** Escape user-supplied text before interpolating into the notification HTML. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Deliver an email via the Resend REST API. Returns `false` (never throws) when
 * the key is missing or the request fails, so callers can surface an honest
 * error instead of a false "sent" confirmation.
 */
async function sendEmail(opts: {
  subject: string
  html: string
  replyTo?: string
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error(
      '[lead] RESEND_API_KEY is not set, lead not delivered:',
      opts.subject,
    )
    return false
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: LEAD_FROM,
        to: [LEAD_INBOX],
        subject: opts.subject,
        html: opts.html,
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      }),
    })

    if (!res.ok) {
      console.error('[lead] Resend responded', res.status, await res.text())
      return false
    }
    return true
  } catch (err) {
    console.error('[lead] Resend request failed:', err)
    return false
  }
}

export async function submitContactForm(
  _prev: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get('name') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()
  const service = (formData.get('service') as string)?.trim() || 'Not specified'

  if (!name || !phone || !email || !message) {
    return { success: false, message: 'Please complete all required fields.' }
  }
  if (!EMAIL_RE.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  const html = `
    <h2>New quote request</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">
      <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${esc(phone)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
      <tr><td><strong>Service</strong></td><td>${esc(service)}</td></tr>
      <tr><td valign="top"><strong>Message</strong></td><td>${esc(message).replace(/\n/g, '<br>')}</td></tr>
    </table>
  `

  const delivered = await sendEmail({
    subject: `New quote request, ${name}`,
    html,
    replyTo: email,
  })

  if (!delivered) {
    return { success: false, message: GENERIC_ERROR }
  }

  return {
    success: true,
    message: "Thank you! Your details are on their way, we'll reply within 24 hours.",
  }
}

export interface NewsletterState {
  success: boolean
  message: string
}

export async function subscribeNewsletter(
  _prev: NewsletterState | null,
  formData: FormData,
): Promise<NewsletterState> {
  const email = (formData.get('email') as string)?.trim()

  if (!email || !EMAIL_RE.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  const delivered = await sendEmail({
    subject: `Newsletter signup, ${email}`,
    html: `<p>New newsletter subscriber: <strong>${esc(email)}</strong></p>`,
    replyTo: email,
  })

  if (!delivered) {
    return {
      success: false,
      message: 'Sorry, could not subscribe you right now. Please try again.',
    }
  }

  return { success: true, message: "You're subscribed, thank you!" }
}
