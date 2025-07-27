import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'AquaScene - Premium Aquascaping Solutions',
  description: 'Professional aquascaping business offering premium aquarium design, maintenance, and aquatic products. Partner with us for exceptional aquatic experiences.',
  keywords: 'aquascaping, aquarium design, aquatic plants, fish tank, aquarium maintenance, Green Aqua',
  authors: [{ name: 'AquaScene Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AquaScene - Premium Aquascaping Solutions',
    description: 'Professional aquascaping business offering premium aquarium design, maintenance, and aquatic products.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}