'use server'

export interface ContactFormState {
  success: boolean
  message: string
}

export async function submitContactForm(
  _prev: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get('name') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !phone || !email || !message) {
    return { success: false, message: 'All fields are required.' }
  }

  // TODO: integrate with Resend / SendGrid before going live
  console.log('Contact form submission:', { name, phone, email, message })

  return { success: true, message: "Thank you! We'll be in touch soon." }
}
