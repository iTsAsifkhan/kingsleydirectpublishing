import { ArrowRight } from 'lucide-react'
import { Button, Container, FadeIn, ServiceCard } from '@/components/ui'
import { services } from '@/lib/content'

export default function Services() {
  return (
    <section className="index-wrap-3 position-relative">
      <span className="index-wrap-3-shade-1" aria-hidden="true" />
      <span className="index-wrap-3-shade-2" aria-hidden="true" />
      <span className="index-wrap-3-star-1" aria-hidden="true" />
      <span className="index-wrap-3-star-2" aria-hidden="true" />
      <span className="index-wrap-3-star-3" aria-hidden="true" />

      <Container className="relative z-10">
        <FadeIn className="index-wrap-3-heading">
          <div>
            <span className="span-tag-border">Services We Provide</span>
            <h2 className="mb-0 fw-700 pt-3">
              Our Book <span className="clr-1">Publishing Services</span> And
              Expertise
            </h2>
          </div>
          <p className="mb-0">
            At Book Publishing Partner, we help aspiring authors self-publish
            effortlessly. With professional editing, formatting, cover design,
            and global distribution, we make your publishing journey simple and
            successful.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="index-wrap-3-padding-top services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </FadeIn>

        <FadeIn delay={0.3} className="pt-5 text-center">
          <Button variant="yellow" href="/contact" icon={ArrowRight}>
            Get A Quote
          </Button>
        </FadeIn>
      </Container>
    </section>
  )
}
