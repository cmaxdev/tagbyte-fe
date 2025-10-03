import React from 'react';
import Image from 'next/image';

import BrandingIcon from "/public/icons/dashboard/services/branding.svg"
import WebsiteIcon from "/public/icons/dashboard/services/website.svg"
import MobileIcon from "/public/icons/dashboard/services/mobile.svg"
import SoftwareIcon from "/public/icons/dashboard/services/software.svg"
import VideoIcon from "/public/icons/dashboard/services/video.svg"
import DesignIcon from "/public/icons/dashboard/services/design.svg"


import EmailIcon from "/public/icons/dashboard/hero/email.svg"


export default function ServicesSection() {
  return (
    <section id="servicii" className="py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-[linear-gradient(to_right,#588AFF_15%,#C2E0FF_90%)] bg-clip-text text-transparent font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[42px]">SERVICIILE</span>
          <span className="text-black font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[42px]"> NOASTRE</span>
        </h2>
        <p className="text-sm font-semibold italic text-[#171E29] leading-relaxed max-w-[330px] opacity-70 mx-auto text-center px-4">
        De la web și aplicații mobile, până la branding și video promo – oferim soluții digitale complete.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-20 mb-10">

        <div className="max-w-[300px] h-[180px] relative mx-auto w-full">
          <div className="absolute left-4 bottom-4.5">
            <BrandingIcon className="w-[24px] h-[25px]" />
            <p className="text-base font-normal text-black font-Inter">Branding</p>
          </div>
          <Image src="/images/services/branding.png" alt="Branding" className="absolute right-0 top-[-30px] w-auto h-auto max-w-[175px]" width={175} height={134} />
        </div>

        <div className="max-w-[300px] h-[180px] relative mx-auto w-full">
          <div className="absolute left-4 bottom-4.5">
            <WebsiteIcon className="w-[24px] h-[25px]" />
            <p className="text-base font-normal text-black font-Inter">Website-uri</p>
          </div>
          <Image src="/images/services/website.png" alt="Website" className="absolute right-0 top-[-30px] w-auto h-auto max-w-[197px]" width={197} height={118} />
        </div>

        <div className="max-w-[300px] h-[180px] relative mx-auto w-full">
          <div className="absolute left-4 bottom-4.5">
            <MobileIcon className="w-[24px] h-[25px]" />
            <p className="text-base font-normal text-black font-Inter">Aplicații mobile</p>
          </div>
          <Image src="/images/services/mobile.png" alt="Mobile" className="absolute right-0 top-[-30px] w-auto h-auto max-w-[148px]" width={148} height={130} />
        </div>

        <div className="max-w-[300px] h-[180px] relative mx-auto w-full">
          <div className="absolute left-4 bottom-4.5">
            <SoftwareIcon className="w-[24px] h-[25px]" />
            <p className="text-base font-normal text-black font-Inter">Software custom</p>
          </div>
          <Image src="/images/services/software.png" alt="Software" className="absolute right-0 top-[-30px] w-auto h-auto max-w-[198px]" width={198} height={104} />
        </div>

        <div className="max-w-[300px] h-[180px] relative mx-auto w-full">
          <div className="absolute left-4 bottom-4.5">
            <VideoIcon className="w-[24px] h-[25px]" />
            <p className="text-base font-normal text-black font-Inter">Video promo</p>
          </div>
          <Image src="/images/services/branding.png" alt="Video" className="absolute right-0 top-[-30px] w-auto h-auto max-w-[175px]" width={175} height={134} />
        </div>

        <div className="max-w-[300px] h-[180px] relative mx-auto w-full">
          <div className="absolute left-4 bottom-4.5">
            <DesignIcon className="w-[24px] h-[25px]" />
            <p className="text-base font-normal text-black font-Inter">Web design</p>
          </div>
          <Image src="/images/services/web-design.png" alt="Web Design" className="absolute right-0 top-[-30px] w-auto h-auto max-w-[208px]" width={208} height={106} />
        </div>

      </div>
      
      <div className="w-full flex justify-center">
        <a
          href="#cerere-oferta"
          className="w-[145px] bg-black rounded-full h-[34px] text-white font-semibold text-sm flex items-center justify-center gap-1"
        > 
          <EmailIcon className="w-[23px] h-[22px]" />
          Cerere Ofertă
        </a>
      </div>
    </section>
  );
}
