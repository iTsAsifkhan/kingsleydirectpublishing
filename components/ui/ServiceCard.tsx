import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Service } from '@/lib/content'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Dynamically get the icon component
  const Icon = LucideIcons[
    service.icon as keyof typeof LucideIcons
  ] as LucideIcon | undefined

  return (
    <article className="services-item">
      <div className="services-item-icon">
        {Icon ? (
          <Icon aria-hidden="true" className="h-10 w-10 text-white" />
        ) : null}
      </div>

      <div className="services-item-content">
        <h5 className="mb-0 fw-600">{service.title}</h5>
        <p className="mb-0 line-clamp-3 clr-3">{service.shortDescription}</p>
      </div>

      <Link
        href={`/services/${service.slug}`}
        className="services-item-cta inline-flex items-center gap-2 fw-600"
      >
        Learn More
        <span className="sr-only"> about {service.title}</span>
        <ArrowRight aria-hidden="true" className="h-5 w-5" />
      </Link>
    </article>
  )
}
