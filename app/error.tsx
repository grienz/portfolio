'use client'
import React from 'react'
import Link from 'next/link'

export default function ErrorPage({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <article>
      <div className="flex h-[100vh] flex-col items-center justify-center gap-5 bg-[#0E1016] text-[#e4ded7]">
        <p className="text-[25px] uppercase sm:text-[30px] md:text-[35px] lg:text-[40px]">
          Something went wrong!
        </p>
        <p>
          <button onClick={reset}>Try again</button>
        </p>
        <pre>{error.message}</pre>
        <div>
          <Link
            href="/"
            className="text-[25px] uppercase sm:text-[30px] md:text-[35px] lg:text-[40px]"
          >
            Back to{' '}
            <span className="underline underline-offset-2">Homepage</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
