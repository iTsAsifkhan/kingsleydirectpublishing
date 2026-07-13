'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'

interface BookCover {
  id: string
  title: string
  category: string
  image: string
  variant?: 'flat' | 'mockup'
}

const mockupBooks: BookCover[] = Array.from({ length: 12 }, (_, index) => {
  const coverNumber = index + 1

  return {
    id: `book-cover-mockup-${coverNumber}`,
    title: '3D Mockup',
    category: 'Book Cover',
    image: `/images/3d-book-cover (${coverNumber}).webp`,
    variant: 'mockup',
  }
})

const portfolioBooks: BookCover[] = Array.from({ length: 34 }, (_, index) => {
  const coverNumber = index + 1

  return {
    id: `showcase-${coverNumber}`,
    title: 'Portfolio',
    category: 'Book Cover',
    image: `/images/showcase-cover (${coverNumber}).webp`,
  }
})

const books: BookCover[] = [...mockupBooks, ...portfolioBooks]

function CoverCard({ book, index }: { book: BookCover; index: number }) {
  return (
    <li
      className={`book-cover book-cover-${index % 4}${
        book.variant === 'mockup' ? ' book-cover-3d' : ''
      }`}
    >
      <Image
        src={book.image}
        alt={`${book.title} ${book.category}`}
        fill
        quality={book.variant === 'mockup' ? 82 : undefined}
        sizes="(max-width: 767px) 150px, (max-width: 1199px) 190px, 235px"
        className="book-cover-image"
      />
    </li>
  )
}

export default function BookCoverMarquee() {
  const firstRow = books
  const secondRow = [...books.slice(6), ...books.slice(0, 6)]

  return (
    <div className="book-marquee" aria-label="Sample book genres">
      <div className="book-marquee-row">
        <div
          className="book-marquee-track"
          style={{ '--marquee-duration': '120s' } as CSSProperties}
        >
          {[0, 1].map((setIndex) => (
            <ul
              key={`row-1-set-${setIndex}`}
              className="book-marquee-group"
              aria-hidden={setIndex === 1}
            >
              {firstRow.map((book, index) => (
                <CoverCard
                  key={`row-1-${setIndex}-${book.id}`}
                  book={book}
                  index={index}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="book-marquee-row">
        <div
          className="book-marquee-track reverse"
          style={{ '--marquee-duration': '96s' } as CSSProperties}
        >
          {[0, 1].map((setIndex) => (
            <ul
              key={`row-2-set-${setIndex}`}
              className="book-marquee-group"
              aria-hidden={setIndex === 1}
            >
              {secondRow.map((book, index) => (
                <CoverCard
                  key={`row-2-${setIndex}-${book.id}`}
                  book={book}
                  index={index + 2}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
