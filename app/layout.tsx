import type { Metadata } from 'next'
import { Montserrat, Noto_Sans } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/pagination'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import NewsletterPopup from '@/components/NewsletterPopup'

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
  metadataBase: new URL('https://bookpublishingpartner.com'),
  title: {
    default: 'Book Publishing Partner | Your Path to Publishing Success',
    template: '%s | Book Publishing Partner',
  },
  description:
    'Top book publishing partner to bring your manuscript to life. From printing to marketing, we help authors and publishers achieve publishing success.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bookpublishingpartner.com',
    siteName: 'Book Publishing Partner',
    title: 'Book Publishing Partner | Your Path to Publishing Success',
    description:
      'Top book publishing partner to bring your manuscript to life. From printing to marketing, we help authors and publishers achieve publishing success.',
    images: [
      {
        url: 'https://bookpublishingpartner.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Book Publishing Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Publishing Partner | Your Path to Publishing Success',
    description:
      'Top book publishing partner to bring your manuscript to life. From printing to marketing, we help authors and publishers achieve publishing success.',
    images: ['https://bookpublishingpartner.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://bookpublishingpartner.com',
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
        {children}
        <Footer />
        <ChatWidget />
        <NewsletterPopup />
      </body>
    </html>
  )
}
