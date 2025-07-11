'use client';
// test for branch deploy

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import {
  Lock,
  AlertCircle,
  ArrowLeft,
  FileText,
  Users,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Award,
  GraduationCap,
  User,
} from 'lucide-react';

export default function PapersPage() {
  const { t, language } = useLanguage();
  const [inputPassword, setInputPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [expandedExperts, setExpandedExperts] = useState<Set<string>>(
    new Set()
  );

  const toggleExpert = (expertId: string) => {
    setExpandedExperts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(expertId)) {
        newSet.delete(expertId);
      } else {
        newSet.add(expertId);
      }
      return newSet;
    });
  };

  // Password array - same as homepage theme
  const validPasswords = [
    'neuro2024',
    'brain2024',
    'neurology',
    'delphi123',
    'research2024',
    'medical2024',
    'study2024',
    'expert2024',
    'consensus',
    'neural2024',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validPasswords.includes(inputPassword)) {
      setShowError(false);
      setIsUnlocked(true);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const paperData = {
    title: {
      el: 'Delphi Paper: Ανοσολογική Ανασύσταση',
      en: 'Delphi Paper: Immunological Reconstitution',
    },
    subtitle: {
      el: 'Γιατί επιλέξαμε την «Ανοσολογική Ανασύσταση στην Υποτροπιάζουσα Πολλαπλή Σκλήρυνση» ως το πρώτο μας Delphi Paper',
      en: "Why We Chose 'The Role of Immunological Reconstitution in Relapsing Multiple Sclerosis' for Our First HELANI Delphi Paper",
    },
    description: {
      el: `Η Ελληνική Ακαδημία Νευροανοσολογίας (ΕΛΛ.Α.ΝΑ.) είναι στην ευχάριστη θέση να ανακοινώσει το πρώτο HELANI Delphi Paper, το οποίο θα επικεντρωθεί σε ένα κρίσιμο και επίκαιρο θέμα: «Ο Ρόλος της Ανοσολογικής Ανασύστασης στην Υποτροπιάζουσα Πολλαπλή Σκλήρυνση».

Η επιλογή αυτής της θεματικής δεν είναι τυχαία. Η Υποτροπιάζουσα Πολλαπλή Σκλήρυνση (ΥΠΣ) αποτελεί μια χρόνια, πολύπλοκη νευρολογική πάθηση που επηρεάζει χιλιάδες συμπολίτες μας. Τα τελευταία χρόνια, έχουμε δει εντυπωσιακές εξελίξεις στις θεραπευτικές προσεγγίσεις, με την ανοσολογική ανασύσταση να αναδεικνύεται ως μια ιδιαίτερα δυναμική στρατηγική.

Ωστόσο, παρά την κλινική της σημασία, υπάρχουν ακόμη σημαντικά ερωτήματα σχετικά με την βέλτιστη εφαρμογή, τις ενδείξεις, τους πιθανούς κινδύνους και τα μακροπρόθεσμα οφέλη της ανοσολογικής ανασύστασης στην ΥΠΣ στο ελληνικό κλινικό περιβάλλον. Η διασπορά της γνώσης και των εμπειριών μεταξύ των Ελλήνων νευρολόγων καθιστά επιτακτική την ανάγκη για μια συστηματική προσέγγιση που θα συγκεντρώσει και θα αξιολογήσει αυτές τις πληροφορίες.

Μέσω της μεθοδολογίας Delphi, στοχεύουμε να επιτύχουμε ευρεία συναίνεση μεταξύ Ελλήνων νευρολόγων με εμπειρία στη διαχείρηση ασθενών με ΥΠΣ, σχετικά με τις βέλτιστες πρακτικές και τις μελλοντικές κατευθύνσεις για την ανοσολογική ανασύσταση ως θεραπευτικής επιλογής για τη νόσο.

Το αποτέλεσμα αυτής της συλλογικής προσπάθειας θα είναι ένα οδηγός αναφοράς, ένα Delphi Paper, που θα συμβάλει στην τυποποίηση της φροντίδας, στην ενίσχυση της κλινικής εκπαίδευσης και τελικά στη βελτίωση της ποιότητας ζωής των ατόμων με ΥΠΣ στην Ελλάδα. Είμαστε πεπεισμένοι ότι αυτή η επιλογή θα θέσει γερά θεμέλια για τη σειρά των HELANI Delphi Papers, αντικατοπτρίζοντας τη δέσμευσή μας για την προώθηση της τεκμηριωμένης ιατρικής πράξης στην κλινική Νευροανοσολογία.`,
      en: `The Hellenic Academy of Neuroimmunology (HELANI) is pleased to announce its inaugural HELANI Delphi Paper, which will focus on a critical and timely topic: 'The Role of Immunological Reconstitution in Relapsing Multiple Sclerosis.'

The selection of this thematic area is by no means arbitrary. Relapsing Multiple Sclerosis (RMS) is a chronic, complex neurological condition affecting thousands of individuals worldwide, including many in Greece. In recent years, we've witnessed impressive advancements in therapeutic approaches, with immunological reconstitution emerging as a particularly dynamic strategy.

Despite its clinical significance, however, substantial questions remain regarding the optimal application, indications, potential risks, and long-term benefits of immunological reconstitution in RMS within the Greek clinical landscape. The distribution of knowledge and experiences among Greek neurologists makes it imperative to adopt a systematic approach that gathers and evaluates this vital information.

Through the Delphi methodology, we aim to achieve broad consensus among Greek neurologists with clinical experience in RMS management, on best practices and future directions for immunological reconstitution as a therapeutic option in the disease.

The outcome of this collaborative effort will be a reference guide, a Delphi Paper, that will contribute to standardizing care, enhancing clinical education, and ultimately improving the quality of life for patients with RMS in Greece. We are confident that this choice will lay a strong foundation for the series of HELANI Delphi Papers, reflecting our commitment to advancing evidence-based medical practice in Neuroimmunology.`,
    },
    entryTitle: {
      el: 'Είσοδος για Συμμετέχοντες/Συντονιστές',
      en: 'Entry for Participants/Coordinators',
    },
    entryDescription: {
      el: 'Παρακαλώ εισάγετε τον κωδικό πρόσβασης της ομάδας σας:',
      en: "Please enter your team's access code:",
    },
    bibliography: {
      el: 'Βιβλιογραφία και Πηγές',
      en: 'Bibliography and Sources',
    },
    expertPanel: {
      el: 'Expert Panel',
      en: 'Expert Panel',
    },
    finalConsensusMeeting: {
      el: 'Final Consensus Meeting',
      en: 'Final Consensus Meeting',
    },
    meetingDate: {
      el: 'Ημερομηνία',
      en: 'Date',
    },
    meetingLocation: {
      el: 'Τόπος',
      en: 'Location',
    },
    meetingParticipants: {
      el: 'Συμμετέχοντες',
      en: 'Participants',
    },
    questionnaire: {
      el: 'Ερωτηματολόγιο Delphi: Ανοσολογική Ανασύσταση',
      en: 'Delphi Questionnaire: Immunological Reconstitution',
    },
    questionnaireDescription: {
      el: 'Παρακαλώ συμπληρώστε το παρακάτω ερωτηματολόγιο. Οι απαντήσεις σας είναι ανώνυμες.',
      en: 'Please complete the following questionnaire. Your responses are anonymous.',
    },
    backToHome: {
      el: 'Πίσω στην Αρχική Σελίδα',
      en: 'Back to Homepage',
    },
    otherThemes: {
      el: 'Άλλες Θεματικές',
      en: 'Other Themes',
    },
    viewFullCV: {
      el: 'Προβολή Πλήρους Βιογραφικού',
      en: 'View Full CV',
    },
    hideCV: {
      el: 'Απόκρυψη Βιογραφικού',
      en: 'Hide CV',
    },
  };

  const references = [
    '1. AlSharoqi IA, Aljumah M, Bohlega S, et al. Immune reconstitution therapy or continuous immunosuppression for the management of active relapsing-remitting multiple sclerosis patients? A narrative review. Neurol Ther. 2020;9:55–66.',

    '2. Karussis, D., & Petrou, P. (2018). Immune reconstitution therapy (IRT) in multiple sclerosis: the rationale. Immunologic Research, 66(6), 642–648. https://doi.org/10.1007/S12026-018-9032-5',

    '3. Lünemann, J. D., Ruck, T., Muraro, P. A., Bar-Or, A., & Wiendl, H. (2020). Immune reconstitution therapies: concepts for durable remission in multiple sclerosis. Nature Reviews Neurology, 16(1), 56–62. https://doi.org/10.1038/S41582-019-0268-Z',

    "4. Giovannoni, G., & Mathews, J. (2022). Cladribine Tablets for Relapsing–Remitting Multiple Sclerosis: A Clinician's Review. Neurology and Therapy, 11(2), 571–595. https://doi.org/10.1007/s40120-022-00339-7",

    '5. Adamec, I., Jovanović, I., Krbot Skorić, M., & Habek, M. (2021). Double immune reconstitution therapy: Cladribine after alemtuzumab in the treatment of multiple sclerosis. European Journal of Neurology. https://doi.org/10.1111/ENE.15153',

    '6. AlJumah, M., AlKhawajah, M., Qureshi, S., Althubaiti, I., Ayoub, O., Bohlega, S., Bushnag, A., Cupler, E., Daif, A., Boghdady, A. E., Hassan, A., Malik, Y. A., Saeedi, J., Al-Shamrany, F., Shosha, E., & Rieckmann, P. (2020). Cladribine Tablets and Relapsing–Remitting Multiple Sclerosis: A Pragmatic, Narrative Review of What Physicians Need to Know. Neurology and Therapy, 9(1), 11–23. https://doi.org/10.1007/s40120-020-00177-5',

    '7. Rolla, S., Maglione, A., De Mercanti, S. F., & Clerico, M. (2020). The Meaning of Immune Reconstitution after Alemtuzumab Therapy in Multiple Sclerosis. Cells, 9(6), 1396–1412. https://doi.org/10.3390/CELLS9061396',

    '8. De Sèze, J., Suchet, L., Mekies, C. et al. The Place of Immune Reconstitution Therapy in the Management of Relapsing Multiple Sclerosis in France: An Expert Consensus. Neurol Ther 12, 351–369 (2023). https://doi.org/10.1007/s40120-022-00430-z',

    '9. Sorensen PS, Sellebjerg F. Pulsed immune reconstitution therapy in multiple sclerosis. Therapeutic Advances in Neurological Disorders. 2019;12. doi:10.1177/1756286419836913',

    '10. Kaunzner, U. W., & Gauthier, S. A. (2017). MRI in the assessment and monitoring of multiple sclerosis: an update on best practice. Therapeutic advances in neurological disorders, 10(6), 247–261. https://doi.org/10.1177/1756285617708911',

    '11. Gentili L, Capuano R, Gaetani L, et al. Impact of post-contrast MRI in the definition of active multiple sclerosis. J Neurol Sci. 2022;440:120338. doi:10.1016/j.jns.2022.120338',

    '12. L. Lorefice, C. Piras, V. Sechi, M.A. et.al, Spinal cord MRI activity in multiple sclerosis: Predictive value for relapses and impact on treatment decisions, J Neurol Sci, 2024, 123057, https://doi.org/10.1016/j.jns.2024.123057',

    '13. Del Negro, I., Pez, S., Gigli, G. L., & Valente, M. (2022). Disease Activity and Progression in Multiple Sclerosis: New Evidences and Future Perspectives. Journal of clinical medicine, 11(22), 6643. https://doi.org/10.3390/jcm11226643',

    '14. Selmaj K, Cree BAC, Barnett M, Thompson A, Hartung HP. Multiple sclerosis: time for early treatment with high-efficacy drugs. J Neurol. 2024;271(1):105-115. doi:10.1007/s00415-023-11969-8',

    '15. Bertolotto, A., Martire, S., Mirabile, L., Capobianco, M., De Gobbi, M., & Cilloni, D. (2020). Autologous Hematopoietic Stem Cell Transplantation (AHSCT): Standard of Care for Relapsing-Remitting Multiple Sclerosis Patients. Neurology and therapy, 9(2), 197–203. https://doi.org/10.1007/s40120-020-00200-9',

    '16. Nucci, M., & Anaissie, E. (2014). Infections After High-Dose Chemotherapy and Autologous Hematopoietic Stem Cell Transplantation. Infections in Hematology, 49–61. https://doi.org/10.1007/978-3-662-44000-1_4',

    '17. Majhail NS. Long-term complications after hematopoietic cell transplantation. Hematol Oncol Stem Cell Ther. 2017;10(4):220-227. doi:10.1016/j.hemonc.2017.05.009',

    '18. Bhatia S. (2011). Long-term health impacts of hematopoietic stem cell transplantation inform recommendations for follow-up. Expert review of hematology, 4(4), 437–454. https://doi.org/10.1586/ehm.11.39',

    '19. Barclay K, Carruthers R, Traboulsee A, et al. Best Practices for Long-Term Monitoring and Follow-Up of Alemtuzumab-Treated MS Patients in Real-World Clinical Settings. Front Neurol. 2019;10:253. Published 2019 Mar 22. doi:10.3389/fneur.2019.00253',

    '20. Reindl, M. (2019). Anti-thyroid autoantibodies as biomarkers for alemtuzumab associated thyroid autoimmunity. EBioMedicine, 47, 22–23. https://doi.org/10.1016/j.ebiom.2019.08.065',

    '21. Guarnera C, Bramanti P, Mazzon E. Alemtuzumab: a review of efficacy and risks in the treatment of relapsing remitting multiple sclerosis. Ther Clin Risk Manag. 2017;13:871-879. Published 2017 Jul 14. doi:10.2147/TCRM.S134398',

    '22. Coles AJ, Achiron A, Traboulsee A, et al. Safety and efficacy with alemtuzumab over 13 years in relapsing-remitting multiple sclerosis: final results from the open-label TOPAZ study. Ther Adv Neurol Disord. 2023;16:17562864231194823. Published 2023 Sep 21. doi:10.1177/17562864231194823',

    '23. Giovannoni G, Soelberg Sorensen P, Cook S, et al. Efficacy of Cladribine Tablets in high disease activity subgroups of patients with relapsing multiple sclerosis: A post hoc analysis of the CLARITY study. Mult Scler. 2019;25(6):819-827. doi:10.1177/1352458518771875',

    '24. De Stefano N, Vermersch P, Wiendl H, et al. 162. Long-term Effectiveness of Cladribine Tablets over 4 years in Relapsing Multiple Sclerosis: Results from the MAGNIFY-MS Extension Study. Multiple Sclerosis and Related Disorders. 2024;92:106123. doi:10.1016/j.msard.2024.106123',

    '25. Petrou, P., Achiron, A., Cohen, E.G. et al. Practical recommendations on treatment of multiple sclerosis with Cladribine: an Israeli Experts Group‏ Viewpoint. J Neurol 270, 5188–5195 (2023). https://doi.org/10.1007/s00415-023-11846-4',

    '26. Meca-Lallana, V., García Domínguez, J.M., López Ruiz, R. et al. Expert-Agreed Practical Recommendations on the Use of Cladribine. Neurol Ther 11, 1475–1488 (2022). https://doi.org/10.1007/s40120-022-00394-0',

    '27. Meuth, S. G., Bayas, A., Kallmann, B., Linker, R. A., Rieckmann, P., Wattjes, M. P., Mathias Mäurer, & Christoph Kleinschnitz. (2022). Long-term management of multiple sclerosis patients treated with cladribine tablets beyond year 4. Expert Opinion on Pharmacotherapy, 23(13), 1503–1510. https://doi.org/10.1080/14656566.2022.2106783',

    '28. Centonze D, Amato MP, Brescia Morra V, et al. Multiple sclerosis patients treated with cladribine tablets: expert opinion on practical management after year 4. Therapeutic Advances in Neurological Disorders. 2023;16. doi:10.1177/17562864231183221',

    '29. Gold R, Fätkenheuer G, Hartung H-P, et al. Vaccination in multiple sclerosis patients treated with highly effective disease-modifying drugs: an overview with consideration of cladribine tablets. Therapeutic Advances in Neurological Disorders. 2021;14. doi:10.1177/17562864211019598',

    '30. Comi G, Cook S, Rammohan K, et al. Long-term effects of cladribine tablets on MRI activity outcomes in patients with relapsing-remitting multiple sclerosis: the CLARITY Extension study. Ther Adv Neurol Disord. 2018;11:1756285617753365. Published 2018 Jan 23. doi:10.1177/1756285617753365',

    '31. DiMauro, K.A., Swetlik, C. & Cohen, J.A. Management of multiple sclerosis in older adults: review of current evidence and future perspectives. J Neurol 271, 3794–3805 (2024). https://doi.org/10.1007/s00415-024-12384-3',

    '32. Fernández Ó, Sörensen PS, Comi G, Vermersch P, Hartung H-P, Leocani L, Berger T, Van Wijmeersch B and Oreja-Guevara C (2024) Managing multiple sclerosis in individuals aged 55 and above: a comprehensive review. Front. Immunol. 15:1379538. doi: 10.3389/fimmu.2024.1379538',

    '33. Disanto, G., Moccia, M., Sacco, R., Spiezia, A. L., Carotenuto, A., Brescia Morra, V., Gobbi, C., & Zecca, C. (2022). Monitoring of safety and effectiveness of cladribine in multiple sclerosis patients over 50 years. Multiple Sclerosis and Related Disorders, 58, 103490. https://doi.org/10.1016/j.msard.2022.103490',

    '34. Alroughani, R., Farouk, S., Youssef, J., & Boshra, A. (2024). 79. Sustained Treatment Persistence and High Adherence to Cladribine Tablets in Multiple Sclerosis: Results from Patient Support Program in Gulf Countries. Multiple Sclerosis and Related Disorders, 92, 106040. https://doi.org/10.1016/j.msard.2024.106040',

    '35. Brochet B, Solari A, Lechner-Scott J, et al. Improvements in quality of life of people with relapsing multiple sclerosis treated with cladribine tablets during the 2-year CLARIFY-MS study: a plain language summary. Neurodegener Dis Manag. 2024;14(6):193-201. doi:10.1080/17582024.2024.2429970',
  ];

  const experts = [
    {
      id: 'grigoriadis',
      name: 'Nikolaos Grigoriadis',
      nameEl: 'Νικόλαος Γρηγοριάδης',
      title: 'Professor of Neurology, Director of 2nd Neurology Department',
      titleEl: "Καθηγητής Νευρολογίας, Διευθυντής Β' Νευρολογικής Κλινικής",
      affiliation:
        'Aristotle University of Thessaloniki, AHEPA University Hospital',
      affiliationEl:
        'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης, Πανεπιστημιακό Νοσοκομείο ΑΧΕΠΑ',
      researchInterests:
        'Clinical and Experimental Neuroimmunology, CNS Immunopathology, Multiple Sclerosis, Experimental Cell Therapies for Autoimmune Demyelination',
      researchInterestsEl:
        'Κλινική και Πειραματική Νευροανοσολογία, Ανοσοπαθολογία ΚΝΣ, Πολλαπλή Σκλήρυνση, Πειραματικές Κυτταρικές Θεραπείες για Αυτοάνοση Απομυελίνωση',
      bioEn:
        'Dr. Nikolaos Grigoriadis graduated from the School of Medicine of the Aristotle University of Thessaloniki. He completed his doctoral dissertation and specialization in Neurology at the same institution. He has specialized in clinical and experimental Neuroimmunology and immunopathology of the Central Nervous System (CNS) at several research centers and institutions abroad. Currently, he is a Professor of Neurology at the Aristotle University of Thessaloniki and Director of the 2nd Neurology Department at AHEPA University Hospital, the Multiple Sclerosis (MS) Center, and the Laboratory of Experimental Neurology and Neuroimmunology. He is also a Research Associate at the Institute of Applied Biosciences, Center for Research and Technology Hellas (CERTH, www.certh.gr). Professor Grigoriadis is a member of various international scientific committees such as ESNI, ParadigMS, the MS subcommittee of the ENS, the ECTRIMS committee, and he is a Co-founder and General Secretary of the Hellenic Academy of Neuroimmunology. He is a former President and currently General Secretary of the Hellenic Neurological Society. He is the coordinator of over 50 multicenter clinical trials for MS and principal investigator in collaborative research projects on experimental cell therapies for autoimmune demyelination of the CNS. He has published more than 330 papers in peer-reviewed journals (Hirsch Index: 53, i10-index: 151, Citation Index: 10,669). He has received multiple awards for his scientific work.',
      bioEl:
        "Ο Δρ Νικόλαος Γρηγοριάδης αποφοίτησε από την Ιατρική Σχολή του Αριστοτέλειου Πανεπιστημίου Θεσσαλονίκης. Έκανε τη διδακτορική του διατριβή και την ειδικότητα στη Νευρολογία στο ίδιο ίδρυμα. Έχει ειδικευτεί στην κλινική και πειραματική Νευροανοσολογία και ανοσοπαθολογία του ΚΝΣ σε μια σειρά από ερευνητικά κέντρα και ιδρύματα του εξωτερικού. Σήμερα είναι Καθηγητής Νευρολογίας στο Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης και Διευθυντής της Β' Νευρολογικής Κλινικής του Πανεπιστημιακού Νοσοκομείου ΑΧΕΠΑ, του Κέντρου Πολλαπλής Σκλήρυνσης (ΠΣ) και του Εργαστηρίου Πειραματικής Νευρολογίας και Νευροανοσολογίας. Είναι επίσης Συνεργάτης Ερευνητής στο Ινστιτούτο Εφαρμοσμένης Βιοεπιστήμης, Κέντρο Έρευνας και Τεχνολογίας Ελλάς (ΕΚΕΤΑ, www.certh.gr). Ο καθηγητής Γρηγοριάδης είναι μέλος διαφόρων διεθνών επιστημονικών επιτροπών όπως το ESNI, το ParadigMS, η υποεπιτροπή της ΕΝΣ για την Πολλαπλή Σκλήρυνση, η επιτροπή ECTRIMS, Συνιδρυτής και Γενικός Γραμματέας της Ελληνικής Ακαδημίας Νευροανοσολογίας. Είναι πρώην Πρόεδρος και σήμερα Γενικός Γραμματέας της Ελληνικής Νευρολογικής Εταιρείας. Είναι συντονιστής σε περισσότερες από 50 πολυκεντρικές κλινικές δοκιμές για την ΠΣ και κύριος ερευνητής στη συνεργατική έρευνα έργα για πειραματικές κυτταρικές θεραπείες στην αυτοάνοση απομυελίνωση του ΚΝΣ. Έχει δημοσιεύσει περισσότερες από 330 εργασίες σε περιοδικά με κριτές (Hirsh Factor:53, i10- index:151 Citation Index:10669). Έχει βραβευτεί πολλές φορές για την επιστημονική του εργασία.",
      image: '/images/grigoriadis.jpg',
      publications: '330+',
      citations: '10,669',
      hIndex: '53',
      clinicalTrials: '50+ multicenter trials',
      awards: 'Multiple scientific awards',
    },
    {
      id: 'iliopoulos',
      name: 'Ioannis Iliopoulos',
      nameEl: 'Ιωάννης Ηλιόπουλος',
      title:
        'Professor of Neurology, Director of the University Neurology Department',
      titleEl:
        'Καθηγητής Νευρολογίας, Διευθυντής Πανεπιστημιακής Νευρολογικής Κλινικής',
      affiliation:
        'Democritus University of Thrace, University General Hospital of Alexandroupolis',
      affiliationEl: 'Δημοκρίτειο Πανεπιστήμιο Θράκης, Π.Γ.Ν. Αλεξανδρούπολης',
      researchInterests:
        'Humoral immune response in demyelinating diseases of the CNS, Neuroimmunology, Human monoclonal antibodies, Neuro-ophthalmology',
      researchInterestsEl:
        'Χυμική ανοσιακή απόκριση στις απομυελινωτικές παθήσεις του ΚΝΣ, Νευροανοσολογία, Ανθρώπινα μονοκλωνικά αντισώματα, Νευρο-οφθαλμολογία',
      bioEn:
        "Dr. Ioannis Iliopoulos is a Professor of Neurology at the Democritus University of Thrace, Director of the University Department of Neurology at the University General Hospital of Alexandroupolis, and Associate Director of the 'Neuroimmunology' Joint Postgraduate Program (MSc) of the Aristotle University of Thessaloniki – Democritus University of Thrace. He completed his neurology residency training at AHEPA University Hospital of Thessaloniki and his Neuroimmunology fellowship at the Hospital of the University of Pennsylvania and the Children’s Hospital of Philadelphia, PA, USA. He is a founding member of the Hellenic Academy of Neuroimmunology and was Greece’s representative on the ECTRIMS Council. Dr. Iliopoulos' research focuses on the humoral immune response in demyelinating diseases of the CNS. He contributed to the identification of a human anti-CD2 monoclonal antibody (NCBI-Protein & Gene), and several of his works are cited in prominent neurology textbooks such as Neuro-ophthalmology (Handbook of Clinical Neurology, vol. 102), McAlpine’s Multiple Sclerosis, and Electrodiagnosis in Diseases of Nerve and Muscle by J. Kimura.",
      bioEl:
        'Ο Δρ. Ιωάννης Ηλιόπουλος είναι Καθηγητής Νευρολογίας στο Δημοκρίτειο Πανεπιστήμιο Θράκης, Διευθυντής της Πανεπιστημιακής Νευρολογικής Κλινικής Π.Γ.Ν. Αλεξανδρούπολης και Αναπληρωτής Διευθυντής του Διατμηματικού Μεταπτυχιακού Προγράμματος Σπουδών Α.Π.Θ. – Δ.Π.Θ. «Νευροανοσολογία». Έλαβε το πτυχίο της Ιατρικής από το Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης και το διδακτορικό του από το Δημοκρίτειο Πανεπιστήμιο Θράκης. Ολοκλήρωσε την ειδικότητά του στη Νευρολογία στο Πανεπιστημιακό Νοσοκομείο ΑΧΕΠΑ Θεσσαλονίκης και την εξειδίκευσή του στη Νευροανοσολογία στο Πανεπιστήμιο της Πενσυλβάνια και στο Παιδιατρικό Νοσοκομείο της Φιλαδέλφειας στις ΗΠΑ. Είναι ιδρυτικό μέλος και Πρόεδρος της Ελληνικής Ακαδημίας Νευροανοσολογίας και υπήρξε μέλος του Συμβουλίου της ECTRIMS. Το ερευνητικό του έργο επικεντρώνεται στη χυμική ανοσιακή απόκριση στις απομυελινωτικές παθήσεις του ΚΝΣ. Συνέβαλε στην ταυτοποίηση ανθρώπινου μονοκλωνικού αντισώματος έναντι του CD2 (NCBI-Protein & Gene). Πολλές από τις εργασίες του αναφέρονται σε αναγνωρισμένα συγγράμματα όπως το Neuro-ophthalmology (Handbook of Clinical Neurology, vol. 102), το McAlpine’s Multiple Sclerosis και το Electrodiagnosis in Diseases of Nerve and Muscle του J. Kimura.',
      image: '/images/iliopoulos.jpg',
      awards: 'Referenced in key neurology textbooks',
    },
    {
      id: 'new-expert',
      name: 'Evangelos Kouremenos',
      nameEl: 'Ευάγγελος Κουρεμένος',
      title: 'Director of Neurology Clinic, 251 General Air Force Hospital',
      titleEl:
        'Διευθυντής Νευρολογικής Κλινικής, 251 Γενικό Νοσοκομείο Αεροπορίας',
      affiliation: '251 General Air Force Hospital',
      affiliationEl: '251 Γενικό Νοσοκομείο Αεροπορίας',
      researchInterests: 'Clinical Neurology, Neurological Disorders',
      researchInterestsEl: 'Κλινική Νευρολογία, Νευρολογικές Διαταραχές',
      bioEn:
        'I hold the position of Director of the Neurology Clinic of the 251 General Air Force Hospital. I have been practicing the specialty of neurology since 1998, bringing over 25 years of clinical experience in the field of neurology.',
      bioEl:
        'Κατέχω την θέση του διευθυντού της Νευρολογικής Κλινικής του 251 Γενικού Νοσοκομείου Αεροπορίας. Ασκώ την ειδικότητα της νευρολογίας από το 1998, φέρνοντας πάνω από 25 χρόνια κλινικής εμπειρίας στον τομέα της νευρολογίας.',
      image: '/images/new-expert.png',
      experience: '25+ years in neurology',
      clinicalRole: 'Director of Neurology Clinic',
    },

    {
      id: 'bakirtzis',
      name: 'Christos Bakirtzis',
      nameEl: 'Χρήστος Μπακιρτζής',
      title: 'Neurologist, Second Department of Neurology',
      titleEl: "Νευρολόγος, Β' Νευρολογική Κλινική",
      affiliation: 'Aristotle University of Thessaloniki, AHEPA Hospital',
      affiliationEl: 'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης, Νοσοκομείο ΑΧΕΠΑ',
      researchInterests:
        'Neuropsychology, Neuroimaging, Neuroimmunology, Multiple Sclerosis Clinical Trials',
      researchInterestsEl:
        'Νευροψυχολογία, Νευροαπεικόνιση, Νευροανοσολογία, Κλινικές Δοκιμές Πολλαπλής Σκλήρυνσης',
      bioEn:
        'Dr Christos Bakirtzis is a neurologist. He holds a master degree in Social Psychiatry from Democritus University of Thrace and a PhD from Aristotle University of Thessaloniki. He currently works in the second Department of Neurology, Aristotle University of Thessaloniki with clinical, teaching and research duties. He has participated in numerous clinical trials with regards to novel pharmaceutical agents in multiple sclerosis. He has published more than 100 Pubmed indexed articles in the fields of neuropsychology, neuroimaging and neuroimmunology. He serves as a member of the editorial boards of journals in the field of neurology and psychology. He was invited speaker in several international and national congresses. He currently serves as a member of the EAN panel of infectious diseases and member of the Neuroimmunology panel of the Hellenic Neurological Society.',
      bioEl:
        'Ο Χρήστος Μπακιρτζής είναι νευρολόγος. Είναι κάτοχος μεταπτυχιακού τίτλου στην Κοινωνική Ψυχιατρική από το Δημοκρίτειο Πανεπιστήμιο Θράκης και ολοκλήρωσε τη διδακτορική του διατριβή στο Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης. Εργάζεται στη Β Νευρολογική κλινική του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης, στο νοσοκομείο ΑΧΕΠΑ, με κλινικά, ερευνητικά και διδακτικά καθήκοντα. Έχει συμμετάσχει σε πολυάριθμες κλινικές μελέτες που αφορούν την αποτελεσματικότητα νέων φαρμακευτικών παραγόντων στην πολλαπλή σκλήρυνση. Στο συγγραφικό του έργο περιλαμβάνονται πάνω από 100 άρθρα στους τομείς της νευροψυχολογίας, νευροαπεικόνισης και νευροανοσολογίας. Είναι μέλος του εκδοτικού συμβουλίου περιοδικών με θεματικές την νευρολογία και την ψυχολογία. Αποτέλεσε προσκεκλημένος ομιλητής πολυάριθμων διεθνών και ελληνικών συνεδρίων. Στη παρούσα φάση, είναι μέλος του πάνελ για τις λοιμώδεις νόσους της Ευρωπαϊκής Ακαδημίας Νευρολογίας και του τομέα Νευροανοσολογίας της Ελληνικής Νευρολογικής Εταιρίας.',
      image: '/images/mpakirtzis.png',
      publications: '100+',
      clinicalTrials: 'Multiple MS trials',
    },

    {
      id: 'boziki',
      name: 'Marina Kleopatra Boziki',
      nameEl: 'Μαρίνα Κλεοπάτρα Μποζίκη',
      title: 'Associate Professor in Neurology',
      titleEl: 'Αναπληρώτρια Καθηγήτρια Νευρολογίας',
      affiliation:
        'Second Department of Neurology, Aristotle University of Thessaloniki',
      affiliationEl:
        "Β' Νευρολογική Πανεπιστημιακή Κλινική, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης",
      researchInterests:
        'Multiple Sclerosis, Immune-mediated CNS diseases, Clinical and Experimental Neuroimmunology, Intestinal microflora effects on MS, Biomarkers in MS',
      researchInterestsEl:
        'Πολλαπλή Σκλήρυνση, Ανοσολογικά διαμεσολαβούμενα νοσήματα ΚΝΣ, Κλινική και Πειραματική Νευροανοσολογία, Επίδραση εντερικής μικροχλωρίδας στην ΠΣ, Βιοδείκτες στην ΠΣ',
      bioEn:
        'Boziki Marina Kleopatra is an Associate Professor in Neurology with expertise in clinical and experimental Neuroimmunology. Her field of interest is Multiple Sclerosis (MS) and immune-mediated diseases of the Central Nervous System, as well as the broader field of clinical and experimental Neuroimmunology. Her particular research interests are the study of the effect of intestinal microflora on MS and Experimental Autoimmune Encephalomyelitis (EAE), as well as the study of biomarkers in MS. Dr. Boziki participated as sub- or co-investigator in >15 multicenter clinical trials for MS and neurodegenerative diseases and in 8 funded Research Studies. Her research has been published in >100 publications in scientific Journals (PubMed) and has received >3700 Citations (Scopus) with H index=27 (Scopus) [6/2025].',
      bioEl:
        "Η Μποζίκη Μαρίνα Κλεοπάτρα είναι Αναπληρώτρια Καθηγήτρια Νευρολογίας στη Β' Νευρολογική Πανεπιστημιακή Κλινική του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης. Το ειδικό πεδίο ενδιαφέροντός της είναι η Πολλαπλή Σκλήρυνση (ΠΣ) και τα ανοσολογικά διαμεσολαβούμενα νοσήματα του Κεντρικού Νευρικού Συστήματος (ΚΝΣ), καθώς και το ευρύτερο πεδίο της κλινικής και πειραματικής Νευροανοσολογίας. Ιδιαίτερα ερευνητικά της ενδιαφέροντα είναι η μελέτη της επίδρασης της εντερικής μικροχλωρίδας στην ΠΣ και στην Πειραματική Αυτοάνοση Εγκεφαλομυελίτιδα (ΠΑΕ), καθώς και η μελέτη βιοδεικτών στην ΠΣ. Συμμετείχε ως συν-ερευνητής σε >15 πολυκεντρικές κλινικές δοκιμές για την ΠΣ και άλλα νευροεκφυλιστικά νοσήματα του ΚΝΣ και σε 8 χρηματοδοτούμενες ερευνητικές μελέτες. Συμμετέχει σε >100 δημοσιεύσεις σε διεθνή επιστημονικά περιοδικά (PubMed) οι οποίες έχουν λάβει >3700 αναφορές (citations) με δείκτη Hirsch = 27 (πηγή: Scopus) [6/2025].",
      image: '/images/boziki.jpg',
      publications: '100+',
      citations: '3700+',
      hIndex: '27',
      clinicalTrials: '15+ multicenter trials',
    },
    {
      id: 'stathopoulos',
      name: 'Panos Stathopoulos',
      nameEl: 'Πάνος Σταθόπουλος',
      title: 'Assistant Professor of Neurology and Neuroimmunology',
      titleEl: 'Επίκουρος Καθηγητής Νευρολογίας και Νευροανοσολογίας',
      affiliation:
        'Laboratory of Cellular Neuroimmunology, First Department of Neurology, National and Kapodistrian University of Athens',
      affiliationEl:
        "Εργαστήριο Κυτταρικής Νευροανοσολογίας, Α' Νευρολογική Κλινική, Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών",
      email: 'pmstathopoulos@gmail.com',
      phone: '6977123789',
      researchInterests:
        'Adaptive immunity in autoimmune neurological disorders',
      researchInterestsEl:
        'Προσαρμοστική ανοσία σε αυτοάνοσες νευρολογικές διαταραχές',
      keywords:
        'B cells, T cells, autoantibodies, autoreactive T cells, multiple sclerosis, myasthenia gravis, neuromyelitis optica, autoimmune encephalitis',
      keywordsEl:
        'Β-λεμφοκύτταρα, Τ-λεμφοκύτταρα, αυτοαντισώματα, αυτοαντιδρώντα Τ-κύτταρα, πολλαπλή σκλήρυνση, μυασθένεια gravis, νευρομυελίτιδα οπτική, αυτοάνοση εγκεφαλίτιδα',
      bioEn:
        "Panos Stathopoulos received his MD and his PhD (Dr. med.) from the National and Kapodistrian University of Athens (NKUA) School of Medicine in 2002 and 2008, respectively. He trained for Neurology residency at the University Hospital of Munich/Grosshadern (Internal Medicine), the Greek Center for Mental Health and Research (Psychiatry), and the General Hospital of Athens G Gennimatas (Neurology), graduating in 2012. He then embarked upon post-doctoral neuroimmunological research/clinical training initially at the Department of Pathophysiology (NKUA, 2013-2014), then at Yale University Human Translational Immunology Program (Depts. of Neurology and Immunobiology, 2014-2019), and the University of Zurich (Dept. of Neurology, 2019-2020). In 2020, he joined the Teaching and Research Staff of the First Department of Neurology of the National and Kapodistrian University of Athens, first as a Scientific Collaborator and then as an Assistant Professor (since 2022). In parallel, he founded with coworkers/cofounders the BSRC Fleming spinoff MABY, which stands for monoclonal antibody (mAb) discovery. During these five last years (2020-2025), Dr. Stathopoulos has established and implemented state-of-the-art methods for the study of human B cells that involve B cell libraries, molecular cloning of the B cell receptor and testing of the reactivity of the constructed mAbs. Dr. Stathopoulos' research efforts are supported by the Onassis Foundation and more specifically entail the study of B cell tolerance mechanisms in the setting of in vivo perturbation by targeted therapeutics. Further current projects include pathomechanisms of NMDA encephalitis, as well as autoantibody discovery.",
      bioEl:
        'Ο Πάνος Σταθόπουλος έλαβε το πτυχίο Ιατρικής (MD) και το διδακτορικό του δίπλωμα (Dr. med.) από την Ιατρική Σχολή του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών (ΕΚΠΑ) το 2002 και το 2008, αντιστοίχως. Ειδικεύτηκε στη Νευρολογία, πραγματοποιώντας την άσκησή του στο Πανεπιστημιακό Νοσοκομείο Μονάχου/Grosshadern (Παθολογία), στο Ελληνικό Κέντρο Ψυχικής Υγιεινής και Ερευνών (Ψυχιατρική), καθώς και στο Γενικό Νοσοκομείο Αθηνών «Γ. Γεννηματάς» (Νευρολογία), από όπου και ολοκλήρωσε την ειδικότητά του το 2012. Ακολούθως, ανέπτυξε μεταδιδακτορική ερευνητική και κλινική δραστηριότητα στον τομέα της Νευροανοσολογίας, αρχικώς στο Τμήμα Παθοφυσιολογίας της Ιατρικής Σχολής του ΕΚΠΑ (2013–2014), κατόπιν στο Πρόγραμμα Μεταφραστικής Ανθρώπινης Ανοσολογίας του Πανεπιστημίου Yale (Τμήματα Νευρολογίας και Ανοσοβιολογίας, 2014–2019), καθώς και στο Τμήμα Νευρολογίας του Πανεπιστημίου της Ζυρίχης (2019–2020). Το 2020 εντάχθηκε στο Διδακτικό και Ερευνητικό Προσωπικό της Α΄ Νευρολογικής Κλινικής της Ιατρικής Σχολής του ΕΚΠΑ, αρχικά ως Επιστημονικός Συνεργάτης και έκτοτε ως Επίκουρος Καθηγητής (από το 2022). Παράλληλα, συνίδρυσε την εταιρεία MABY, τεχνοβλαστό του Ερευνητικού Κέντρου «Αλέξανδρος Φλέμιγκ», με αντικείμενο την ανακάλυψη και ανάπτυξη μονοκλωνικών αντισωμάτων (mAbs). Κατά την τελευταία πενταετία (2020–2025), ο Δρ. Σταθόπουλος έχει εγκαθιδρύσει και εφαρμόσει προηγμένες πειραματικές προσεγγίσεις για τη μελέτη των ανθρώπινων Β-λεμφοκυττάρων, οι οποίες περιλαμβάνουν την κατασκευή βιβλιοθηκών Β-κυττάρων, τη μοριακή κλωνοποίηση των υποδοχέων των Β-κυττάρων και τη λειτουργική αξιολόγηση της αντιγονικής ειδικότητας των παραχθέντων μονοκλωνικών αντισωμάτων. Η ερευνητική του δραστηριότητα υποστηρίζεται από το Ίδρυμα Ωνάση και εστιάζει στη μελέτη των μηχανισμών ανοσολογικής ανοχής των Β-λεμφοκυττάρων, υπό συνθήκες in vivo ανοσολογικής τροποποίησης μέσω στοχευμένων θεραπευτικών παρεμβάσεων. Επιπλέον ερευνητικά ενδιαφέροντα περιλαμβάνουν τη διερεύνηση των παθομηχανισμών της εγκεφαλίτιδας κατά των υποδοχέων NMDA, καθώς και την ανακάλυψη νέων αυτοαντισωμάτων.',
      image: '/images/stathopoulos.png',
      links: [
        {
          url: 'https://eginitio.uoa.gr/neyrologiki/monades/monada_neyroanosologias/ergastirio_kyttarikis_neyroanosologias',
          label: 'Lab Website',
        },
        {
          url: 'https://www.ncbi.nlm.nih.gov/myncbi/1fUb7QV5ZMHQB/bibliography/public/',
          label: 'PubMed',
        },
        {
          url: 'https://scholar.google.com/citations?user=OywWjhkAAAAJ&hl=el',
          label: 'Google Scholar',
        },
        {
          url: 'https://www.linkedin.com/in/panos-stathopoulos-94ba2843/',
          label: 'LinkedIn',
        },
      ],
    },
  ];

  const meetingData = {
    date: {
      el: '11 Ιουλίου 2025, 13:00-21:00',
      en: 'July 11, 2025, 13:00-21:00',
    },
    location: {
      el: 'Μακεδονία Palace, Θεσσαλονίκη',
      en: 'Makedonia Palace Hotel, Thessaloniki',
    },
    participants: {
      el: [
        'Αγγελάκης Κων/νος',
        'Γκουλιοβάκη Αντιγόνη',
        'Γιαννούλη Ερμιόνη',
        'Γραμματικόπουλος Γεράσιμος',
        'Θάνος Νικόλαος',
        'Κερασνούδης Αντώνης',
        'Κοτζαμάνη Δήμητρα',
        'Κουτσοδόντη Δέσποινα',
        'Μαλτέζου Μαριάννα',
        'Ναούμης Δημήτρης',
        'Νταλός Παύλος',
        'Παπαγεωργίου Παρασκευή',
        'Παπαδημητρίου Δήμητρα',
        'Σωτηρλή Στεφανία',
      ],
      en: [
        'Angelakis Konstantinos',
        'Gkouliovaki Antigoni',
        'Giannouli Ermioni',
        'Grammatikopoulos Gerasimos',
        'Kerasnoudis Antonis',
        'Kotzamani Dimitra',
        'Koutsodonti Despoina',
        'Maltezou Marianna',
        'Naoumis Dimitris',
        'Ntalos Pavlos',
        'Papageorgiou Paraskevi',
        'Papadimitriou Dimitra',
        'Sotirli Stefania',
        'Thanos Nikolaos',
      ],
    },
  };

  if (isUnlocked) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
        <div className='max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='mb-12'>
            <h1 className='text-4xl font-bold text-blue-600 mb-4 text-center'>
              {language === 'el' ? paperData.title.el : paperData.title.en}
            </h1>
            <div className='bg-blue-50 rounded-2xl p-8 mb-8 text-left'>
              <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
                {language === 'el'
                  ? paperData.subtitle.el
                  : paperData.subtitle.en}
              </h2>
              {/* Updated description rendering */}
              {(language === 'el'
                ? paperData.description.el
                : paperData.description.en
              )
                .split('\n\n')
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className='text-lg text-gray-700 leading-relaxed mb-4'
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>

          {/* Expert Panel Section with Expandable CVs */}
          <section className='mb-12'>
            <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center'>
                  <Users className='w-5 h-5 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-blue-600'>
                  {language === 'el'
                    ? paperData.expertPanel.el
                    : paperData.expertPanel.en}
                </h3>
              </div>

              <div className='space-y-6'>
                {experts.map((expert) => (
                  <div
                    key={expert.id}
                    className='bg-gray-50 rounded-xl border border-gray-200 overflow-hidden'
                  >
                    {/* Expert Header */}
                    <div className='p-6'>
                      <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between'>
                        <div className='flex flex-col sm:flex-row sm:items-start gap-6 flex-1'>
                          {/* Profile Image */}
                          <div className='flex-shrink-0'>
                            <div className='w-24 h-24 rounded-xl overflow-hidden bg-gray-100 border-2 border-gray-200'>
                              <img
                                src={expert.image || '/placeholder.svg'}
                                alt={`${
                                  language === 'el'
                                    ? expert.nameEl || expert.name
                                    : expert.name
                                } headshot`}
                                className='w-full h-full object-cover'
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.nextElementSibling?.classList.remove(
                                    'hidden'
                                  );
                                }}
                              />
                              <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 hidden'>
                                <User className='w-8 h-8 text-gray-400' />
                              </div>
                            </div>
                          </div>

                          {/* Expert Info */}
                          <div className='flex-1'>
                            <h4 className='text-xl font-bold text-gray-900 mb-2'>
                              {language === 'el'
                                ? expert.nameEl || expert.name
                                : expert.name}
                            </h4>
                            <p className='text-blue-600 font-medium mb-3'>
                              {language === 'el'
                                ? expert.titleEl || expert.title
                                : expert.title}
                            </p>
                            <p className='text-gray-600 mb-4'>
                              {language === 'el'
                                ? expert.affiliationEl || expert.affiliation
                                : expert.affiliation}
                            </p>

                            {/* Quick Stats */}
                            <div className='flex flex-wrap gap-3'>
                              {expert.publications && (
                                <div className='flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full'>
                                  <BookOpen className='w-4 h-4 text-blue-600' />
                                  <span className='text-sm font-medium text-blue-800'>
                                    {expert.publications} Publications
                                  </span>
                                </div>
                              )}
                              {expert.citations && (
                                <div className='flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full'>
                                  <Award className='w-4 h-4 text-green-600' />
                                  <span className='text-sm font-medium text-green-800'>
                                    {expert.citations} Citations
                                  </span>
                                </div>
                              )}
                              {expert.hIndex && (
                                <div className='flex items-center space-x-2 bg-purple-50 px-3 py-1 rounded-full'>
                                  <GraduationCap className='w-4 h-4 text-purple-600' />
                                  <span className='text-sm font-medium text-purple-800'>
                                    H-Index: {expert.hIndex}
                                  </span>
                                </div>
                              )}
                              {expert.experience && (
                                <div className='flex items-center space-x-2 bg-orange-50 px-3 py-1 rounded-full'>
                                  <Award className='w-4 h-4 text-orange-600' />
                                  <span className='text-sm font-medium text-orange-800'>
                                    {expert.experience}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Expand Button */}
                        <div className='lg:ml-8 mt-6 lg:mt-0'>
                          <button
                            onClick={() => toggleExpert(expert.id)}
                            className='flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-sm'
                          >
                            {language === 'el' ? (
                              <span>
                                {expandedExperts.has(expert.id)
                                  ? paperData.hideCV.el
                                  : paperData.viewFullCV.el}
                              </span>
                            ) : (
                              <span>
                                {expandedExperts.has(expert.id)
                                  ? paperData.hideCV.en
                                  : paperData.viewFullCV.en}
                              </span>
                            )}

                            {expandedExperts.has(expert.id) ? (
                              <ChevronUp className='w-4 h-4' />
                            ) : (
                              <ChevronDown className='w-4 h-4' />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded CV Content */}
                    {expandedExperts.has(expert.id) && (
                      <div className='px-6 pb-6 bg-white border-t border-gray-200'>
                        <div className='grid md:grid-cols-2 gap-8 pt-6'>
                          {/* Biography */}
                          <div>
                            <h5 className='text-lg font-semibold text-gray-900 mb-4'>
                              Biography
                            </h5>
                            <div className='prose prose-gray max-w-none'>
                              <p className='text-gray-700 leading-relaxed text-sm'>
                                {language === 'el'
                                  ? expert.bioEl || expert.bioEn
                                  : expert.bioEn}
                              </p>
                            </div>
                          </div>

                          {/* Additional Details */}
                          <div className='space-y-6'>
                            {/* Research Interests */}
                            {expert.researchInterests && (
                              <div>
                                <h5 className='font-semibold text-gray-900 mb-2'>
                                  Research Interests
                                </h5>
                                <p className='text-gray-700 text-sm'>
                                  {language === 'el'
                                    ? expert.researchInterestsEl ||
                                      expert.researchInterests
                                    : expert.researchInterests}
                                </p>
                              </div>
                            )}

                            {/* Contact Information */}
                            {expert.email && (
                              <div>
                                <h5 className='font-semibold text-gray-900 mb-2'>
                                  Contact
                                </h5>
                                <div className='space-y-1'>
                                  <p className='text-gray-700 text-sm'>
                                    <span className='font-medium'>Email:</span>{' '}
                                    {expert.email}
                                  </p>
                                  {expert.phone && (
                                    <p className='text-gray-700 text-sm'>
                                      <span className='font-medium'>
                                        Phone:
                                      </span>{' '}
                                      {expert.phone}
                                    </p>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Keywords */}
                            {expert.keywords && (
                              <div>
                                <h5 className='font-semibold text-gray-900 mb-2'>
                                  Key Research Areas
                                </h5>
                                <div className='flex flex-wrap gap-2'>
                                  {(language === 'el'
                                    ? expert.keywordsEl || expert.keywords
                                    : expert.keywords
                                  )
                                    .split(', ')
                                    .map((keyword, index) => (
                                      <span
                                        key={index}
                                        className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'
                                      >
                                        {keyword.trim()}
                                      </span>
                                    ))}
                                </div>
                              </div>
                            )}

                            {/* Clinical Trials */}
                            {expert.clinicalTrials && (
                              <div>
                                <h5 className='font-semibold text-gray-900 mb-2'>
                                  Clinical Trials
                                </h5>
                                <p className='text-gray-700 text-sm'>
                                  {expert.clinicalTrials}
                                </p>
                              </div>
                            )}

                            {/* Awards */}
                            {expert.awards && (
                              <div>
                                <h5 className='font-semibold text-gray-900 mb-2'>
                                  Awards
                                </h5>
                                <p className='text-gray-700 text-sm'>
                                  {expert.awards}
                                </p>
                              </div>
                            )}

                            {/* Clinical Role */}
                            {expert.clinicalRole && (
                              <div>
                                <h5 className='font-semibold text-gray-900 mb-2'>
                                  Clinical Role
                                </h5>
                                <p className='text-gray-700 text-sm'>
                                  {expert.clinicalRole}
                                </p>
                              </div>
                            )}

                            {/* External Links */}
                            {expert.links && expert.links.length > 0 && (
                              <div>
                                <h5 className='font-semibold text-gray-900 mb-2'>
                                  External Links
                                </h5>
                                <div className='space-y-2'>
                                  {expert.links.map((link, index) => (
                                    <a
                                      key={index}
                                      href={link.url}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors text-sm'
                                    >
                                      <ExternalLink className='w-4 h-4' />
                                      <span>{link.label}</span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Participants Section */}
          <section className='mb-12'>
            <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center'>
                  <Users className='w-5 h-5 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-blue-600'>
                  {language === 'el'
                    ? paperData.meetingParticipants.el
                    : paperData.meetingParticipants.en}
                </h3>
              </div>
              <div className='bg-green-50 rounded-xl p-6 border border-green-200'>
                <div className='space-y-2'>
                  {(language === 'el'
                    ? meetingData.participants.el
                    : meetingData.participants.en
                  ).map((participant, index) => (
                    <div key={index} className='flex items-center space-x-2'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span className='text-gray-700 text-sm'>
                        {participant}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Questionnaire Section */}
          <section className='mb-12'>
            <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 flex flex-col justify-center gap-4'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center'>
                  <FileText className='w-5 h-5 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-green-600'>
                  {language === 'el'
                    ? paperData.questionnaire.el
                    : paperData.questionnaire.en}
                </h3>
              </div>
              <p className='text-gray-700 mb-6'>
                {language === 'el'
                  ? paperData.questionnaireDescription.el
                  : paperData.questionnaireDescription.en}
              </p>

              {/* Embedded Form */}
              <div className='bg-gray-50 rounded-xl p-4'>
                {/* Iframe itself */}
                <iframe
                  src='https://forms.zohopublic.com/scigentechnologiessa/form/Untitled4/formperma/krhEDBlIoaxwqLrrdE97R82ODiwcvJGaK6cBdoDbGog'
                  width='100%'
                  height='400'
                  frameBorder='0'
                  className='w-full'
                  title='Delphi Questionnaire: Immunological Reconstitution'
                />
              </div>
              {/* Download Link for English Version */}
              <div className='mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h4 className='font-semibold text-blue-800 mb-1'>
                      {language === 'el' ? 'Αγγλική Έκδοση' : 'English Version'}
                    </h4>
                    <p className='text-sm text-gray-600'>
                      {language === 'el'
                        ? 'Κατεβάστε το ερωτηματολόγιο σε μορφή PDF'
                        : 'Download the questionnaire in PDF format'}
                    </p>
                  </div>
                  <a
                    href='https://scigen-archives.s3-eu-west-1.amazonaws.com/delphi-questionnaire.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-sm'
                  >
                    <svg
                      className='w-4 h-4 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      />
                    </svg>
                    {language === 'el' ? 'Κατέβασμα PDF' : 'Download PDF'}
                  </a>
                </div>
              </div>
              <hr />

              {/* Embedded Form */}
              <div className='bg-gray-50 rounded-xl p-4'>
                {/* Iframe itself */}
                <iframe
                  src='https://forms.zohopublic.com/scigentechnologiessa/form/Untitled5/formperma/NTWDneyXzIjUZCm2rSDSMqbtZ2FERQ5IwPtrsFlF1qs'
                  width='100%'
                  height='1200'
                  frameBorder='0'
                  className='w-full'
                  title='Delphi Questionnaire: Immunological Reconstitution'
                />
              </div>
              {/* Download Link for English Version */}
              <div className='mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h4 className='font-semibold text-blue-800 mb-1'>
                      {language === 'el' ? 'Αγγλική Έκδοση' : 'English Version'}
                    </h4>
                    <p className='text-sm text-gray-600'>
                      {language === 'el'
                        ? 'Κατεβάστε το ερωτηματολόγιο σε μορφή PDF'
                        : 'Download the questionnaire in PDF format'}
                    </p>
                  </div>
                  <a
                    href='https://scigen-archives.s3-eu-west-1.amazonaws.com/delphi-questionnaire-b.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-sm'
                  >
                    <svg
                      className='w-4 h-4 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      />
                    </svg>
                    {language === 'el' ? 'Κατέβασμα PDF' : 'Download PDF'}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Bibliography Section */}
          <section className='mb-12'>
            <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center'>
                  <BookOpen className='w-5 h-5 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-blue-600'>
                  {language === 'el'
                    ? paperData.bibliography.el
                    : paperData.bibliography.en}
                </h3>
              </div>
              <ul className='space-y-3'>
                {references.map((ref, index) => (
                  <li
                    key={index}
                    className='text-gray-700 leading-relaxed text-sm'
                  >
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Final Consensus Meeting Section */}
          <section className='mb-12'>
            <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center'>
                  <Calendar className='w-5 h-5 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-blue-600'>
                  {language === 'el'
                    ? paperData.finalConsensusMeeting.el
                    : paperData.finalConsensusMeeting.en}
                </h3>
              </div>

              <div className='grid md:grid-cols-2 gap-8'>
                {/* Meeting Details */}
                <div className='bg-orange-50 rounded-xl p-6 border border-orange-200'>
                  <h4 className='font-semibold text-orange-800 mb-3 flex items-center'>
                    <Calendar className='w-5 h-5 mr-2' />
                    {language === 'el'
                      ? paperData.meetingDate.el
                      : paperData.meetingDate.en}
                  </h4>
                  <p className='text-gray-700 font-medium'>
                    {language === 'el'
                      ? meetingData.date.el
                      : meetingData.date.en}
                  </p>
                </div>

                <div className='bg-blue-50 rounded-xl p-6 border border-blue-200'>
                  <h4 className='font-semibold text-blue-800 mb-3'>
                    {language === 'el'
                      ? paperData.meetingLocation.el
                      : paperData.meetingLocation.en}
                  </h4>
                  <p className='text-gray-700'>
                    {language === 'el'
                      ? meetingData.location.el
                      : meetingData.location.en}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/'
              className='inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors duration-300 font-medium'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              {language === 'el'
                ? paperData.backToHome.el
                : paperData.backToHome.en}
            </Link>
            <Link
              href='/'
              className='inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors duration-300 font-medium'
            >
              {language === 'el'
                ? paperData.otherThemes.el
                : paperData.otherThemes.en}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Locked state
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      <div className='max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12'>
          <h1 className='text-4xl font-bold text-blue-600 mb-4 text-center'>
            {language === 'el' ? paperData.title.el : paperData.title.en}
          </h1>
          <div className='bg-blue-50 rounded-2xl p-8 mb-8 text-left'>
            <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
              {language === 'el'
                ? paperData.subtitle.el
                : paperData.subtitle.en}
            </h2>
            {/* Updated description rendering for locked state */}
            {(language === 'el'
              ? paperData.description.el
              : paperData.description.en
            )
              .split('\n\n')
              .map((paragraph, index) => (
                <p
                  key={index}
                  className='text-lg text-gray-700 leading-relaxed mb-4'
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>

        {/* Password Entry Section */}
        <div className='max-w-md mx-auto mb-12'>
          <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8'>
            <div className='text-center mb-6'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
                <Lock className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                {language === 'el'
                  ? paperData.entryTitle.el
                  : paperData.entryTitle.en}
              </h3>
              <p className='text-gray-600'>
                {language === 'el'
                  ? paperData.entryDescription.el
                  : paperData.entryDescription.en}
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-semibold text-gray-700 mb-3'
                >
                  {t('enterPassword')}
                </label>
                <div className='relative'>
                  <input
                    type='password'
                    id='password'
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    className='w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm'
                    placeholder='Κωδικός Πρόσβασης'
                  />
                  <Lock className='absolute right-4 top-3.5 w-5 h-5 text-gray-400' />
                </div>
              </div>

              {showError && (
                <div className='flex items-center space-x-3 text-red-600 bg-red-50 p-3 rounded-xl border border-red-200'>
                  <AlertCircle className='w-5 h-5 flex-shrink-0' />
                  <span className='text-sm font-medium'>
                    {t('wrongPassword')}
                  </span>
                </div>
              )}

              <button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              >
                Είσοδος
              </button>
            </form>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/'
            className='inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors duration-300 font-medium'
          >
            <ArrowLeft className='w-5 h-5 mr-2' />
            {language === 'el'
              ? paperData.backToHome.el
              : paperData.backToHome.en}
          </Link>
          <Link
            href='/'
            className='inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors duration-300 font-medium'
          >
            {language === 'el'
              ? paperData.otherThemes.el
              : paperData.otherThemes.en}
          </Link>
        </div>
      </div>
    </div>
  );
}
