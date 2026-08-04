import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  CalendarDays,
  Clock,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '@/components/ui'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

interface Props {
  params: Promise<{ slug: string }>
}

const SITE_URL = 'https://kimberleydirectpublishing.com'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const url = `${SITE_URL}/blogs/${post.slug}`

  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const url = `${SITE_URL}/blogs/${post.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${SITE_URL}/og-image.png`,
    keywords: post.primaryKeyword,
    articleSection: post.category,
    author: {
      '@type': 'Organization',
      name: 'Kimberley Direct Publishing',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kimberley Direct Publishing',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/kimberley-logo.png`,
      },
    },
  }

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blogs` },
    { name: post.title, url },
  ])

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema,
            breadcrumb,
            faqSchema(post.faqs),
          ]),
        }}
      />

      {/* Header / hero */}
      <header className="relative isolate overflow-hidden bg-brand-navy pt-36 pb-16 text-white sm:pb-20">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/82 to-brand-navy/44" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-navy/35 to-transparent" />

        <Container className="relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-white/78"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blogs" className="transition-colors hover:text-white">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/90" aria-current="page">
              {post.category}
            </span>
          </nav>

          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0px_10px_30px_rgb(0_0_0_/_16%)] backdrop-blur-sm">
            {post.category}
          </span>

          <h1 className="mt-6 max-w-4xl break-words font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.85rem]">
            {post.title}
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/86">
            <span>{post.author}</span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={16} aria-hidden="true" />
              <time dateTime={post.date}>{post.dateLabel}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={16} aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
        </Container>
      </header>

      {/* Body */}
      <Container>
        <article className="mx-auto max-w-3xl py-14">
          <div className="space-y-5 text-lg leading-relaxed text-brand-gray-2">
            {post.intro.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0 ? 'text-xl font-medium text-brand-ink' : undefined
                }
              >
                {para}
              </p>
            ))}
          </div>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="font-heading text-2xl font-bold text-brand-navy">
                {section.heading}
              </h2>
              {section.paragraphs?.map((para, i) => (
                <p
                  key={i}
                  className="mt-4 text-base leading-relaxed text-brand-gray-2"
                >
                  {para}
                </p>
              ))}
              {section.list &&
                (section.list.ordered ? (
                  <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-brand-gray-2">
                    {section.list.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className="mt-4 space-y-2">
                    {section.list.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base leading-relaxed text-brand-gray-2"
                      >
                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0 text-brand-yellow-dark"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
            </section>
          ))}

          {/* Key takeaways */}
          <aside className="mt-14 rounded-2xl border border-brand-navy/10 bg-brand-navy/[0.03] p-7">
            <h2 className="font-heading text-lg font-bold text-brand-navy">
              Key takeaways
            </h2>
            <ul className="mt-4 space-y-3">
              {post.keyTakeaways.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-base text-brand-gray-2"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-yellow-dark"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* FAQs */}
          <section className="mt-14">
            <h2 className="font-heading text-2xl font-bold text-brand-navy">
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-4">
              {post.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-brand-navy/10 bg-white p-5"
                >
                  <h3 className="font-heading text-base font-semibold text-brand-navy">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-brand-gray-2">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related internal links */}
          <section className="mt-14 rounded-2xl bg-brand-navy p-8 text-white">
            <h2 className="font-heading text-xl font-bold">
              Ready to take the next step?
            </h2>
            <p className="mt-3 text-white/80">
              Kimberley Direct Publishing supports authors from manuscript to
              launch. Explore{' '}
              {post.related.map((link, i) => (
                <span key={link.href}>
                  <Link
                    href={link.href}
                    className="font-semibold text-brand-yellow underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                  {i < post.related.length - 2
                    ? ', '
                    : i === post.related.length - 2
                      ? ', or '
                      : '.'}
                </span>
              ))}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3 font-heading text-sm font-semibold text-brand-navy transition-transform hover:scale-105"
            >
              Talk to our team
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </section>

          <div className="mt-12">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-navy transition-colors hover:text-brand-yellow-dark"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              Back to all articles
            </Link>
          </div>
        </article>
      </Container>
    </main>
  )
}
