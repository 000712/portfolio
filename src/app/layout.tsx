import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '김건희 포트폴리오',
  description: '중부대 정보보호학과 김건희 포트폴리오',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-slate-50 to-gray-100 flex flex-col min-h-screen`}
      >
        <main className="flex-1">{children}</main>
        <footer className="bg-gradient-to-br from-slate-50 to-gray-100 py-6 px-8 border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 GeonHee Kim. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/archive"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Archive
              </Link>
              <a
                href="https://github.com/000712"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://vercel.com/000712s-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Vercel
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
