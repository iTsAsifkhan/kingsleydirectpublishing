import type { Metadata } from 'next'
import { Montserrat, Noto_Sans } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/pagination'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import FooterReveal from '@/components/FooterReveal'

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
  metadataBase: new URL('https://kingsleydirectpublishing.com'),
  icons: {
    icon: '/favicon.svg',
  },
  title: {
    default: 'Kingsley Direct Publishing | Professional Book Publishing Services',
    template: '%s | Kingsley Direct Publishing',
  },
  description:
    'Kingsley Direct Publishing helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kingsleydirectpublishing.com',
    siteName: 'Kingsley Direct Publishing',
    title: 'Kingsley Direct Publishing | Professional Book Publishing Services',
    description:
      'Kingsley Direct Publishing helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
    images: [
      {
        url: 'https://kingsleydirectpublishing.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kingsley Direct Publishing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingsley Direct Publishing | Professional Book Publishing Services',
    description:
      'Kingsley Direct Publishing helps authors edit, design, publish, and market books with professional self-publishing services from manuscript to launch.',
    images: ['https://kingsleydirectpublishing.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://kingsleydirectpublishing.com',
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
      <head />
      <body className="bg-white text-brand-ink font-body" suppressHydrationWarning>
        <Header />
        <div className="site-content">{children}</div>
        <Footer />
        <ScrollReveal />
        <FooterReveal />
      </body>
    </html>
  )
}
