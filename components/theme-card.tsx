"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Lock, Unlock, AlertCircle, X, Sparkles } from "lucide-react"

interface ThemeCardProps {
  id: string
  title: string
  description: string
  password: string | string[] // Updated to accept array
  zohoFormUrl: string
  icon: React.ReactNode
  isUnlocked: boolean
  isExpanded: boolean
  onUnlock: (id: string) => void
  onClose?: () => void
}

export default function ThemeCard({
  id,
  title,
  description,
  password,
  zohoFormUrl,
  icon,
  isUnlocked,
  isExpanded,
  onUnlock,
  onClose,
}: ThemeCardProps) {
  const { t } = useLanguage()
  const [inputPassword, setInputPassword] = useState("")
  const [inputPassword2, setInputPassword2] = useState("")
  const [showError, setShowError] = useState(false)
  const handleChange = (text:string)=>{
  setInputPassword(text)
  setInputPassword2(text)
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const passwords = Array.isArray(password) ? password : [password]

    if (passwords.includes(inputPassword)) {
      setShowError(false)
      onUnlock(id)
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }
console.log(inputPassword2, "ssss")
  // Expanded view (when this theme is the active one)
  if (isUnlocked && isExpanded) {
    return (
      <div className="w-full max-w-5xl mx-auto mb-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                {icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Unlock className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium">{t("activated")}</span>
                </div>
              </div>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="p-3 hover:bg-white/50 rounded-xl transition-colors group"
                aria-label="Close form"
              >
                <X className="w-6 h-6 text-gray-500 group-hover:text-gray-700" />
              </button>
            )}
          </div>

          {/* Form Content */}
          <div className="p-8">
            <iframe
              src={zohoFormUrl}
              width="100%"
              height="1200"
              frameBorder="0"
              className="rounded-xl border border-gray-200 shadow-inner"
              title={`Form for ${title}`}
            />
          </div>
        </div>
      </div>
    )
  }

  // Compact view (when another theme is expanded or no theme is expanded)
  if (isUnlocked && !isExpanded) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-green-500" />
                <p className="text-sm text-green-600 font-medium">{t("completed")}</p>
              </div>
            </div>
          </div>
          <Unlock className="w-6 h-6 text-green-600" />
        </div>
      </div>
    )
  }

  // Default locked view
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor={`password-${id}`} className="block text-sm font-semibold text-gray-700 mb-3">
            {t("enterPassword")}
          </label>
          <div className="relative">
            <input
              type="password"
              id={`password-${id}`}
              value={inputPassword}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              placeholder="••••••••"
            />
            <Lock className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {showError && (
          <div className="flex items-center space-x-3 text-red-600 bg-red-50 p-3 rounded-xl border border-red-200">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{t("wrongPassword")}</span>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  )
}
