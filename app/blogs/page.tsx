import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CalendarDays, Clock } from 'lucide-react'
import { Container } from '@/components/ui'
import { getAllPosts } from '@/lib/blog'
import { breadcrumbSchema } from '@/lib/schema'

const SITE_URL = 'https://kimberleydirectpublishing.com'

export const metadata: Metadata = {
  title: 'Publishing Blog',
  description:
    'The Kimberley Journal: practical, no-fluff guides on writing, editing, self-publishing, and marketing your book, drawn from real author projects.',
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    title: 'The Kimberley Journal | Book Publishing Blog',
    description:
      'Practical guides on writing, editing, self-publishing, and marketing your book, from the team at Kimberley Direct Publishing.',
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([listSchema, breadcrumb]),
        }}
      />

      <Container>
        <section className="mx-auto flex max-w-3xl flex-col items-center pt-40 pb-12 text-center sm:pt-44 sm:pb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow-dark">
            The Kimberley Journal
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight text-brand-navy sm:text-5xl">
            Publishing guides that actually help
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-gray-2">
            Practical, no-fluff advice on writing, editing, self-publishing, and
            marketing your book, drawn from real author projects, from first
            draft to global launch.
          </p>
        </section>

        {/* Featured post */}
        <section className="pb-8 sm:pb-10">
          <Link
            href={`/blogs/${featured.slug}`}
            className="group grid overflow-hidden rounded-[28px] border border-brand-navy/10 bg-white shadow-[0px_18px_55px_rgb(0_48_96_/_10%)] transition duration-300 hover:-translate-y-1 hover:shadow-[0px_28px_70px_rgb(0_48_96_/_16%)] lg:grid-cols-[1.12fr_0.88fr]"
          >
            <div className="relative min-h-[320px] overflow-hidden bg-brand-navy sm:min-h-[380px] lg:min-h-[470px]">
              <Image
                src={featured.featuredImage}
                alt={featured.featuredImageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/68 via-brand-navy/18 to-transparent" />
              <span className="absolute left-6 top-6 inline-flex items-center rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0px_10px_30px_rgb(0_0_0_/_18%)] backdrop-blur-sm sm:left-8 sm:top-8">
                Latest article
              </span>
            </div>
            <div className="flex flex-col justify-center bg-white p-7 sm:p-9 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex w-fit items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold ${accentChip[featured.accent]}`}
                >
                  {featured.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-brand-gray-3">
                  <Clock size={15} aria-hidden="true" />
                  {featured.readingTime}
                </span>
              </div>

              <h2 className="mt-5 font-heading text-2xl font-bold leading-tight text-brand-navy sm:text-3xl lg:text-[2.25rem]">
                {featured.title}
              </h2>

              <p className="mt-5 text-base leading-relaxed text-brand-gray-2 sm:text-lg">
                {featured.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-gray-3">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={15} aria-hidden="true" />
                  <time dateTime={featured.date}>{featured.dateLabel}</time>
                </span>
                <span>{featured.author}</span>
              </div>

              <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-brand-navy px-5 py-3 font-heading text-sm font-semibold text-white transition-colors group-hover:bg-brand-yellow-dark">
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
              className="group flex flex-col overflow-hidden rounded-[22px] border border-brand-navy/10 bg-white shadow-[0px_12px_34px_rgb(0_48_96_/_8%)] transition duration-300 hover:-translate-y-1 hover:shadow-[0px_20px_48px_rgb(0_48_96_/_13%)]"
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-brand-navy"
                aria-label={`Read ${post.title}`}
              >
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold ${accentChip[post.accent]}`}
                  >
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-brand-gray-3">
                    <Clock size={14} aria-hidden="true" />
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="mt-4 font-heading text-lg font-semibold leading-snug text-brand-navy sm:text-xl">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="transition-colors hover:text-brand-yellow-dark"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-brand-gray-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                  <span className="inline-flex items-center gap-1.5 text-xs text-brand-gray-3">
                    <CalendarDays size={14} aria-hidden="true" />
                    <time dateTime={post.date}>{post.dateLabel}</time>
                  </span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 px-4 py-2 font-heading text-xs font-semibold text-brand-navy transition-colors hover:border-brand-yellow-dark hover:bg-brand-yellow-dark hover:text-white"
                    aria-label={`Read ${post.title}`}
                  >
                    Read article
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </main>
  )
}
