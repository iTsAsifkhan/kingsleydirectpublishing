import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CalendarDays, Clock } from 'lucide-react'
import { Container } from '@/components/ui'
import { getAllPosts } from '@/lib/blog'
import { breadcrumbSchema } from '@/lib/schema'

const SITE_URL = 'https://kimberleydirectpublishing.com'

export const metadata: Metadata = {
  title: 'Publishing Blog',
  description:
    'The Kimberley Journal — practical, no-fluff guides on writing, editing, self-publishing, and marketing your book, drawn from real author projects.',
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    title: 'The Kimberley Journal | Book Publishing Blog',
    description:
      'Practical guides on writing, editing, self-publishing, and marketing your book — from the team at Kimberley Direct Publishing.',
    url: `${SITE_URL}/blogs`,
    type: 'website',
  },
}

const accentChip: Record<string, string> = {
  navy: 'border-brand-navy/30 bg-brand-navy/10 text-brand-navy',
  yellow: 'border-brand-yellow/40 bg-brand-yellow/10 text-brand-yellow-dark',
  teal: 'border-[#155e66]/30 bg-[#155e66]/10 text-[#0d3b40]',
}

export default function BlogsPage() {
  const posts = getAllPosts()

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The Kimberley Journal',
    url: `${SITE_URL}/blogs`,
    description:
      'Practical guides on writing, editing, self-publishing, and marketing your book.',
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `${SITE_URL}/blogs/${post.slug}`,
      author: { '@type': 'Organization', name: 'Kimberley Direct Publishing' },
    })),
  }

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blogs` },
  ])

  const [featured, ...rest] = posts

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([listSchema, breadcrumb]) }}
      />

      <Container>
        <section className="pt-40 pb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow-dark">
            The Kimberley Journal
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight text-brand-navy sm:text-5xl">
            Publishing guides that actually help
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-gray-2">
            Practical, no-fluff advice on writing, editing, self-publishing, and marketing your
            book — drawn from real author projects, from first draft to global launch.
          </p>
        </section>

        {/* Featured post */}
        <section className="pb-6">
          <Link
            href={`/blogs/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-brand-navy/10 shadow-[0px_13px_37px_rgb(0_0_0_/_6%)] transition-shadow hover:shadow-[0px_20px_50px_rgb(0_0_0_/_10%)] md:grid-cols-2"
          >
            <div
              className={`flex min-h-[220px] flex-col justify-end bg-gradient-to-br p-8 text-white ${
                featured.accent === 'navy'
                  ? 'from-brand-navy to-[#2a1170]'
                  : featured.accent === 'yellow'
                    ? 'from-[#7a5400] to-[#a06f00]'
                    : 'from-[#0d3b40] to-[#155e66]'
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Latest article
              </span>
              <span className="mt-2 font-heading text-2xl font-bold leading-snug">
                {featured.title}
              </span>
            </div>
            <div className="flex flex-col justify-center gap-4 bg-white p-8">
              <span
                className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold ${accentChip[featured.accent]}`}
              >
                {featured.category}
              </span>
              <p className="text-base leading-relaxed text-brand-gray-2">{featured.excerpt}</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-brand-gray-3">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={15} aria-hidden="true" />
                  <time dateTime={featured.date}>{featured.dateLabel}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} aria-hidden="true" />
                  {featured.readingTime}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-yellow-dark">
                Read article
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </section>

        {/* Remaining posts */}
        <section className="grid gap-6 pb-20 sm:grid-cols-2">
          {rest.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-[0px_13px_37px_rgb(0_0_0_/_6%)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`flex min-h-[130px] items-end bg-gradient-to-br p-6 text-white ${
                  post.accent === 'navy'
                    ? 'from-brand-navy to-[#2a1170]'
                    : post.accent === 'yellow'
                      ? 'from-[#7a5400] to-[#a06f00]'
                      : 'from-[#0d3b40] to-[#155e66]'
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h2 className="font-heading text-lg font-semibold leading-snug text-brand-navy">
                  <Link href={`/blogs/${post.slug}`} className="hover:text-brand-yellow-dark">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm leading-relaxed text-brand-gray-2">{post.excerpt}</p>
                <div className="mt-auto flex items-center gap-x-5 gap-y-1 pt-2 text-xs text-brand-gray-3">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={14} aria-hidden="true" />
                    <time dateTime={post.date}>{post.dateLabel}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} aria-hidden="true" />
                    {post.readingTime}
                  </span>
                </div>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-navy transition-colors hover:text-brand-yellow-dark"
                  aria-label={`Read ${post.title}`}
                >
                  Read article
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </main>
  )
}
