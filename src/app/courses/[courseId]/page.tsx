import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const Price = dynamic(() => import("@/components/price"), { ssr: false });

// Generate static params for all courses
export async function generateStaticParams() {
  return [
    { courseId: 'master-sports-nursing' },
    { courseId: 'executive-financial-strategy' }
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
    price: 8500,
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
  }
};

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const courseId = params.courseId;
  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Course Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">The course you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/courses" className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-300 dark:bg-blue-400 text-blue-900 dark:text-blue-900 text-sm font-semibold rounded-full">
                  {course.level}
                </span>
                <span className="px-3 py-1 bg-white/20 dark:bg-gray-700/50 text-white dark:text-gray-200 text-sm font-semibold rounded-full">
                  {course.modality}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl text-blue-100 dark:text-gray-200 mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white font-semibold">{course.rating}</span>
                  <span className="text-blue-200">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="text-white">
                  <span className="text-blue-200">Duration:</span> {course.duration}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`/enrollment?courseId=${course.id}`}
                  className="bg-white dark:bg-gray-800 text-blue-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  🚀 Enroll Now - <Price amount={course.price} />
                </Link>
                <button className="border-2 border-white dark:border-gray-300 text-white dark:text-gray-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white dark:hover:bg-gray-800 hover:text-blue-900 dark:hover:text-white transition-all duration-300">
                  📹 Watch Preview
                </button>
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

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Course */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About This Course</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {course.fullDescription}
              </p>
            </div>

            {/* Course Modules */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Course Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.modules.map((module, index) => (
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What You&apos;ll Learn</h2>
              <ul className="space-y-4">
                {course.outcomes.map((outcome, index) => (
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
            {/* Instructor */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Instructor</h3>
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
                  <p className="text-sm text-gray-600 dark:text-gray-300">Lead Instructor</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Expert with 15+ years of experience in sports innovation and technology.
              </p>
            </div>

            {/* Course Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Course Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Level:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Duration:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Modality:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.modality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Students:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Rating:</span>
                  <span className="font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                    ⭐ {course.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Requirements</h3>
              <ul className="space-y-2">
                {course.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-blue-500 dark:text-blue-400">•</span>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enroll Button */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-center animate-bounce-in">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Start?</h3>
              <p className="text-blue-100 mb-4">Join thousands of professionals transforming their careers</p>
              <Link 
                href={`/enrollment?courseId=${course.id}`}
                className="block bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                Enroll Now - {course.price}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
