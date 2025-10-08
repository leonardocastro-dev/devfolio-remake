import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/footer'
import Navigation from '@/components/layout/navigation'
import { TooltipProvider } from '@/components/ui/tooltip'

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Devfolio',
  description: 'Portfolio of Leonardo Castro'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased flex flex-col`}
      >
        <Navigation />
        <TooltipProvider>
          <main className="flex-1 overflow-hidden">{children}</main>
        </TooltipProvider>
        <Footer />
      </body>
    </html>
  )
}
