import React from 'react';
import Image from 'next/image';

import LogoIcon from '/public/icons/footer/logo.svg';


export default function FooterSection() {
  return (
    <footer className="bg-black text-white pt-[60px] pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Social Media */}
          <div className="space-y-4 text-center lg:text-left flex flex-col justify-center">
            <div className="flex items-center justify-center lg:justify-start gap-3 overflow-hidden">
              <LogoIcon className="min-w-[50px] h-[50px]" />
              <div className="overflow-hidden flex w-[200px]">
                <span className="bg-gradient-to-r from-[#588AFF]/80 to-white/80 bg-clip-text text-transparent min-w-[519px] w-full text-[38.59px] font-extrabold font-inter text-left">TAGBYTE</span>
              </div>
            </div>
            <p className="text-[13.59px] font-medium italic font-inter leading-[22px] tracking-[-0.1px] text-white opacity-80 min-w-[346px] h-16 text-center lg:text-left">
              Dezvoltăm website-uri și aplicații care vând.
            </p>


            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] overflow-hidden relative">
                <div className="w-[70px] h-[68px] lg:w-[85px] lg:h-[82px] absolute top-[-10px] left-[-10px] lg:top-[-12px] lg:left-[-12px]">
                  <Image src={"/images/footer/whatsapp.png"} alt="WhatsApp" className="w-full h-full" width={85} height={82} />
                </div>
              </div>

              <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] overflow-hidden relative">
                <div className="w-[70px] h-[68px] lg:w-[85px] lg:h-[82px] absolute top-[-10px] left-[-10px] lg:top-[-12px] lg:left-[-12px]">
                  <Image src={"/images/footer/facebook.png"} alt="Facebook" className="w-full h-full" width={85} height={82} />
                </div>
              </div>

              <div className="w-[40px] h-[40px] lg:w-[55px] lg:h-[50px] overflow-hidden relative">
                <div className="w-[70px] h-[68px] lg:w-[85px] lg:h-[82px] absolute top-[-10px] left-[-10px] lg:top-[-12px] lg:left-[-12px]">
                  <Image src={"/images/footer/instagram.png"} alt="Instagram" className="w-full h-full" width={85} height={82} />
                </div>
              </div>

              <div className="w-[40px] h-[40px] lg:w-[55px] lg:h-[50px] overflow-hidden relative">
                <div className="w-[70px] h-[68px] lg:w-[85px] lg:h-[82px] absolute top-[-10px] left-[-10px] lg:top-[-12px] lg:left-[-12px]">
                  <Image src={"/images/footer/tiktok.png"} alt="Tiktok" className="w-full h-full" width={85} height={82} />
                </div>
              </div>

              <div className="w-[40px] h-[40px] lg:w-[55px] lg:h-[50px] overflow-hidden relative">
                <div className="w-[70px] h-[68px] lg:w-[85px] lg:h-[82px] absolute top-[-10px] left-[-10px] lg:top-[-12px] lg:left-[-12px]">
                  <Image src={"/images/footer/x.png"} alt="X" className="w-full h-full" width={85} height={82} />
                </div>
              </div>

            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-5 text-center">
            <h3 className="text-white text-[11px] font-normal font-konkhmer-sleokchher leading-3 tracking-normal">CONTACT</h3>
            <div className="text-white text-[11px] font-medium font-jetbrains-mono leading-3 tracking-normal flex flex-col gap-[9px]">
              <span>CODE@TAGBYTE.DEV</span>
              <span>+40 722 XXX XXX</span>
              <a href="#cerere-oferta" className="block hover:text-blue-300 transition-colors">
                CERERE OFERTA
              </a>
            </div>
          </div>
          
          {/* Quick Navigation */}
          <div className="space-y-5 text-center">
            <h3 className="text-white text-[11px] font-normal font-konkhmer-sleokchher leading-3 tracking-normal">NAVIGAȚIE RAPIDĂ</h3>
            <div className="text-white text-[11px] font-medium font-jetbrains-mono leading-3 tracking-normal flex flex-col gap-[9px]">
              <a href="#servicii" >SERVICII</a>
              <a href="#cum-lucram" >CUM LUCRĂM</a>
              <a href="#portofoliu" >PORTOFOLIU</a>
              <a href="#preturi" >PREȚURI</a>
              <a href="#faq" >FAQ</a>
              <a href="#contact" >CONTACT</a>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-5 text-center">
            <h3 className="text-white text-[11px] font-normal font-konkhmer-sleokchher leading-3 tracking-normal">LEGAL</h3>
            <div className="text-white text-[11px] font-medium font-jetbrains-mono leading-3 tracking-normal flex flex-col gap-[9px]">
              <a href="/legal" className="hover:text-blue-300 transition-colors">TERMENI SI CONDITII</a>
              <a href="/legal" className="hover:text-blue-300 transition-colors">POLITICA DE CONFIDENTIALITATE</a>
              <a href="/legal" className="hover:text-blue-300 transition-colors">POLITICA COOKIES</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
