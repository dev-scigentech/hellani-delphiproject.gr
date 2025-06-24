import type React from "react"
import { Roboto } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"

const inter = Roboto({ subsets: ["latin"] })

export const metadata = {
  title: "Delphi Project - Νευροεπιστημονική Έρευνα",
  description:
    "Πρωτοποριακή πρωτοβουλία για την ανάλυση κομβικών ζητημάτων νευροεπιστημονικής μέσω της μεθοδολογίας Delphi",
    generator: 'v0.dev'
}

export default function RootLayout({
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
          <Header />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
