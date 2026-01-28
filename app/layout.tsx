import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { ScrollToTop } from "@/components/system/ScrollToTop"
import "./globals.css"

const _inter = Inter({ subsets: ["latin", "latin-ext"] })
const _playfair = Playfair_Display({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "Ateş Altınkaynak | Copywriter & Web Designer",
  description:
    "Copywriting + Web Tasarım. Net, ikna edici, modern. Web siteleri tasarlıyor ve ikna edici metinler yazıyorum.",
  generator: "v0.app",
  keywords: [
    "copywriter",
    "web designer",
    "Istanbul",
    "freelance",
    "web tasarım",
    "metin yazarı",
  ],
  authors: [{ name: "Ateş Altınkaynak" }],
  openGraph: {
    title: "Ateş Altınkaynak | Copywriter & Web Designer",
    description:
      "Copywriting + Web Tasarım. Net, ikna edici, modern.",
    url: "https://atesaltinkaynak.com",
    siteName: "Ateş Altınkaynak",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ateş Altınkaynak | Copywriter & Web Designer",
    description:
      "Copywriting + Web Tasarım. Net, ikna edici, modern.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#126B4A",
  width: "device-width",
  initialScale: 1,
}

import { GlobalAtmosphericBackground } from "@/components/motion/global-atmospheric-background"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground relative">
        <LanguageProvider>
          <ScrollToTop />
          <GlobalAtmosphericBackground />
          <div className="relative z-10 transition-colors duration-1000">
            {children}
          </div>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
