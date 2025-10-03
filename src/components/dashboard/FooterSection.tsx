import React from 'react';
import Image from 'next/image';

import LogoIcon from '/public/icons/footer/logo.svg';


export default function FooterSection() {
  return (
    <footer className="bg-black text-white pt-[60px] pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Social Media */}
          <div className="space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 overflow-hidden">
              <LogoIcon className="min-w-[50px] h-[50px]" />
              <span className="bg-[linear-gradient(to_right,#588AFF_30%,#86c2ff_90%)] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-[38px] font-extrabold leading-tight tracking-[-0.6px]">TAGBYTE</span>
            </div>
            <p className="text-gray-300 text-sm italic font-medium">
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
          <div className="space-y-4 text-center">
            <h3 className="text-xs font-normal uppercase">CONTACT</h3>
            <div className="space-y-2 text-xs">
              <p>CODE@TAGBYTE.DEV</p>
              <p>+40 722 XXX XXX</p>
              <a href="#cerere-oferta" className="block hover:text-blue-300 transition-colors">
                CERERE OFERTA
              </a>
            </div>
          </div>
          
          {/* Quick Navigation */}
          <div className="space-y-4 text-center">
            <h3 className="text-xs font-bold uppercase">NAVIGAȚIE RAPIDĂ</h3>
            <div className="space-y-2 text-xs font-medium">
              <a href="#servicii" className="block hover:text-blue-400 transition-colors">SERVICII</a>
              <a href="#cum-lucram" className="block hover:text-blue-400 transition-colors">CUM LUCRĂM</a>
              <a href="#portofoliu" className="block hover:text-blue-400 transition-colors">PORTOFOLIU</a>
              <a href="#preturi" className="block hover:text-blue-400 transition-colors">PREȚURI</a>
              <a href="#faq" className="block hover:text-blue-400 transition-colors">FAQ</a>
              <a href="#contact" className="block hover:text-blue-400 transition-colors">CONTACT</a>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-4 text-center">
            <h3 className="text-xs font-bold uppercase">LEGAL</h3>
            <div className="space-y-2 text-xs font-medium">
              <a href="#" className="block hover:text-blue-400 transition-colors">TERMENI SI CONDITII</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">POLITICA DE CONFIDENTIALITATE</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">POLITICA COOKIES</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
