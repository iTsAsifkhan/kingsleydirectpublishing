'use client'

import type { CSSProperties } from 'react'

interface BookCover {
  id: string
  title: string
  category: string
}

const books: BookCover[] = [
  { id: 'memoir', title: 'Memoir', category: 'Author Story' },
  { id: 'fiction', title: 'Fiction', category: 'Novel Draft' },
  { id: 'business', title: 'Business', category: 'Expert Guide' },
  { id: 'wellness', title: 'Wellness', category: 'Lifestyle' },
  { id: 'children', title: 'Kids', category: 'Picture Book' },
  { id: 'history', title: 'History', category: 'Nonfiction' },
  { id: 'poetry', title: 'Poetry', category: 'Collection' },
  { id: 'cookbook', title: 'Cookbook', category: 'Recipe Book' },
]

function CoverCard({ book, index }: { book: BookCover; index: number }) {
  return (
    <li className={`book-cover book-cover-${index % 4}`}>
      <span className="book-cover-kicker">{book.category}</span>
      <strong>{book.title}</strong>
      <span className="book-cover-line" aria-hidden="true" />
      <span className="book-cover-line short" aria-hidden="true" />
    </li>
  )
}

export default function BookCoverMarquee() {
  const firstRow = [...books, ...books]
  const secondRow = [...books.slice(3), ...books.slice(0, 3), ...books]

  return (
    <div className="book-marquee" aria-label="Sample book genres">
      <ul
        className="book-marquee-track"
        style={{ '--marquee-duration': '32s' } as CSSProperties}
      >
        {firstRow.map((book, index) => (
          <CoverCard key={`row-1-${book.id}-${index}`} book={book} index={index} />
        ))}
      </ul>
      <ul
        className="book-marquee-track reverse"
        style={{ '--marquee-duration': '24s' } as CSSProperties}
      >
        {secondRow.map((book, index) => (
          <CoverCard key={`row-2-${book.id}-${index}`} book={book} index={index + 2} />
        ))}
      </ul>
    </div>
  )
}
