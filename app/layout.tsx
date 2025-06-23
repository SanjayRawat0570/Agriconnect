import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgriConnect',
  description: 'Connecting Farmers and Consumers',
  generator: 'Next.js',
  applicationName: 'AgriConnect',
  referrer: 'origin-when-cross-origin',
  keywords: ['AgriConnect', 'Farmers', 'Consumers', 'Agriculture'],
  authors: [{ name: 'AgriConnect Team' }],
  creator: 'AgriConnect Team',
  publisher: 'AgriConnect Team',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
