/**
 * Video testimonials — authors sharing their publishing journey on camera.
 *
 * Single source of truth for the "Author Spotlight" section. The first entry is
 * rendered as the large featured spotlight; any additional entries render as a
 * compact video-card row beneath it. To add another testimonial, drop the files
 * in `public/testimonials/` and append an object here — no component changes.
 */

export interface VideoTestimonial {
  id: string
  /** Author's full name. */
  author: string
  /** Short role line, e.g. "Author of …". */
  role: string
  /** Book title the author published with us. Cards fall back to `role`. */
  bookTitle?: string
  /**
   * A truthful intro/caption for the clip. Not presented as a verbatim quote —
   * swap in the author's real words (with quotation marks) once transcribed.
   */
  intro: string
  /** Portrait video file in /public (9:16 phone reel works best). */
  video: string
  /**
   * Still photo of the author (ideally holding the finished book). Required for
   * the first (featured) entry; optional for the card row.
   */
  image?: string
  /**
   * Thumbnail shown on the player before playback (the video `poster`). Falls
   * back to `image`, then to the video's own first frame.
   */
  poster?: string
  /** Human-readable clip length, e.g. "1:21". */
  duration?: string
  /** Public link to buy the finished book (e.g. the Amazon product page). */
  bookUrl?: string
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'ermelinda-hashani',
    author: 'Ermelinda Hashani',
    role: 'Children’s Author',
    bookTitle: 'Ayaan and the Little Village Light',
    intro:
      'Watch Ermelinda share her journey, from manuscript to holding her finished children’s book, with the Kimberley Direct Publishing team.',
    video: '/testimonials/ermelinda-hashani.mp4',
    image: '/testimonials/ermelinda-hashani.jpg',
    duration: '1:21',
    bookUrl: 'https://amzn.asia/d/07uFn76G',
  },
  {
    id: 'caroline-joy',
    author: 'Caroline Joy',
    role: 'Published Author',
    bookTitle: 'Sleepyhead Goes to School',
    intro: 'Caroline Joy on publishing Sleepyhead Goes to School with Kimberley Direct Publishing.',
    video: '/testimonials/caroline-joy.mp4',
  },
  {
    id: 'andy-carwardine',
    author: 'Andy Carwardine',
    role: 'Published Author',
    bookTitle: 'Pass It On',
    intro: 'Andy Carwardine on publishing Pass It On with Kimberley Direct Publishing.',
    video: '/testimonials/andy-carwardine.mp4',
  },
  {
    id: 'ermelinda-hashani-2',
    author: 'Ermelinda Hashani',
    role: 'Children’s Author',
    bookTitle: 'Ayaan and the Little Village Light',
    intro: 'More from Ermelinda on publishing her children’s book.',
    video: '/testimonials/ermelinda-hashani-2.mp4',
    image: '/testimonials/ermelinda-hashani.jpg',
  },
]
