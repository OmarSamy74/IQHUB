"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const T = dynamic(() => import("@/components/T"), { ssr: false });

export default function Courses() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Performance Analyst</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            End-to-end weekly workflow of a football performance analyst with real-world practices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Link href="/courses/performance-analyst" className="group block">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="relative aspect-[4/3] md:col-span-1 rounded-lg overflow-hidden">
                  <Image src="/image/performance-analysis.jpg" alt="Performance Analyst" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Performance Analyst</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Learn the weekly responsibilities: match analysis, opponent scouting, offensive/defensive reporting, team presentations, and in‑game analysis.
                  </p>
                <div className="flex flex-wrap gap-2 text-sm">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Hybrid</span>
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700">Certificate</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">6 weeks</span>
                  </div>
                </div>
                </div>
              </div>
            </Link>
        </div>
      </div>
    </section>
  );
}
