/**
 * Featured author review — the long-form, named testimonial rendered as an
 * editorial spread on the homepage ("Featured Author Review" band).
 *
 * This is a REAL review from a real client, submitted in writing. Copy-editing
 * is limited to spelling, punctuation and brand-name capitalisation; no wording,
 * claim or sentiment has been added, removed or reinterpreted. Keep it that way
 * — the verbatim source is on file and the review is published under her name.
 *
 * In paragraph text, `*Book Title*` is rendered as a <cite> element by
 * `components/sections/FeaturedReview.tsx`.
 */

export interface FeaturedReview {
  id: string
  /** Reviewer's name, exactly as she asked to be credited. */
  author: string
  /** Short attribution line beneath the name. */
  role: string
  /** Books she published with us, shown as cited titles in the signature rail. */
  books: string[]
  /** Initials for the signature mark, matching the review-card avatars. */
  monogram: string
  /** Star rating out of 5. */
  rating: number
  /** Pull-quote headline — her own phrase, not ours. */
  headline: string
  /** Editorial stand-first introducing the review. */
  intro: string
  /** The review itself, one string per paragraph. */
  paragraphs: string[]
  /** ISO date the review was given, for Review structured data. */
  datePublished: string
}

export const featuredReview: FeaturedReview = {
  id: 'beaulah-leher',
  author: 'Beaulah (Robertson) Leher',
  role: 'Children’s Author',
  books: ['The Fairy Who Had One Wing', 'Rainbows Magic Wing'],
  monogram: 'BL',
  rating: 5,
  headline: 'From a Thought to a Process',
  intro:
    'Beaulah found Kimberley Direct Publishing through a single Instagram search. This is her account of taking two children’s books from imagination to print — in her own words.',
  paragraphs: [
    'Faith, Excitement, Expectant, Magical, A constant thought process, Imagination to a script, how to do this and who to talk to…',
    'That was and is my journey from a Thought to a Process.',
    'Watching my books unfold was just not words but everything that lives within me, a “True Wonder Within”, which I am sure lives in every Author.',
    'I came across Kimberley Direct Publishing via an Instagram search; one simple contact instantly led to a professional working relationship. For a new author who wanted to run before walking, the process led and executed by one of their exceptional team brought about meetings, phone contacts, emails, texts, lots of discussions, questions, reviews, amendments and more.',
    'Thank you, Mr Ross and team, for the unexplainable joy and gratitude I felt when I held the finished product in my hand. May *The Fairy Who Had One Wing*, along with *Rainbows Magic Wing* (and all the other books to follow), bring about a heart-warming magical fairy tale to all who read it.',
    'If you are like me and looking to publish your books and don’t know where to turn, I will highly recommend Kimberley Direct Publishing. Let them turn your imagination into reality, through a timely, trustworthy process built by an exceptional team.',
  ],
  datePublished: '2026-10-17',
}
