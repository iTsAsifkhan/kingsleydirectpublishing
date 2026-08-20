/**
 * Blog content, single source of truth for /blogs and /blogs/[slug].
 *
 * Posts are stored as structured blocks (not raw HTML) so the renderer can
 * output a clean semantic heading hierarchy (one h1 = post title, h2/h3 for
 * sections) and keep the visible copy identical to the FAQPage JSON-LD.
 */

export interface BlogTableRow {
  /** First-column label. If `href` is set, it renders as an internal link. */
  label: string
  href?: string
  /** Remaining column values, in order. */
  cells: string[]
}

export interface BlogTable {
  columns: string[] // header cells, including the label column header
  rows: BlogTableRow[]
  /** Optional note rendered under the table (e.g. a pricing disclaimer). */
  note?: string
}

export interface BlogSection {
  heading: string // rendered as <h2>
  paragraphs?: string[]
  list?: { ordered?: boolean; items: string[] }
  /** Optional table; row labels can link internally (used as a link engine). */
  table?: BlogTable
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
    slug: 'self-publishing-uk-guide',
    title: 'Self-Publishing in the UK: The Complete 2026 Guide',
    metaTitle: 'Self-Publishing in the UK: Complete 2026 Guide',
    description:
      'The complete 2026 guide to self-publishing in the UK: costs in £, Nielsen vs free ISBNs, legal deposit, HMRC tax on royalties, VAT, and UK distribution.',
    primaryKeyword: 'self publishing UK',
    excerpt:
      'UK costs in £, Nielsen vs free KDP ISBNs, British Library legal deposit, HMRC and VAT on royalties, and how to get a self-published book into UK shops and libraries.',
    category: 'Self-Publishing',
    accent: 'teal',
    featuredImage: '/images/self-publishing-uk.webp',
    featuredImageAlt:
      'A printed book manuscript, laptop, pen, and cup of coffee on a wooden writer’s desk',
    author: 'The Kimberley Editorial Team',
    date: '2026-08-20',
    dateLabel: '20 August 2026',
    readingTime: '14 min read',
    intro: [
      'Self-publishing in the UK in 2026 is more accessible than it has ever been, but the practical details, ISBNs, legal deposit, tax, and distribution, work differently here than the mostly US-focused advice you will find online. This guide is written specifically for UK authors, and covers the things a generic “how to self-publish” article skips.',
      'If you want the platform-agnostic, step-by-step basics of taking a manuscript to a finished book, start with our general guide to self-publishing a book. This one goes deeper on what is uniquely British: buying Nielsen ISBNs, meeting the British Library legal-deposit requirement, declaring royalties to HMRC, VAT on ebooks, pricing in pounds, and getting your book onto UK shelves and into UK libraries.',
    ],
    sections: [
      {
        heading: 'UK self-publishing in 2026, at a glance',
        paragraphs: [
          'The core route for most UK authors is unchanged: prepare a professional manuscript, commission editing and a cover, format for print and ebook, then distribute through Amazon KDP and a wider network such as IngramSpark. What has shifted in recent years is the tax and pricing picture, which now works clearly in UK authors’ favour.',
          'The single biggest change is VAT on ebooks. Since 1 May 2020, ebooks in the UK are zero-rated for VAT, matching printed books, which have always been VAT-free. In practical terms your ebook price is no longer inflated by 20% VAT, so your pricing and margins improved overnight. The rest of the journey, ISBNs, legal deposit, HMRC, distribution, is stable but full of UK-specific detail worth getting right.',
        ],
      },
      {
        heading: 'UK self-publishing costs in pounds',
        paragraphs: [
          'Costs vary with your book’s length and the quality you are aiming for, but the shape of a UK self-publishing budget is predictable. The table below gives realistic 2026 ranges in £. Each service links to the relevant page so you can see what the work involves.',
        ],
        table: {
          columns: ['Cost', 'Typical UK range (£)', 'Notes'],
          rows: [
            {
              label: 'Editing',
              href: '/services/editing',
              cells: ['£500–£2,500+', 'Depends on word count and depth (proofread vs full edit)'],
            },
            {
              label: 'Cover design',
              href: '/services/cover-design',
              cells: ['£150–£1,200', 'Template at the low end, bespoke print wraparound higher'],
            },
            {
              label: 'Formatting',
              href: '/services/editing/book-formatting',
              cells: ['£100–£600', 'Print-ready PDF and reflowable ebook are separate files'],
            },
            {
              label: 'ISBNs (Nielsen)',
              cells: ['£0–£169', 'Free from KDP, or bought from Nielsen (cheaper in blocks)'],
            },
            {
              label: 'Printing (POD)',
              cells: ['Per-copy, no upfront', 'You pay print cost per book sold or ordered'],
            },
            {
              label: 'Marketing reserve',
              href: '/services/marketing',
              cells: ['£300+', 'Website, ads, launch, set aside from the start'],
            },
          ],
          note: 'Ranges are indicative of the wider UK market, not a fixed quote. A bundled publishing package usually works out cheaper and simpler than buying each service separately.',
        },
      },
      {
        heading: 'ISBNs in the UK: Nielsen vs the free KDP ISBN',
        paragraphs: [
          'An ISBN is the unique identifier that lets shops, libraries, and wholesalers order and track your book. In the UK, ISBNs are issued by Nielsen, and you have two realistic options.',
          'The free route: Amazon KDP gives you a free ISBN for paperbacks and hardbacks. It costs nothing and is fine if you only ever plan to sell through Amazon, but Amazon is listed as the publisher of record, and the ISBN is tied to KDP, so you cannot use it for wider distribution.',
          'The Nielsen route: buying your own ISBN from Nielsen makes you the publisher of record and lets you use the same identifier across every platform and distributor. A single ISBN costs around £91, but Nielsen sells them far more cheaply in blocks (a block of 10 is roughly £169), which matters because you need a separate ISBN for each format, paperback, hardback, and, if you assign one, ebook. If you plan more than one book or more than one format, a block quickly pays for itself.',
        ],
        table: {
          columns: ['Option', 'Cost', 'Best for'],
          rows: [
            {
              label: 'Free KDP ISBN',
              cells: ['£0', 'Amazon-only publishing, first-time authors testing the water'],
            },
            {
              label: 'Own Nielsen ISBN',
              href: '/services/publishing/self-publishing',
              cells: ['~£91 single / ~£169 for 10', 'Wide distribution, being your own publisher of record'],
            },
          ],
          note: 'Check Nielsen for current pricing; ISBN prices change. Amazon ebooks use an ASIN rather than an ISBN, so you only need an ISBN for an ebook if you distribute it beyond Amazon.',
        },
      },
      {
        heading: 'Legal deposit: the British Library requirement',
        paragraphs: [
          'This is the step most self-published UK authors have never heard of, and it is a legal obligation. Under the Legal Deposit Libraries Act 2003, you must send one copy of any printed book published in the UK to the British Library within one month of publication. It applies to self-published books exactly as it does to traditional ones.',
          'Beyond the British Library, five further legal-deposit libraries are entitled to request a copy within twelve months of publication: the Bodleian Libraries (Oxford), Cambridge University Library, the National Library of Scotland, the National Library of Wales, and the Library of Trinity College Dublin. You do not post to each one individually, requests are handled centrally through the Agency for the Legal Deposit Libraries, so you send a single copy on request and they distribute it.',
          'Ebooks are covered too, under separate non-print legal-deposit regulations, though for most self-publishers the practical action is simply sending that one print copy to the British Library. It is a small cost and effort, and it puts your book into the national published record, which is no bad thing for a serious author.',
        ],
      },
      {
        heading: 'Tax and royalties for UK authors',
        paragraphs: [
          'Money you earn from your book is taxable income, and there are three UK-specific things to get right. A quick, important disclaimer first: we are publishers, not tax advisers. The following is general information, not advice, check your own situation with a qualified accountant or HMRC.',
        ],
        list: {
          items: [
            'HMRC Self Assessment: royalties are taxable and are normally declared through Self Assessment. If your total royalty (and other untaxed) income is below the £1,000 trading allowance, you may not need to declare it; above that, you register with HMRC and file a return.',
            'US withholding tax on Amazon royalties: by default the US withholds 30% tax on royalties paid to non-US authors. As a UK resident, the UK–US tax treaty lets you reduce that to 0%, you claim it by completing KDP’s online tax interview (which has largely replaced the old paper W-8BEN form). Do this before you publish, or you lose 30% of your US sales unnecessarily.',
            'VAT on ebooks: since May 2020 UK ebooks are zero-rated, the same as print books, so VAT no longer eats into your ebook pricing. You only need to think about VAT registration at all if your total taxable turnover crosses the registration threshold, which is unusual for most individual authors.',
          ],
        },
      },
      {
        heading: 'Distribution: getting a UK book onto shelves',
        paragraphs: [
          'Selling on Amazon is the easy part. Reaching UK bookshops, wholesalers, and libraries takes a little more setup, and this is where owning your ISBN and choosing the right distributor pays off.',
        ],
        list: {
          items: [
            'Amazon KDP (amazon.co.uk): the default for UK ebook and paperback sales, with print-on-demand fulfilment in the UK.',
            'IngramSpark: the key to wider reach. It feeds your book into the trade distribution network, including UK wholesalers, so bookshops and libraries can order it.',
            'Gardners: the UK’s largest book wholesaler. Titles available through Ingram/Gardners can be ordered by most UK shops, which is how a self-published book becomes orderable at a Waterstones or independent.',
            'Nielsen BookData: registering your title’s metadata with Nielsen means it shows up when a shop or library searches the UK book database, essential for discoverability in the trade.',
            'Independent bookshops: local shops will often take a few copies on consignment, especially from local authors, a direct, personal route that Amazon can’t replicate.',
          ],
        },
      },
      {
        heading: 'Print-on-demand vs offset printing in the UK',
        paragraphs: [
          'Print-on-demand (POD) prints each book as it is ordered, so there is no upfront print bill and no stock to store, the model behind Amazon KDP and IngramSpark. The trade-off is a higher cost per copy. Offset printing runs hundreds or thousands of copies at once, giving a much lower per-unit cost but a large upfront outlay and a garage full of boxes.',
          'For most UK self-publishers, POD is the right starting point: it removes risk and matches supply to real demand. Offset only makes financial sense once you are confident of selling in volume, the crossover point is typically somewhere between 500 and 1,000 copies, depending on specification. A sensible approach is to launch on POD, prove demand, and only consider an offset run if your sales justify it.',
        ],
      },
      {
        heading: 'Marketing to UK readers',
        paragraphs: [
          'A UK book benefits from UK-specific promotion, not just generic Amazon tactics. A few routes that work particularly well here:',
        ],
        list: {
          items: [
            'UK book bloggers, Bookstagram, and BookTok: a strong review-blogger and social community here, often organised by genre, that can drive early reviews and word of mouth.',
            'UK indie-friendly book awards: prizes and awards open to self-published and independent authors add credibility and press-worthy angles.',
            'Local press and radio: regional papers and BBC local radio are often keen to feature a local author, an angle national outlets ignore.',
            'Library requests: readers can ask their local library to stock your book, and if your metadata is in the Nielsen/Gardners system, the library can order it, putting you in front of borrowers.',
            'An author website and mailing list: your owned platform, the one channel no algorithm can switch off.',
          ],
        },
      },
      {
        heading: 'DIY vs a UK publishing partner',
        paragraphs: [
          'You can do all of this yourself, and plenty of authors do. The honest question is whether your time is better spent learning distribution logistics and tax admin, or writing your next book. Here is a straight comparison.',
        ],
        table: {
          columns: ['Factor', 'Do it yourself', 'With a publishing partner'],
          rows: [
            {
              label: 'Upfront cost',
              cells: ['Lower', 'Higher, but bundled and predictable'],
            },
            {
              label: 'Your time',
              cells: ['High, you manage every supplier', 'Low, one point of contact'],
            },
            {
              label: 'Quality risk',
              cells: ['On you to vet editors, designers, printers', 'Managed to a professional standard'],
            },
            {
              label: 'Distribution & admin',
              href: '/services/publishing/global-publishing',
              cells: ['You set up ISBNs, deposit, distribution', 'Handled for you'],
            },
            {
              label: 'Rights & royalties',
              href: '/services/publishing/self-publishing',
              cells: ['100% yours', '100% yours, a good partner never takes your rights'],
            },
          ],
          note: 'The right choice depends on how hands-on you want to be. Either way, insist on keeping full ownership of your rights and royalties, that is the whole point of self-publishing.',
        },
      },
    ],
    keyTakeaways: [
      'UK ebooks have been zero-rated for VAT since May 2020, the same as print books.',
      'Buy your own Nielsen ISBN (cheaper in blocks) if you want wide distribution; the free KDP ISBN ties you to Amazon.',
      'Legal deposit is a legal requirement: send one copy to the British Library within a month of publishing.',
      'Declare royalties via HMRC Self Assessment, and complete KDP’s tax interview to cut US withholding from 30% to 0%.',
      'Start on print-on-demand; only consider an offset run once you are selling in volume.',
    ],
    faqs: [
      {
        question: 'How much does it cost to self-publish a book in the UK?',
        answer:
          'A realistic UK budget usually runs from a few hundred pounds to a few thousand, driven mainly by editing and cover design. ISBNs and print-on-demand printing are minor by comparison, and you can control the total by choosing which services you pay for.',
      },
      {
        question: 'Do I need an ISBN to self-publish in the UK?',
        answer:
          'For a paperback or hardback, yes, though Amazon KDP provides one free if you only sell through Amazon. To distribute widely and be your own publisher of record, buy your own ISBN from Nielsen. Amazon ebooks use an ASIN, so an ebook only needs an ISBN if you sell it beyond Amazon.',
      },
      {
        question: 'How much does a UK ISBN cost?',
        answer:
          'A single ISBN from Nielsen costs around £91, but they are much cheaper bought in blocks, roughly £169 for ten. Since you need a separate ISBN for each format, a block is usually the better value if you publish more than one book or format. Check Nielsen for current pricing.',
      },
      {
        question: 'Do self-published books need to go to the British Library?',
        answer:
          'Yes. UK legal-deposit law requires you to send one copy of any printed book to the British Library within one month of publication, and this applies to self-published titles. Five other legal-deposit libraries can request a copy within a year, handled centrally through the Agency for the Legal Deposit Libraries.',
      },
      {
        question: 'Do I pay tax on book royalties in the UK?',
        answer:
          'Yes, royalties are taxable income, normally declared through HMRC Self Assessment. If your untaxed income is under the £1,000 trading allowance you may not need to declare it. This is general information, not tax advice, check your situation with an accountant.',
      },
      {
        question: 'How do I avoid the 30% US tax on Amazon royalties?',
        answer:
          'Complete KDP’s online tax interview before publishing. As a UK resident you can claim relief under the UK–US tax treaty, which reduces US withholding on your royalties from 30% to 0%. The online interview has largely replaced the old paper W-8BEN form.',
      },
      {
        question: 'Is there VAT on ebooks in the UK?',
        answer:
          'No. Since May 2020, ebooks in the UK are zero-rated for VAT, the same as printed books. That means VAT no longer inflates your ebook price or reduces your margin.',
      },
      {
        question: 'Can I get a self-published book into Waterstones or indie bookshops?',
        answer:
          'It is possible. If your book is available through IngramSpark and the Gardners wholesale network, UK shops can order it. Independent bookshops will often take a few copies on consignment, especially from local authors. Getting stocked is never guaranteed, but being orderable is the essential first step.',
      },
      {
        question: 'Which is better, print-on-demand or offset printing?',
        answer:
          'For most UK self-publishers, print-on-demand, because there is no upfront cost or stock to store. Offset printing only becomes cheaper per copy at higher volumes, typically somewhere between 500 and 1,000 copies, so it suits authors already selling in quantity.',
      },
      {
        question: 'What are the best self-publishing companies in the UK?',
        answer:
          'Look for a partner that keeps you in full control of your rights and royalties, is transparent about pricing, and can handle editing, design, publishing, and UK distribution. Avoid any arrangement that takes ownership of your book in exchange for “publishing” it.',
      },
    ],
    related: [
      { label: 'our self-publishing services', href: '/services/publishing/self-publishing' },
      { label: 'global distribution', href: '/services/publishing/global-publishing' },
      { label: 'publishing packages and pricing', href: '/packages' },
    ],
  },
  {
    slug: 'how-much-does-a-ghostwriter-cost',
    title: 'How Much Does a Ghostwriter Cost? UK & US Pricing (2026)',
    metaTitle: 'How Much Does a Ghostwriter Cost? (2026)',
    description:
      'How much does a ghostwriter cost in 2026? A clear breakdown of ghostwriting rates by word, hour, and project, UK and US ranges, and what changes the price.',
    primaryKeyword: 'how much does a ghostwriter cost',
    excerpt:
      'Ghostwriting rates by word, hour, and project, realistic UK and US ranges by book type, what actually moves the price, and how to budget without overpaying.',
    category: 'Ghostwriting',
    accent: 'navy',
    featuredImage: '/images/ghostwriter-cost.webp',
    featuredImageAlt:
      'A writer making handwritten notes in a notebook while working at a laptop, with a cup of coffee on a bright desk',
    author: 'The Kimberley Editorial Team',
    date: '2026-08-19',
    dateLabel: '19 August 2026',
    readingTime: '11 min read',
    intro: [
      'Short answer: most full-length books cost between roughly £8,000 and £40,000 (about $10,000 to $50,000) to ghostwrite in 2026. Shorter projects, an ebook, a children’s book, a lead-magnet guide, can start nearer £1,000 to £6,000, while a long, research-heavy memoir or business book from an experienced writer can run higher still.',
      'That is a wide range, and the width is the whole point: “a ghostwriter” can mean a first-timer writing a short ebook or a career professional producing a 100,000-word novel. What you pay depends on length, genre, how much research and interviewing is involved, and the writer’s track record. This guide breaks the number down properly, by pricing model, by book type, and by the factors that quietly move your quote up or down, so you can budget with confidence instead of guessing from a single headline figure.',
    ],
    sections: [
      {
        heading: 'The four ways ghostwriters charge',
        paragraphs: [
          'Before comparing quotes, it helps to know which pricing model a writer is using, because the same book can look cheap or expensive depending on how the fee is structured. Most ghostwriters price one of four ways.',
        ],
        table: {
          columns: ['Pricing model', 'Typical 2026 range', 'Best suited to'],
          rows: [
            {
              label: 'Per word',
              cells: ['£0.40–£1.50 / $0.50–$2.00 per word', 'Projects with a clear, agreed length'],
            },
            {
              label: 'Per project (flat fee)',
              cells: ['£8,000–£40,000 / $10,000–$50,000', 'Full-length books, the most common model'],
            },
            {
              label: 'Per hour',
              cells: ['£40–£120 / $50–$150 per hour', 'Coaching, partial drafts, consulting'],
            },
            {
              label: 'Royalty share / hybrid',
              cells: ['Reduced fee plus a share of royalties', 'Authors with a strong platform or sales potential'],
            },
          ],
          note: 'Per-word and per-project figures usually describe the same work from different angles: a 70,000-word book at £0.60 per word is roughly a £42,000 project. Always confirm which model a quote uses before comparing.',
        },
      },
      {
        heading: 'Ghostwriting cost by book type',
        paragraphs: [
          'The single biggest driver of price is what kind of book you are writing, because genre determines length, research burden, and how specialised the writer needs to be. The table below gives indicative 2026 market ranges by book type. Each book type links to the service that produces it, so you can see exactly what the work involves.',
        ],
        table: {
          columns: ['Book type', 'Typical length', 'Indicative project range (£ / $)'],
          rows: [
            {
              label: 'Book writing (general)',
              href: '/services/ghostwriting/book-writing',
              cells: ['40k–90k words', '£8,000–£35,000 / $10,000–$45,000'],
            },
            {
              label: 'Ebook',
              href: '/services/ghostwriting/e-book-writing',
              cells: ['8k–25k words', '£1,000–£6,000 / $1,500–$8,000'],
            },
            {
              label: 'Fiction',
              href: '/services/ghostwriting/fiction-writing',
              cells: ['60k–100k words', '£10,000–£40,000 / $12,000–$50,000'],
            },
            {
              label: 'Full-length novel',
              href: '/services/ghostwriting/novel-writing',
              cells: ['60k–100k words', '£10,000–£40,000 / $12,000–$50,000'],
            },
            {
              label: 'Fantasy novel',
              href: '/services/ghostwriting/fantasy-writing',
              cells: ['80k–120k words', '£12,000–£45,000 / $15,000–$55,000'],
            },
            {
              label: 'Non-fiction',
              href: '/services/ghostwriting/non-fiction-writing',
              cells: ['40k–70k words', '£8,000–£30,000 / $10,000–$40,000'],
            },
            {
              label: 'Autobiography / memoir',
              href: '/services/ghostwriting/autobiography-writing',
              cells: ['50k–90k words', '£10,000–£35,000 / $12,000–$45,000'],
            },
            {
              label: 'Screenplay',
              href: '/services/ghostwriting/screenplay-writing',
              cells: ['90–120 pages', '£5,000–£20,000 / $7,000–$25,000'],
            },
            {
              label: "Children's book",
              href: '/services/ghostwriting/children-book-writing',
              cells: ['500–10k words', '£1,500–£7,000 / $2,000–$9,000'],
            },
          ],
          note: 'These are indicative of the wider 2026 ghostwriting market, not a fixed quote. Your actual cost depends on scope, length, and research, so treat them as planning figures and ask for a firm price once your project is defined.',
        },
      },
      {
        heading: 'What actually moves the price',
        paragraphs: [
          'Two books of the same length can be quoted thousands of pounds apart. These are the factors that explain the gap, and the ones worth discussing openly before you sign anything.',
        ],
        list: {
          items: [
            'Length: the clearest driver. More words means more hours, whichever pricing model is used.',
            'Research burden: a book built from your own knowledge is faster than one requiring source research, fact-checking, or subject-matter expertise.',
            'Interview time: memoirs and business books need hours of interviews to capture your voice and story, which adds to the writer’s time.',
            'Writer experience: an established ghostwriter with published, well-reviewed titles commands more than a newcomer, and usually needs fewer revisions to get there.',
            'Revision rounds: more included rounds cost more up front but protect you from open-ended extra fees later.',
            'Rights and confidentiality: full rights transfer and a strict non-disclosure agreement are standard for quality work and are priced in, not bolted on.',
          ],
        },
      },
      {
        heading: 'UK vs US ghostwriting rates',
        paragraphs: [
          'Rates are broadly comparable across the UK and US once you account for the exchange rate, but there are differences worth knowing. US project quotes often sit at the higher end in absolute terms, partly because the market is larger and more competitive at the premium tier. UK writers frequently quote in a similar band once converted, though VAT may apply to UK invoices where the US equivalent would not.',
          'What matters more than geography is matching the writer to the work. A UK-based ghostwriter who specialises in memoir will serve a memoir better than a cheaper generalist overseas, regardless of currency. If your book has a specific regional audience, a British business book, say, a writer who understands that market and its idiom is worth more than a marginal saving on rate.',
        ],
      },
      {
        heading: 'What’s included, and what’s an add-on',
        paragraphs: [
          'A ghostwriting fee usually covers the manuscript itself, the writing. Turning that manuscript into a finished, published book involves several further steps that are often quoted separately. Knowing this up front stops the “but I thought that was included” conversation later.',
        ],
        table: {
          columns: ['Service', 'Usually in the ghostwriting fee?', 'Why it matters'],
          rows: [
            {
              label: 'The manuscript',
              cells: ['Yes', 'The core deliverable, your finished draft'],
            },
            {
              label: 'Editing & proofreading',
              href: '/services/editing',
              cells: ['Sometimes', 'Even a ghostwritten draft needs an independent editorial pass'],
            },
            {
              label: 'Book formatting',
              href: '/services/editing/book-formatting',
              cells: ['Sometimes', 'Print and ebook files are produced separately'],
            },
            {
              label: 'Cover design',
              href: '/services/cover-design',
              cells: ['Rarely', 'Usually a distinct commission'],
            },
            {
              label: 'Publishing & distribution',
              href: '/services/publishing',
              cells: ['Rarely', 'Getting the finished book on sale is its own stage'],
            },
          ],
          note: 'If you would rather not manage these stages separately, a bundled publishing package folds writing, editing, design, and distribution into one predictable price.',
        },
      },
      {
        heading: 'Red flags of underpriced ghostwriting',
        paragraphs: [
          'If a quote looks too good to be true, it usually is. A full-length, professionally written book is hundreds of hours of skilled work, and the price has to reflect that. Be cautious when you see:',
        ],
        list: {
          items: [
            'The £500 book: no professional writes a quality full-length manuscript for a few hundred pounds. Something is being cut, usually the writing itself.',
            'AI-generated drafts sold as bespoke ghostwriting: fine as a tool, not fine when it is quietly the whole product you paid a premium for.',
            'No contract: without a written agreement covering scope, milestones, and rights, you have no protection if the work falls short.',
            'No rights transfer: if the contract does not clearly assign you full ownership and copyright, you may not actually own the book you paid for.',
            'No revisions or vague revision terms: “revisions included” with no number defined can mean one token pass, or an argument later.',
          ],
        },
      },
      {
        heading: 'How to budget: a worked example',
        paragraphs: [
          'Say you want a 60,000-word business book, written from a series of interviews, with two revision rounds. At a mid-market project rate, the ghostwriting alone might land around £14,000 to £22,000 ($18,000 to $28,000). To publish it properly, add an editorial pass, formatting, a cover, and distribution setup, another few thousand pounds depending on choices.',
          'A realistic all-in budget for a professionally written and published business book of that length therefore sits in the region of £18,000 to £28,000. You can spend less by writing more of the first draft yourself and using a ghostwriter for structure and polish, or more by commissioning a top-tier writer and a full marketing campaign. The point is to plan the whole journey, not just the writing, from the start.',
        ],
      },
    ],
    keyTakeaways: [
      'Most full-length books cost roughly £8,000–£40,000 ($10,000–$50,000) to ghostwrite; short ebooks and children’s books can start much lower.',
      'Ghostwriters charge per word, per project, per hour, or on a royalty-share basis, confirm which model a quote uses before comparing.',
      'Book type, length, research, and writer experience are the biggest price drivers.',
      'The ghostwriting fee usually covers the manuscript only; budget separately for editing, design, and publishing.',
      'Treat suspiciously cheap quotes, missing contracts, and unclear rights transfer as red flags.',
    ],
    faqs: [
      {
        question: 'How much does it cost to hire a ghostwriter for a book?',
        answer:
          'For a full-length book, expect roughly £8,000 to £40,000 (about $10,000 to $50,000) in 2026, depending on length, genre, research, and the writer’s experience. Shorter projects such as ebooks or children’s books can cost considerably less.',
      },
      {
        question: 'What is the average ghostwriter cost per word?',
        answer:
          'Per-word rates typically run from about £0.40 to £1.50 ($0.50 to $2.00). Experienced writers and research-heavy projects sit at the higher end; simpler, shorter work sits lower.',
      },
      {
        question: 'Why are ghostwriters so expensive?',
        answer:
          'A professionally written full-length book is hundreds of hours of skilled work, research, interviews, drafting, and revision, plus the writer’s experience in shaping a manuscript readers finish. The fee reflects that time and craft, not just the word count.',
      },
      {
        question: 'Is it cheaper to write the book myself?',
        answer:
          'Writing it yourself has no writing fee, but it costs time and often stalls. A middle path is to draft what you can and hire a ghostwriter for structure, rewriting, and polish, which usually costs less than a full ghostwrite.',
      },
      {
        question: 'Do I own the book after a ghostwriter writes it?',
        answer:
          'With a proper agreement, yes. Reputable ghostwriting assigns you full rights and copyright, and your name goes on the cover. Always confirm the rights transfer is spelled out in the contract before work begins.',
      },
      {
        question: 'How long does it take to ghostwrite a book?',
        answer:
          'A full-length book typically takes three to nine months, depending on length, research, interview scheduling, and revision rounds. Shorter books and ebooks can be faster.',
      },
      {
        question: 'What is a royalty-share ghostwriting deal?',
        answer:
          'Instead of a full upfront fee, the writer takes a reduced fee plus a percentage of future royalties. It lowers your initial cost but shares your earnings, and works best when the book has strong sales potential and an author platform behind it.',
      },
      {
        question: 'Does the ghostwriting fee include editing and publishing?',
        answer:
          'Usually not. The fee generally covers the manuscript itself. Editing, formatting, cover design, and publishing are typically quoted separately, or bundled together in a publishing package.',
      },
    ],
    related: [
      { label: 'our ghostwriting services', href: '/services/ghostwriting' },
      { label: 'book writing', href: '/services/ghostwriting/book-writing' },
      { label: 'publishing packages and pricing', href: '/packages' },
    ],
  },
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
    featuredImage: '/images/scene-open-book-fanned.webp',
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
    featuredImage: '/images/scene-reading-desk.webp',
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
    featuredImage: '/images/scene-reading-lamp.webp',
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
