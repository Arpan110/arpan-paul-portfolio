import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { FloatingShapes } from '@/components/floating-shapes'
// @ts-ignore: side-effect import of global CSS (no type declarations)
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Arpan Paul',
  description: 'Portfolio of Arpan Paul, a passionate Web Developer specializing in modern web technologies',
  keywords: ['Arpan Paul', 'Web Developer', 'AI Explorer', 'Portfolio', 'React', 'Next.js'],
  authors: [{ name: 'Arpan Paul' }],
  creator: 'Arpan Paul',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Arpan Paul- Web Developer',
    description: 'Portfolio of Arpan Paul, a passionate Web Developer',
    siteName: 'Arpan Paul Portfolio',
  },
  icons: {
    icon: [
      {
        url: '/ap-logo.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ap-logo.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ap-logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/ap-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <FloatingShapes />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
