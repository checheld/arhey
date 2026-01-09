import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Hachi_Maru_Pop } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../styles/global.sass'
import '../styles/media.sass'

const hachimaru = Hachi_Maru_Pop({
  variable: '--font-hachimaru',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Архей',
  description: 'Архитектурное бюро'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`app ${hachimaru.variable}`}>
        <Header />
        <Suspense>{children}</Suspense>
        <Footer />
        {/* <ScrollToTop />
        <CookiesModal /> */}
      </body>
    </html>
  )
}
