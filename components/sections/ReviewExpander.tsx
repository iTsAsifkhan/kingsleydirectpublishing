'use client'

import { useId, useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * Collapses the tail of a long review behind a "Read full review" toggle.
 * The hidden paragraphs stay in the server-rendered HTML (just `hidden`), so
 * the full text is still crawlable.
 */
export default function ReviewExpander({
  children,
  label,
}: {
  children: ReactNode
  label: string
}) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <>
      <div id={id} hidden={!open}>
        {children}
      </div>
      <button
        type="button"
        className={`featured-review-toggle${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Show less' : label}
        <ChevronDown size={16} aria-hidden="true" />
      </button>
    </>
  )
}
