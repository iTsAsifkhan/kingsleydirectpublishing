/**
 * Content data structures for the site.
 * This is the single source of truth for services, FAQs, testimonials, etc.
 * Used across homepage cards and service detail pages.
 */

export interface SubService {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  features: string[]
}

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
  subServices: SubService[]
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
    subServices: [
      {
        slug: 'book-writing',
        title: 'Book Writing',
        shortDescription: 'Work with a professional book writer who captures your ideas, voice, and story in a compelling full-length manuscript ready for publication.',
        longDescription: 'Our book writing service connects you with an experienced author who transforms your concept into a complete, professionally written manuscript. From memoirs and business books to fiction and self-help, we cover every genre and writing style.\n\nYour dedicated writer collaborates closely with you through every phase — from initial concept mapping to final chapter drafts. We ensure your voice, perspective, and message are preserved throughout, delivering a manuscript that truly represents you.',
        features: ['Full manuscript delivery', 'Genre expertise across all categories', 'Chapter-by-chapter collaboration', 'Unlimited revisions'],
      },
      {
        slug: 'e-book-writing',
        title: 'Ebook Writing',
        shortDescription: 'Get a professionally written ebook that positions you as an authority in your field, drives leads, and reaches readers instantly on any device.',
        longDescription: 'Ebooks are one of the most effective ways to share expertise, grow an audience, and generate passive income. Our ebook writing service produces well-researched, engaging digital books designed for immediate reader impact and platform compatibility.\n\nWe handle everything from research and outlining through writing, formatting, and final delivery in Kindle, ePub, and PDF formats — giving you a publication-ready ebook without the technical headaches.',
        features: ['Research & topic development', 'All digital formats (Kindle, ePub, PDF)', 'Lead magnet & sales-ready copy', 'Professional formatting'],
      },
      {
        slug: 'fantasy-writing',
        title: 'Fantasy Writing',
        shortDescription: 'Bring your imaginary worlds, epic characters, and magical systems to life with a fantasy ghostwriter who specializes in the genre.',
        longDescription: 'Fantasy fiction demands extraordinary world-building, internally consistent magic systems, and characters readers genuinely care about. Our fantasy writers are devoted readers and practitioners of the genre, bringing authenticity to every page.\n\nWhether you are writing high fantasy, urban fantasy, dark fantasy, or a blend of subgenres, your ghostwriter constructs detailed lore, maps complex narratives, and delivers prose that keeps readers turning pages.',
        features: ['World-building & lore development', 'Magic system design', 'Character arc planning', 'Series bible creation'],
      },
      {
        slug: 'screenplay-writing',
        title: 'Screenplay Writing',
        shortDescription: 'Turn your story idea into a properly formatted, production-ready screenplay written by experienced screenwriters who understand the craft.',
        longDescription: 'A great screenplay is a technical document as much as a creative work — format, pacing, dialogue, and visual storytelling all follow industry rules that separate amateur scripts from professional ones. Our screenwriters know these rules and break them only when the story demands it.\n\nWe work with you on concept, structure, and scene-by-scene breakdown before drafting, ensuring your screenplay arrives properly formatted for submission to agents, producers, or festivals.',
        features: ['Industry-standard formatting', 'Three-act structure mastery', 'Scene-by-scene outline', 'Production notes & coverage'],
      },
      {
        slug: 'fiction-writing',
        title: 'Fiction Writing',
        shortDescription: 'Collaborate with a fiction ghostwriter to create a compelling novel with unforgettable characters, a gripping plot, and polished prose.',
        longDescription: 'Writing great fiction requires balancing plot, character, pacing, dialogue, and theme into a seamless reading experience. Our fiction writers bring deep craft knowledge and genre expertise to every project, ensuring your story resonates from the first page to the last.\n\nYou stay in control of the creative vision while your writer handles the daily word-count grind, structural problem-solving, and scene-level polish that transforms an idea into a finished novel.',
        features: ['Plot & structure development', 'Character voice & arc', 'Dialogue and scene work', 'Genre-specific expertise'],
      },
      {
        slug: 'non-fiction-writing',
        title: 'Non-Fiction Writing',
        shortDescription: 'Share your knowledge, research, or personal experience in a well-structured non-fiction book that educates, inspires, and builds your authority.',
        longDescription: 'Non-fiction books are powerful tools for establishing credibility, reaching new audiences, and creating lasting impact. Our non-fiction writers have experience across business, self-help, history, science, biography, and more — bringing both research skills and narrative clarity to complex subjects.\n\nWe interview you extensively to capture your perspective, then structure your ideas into a coherent, engaging book that makes your knowledge accessible to your target reader.',
        features: ['Expert interview process', 'Research and fact-checking', 'Logical chapter structure', 'Authority-building narrative'],
      },
      {
        slug: 'autobiography-writing',
        title: 'Autobiography Writing',
        shortDescription: 'Tell your life story the way it deserves to be told — with honesty, depth, and the narrative craft that turns personal history into a compelling memoir.',
        longDescription: 'Your life story is unique and worth telling. Our autobiography and memoir ghostwriters specialize in drawing out the experiences, emotions, and lessons that make a personal story resonate with readers far beyond your immediate circle.\n\nWe conduct in-depth interviews, help you select and sequence the most powerful moments, and write your story in a voice that is undeniably yours — honest, reflective, and gripping from start to finish.',
        features: ['In-depth life story interviews', 'Timeline & narrative structure', 'Emotional authenticity', 'Full confidentiality'],
      },
      {
        slug: 'novel-writing',
        title: 'Novel Writing',
        shortDescription: 'From concept to complete manuscript, our novel writing service gives you a professionally crafted full-length book in your chosen genre.',
        longDescription: 'A novel is one of the most ambitious creative undertakings — 60,000 to 100,000 words that must hold together structurally, emotionally, and stylistically. Our novel ghostwriters have completed dozens of full-length books across literary fiction, romance, thriller, mystery, science fiction, and more.\n\nWe develop your concept into a detailed outline before a single draft word is written, ensuring we agree on direction and pacing before your writer invests hundreds of hours in the manuscript.',
        features: ['Full-length manuscript (60k–100k words)', 'Multi-genre expertise', 'Detailed outline approval process', 'Chapter drafts with revision rounds'],
      },
      {
        slug: 'children-book-writing',
        title: "Children's Book Writing",
        shortDescription: 'Create an enchanting children\'s book with age-appropriate storytelling, memorable characters, and text ready for professional illustration.',
        longDescription: 'Children\'s books require deceptively simple writing that speaks directly to young readers while engaging the adults reading aloud with them. Our children\'s book writers understand the vocabulary, pacing, and storytelling conventions of each age group — from board books to middle grade.\n\nWe craft your story with illustration notes included, ensuring the text and eventual artwork work in harmony. Whether you have a full concept or just a character, we help you build a book children will ask for again and again.',
        features: ['Age-appropriate language & pacing', 'Illustration notes included', 'Rhyming & prose options', 'Board book to middle-grade range'],
      },
    ],
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
    subServices: [
      {
        slug: 'editing-and-proofreading',
        title: 'Editing and Proofreading',
        shortDescription: 'Give your manuscript the thorough editorial treatment it deserves — from developmental feedback to sentence-level polish and final error elimination.',
        longDescription: 'Editing and proofreading are two distinct stages that together transform a rough draft into a publication-ready manuscript. Our editorial process begins with the big picture — structure, pacing, clarity — before moving to line-by-line refinement and, finally, a meticulous proofread to catch every remaining error.\n\nAll editorial feedback is delivered with clear explanations so you understand every suggested change. You retain full creative control while benefiting from an objective professional eye that has reviewed hundreds of manuscripts.',
        features: ['Developmental & structural editing', 'Line editing & style refinement', 'Copy editing & grammar', 'Final proofreading pass'],
      },
      {
        slug: 'book-formatting',
        title: 'Book Formatting',
        shortDescription: 'Get your manuscript formatted to professional print and digital standards, ready for upload to Amazon KDP, IngramSpark, and all major platforms.',
        longDescription: 'Book formatting is the bridge between your finished manuscript and a published book readers can actually hold or read on their device. Poor formatting is immediately noticeable — inconsistent spacing, wrong margins, broken headers — and signals an amateur production. Our formatters ensure every page meets platform specifications.\n\nWe deliver fully formatted print-ready PDF files with correct bleed, margins, and font embedding, alongside reflowable ebook files that display correctly on Kindle, Apple Books, Kobo, and every major e-reader.',
        features: ['Print-ready PDF (KDP, IngramSpark)', 'Reflowable ebook (Kindle, ePub)', 'Front/back matter design', 'Chapter headers & style consistency'],
      },
      {
        slug: 'book-proofreading',
        title: 'Book Proofreading',
        shortDescription: 'Catch every remaining typo, grammar mistake, and formatting inconsistency with a dedicated final proofreading pass before your book goes to print.',
        longDescription: 'Proofreading is the final quality gate before publication — the last opportunity to eliminate errors that would otherwise appear in print. Our proofreaders approach your manuscript with fresh eyes, using a systematic method that catches the small mistakes even experienced editors overlook after multiple passes.\n\nWe check spelling, punctuation, grammar, consistency in names and terms, formatting irregularities, and widow/orphan text. You receive a marked-up document with every correction clearly flagged for your approval.',
        features: ['Spelling & punctuation check', 'Grammar & consistency review', 'Formatting irregularity detection', 'Author approval markup'],
      },
    ],
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
    subServices: [
      {
        slug: 'audiobook',
        title: 'Audiobook Publishing',
        shortDescription: 'Expand your book\'s reach by publishing a professional audiobook through ACX, Findaway Voices, and major audio platforms worldwide.',
        longDescription: 'Audiobooks are one of the fastest-growing segments of the publishing market. Our audiobook publishing service handles everything from narrator selection and recording direction through audio mastering and platform submission — delivering a finished audiobook that meets ACX and Findaway technical standards.\n\nWe work with a network of professional narrators across multiple accents and vocal styles, or we can produce your audiobook using your own narration with full editing and mastering support.',
        features: ['Narrator selection & direction', 'Professional audio mastering', 'ACX & Findaway submission', 'Audible, Apple, Spotify distribution'],
      },
      {
        slug: 'self-publishing',
        title: 'Self-Publishing Services',
        shortDescription: 'Publish your book independently and keep full control of your rights, royalties, and publishing timeline with our end-to-end self-publishing support.',
        longDescription: 'Self-publishing gives authors the freedom to publish on their own schedule, earn higher royalties, and retain complete ownership of their work. But the process involves dozens of technical and strategic decisions that can overwhelm first-time authors. Our self-publishing team simplifies every step.\n\nFrom manuscript preparation and cover design to ISBN registration, platform setup, and distribution, we handle the operational side of publishing so you can stay focused on writing and connecting with readers.',
        features: ['Full rights & royalty retention', 'Multi-platform distribution', 'ISBN assignment & registration', 'Amazon KDP & IngramSpark setup'],
      },
      {
        slug: 'digital-publishing',
        title: 'Digital Publishing',
        shortDescription: 'Publish your ebook across all major digital platforms — Kindle, Apple Books, Kobo, Google Play, and more — with optimized listings and metadata.',
        longDescription: 'Digital publishing opens your book to millions of readers on every device and platform without the costs of print production. Our digital publishing service manages the full technical pipeline — formatting, metadata optimization, category selection, and platform submission — across all major ebook retailers.\n\nWe ensure your ebook\'s metadata is optimized for discoverability, that your cover and preview pages make a strong first impression, and that your pricing strategy supports your sales goals.',
        features: ['All major ebook platforms', 'Metadata & category optimization', 'BISAC code assignment', 'Pricing strategy guidance'],
      },
      {
        slug: 'global-publishing',
        title: 'Global Publishing',
        shortDescription: 'Take your book international with global distribution to bookstores, libraries, and online retailers in over 150 countries worldwide.',
        longDescription: 'Global distribution expands your potential readership from thousands to millions. Our global publishing service places your book in international retail channels through IngramSpark\'s worldwide distribution network, ensuring availability in physical and digital stores across North America, Europe, Asia, Australia, and beyond.\n\nWe handle country-specific pricing, currency conversion, regional metadata requirements, and the legal considerations of international publishing, making your global launch as straightforward as a domestic one.',
        features: ['150+ country distribution', 'IngramSpark global network', 'Currency & pricing management', 'Library & institutional access'],
      },
    ],
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
    subServices: [
      {
        slug: 'social-media-marketing',
        title: 'Social Media Marketing',
        shortDescription: 'Build a loyal author following and generate buzz around your book with targeted social media content, campaigns, and audience growth strategies.',
        longDescription: 'Social media is where readers discover new books and authors build communities. Our social media marketing service creates and manages content across Instagram, Facebook, TikTok, and X — positioning you as an author worth following and your book as a must-read.\n\nWe develop a content calendar, create scroll-stopping graphics and captions, run targeted ads, and grow your following with authentic engagement strategies tailored to your book\'s genre and audience.',
        features: ['Platform strategy (Instagram, TikTok, FB, X)', 'Content calendar & creation', 'Paid ad campaign management', 'Audience growth & engagement'],
      },
      {
        slug: 'amazon-marketing',
        title: 'Amazon Marketing',
        shortDescription: 'Maximize your book\'s visibility on Amazon with optimized listings, A+ content, keyword targeting, and Amazon Ads management.',
        longDescription: 'Amazon accounts for the majority of book sales in most English-speaking markets. Our Amazon marketing service optimizes every element of your book\'s product page — title, subtitle, description, categories, and keywords — to improve organic ranking and conversion rate.\n\nWe also manage Amazon Advertising (Sponsored Products and Sponsored Brands) campaigns that put your book in front of readers who are actively searching for titles like yours, with ongoing optimization to maximize your advertising ROI.',
        features: ['Product page optimization', 'Keyword research & targeting', 'Amazon Ads (Sponsored Products)', 'A+ content creation'],
      },
      {
        slug: 'search-engine-optimization',
        title: 'Book SEO Services',
        shortDescription: 'Drive long-term organic traffic to your book\'s page, author website, and online presence with targeted search engine optimization strategies.',
        longDescription: 'Search engine optimization ensures readers can find you when they search for topics related to your book. Our book SEO service builds a keyword strategy around your title, genre, and subject matter — then implements that strategy across your Amazon listing, author website, and content to improve organic rankings.\n\nWe conduct competitor analysis, optimize on-page elements, build quality backlinks, and track rankings over time — delivering sustainable organic traffic that compounds month over month without ongoing ad spend.',
        features: ['Keyword research & strategy', 'On-page optimization', 'Author website SEO', 'Link building & authority'],
      },
      {
        slug: 'influencer-marketing',
        title: 'Influencer Marketing',
        shortDescription: 'Connect your book with book bloggers, BookTok creators, Bookstagram accounts, and genre influencers who can introduce it to their engaged audiences.',
        longDescription: 'Reader trust in peer recommendations is at an all-time high, and book influencers — whether on TikTok, Instagram, or dedicated review blogs — can introduce your book to thousands of targeted readers in a single post. Our influencer marketing service identifies, vets, and coordinates with the right voices for your genre.\n\nWe manage all outreach, negotiation, and campaign coordination, ensuring influencers receive your book and promotional brief while you receive authentic content and performance reporting.',
        features: ['Genre-targeted influencer matching', 'BookTok & Bookstagram outreach', 'Book blogger coordination', 'Campaign reporting & ROI tracking'],
      },
      {
        slug: 'content-marketing',
        title: 'Content Marketing',
        shortDescription: 'Build long-term author authority and reader trust with blog posts, articles, guest features, and content that keeps readers engaged between book launches.',
        longDescription: 'Content marketing builds the kind of reader relationship that turns one-time buyers into lifetime fans. Our content marketing service develops an editorial strategy around your author brand — then creates the articles, blog posts, newsletters, and guest contributions that establish you as an expert and keep your audience engaged.\n\nWell-executed content marketing compounds over time: each article builds search visibility, each newsletter deepens reader loyalty, and each guest post expands your reach into new audiences.',
        features: ['Editorial strategy & content calendar', 'Blog & article writing', 'Email newsletter management', 'Guest post placement'],
      },
      {
        slug: 'book-launch-marketing',
        title: 'Book Launch Marketing',
        shortDescription: 'Make your book launch a moment that drives reviews, sales velocity, and long-term momentum with a strategic, coordinated launch campaign.',
        longDescription: 'A book launch is your best opportunity to generate the reviews, sales rank, and visibility that carry a book through its entire sales life. Our book launch marketing service builds a launch timeline and coordinates every element — advance reader copies, review outreach, social media, email, and promotional pricing — into a cohesive campaign.\n\nWe work with you in the weeks leading up to your release date to ensure you launch with momentum: strong early reviews, media coverage, and a reader base that is primed and ready to buy on day one.',
        features: ['ARC distribution & review outreach', 'Launch timeline & coordination', 'Pre-order campaign setup', 'Day-one sales strategy'],
      },
    ],
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
    subServices: [
      {
        slug: 'author-website',
        title: 'Author Website Design',
        shortDescription: 'Launch a professional author website that showcases your books, builds your mailing list, and gives readers a permanent home to connect with you.',
        longDescription: 'Your author website is your most permanent online presence — the place readers go to learn more about you, discover your back catalog, and sign up for updates. Our author website design service creates a professional, fast-loading site tailored to your author brand and genre.\n\nEvery author website we build includes a book showcase, author bio, contact form, mailing list integration, and a blog ready to support your content marketing. We design for conversions — turning curious visitors into newsletter subscribers and book buyers.',
        features: ['Custom author brand design', 'Book showcase & catalog pages', 'Mailing list integration', 'Mobile-responsive & fast-loading'],
      },
      {
        slug: 'video-book-trailer',
        title: 'Video Book Trailer',
        shortDescription: 'Capture reader attention with a cinematic book trailer that brings your story\'s atmosphere and themes to life in 60–90 seconds.',
        longDescription: 'A well-produced book trailer is one of the most shareable pieces of marketing content an author can create. Our video production team creates atmospheric, professionally edited trailers that convey your book\'s genre, tone, and hook without spoiling the story.\n\nWe handle scripting, stock footage or illustration sourcing, voiceover, music licensing, and final editing — delivering a trailer optimized for YouTube, Instagram Reels, TikTok, and your website. Each trailer is designed to stop the scroll and prompt a book purchase.',
        features: ['60–90 second cinematic format', 'Voiceover & licensed music', 'Multi-platform optimization', 'Script & storyboard included'],
      },
      {
        slug: 'book-cover-design',
        title: 'Book Cover Design',
        shortDescription: 'Stand out in any bookstore or search result with a professionally designed cover that communicates your genre and stops readers mid-scroll.',
        longDescription: 'A great cover design is not decoration — it is your book\'s most powerful marketing tool. Our cover designers specialize in genre-accurate design that signals the right expectations to the right readers. Every concept is researched against the competitive landscape in your category to ensure your cover fits the genre while standing out from the crowd.\n\nWe deliver fully print-ready files including front cover, spine, and back cover with proper bleed and color profiles, plus a digital cover optimized for online thumbnail display.',
        features: ['Genre-accurate design research', 'Multiple initial concepts', 'Print & digital file delivery', 'Spine & back cover included'],
      },
      {
        slug: 'book-illustration',
        title: 'Book Illustration',
        shortDescription: 'Commission original illustrations for children\'s books, graphic novels, chapter headers, or any project that needs custom artwork.',
        longDescription: 'Illustration transforms a manuscript into a visual experience that readers remember long after the last page. Our illustrator network covers a wide range of styles — from whimsical watercolor for children\'s picture books to detailed line art for graphic novels and decorative interior illustrations for adult fiction.\n\nWe match your project with an illustrator whose style fits your vision, manage the creative brief and revision process, and deliver high-resolution files ready for print production and digital publication.',
        features: ['Style-matched illustrator matching', 'Children\'s book to graphic novel range', 'Print-ready high-resolution files', 'Revision rounds included'],
      },
    ],
  },
]

