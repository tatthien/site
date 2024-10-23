import type { Metadata } from 'next/types'

export const OpenGraph: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: {
    default: 'Thien Nguyen',
    template: '%s - Thien Nguyen',
  },
  description: 'Sharing my interest in a little of everything that crosses my mind, but mostly in technology.',
  keywords: ['Design', 'Development', 'Engineering'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Thien Nguyen',
    description: 'Sharing my interest in a little of everything that crosses my mind, but mostly in technology.',
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent('Thien Nguyen')}&date=${encodeURIComponent('Sharing my interest in a little of everything that crosses my mind, but mostly in technology.')}`,
    ],
    siteName: 'Thien Nguyen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thien Nguyen',
    description: 'Sharing my interest in a little of everything that crosses my mind, but mostly in technology.',
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent('Thien Nguyen')}&date=${encodeURIComponent('Sharing my interest in a little of everything that crosses my mind, but mostly in technology.')}`,
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
