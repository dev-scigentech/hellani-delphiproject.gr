"use client"

import { useLanguage } from "@/contexts/language-context"
import { CheckCircle, Users, BarChart3, RefreshCw } from "lucide-react"

export default function MethodologyPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">{t("methodologyTitle")}</h1>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">{t("methodologyIntro")}</p>
        </div>

        {/* What is Delphi Methodology */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t("whatIsDelphi")}</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t("delphiDescription")}</p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t("anonymity")}</h3>
              <p className="text-gray-700">{t("anonymityDesc")}</p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t("iteration")}</h3>
              <p className="text-gray-700">{t("iterationDesc")}</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t("statistical")}</h3>
              <p className="text-gray-700">{t("statisticalDesc")}</p>
            </div>
          </div>
        </section>

        {/* What is a Delphi Paper */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t("whatIsDelphiPaper")}</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">{t("delphiPaperDesc")}</p>
          </div>
        </section>

        {/* Merits and Acceptance */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t("meritsTitle")}</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t("meritsIntro")}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t("strongConsensus")}</h4>
                  <p className="text-gray-700">{t("strongConsensusDesc")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t("biasMitigation")}</h4>
                  <p className="text-gray-700">{t("biasMitigationDesc")}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t("complexIssues")}</h4>
                  <p className="text-gray-700">{t("complexIssuesDesc")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t("geographicFlexibility")}</h4>
                  <p className="text-gray-700">{t("geographicFlexibilityDesc")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {language === "el"
                ? "Η διαρκής και αυξανόμενη συχνότητα των μελετών Delphi σε επιστημονικά περιοδικά, ιδιαίτερα τις τελευταίες δύο δεκαετίες, υπογραμμίζει τη συνεχή σημασία και την αξιόπιστη θέση της στην παγκόσμια ερευνητική κοινότητα. Ακαδημαϊκά ιδρύματα και ερευνητές χρησιμοποιούν συστηματικά τη μέθοδο Delphi για τη θέσπιση βέλτιστων πρακτικών, την ανάπτυξη κατευθυντήριων γραμμών, τον προσδιορισμό ερευνητικών προτεραιοτήτων, την πρόβλεψη μελλοντικών σεναρίων και την ενημέρωση της ανάπτυξης πολιτικών. Η προσαρμοστικότητα, η διαφάνεια και η συστηματική προσέγγισή της συμβάλλουν στην υψηλή εκτίμηση που της αποδίδεται."
                : "The sustained and increasing frequency of Delphi studies in peer-reviewed journals, particularly over the last two decades, underscores its continued relevance and trusted standing within the global research community. Academic institutions and researchers routinely employ the Delphi method to establish best practices, develop guidelines, identify research priorities, forecast future scenarios, and inform policy development. Its adaptability, transparency, and systematic approach contribute to the high regard in which it is held."}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {language === "el"
                ? "Στην ΕΛΛ.Α.ΝΑ, ξεκινάμε μια σειρά έργων Delphi αφιερωμένων στη σύνταξη εμπεριστατωμένων και σημαντικών Delphi papers. Μέσω αυτής της προσπάθειας, στοχεύουμε να αξιοποιήσουμε τη συλλογική εμπειρογνωμοσύνη για την αντιμετώπιση κρίσιμων ζητημάτων και να συμβάλουμε ουσιαστικά στην προώθηση της γνώσης στους τομείς μας. Πιστεύουμε στη δύναμη της δομημένης συναίνεσης εμπειρογνωμόνων για τη διαμόρφωση τεκμηριωμένων αποφάσεων και την προώθηση της προόδου."
                : "At HELANI (Hellenic Academy of Neuroimmunology), we are initiating a series of Delphi projects dedicated to drafting insightful and impactful Delphi papers. Through this endeavor, we aim to leverage collective expertise to address critical issues and contribute meaningfully to the advancement of knowledge in our fields. We believe in the power of structured expert consensus to shape informed decisions and foster progress."}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
