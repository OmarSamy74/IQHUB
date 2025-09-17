import React from "react";
import Link from "next/link";
import Image from "next/image";
import nextDynamic from "next/dynamic";
import { Navbar, Footer } from "@/components";
const Price = nextDynamic(() => import("@/components/price"), { ssr: false });
const T = nextDynamic(() => import("@/components/T"), { ssr: false });

// Generate static params for all courses
export async function generateStaticParams() {
  return [
    { courseId: 'master-sports-nursing' },
    { courseId: 'executive-financial-strategy' },
    { courseId: 'performance-analyst' }
  ];
}

// Course data - in a real app, this would come from an API
const courseData = {
  "master-sports-nursing": {
    id: "master-sports-nursing",
    title: "Master's in AI-Powered Sports Medicine & Performance Analytics",
    type: "masters",
    modality: "hybrid",
    subjects: ["Health & Wellness", "Tech & Innovation"],
    description: "Revolutionary program combining AI, machine learning, and sports medicine to optimize athlete performance and injury prevention.",
    fullDescription: "This cutting-edge Master's program revolutionizes sports medicine through the integration of artificial intelligence, machine learning, and advanced analytics. Students will learn to develop AI-powered diagnostic tools, predictive models for injury prevention, and personalized treatment protocols that are transforming the sports industry.",
    duration: "12 months",
    level: "Master's Degree",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    price: 9000,
    rating: 4.9,
    students: 1247,
    instructor: "Dr. Eva Ferrer Vidal-Barraquer",
    instructorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    modules: [
      "AI Fundamentals in Sports Medicine",
      "Machine Learning for Performance Analysis",
      "Predictive Analytics for Injury Prevention",
      "Personalized Treatment Protocols",
      "Data Visualization and Reporting",
      "Ethics in AI Sports Medicine"
    ],
    requirements: [
      "Bachelor's degree in related field",
      "Basic programming knowledge (Python recommended)",
      "2+ years professional experience in sports or healthcare",
      "English proficiency (IELTS 6.5 or equivalent)"
    ],
    outcomes: [
      "Develop AI-powered diagnostic tools",
      "Create predictive models for athlete performance",
      "Implement personalized treatment protocols",
      "Lead digital transformation in sports organizations",
      "Publish research in AI sports medicine"
    ]
  },
  "executive-financial-strategy": {
    id: "executive-financial-strategy",
    title: "Executive Program in Sports FinTech & Blockchain Innovation",
    type: "executive",
    modality: "hybrid",
    subjects: ["Sports Business", "Tech & Innovation"],
    description: "Cutting-edge financial technologies transforming sports organizations, including cryptocurrency, NFTs, and smart contracts.",
    fullDescription: "This executive program explores the intersection of finance, technology, and sports. Learn about blockchain applications, cryptocurrency in sports, NFT marketplaces, smart contracts, and how these technologies are revolutionizing sports business models.",
    duration: "6 months",
    level: "Executive",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&crop=center",
    price: 6200,
    rating: 4.8,
    students: 892,
    instructor: "Albert Mundet",
    instructorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    modules: [
      "Blockchain Fundamentals",
      "Cryptocurrency in Sports",
      "NFT Marketplaces and Fan Engagement",
      "Smart Contracts for Sports",
      "DeFi Applications in Sports",
      "Regulatory Compliance"
    ],
    requirements: [
      "5+ years management experience",
      "Basic understanding of financial markets",
      "Interest in emerging technologies",
      "English proficiency"
    ],
    outcomes: [
      "Implement blockchain solutions in sports organizations",
      "Develop cryptocurrency strategies",
      "Create NFT-based fan engagement programs",
      "Navigate regulatory frameworks",
      "Lead digital transformation initiatives"
    ]
  },
  "performance-analyst": {
    id: "performance-analyst",
    title: "Performance Analyst",
    titleAr: "محلل الأداء",
    type: "courses",
    modality: "Hybrid",
    modalityAr: "مختلط",
    subjects: ["Sports Analytics", "Coaching"],
    description: "Weekly role and workflow of a football performance analyst from match day to in-game analysis.",
    descriptionAr: "الدور الأسبوعي وسير عمل محلل الأداء في كرة القدم من يوم المباراة إلى التحليل أثناء المباراة.",
    fullDescription: "Learn the end-to-end weekly responsibilities of a football performance analyst: post-match analysis, opponent study, offensive/defensive reporting, team presentations, and in‑game analysis. Content inspired by a professional workflow .",
    fullDescriptionAr: "تعرّف على المسؤوليات الأسبوعية لمحلل الأداء في كرة القدم: تحليل ما بعد المباراة، دراسة المنافس، إعداد تقارير هجومية/دفاعية، العروض التقديمية للفريق، والتحليل أثناء المباراة.",
    duration: "6 weeks",
    level: "Certificate",
    levelAr: "شهادة",
    image: "/image/performance-analysis.jpg",
    previewUrl: "https://www.facebook.com/reel/1300455538311275",
    price: 9000,
    rating: 4.8,
    students: 1240,
    instructor: "Eng. Ahmed Essam",
    instructorImage: "/image/ahmed-essam.jpg",
    instructors: [
      { name: "Eng. Ahmed Essam", title: "Head of the Analysis Department, ENPPI Club", avatar: "/image/ahmed-essam.jpg" },
      { name: "Eng. Ahmed Zoghby", title: "Performance Analyst, ENPPI Club", avatar: "/image/ahmed-zoghby.jpg" },
      { name: "Captain Ayman Mohammed", title: "Performance Analyst, Al Ahly Club", avatar: "/image/ayman-mohammed.jpg" }
    ],
    instructorsAr: [
      { name: "م. أحمد عصام", title: "رئيس قسم التحليل، نادي إنبي", avatar: "/image/ahmed-essam.jpg" },
      { name: "م. أحمد زغبي", title: "محلل أداء، نادي إنبي", avatar: "/image/ahmed-zoghby.jpg" },
      { name: "كابتن أيمن محمد", title: "محلل أداء، النادي الأهلي", avatar: "/image/ayman-mohammed.jpg" }
    ],
    modules: [
      "Match day workflows and data collection",
      "Post-match reporting and technical video creation",
      "Competitor analysis: strengths, weaknesses, and patterns",
      "Offensive/defensive phase tagging and reporting",
      "Team presentation and in‑game (halftime) analysis"
    ],
    modulesAr: [
      "سير عمل يوم المباراة وجمع البيانات",
      "إعداد تقارير ما بعد المباراة وإنشاء الفيديو التقني",
      "تحليل المنافس: نقاط القوة والضعف والأنماط",
      "وسم مراحل الهجوم/الدفاع وإعداد التقارير",
      "عرض الفريق والتحليل أثناء المباراة (بين الشوطين)"
    ],
    requirements: [
      "Basic knowledge of football tactics",
      "Familiarity with any video analysis software",
      "Ability to prepare simple reports and presentations"
    ],
    requirementsAr: [
      "معرفة أساسية بتكتيكات كرة القدم",
      "الإلمام بأي برنامج لتحليل الفيديو",
      "القدرة على إعداد تقارير وعروض تقديمية بسيطة"
    ],
    outcomes: [
      "Execute a structured weekly analyst workflow",
      "Produce actionable offensive/defensive reports",
      "Deliver concise presentations to coaching staff",
      "Support in‑game tactical adjustments with video"
    ],
    outcomesAr: [
      "تنفيذ سير عمل أسبوعي منظم للمحلل",
      "إنتاج تقارير هجومية/دفاعية قابلة للتنفيذ",
      "تقديم عروض موجزة للجهاز الفني",
      "دعم التعديلات التكتيكية أثناء المباراة بالفيديو"
    ]
  }
};

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const courseId = params.courseId;
  const course = courseData[courseId as keyof typeof courseData];

  // Simplified display variables using only English
  const displayTitle = course.title;
  const displayDesc = course.description;
  const displayFullDesc = course.fullDescription;
  const displayLevel = course.level;
  const displayModality = course.modality;
  const displayDuration = course.duration;

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Course Not Found</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">The course you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/courses" className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
              Browse All Courses
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-300 dark:bg-blue-400 text-blue-900 dark:text-blue-900 text-sm font-semibold rounded-full">
                  {displayLevel}
                </span>
                <span className="px-3 py-1 bg-white/20 dark:bg-gray-700/50 text-white dark:text-gray-200 text-sm font-semibold rounded-full">
                  {displayModality}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {displayTitle}
              </h1>
              <p className="text-xl text-blue-100 dark:text-gray-200 mb-8 leading-relaxed">
                {displayDesc}
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white font-semibold">{course.rating}</span>
                  <span className="text-blue-200">({course.students.toLocaleString()} <T k="course_students_count" />)</span>
                </div>
                <div className="text-white">
                  <span className="text-blue-200"><T k="course_duration" />:</span> {displayDuration}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`/enrollment?courseId=${course.id}`}
                  className="bg-white dark:bg-gray-800 text-blue-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  🚀 <T k="course_enroll_now" /> - <Price amount={course.price} />
                </Link>
                <a href="#preview" className="border-2 border-white dark:border-gray-300 text-white dark:text-gray-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white dark:hover:bg-gray-800 hover:text-blue-900 dark:hover:text-white transition-all duration-300 text-center">
                  📹 <T k="course_watch_preview" />
                </a>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <Image 
                  src={course.image} 
                  alt={course.title}
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {('previewUrl' in course) && (
              <div id="preview" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4"><T k="course_preview" /></h2>
                <div className="relative w-full" style={{paddingTop: '177.78%'}}>
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent((course as any).previewUrl)}&show_text=false&width=560`}
                    className="absolute inset-0 w-full h-full rounded-lg"
                    style={{border: 0, overflow: 'hidden'}}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    title="Course Preview"
                  />
                </div>
              </div>
            )}
            {/* About Course */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6"><T k="course_about" /></h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {displayFullDesc}
              </p>
            </div>

            {/* Course Modules */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6"><T k="course_modules" /></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.modules.map((module: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6"><T k="course_learn" /></h2>
              <ul className="space-y-4">
                {course.outcomes.map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✅</span>
                    <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructors */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4"><T k="course_instructors" /></h3>
              {('instructors' in course ? (course as any).instructors : []).length ? (
                <div className="space-y-4">
                  {((course as any).instructors || []).map((inst: any, i: number) => (
                    <div key={i} className="flex items-center gap-4">
                      {inst.avatar ? (
                        <Image src={inst.avatar} alt={inst.name} width={56} height={56} className="w-14 h-14 rounded-full object-cover" />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-semibold">
                          {inst.name.split(' ').map((n: string) => n[0]).join('').slice(0,2)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{inst.name}</h4>
                        {inst.title && <p className="text-sm text-gray-600 dark:text-gray-300">{inst.title}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-4 mb-4">
                  <Image 
                    src={course.instructorImage} 
                    alt={course.instructor}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{course.instructor}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300"><T k="course_lead_instructor" /></p>
                  </div>
                </div>
              )}
            </div>

            {/* Course Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4"><T k="course_information" /></h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300"><T k="course_level" />:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{displayLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300"><T k="course_duration" />:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{displayDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300"><T k="course_modality" />:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{displayModality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300"><T k="course_students" />:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300"><T k="course_rating" />:</span>
                  <span className="font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                    ⭐ {course.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4"><T k="course_requirements" /></h3>
              <ul className="space-y-2">
                {course.requirements.map((requirement: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-blue-500 dark:text-blue-400">•</span>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enroll Button */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-center animate-bounce-in">
              <h3 className="text-xl font-bold text-white mb-2"><T k="course_ready" /></h3>
              <p className="text-blue-100 mb-4"><T k="course_join" /></p>
              <Link 
                href={`/enrollment?courseId=${course.id}`}
                className="block bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                <T k="course_enroll_now" /> - <Price amount={course.price} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
