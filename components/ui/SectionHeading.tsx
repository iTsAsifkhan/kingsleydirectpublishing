interface SectionHeadingProps {
  tag?: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ tag, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      {tag && (
        <div className="mb-4 inline-flex items-center rounded-pill bg-brand-yellow px-5 py-2 text-sm font-500 uppercase tracking-wider text-brand-navy">
          {tag}
        </div>
      )}

      <h2 className="mb-4 max-w-4xl text-5xl font-600 text-brand-navy">{title}</h2>

      {subtitle && <p className="max-w-3xl text-lg text-brand-gray2">{subtitle}</p>}
    </div>
  )
}
