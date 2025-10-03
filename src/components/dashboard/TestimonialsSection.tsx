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
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gray-900">EXPERIENȚE</span>
          <span className="bg-[linear-gradient(to_right,#588AFF_20%,#C2E0FF_80%)] bg-clip-text text-transparent"> REALE</span>
        </h2>
        <p className="text-sm font-medium italic text-[#171E29] leading-relaxed opacity-70 text-center">
          Află direct de la clienții noștri
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center relative">
        {/* Main Testimonial */}
        <div className="flex-1 max-w-[920px] h-[486px] bg-[#FAFAFA] relative rounded-3xl border">  
          <div className="rounded-2xl p-8 relative h-[390px] flex flex-col justify-center items-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-6 ">
              <LitIcon />
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-[15px] font-medium leading-[22px] text-gray-700 mb-6 max-w-[550px] text-center tracking-[0.2px]">
              Am <strong>analizat</strong> mai multe <strong>echipe de web design</strong> înainte să alegem și pot spune cu încredere că am făcut <strong>alegerea corectă</strong>. Site-ul livrat este <strong>modern, rapid și bine optimizat</strong>. În prima lună după lansare am observat o creștere cu <strong>30%</strong> a cererilor de ofertă și o scădere a ratei de <strong>abandon</strong>. Colaborarea a fost simplă și eficientă.
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/images/testimonials/andrei.png" alt="Andrei M." width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Andrei M.</div>
                <div className="text-sm text-gray-600">Antreprenor</div>
              </div>
            </div>
          </div>
          
          {/* Client Logos */}
          <div className="flex flex-row w-full h-24">
            <div className="w-full h-full flex items-center justify-center bg-[#f5f5f5] border rounded-bl-3xl">
              <LitIconSm className="" />
            </div>

            <div className="w-full h-full flex items-center justify-center bg-[#f5f5f5] border">
              <NimIconSm className="" />
            </div>

            <div className="w-full h-full flex items-center justify-center bg-[#f5f5f5] border">
              <MorningIconSm className="" />
            </div>

            <div className="w-full h-full flex items-center justify-center bg-[#f5f5f5] border rounded-br-3xl">
              <CakeIconSm className="" />
            </div>
          </div>

          <StarCheckIcon className="absolute top-[-60px] right-[-115px]" />
        </div>
      </div>
    </section>
  );
}

