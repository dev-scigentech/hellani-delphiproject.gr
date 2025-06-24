"use client"

import { useLanguage } from "@/contexts/language-context"
import { Mail, Phone, MapPin, Users, Building2, User } from "lucide-react"

export default function ContactPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("contactTitle")}</h1>
          <p className="text-xl text-gray-600">{t("contactContent")}</p>
        </div>

        {/* HELANI Contact Information */}
        <div className="mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === "el"
                    ? "ΕΛΛΗΝΙΚΗ ΑΚΑΔΗΜΙΑ ΝΕΥΡΟΑΝΟΣΟΛΟΓΙΑΣ (ΕΛΛ.Α.ΝΑ.)"
                    : "HELLENIC ACADEMY OF NEUROIMMUNOLOGY (HELANI)"}
                </h2>
                <p className="text-gray-600">{language === "el" ? "Στοιχεία Επικοινωνίας" : "Contact Information"}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {language === "el" ? "Διεύθυνση Έδρας" : "Headquarters Address"}
                    </h3>
                    <p className="text-gray-600">
                      Πολυτεχνείου 23
                      <br />
                      54625 Θεσσαλονίκη
                      <br />
                      Ελλάδα
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{language === "el" ? "Τηλέφωνο" : "Phone"}</h3>
                    <p className="text-gray-600">+30 2313 050 426</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@helani.gr</p>
                  </div>
                </div>
              </div>

              {/* Contact Person */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {language === "el" ? "Υπεύθυνος Επικοινωνίας" : "Contact Person"}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">
                      {language === "el" ? "Κος Μπαλάσης" : "Mr. Balasis"}
                    </p>
                    <p className="text-gray-600">
                      {language === "el"
                        ? "Για περισσότερες πληροφορίες σχετικά με το Delphi Project και τις δραστηριότητες της ΕΛΛ.Α.ΝΑ."
                        : "For more information about the Delphi Project and HELANI activities"}
                    </p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3">
                    {language === "el" ? "Ώρες Λειτουργίας" : "Office Hours"}
                  </h4>
                  <div className="space-y-1 text-gray-700">
                    <p>{language === "el" ? "Δευτέρα - Παρασκευή: 09:00 - 17:00" : "Monday - Friday: 09:00 - 17:00"}</p>
                    <p className="text-sm text-gray-600">
                      {language === "el"
                        ? "Παρακαλούμε επικοινωνήστε μαζί μας για συνάντηση"
                        : "Please contact us to schedule an appointment"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Team Section */}
    {/*    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t("researchTeam")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === "el" ? "Επιστημονική Διεύθυνση" : "Scientific Direction"}
              </h3>
              <p className="text-gray-700">
                {language === "el" ? "Καθ. Νικόλαος Γρηγοριάδης" : "Prof. Nikolaos Grigoriadis"}
              </p>
              <p className="text-sm text-gray-600">
                {language === "el"
                  ? "Διευθυντής Β' Νευρολογικής Κλινικής, ΑΠΘ"
                  : "Director, 2nd Neurology Department, AUTH"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === "el" ? "Συντονισμός Έργου" : "Project Coordination"}
              </h3>
              <p className="text-gray-700">
                {language === "el" ? "Ερευνητική Ομάδα ΕΛΛ.Α.ΝΑ." : "HELANI Research Team"}
              </p>
              <p className="text-sm text-gray-600">
                {language === "el"
                  ? "Delphi Project - Νευροανοσολογική Έρευνα"
                  : "Delphi Project - Neuroimmunology Research"}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
