import React from 'react';
import Image from 'next/image';

import LogoIcon from '/public/icons/footer/logo.svg';


export default function FooterSection() {
  return (
    <footer className="bg-black text-white pt-[60px] pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Social Media */}
          <div className="space-y-4">
            <div className="flex items-center justify-start gap-3 overflow-hidden">
              <LogoIcon className="min-w-[50px] h-[50px]" />
              <span className="bg-[linear-gradient(to_right,#588AFF_30%,#86c2ff_90%)] bg-clip-text text-transparent text-[38px] font-extrabold leading-tight text-left tracking-[-0.6px]">TAGBYTE</span>
            </div>
            <p className="text-gray-300 text-sm italic font-medium">
              Dezvoltăm website-uri și aplicații care vând.
            </p>
            <div className="flex items-center justify-between">
              <div className="w-[50px] h-[50px] overflow-hidden relative">
                <div className="w-[85px] h-[82px] absolute top-[-12px] left-[-12px]">
                  <Image src={"/images/footer/whatsapp.png"} alt="WhatsApp" className="w-[85px] h-[82px]" width={85} height={82} />
                </div>
              </div>

              <div className="w-[50px] h-[50px] overflow-hidden relative">
                <div className="w-[85px] h-[82px] absolute top-[-12px] left-[-12px]">
                  <Image src={"/images/footer/facebook.png"} alt="Facebook" className="w-[85px] h-[82px]" width={85} height={82} />
                </div>
              </div>

              <div className="w-[55px] h-[50px] overflow-hidden relative">
                <div className="w-[85px] h-[82px] absolute top-[-12px] left-[-12px]">
                  <Image src={"/images/footer/instagram.png"} alt="Instagram" className="w-[85px] h-[82px]" width={85} height={82} />
                </div>
              </div>

              <div className="w-[55px] h-[50px] overflow-hidden relative">
                <div className="w-[85px] h-[82px] absolute top-[-12px] left-[-12px]">
                  <Image src={"/images/footer/tiktok.png"} alt="Tiktok" className="w-[85px] h-[82px]" width={85} height={82} />
                </div>
              </div>

              <div className="w-[55px] h-[50px] overflow-hidden relative">
                <div className="w-[85px] h-[82px] absolute top-[-12px] left-[-12px]">
                  <Image src={"/images/footer/x.png"} alt="X" className="w-[85px] h-[82px]" width={85} height={82} />
                </div>
              </div>

            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-normal uppercase text-center">CONTACT</h3>
            <div className="space-y-2 text-xs">
              <p className="text-center">CODE@TAGBYTE.DEV</p>
              <p className="text-center">+40 722 XXX XXX</p>
              <a href="#cerere-oferta" className="block hover:text-blue-300 transition-colors text-center">
                CERERE OFERTA
              </a>
            </div>
          </div>
          
          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase text-center">NAVIGAȚIE RAPIDĂ</h3>
            <div className="space-y-2 text-xs font-medium">
              <a href="#servicii" className="text-center block hover:text-blue-400 transition-colors">SERVICII</a>
              <a href="#cum-lucram" className="text-center block hover:text-blue-400 transition-colors">CUM LUCRĂM</a>
              <a href="#portofoliu" className="text-center block hover:text-blue-400 transition-colors">PORTOFOLIU</a>
              <a href="#preturi" className="text-center block hover:text-blue-400 transition-colors">PREȚURI</a>
              <a href="#faq" className="text-center block hover:text-blue-400 transition-colors">FAQ</a>
              <a href="#contact" className="text-center block hover:text-blue-400 transition-colors">CONTACT</a>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase text-center">LEGAL</h3>
            <div className="space-y-2 text-xs font-medium">
              <a href="#" className="text-center block hover:text-blue-400 transition-colors">TERMENI SI CONDITII</a>
              <a href="#" className="text-center block hover:text-blue-400 transition-colors">POLITICA DE CONFIDENTIALITATE</a>
              <a href="#" className="text-center block hover:text-blue-400 transition-colors">POLITICA COOKIES</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
