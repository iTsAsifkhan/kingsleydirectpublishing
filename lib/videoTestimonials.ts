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
  /** Book title the author published with us. */
  bookTitle: string
  /**
   * A truthful intro/caption for the clip. Not presented as a verbatim quote —
   * swap in the author's real words (with quotation marks) once transcribed.
   */
  intro: string
  /** Portrait video file in /public (9:16 phone reel works best). */
  video: string
  /** Still photo of the author (ideally holding the finished book). */
  image: string
  /** Human-readable clip length, e.g. "1:21". */
  duration?: string
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
  },
]
