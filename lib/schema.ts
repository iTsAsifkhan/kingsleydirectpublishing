/**
 * JSON-LD schema helpers for SEO and structured data.
 */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kimberley Direct Publishing',
    url: 'https://kimberleydirectpublishing.com',
    logo: 'https://kimberleydirectpublishing.com/logo.png',
    description: 'Professional book publishing services helping authors bring their manuscripts to life.',
    // TODO: fill in Kimberley Direct Publishing's real UK registered address.
    address: [
      {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
      },
    ],
    sameAs: [
      'https://facebook.com/',
      'https://instagram.com/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      // Only advertise a phone once a real, dialable number is configured.
      ...(process.env.NEXT_PUBLIC_CONTACT_PHONE && {
        telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
      }),
      email: 'info@kimberleydirectpublishing.com',
      contactType: 'Customer Service',
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
