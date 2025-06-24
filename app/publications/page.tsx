"use client"

import { useLanguage } from "@/contexts/language-context"
import { FileText, Clock } from "lucide-react"

export default function PublicationsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("publicationsTitle")}</h1>
        </div>

        {/* Content Not Available Notice */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
              <FileText className="w-10 h-10 text-blue-600" />
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-gray-500" />
            <h2 className="text-2xl font-semibold text-gray-900">{t("contentNotAvailable")}</h2>
          </div>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{t("publicationsComingSoon")}</p>

          <div className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-xl border border-blue-200">
            <span className="text-sm font-medium">{t("checkBackSoon")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
