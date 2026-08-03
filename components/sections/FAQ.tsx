import { ArrowRight } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import FAQAccordion from '@/components/sections/FAQAccordion'
import { faqs } from '@/lib/content'
import { faqSchema } from '@/lib/schema'

export default function FAQ() {
  const schema = faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })))

  return (
    <section className="home-faq relative" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Container className="relative z-10">
        <div className="home-faq-head">
          <span className="span-tag-border">Questions &amp; Answers</span>
          <h2 id="faq-heading" className="home-faq-title fw-700 pt-3">
            The Questions Authors <span className="clr-1">Ask Us Most</span>
          </h2>
          <p>
            Everything you might be wondering before we begin. Still stuck on
            something? We&apos;re only a message away.
          </p>
        </div>

        <FAQAccordion faqs={faqs} />

        <div className="home-faq-more">
          <span>Can&apos;t find your answer here?</span>
          <Button variant="yellow" href="/contact" icon={ArrowRight}>
            Talk to a Publisher
          </Button>
        </div>
      </Container>
    </section>
  )
}
