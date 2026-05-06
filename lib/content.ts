/**
 * Content data structures for the site.
 * This is the single source of truth for services, FAQs, testimonials, etc.
 * Used across homepage cards and service detail pages.
 */

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string // lucide icon name
  features: string[]
  process: string[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  image?: string
}

export interface ProcessStep {
  id: string
  number: number
  title: string
  description: string
  icon: string
}

// Services data
export const services: Service[] = [
  {
    id: '1',
    slug: 'ghostwriting',
    title: 'Ghostwriting',
    shortDescription: 'Professional writers bring your story to life.',
    description: 'Our ghostwriting services help you transform your ideas into a compelling manuscript.',
    icon: 'PenTool',
    features: [
      'Professional writing team',
      'Personalized approach',
      'Regular communication',
      'Confidentiality guaranteed',
    ],
    process: ['Initial consultation', 'Outline creation', 'First draft', 'Revisions', 'Final manuscript'],
  },
  {
    id: '2',
    slug: 'editing',
    title: 'Editing & Proofreading',
    shortDescription: 'Polish your manuscript with expert editors.',
    description: 'Comprehensive editing and proofreading to ensure your work is publication-ready.',
    icon: 'Wand2',
    features: [
      'Line editing',
      'Copy editing',
      'Proofreading',
      'Structural feedback',
    ],
    process: ['Manuscript review', 'Editorial assessment', 'Editing phase', 'Author review', 'Final polish'],
  },
  {
    id: '3',
    slug: 'publishing',
    title: 'Publishing Services',
    shortDescription: 'From manuscript to published book.',
    description: 'Complete publishing support including formatting, cover design, and distribution.',
    icon: 'BookOpen',
    features: [
      'ISBN assignment',
      'Format optimization',
      'Print setup',
      'E-book conversion',
    ],
    process: ['Manuscript prep', 'Cover design', 'Formatting', 'Distribution setup', 'Launch'],
  },
  {
    id: '4',
    slug: 'marketing',
    title: 'Marketing & Promotion',
    shortDescription: 'Get your book in front of readers.',
    description: 'Strategic marketing campaigns to maximize your book\'s visibility and sales.',
    icon: 'TrendingUp',
    features: [
      'Social media strategy',
      'Book launch campaigns',
      'Author platforms',
      'Reader engagement',
    ],
    process: ['Strategy development', 'Campaign creation', 'Execution', 'Analytics review', 'Optimization'],
  },
  {
    id: '5',
    slug: 'cover-design',
    title: 'Cover Design',
    shortDescription: 'Eye-catching covers that sell books.',
    description: 'Professional cover design that captures your book\'s essence and attracts readers.',
    icon: 'Layers',
    features: [
      'Custom design',
      'Multiple concepts',
      'Print ready files',
      'E-book optimization',
    ],
    process: ['Briefing', 'Concepts', 'Design refinement', 'Finalization', 'Delivery'],
  },
]

// FAQs data
export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does the publishing process take?',
    answer:
      'The typical publishing timeline is 6-12 months from manuscript to published book, depending on the services selected and complexity of the project.',
  },
  {
    id: '2',
    question: 'Do I retain rights to my book?',
    answer:
      'Yes! We work with various publishing models. You can choose traditional publishing, hybrid, or self-publishing arrangements. You always maintain your intellectual property.',
  },
  {
    id: '3',
    question: 'What formats can my book be published in?',
    answer:
      'We support print (hardcover and paperback), e-book (Kindle, ePub, PDF), and audiobook formats. You can publish in one or all formats.',
  },
  {
    id: '4',
    question: 'Can you help with book marketing?',
    answer:
      'Absolutely! We offer comprehensive marketing services including social media campaigns, book launch events, author platform development, and reader engagement strategies.',
  },
  {
    id: '5',
    question: 'What if I need revisions after publishing?',
    answer:
      'We support updates and revisions to your published work. You can make corrections and improvements at any time, and we will help distribute the updated version.',
  },
]

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Working with this team transformed my manuscript into a professional published book. Highly recommended!',
    author: 'John Smith',
    role: 'Author',
  },
  {
    id: '2',
    quote: 'The marketing support was exceptional. My book reached readers I never expected to connect with.',
    author: 'Sarah Johnson',
    role: 'Published Author',
  },
  {
    id: '3',
    quote: 'From editing to cover design, every service exceeded my expectations. Truly a one-stop shop for authors.',
    author: 'Michael Brown',
    role: 'First-time Author',
  },
]

// Process steps
export const processSteps: ProcessStep[] = [
  {
    id: '1',
    number: 1,
    title: 'Consultation',
    description: 'Discuss your book idea and goals with our team.',
    icon: 'MessageSquare',
  },
  {
    id: '2',
    number: 2,
    title: 'Planning',
    description: 'Create a customized publishing roadmap.',
    icon: 'MapPin',
  },
  {
    id: '3',
    number: 3,
    title: 'Creation',
    description: 'Write, edit, and design your book.',
    icon: 'Zap',
  },
  {
    id: '4',
    number: 4,
    title: 'Publishing',
    description: 'Format and publish your book.',
    icon: 'CheckCircle',
  },
  {
    id: '5',
    number: 5,
    title: 'Launch',
    description: 'Execute your book launch campaign.',
    icon: 'Rocket',
  },
  {
    id: '6',
    number: 6,
    title: 'Growth',
    description: 'Ongoing marketing and reader engagement.',
    icon: 'TrendingUp',
  },
]
