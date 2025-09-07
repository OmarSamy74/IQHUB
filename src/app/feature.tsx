"use client";

import React from "react";
// Removed Typography import due to Material Tailwind compatibility issues

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "AI-Powered Learning",
    children:
      "Revolutionary AI algorithms personalize your learning experience, adapting to your pace and style for maximum retention and engagement.",
    emoji: "🤖",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: HeartIcon,
    title: "Immersive VR Training",
    children:
      "Experience cutting-edge virtual reality simulations, allowing you to practice in realistic sports environments from anywhere in the world.",
    emoji: "🥽",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: LockClosedIcon,
    title: "Blockchain Certificates",
    children:
      "Earn verifiable, tamper-proof certificates stored on blockchain technology, ensuring your achievements are recognized globally and permanently.",
    emoji: "🔐",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: LightBulbIcon,
    title: "Real-Time Analytics",
    children:
      "Advanced biometric monitoring and performance analytics provide instant feedback, helping you optimize your learning and performance in real-time.",
    emoji: "📊",
    color: "from-orange-500 to-red-500"
  },
];

export function Features() {
  return (
    <section className="py-28 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto mb-20 text-center">
        <div className="animate-fade-in">
          <p className="text-blue-600 dark:text-blue-400 mb-2 font-bold uppercase tracking-wider">
            🚀 Next-Gen Sports Education
          </p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            Revolutionary Learning Technologies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mx-auto w-full px-4 lg:w-11/12 lg:px-8 animate-fade-in-delay">
            Experience the future of sports education with cutting-edge AI, VR, and blockchain technologies. 
            Transform your career with the most advanced learning platform in the sports industry.
          </p>
        </div>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} index={idx} />
        ))}
      </div>
    </section>
  );
}
export default Features;
