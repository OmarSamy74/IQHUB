"use client";

import React, { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon, EyeIcon } from '@heroicons/react/24/outline';

interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  level: string;
  modality: string;
  duration: string;
  rating: number;
  students: number;
  image: string;
  modules: string[];
  outcomes: string[];
  status: 'active' | 'draft' | 'archived';
}

const mockCourses: Course[] = [
  {
    id: 'master-sports-nursing',
    title: "Master's in Sports Nursing",
    description: "Advanced nursing practices for sports medicine",
    fullDescription: "Comprehensive program covering advanced nursing practices in sports medicine, injury prevention, and athlete care.",
    price: 1500,
    level: 'Master\'s',
    modality: 'Online',
    duration: '18 months',
    rating: 4.8,
    students: 234,
    image: '/image/course1.jpg',
    modules: ['Module 1', 'Module 2', 'Module 3'],
    outcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
    status: 'active'
  },
  {
    id: 'executive-financial-strategy',
    title: 'Executive Financial Strategy',
    description: 'Strategic financial management for sports organizations',
    fullDescription: 'Learn advanced financial strategies for sports organizations and business management.',
    price: 2000,
    level: 'Executive',
    modality: 'Hybrid',
    duration: '12 months',
    rating: 4.6,
    students: 189,
    image: '/image/course2.jpg',
    modules: ['Module 1', 'Module 2', 'Module 3'],
    outcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
    status: 'active'
  }
];

export default function CoursesManagement() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (course: Course) => {
    setSelectedCourse(course);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleAdd = () => {
    setSelectedCourse(null);
    setIsEditing(false);
    setShowModal(true);
  };

  const handleDelete = (courseId: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(course => course.id !== courseId));
    }
  };

  const handleSave = (courseData: Partial<Course>) => {
    if (isEditing && selectedCourse) {
      setCourses(courses.map(course => 
        course.id === selectedCourse.id ? { ...course, ...courseData } : course
      ));
    } else {
      const newCourse: Course = {
        id: `course-${Date.now()}`,
        title: courseData.title || '',
        description: courseData.description || '',
        fullDescription: courseData.fullDescription || '',
        price: courseData.price || 0,
        level: courseData.level || '',
        modality: courseData.modality || '',
        duration: courseData.duration || '',
        rating: courseData.rating || 0,
        students: courseData.students || 0,
        image: courseData.image || '',
        modules: courseData.modules || [],
        outcomes: courseData.outcomes || [],
        status: courseData.status || 'draft'
      };
      setCourses([...courses, newCourse]);
    }
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Courses Management</h3>
        <button 
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Course
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Students</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-lg object-cover" src={course.image} alt={course.title} loading="lazy" decoding="async" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{course.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-300">{course.level} • {course.modality}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  ${course.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {course.students}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    course.status === 'active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : course.status === 'draft'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}>
                    {course.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleEdit(course)}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-200"
                    >
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => window.open(`/courses/${course.id}`, '_blank')}
                      className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-200"
                    >
                      <EyeIcon className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(course.id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Course Modal */}
      {showModal && (
        <CourseModal
          course={selectedCourse}
          isEditing={isEditing}
          onSave={handleSave}
          onClose={() => {
            setShowModal(false);
            setSelectedCourse(null);
          }}
        />
      )}
    </div>
  );
}

interface CourseModalProps {
  course: Course | null;
  isEditing: boolean;
  onSave: (courseData: Partial<Course>) => void;
  onClose: () => void;
}

function CourseModal({ course, isEditing, onSave, onClose }: CourseModalProps) {
  const [formData, setFormData] = useState<Partial<Course>>({
    title: course?.title || '',
    description: course?.description || '',
    fullDescription: course?.fullDescription || '',
    price: course?.price || 0,
    level: course?.level || '',
    modality: course?.modality || '',
    duration: course?.duration || '',
    rating: course?.rating || 0,
    students: course?.students || 0,
    image: course?.image || '',
    modules: course?.modules || [],
    outcomes: course?.outcomes || [],
    status: course?.status || 'draft'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {isEditing ? 'Edit Course' : 'Add New Course'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Level
                </label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select Level</option>
                  <option value="Master&apos;s">Master&apos;s</option>
                  <option value="Executive">Executive</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Beginner">Beginner</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Modality
                </label>
                <select
                  value={formData.modality}
                  onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select Modality</option>
                  <option value="Online">Online</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="In-person">In-person</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Description
              </label>
              <textarea
                value={formData.fullDescription}
                onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {isEditing ? 'Update' : 'Create'} Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


