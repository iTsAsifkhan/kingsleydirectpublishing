/**
 * Blog content, single source of truth for /blogs and /blogs/[slug].
 *
 * Posts are stored as structured blocks (not raw HTML) so the renderer can
 * output a clean semantic heading hierarchy (one h1 = post title, h2/h3 for
 * sections) and keep the visible copy identical to the FAQPage JSON-LD.
 */

export interface BlogSection {
  heading: string // rendered as <h2>
  paragraphs?: string[]
  list?: { ordered?: boolean; items: string[] }
}

export interface BlogFAQ {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  /** On-page <h1> and OG title. */
  title: string
  /** <title> tag, kept under ~60 chars, primary keyword first. */
  metaTitle: string
  /** Meta description, 140–155 chars, benefit-led. */
  description: string
  primaryKeyword: string
  /** Short card summary for the index page. */
  excerpt: string
  category: string
  /** Accent used for the gradient cover + category chip. */
  accent: 'navy' | 'yellow' | 'teal'
  /** Featured image used by index cards and the post hero. */
  featuredImage: string
  featuredImageAlt: string
  author: string
  /** ISO date for <time> + schema datePublished. */
  date: string
  dateLabel: string
  readingTime: string
  /** Lead paragraphs under the h1, before the first section. */
  intro: string[]
  sections: BlogSection[]
  keyTakeaways: string[]
  faqs: BlogFAQ[]
  related: { label: string; href: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-self-publish-a-book',
    title: 'How to Self-Publish a Book in 2026: A Step-by-Step Guide',
    metaTitle: 'How to Self-Publish a Book: 2026 Step-by-Step Guide',
    description:
      'Learn how to self-publish a book in 2026, from finished manuscript to Amazon launch. A clear, no-fluff step-by-step guide for first-time authors.',
    primaryKeyword: 'self-publish a book',
    excerpt:
      'From a finished manuscript to a book readers can buy on Amazon, the eight stages of self-publishing, what each one really involves, and where authors get stuck.',
    category: 'Self-Publishing',
    accent: 'navy',
    featuredImage: '/images/Step-by-Step%20Guide.jpg',
    featuredImageAlt:
      'Publishing desk with manuscript pages, book layout software, and finished paperbacks',
    author: 'The Kimberley Editorial Team',
    date: '2026-07-08',
    dateLabel: '8 July 2026',
    readingTime: '9 min read',
    intro: [
      'Self-publishing has stopped being the “second choice” it was a decade ago. Today, independent authors keep their rights, set their own timelines, and earn royalties that traditional deals rarely match. But the freedom comes with a catch: you are now responsible for every step a publishing house would normally handle.',
      'This guide walks through the full journey, from the moment your manuscript is finished to the day your book goes live, so you know exactly what each stage involves and where first-time authors most often get stuck.',
    ],
    sections: [
      {
        heading: 'Step 1, Finish and self-assess your manuscript',
        paragraphs: [
          'A “finished” draft and a publish-ready manuscript are not the same thing. Before you spend a penny on production, read your manuscript end to end and be honest about structure: does the opening earn the reader’s attention, does the middle sag, does every chapter move the story or argument forward?',
          'Fixing big-picture problems now, while the book is still just a document, is far cheaper than discovering them after you’ve paid for a cover and formatting. Most authors benefit from a developmental read at this stage, whether from a trusted beta reader or a professional editor.',
        ],
      },
      {
        heading: 'Step 2, Get your book professionally edited',
        paragraphs: [
          'Editing is the single biggest factor separating books that look self-published from books that look professionally produced. There are distinct passes: developmental editing for structure, copy editing for clarity and consistency, and proofreading for the final typo hunt. Skipping them is the most common reason indie books get poor reviews.',
          'You do not always need all three, but you should never publish without at least a copy edit and a proofread. Reviewers are quick to flag errors, and early one-star reviews for “needs editing” are hard to recover from.',
        ],
      },
      {
        heading: 'Step 3, Commission a professional cover',
        paragraphs: [
          'Readers genuinely do judge a book by its cover. It is the first thing they see in a thumbnail-sized search result. A cover that signals the wrong genre, or simply looks amateur, will suppress sales no matter how good the writing is.',
          'A professional designer knows the visual conventions of your genre (a cosy mystery and a psychological thriller look nothing alike) and will deliver files sized correctly for both ebook and print. This is not the place to cut corners.',
        ],
      },
      {
        heading: 'Step 4, Format the interior for print and ebook',
        paragraphs: [
          'Interior formatting (or typesetting) turns your edited manuscript into the actual pages a reader sees. Ebook and print need different files: reflowable text with a working table of contents for ebook, and a fixed, print-ready PDF with correct margins, gutters, and running heads for paperback.',
          'Clean formatting is invisible when done well and glaring when done badly. Awkward line breaks, inconsistent spacing, and a broken table of contents all quietly signal “amateur” to a reader.',
        ],
      },
      {
        heading: 'Step 5, Sort out ISBNs and metadata',
        paragraphs: [
          'An ISBN is the unique identifier that bookshops and retailers use to list your title. In the UK, ISBNs are issued by Nielsen; platforms like Amazon KDP can also assign a free one, though buying your own gives you more control over how you appear as the publisher of record.',
          'Metadata, your title, subtitle, categories, and keywords, is what makes your book findable. Choosing the right categories and search keywords is arguably as important as the cover, because it determines who ever sees the book in the first place.',
        ],
      },
      {
        heading: 'Step 6, Choose your platforms and upload',
        paragraphs: [
          'Amazon KDP is the largest single marketplace, but it is not the only one. Wide distribution through services like IngramSpark or Draft2Digital gets your book into Apple Books, Kobo, Barnes & Noble, and thousands of libraries and bookshops.',
          'Decide early whether to go exclusive with Amazon (which unlocks Kindle Unlimited) or go wide for broader reach. Both are valid. The right answer depends on your genre and your marketing plan.',
        ],
        list: {
          items: [
            'Amazon KDP: largest ebook and print-on-demand marketplace',
            'IngramSpark: print distribution to bookshops and libraries worldwide',
            'Apple Books, Kobo, Google Play, major non-Amazon ebook stores',
          ],
        },
      },
      {
        heading: 'Step 7, Plan your launch and marketing',
        paragraphs: [
          'Publishing the file is not the finish line. A book with no marketing simply sits unseen. Before launch day, build at least a small foundation: an author page, an email list you can notify, and a plan for gathering those crucial early reviews.',
          'Momentum in the first few weeks matters because retailer algorithms reward early sales velocity with visibility. Even a modest, well-timed launch beats a bigger effort scattered randomly months later.',
        ],
      },
      {
        heading: 'Step 8, Publish, then keep going',
        paragraphs: [
          'Once your files pass review, your book goes live, usually within 24 to 72 hours. But self-publishing rewards the long game. Keep collecting reviews, refresh your keywords as you learn what readers search for, and treat your first book as the foundation of a catalogue rather than a one-off.',
        ],
      },
    ],
    keyTakeaways: [
      'Editing and cover design are where quality is won or lost. Never skip them.',
      'Ebook and print need separate, correctly formatted interior files.',
      'Metadata (categories and keywords) decides whether readers ever find your book.',
      'A small, well-timed launch beats a big, unplanned one thanks to retailer algorithms.',
    ],
    faqs: [
      {
        question: 'How long does it take to self-publish a book?',
        answer:
          'From a finished manuscript, most authors take two to four months to publish. The majority of that time is editing and cover design. Uploading and retailer review itself usually takes only 24 to 72 hours.',
      },
      {
        question: 'Do I keep the rights to my book if I self-publish?',
        answer:
          'Yes. When you self-publish you retain full ownership of your rights and royalties. Retailers like Amazon take a distribution cut, but you remain the publisher of record and can move platforms at any time.',
      },
      {
        question: 'Can I self-publish a book for free?',
        answer:
          'Technically you can upload to Amazon KDP at no cost, but a genuinely competitive book still needs professional editing and cover design. Those are the investments that separate books that sell from books that get overlooked.',
      },
    ],
    related: [
      { label: 'our self-publishing services', href: '/services/publishing' },
      { label: 'professional book editing', href: '/services/editing' },
      { label: 'publishing packages and pricing', href: '/packages' },
    ],
  },
  {
    slug: 'how-much-does-it-cost-to-self-publish-a-book',
    title: 'How Much Does It Cost to Self-Publish a Book in 2026?',
    metaTitle: 'How Much Does It Cost to Self-Publish a Book? (2026)',
    description:
      'A transparent 2026 breakdown of what it costs to self-publish a book, editing, cover design, formatting, and marketing, plus how to budget realistically.',
    primaryKeyword: 'cost to self-publish a book',
    excerpt:
      'Editing, cover, formatting, ISBNs, marketing, a transparent breakdown of what self-publishing actually costs in 2026, and how to spend where it matters.',
    category: 'Publishing Costs',
    accent: 'yellow',
    featuredImage: '/images/Cost%20to%20Self-Publish%20a%20Book%20in%202026.jpg',
    featuredImageAlt:
      'Publishing budget workspace with a laptop, manuscript pages, calculator, and books',
    author: 'The Kimberley Editorial Team',
    date: '2026-07-15',
    dateLabel: '15 July 2026',
    readingTime: '8 min read',
    intro: [
      'It is the question every author asks first, and the one with the most misleading answers online. The honest reply is that self-publishing can cost anywhere from almost nothing to several thousand pounds, because “publishing a book” bundles together a handful of separate services, and you decide which ones you pay for.',
      'This guide breaks the total down into its real components so you can build a budget that fits your book and your goals, rather than guessing from a single headline figure.',
    ],
    sections: [
      {
        heading: 'The four costs that actually matter',
        paragraphs: [
          'Most of your budget goes to four things: editing, cover design, interior formatting, and marketing. Everything else, ISBNs, distribution fees, author copies, is comparatively minor. Understanding the range for each lets you make deliberate choices instead of overspending in one area and cutting a corner that shows.',
        ],
      },
      {
        heading: 'Editing: your largest and most important cost',
        paragraphs: [
          'Editing is usually the single biggest line item, and for good reason: it has the largest effect on how your finished book is received. Cost depends on word count and the depth of editing you need. A full developmental edit of a novel costs far more than a light proofread of a short non-fiction book.',
          'A useful rule of thumb: the more passes your manuscript needs (developmental, then copy edit, then proofread), the higher the cost, but you rarely need every pass. A clean draft that only needs a copy edit and proofread will cost a fraction of a manuscript that needs structural work.',
        ],
      },
      {
        heading: 'Cover design, where perceived value is set',
        paragraphs: [
          'A professional cover is one of the highest-return investments you can make. Pricing ranges widely: a pre-made template cover sits at the budget end, while a fully bespoke design from an experienced illustrator costs considerably more, especially if it includes custom artwork or a print wraparound with spine and back cover.',
          'For most authors, a mid-range custom cover is the sweet spot, professional enough to compete in the genre, without the premium of original commissioned art.',
        ],
      },
      {
        heading: 'Formatting, often bundled, easy to underestimate',
        paragraphs: [
          'Interior formatting is frequently bundled with editing or publishing packages, which is why authors forget to budget for it. Separately, expect to pay for two deliverables, a reflowable ebook file and a print-ready PDF, since they are produced differently.',
          'Complex layouts cost more. A straightforward novel of flowing text is inexpensive to format; an illustrated children’s book, a cookbook, or a textbook with tables and images takes far more work.',
        ],
      },
      {
        heading: 'The smaller costs: ISBNs, distribution, and copies',
        list: {
          items: [
            'ISBNs: free from Amazon KDP, or purchased from Nielsen in the UK if you want to be the publisher of record',
            'Distribution: platforms like Amazon and IngramSpark take a percentage of each sale rather than a large upfront fee',
            'Author copies and proofs: printed at cost through print-on-demand, so you only order what you need',
          ],
        },
        paragraphs: [
          'None of these should break your budget. They are worth understanding, but they rarely change the overall picture the way editing and cover design do.',
        ],
      },
      {
        heading: 'Marketing, the cost most authors forget',
        paragraphs: [
          'Publishing the book and marketing the book are two different budgets. Many first-time authors spend everything on production and have nothing left to help readers actually find the finished book. Even a small marketing reserve, for an author website, a few advertising experiments, or a launch push, pays for itself in visibility.',
          'You do not need a large marketing budget to start, but you should plan for one from the beginning rather than treating it as an afterthought.',
        ],
      },
      {
        heading: 'Packages vs. buying each service separately',
        paragraphs: [
          'Buying editing, design, and formatting individually gives you maximum control but takes more coordination and often costs more overall. A bundled publishing package is usually more cost-effective and removes the burden of managing several suppliers, which is why most first-time authors prefer them.',
          'The right choice depends on how hands-on you want to be. If you enjoy managing the details, à la carte works. If you would rather hand the production over and focus on writing, a package is the calmer, more predictable route.',
        ],
      },
    ],
    keyTakeaways: [
      'Editing and cover design typically account for most of a self-publishing budget.',
      'ISBNs and distribution are minor costs. Don’t let them dominate your planning.',
      'Reserve part of your budget for marketing, not just production.',
      'Bundled packages are usually cheaper and simpler than buying every service separately.',
    ],
    faqs: [
      {
        question: 'Is it cheaper to self-publish or use a traditional publisher?',
        answer:
          'Traditional publishing has no upfront cost to the author, but you give up rights and most royalties. Self-publishing has upfront costs for editing and design, but you keep your rights and a far larger share of every sale, so it is often more profitable over time.',
      },
      {
        question: 'What is the minimum I should spend to self-publish well?',
        answer:
          'At an absolute minimum, budget for a professional copy edit, a proofread, and a professional cover. These three protect your reviews and sales more than anything else, so they are the last places to cut.',
      },
      {
        question: 'Are self-publishing packages worth it?',
        answer:
          'For most first-time authors, yes. A package bundles editing, design, and formatting at a lower combined price and removes the work of coordinating multiple suppliers, which is why they are the most popular route.',
      },
    ],
    related: [
      { label: 'view our publishing packages and pricing', href: '/packages' },
      { label: 'professional book editing services', href: '/services/editing' },
      { label: 'custom book cover design', href: '/services/cover-design' },
    ],
  },
  {
    slug: 'types-of-book-editing-explained',
    title: 'The 4 Types of Book Editing Every Author Should Know',
    metaTitle: 'The 4 Types of Book Editing Explained (Author Guide)',
    description:
      'Developmental, line, copy editing, and proofreading, what each type of book editing does, the order they happen in, and which ones your manuscript needs.',
    primaryKeyword: 'types of book editing',
    excerpt:
      'Developmental, line, copy, and proofreading are not interchangeable. Here’s what each editing pass actually does, in what order, and which ones your book needs.',
    category: 'Editing',
    accent: 'teal',
    featuredImage: '/images/Types%20of%20Book%20Editing.jpg',
    featuredImageAlt:
      'Editor reviewing marked-up manuscript pages beside a laptop',
    author: 'The Kimberley Editorial Team',
    date: '2026-07-22',
    dateLabel: '22 July 2026',
    readingTime: '7 min read',
    intro: [
      '“I need an editor” is one of the most common things authors say, and one of the most misunderstood. Editing is not a single job. It is a sequence of distinct passes, each with a different purpose, and hiring the wrong one at the wrong time wastes both money and effort.',
      'Here are the four main types of book editing, what each actually does, and the order they should happen in so you know exactly what your manuscript needs.',
    ],
    sections: [
      {
        heading: '1. Developmental editing: the big picture',
        paragraphs: [
          'Developmental editing (sometimes called structural or content editing) is the deepest pass and comes first. It looks at the book as a whole: plot and pacing in fiction, argument and structure in non-fiction, character arcs, chapter order, and whether the book delivers on its promise to the reader.',
          'A developmental editor will not fix your commas. They will tell you a subplot goes nowhere, or that chapters three and seven should swap places. This is the pass that turns a promising draft into a coherent book, and it is best done while you are still willing to make large changes.',
        ],
      },
      {
        heading: '2. Line editing: how it reads',
        paragraphs: [
          'Line editing works at the paragraph and sentence level, focusing on style and flow rather than structure. A line editor sharpens your prose: tightening wordy sentences, smoothing awkward transitions, cutting repetition, and making sure your voice is consistent and clear.',
          'Line editing is about the reading experience: the difference between writing that is technically correct and writing that is a pleasure to read. It sits between the structural and mechanical passes.',
        ],
      },
      {
        heading: '3. Copy editing: correctness and consistency',
        paragraphs: [
          'Copy editing is the technical pass. The copy editor corrects grammar, punctuation, and spelling, and enforces consistency across spelling choices (UK vs. US), character names, timelines, capitalisation, and formatting. They apply a style guide so the whole book behaves the same way throughout.',
          'This is where errors that undermine credibility get caught: the character whose eyes change colour, the town whose name is spelled two ways, the tense that slips. Copy editing is essential for every book.',
        ],
      },
      {
        heading: '4. Proofreading: the final safety net',
        paragraphs: [
          'Proofreading is the last pass, done on the formatted book rather than the raw manuscript. The proofreader catches what everyone else missed: the stray typo, the doubled word, the broken line, the page-layout glitch. It is a fresh set of eyes right before publication.',
          'Because it happens on the final files, proofreading also catches formatting problems that only appear once the book is typeset: awkward hyphenation, widows and orphans, and headers that fall in the wrong place.',
        ],
      },
      {
        heading: 'Which types does your book actually need?',
        paragraphs: [
          'Not every manuscript needs all four passes, but the order never changes: structure first, then style, then correctness, then the final proof. Where you start depends on how developed your draft already is.',
        ],
        list: {
          items: [
            'A rough or first-time draft usually benefits from all four, starting with developmental editing.',
            'A revised, structurally sound draft often needs only copy editing and proofreading.',
            'Every book, without exception, should have at least a copy edit and a proofread before publishing.',
          ],
        },
      },
    ],
    keyTakeaways: [
      'Editing is four distinct passes, not one job, and the order matters.',
      'Developmental editing fixes structure; do it while big changes are still easy.',
      'Copy editing and proofreading are non-negotiable for every book.',
      'Proofreading happens on the formatted files, not the raw manuscript.',
    ],
    faqs: [
      {
        question: 'What is the difference between copy editing and proofreading?',
        answer:
          'Copy editing works on the manuscript to fix grammar, consistency, and style, while proofreading is the final pass on the formatted book to catch remaining typos and layout errors. Copy editing comes first; proofreading is last.',
      },
      {
        question: 'Do I need a developmental edit?',
        answer:
          'You need a developmental edit if your draft has structural issues, pacing problems, a weak argument, or chapters that feel out of order. A well-revised, structurally sound manuscript can often skip straight to copy editing.',
      },
      {
        question: 'Can one editor do all the types of editing?',
        answer:
          'Many editors offer several types, but the passes are usually done separately and in order rather than all at once. It is also good practice for a different person to proofread, since fresh eyes catch errors the original editor may have stopped seeing.',
      },
    ],
    related: [
      { label: 'our professional book editing services', href: '/services/editing' },
      { label: 'proofreading and formatting', href: '/services/editing/book-proofreading' },
      { label: 'full publishing packages', href: '/packages' },
    ],
  },
]

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
