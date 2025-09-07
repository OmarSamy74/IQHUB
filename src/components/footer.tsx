"use client";
import Image from "next/image";
// Removed IconButton import due to Material Tailwind compatibility issues

const LINKS = ["About", "Education", "Insights", "Events", "Community"];
const PROGRAM_LINKS = [
  "Masters", "Executive Programmes", "Advanced Programmes", 
  "Specialized Programmes", "Courses"
];
const SUBJECT_LINKS = [
  "Advanced Performance", "Coaching", "Health & Wellness", 
  "Sports Analytics", "Sports Business", "Sports Science"
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-brand-blue px-8 pt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Image src="/logos/logo.png" alt="IQ Stats Hub Logo" width={48} height={48} className="rounded-lg mr-2" />
              <span className="text-white text-2xl font-bold">IQ Stats Hub</span>
            </div>
            <p className="text-white mb-6 font-normal">
              Building the future of the sports industry through innovative education and professional development.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="text-white hover:text-blue-300 transition-colors">
                <i className="fa-brands fa-twitter text-xl"></i>
              </button>
              <button className="text-white hover:text-blue-300 transition-colors">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </button>
              <button className="text-white hover:text-blue-300 transition-colors">
                <i className="fa-brands fa-facebook text-xl"></i>
              </button>
              <button className="text-white hover:text-blue-300 transition-colors">
                <i className="fa-brands fa-instagram text-xl"></i>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {LINKS.map((link) => (
                <li key={link}>
                  <a href="#!" className="text-white hover:text-blue-300 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {PROGRAM_LINKS.map((link) => (
                <li key={link}>
                  <a href="#!" className="text-white hover:text-blue-300 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-white font-semibold mb-4">Subjects</h4>
            <ul className="space-y-2">
              {SUBJECT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#!" className="text-white hover:text-blue-300 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-center md:text-left font-normal opacity-75 text-sm">
              &copy; {CURRENT_YEAR} IQ Stats Hub. All rights reserved. | 
              <a href="#!" className="hover:text-blue-300 transition-colors ml-1">Legal Terms</a> | 
              <a href="#!" className="hover:text-blue-300 transition-colors ml-1">Privacy Policy</a> | 
              <a href="#!" className="hover:text-blue-300 transition-colors ml-1">Contact Us</a>
            </p>
            <div className="text-white text-sm opacity-75">
              Powered by Barça Innovation Hub Education Platform
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
