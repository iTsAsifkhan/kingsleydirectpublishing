/**
 * JSON-LD schema helpers for SEO and structured data.
 */

import {
  CONTACT_PHONE,
  CONTACT_EMAIL,
  OFFICE_ADDRESS_PARTS,
  COMPANY_LEGAL_NAME,
} from './contact'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    // ProfessionalService is a subtype of Organization/LocalBusiness that
    // supports priceRange and geo, improving UK local-pack relevance.
    '@type': 'ProfessionalService',
    name: 'Kimberley Direct Publishing',
    legalName: COMPANY_LEGAL_NAME,
    url: 'https://kimberleydirectpublishing.com',
    logo: 'https://kimberleydirectpublishing.com/images/kimberley-logo.png',
    image: 'https://kimberleydirectpublishing.com/og-image-v2.png',
    description: 'Professional book publishing services helping authors bring their manuscripts to life.',
    priceRange: '££',
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

/**
 * Review structured data for a single named, written client testimonial.
 * Only ever call this with a review we actually hold on file.
 */
export function reviewSchema(review: {
  author: string
  body: string
  rating: number
  datePublished: string
  headline?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    ...(review.headline && { name: review.headline }),
    reviewBody: review.body,
    datePublished: review.datePublished,
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      '@type': 'ProfessionalService',
      name: 'Kimberley Direct Publishing',
      url: 'https://kimberleydirectpublishing.com',
    },
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
