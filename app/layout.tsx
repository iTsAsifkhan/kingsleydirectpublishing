import type { Metadata } from 'next'
import { Montserrat, Noto_Sans } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/pagination'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import FooterReveal from '@/components/FooterReveal'
import TawkChat from '@/components/TawkChat'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const notoSans = Noto_Sans({
  variable: '--font-noto',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kimberleydirectpublishing.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
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
    // Google Search Console — HTML-tag verification (public token, safe to commit).
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
      className={`${montserrat.variable} ${notoSans.variable} scroll-smooth`}
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
        <FooterReveal />
        <TawkChat />
      </body>
    </html>
  )
}
