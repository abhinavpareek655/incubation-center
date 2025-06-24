import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CURAJIF',
  description: 'Incubation Center for Startups',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/CURAJ Logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
