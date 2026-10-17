import { ArrowRight, BadgeCheck, Quote, Star } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import { featuredReview } from '@/lib/featuredReview'
import { reviewSchema } from '@/lib/schema'

/**
 * Featured Author Review — one long-form, named testimonial given the weight of
 * an editorial spread: eyebrow + pull-quote headline, the review itself, and a
 * signature rail (logo or monogram, name, cited book titles, rating).
 *
 * Deliberately a separate section from the short <Testimonials /> card grid that
 * follows it: this one is a real, verifiable review and leads the social-proof
 * block. Content lives in `lib/featuredReview.ts`.
 */

/** Renders `*Book Title*` markers in a paragraph as <cite> elements. */
function withCitedTitles(text: string) {
  return text
    .split(/\*([^*]+)\*/g)
    .map((part, i) => (i % 2 === 1 ? <cite key={i}>{part}</cite> : part))
}

export default function FeaturedReview() {
  const r = featuredReview

  return (
    <section
      className="featured-review"
      id="author-review"
      aria-labelledby="featured-review-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            reviewSchema({
              author: r.author,
              // Markers are authoring syntax, not part of her words.
              body: r.paragraphs.join(' ').replace(/\*/g, ''),
              rating: r.rating,
              datePublished: r.datePublished,
              headline: r.headline,
            })
          ),
        }}
      />

      <Container>
        <div className="featured-review-head">
          <span className="span-tag-border">Featured Author Review</span>
          <h2 id="featured-review-title" className="featured-review-title fw-700 pt-3">
            “From a Thought to a <span className="clr-1">Process</span>”
          </h2>
          <p>{r.intro}</p>
        </div>

        <figure className="featured-review-panel">
          <blockquote className="featured-review-quote">
            <Quote className="featured-review-mark" size={38} aria-hidden="true" />
            {r.paragraphs.map((text, i) => (
              <p
                key={i}
                className={i === 0 ? 'featured-review-lead' : undefined}
              >
                {withCitedTitles(text)}
              </p>
            ))}
          </blockquote>

          <figcaption className="featured-review-sign">
            <span className="featured-review-mark-wrap">
              <span className="featured-review-monogram" aria-hidden="true">
                {r.monogram}
              </span>
            </span>

            <p className="featured-review-name">{r.author}</p>
            <p className="featured-review-role">{r.role}</p>

            <span
              className="featured-review-stars"
              role="img"
              aria-label={`Rated ${r.rating} out of 5`}
            >
              {Array.from({ length: r.rating }, (_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </span>

            <p className="featured-review-books-label">Published with us</p>
            <ul className="featured-review-books">
              {r.books.map((book) => (
                <li key={book}>
                  <cite>{book}</cite>
                </li>
              ))}
            </ul>

            <p className="featured-review-verified">
              <BadgeCheck size={15} aria-hidden="true" />
              Review submitted by the author
            </p>
          </figcaption>
        </figure>

        <div className="featured-review-cta">
          <Button variant="yellow" href="/contact" icon={ArrowRight}>
            Start Your Book
          </Button>
        </div>
      </Container>
    </section>
  )
}
