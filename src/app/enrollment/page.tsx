"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function EnrollmentPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    experience: '',
    goals: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to payment page with course ID
    window.location.href = `/payment?courseId=${courseId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🎓 Enroll in Your Dream Course
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of professionals transforming their careers with our cutting-edge sports education programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">AI-Powered Sports Medicine</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Master&apos;s Degree Program</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-300">Duration:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">12 months</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-300">Modality:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Hybrid</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-300">Rating:</span>
                    <span className="font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                      ⭐ 4.9 (1,247 students)
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 dark:text-gray-300">Price:</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">€8,500</span>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">What&apos;s Included:</h4>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>✅ 24/7 AI-powered learning platform</li>
                    <li>✅ Live expert mentorship sessions</li>
                    <li>✅ Blockchain-verified certificate</li>
                    <li>✅ Lifetime access to materials</li>
                    <li>✅ Global alumni network</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enrollment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-up-delay">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Complete Your Enrollment</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select your country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="ES">Spain</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="IT">Italy</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Professional Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-2 years)</option>
                    <option value="intermediate">Intermediate (3-5 years)</option>
                    <option value="advanced">Advanced (6-10 years)</option>
                    <option value="expert">Expert (10+ years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Learning Goals *
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Tell us about your learning goals and how this course will help your career..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 bg-white dark:bg-gray-700"
                  />
                  <label className="text-sm text-gray-600 dark:text-gray-300">
                    I agree to the <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. I understand that this is a commitment to complete the program.
                  </label>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    🚀 Proceed to Payment - €8,500
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