// FAQs data
export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What publishing services does Kingsley Direct Publishing offer?',
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

// Testimonials — DUMMY placeholder reviews. Replace with real Kingsley Direct
// Publishing client testimonials (and their book covers) before launch.
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Bennett',
    genre: "Children's",
    published: '03+',
    quote:
      'From my first rough draft to a finished book, the Kingsley Direct Publishing team guided me at every step. The editing was thorough and the cover design went beyond what I imagined. I could not be happier with the result.',
    amazonUrl: 'https://www.amazon.co.uk',
    photo: '/images/wrap-2-img.webp',
    bookCover: '/images/3d-book-cover (1).webp',
  },
  {
    id: '2',
    name: 'James Whitfield',
    genre: 'Fiction',
    published: '02+',
    quote:
      'A genuinely professional experience from start to finish. Clear communication, a beautiful layout, and my book was published on time. I would recommend Kingsley Direct Publishing to any first-time author.',
    amazonUrl: 'https://www.amazon.co.uk',
    photo: '/images/wrap-2-img.webp',
    bookCover: '/images/3d-book-cover (2).webp',
  },
  {
    id: '3',
    name: 'Aisha Khan',
    genre: 'Non-Fiction',
    published: '04+',
    quote:
      'They took the stress out of publishing. The team was responsive, patient with my revisions, and delivered a polished book I am proud to share. Wonderful support throughout the whole journey.',
    amazonUrl: 'https://www.amazon.co.uk',
    photo: '/images/wrap-2-img.webp',
    bookCover: '/images/3d-book-cover (3).webp',
  },
  {
    id: '4',
    name: 'Daniel Rowe',
    genre: 'Fantasy',
    published: '01+',
    quote:
      'Publishing my book felt daunting until I worked with Kingsley Direct Publishing. Their design and marketing help made all the difference, and the whole process was smooth and transparent.',
    amazonUrl: 'https://www.amazon.co.uk',
    photo: '/images/wrap-2-img.webp',
    bookCover: '/images/3d-book-cover (4).webp',
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
