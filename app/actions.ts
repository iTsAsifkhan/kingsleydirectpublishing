'use server'

export interface ContactFormState {
  success: boolean
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

  // TODO: integrate with Resend / SendGrid before going live
  console.log('Contact form submission:', { name, phone, email, service, message })

  return {
    success: true,
    message: "Thank you! Your details are on their way — we'll reply within 24 hours.",
  }
}
