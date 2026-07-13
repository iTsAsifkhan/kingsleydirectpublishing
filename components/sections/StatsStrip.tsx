import { Container } from '@/components/ui'
import { stats } from '@/lib/content'

interface StatsStripProps {
  className?: string
}

export default function StatsStrip({ className = '' }: StatsStripProps) {
  return (
    <div className={['index-wrap-counter', className].filter(Boolean).join(' ')}>
      <Container>
        <div className="counter-wrap">
          <div className="counter-grid">
            {stats.map((stat) => (
              <div className="counter-item" key={stat.id}>
                <p className="counter-value mb-0 font-700 text-white">
                  {stat.value}
                  <span className="clr-1">{stat.suffix}</span>
                </p>
                <p className="mb-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
