import '@/styles/main.css'

import type { Metadata } from 'next'

import { MainNav } from '@/components/main-nav'
import { Providers } from '@/components/providers'
import { OpenGraph } from '@/lib/og'

import clsx from 'clsx'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  ...OpenGraph,
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={clsx(inter.className)} suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://fav.farm/🍱" />
        <script async src="https://cdn.seline.so/seline.js" data-token="5f9a845fc6de2f6" />
      </head>
      <body>
        <Providers>
          <MainNav />
          <main className="mx-auto max-w-screen-sm overflow-x-hidden px-4 py-24 md:overflow-x-visible">
            <article className="article">{children}</article>
          </main>
        </Providers>
      </body>
    </html>
  )
}
