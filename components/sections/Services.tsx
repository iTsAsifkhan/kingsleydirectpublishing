import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import { services } from '@/lib/content'

export default function Services() {
  return (
    <section className="home-services position-relative">
      <Container className="relative z-10">
        <div className="home-services-layout">
          <div className="home-services-intro">
            <span className="span-tag-border">What We Do</span>
            <h2 className="home-services-title fw-700">
              Everything Your Book Needs,{' '}
              <span className="clr-1">Under One Roof</span>
            </h2>
            <p>
              From the first blank page to a book selling worldwide, every stage is
              handled by specialists who do this for a living, editors, designers,
              marketers, and publishers working as one team.
            </p>
            <Button variant="yellow" href="/contact" icon={ArrowRight}>
              Start Your Book
            </Button>
          </div>

          <ul className="home-services-list">
            {services.map((service, i) => (
              <li className="home-service-row" key={service.id}>
                <span className="home-service-index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="home-service-body">
                  <h3 className="home-service-name">
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p>{service.shortDescription}</p>
                  <div className="home-service-tags">
                    {service.features.slice(0, 3).map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="home-service-arrow"
                  aria-label={`Explore ${service.title}`}
                >
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
