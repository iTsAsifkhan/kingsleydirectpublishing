interface StatCounterProps {
  number: string | number
  label: string
}

export default function StatCounter({ number, label }: StatCounterProps) {
  return (
    <div className="rounded-2xl bg-brand-navy px-12 py-10 text-center text-white">
      <h5 className="text-5xl font-600 text-brand-yellow">{number}</h5>
      <p className="mt-2 text-lg font-600 text-white">{label}</p>
    </div>
  )
}
