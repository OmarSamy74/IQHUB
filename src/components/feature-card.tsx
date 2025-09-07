// Removed Material Tailwind imports due to compatibility issues
import Link from "next/link";
import dynamic from "next/dynamic";
const T = dynamic(() => import("@/components/T"), { ssr: false });

interface FeatureCardProps {
  icon: React.ElementType;
  title?: string;
  titleKey?: string;
  children?: React.ReactNode;
  childrenKey?: string;
  emoji?: string;
  color?: string;
  index?: number;
}

export function FeatureCard({ icon: Icon, title, titleKey, children, childrenKey, emoji, color, index = 0 }: FeatureCardProps) {
  return (
    <div className="relative group animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
      <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className={`mx-auto h-full w-full rounded-lg bg-gradient-to-r ${color || 'from-blue-500 to-purple-600'} opacity-75 blur-lg filter`}
          aria-hidden="true"
        />
      </div>
      <div className="relative">
        <div className="rounded-xl bg-white dark:bg-gray-800 px-8 py-12 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100 dark:border-gray-700">
          <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">{emoji || '🚀'}</span>
          </div>
          <h5 className="mb-4 text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {titleKey ? <T k={titleKey} /> : title}
          </h5>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {childrenKey ? <T k={childrenKey} /> : children}
          </p>
          <Link href="/courses" className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
            <T k="learn_more" />
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

  export default FeatureCard;
  