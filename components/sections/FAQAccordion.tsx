'use client'

import { useState } from 'react'
import type { FAQ } from '@/lib/content'

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)

  return (
    <div className="faq-stack">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id
        const answerId = `faq-answer-${faq.id}`
        const questionId = `faq-question-${faq.id}`

        return (
          <div className={`faq-row${isOpen ? ' is-open' : ''}`} key={faq.id}>
            <h3 className="faq-row-q" id={questionId}>
              <button
                type="button"
                className="faq-row-trigger"
                aria-controls={answerId}
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
              >
                <span>{faq.question}</span>
                <span className="faq-row-icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              className="faq-row-panel"
              id={answerId}
              role="region"
              aria-hidden={!isOpen}
              aria-labelledby={questionId}
            >
              <div className="faq-row-panel-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
