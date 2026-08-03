import {
  BadgeDollarSign,
  FileSearch,
  LayoutTemplate,
  Megaphone,
  Printer,
  Wand2,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/ui'
import { processSteps } from '@/lib/content'

const ICONS: Record<string, LucideIcon> = {
  FileSearch,
  Wand2,
  LayoutTemplate,
  Printer,
  Megaphone,
  BadgeDollarSign,
}

export default function Process() {
  return (
    <section className="home-process position-relative" aria-labelledby="process-heading">
      <Container className="relative z-10">
        <div className="home-process-head">
          <span className="span-tag-border">How It Works</span>
          <h2 id="process-heading" className="home-process-title fw-700 pt-3">
            From Manuscript to Marketplace,{' '}
            <span className="clr-1">Step by Step</span>
          </h2>
          <p>
            A clear, predictable path from your first draft to a finished book on
            sale worldwide, with a specialist owning every stage so nothing slips
            through the cracks.
          </p>
        </div>

        <ol className="timeline">
          {processSteps.map((step) => {
            const Icon = ICONS[step.icon] ?? FileSearch
            return (
              <li className="timeline-item" key={step.id}>
                <div className="timeline-marker" aria-hidden="true">
                  {String(step.number).padStart(2, '0')}
                </div>
                <div className="timeline-card">
                  <span className="timeline-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="timeline-title">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
