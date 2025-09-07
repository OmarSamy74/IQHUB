"use client";

import React, { useState } from "react";
import Link from "next/link";

const programTypes = [
  { id: "all", name: "All Programs", count: 24 },
  { id: "masters", name: "Masters", count: 8 },
  { id: "executive", name: "Executive Programmes", count: 7 },
  { id: "advanced", name: "Advanced Programmes", count: 5 },
  { id: "specialized", name: "Specialized Programmes", count: 3 },
  { id: "courses", name: "Courses", count: 8 }
];

const modalities = [
  { id: "all", name: "All Modalities" },
  { id: "online", name: "Online" },
  { id: "onsite", name: "Onsite" },
  { id: "hybrid", name: "Hybrid" }
];

const subjects = [
  "Advanced Performance", "Coaching", "Health & Wellness", "New Media", 
  "Nutrition", "Social Impact", "Sports Analytics", "Sports Business", 
  "Sports Science", "Tech & Innovation"
];

const programs = [
  // Masters
  {
    id: "master-sports-nursing",
    title: "Master's in AI-Powered Sports Medicine & Performance Analytics",
    type: "masters",
    modality: "hybrid",
    subjects: ["Health & Wellness", "Tech & Innovation"],
    description: "Revolutionary program combining AI, machine learning, and sports medicine to optimize athlete performance and injury prevention.",
    duration: "12 months",
    level: "Master's Degree",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    price: "€8,500",
    rating: 4.9,
    students: 1247
  },
  {
    id: "executive-financial-strategy",
    title: "Executive Program in Sports FinTech & Blockchain Innovation",
    type: "executive",
    modality: "hybrid",
    subjects: ["Sports Business", "Tech & Innovation"],
    description: "Cutting-edge financial technologies transforming sports organizations, including cryptocurrency, NFTs, and smart contracts.",
    duration: "6 months",
    level: "Executive",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center",
    price: "€6,200",
    rating: 4.8,
    students: 892
  },
  {
    id: "sports-management-mba",
    title: "MBA in Digital Sports Leadership & Metaverse Strategy",
    type: "masters",
    modality: "hybrid",
    subjects: ["Sports Business", "New Media"],
    description: "Next-generation MBA focusing on virtual sports, metaverse engagement, and digital fan experiences.",
    duration: "18 months",
    level: "MBA",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=center",
    price: "€12,000",
    rating: 4.9,
    students: 567
  },
  // Executive Programmes
  {
    id: "digital-transformation",
    title: "Executive Program in Sports AI & Machine Learning",
    type: "executive",
    modality: "hybrid",
    subjects: ["Tech & Innovation", "Sports Analytics"],
    description: "Advanced AI applications in sports: predictive analytics, computer vision, and automated coaching systems.",
    duration: "4 months",
    level: "Executive",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center",
    price: "€4,800",
    rating: 4.7,
    students: 1156
  },
  {
    id: "holistic-health",
    title: "Executive Program in Biohacking & Performance Optimization",
    type: "executive",
    modality: "hybrid",
    subjects: ["Advanced Performance", "Health & Wellness", "Nutrition"],
    description: "Revolutionary biohacking techniques, personalized nutrition, and cutting-edge recovery protocols for elite athletes.",
    duration: "5 months",
    level: "Executive",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    price: "€5,500",
    rating: 4.8,
    students: 743
  },
  // Advanced Programmes
  {
    id: "football-tactical-analyst",
    title: "Professional Diploma in AI-Powered Tactical Analysis",
    type: "advanced",
    modality: "online",
    subjects: ["Advanced Performance", "Sports Analytics"],
    description: "Advanced AI-driven tactical analysis using computer vision, pattern recognition, and predictive modeling.",
    duration: "3 months",
    level: "Professional Diploma",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop&crop=center",
    price: "€2,800",
    rating: 4.6,
    students: 2134
  },
  {
    id: "sports-nutrition-diploma",
    title: "Professional Diploma in Precision Sports Nutrition & Genomics",
    type: "advanced",
    modality: "online",
    subjects: ["Nutrition", "Health & Wellness"],
    description: "Personalized nutrition based on genetic testing, microbiome analysis, and real-time biometric monitoring.",
    duration: "4 months",
    level: "Professional Diploma",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&crop=center",
    price: "€3,200",
    rating: 4.7,
    students: 1876
  },
  // Courses
  {
    id: "strength-conditioning",
    title: "Certificate in Smart Training & IoT Performance Monitoring",
    type: "courses",
    modality: "online",
    subjects: ["Advanced Performance", "Health & Wellness", "Sports Science"],
    description: "IoT sensors, wearable technology, and real-time performance monitoring for optimized training protocols.",
    duration: "6 weeks",
    level: "Certificate",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    price: "€1,200",
    rating: 4.5,
    students: 3456
  },
  {
    id: "sports-analytics-intro",
    title: "Introduction to Sports Data Science & Visualization",
    type: "courses",
    modality: "online",
    subjects: ["Sports Analytics", "Tech & Innovation"],
    description: "Python, R, and advanced visualization tools for sports data analysis and storytelling.",
    duration: "4 weeks",
    level: "Certificate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    price: "€800",
    rating: 4.4,
    students: 4123
  },
  {
    id: "football-tactical-cert",
    title: "Certificate in Virtual Reality Coaching & Training",
    type: "courses",
    modality: "online",
    subjects: ["Coaching", "Tech & Innovation"],
    description: "VR/AR applications in coaching, immersive training environments, and virtual match analysis.",
    duration: "5 weeks",
    level: "Certificate",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop&crop=center",
    price: "€1,000",
    rating: 4.6,
    students: 2789
  }
];

export default function Courses() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedModality, setSelectedModality] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const filteredPrograms = programs.filter(program => {
    const typeMatch = selectedType === "all" || program.type === selectedType;
    const modalityMatch = selectedModality === "all" || program.modality === selectedModality;
    const subjectMatch = selectedSubject === "all" || program.subjects.includes(selectedSubject);
    return typeMatch && modalityMatch && subjectMatch;
  });

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive sports education programs designed to develop the next generation of sports professionals
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          {/* Program Types */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Program Types</h3>
            <div className="flex flex-wrap gap-2">
              {programTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type.id
                      ? "bg-blue-600 dark:bg-blue-500 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {type.name} ({type.count})
                </button>
              ))}
            </div>
          </div>

          {/* Modalities */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Modalities</h3>
            <div className="flex flex-wrap gap-2">
              {modalities.map((modality) => (
                <button
                  key={modality.id}
                  onClick={() => setSelectedModality(modality.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedModality === modality.id
                      ? "bg-blue-600 dark:bg-blue-500 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {modality.name}
                </button>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Academic Subjects</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSubject("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSubject === "all"
                    ? "bg-blue-600 dark:bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600"
                }`}
              >
                All Subjects
              </button>
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSubject === subject
                      ? "bg-blue-600 dark:bg-blue-500 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, index) => (
            <Link key={program.id} href={`/courses/${program.id}`} className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Program Image */}
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">{program.rating}</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                    {program.level}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                    {program.modality}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {program.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {program.description}
                </p>
                
                {/* Subjects */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.subjects.slice(0, 2).map((subject) => (
                    <span key={subject} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                      {subject}
                    </span>
                  ))}
                  {program.subjects.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                      +{program.subjects.length - 2} more
                    </span>
                  )}
                </div>
                
                {/* Stats */}
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>⏱️ {program.duration}</span>
                  <span>👥 {program.students.toLocaleString()} students</span>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {program.price}
                  </div>
                  <Link 
                    href={`/enrollment?courseId=${program.id}`}
                    className="block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No programs found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
