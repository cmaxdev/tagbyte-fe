import React from 'react';
import Image from 'next/image';

export default function ShowcaseSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="flex items-center">
        {/* Left Image */}
        <div className="">
          <Image
            src="/images/showcase/1.png"
            alt="Showcase Image 1"
            width={452}
            height={417}
            className=""
            priority
          />
        </div>
      
        {/* Right Image */}
        <div className="">
          <Image
            src="/images/showcase/2.png"
            alt="Showcase Image 2"
            width={532}
            height={439}
            className=""
            priority
          />
        </div>
      </div>
    </section>
  );
}
