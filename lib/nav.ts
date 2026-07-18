import type { LucideIcon } from 'lucide-react'
import {
  Headphones,
  BookOpen,
  Smartphone,
  Globe,
  Share2,
  ShoppingCart,
  Search,
  Users,
  FileText,
  Rocket,
  PenTool,
  Book,
  Tablet,
  Sparkles,
  Film,
  Feather,
  Baby,
  NotebookPen,
  UserRound,
  CheckCheck,
  AlignLeft,
  SpellCheck,
  Palette,
  MonitorSmartphone,
  Video,
  Image as ImageIcon,
  Brush,
} from 'lucide-react'

export interface MegaLink {
  label: string
  href: string
  desc: string
  icon: LucideIcon
}

export interface MegaFeatured {
  eyebrow: string
  title: string
  text: string
  href: string
  cta: string
}

export interface NavItem {
  label: string
  href: string
  /** Grouped links shown in the desktop mega panel / mobile accordion. */
  mega?: MegaLink[]
  /** Optional highlighted card shown on the right of the mega panel. */
  featured?: MegaFeatured
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Packages', href: '/packages' },
  {
    label: 'Publishing',
    href: '/services/publishing',
    mega: [
      { label: 'Audiobook', href: '/services/publishing/audiobook', desc: 'Narrated editions for every platform', icon: Headphones },
      { label: 'Self-Publishing', href: '/services/publishing/self-publishing', desc: 'Keep your rights and royalties', icon: BookOpen },
      { label: 'Digital Publishing', href: '/services/publishing/digital-publishing', desc: 'Ebooks formatted for all readers', icon: Smartphone },
      { label: 'Global Publishing', href: '/services/publishing/global-publishing', desc: 'Reach readers worldwide', icon: Globe },
    ],
    featured: {
      eyebrow: 'Featured',
      title: 'End-to-end publishing',
      text: 'Manuscript to global launch, handled by one dedicated team.',
      href: '/services/publishing',
      cta: 'Explore publishing',
    },
  },
  {
    label: 'Marketing',
    href: '/services/marketing',
    mega: [
      { label: 'Social Media Marketing', href: '/services/marketing/social-media-marketing', desc: 'Grow an engaged reader base', icon: Share2 },
      { label: 'Amazon Marketing', href: '/services/marketing/amazon-marketing', desc: 'Rank and sell on Amazon & KDP', icon: ShoppingCart },
      { label: 'SEO', href: '/services/marketing/search-engine-optimization', desc: 'Get found in organic search', icon: Search },
      { label: 'Influencer Marketing', href: '/services/marketing/influencer-marketing', desc: 'Partner with book creators', icon: Users },
      { label: 'Content Marketing', href: '/services/marketing/content-marketing', desc: 'Blogs, emails and funnels', icon: FileText },
      { label: 'Book Launch Marketing', href: '/services/marketing/book-launch-marketing', desc: 'Launch campaigns that convert', icon: Rocket },
    ],
    featured: {
      eyebrow: 'Popular',
      title: 'Bestseller launch plan',
      text: 'A coordinated push across ads, email and influencers for launch week.',
      href: '/services/marketing/book-launch-marketing',
      cta: 'Plan your launch',
    },
  },
  {
    label: 'Ghostwriting',
    href: '/services/ghostwriting',
    mega: [
      { label: 'Book Writing', href: '/services/ghostwriting/book-writing', desc: 'Your story, professionally written', icon: PenTool },
      { label: 'Ebook Writing', href: '/services/ghostwriting/e-book-writing', desc: 'Digital-first manuscripts', icon: Tablet },
      { label: 'Fantasy Writing', href: '/services/ghostwriting/fantasy-writing', desc: 'World-building specialists', icon: Sparkles },
      { label: 'Screenplay Writing', href: '/services/ghostwriting/screenplay-writing', desc: 'Screen-ready scripts', icon: Film },
      { label: 'Fiction Writing', href: '/services/ghostwriting/fiction-writing', desc: 'Compelling narrative fiction', icon: Book },
      { label: 'Non-Fiction', href: '/services/ghostwriting/non-fiction-writing', desc: 'Authority-building non-fiction', icon: NotebookPen },
      { label: 'Autobiography', href: '/services/ghostwriting/autobiography-writing', desc: 'Tell your life story', icon: UserRound },
      { label: 'Novel Writing', href: '/services/ghostwriting/novel-writing', desc: 'Full-length novels', icon: Feather },
      { label: "Children's Book", href: '/services/ghostwriting/children-book-writing', desc: 'Stories kids love', icon: Baby },
    ],
    featured: {
      eyebrow: 'Featured',
      title: 'From idea to manuscript',
      text: 'Work with a matched ghostwriter who captures your voice.',
      href: '/services/ghostwriting',
      cta: 'Start your book',
    },
  },
  {
    label: 'Editing',
    href: '/services/editing',
    mega: [
      { label: 'Editing & Proofreading', href: '/services/editing/editing-and-proofreading', desc: 'Polish every line', icon: CheckCheck },
      { label: 'Book Formatting', href: '/services/editing/book-formatting', desc: 'Print & ebook ready layouts', icon: AlignLeft },
      { label: 'Book Proofreading', href: '/services/editing/book-proofreading', desc: 'A flawless final pass', icon: SpellCheck },
    ],
    featured: {
      eyebrow: 'Featured',
      title: 'Publish-ready in weeks',
      text: 'Structural edits, copyedits and formatting under one roof.',
      href: '/services/editing',
      cta: 'Refine your draft',
    },
  },
  {
    label: 'Branding',
    href: '/services/cover-design',
    mega: [
      { label: 'Author Website', href: '/services/cover-design/author-website', desc: 'Your professional home online', icon: MonitorSmartphone },
      { label: 'Video Book Trailer', href: '/services/cover-design/video-book-trailer', desc: 'Cinematic promo videos', icon: Video },
      { label: 'Book Cover Design', href: '/services/cover-design/book-cover-design', desc: 'Covers that sell', icon: ImageIcon },
      { label: 'Book Illustration', href: '/services/cover-design/book-illustration', desc: 'Custom illustrated art', icon: Brush },
    ],
    featured: {
      eyebrow: 'Featured',
      title: 'A brand readers remember',
      text: 'Cover, website and trailer designed as one identity.',
      href: '/services/cover-design',
      cta: 'Build your brand',
    },
  },
  { label: 'Blogs', href: '/blogs' },
]

/** Shared "interested in" options for forms, derived from the service groups. */
export const SERVICE_OPTIONS: string[] = [
  'Publishing',
  'Ghostwriting',
  'Marketing',
  'Editing & Proofreading',
  'Book Cover Design',
  'Author Website',
  'Not sure yet',
]
