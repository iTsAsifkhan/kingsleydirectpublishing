/**
 * Video testimonials — authors sharing their publishing journey on camera.
 *
 * Single source of truth for the "Author Stories, On Camera" section. Every
 * entry renders as an equal card (poster + play button); clicking opens the
 * clip in a full-screen player. To add another testimonial, drop the video and
 * a poster frame in `public/testimonials/` and append an object here.
 */

export interface VideoTestimonial {
  id: string
  /** Author's full name. */
  author: string
  /** Book title the author published with us. */
  bookTitle: string
  /** Portrait video file in /public (9:16 phone reel). */
  video: string
  /** 9:16 still shown on the card before playback (720×1280 WebP). */
  poster: string
  /** Human-readable clip length, e.g. "1:20". */
  duration: string
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'ermelinda-hashani',
    author: 'Ermelinda Hashani',
    bookTitle: 'Ayaan and the Little Village Light',
    video: '/testimonials/ermelinda-hashani-2.mp4',
    poster: '/testimonials/ermelinda-hashani-poster.webp',
    duration: '1:20',
  },
  {
    id: 'andy-carwardine',
    author: 'Andy Carwardine',
    bookTitle: 'Pass It On',
    video: '/testimonials/andy-carwardine.mp4',
    poster: '/testimonials/andy-carwardine-poster.webp',
    duration: '0:41',
  },
  {
    id: 'caroline-joy',
    author: 'Caroline Joy',
    bookTitle: 'Sleepyhead Goes to School',
    video: '/testimonials/caroline-joy.mp4',
    poster: '/testimonials/caroline-joy-poster.webp',
    duration: '1:08',
  },
]
