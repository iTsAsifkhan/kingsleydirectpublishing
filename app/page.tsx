export const metadata = {
  title: 'Home',
  description: 'Book Publishing Partner - Your Path to Publishing Success',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-6">
          Book Publishing Partner
        </h1>
        <p className="text-xl text-brand-gray2 max-w-2xl mx-auto mb-10">
          Your Path to Publishing Success
        </p>
        <p className="text-gray-600 mb-8">
          Project scaffolding complete. Sections coming soon.
        </p>
        <div className="text-sm text-gray-500">
          <p>✓ Next.js 15 with App Router</p>
          <p>✓ TypeScript configured</p>
          <p>✓ Tailwind CSS with brand tokens</p>
          <p>✓ Fonts configured (Montserrat + Noto Sans)</p>
          <p>✓ Metadata and SEO setup</p>
          <p>✓ Sitemap and robots.txt</p>
          <p>✓ Content structure in lib/content.ts</p>
          <p>✓ JSON-LD schema helpers in lib/schema.ts</p>
        </div>
      </section>
    </main>
  )
}
