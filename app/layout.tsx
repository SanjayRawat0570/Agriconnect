import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgriConnect',
  description: 'Connecting Farmers and Consumers',
  generator: 'Next.js',
  applicationName: 'AgriConnect',
  referrer: 'origin-when-cross-origin',
  keywords: ['AgriConnect', 'Farmers', 'Consumers', 'Agriculture'],
  authors: [{ name: 'AgriConnect Team'}],
  colorScheme: 'light dark',
  creator: 'AgriConnect Team',
  publisher: 'AgriConnect Team',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
