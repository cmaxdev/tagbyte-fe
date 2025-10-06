import React from 'react';
import Image from 'next/image';

import PhoneIcon from '/public/icons/dashboard/hero/phone.svg';
import EmailIcon from '/public/icons/dashboard/hero/email.svg';
import FolderIcon from '/public/icons/dashboard/hero/folder.svg';

export default function HeroSection() {
  return (
    <section className="py-8 md:py-16 lg:py-21">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-12 items-center lg:items-end mx-auto">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className="space-y-8 lg:space-y-0">
            <h1 className="min-h-[196px] text-[42px] font-extrabold font-inter leading-[48.3px] tracking-[-0.4px] flex flex-col justify-center items-start bg-gradient-to-b from-[#588AFF] from-[57%] to-white/60 to-[100%] bg-clip-text text-transparent">
              <span className="text-black">CONSTRUIM</span>
              <span className="text-black">EXPERIENȚE</span>
              <div className="flex flex-col lg:flex-row justify-start items-start lg:gap-4">
                DIGITALE
                <span className="text-black">CARE</span>
                VÂ ND
              </div>
            </h1>
            <p className="text-[13.83px] font-semibold italic text-[#171E29] leading-relaxed max-w-[350px] mx-auto lg:mx-0 opacity-70 font-inter">
              Web design, software și branding pentru afaceri care vor să crească
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 justify-center lg:justify-start">
            <a href="tel:0722XXXXXX" className="w-[145px] bg-black rounded-full h-[34px] text-white font-semibold font-inter text-[13.23px] flex items-center justify-center gap-1 mx-auto sm:mx-0">
              <PhoneIcon className="w-[29px] h-[26px]" />
              0722 XXX XXX
            </a>
            <a href="#cerere-oferta" className="px-2 min-w-[145px] bg-black rounded-full h-[34px] text-white font-semibold font-inter text-[15px] flex items-center justify-center gap-1"> 
              <EmailIcon className="w-[23px] h-[22px]" />
              CERERE OFERTĂ
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
                    <span className="text-white text-[13.23px] font-semibold font-inter">Portofoliu</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
