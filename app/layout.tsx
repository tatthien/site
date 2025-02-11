import '@/styles/main.css'

import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { MainNav } from '@/components/main-nav'
import { ProgressBar } from '@/components/progress-bar'
import { Providers } from '@/components/providers'
import { OpenGraph } from '@/lib/og'

import clsx from 'clsx'
import { Work_Sans } from 'next/font/google'

export const metadata: Metadata = {
  ...OpenGraph,
}

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={clsx(workSans.className)} suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://fav.farm/🍱" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <script async src="https://cdn.seline.so/seline.js" data-token="5f9a845fc6de2f6" />
      </head>
      <body>
        <Providers>
          <ProgressBar />
          <aside className="col-[main] py-6 lg:col-[left-sidebar] lg:py-24">
            <MainNav />
          </aside>
          <main className="col-[main] min-w-0 py-16 md:py-24">
            <article className="article">{children}</article>
            <div className="my-10">
              <Footer />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
