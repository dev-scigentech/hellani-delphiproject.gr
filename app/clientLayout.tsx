"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      <head>
        <title>Delphi Project - Νευροεπιστημονική Έρευνα</title>
        <meta
          name="description"
          content="Πρωτοποριακή πρωτοβουλία για την ανάλυση κομβικών ζητημάτων νευροεπιστημονικής μέσω της μεθοδολογίας Delphi"
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ScrollToTop />
          <Header />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
