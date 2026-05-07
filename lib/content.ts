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
  name: string
  quote: string
  amazonUrl: string
  photo: string
  bookCover: string
}

export interface ProcessStep {
  id: string
  number: number
  title: string
  description: string
  icon: string
}

export interface Stat {
  id: string
  value: string
  suffix: string
  label: string
}

// Services data
export const services: Service[] = [
  {
    id: '1',
    slug: 'ghostwriting',
    title: 'Ghostwriting',
    shortDescription:
      'Have an idea for a potential bestseller? Our professional ghostwriters turn rough concepts, plots, and notes into a polished manuscript ready for publication.',
    description:
      'Our ghostwriting services help you transform your ideas into a compelling manuscript through research, outlining, drafting, revisions, and final polish.',
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
    title: 'Editing',
    shortDescription:
      'Turn your first draft into a polished, publication-ready book with professional editing, proofreading, structural feedback, and line-level refinement.',
    description:
      'Comprehensive editing and proofreading to refine your manuscript with copy editing, line editing, developmental notes, and final proofreading.',
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
    title: 'Publishing',
    shortDescription:
      'Move from completed manuscript to published author with formatting, cover support, platform setup, distribution guidance, and launch preparation.',
    description:
      'Complete publishing support including formatting, cover design, book descriptions, platform setup, distribution, and launch strategy.',
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
    title: 'Marketing',
    shortDescription:
      'Build visibility for your published book with tailored marketing strategy, optimized listings, launch campaigns, and promotional materials.',
    description:
      'Strategic marketing campaigns to increase your book visibility, improve listings, support launches, and connect your work with readers.',
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
    title: 'Book Cover Design',
    shortDescription:
      'Get a custom-designed book cover that captures your story, looks professional across formats, and helps your book stand out to readers.',
    description:
      'Professional cover design that captures your book\'s essence, supports print and digital formats, and attracts readers.',
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

// Testimonials data — real client reviews
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Esabelle Flynn',
    quote:
      "My first children’s book “Violet and Jo” is just now on Amazon and in Kindle form. My second one is currently being illustrated “Violet and Jo — All aboard”. The Patrick White staff have been encouraging and responsive to changes in pictures. For their whole process it is a big financial outlay, but I am hopeful their marketing will bring results.",
    amazonUrl: 'https://a.co/d/0eIY8UgT',
    photo: '/images/1.webp',
    bookCover: '/images/violet and jo.webp',
  },
  {
    id: '2',
    name: 'Cornelis Pepsee',
    quote:
      "I would like to share my review of Patrick White Publishing. I was initially proud of my front cover design, but after Roy Wilson showed me their incredible work, I was truly impressed. The cover speaks volumes and transcends language barriers. From the beginning, I’ve been very pleased with how the front cover of my book was designed and how the process was handled. I recommend Patrick White Publishing and encourage others to give their project coordinator Roy Wilson an opportunity to showcase his talent.",
    amazonUrl: 'https://a.co/d/09HD02Ya',
    photo: '/images/2.webp',
    bookCover: '/images/rangers on patrol.webp',
  },
  {
    id: '3',
    name: 'Charlie',
    quote:
      "Loved the response and the way the drawings evolved to match the text. Very professional and driving gently to the end to get the book published. Much looking forward to the next one.",
    amazonUrl: 'https://a.co/d/gVPN9Yi',
    photo: '/images/3.webp',
    bookCover: '/images/book1.webp',
  },
  {
    id: '4',
    name: 'Benjamin Sam',
    quote:
      "Working with Patrick White Publishing has been a wonderful experience. They have been incredibly supportive in helping me bring my book to life. Roy has been especially helpful throughout the journey, always available to answer my questions and guide me every step of the way. I am so glad I chose Roy for this project and truly appreciate the illustration support and overall assistance provided.",
    amazonUrl: 'https://amzn.asia/d/0iNdmbht',
    photo: '/images/4.webp',
    bookCover: '/images/epileptic girl.webp',
  },
]

// Homepage stats
export const stats: Stat[] = [
  {
    id: 'published-clients',
    value: '5K',
    suffix: '+',
    label: 'Published Happy Clients',
  },
  {
    id: 'five-star-reviews',
    value: '100',
    suffix: '+',
    label: 'Five out of Five Reviews',
  },
  {
    id: 'partners-worldwide',
    value: '40,000',
    suffix: '+',
    label: 'Business partners worldwide',
  },
  {
    id: 'satisfaction-rate',
    value: '97%',
    suffix: '+',
    label: 'Satisfaction Rate',
  },
]

// Process steps
export const processSteps: ProcessStep[] = [
  {
    id: '1',
    number: 1,
    title: 'Manuscript Review and Assessment',
    description:
      'Our expert team performs a detailed review of your manuscript, providing insightful feedback and actionable recommendations to improve its market potential and ensure it is fully prepared for publication.',
    icon: 'FileSearch',
  },
  {
    id: '2',
    number: 2,
    title: 'Editing and Proofreading Services',
    description:
      'Our experienced editors carefully refine your manuscript, enhancing its content, grammar, and style to deliver a flawless final version that aligns with industry standards.',
    icon: 'Wand2',
  },
  {
    id: '3',
    number: 3,
    title: 'Book Design and Formatting',
    description:
      'Our design experts create eye-catching book covers and format the interior layout, ensuring a visually appealing and reader-friendly presentation that complements your book genre and message.',
    icon: 'LayoutTemplate',
  },
  {
    id: '4',
    number: 4,
    title: 'Printing and Production Services',
    description:
      'We use premium printing and production methods to bring your book to life in physical form, ensuring it has the polished, professional look of traditionally published titles.',
    icon: 'Printer',
  },
  {
    id: '5',
    number: 5,
    title: 'Distribution and Marketing Solutions',
    description:
      'We offer wide-reaching distribution, ensuring your book is available through leading online retailers and bookstores while targeted campaigns connect with your ideal audience.',
    icon: 'Megaphone',
  },
  {
    id: '6',
    number: 6,
    title: 'Royalties and Sales Tracking',
    description:
      'As your book reaches a global audience, we offer clear royalty reporting and payment visibility so you can monitor success and enjoy the rewards of your literary accomplishment.',
    icon: 'BadgeDollarSign',
  },
]
