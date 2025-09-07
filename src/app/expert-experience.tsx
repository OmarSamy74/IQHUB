"use client";

import React from "react";
import Image from "next/image";

const experts = [
  {
    name: "Dr. Eva Ferrer Vidal-Barraquer",
    title: "AI Sports Medicine Specialist & Performance Analytics Director",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    expertise: "AI-Powered Sports Medicine",
    achievements: "15+ years in elite sports, 50+ research papers",
    social: "@evaferrer_sports"
  },
  {
    name: "Xavier Linde Cot",
    title: "Head of Digital Innovation & Smart Rehabilitation at FC Barcelona",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    expertise: "IoT & Smart Recovery",
    achievements: "Revolutionary rehabilitation protocols, 20+ patents",
    social: "@xavierlinde_tech"
  },
  {
    name: "Dr. Francesc Cos",
    title: "Chief Data Scientist & Performance Analytics Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    expertise: "Machine Learning in Sports",
    achievements: "PhD in Sports Analytics, 30+ AI models deployed",
    social: "@francesccos_ai"
  },
  {
    name: "Albert Mundet",
    title: "CEO & Founder of Barça Innovation Hub",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    expertise: "Sports Innovation Strategy",
    achievements: "Transformed sports education globally, 100K+ professionals trained",
    social: "@albertmundet_ceo"
  },
  {
    name: "Dr. Mireia Porta Oliva",
    title: "Precision Nutrition & Genomics Specialist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    expertise: "Personalized Sports Nutrition",
    achievements: "Pioneer in genetic-based nutrition, 25+ elite athletes optimized",
    social: "@mireiaporta_nutrition"
  }
];

export function ExpertExperience() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from the world&apos;s leading sports professionals and industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {expert.expertise}
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-blue-500 text-sm">👑</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {expert.name}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {expert.title}
              </p>

              <div className="text-xs text-gray-500 mb-2">
                {expert.achievements}
              </div>

              <div className="text-xs text-blue-500 font-medium">
                {expert.social}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Learn from Our Experts?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proven Track Record</h4>
                <p className="text-sm text-gray-600">
                  Our experts have worked with top-tier athletes and organizations worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cutting-Edge Research</h4>
                <p className="text-sm text-gray-600">
                  Access to the latest research and innovative methodologies in sports science
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Global Perspective</h4>
                <p className="text-sm text-gray-600">
                  Learn from diverse international experiences and best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertExperience;
