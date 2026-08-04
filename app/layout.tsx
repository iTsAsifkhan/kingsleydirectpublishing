import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/pagination'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import TawkChat from '@/components/TawkChat'

// Editorial serif for headings + clean grotesque for body/UI. The CSS still
// references --font-montserrat / --font-noto; those are aliased to Inter in
// globals.css :root, while headings use --font-fraunces.
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kimberleydirectpublishing.com'),
  // Icons are generated from the file-based conventions: app/favicon.ico,
  // app/icon.png, and app/apple-icon.png (the Kimberley book mark).
  title: {
    default: 'Kimberley Direct Publishing | Professional Book Publishing Services',
    template: '%s | Kimberley Direct Publishing',
  },
  description:
    'Kimberley Direct Publishing helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kimberleydirectpublishing.com',
    siteName: 'Kimberley Direct Publishing',
    title: 'Kimberley Direct Publishing | Professional Book Publishing Services',
    description:
      'Kimberley Direct Publishing helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
    images: [
      {
        url: 'https://kimberleydirectpublishing.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kimberley Direct Publishing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kimberley Direct Publishing | Professional Book Publishing Services',
    description:
      'Kimberley Direct Publishing helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
    images: ['https://kimberleydirectpublishing.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://kimberleydirectpublishing.com',
  },
  verification: {
    // Google Search Console, HTML-tag verification (public token, safe to commit).
    google: 'lpvLd9f573rsbB1XRmptxhA-A4rFid-7x02i2ojFRlw',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://embed.tawk.to" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
      </head>
      <body className="bg-white text-brand-ink font-body" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" className="site-content">
          {children}
        </div>
        <Footer />
        <ScrollReveal />
        <TawkChat />
      </body>
    </html>
  )
}
