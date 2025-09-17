"use client";

import React from "react";
import dynamic from "next/dynamic";
const T = dynamic(() => import("@/components/T"), { ssr: false });
// Removed unused imports due to Material Tailwind compatibility issues

const FAQS = [
  {
    titleKey: "faq_start_title",
    descKey: "faq_start_desc",
  },
  {
    titleKey: "faq_trial_title",
    descKey: "faq_trial_desc",
  },
  {
    titleKey: "faq_upgrade_title",
    descKey: "faq_upgrade_desc",
  },
  {
    titleKey: "faq_cancel_title",
    descKey: "faq_cancel_desc",
  },
  {
    titleKey: "faq_paid_title",
    descKey: "faq_paid_desc",
  },
  {
    titleKey: "faq_support_title",
    descKey: "faq_support_desc",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-gray-900 dark:text-white mb-4">
            <T k="faq_title" />
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-300 mx-auto mb-24 lg:w-3/5">
            <T k="faq_subtitle" />
          </p>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ titleKey, descKey }, index) => (
            <div key={index} className="bg-transparent">
              <h4 className="text-2xl font-semibold text-blue-gray-900 dark:text-white pb-6">
                <T k={titleKey} />
              </h4>
              <div className="pt-2">
                <p className="font-normal text-gray-500 dark:text-gray-300">
                  <T k={descKey} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
