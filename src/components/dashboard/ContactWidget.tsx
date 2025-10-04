import React from 'react';

import EmailIcon from '/public/icons/dashboard/hero/email.svg';
import PhoneIcon from '/public/icons/dashboard/hero/phone.svg';

import WhatsappIcon from '/public/icons/whatsapp.svg';

export default function ContactWidget() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3 flex flex-col items-end">
      {/* WhatsApp */}
      <div className="cursor-pointer flex flex-row justify-center items-center gap-1">
        <span className="font-semibold text-[13.23px] text-black font-inter shadow-[inset_0px_0px_10px_0px_#28DD43] rounded-full p-2 bg-white leading-4 tracking-[0.2px]">Scrie-ne pe WhatsApp</span>
        <div className="relative">
          <div className="w-12 h-12 overflow-hidden">
            <WhatsappIcon className="absolute top-[-12px] left-[-12px]" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#d7d7d7] rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-[#3d413d]">1</span>
          </div>
        </div>
      </div>

      <a href="tel:0722XXXXXX" className="w-[145px] bg-black rounded-full h-[34px] text-white font-semibold text-[13.23px] font-inter leading-4 tracking-[0.2px] flex items-center justify-center gap-1">
        <PhoneIcon className="w-[29px] h-[26px]" />
        0722 XXX XXX
      </a>
      
      <a href="#cerere-oferta" onClick={(e) => handleSmoothScroll(e, 'cerere-oferta')} className="w-[145px] bg-black rounded-full h-[34px] text-white font-semibold text-[15px] font-inter flex items-center justify-center gap-1"> 
        <EmailIcon className="w-[23px] h-[22px]" />
        Cerere Ofertă
      </a>
    </div>
  );
}
