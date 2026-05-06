/**
 * JSON-LD schema helpers for SEO and structured data.
 */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Book Publishing Partner',
    url: 'https://bookpublishingpartner.com',
    logo: 'https://bookpublishingpartner.com/logo.png',
    description: 'Top book publishing partner to bring your manuscript to life.',
    sameAs: [
      'https://www.facebook.com/bookpublishingpartner',
      'https://www.instagram.com/bookpublishingpartner',
      'https://www.linkedin.com/company/bookpublishingpartner',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-PUBLISH',
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
      name: 'Book Publishing Partner',
      url: 'https://bookpublishingpartner.com',
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
