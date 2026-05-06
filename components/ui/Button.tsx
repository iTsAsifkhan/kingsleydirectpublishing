import Link from 'next/link'
import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  variant?: 'yellow' | 'blue'
  href?: string
  children: ReactNode
  icon?: LucideIcon
  className?: string
}

export default function Button({
  variant = 'yellow',
  href,
  children,
  icon: Icon,
  className = '',
}: ButtonProps) {
  const baseClasses = `btn btn-${variant} ${className}`

  const content = (
    <>
      <span className="span-1">{children}</span>
      <span className="span-2">
        {Icon ? <Icon size={20} /> : null}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    )
  }

  return <button className={baseClasses}>{content}</button>
}
