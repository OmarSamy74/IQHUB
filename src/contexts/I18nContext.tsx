"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type SupportedLocale = "en" | "ar";

type Translations = Record<string, string>;

interface I18nContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (key: string) => string;
}

const en: Translations = {
  nav_about: "About",
  nav_education: "Education",
  nav_insights: "Insights",
  nav_events: "Events",
  nav_community: "Community",
  enroll_now: "Enroll Now",
  secure_payment: "Secure Payment",
  order_summary: "Order Summary",
  total: "Total",
  programs_title: "Our Programs",
  programs_subtitle: "Comprehensive sports education programs designed to develop the next generation of sports professionals",
  hero_badge: "BARÇA INNOVATION HUB",
  hero_title: "Sports Education",
  hero_heading: "Empowering the Future of Sports Innovation",
  hero_subtitle: "IQ STATS HUB revolutionizes sports education through cutting-edge technology, data analytics, and innovative methodologies. We provide the most advanced learning environment for developing the next generation of sports professionals, coaches, and analysts. Join thousands of professionals who are already transforming the sports industry with our AI-powered learning platform.",
  hero_cta_explore: "Explore Programs",
  hero_cta_masterclass: "Join Live Masterclass",
  hero_feat_ai: "AI-Powered Learning",
  hero_feat_expert: "Expert",
  hero_feat_mentorship: "Live Mentorship",
  hero_feat_global: "Global",
  hero_feat_network: "Network of 50K+",
  hero_feat_certified: "Certified",
  hero_feat_recognition: "Industry Recognition",
  features_badge: "Next-Gen Sports Education",
  features_title: "Revolutionary Learning Technologies",
  features_subtitle: "Experience the future of sports education with cutting-edge AI, VR, and blockchain technologies. Transform your career with the most advanced learning platform in the sports industry.",
  feature_ai_title: "AI-Powered Learning",
  feature_ai_desc: "Revolutionary AI algorithms personalize your learning experience, adapting to your pace and style for maximum retention and engagement.",
  feature_vr_title: "Immersive VR Training",
  feature_vr_desc: "Experience cutting-edge virtual reality simulations, allowing you to practice in realistic sports environments from anywhere in the world.",
  feature_blockchain_title: "Blockchain Certificates",
  feature_blockchain_desc: "Earn verifiable, tamper-proof certificates stored on blockchain technology, ensuring your achievements are recognized globally and permanently.",
  feature_analytics_title: "Real-Time Analytics",
  feature_analytics_desc: "Advanced biometric monitoring and performance analytics provide instant feedback, helping you optimize your learning and performance in real-time.",
  learn_more: "Learn More",
  experts_title: "Our Expert Experience",
  experts_subtitle: "Learn from the world's leading sports professionals and industry experts",
  experts_why_title: "Why Learn from Our Experts?",
  experts_track_record: "Proven Track Record",
  experts_track_record_desc: "Our experts have worked with top-tier athletes and organizations worldwide",
  experts_research: "Cutting-Edge Research",
  experts_research_desc: "Access to the latest research and innovative methodologies in sports science",
  experts_global: "Global Perspective",
  experts_global_desc: "Learn from diverse international experiences and best practices",
  faq_title: "Frequently asked questions",
  faq_subtitle: "Find answers to common questions about our sports education programs and platform",
  faq_start_title: "How do I get started?",
  faq_start_desc: "Getting started is easy! Simply browse our programs, select one that interests you, and enroll. Our platform will guide you through the entire process.",
  faq_trial_title: "Is there a free trial available?",
  faq_trial_desc: "Yes, we offer a 30-day free trial so you can experience our learning platform with no commitment.",
  faq_upgrade_title: "How can I upgrade my account?",
  faq_upgrade_desc: "To upgrade your account, log in and navigate to the Upgrade Account section in your dashboard. Follow the prompts to select your preferred plan.",
  faq_cancel_title: "Can I cancel my subscription anytime?",
  faq_cancel_desc: "Absolutely, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing cycle.",
  faq_paid_title: "How can I upgrade my account to paid?",
  faq_paid_desc: "To upgrade your account, log in and navigate to the Upgrade Account section in your dashboard. Follow the prompts to select your preferred plan.",
  faq_support_title: "What if I need help or have technical issues?",
  faq_support_desc: "Our dedicated support team is here to assist you. Reach out via live chat, email, or phone, and we'll get back to you promptly.",
  footer_description: "Building the future of the sports industry through innovative education and professional development.",
  footer_navigation: "Navigation",
  footer_programs: "Programs",
  footer_subjects: "Subjects",
  footer_rights: "All rights reserved",
  footer_legal: "Legal Terms",
  footer_privacy: "Privacy Policy",
  footer_contact: "Contact Us",
  footer_powered_by: "Powered by Barça Innovation Hub Education Platform",
  program_masters: "Masters",
  program_executive_programmes: "Executive Programmes",
  program_advanced_programmes: "Advanced Programmes",
  program_specialized_programmes: "Specialized Programmes",
  program_courses: "Courses",
  subject_advanced_performance: "Advanced Performance",
  subject_coaching: "Coaching",
  subject_health_and_wellness: "Health & Wellness",
  subject_sports_analytics: "Sports Analytics",
  subject_sports_business: "Sports Business",
  subject_sports_science: "Sports Science",
  courses_program_types: "Program Types",
  courses_all_programs: "All Programs",
  courses_modalities: "Modalities",
  courses_all_modalities: "All Modalities",
  courses_online: "Online",
  courses_onsite: "Onsite",
  courses_hybrid: "Hybrid",
  courses_academic_subjects: "Academic Subjects",
  courses_all_subjects: "All Subjects",
  courses_new_media: "New Media",
  courses_nutrition: "Nutrition",
  courses_social_impact: "Social Impact",
  courses_tech_innovation: "Tech & Innovation",
  courses_enroll_now: "Enroll Now",
  courses_months: "months",
  courses_weeks: "weeks",
  courses_students: "students",
  testimonials_title: "What Clients Say",
  testimonials_subtitle: "Discover what our valued clients have to say about their experiences with our services. We take pride in delivering exceptional results and fostering lasting partnerships.",
  course_about: "About This Course",
  course_modules: "Course Modules",
  course_learn: "What You'll Learn",
  course_instructor: "Instructor",
  course_lead_instructor: "Lead Instructor",
  course_experience: "Expert with 15+ years of experience in sports innovation and technology.",
  course_information: "Course Information",
  course_level: "Level",
  course_duration: "Duration",
  course_modality: "Modality",
  course_students: "Students",
  course_rating: "Rating",
  course_requirements: "Requirements",
  course_ready: "Ready to Start?",
  course_join: "Join thousands of professionals transforming their careers",
  course_watch_preview: "Watch Preview",
  course_enroll_now: "Enroll Now",
  course_students_count: "students",
  course_months: "months",
  course_weeks: "weeks",
  course_preview: "Course Preview",
  course_instructors: "Instructors",
  contact: "Contact",
};

