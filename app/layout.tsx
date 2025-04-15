import type React from "react"
import type { Metadata } from "next"
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GrowLog - Plant Tracking App",
  description: "Track your garden's growth journey",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <body className={inter.className}>
            <Navbar />
            <main className="min-h-screen pt-4">{children}</main>
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  )
}

