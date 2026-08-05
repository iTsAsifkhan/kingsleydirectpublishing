/**
 * JSON-LD schema helpers for SEO and structured data.
 */

import { CONTACT_PHONE, CONTACT_EMAIL, OFFICE_ADDRESS_PARTS } from './contact'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kimberley Direct Publishing',
    url: 'https://kimberleydirectpublishing.com',
    logo: 'https://kimberleydirectpublishing.com/images/kimberley-logo.png',
    image: 'https://kimberleydirectpublishing.com/og-image.png',
    description: 'Professional book publishing services helping authors bring their manuscripts to life.',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    telephone: CONTACT_PHONE,
    address: {
      '@type': 'PostalAddress',
      ...OFFICE_ADDRESS_PARTS,
    },
    // Confirmed Kimberley Direct Publishing social profiles (env-overridable).
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK_URL ??
        'https://www.facebook.com/share/19Fvf9oHe5/?mibextid=wwXIfr',
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
        'https://www.instagram.com/kimberleydirectpublishing',
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      contactType: 'Customer Service',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
  }
}

export function serviceSchema(service: {
  name: string
  description: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    ...(service.image && { image: service.image }),
    provider: {
      '@type': 'Organization',
      name: 'Kimberley Direct Publishing',
      url: 'https://kimberleydirectpublishing.com',
    },
  }
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
