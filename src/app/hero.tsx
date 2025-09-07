"use client";

import Image from "next/image";
import Link from "next/link";
// Removed Button import due to Material Tailwind compatibility issues


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[60rem] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-20 lg:grid-cols-2">
          <div className="col-span-1">
            <div className="mb-6 animate-fade-in">
              <span className="text-blue-300 dark:text-blue-400 text-lg font-medium tracking-wider">BARÇA INNOVATION HUB</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Sports Education
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100 dark:text-gray-200 mb-8 animate-slide-up-delay">
              Empowering the Future of Sports Innovation
            </h2>
            <p className="text-xl text-blue-100 dark:text-gray-300 mb-8 md:pr-16 xl:pr-28 leading-relaxed animate-fade-in-delay">
              <strong>IQ STATS HUB</strong> revolutionizes sports education through cutting-edge technology, 
              data analytics, and innovative methodologies. We provide the <strong>most advanced learning environment</strong> 
              for developing the next generation of <strong>sports professionals, coaches, and analysts</strong>. 
              Join thousands of professionals who are already transforming the sports industry with our 
              <strong> AI-powered learning platform</strong>.
            </p>
            <div className="flex flex-col gap-4 md:mb-2 md:w-10/12 md:flex-row animate-bounce-in">
              <Link href="/courses" className="bg-white dark:bg-gray-800 text-blue-900 dark:text-white px-8 py-4 rounded-lg flex justify-center items-center gap-3 hover:bg-blue-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                <span className="animate-pulse">🚀</span>
                Explore Programs
              </Link>
              <Link href="/courses" className="border-2 border-white dark:border-gray-300 text-white dark:text-gray-200 px-8 py-4 rounded-lg flex justify-center items-center gap-3 hover:bg-white dark:hover:bg-gray-800 hover:text-blue-900 dark:hover:text-white hover:scale-105 transition-all duration-300 font-semibold text-lg">
                <span className="animate-spin">⚡</span>
                Join Live Masterclass
              </Link>
            </div>
          </div>
          <div className="col-span-1 my-20 lg:my-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 animate-float">
                <div className="text-4xl mb-3">🌐</div>
                <div className="text-3xl font-bold text-white dark:text-gray-100 mb-2">24/7</div>
                <div className="text-blue-200 dark:text-gray-300 text-sm">AI-Powered Learning</div>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 animate-float-delay">
                <div className="text-4xl mb-3">🎯</div>
                <div className="text-3xl font-bold text-white dark:text-gray-100 mb-2">Expert</div>
                <div className="text-blue-200 dark:text-gray-300 text-sm">Live Mentorship</div>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 animate-float-delay-2">
                <div className="text-4xl mb-3">🌍</div>
                <div className="text-3xl font-bold text-white dark:text-gray-100 mb-2">Global</div>
                <div className="text-blue-200 dark:text-gray-300 text-sm">Network of 50K+</div>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 animate-float-delay-3">
                <div className="text-4xl mb-3">🏆</div>
                <div className="text-3xl font-bold text-white dark:text-gray-100 mb-2">Certified</div>
                <div className="text-blue-200 dark:text-gray-300 text-sm">Industry Recognition</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Hero;
