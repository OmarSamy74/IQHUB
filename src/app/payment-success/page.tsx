"use client";

import React from "react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-12 animate-bounce-in">
          {/* Success Icon */}
          <div className="text-8xl mb-6 animate-pulse">🎉</div>
          
          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Congratulations! You have successfully enrolled in the AI-Powered Sports Medicine program.
          </p>

          {/* Course Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Enrollment Details</h3>
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Course:</span>
                <span className="font-semibold">AI-Powered Sports Medicine</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Program Type:</span>
                <span className="font-semibold">Master&apos;s Degree</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold">12 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-semibold text-green-600">€8,500.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Enrollment ID:</span>
                <span className="font-semibold font-mono">ENR-2024-001234</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">🚀 What&apos;s Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <span className="text-blue-600 font-bold">1.</span>
                <span className="text-blue-800">Check your email for enrollment confirmation and access details</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                <span className="text-blue-800">Access your personalized learning dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-600 font-bold">3.</span>
                <span className="text-blue-800">Join the exclusive student community</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-600 font-bold">4.</span>
                <span className="text-blue-800">Schedule your first mentorship session</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              🎓 Access Learning Dashboard
            </Link>
            <Link 
              href="/courses"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              📚 Explore More Courses
            </Link>
          </div>

          {/* Support */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 mb-2">Need help getting started?</p>
            <div className="flex justify-center gap-6 text-sm">
              <Link href="/support" className="text-blue-600 hover:underline">
                📞 Contact Support
              </Link>
              <Link href="/faq" className="text-blue-600 hover:underline">
                ❓ FAQ
              </Link>
              <Link href="/community" className="text-blue-600 hover:underline">
                👥 Student Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
