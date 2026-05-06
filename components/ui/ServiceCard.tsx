import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Service } from '@/lib/content'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Dynamically get the icon component
  const Icon = LucideIcons[
    service.icon as keyof typeof LucideIcons
  ] as LucideIcon | undefined

  return (
    <div className="group flex flex-col items-start rounded-card border border-gray-200 bg-white p-8 shadow-card transition-all duration-300 hover:shadow-card-hover">
      {/* Icon circle */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-navy transition-all duration-300 group-hover:bg-brand-yellow group-hover:shadow-glow-md">
        {Icon ? (
          <Icon className="h-10 w-10 text-white transition-colors duration-300 group-hover:text-brand-navy" />
        ) : null}
      </div>

      {/* Title */}
      <h5 className="mb-4 text-xl font-600 text-brand-navy">{service.title}</h5>

      {/* Description */}
      <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-brand-gray2">{service.shortDescription}</p>

      {/* Learn More Link */}
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 text-sm font-500 text-brand-navy transition-colors duration-300 hover:text-brand-yellow"
      >
        Learn More
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          -&gt;
        </span>
      </Link>
    </div>
  )
}
