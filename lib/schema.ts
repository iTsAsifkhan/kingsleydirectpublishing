/**
 * JSON-LD schema helpers for SEO and structured data.
 */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Patrick White Publishing',
    url: 'https://patrickwhitepublishing.com',
    logo: 'https://patrickwhitepublishing.com/logo.png',
    description: 'Professional book publishing services helping authors bring their manuscripts to life.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2nd Floor, 118 Liverpool Street',
      addressLocality: 'Hobart',
      addressRegion: 'TAS',
      postalCode: '7000',
      addressCountry: 'AU',
    },
    sameAs: [
      'https://www.facebook.com/p/Patrick-White-Publishing-61581158636974/',
      'https://www.instagram.com/patrickwhitepublishinghouse/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+61485976735',
      email: 'info@patrickwhitepublishing.com',
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
      name: 'Patrick White Publishing',
      url: 'https://patrickwhitepublishing.com',
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
