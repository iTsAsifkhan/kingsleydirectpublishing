import { Container, FadeIn } from '@/components/ui'
import { stats } from '@/lib/content'

export default function StatsStrip() {
  return (
    <div className="index-wrap-counter">
      <Container>
        <div className="counter-wrap">
          <FadeIn className="counter-grid">
            {stats.map((stat) => (
              <div className="counter-item" key={stat.id}>
                <h5 className="mb-0 font-700 text-white">
                  {stat.value}
                  <span className="clr-1">{stat.suffix}</span>
                </h5>
                <p className="mb-0">{stat.label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}
