'use client'

import { useState } from 'react'
import type { FAQ } from '@/lib/content'

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)
  const midpoint = Math.ceil(faqs.length / 2)
  const columns = [faqs.slice(0, midpoint), faqs.slice(midpoint)]

  return (
    <ul className="accordion-list">
      {columns.map((column, columnIndex) => (
        <li className="accordian-inner" key={`faq-column-${columnIndex}`}>
          <ul>
            {column.map((faq) => {
              const isOpen = openId === faq.id
              const answerId = `faq-answer-${faq.id}`
              const questionId = `faq-question-${faq.id}`

              return (
                <li className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.id}>
                  <h3 className="faq-question" id={questionId}>
                    <button
                      type="button"
                      className="faq-trigger"
                      aria-controls={answerId}
                      aria-expanded={isOpen}
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    className="faq-panel"
                    id={answerId}
                    role="region"
                    aria-hidden={!isOpen}
                    aria-labelledby={questionId}
                  >
                    <div className="faq-panel-inner answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </li>
      ))}
    </ul>
  )
}
