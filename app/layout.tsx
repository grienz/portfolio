import LayoutClient from './layout-client'
import { Blob } from '@components/Blob'

import type { PropsWithChildren } from 'react'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

const trackingId = process.env.TRACKING_ID

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="tr" className={inter.variable} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/icons/favicon.svg"
        />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* Necessary to prevent error: window.gtag is not defined for Next.js-hydration */}
        {trackingId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_path: window.location.pathname,
            });
          `
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.variable} bg-off-white dark:bg-slate-950`}>
        <div className="pointer-events-none absolute my-auto w-full max-w-[1920px] overflow-hidden md:top-[%90]">
          <Blob />
        </div>
        <LayoutClient>{children}</LayoutClient>
        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL('https://grienz.dev'),
  title: {
    template: '%s | Güray ALIN',
    default: 'Güray ALIN'
  },
  description: 'Yazılım geliştirme, portfolyo, projeler ve daha fazlası.',
  keywords: [
    'software developer',
    'frontend developer',
    'web developer',
    'frontend',
    'software',
    'yazılım',
    'next.js',
    'portfolyo',
    'teknoloji',
    'react'
  ],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#000' }
  ],
  colorScheme: 'dark',
  generator: 'Next.js',
  openGraph: {
    title: '',
    description: '',
    url: 'https://grienz.dev',
    siteName: "Güray ALIN'ın portfolyo websitesi.",
    locale: 'tr_TR',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true
    }
  },
  category: 'technology',
  twitter: {
    title: 'Güray ALIN',
    card: 'summary_large_image',
    creator: '@gurayalin'
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://grienz.dev/feed.xml'
    }
  }
}
