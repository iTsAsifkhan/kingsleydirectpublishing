'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'

interface BookCover {
  id: string
  title: string
  category: string
  image: string
}

const books: BookCover[] = [
  { id: 'memoir', title: 'Memoir', category: 'Author Story', image: '/images/book1.webp' },
  { id: 'fiction', title: 'Fiction', category: 'Novel Draft', image: '/images/epileptic girl.webp' },
  { id: 'business', title: 'Business', category: 'Expert Guide', image: '/images/rangers on patrol.webp' },
  {
    id: 'wellness',
    title: 'Wellness',
    category: 'Lifestyle',
    image: '/images/81TmWd7H0bL._SL1500_-e1777872951701.webp',
  },
  {
    id: 'children',
    title: 'Kids',
    category: 'Picture Book',
    image: '/images/81YnsHtfDSL._SL1500_-1-e1777872972273.webp',
  },
  { id: 'history', title: 'History', category: 'Nonfiction', image: '/images/book1.webp' },
  { id: 'poetry', title: 'Poetry', category: 'Collection', image: '/images/epileptic girl.webp' },
  { id: 'cookbook', title: 'Cookbook', category: 'Recipe Book', image: '/images/rangers on patrol.webp' },
]

function CoverCard({ book, index }: { book: BookCover; index: number }) {
  return (
    <li className={`book-cover book-cover-${index % 4}`}>
      <Image
        src={book.image}
        alt={`${book.title} ${book.category}`}
        fill
        sizes="(max-width: 767px) 150px, (max-width: 1199px) 190px, 235px"
        className="book-cover-image"
      />
    </li>
  )
}

export default function BookCoverMarquee() {
  const firstRow = books
  const secondRow = [...books.slice(3), ...books.slice(0, 3)]

  return (
    <div className="book-marquee" aria-label="Sample book genres">
      <div className="book-marquee-row">
        <div
          className="book-marquee-track"
          style={{ '--marquee-duration': '32s' } as CSSProperties}
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
          style={{ '--marquee-duration': '24s' } as CSSProperties}
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
