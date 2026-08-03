import { BadgeCheck, Globe, ShieldCheck, Star, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui'
import { stats } from '@/lib/content'

interface StatsStripProps {
  className?: string
}

const ICONS: Record<string, LucideIcon> = {
  BadgeCheck,
  Star,
  Globe,
  ShieldCheck,
}

export default function StatsStrip({ className = '' }: StatsStripProps) {
  return (
    <div className={['index-wrap-counter', className].filter(Boolean).join(' ')}>
      <Container>
        <div className="counter-wrap">
          <div className="counter-grid">
            {stats.map((stat) => {
              const Icon = ICONS[stat.icon] ?? BadgeCheck
              return (
                <div className="counter-item" key={stat.id}>
                  <span className="counter-icon" aria-hidden="true">
                    <Icon size={28} strokeWidth={2} />
                  </span>
                  <p className="mb-0">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}
