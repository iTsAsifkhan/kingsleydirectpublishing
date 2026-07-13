import { ArrowRight } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import FAQAccordion from '@/components/sections/FAQAccordion'
import { faqs } from '@/lib/content'
import { faqSchema } from '@/lib/schema'

export default function FAQ() {
  const schema = faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })))

  return (
    <section className="index-wrap-8 relative">
      <span className="index-wrap-8-shade" aria-hidden="true" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Container className="relative z-10">
        <div className="index-wrap-8-header">
          <div>
            <span className="span-tag-border">FAQ</span>
            <h2 className="mb-0 fw-700 pt-3">Frequently Asked Questions</h2>
          </div>
          <div className="hidden lg:flex items-start pt-3">
            <Button variant="blue" href="/contact" icon={ArrowRight}>
              Get A Quote
            </Button>
          </div>
        </div>

        <FAQAccordion faqs={faqs} />
      </Container>
    </section>
  )
}
