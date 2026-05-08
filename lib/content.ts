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
  longDescription: string
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
  genre: string
  published: string
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
    longDescription:
      'Our professional ghostwriting service pairs you with an experienced author who brings your story to life while keeping your voice and vision at the center. Whether you have a detailed outline or just a spark of an idea, our team guides you from concept to polished manuscript.\n\nWe begin with a thorough consultation to understand your goals, audience, and creative direction. Your dedicated ghostwriter then crafts each chapter with care, sharing drafts at every stage so you stay in control. Regular check-ins ensure the narrative stays true to your vision while benefiting from professional storytelling expertise.\n\nAll work is delivered under strict confidentiality — the book is entirely yours, with your name on the cover. We handle everything from research and plot development to dialogue and final polish, so you can focus on sharing your story with the world.',
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
    longDescription:
      'Every great book benefits from professional editing. Our editorial team provides comprehensive manuscript review that covers everything from developmental structure to line-level grammar, ensuring your writing is as strong as it can be before publication.\n\nOur editors work collaboratively with you, offering clear feedback that preserves your unique voice while strengthening clarity, pacing, and readability. We offer multiple rounds of revision so every concern is addressed before your final manuscript is delivered.\n\nWhether you need a light proofread or a complete structural overhaul, we tailor our editing approach to your manuscript\'s specific needs and your publishing timeline.',
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
    longDescription:
      'Moving from completed manuscript to published book involves dozens of technical decisions. Our publishing team guides you through every step — from professional formatting and cover design to platform registration, distribution setup, and launch strategy.\n\nWe support publication on all major platforms including Amazon KDP, IngramSpark, Barnes & Noble Press, and Apple Books. Your book is formatted to meet each platform\'s technical requirements in both print and digital formats, ensuring it looks professional on every device and in every store.\n\nWith our support, your book launch is organized and strategic rather than overwhelming. We help you set the right categories, keywords, pricing, and promotional timing to give your book the best chance of reaching readers from day one.',
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
    longDescription:
      'Reaching readers requires more than a great book — it requires a marketing strategy built around your title, genre, and audience. Our book marketing team creates targeted campaigns that build visibility, drive traffic to your listings, and convert browsers into buyers.\n\nWe start by analyzing your book\'s competitive landscape and identifying your ideal reader. From there, we develop a multi-channel approach that may include social media content, Amazon optimization, email campaigns, promotional pricing windows, and influencer outreach.\n\nYour dedicated marketing coordinator tracks campaign performance and adjusts strategy based on real data, so your marketing investment continually improves over time. We offer flexible packages for both launch campaigns and long-term author platform growth.',
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
    longDescription:
      'Your book cover is the single most important marketing asset your book has — it needs to communicate genre, quality, and story in a fraction of a second. Our cover design team creates professional, genre-appropriate covers that compete with traditionally published titles.\n\nWe begin with a detailed briefing to understand your book, target audience, and competitive titles in your genre. Our designers then develop multiple concept directions, giving you options to compare before committing to a final design.\n\nAll covers are delivered as print-ready, high-resolution files in both print and digital specifications, with proper bleed, spine calculations, and metadata embedded. You receive all source files so future updates — such as adding an award badge or new edition label — can be made without starting from scratch.',
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
    question: 'What Book Publishing Partner do you offer?',
    answer:
      'We support authors with manuscript review, editing, design, formatting, publishing setup, distribution guidance, and marketing support.',
  },
  {
    id: '2',
    question: 'How can I submit my manuscript for publishing?',
    answer:
      'You can contact our team with your manuscript details, goals, and preferred publishing services. We will review the project and recommend the next steps.',
  },
  {
    id: '3',
    question: 'Do you offer self-publishing services?',
    answer:
      'Yes. We help authors prepare their books for self-publishing across print and digital platforms while maintaining creative control.',
  },
  {
    id: '4',
    question: 'What is the typical timeline for publishing a book?',
    answer:
      'The typical publishing timeline is 6-12 months from manuscript to published book, depending on the services selected and complexity of the project.',
  },
  {
    id: '5',
    question: 'Do I need a literary agent to publish my book?',
    answer:
      'No. Many authors publish successfully without a literary agent, especially through self-publishing or hybrid publishing routes.',
  },
  {
    id: '6',
    question: 'What is the royalty structure for authors?',
    answer:
      'Royalty structure depends on the publishing platform, book format, price, and distribution model. We help authors understand the available options.',
  },
  {
    id: '7',
    question: 'Can I retain the copyright of my book?',
    answer:
      'Yes. You retain copyright ownership of your book unless you choose a specific publishing arrangement that states otherwise.',
  },
  {
    id: '8',
    question: 'How will you help with book marketing and promotion?',
    answer:
      'We can support launch planning, listing optimization, promotional content, campaign strategy, and reader visibility across relevant channels.',
  },
  {
    id: '9',
    question: 'What types of books do you publish?',
    answer:
      'We support many categories including fiction, nonfiction, children books, memoirs, business books, fantasy, romance, mystery, and more.',
  },
  {
    id: '10',
    question: 'What are the costs involved in book publishing?',
    answer:
      'Costs vary by manuscript length, editing needs, design requirements, publishing format, and marketing scope. We provide estimates after reviewing your project.',
  },
]

// Testimonials data — real client reviews
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Esabelle Flynn',
    genre: 'Children',
    published: '06+',
    quote:
      "My first children’s book “Violet and Jo” is just now on Amazon and in Kindle form. My second one is currently being illustrated “Violet and Jo — All aboard”. The Patrick White staff have been encouraging and responsive to changes in pictures. For their whole process it is a big financial outlay, but I am hopeful their marketing will bring results.",
    amazonUrl: 'https://a.co/d/0eIY8UgT',
    photo: '/images/wrap-2-img.webp',
    bookCover: '/images/violet and jo.webp',
  },
  {
    id: '2',
    name: 'Cornelis Pepsee',
    genre: 'Adventure',
    published: '07+',
    quote:
      "I would like to share my review of Patrick White Publishing. I was initially proud of my front cover design, but after Roy Wilson showed me their incredible work, I was truly impressed. The cover speaks volumes and transcends language barriers. From the beginning, I’ve been very pleased with how the front cover of my book was designed and how the process was handled. I recommend Patrick White Publishing and encourage others to give their project coordinator Roy Wilson an opportunity to showcase his talent.",
    amazonUrl: 'https://a.co/d/09HD02Ya',
    photo: '/images/wrap-2-img.webp',
    bookCover: '/images/rangers on patrol.webp',
  },
  {
    id: '3',
    name: 'Charlie',
    genre: 'Children',
    published: '05+',
    quote:
      "Loved the response and the way the drawings evolved to match the text. Very professional and driving gently to the end to get the book published. Much looking forward to the next one.",
    amazonUrl: 'https://a.co/d/gVPN9Yi',
    photo: '/images/wrap-2-img.webp',
    bookCover: '/images/book1.webp',
  },
  {
    id: '4',
    name: 'Benjamin Sam',
    genre: 'Drama',
    published: '04+',
    quote:
      "Working with Patrick White Publishing has been a wonderful experience. They have been incredibly supportive in helping me bring my book to life. Roy has been especially helpful throughout the journey, always available to answer my questions and guide me every step of the way. I am so glad I chose Roy for this project and truly appreciate the illustration support and overall assistance provided.",
    amazonUrl: 'https://amzn.asia/d/0iNdmbht',
    photo: '/images/wrap-2-img.webp',
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
