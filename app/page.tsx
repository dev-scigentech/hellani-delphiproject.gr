"use client"
import Link from "next/link"
import { Brain, FileText, BarChart3, ArrowRight, CheckCircle, RotateCcw, Users, Target, Lightbulb } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// Mock theme data - keeping only one theme, now without password functionality
const themes = [
  {
    id: "theme-1",
    title: "Ανοσολογική Ανασύσταση στην Υποτροπιάζουσα Πολλαπλή Σκλήρυνση",
    titleEn: "The Role of Immunological Reconstitution in Relapsing Multiple Sclerosis",
    description: "Εξερεύνηση των σύγχρονων μεθόδων νευρολογικής αξιολόγησης και διάγνωσης.",
    descriptionEn: "Exploration of modern methods of neurological assessment and diagnosis.",
    icon: <Brain className="w-5 h-5" />,
  },
]

export default function HomePage() {
  const { t, language } = useLanguage()

  const handleParticipateClick = () => {
    document.getElementById("full-forms-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section with New Layout */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%236366f1%22 fillOpacity%3D%220.05%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                {language === "el"
                  ? "Ακρογωνιαίος Λίθος της Επιστημονικής Συναίνεσης"
                  : "A Cornerstone of Expert Consensus"}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {language === "el" ? (
                  <>
                    Το{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      HELANI Delphi Project
                    </span>
                  </>
                ) : (
                  <>
                    The{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      HELANI Delphi Project
                    </span>
                  </>
                )}
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                {language === "el"
                  ? "Χαράσσοντας τον Δρόμο για την Προόδο της έρευνας στη Νευροανοσολογία στην Ελλάδα"
                  : "Paving the Way for Advances in Neuroimmunology in Greece"}
              </h2>

              {/* Key highlights */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    {language === "el"
                      ? "Πρωτοποριακή μεθοδολογία Delphi για επιστημονική συναίνεση"
                      : "Pioneering Delphi methodology for scientific consensus"}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    {language === "el"
                      ? "Συμμετοχή διακεκριμένων εμπειρογνωμόνων από όλη την Ελλάδα"
                      : "Participation of distinguished experts from across Greece"}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    {language === "el"
                      ? "Διαμόρφωση του μέλλοντος της Νευροανοσολογίας"
                      : "Shaping the future of Neuroimmunology"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/papers"
                  className="text-sm inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>{t("exploreProjects")}</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/methodology"
                  className="text-sm inline-flex items-center px-6 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold shadow-lg border border-gray-200"
                >
                  <span>{t("learnMore")}</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/images/helani-logo.jpg"
                  alt="HELANI Logo"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                />
                {/* Decorative elements around logo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-indigo-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-purple-500 rounded-full opacity-25 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>

          {/* Introduction paragraphs moved below the hero */}
          <div className="mt-20">
            <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {language === "el"
                  ? "Το πεδίο της Νευροανοσολογίας εξελίσσεται με πρωτοφανή ρυθμό. Τα τελευταία χρόνια, έχουμε γίνει μάρτυρες ρηξικέλευθων εξελίξεων στην κατανόηση των πολύπλοκων ανοσολογικών και φλεγμονωδών διεργασιών που υποκρύπτονται σε διαταραχές του κεντρικού και περιφερικού νευρικού συστήματος, των νευρομυϊκών συνάψεων και των μυών. Αυτές οι επιστημονικές ανακαλύψεις μετασχηματίζουν ταχύτατα τις θεραπευτικές προσεγγίσεις για διάφορες νευρολογικές παθήσεις."
                  : "The landscape of Neuroimmunology is evolving at an unprecedented pace. In recent years, we've witnessed groundbreaking developments in understanding the intricate immunological and inflammatory processes that underpin disorders of the central and peripheral nervous system, neuromuscular junctions, and muscles. These scientific breakthroughs are rapidly transforming therapeutic approaches for various neurological diseases."}
              </p>

              <p>
                {language === "el"
                  ? "Στην Ελληνική Ακαδημία Νευροανοσολογίας (ΕΛΛ.Α.ΝΑ.), αναγνωρίζουμε την επιτακτική ανάγκη να αναλύσουμε, να συνθέσουμε, να επικαιροποιήσουμε και να μεταφράσουμε αποτελεσματικά αυτές τις αναδυόμενες επιστημονικές γνώσεις στην βέλτιστη κλινική πρακτική σε όλη την Ελλάδα. Για να ανταποκριθούμε σε αυτή την επιταγή, η ΕΛΛ.Α.ΝΑ. είναι περήφανη που παρουσιάζει το 'HELANI Delphi Project'."
                  : "At the Hellenic Academy of Neuroimmunology (HELANI), we recognize the critical need to systematically analyze, synthesize, update, and effectively translate these burgeoning scientific insights into optimal clinical practice throughout Greece. To address this imperative, HELANI is proud to introduce the 'HELANI Delphi Project.'"}
              </p>

              <p>
                {language === "el"
                  ? "Αυτή η πρωτοποριακή πρωτοβουλία αξιοποιεί τη δύναμη και τα αποδεδειγμένα πλεονεκτήματα της μεθόδου Delphi, μιας άκρως δομημένης και επαναληπτικής διαδικασίας σχεδιασμένης για τη συλλογή και βελτίωση των απόψεων των εμπειρογνωμόνων."
                  : "This pioneering initiative harnesses the power and proven advantages of the Delphi method, a highly structured and iterative process designed to gather and refine expert opinions."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delphi Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("processTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("processSubtitle")}</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Step 1: Questionnaire */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{t("questionnaires")}</h3>
              <p className="text-gray-600 text-center max-w-xs">{t("questionnaireDesc")}</p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden lg:block">
              <ArrowRight className="w-8 h-8 text-gray-400" />
            </div>
            <div className="lg:hidden">
              <div className="w-px h-8 bg-gray-300"></div>
            </div>

            {/* Step 2: Expert Panel */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-sm">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{t("expertPanel")}</h3>
              <p className="text-gray-600 text-center max-w-xs">{t("expertPanelDesc")}</p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden lg:block">
              <ArrowRight className="w-8 h-8 text-gray-400" />
            </div>
            <div className="lg:hidden">
              <div className="w-px h-8 bg-gray-300"></div>
            </div>

            {/* Step 3: Analysis */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <BarChart3 className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{t("analysisConsensus")}</h3>
              <p className="text-gray-600 text-center max-w-xs">{t("analysisDesc")}</p>
            </div>
          </div>

          {/* Iterative Process Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 border border-blue-200">
              <RotateCcw className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700 font-medium">{t("iterativeProcess")}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">{t("iterativeProcessDesc")}</p>
          </div>
        </div>
      </section>

      {/* Understanding the Delphi Method Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "el"
                ? "Κατανόηση της Μεθόδου Delphi και των Delphi Papers"
                : "Understanding the Delphi Method and Delphi Papers"}
            </h2>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {language === "el"
                ? "Τα Delphi Papers αποτελούν μια ξεχωριστή μορφή επιστημονικής δημοσίευσης που βασίζεται στη μέθοδο Delphi. Αυτή η μέθοδος διευκολύνει μια συστηματική προσέγγιση για την επίτευξη συναίνεσης ή τη διασαφήνιση αποκλινουσών απόψεων μεταξύ μιας ομάδας εμπειρογνωμόνων σε ένα συγκεκριμένο θέμα. Η διαδικασία περιλαμβάνει τυπικά:"
                : "Delphi Papers represent a distinct form of scientific publication rooted in the Delphi method. This method facilitates a systematic approach to achieving consensus or illuminating divergent viewpoints among a panel of experts on a specific subject. The process typically involves:"}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "el" ? "Ανώνυμα Ερωτηματολόγια" : "Anonymous Questionnaires"}
                </h3>
                <p className="text-gray-700">
                  {language === "el"
                    ? "Οι εμπειρογνώμονες απαντούν σε μια σειρά δομημένων ερωτηματολογίων εξ αποστάσεως και ασύγχρονα, διασφαλίζοντας αμερόληπτη ανατροφοδότηση ανεπηρέαστη από δυναμικές ομάδας ή ατομικό κύρος."
                    : "Experts respond to a series of structured questionnaires remotely and asynchronously, ensuring unbiased feedback uninfluenced by group dynamics or individual prestige."}
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <RotateCcw className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "el"
                    ? "Επαναληπτικοί Γύροι με Ελεγχόμενη Ανατροφοδότηση"
                    : "Iterative Rounds with Controlled Feedback"}
                </h3>
                <p className="text-gray-700">
                  {language === "el"
                    ? "Μετά από κάθε γύρο, ένας συντονιστής συγκεντρώνει και αναλύει τις απαντήσεις, παρέχοντας ανώνυμες περιλήψεις πίσω στην ομάδα. Αυτή η ελεγχόμενη ανατροφοδότηση ενθαρρύνει τους συμμετέχοντες να επανεξετάσουν τις αρχικές τους θέσεις υπό το πρίσμα της συλλογικής εισροής, προωθώντας έτσι τη σύγκλιση των προοπτικών."
                    : "After each round, a facilitator compiles and analyzes the responses, providing anonymized summaries back to the panel. This controlled feedback encourages participants to reconsider their initial opinions in light of the collective input, fostering a convergence of perspectives."}
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "el" ? "Δόμηση Συναίνεσης" : "Consensus Building"}
                </h3>
                <p className="text-gray-700">
                  {language === "el"
                    ? "Μέσω αυτών των διαδοχικών γύρων, η μέθοδος βελτιώνει προοδευτικά τις απόψεις, με στόχο την επίτευξη υψηλού βαθμού συναίνεσης μεταξύ των εμπειρογνωμόνων σε βασικές δηλώσεις ή συστάσεις."
                    : "Through these successive rounds, the method progressively refines opinions, aiming to achieve a high degree of consensus among the experts on key statements or recommendations."}
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === "el"
                  ? "Αυτή η ισχυρή μεθοδολογία επιτρέπει την ελεύθερη έκφραση διαφορετικών γνώσεων και μια βαθύτερη, πιο λεπτομερή κατανόηση σύνθετων ζητημάτων, οδηγώντας τελικά σε καλά ενημερωμένα και ευρέως υποστηριζόμενα συμπεράσματα."
                  : "This robust methodology allows for the free expression of diverse insights and a deeper, more nuanced understanding of complex issues, ultimately leading to well-informed and broadly supported conclusions."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              {language === "el" ? "Η Αποστολή μας" : "Our Mission"}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "el" ? "Γεφυρώνοντας την Έρευνα και την Πρακτική" : "Bridging Research and Practice"}
            </h2>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {language === "el"
                    ? "Ο πρωταρχικός στόχος του HELANI Delphi Project είναι να προωθήσει μια δυναμική συνέργεια μεταξύ της αιχμής της κλινικής έρευνας και της πραγματικής ιατρικής εμπειρίας."
                    : "The HELANI Delphi Project's overarching goal is to foster a dynamic synergy between cutting-edge clinical research and real-world medical experience."}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {language === "el"
                    ? "Για κάθε συγκεκριμένο έργο, η Επιτροπή Delphi της ΕΛΛ.Α.ΝΑ. θα επιλέγει προσεκτικά έναν αριθμό νευρολόγων για να συμμετάσχουν στη διαδικασία. Αυτή η αυστηρή επιλογή διασφαλίζει ότι τα αποτελέσματα του έργου αντικατοπτρίζουν μια ολοκληρωμένη συγκέντρωση εμπειρογνωμοσύνης και ποικίλων κλινικών προοπτικών από την ελληνική νευρολογική κοινότητα. Η συμμετοχή των ειδικών θα περιλαμβάνει κυρίως την εξ αποστάσεως και ασύγχρονη συμπλήρωση εξειδικευμένων ερωτηματολογίων μέσω ψηφιακών εργαλείων. Για τη διασφάλιση της αντικειμενικότητας και της αμεροληψίας, όλη η επεξεργασία των δεδομένων θα πραγματοποιείται με αυστηρή ανωνυμία. Μετά τη φάση των ερωτηματολογίων, θα προγραμματιστεί μια κρίσιμη δια ζώσης συνάντηση για όλους τους συμμετέχοντες, η οποία θα χρησιμεύσει ως πλατφόρμα για την παρουσίαση και τη συζήτηση των συλλογικών αποτελεσμάτων της διαδικασίας Delphi. Η ΕΛΛ.Α.ΝΑ. δεσμεύεται να υποστηρίζει τους συμμετέχοντες, καλύπτοντας τα έξοδα που σχετίζονται με τη μετάβαση, τη διαμονή και τη σίτιση κατά τη διάρκεια της δια ζώσης συνάντησης. Σας προσκαλούμε ολόψυχα να συμμετάσχετε σε αυτή τη σημαντική προσπάθεια, η οποία υπόσχεται να διαμορφώσει το μέλλον της Νευροανοσολογίας στην Ελλάδα και να αναβαθμίσει ουσιαστικά την περίθαλψη των ασθενών."
                    : "For each specific project, HELANI's Delphi Committee will carefully select a number of neurologists to participate in the process. This rigorous selection ensures that the project's outcomes reflect a comprehensive pooling of expertise and diverse clinical perspectives from the Greek neurological community. Participants' involvement will primarily entail the remote and asynchronous completion of specialized questionnaires using digital tools. To ensure objectivity and impartiality, all data processing will maintain strict anonymity. Following the questionnaire phase, a pivotal in-person meeting for all participants will be scheduled, serving as a platform to present and collaboratively discuss the synthesized results of the Delphi process. HELANI is committed to supporting participants, covering expenses related to travel, accommodation, and meals during the in-person meeting. We wholeheartedly invite you to join us in this significant endeavor, which promises to shape the future of Neuroimmunology in Greece and ultimately enhance patient care."}
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    {language === "el" ? "Ψηφιακά Εργαλεία" : "Digital Tools"}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {language === "el"
                      ? "Εξ αποστάσεως και ασύγχρονη συμπλήρωση εξειδικευμένων ερωτηματολογίων"
                      : "Remote and asynchronous completion of specialized questionnaires"}
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    {language === "el" ? "Αυστηρή Ανωνυμία" : "Strict Anonymity"}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {language === "el"
                      ? "Όλη η επεξεργασία δεδομένων διασφαλίζει αντικειμενικότητα και αμεροληψία"
                      : "All data processing ensures objectivity and impartiality"}
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    {language === "el" ? "Δια Ζώσης Συνάντηση" : "In-Person Meeting"}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {language === "el"
                      ? "Παρουσίαση και συζήτηση των συλλογικών αποτελεσμάτων της διαδικασίας"
                      : "Presentation and discussion of collective results from the process"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <p className="text-center text-gray-700 font-medium">
                {language === "el"
                  ? "Η ΕΛΛ.Α.ΝΑ. δεσμεύεται να υποστηρίζει τους συμμετέχοντες, καλύπτοντας τα έξοδα μετάβασης, διαμονής και σίτισης."
                  : "HELANI is committed to supporting participants, covering expenses related to travel, accommodation, and meals."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thematic Areas Section */}
      <section id="full-forms-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("thematicAreas")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("thematicIntro")}</p>
          </div>

          {/* Simplified Theme Card - No Password Required */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {themes.map((theme) => (
                <div
                  key={theme.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {theme.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === "el" ? theme.title : theme.titleEn}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {language === "el" ? theme.description : theme.descriptionEn}
                  </p>

                  <Link
                    href="/papers"
                    className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                  >
                    {t("exploreProjects")}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t("participateFuture")}</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{t("participateDesc")}</p>
          <p className="text-lg text-gray-400">
            {language === "el"
              ? "Σας προσκαλούμε ολόψυχα να συμμετάσχετε σε αυτή τη σημαντική προσπάθεια, η οποία υπόσχεται να διαμορφώσει το μέλλον της Νευροανοσολογίας στην Ελλάδα."
              : "We wholeheartedly invite you to join us in this significant endeavor, which promises to shape the future of Neuroimmunology in Greece."}
          </p>
        </div>
      </section>
    </div>
  )
}
