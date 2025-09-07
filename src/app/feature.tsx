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
import dynamic from "next/dynamic";
const T = dynamic(() => import("@/components/T"), { ssr: false });

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    titleKey: "feature_ai_title",
    childrenKey: "feature_ai_desc",
    emoji: "🤖",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: HeartIcon,
    titleKey: "feature_vr_title",
    childrenKey: "feature_vr_desc",
    emoji: "🥽",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: LockClosedIcon,
    titleKey: "feature_blockchain_title",
    childrenKey: "feature_blockchain_desc",
    emoji: "🔐",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: LightBulbIcon,
    titleKey: "feature_analytics_title",
    childrenKey: "feature_analytics_desc",
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
            🚀 <T k="features_badge" />
          </p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            <T k="features_title" />
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mx-auto w-full px-4 lg:w-11/12 lg:px-8 animate-fade-in-delay">
            <T k="features_subtitle" />
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
