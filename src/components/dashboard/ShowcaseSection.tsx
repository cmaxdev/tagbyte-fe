import React from 'react';
import Image from 'next/image';

export default function ShowcaseSection() {
  return (
    <section id="portofoliu" className="py-4 lg:py-6">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 px-4 lg:px-0">
        {/* Left Image */}
        <div className="w-full lg:w-auto">
          <Image
            src="/images/showcase/1.png"
            alt="Showcase Image 1"
            width={452}
            height={417}
            className="w-full h-auto max-w-[452px] mx-auto lg:mx-0"
            priority
          />
        </div>
      
        {/* Right Image */}
        <div className="w-full lg:w-auto">
          <Image
            src="/images/showcase/2.png"
            alt="Showcase Image 2"
            width={532}
            height={439}
            className="w-full h-auto max-w-[532px] mx-auto lg:mx-0"
            priority
          />
        </div>
      </div>
    </section>
  );
}
