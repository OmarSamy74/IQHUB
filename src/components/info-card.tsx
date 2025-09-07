import React from "react";

// Removed Material Tailwind imports due to compatibility issues

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="bg-transparent">
      <div className="grid px-0">
        <h2 className="text-3xl font-bold text-blue-gray-900 mb-2">
          {title}
        </h2>
        <p className="font-normal">{children}</p>
      </div>
    </div>
  );
}

export default InfoCard;