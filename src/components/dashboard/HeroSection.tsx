import React from 'react';
import Image from 'next/image';

import PhoneIcon from '/public/icons/dashboard/hero/phone.svg';
import EmailIcon from '/public/icons/dashboard/hero/email.svg';
import FolderIcon from '/public/icons/dashboard/hero/folder.svg';

export default function HeroSection() {
  return (
    <section className="py-8 md:py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mx-auto">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[41px] font-extrabold leading-tight">
              <span className="text-gray-900">CONSTRUIM</span>
              <br />
              <span className="text-gray-900">EXPERIENȚE</span>
              <br />
              <span className="bg-[linear-gradient(to_bottom,#588AFF_0%,#C2E0FF_60%)] bg-clip-text text-transparent">DIGITALE</span>
              &nbsp;
              <span className="text-gray-900">CARE</span>
              &nbsp;
              <span className="bg-[linear-gradient(to_bottom,#588AFF_0%,#C2E0FF_60%)] bg-clip-text text-transparent">VÂND</span>
            </h1>
            <p className="text-sm font-semibold italic text-[#171E29] leading-relaxed max-w-80 mx-auto lg:mx-0 opacity-70">
              Web design, software și branding pentru afaceri care vor să crească
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="tel:0722XXXXXX" className="w-[145px] bg-black rounded-full h-[34px] text-white font-semibold text-sm flex items-center justify-center gap-1 mx-auto sm:mx-0">
              <PhoneIcon className="w-[29px] h-[26px]" />
              0722 XXX XXX
            </a>
            <a href="#cerere-oferta" className="w-[145px] bg-black rounded-full h-[34px] text-white font-semibold text-sm flex items-center justify-center gap-1 mx-auto sm:mx-0"> 
              <EmailIcon className="w-[23px] h-[22px]" />
              Cerere Ofertă
            </a>
          </div>
        </div>
        
        {/* Right Content - Portfolio Visual */}
        <div className="w-full max-w-[336px] lg:w-[336px] h-[231px] relative flex items-center justify-center mt-4 lg:mt-8">
            <div className="w-full max-w-[326px] lg:w-[326px] h-[221px] bg-black rounded-[20px] relative">
                <div className="relative w-full h-full">
                    <Image src="/images/dashboard/image.png" alt="Phone" className="absolute bottom-[30px] w-full h-auto" width={322} height={242} />
                </div>
            </div>
            <div className="w-full max-w-[326px] lg:w-[326px] h-[175px] bg-[#FFFFFFE6] rounded-[18px] absolute bottom-[5px] left-[5px] flex items-center justify-center flex-col gap-[30px]" style={{boxShadow: '2px 0px 10px 8px rgba(0, 0, 0, 0.3)'}}>
                <a href="#cerere-oferta" className="bg-black rounded-full w-[35px] h-[35px] flex items-center justify-center">
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.966 9.92212L5.092 9.06412L8.129 6.04912H0.5V4.79512H8.129L5.092 1.78512L5.967 0.922119L10.5 5.42212L5.966 9.92212Z" fill="white" fillOpacity="0.95"/>
                    </svg>
                </a>
                <a href="#cerere-oferta" className="bg-black w-[158px] h-[34px] rounded-full flex items-center gap-2 px-[10px]">
                    <div className="bg-white w-[29px] h-[27px] rounded-full flex items-center justify-center">
                        <FolderIcon className="w-[17px] h-[17px]" />
                    </div>
                    <span className="text-white text-sm font-semibold">Portofoliu</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
