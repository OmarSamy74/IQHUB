"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useThemeSafe } from "@/contexts/ThemeContext";
import { useI18n } from "@/contexts/I18nContext";
import { useCurrency, SupportedCurrency } from "@/contexts/CurrencyContext";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link href={href || "#"} className="font-medium text-brand-blue hover:text-brand-green dark:text-blue-300 dark:hover:text-blue-100 transition px-3 py-2">
        {children}
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const { theme, toggleTheme } = useThemeSafe();
  const { locale, setLocale, t } = useI18n();
  const { currency, setCurrency } = useCurrency();

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 mx-auto max-w-full px-4 py-2 shadow-md bg-white dark:bg-gray-900 transition-colors duration-300 ${isScrolling ? "border-b border-brand-blue dark:border-blue-400" : ""}`}>
      <div className="flex items-center justify-between">
        <Link href="/" className="mr-4 cursor-pointer py-1.5 text-brand-blue dark:text-blue-300 font-bold text-xl flex items-center">
          <Image src="/logos/logo.png" alt="IQ Stats Hub Logo" width={32} height={32} className="w-8 h-8 rounded-lg mr-2" />
          IQ Stats Hub
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <NavItem href="/about">{t('nav_about')}</NavItem>
            <NavItem href="/courses">{t('nav_education')}</NavItem>
            <NavItem href="#insights">{t('nav_insights')}</NavItem>
            <NavItem href="#events">{t('nav_events')}</NavItem>
            <NavItem href="#community">{t('nav_community')}</NavItem>
          </ul>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as 'en' | 'ar')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Language"
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as SupportedCurrency)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Currency"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="EGP">EGP</option>
          </select>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </button>
          <button
            className="h-8 w-8 text-brand-blue dark:text-blue-300 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden mt-2">
          <ul className="flex flex-col gap-2">
            <NavItem href="/about">{t('nav_about')}</NavItem>
            <NavItem href="/courses">{t('nav_education')}</NavItem>
            <NavItem href="#insights">{t('nav_insights')}</NavItem>
            <NavItem href="#events">{t('nav_events')}</NavItem>
            <NavItem href="#community">{t('nav_community')}</NavItem>
          </ul>
          <div className="flex items-center gap-2 mt-2">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as 'en' | 'ar')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex-1"
              aria-label="Language"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as SupportedCurrency)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex-1"
              aria-label="Currency"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="EGP">EGP</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
