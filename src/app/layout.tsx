import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://joaquimcosta.dev'),
  title: {
    template: '%s - Joaquim Costa',
    default: 'Joaquim Costa - Staff Software Engineer',
  },
  description:
    "I'm Joaquim, a Staff Software Engineer with over a decade of experience building scalable backend systems using Java, Kotlin, and Spring Boot. I focus on microservices architecture, DevOps automation, and cloud-native design.",
  openGraph: {
    title: 'Joaquim Costa - Staff Software Engineer',
    description:
      'Staff Software Engineer with 13+ years of experience building scalable backend systems with Java, Kotlin, and Spring Boot.',
    url: 'https://joaquimcosta.dev',
    siteName: 'Joaquim Costa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Joaquim Costa - Staff Software Engineer',
    description:
      'Staff Software Engineer with 13+ years of experience building scalable backend systems with Java, Kotlin, and Spring Boot.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
