import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Megaphone, PenTool, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'The Kingsley Journal — practical guides on writing, editing, publishing, and marketing your book. New articles are on the way.',
  alternates: { canonical: 'https://kingsleydirectpublishing.com/blogs' },
}

const TOPICS = [
  {
    icon: PenTool,
    title: 'Writing & Ghostwriting',
    text: 'Turning a rough idea into a finished, publish-ready manuscript.',
  },
  {
    icon: BookOpen,
    title: 'Editing & Formatting',
    text: 'The passes every book needs before it reaches readers.',
  },
  {
    icon: Sparkles,
    title: 'Self-Publishing',
    text: 'Keeping your rights, your royalties, and your creative control.',
  },
  {
    icon: Megaphone,
    title: 'Book Marketing',
    text: 'Launch strategies, Amazon, and building an author brand.',
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-5xl px-4 pt-40 pb-16 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow-dark">
          The Kingsley Journal
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight text-brand-navy sm:text-5xl">
          Publishing insight, <span className="text-brand-yellow-dark">coming soon</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-gray-2">
          We&apos;re putting together practical, no-fluff guides drawn from real author
          projects — from first draft to global launch. Here&apos;s what you&apos;ll find here.
        </p>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          {TOPICS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-[0px_13px_37px_rgb(0_0_0_/_6%)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h2 className="font-heading text-lg font-semibold text-brand-navy">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-2">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow-dark px-7 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-navy"
          >
            Have a book question now? Talk to us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
