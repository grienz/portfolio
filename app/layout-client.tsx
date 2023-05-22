'use client'

import { SkipToContent } from '@components/SkipToContent'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

export default function LayoutClient({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class">
      <SkipToContent />
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
