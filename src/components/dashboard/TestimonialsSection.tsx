import React from 'react';
import Image from 'next/image';

import LitIcon from "/public/icons/dashboard/testimonials/lit.svg"
import StarCheckIcon from "/public/icons/dashboard/testimonials/star-check.svg"

import LitIconSm from "/public/icons/dashboard/testimonials/lit-sm.svg"
import NimIconSm from "/public/icons/dashboard/testimonials/nim-sm.svg"
import MorningIconSm from "/public/icons/dashboard/testimonials/morning.svg"
import CakeIconSm from "/public/icons/dashboard/testimonials/cake.svg"

export default function TestimonialsSection() {
  return (
    <section className="py-8 lg:py-12 mb-8 w-full">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gray-900">EXPERIENȚE</span>
          <span className="bg-[linear-gradient(to_right,#588AFF_20%,#C2E0FF_80%)] bg-clip-text text-transparent"> REALE</span>
        </h2>
        <p className="text-sm font-medium italic text-[#171E29] leading-relaxed opacity-70 text-center px-4">
          Află direct de la clienții noștri
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center relative px-4 lg:px-0">
        {/* Main Testimonial */}
        <div className="flex-1 max-w-[920px] w-full h-auto lg:h-[486px] bg-[#FAFAFA] relative rounded-3xl border">  
          <div className="rounded-2xl p-4 sm:p-6 lg:p-8 relative h-auto lg:h-[390px] flex flex-col justify-center items-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
              <LitIcon className="w-full" />
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-sm sm:text-[15px] font-medium leading-[20px] sm:leading-[22px] text-gray-700 mb-4 lg:mb-6 max-w-[550px] text-center tracking-[0.2px] px-2">
              Am <strong>analizat</strong> mai multe <strong>echipe de web design</strong> înainte să alegem și pot spune cu încredere că am făcut <strong>alegerea corectă</strong>. Site-ul livrat este <strong>modern, rapid și bine optimizat</strong>. În prima lună după lansare am observat o creștere cu <strong>30%</strong> a cererilor de ofertă și o scădere a ratei de <strong>abandon</strong>. Colaborarea a fost simplă și eficientă.
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center gap-3 mb-4 lg:mb-8">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/images/testimonials/andrei.png" alt="Andrei M." width={48} height={48} className="rounded-full w-full h-full" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm lg:text-base">Andrei M.</div>
                <div className="text-xs lg:text-sm text-gray-600">Antreprenor</div>
              </div>
            </div>
          </div>
          
          {/* Client Logos */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row w-full h-fit lg:h-24">
            <div className="w-full h-full flex items-center justify-center bg-[#f5f5f5] border lg:rounded-bl-3xl p-2">
              <LitIconSm className="max-w-[121px] w-full" />
            </div>

            <div className="w-full h-full flex items-center justify-center bg-[#f5f5f5] border lg:border-l-0 p-2">
              <NimIconSm className="max-w-[144px] w-full" />
            </div>

            <div className="w-full h-full flex items-center justify-center bg-[#f5f5f5] border rounded-bl-3xl lg:rounded-bl-none lg:border-l-0 p-2">
              <MorningIconSm className="max-w-[47px] w-full" />
            </div>

            <div className="w-full h-full flex items-center justify-center bg-[#f5f5f5] border rounded-br-3xl lg:border-l-0 p-2">
              <CakeIconSm className="max-w-[35px] w-full" />
            </div>
          </div>

          <StarCheckIcon className="hidden lg:block absolute top-[-30px] right-[-30px] lg:top-[-60px] lg:right-[-115px] w-12 h-12 lg:w-auto lg:h-auto" />
        </div>
      </div>
    </section>
  );
}

