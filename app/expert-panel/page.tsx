"use client"

import { useLanguage } from "@/contexts/language-context"
import { Mail, Users, Crown, UserCheck, FileText } from "lucide-react"

export default function ExpertPanelPage() {
  const { t, language } = useLanguage()

  const boardMembers = [
    {
      position: "Πρόεδρος του Δ.Σ.",
      positionEn: "Board President",
      name: "Ηλιόπουλος Ιωάννης",
      nameEn: "Ioannis Iliopoulos",
      title: "Καθηγητής Νευρολογίας, Δημοκρίτειο Πανεπιστήμιο Θράκης",
      titleEn: "Professor of Neurology, Democritus University of Thrace",
      email: "iiliop@med.duth.gr",
      icon: <Crown className="w-5 h-5" />,
      bgColor: "from-yellow-500 to-amber-600",
    },
    {
      position: "Αντιπρόεδρος του Δ.Σ.",
      positionEn: "Board Vice President",
      name: "Καραγωγέως Δόμνα",
      nameEn: "Domna Karagogeos",
      title: "Καθηγήτρια Μοριακής Βιολογίας-Αναπτυξιακής Νευρολογίας Πανεπιστημίου Κρήτης (Ιατρικό Τμήμα)",
      titleEn: "Professor of Molecular Biology-Developmental Neurology, University of Crete (Medical School)",
      email: "karagoge@imbb.forth.gr",
      icon: <UserCheck className="w-5 h-5" />,
      bgColor: "from-purple-500 to-indigo-600",
    },
    {
      position: "Γραμματέας-Ταμίας του Δ.Σ.",
      positionEn: "Secretary-Treasurer",
      name: "Γρηγοριάδης Νικόλαος",
      nameEn: "Nikolaos Grigoriadis",
      title: "Καθηγητής Νευρολογίας, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης",
      titleEn: "Professor of Neurology, Aristotle University of Thessaloniki",
      email: "grigoria@med.auth.gr",
      icon: <FileText className="w-5 h-5" />,
      bgColor: "from-green-500 to-emerald-600",
    },
    {
      position: "Μέλος του Δ.Σ.",
      positionEn: "Board Member",
      name: "Βουμβουράκης Κωνσταντίνος",
      nameEn: "Konstantinos Voumvourakis",
      title: "Καθηγητής Νευρολογίας, Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών",
      titleEn: "Professor of Neurology, National and Kapodistrian University of Athens",
      email: "cvoumvou@otenet.gr",
      icon: <Users className="w-5 h-5" />,
      bgColor: "from-blue-500 to-cyan-600",
    },
    {
      position: "Μέλος του Δ.Σ.",
      positionEn: "Board Member",
      name: "Κόλλιας Γεώργιος",
      nameEn: "Georgios Kollias",
      title: "Καθηγητής, Ερευνητικό Κέντρο Βιοϊατρικών επιστημών Αλέξανδρος Φλέμινγκ, Τακτικό μέλος Ακαδημίας Αθηνών",
      titleEn: "Professor, Alexander Fleming Biomedical Sciences Research Center, Full Member of the Academy of Athens",
      email: "g.kollias@fleming.gr",
      icon: <Users className="w-5 h-5" />,
      bgColor: "from-blue-500 to-cyan-600",
    },
    {
      position: "Μέλος του Δ.Σ.",
      positionEn: "Board Member",
      name: "Παπαθανασόπουλος Παναγιώτης",
      nameEn: "Panagiotis Papathanasopoulos",
      title: "Καθηγητής Νευρολογίας, Πανεπιστήμιο Πατρών",
      titleEn: "Professor of Neurology, University of Patras",
      email: "papat@med.upatras.gr",
      icon: <Users className="w-5 h-5" />,
      bgColor: "from-blue-500 to-cyan-600",
    },
    {
      position: "Μέλος του Δ.Σ.",
      positionEn: "Board Member",
      name: "Πελίδου Συγκλητή-Ερριέττα",
      nameEn: "Synkliti-Errietta Pelidou",
      title: "Επίκουρη Καθηγήτρια Νευρολογίας, Πανεπιστήμιο Ιωαννίνων",
      titleEn: "Assistant Professor of Neurology, University of Ioannina",
      email: "epelidou@yahoo.gr",
      icon: <Users className="w-5 h-5" />,
      bgColor: "from-blue-500 to-cyan-600",
    },
    {
      position: "Μέλος του Δ.Σ.",
      positionEn: "Board Member",
      name: "Λέσλι Πρόμπερτ (Lesley Probert)",
      nameEn: "Lesley Probert",
      title: "Διευθύντρια Ερευνών, Ελληνικό Ινστιτούτο Παστέρ",
      titleEn: "Research Director, Hellenic Pasteur Institute",
      email: "lesley.probert@gmail.com",
      icon: <Users className="w-5 h-5" />,
      bgColor: "from-blue-500 to-cyan-600",
    },
    {
      position: "Μέλος του Δ.Σ.",
      positionEn: "Board Member",
      name: "Σιδεράς Πασχάλης",
      nameEn: "Paschalis Sideras",
      title: "Ερευνητής Α', Ίδρυμα Ιατροβιολογικών Ερευνών της Ακαδημίας Αθηνών",
      titleEn: "Principal Researcher, Biomedical Research Foundation of the Academy of Athens",
      email: "sideras@bioacademy.gr",
      icon: <Users className="w-5 h-5" />,
      bgColor: "from-blue-500 to-cyan-600",
    },
    {
      position: "Μέλος του Δ.Σ.",
      positionEn: "Board Member",
      name: "Σταματόπουλος Κωνσταντίνος",
      nameEn: "Konstantinos Stamatopoulos",
      title: "Διευθυντής Ινστιτούτου Εφαρμοσμένων Βιοεπιστημών, Εθνικό Κέντρο Έρευνας και Τεχνολογικής Ανάπτυξης",
      titleEn:
        "Director of Institute of Applied Biosciences, National Center for Research and Technological Development",
      email: "kostas.stamatopoulos@certh.gr",
      icon: <Users className="w-5 h-5" />,
      bgColor: "from-blue-500 to-cyan-600",
    },
    {
      position: "Μέλος του Δ.Σ.",
      positionEn: "Board Member",
      name: "Χατζηγεωργίου Γεώργιος",
      nameEn: "Georgios Hadjigeorgiou",
      title: "Καθηγητής Νευρολογίας, Πανεπιστήμιο Θεσσαλίας",
      titleEn: "Professor of Neurology, University of Thessaly",
      email: "gmhadji@med.uth.gr",
      icon: <Users className="w-5 h-5" />,
      bgColor: "from-blue-500 to-cyan-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("expertPanelTitle")}</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {language === "el"
              ? "Το Διοικητικό Συμβούλιο της Ελληνικής Ακαδημίας Νευροανοσολογίας αποτελείται από διακεκριμένους ειδικούς στον τομέα της Νευροανοσολογίας και συναφών επιστημονικών πεδίων."
              : "The Board of Directors of the Hellenic Academy of Neuroimmunology consists of distinguished specialists in the field of Neuroimmunology and related scientific areas."}
          </p>
        </div>

        {/* Board Members */}
        <div className="space-y-6">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-6 flex-1">
                    {/* Position Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${member.bgColor} rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                    >
                      {member.icon}
                    </div>

                    {/* Member Info */}
                    <div className="flex-1">
                      {/* Position */}
                      <div className="mb-3">
                        <span
                          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                            member.position.includes("Πρόεδρος")
                              ? "bg-yellow-100 text-yellow-800"
                              : member.position.includes("Αντιπρόεδρος")
                                ? "bg-purple-100 text-purple-800"
                                : member.position.includes("Γραμματέας")
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {language === "el" ? member.position : member.positionEn}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {language === "el" ? member.name : member.nameEn}
                      </h3>

                      {/* Title */}
                      <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        {language === "el" ? member.title : member.titleEn}
                      </p>

                      {/* Email */}
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-4 h-4 text-gray-600" />
                        </div>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            {language === "el" ? "Ηγεσία στη Νευροανοσολογία" : "Leadership in Neuroimmunology"}
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {language === "el"
              ? "Το Διοικητικό Συμβούλιο της ΕΛΛ.Α.ΝΑ. καθοδηγεί τις στρατηγικές κατευθύνσεις και την επιστημονική πολιτική της Ακαδημίας."
              : "The Board of Directors of HELANI guides the strategic directions and scientific policy of the Academy."}
          </p>
        </div>
      </div>
    </div>
  )
}