const ar: Translations = {
  nav_about: "نبذة عنا",
  nav_education: "التعليم",
  nav_insights: "رؤى",
  nav_events: "الفعاليات",
  nav_community: "المجتمع",
  enroll_now: "سجل الآن",
  secure_payment: "دفع آمن",
  order_summary: "ملخص الطلب",
  total: "الإجمالي",
  programs_title: "برامجنا",
  programs_subtitle: "برامج تعليمية رياضية شاملة لتطوير الجيل القادم من المتخصصين",
  hero_badge: "مركز ابتكار برشلونة",
  hero_title: "التعليم الرياضي",
  hero_heading: "تمكين مستقبل الابتكار الرياضي",
  hero_subtitle: "يُحدث IQ STATS HUB ثورة في التعليم الرياضي من خلال أحدث التقنيات وتحليلات البيانات والمنهجيات المبتكرة. نوفر بيئة تعلم متقدمة لتطوير الجيل القادم من المتخصصين والمدربين والمحللين. انضم إلى آلاف المحترفين الذين يغيرون صناعة الرياضة بالفعل من خلال منصتنا التعليمية المدعومة بالذكاء الاصطناعي.",
  hero_cta_explore: "استكشف البرامج",
  hero_cta_masterclass: "انضم إلى الفصل المباشر",
  hero_feat_ai: "تعلم مدعوم بالذكاء الاصطناعي",
  hero_feat_expert: "خبراء",
  hero_feat_mentorship: "إرشاد مباشر",
  hero_feat_global: "عالمي",
  hero_feat_network: "شبكة تضم أكثر من 50 ألف",
  hero_feat_certified: "معتمد",
  hero_feat_recognition: "اعتراف صناعي",
  features_badge: "تعليم رياضي من الجيل القادم",
  features_title: "تقنيات التعلم الثورية",
  features_subtitle: "اختبر مستقبل التعليم الرياضي بأحدث تقنيات الذكاء الاصطناعي والواقع الافتراضي والبلوك تشين. حول مسيرتك المهنية بأكثر منصة تعلم تقدماً في صناعة الرياضة.",
  feature_ai_title: "تعلم مدعوم بالذكاء الاصطناعي",
  feature_ai_desc: "خوارزميات الذكاء الاصطناعي الثورية تخصص تجربة التعلم الخاصة بك، تتكيف مع وتيرتك وأسلوبك لتحقيق أقصى استبقاء ومشاركة.",
  feature_vr_title: "تدريب بالواقع الافتراضي",
  feature_vr_desc: "اختبر محاكاة الواقع الافتراضي المتطورة، مما يتيح لك التدرب في بيئات رياضية واقعية من أي مكان في العالم.",
  feature_blockchain_title: "شهادات البلوك تشين",
  feature_blockchain_desc: "احصل على شهادات قابلة للتحقق ومقاومة للتلاعب مخزنة على تقنية البلوك تشين، مما يضمن الاعتراف بإنجازاتك عالمياً وبشكل دائم.",
  feature_analytics_title: "تحليلات فورية",
  feature_analytics_desc: "مراقبة بيومترية متقدمة وتحليلات الأداء توفر ردود فعل فورية، مما يساعدك على تحسين تعلمك وأدائك في الوقت الفعلي.",
  learn_more: "اعرف المزيد",
  experts_title: "خبرة خبرائنا",
  experts_subtitle: "تعلم من أبرز المحترفين الرياضيين وخبراء الصناعة في العالم",
  experts_why_title: "لماذا تتعلم من خبرائنا؟",
  experts_track_record: "سجل مثبت",
  experts_track_record_desc: "عمل خبراؤنا مع نخبة الرياضيين والمنظمات في جميع أنحاء العالم",
  experts_research: "بحث متقدم",
  experts_research_desc: "الوصول إلى أحدث الأبحاث والمنهجيات المبتكرة في العلوم الرياضية",
  experts_global: "رؤية عالمية",
  experts_global_desc: "تعلم من التجارب الدولية المتنوعة وأفضل الممارسات",
  faq_title: "الأسئلة الشائعة",
  faq_subtitle: "اعثر على إجابات للأسئلة الشائعة حول برامجنا التعليمية الرياضية ومنصتنا",
  faq_start_title: "كيف أبدأ؟",
  faq_start_desc: "البدء سهل! ببساطة تصفح برامجنا، اختر ما يهمك، وسجل. ستوجهك منصتنا خلال العملية بأكملها.",
  faq_trial_title: "هل يوجد تجربة مجانية متاحة؟",
  faq_trial_desc: "نعم، نقدم تجربة مجانية لمدة 30 يوماً لتختبر منصة التعلم الخاصة بنا دون التزام.",
  faq_upgrade_title: "كيف يمكنني ترقية حسابي؟",
  faq_upgrade_desc: "لترقية حسابك، سجل الدخول وانتقل إلى قسم ترقية الحساب في لوحة التحكم. اتبع التعليمات لاختيار خطتك المفضلة.",
  faq_cancel_title: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
  faq_cancel_desc: "بالطبع، يمكنك إلغاء اشتراكك في أي وقت دون أسئلة. سيبقى اشتراكك نشطاً حتى نهاية دورة الفوترة الحالية.",
  faq_paid_title: "كيف يمكنني ترقية حسابي إلى مدفوع؟",
  faq_paid_desc: "لترقية حسابك، سجل الدخول وانتقل إلى قسم ترقية الحساب في لوحة التحكم. اتبع التعليمات لاختيار خطتك المفضلة.",
  faq_support_title: "ماذا لو احتجت مساعدة أو واجهت مشاكل تقنية؟",
  faq_support_desc: "فريق الدعم المخصص لدينا هنا لمساعدتك. تواصل معنا عبر الدردشة المباشرة أو البريد الإلكتروني أو الهاتف، وسنرد عليك بسرعة.",
  footer_description: "بناء مستقبل صناعة الرياضة من خلال التعليم المبتكر والتطوير المهني.",
  footer_navigation: "التنقل",
  footer_programs: "البرامج",
  footer_subjects: "المواضيع",
  footer_rights: "جميع الحقوق محفوظة",
  footer_legal: "الشروط القانونية",
  footer_privacy: "سياسة الخصوصية",
  footer_contact: "اتصل بنا",
  footer_powered_by: "مدعوم من منصة تعليم مركز ابتكار برشلونة",
  program_masters: "الماجستير",
  program_executive_programmes: "البرامج التنفيذية",
  program_advanced_programmes: "البرامج المتقدمة",
  program_specialized_programmes: "البرامج المتخصصة",
  program_courses: "الدورات",
  subject_advanced_performance: "الأداء المتقدم",
  subject_coaching: "التدريب",
  subject_health_and_wellness: "الصحة والعافية",
  subject_sports_analytics: "التحليلات الرياضية",
  subject_sports_business: "الأعمال الرياضية",
  subject_sports_science: "العلوم الرياضية",
  courses_program_types: "أنواع البرامج",
  courses_all_programs: "جميع البرامج",
  courses_modalities: "الطرق",
  courses_all_modalities: "جميع الطرق",
  courses_online: "أونلاين",
  courses_onsite: "في الموقع",
  courses_hybrid: "مختلط",
  courses_academic_subjects: "المواضيع الأكاديمية",
  courses_all_subjects: "جميع المواضيع",
  courses_new_media: "الإعلام الجديد",
  courses_nutrition: "التغذية",
  courses_social_impact: "التأثير الاجتماعي",
  courses_tech_innovation: "التكنولوجيا والابتكار",
  courses_enroll_now: "سجل الآن",
  courses_months: "شهر",
  courses_weeks: "أسبوع",
  courses_students: "طالب",
  testimonials_title: "ما يقوله عملاؤنا",
  testimonials_subtitle: "اكتشف ما يقوله عملاؤنا المميزون عن تجاربهم مع خدماتنا. نفخر بتقديم نتائج استثنائية وبناء شراكات دائمة.",
  course_about: "حول هذه الدورة",
  course_modules: "وحدات الدورة",
  course_learn: "ما سوف تتعلمه",
  course_instructor: "المدرب",
  course_lead_instructor: "المدرب الرئيسي",
  course_experience: "خبير مع أكثر من 15 عاماً من الخبرة في الابتكار الرياضي والتكنولوجيا.",
  course_information: "معلومات الدورة",
  course_level: "المستوى",
  course_duration: "المدة",
  course_modality: "الطريقة",
  course_students: "الطلاب",
  course_rating: "التقييم",
  course_requirements: "المتطلبات",
  course_ready: "مستعد للبدء؟",
  course_join: "انضم إلى آلاف المحترفين الذين يغيرون مسيرتهم المهنية",
  course_watch_preview: "شاهد المعاينة",
  course_enroll_now: "سجل الآن",
  course_students_count: "طالب",
  course_months: "شهر",
  course_weeks: "أسبوع",
  course_preview: "معاينة الدورة",
  course_instructors: "المدربون",
  contact: "تواصل",
};

const dictionary: Record<SupportedLocale, Translations> = { en, ar };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<SupportedLocale>("en");

  // Determine initial locale: URL (?lang=ar) -> saved -> browser -> en
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const fromQuery = params.get("lang");
      if (fromQuery === "ar" || fromQuery === "en") {
        setLocale(fromQuery);
        return;
      }

      const saved = localStorage.getItem("locale") as SupportedLocale | null;
      if (saved === "en" || saved === "ar") {
        setLocale(saved);
        return;
      }

      const browserLang = navigator.language || (navigator as any).userLanguage || "en";
      if (browserLang.toLowerCase().startsWith("ar")) {
        setLocale("ar");
      } else {
        setLocale("en");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
      // Apply direction on document for RTL/LTR
      document.documentElement.setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
      document.documentElement.setAttribute("lang", locale);
    }
  }, [locale]);

  const t = useMemo(() => {
    const table = dictionary[locale] ?? dictionary.en;
    return (key: string) => table[key] ?? key;
  }, [locale]);

  const value: I18nContextType = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


