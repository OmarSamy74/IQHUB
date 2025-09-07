import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <div className="items-center text-center">
      <div>
        <Image src={img} className="mb-3 rounded-full mx-auto" alt={client} width={64} height={64} />
        <h6 className="text-lg font-semibold text-blue-gray-900">
          {client}
        </h6>
        <p className="text-sm mb-3 font-medium text-gray-700">
          {title}
        </p>
        <p className="mb-5 font-normal text-gray-500">
          &quot;{feedback}&quot;
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;