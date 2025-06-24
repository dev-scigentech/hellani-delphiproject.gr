"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X } from "lucide-react"
import ScrollToTop from "./scroll-to-top"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { key: "home" as const, href: "/" },
    { key: "methodology" as const, href: "/methodology" },
    { key: "expertPanel" as const, href: "/expert-panel" },
    { key: "papers" as const, href: "/papers" },
    { key: "publications" as const, href: "/publications" },
    { key: "contact" as const, href: "/contact" },
  ]

  const handleHomeClick = (e: React.MouseEvent) => {
    // If we're already on the homepage, scroll to top instead of navigating
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleNavClick = (href: string) => {
    // Close mobile menu when clicking any nav item
    setIsMenuOpen(false)

    // If clicking home link while on homepage, scroll to top
    if (href === "/" && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      <ScrollToTop />
      <header className="bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" onClick={handleHomeClick}>
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/helani-logo.jpg"
                  alt="HELANI Logo"
                  className="w-full h-full object-contain bg-white rounded-2xl"
                />
              </div>
              <div>
                <span className="text-sm md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Delphi Project
                </span>
                <div className="text-xs text-gray-500 font-medium">HELANI Research Initiative</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-0.5">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`px-3 py-2 text-sm rounded-lg transition-all duration-300 font-medium ${
                      isActive
                        ? "text-blue-600 bg-blue-50 border border-blue-200"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {t(item.key)}
                  </Link>
                )
              })}
            </nav>

            {/* Language Switcher & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-100/80 backdrop-blur-sm rounded-xl p-1 shadow-inner">
                <button
                  onClick={() => setLanguage("el")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    language === "el"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  ΕΛ
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    language === "en"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-200">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={`px-4 py-3 text-sm rounded-xl transition-colors duration-300 font-medium ${
                        isActive
                          ? "text-blue-600 bg-blue-50 border border-blue-200"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {t(item.key)}
                    </Link>
                  )
                })}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
