import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn Languages with AI - LangLift | Interactive, Personalized Language Learning',
  description: 'Join LangLift and embrace a unique language learning adventure. Our AI-driven platform offers personalized lessons, real-time conversations, and engaging modules to help you master new languages effortlessly. Perfect for learners at all levels.',
  keywords: ['AI language learning', 'Interactive language education', 'personalized language courses', 'online language learning', 'effective language practice', 'AI-driven language platform'],
  authors: [{ name: 'DangHoang', url: 'https://baoan.jp' }, { name: 'BaoAnJP', url: 'https://baoan.jp' }],
  creator: 'Dang Hoang',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
