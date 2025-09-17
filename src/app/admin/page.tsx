"use client";

import React, { useState } from "react";
import { 
  HomeIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon, 
  QuestionMarkCircleIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import ProtectedRoute from "@/components/ProtectedRoute";
import CoursesManagement from "@/components/admin/CoursesManagement";

const T = dynamic(() => import("@/components/T"), { ssr: false });

interface DashboardItem {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  component: React.ComponentType;
  description: string;
}

const DashboardItems: DashboardItem[] = [
  {
    id: "overview",
    title: "Overview",
    icon: HomeIcon,
    component: () => <OverviewPanel />,
    description: "Website statistics and quick actions"
  },
  {
    id: "courses",
    title: "Courses Management",
    icon: AcademicCapIcon,
    component: CoursesManagement,
    description: "Manage courses, pricing, and content"
  },
  {
    id: "experts",
    title: "Experts Management",
    icon: UserGroupIcon,
    component: () => <ExpertsManagement />,
    description: "Manage expert profiles and information"
  },
  {
    id: "testimonials",
    title: "Testimonials",
    icon: ChatBubbleLeftRightIcon,
    component: () => <TestimonialsManagement />,
    description: "Manage customer testimonials"
  },
  {
    id: "faqs",
    title: "FAQs Management",
    icon: QuestionMarkCircleIcon,
    component: () => <FAQsManagement />,
    description: "Manage frequently asked questions"
  },
  {
    id: "translations",
    title: "Translations",
    icon: GlobeAltIcon,
    component: () => <TranslationsManagement />,
    description: "Manage website translations"
  },
  {
    id: "currency",
    title: "Currency Settings",
    icon: CurrencyDollarIcon,
    component: () => <CurrencySettings />,
    description: "Manage currency and pricing"
  },
  {
    id: "theme",
    title: "Theme & Appearance",
    icon: CogIcon,
    component: () => <ThemeSettings />,
    description: "Customize website appearance"
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: ChartBarIcon,
    component: () => <AnalyticsPanel />,
    description: "Website analytics and reports"
  }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeItem = DashboardItems.find(item => item.id === activeTab);
  const ActiveComponent = activeItem?.component || (() => <div>Select a section</div>);

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          {DashboardItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg mb-1 transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.title}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Welcome back, Admin
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {activeItem && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {activeItem.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {activeItem.description}
              </p>
            </div>
          )}
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <ActiveComponent />
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
    </ProtectedRoute>
  );
}

// Dashboard Components
function OverviewPanel() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <div className="flex items-center">
            <AcademicCapIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Courses</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <div className="flex items-center">
            <UserGroupIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Students</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">2,847</p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
          <div className="flex items-center">
            <CurrencyDollarIcon className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$45,230</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <div className="flex items-center">
            <EyeIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Page Views</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12,847</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-600 dark:text-gray-300">New course "Advanced Analytics" published</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-600 dark:text-gray-300">5 new students enrolled today</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
              <span className="text-gray-600 dark:text-gray-300">Website theme updated</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add New Course
            </button>
            <button className="w-full text-left px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Update Translations
            </button>
            <button className="w-full text-left px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function ExpertsManagement() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Experts Management</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Expert
        </button>
      </div>
      <p className="text-gray-600 dark:text-gray-300">Manage expert profiles, achievements, and social media links.</p>
    </div>
  );
}

function TestimonialsManagement() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Testimonials Management</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Testimonial
        </button>
      </div>
      <p className="text-gray-600 dark:text-gray-300">Manage customer testimonials and reviews.</p>
    </div>
  );
}

function FAQsManagement() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FAQs Management</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add FAQ
        </button>
      </div>
      <p className="text-gray-600 dark:text-gray-300">Manage frequently asked questions and answers.</p>
    </div>
  );
}

function TranslationsManagement() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Translations Management</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Update All Translations
        </button>
      </div>
      <p className="text-gray-600 dark:text-gray-300">Manage website translations for different languages.</p>
    </div>
  );
}

function CurrencySettings() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Currency Settings</h3>
      <p className="text-gray-600 dark:text-gray-300">Manage currency options and exchange rates.</p>
    </div>
  );
}

function ThemeSettings() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Theme & Appearance</h3>
      <p className="text-gray-600 dark:text-gray-300">Customize website colors, fonts, and layout settings.</p>
    </div>
  );
}

function AnalyticsPanel() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Analytics Dashboard</h3>
      <p className="text-gray-600 dark:text-gray-300">View website analytics, user behavior, and performance metrics.</p>
    </div>
  );
}
