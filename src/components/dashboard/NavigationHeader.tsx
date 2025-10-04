"use client";

import React from 'react';
import MailIcon from '/public/icons/dashboard/header/mail.svg';
import StripeIcon from '/public/icons/dashboard/header/stripe.svg';
import ServiceIcon from '/public/icons/dashboard/header/service.svg';
import ConnectIcon from '/public/icons/dashboard/header/connect.svg';
import PortfolioIcon from '/public/icons/dashboard/header/portfolio.svg';

export default function NavigationHeader() {
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
    <header className="mb-8 relative flex justify-start">
      {/* Debug info - remove this in production */}
      <div className="rounded-full h-[48px] px-2 lg:px-0 flex items-center justify-start gap-1 sm:gap-4">
        {/* Left Part - Logo */}
        <div className="flex items-center w-8 h-8 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <StripeIcon className="w-[48px] h-[48px] text-gray-800" style={{ width: '48px', height: '48px' }} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 justify-center rounded-full h-full px-6 w-[552px] max-h-10" style={{ background: 'linear-gradient(to bottom, #3D3D3DB3 0%, #3D3D3DB3 30%, #808080B3 70%, #808080B3 100%)' }}>
          <a href="#servicii" onClick={(e) => handleSmoothScroll(e, 'servicii')} className="flex items-center gap-1.5 text-white hover:text-gray-200 hover:opacity-80 transition-all duration-300 relative group">
            <ServiceIcon className="w-4 h-4" />
            <span className="font-inter font-semibold" style={{ fontSize: '13.23px' }}>Servicii</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
          </a>

          <a href="#cum-lucram" onClick={(e) => handleSmoothScroll(e, 'cum-lucram')} className="flex items-center gap-1.5 text-white hover:text-gray-200 hover:opacity-80 transition-all duration-300 relative group">
            <ConnectIcon className="w-4 h-4" />
            <span className="font-inter font-semibold" style={{ fontSize: '13.23px' }}>Cum lucrăm?</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
          </a>

          <a href="#portofoliu" onClick={(e) => handleSmoothScroll(e, 'portofoliu')} className="flex items-center gap-1.5 text-white hover:text-gray-200 hover:opacity-80 transition-all duration-300 relative group">
            <PortfolioIcon className="w-4 h-4" />
            <span className="font-inter font-semibold" style={{ fontSize: '13.23px' }}>Portofoliu</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
          </a>

          <a href="tel:0722XXXXXX" className="flex items-center gap-1.5 text-white hover:text-gray-200 hover:opacity-80 transition-all duration-300 relative group">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-inter font-semibold" style={{ fontSize: '13.23px' }}>Sună-ne: 0722 XXX XXX</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
          </a>
        </nav>

        {/* Mobile Center - Phone Number Only */}
        <div className="lg:hidden flex items-center justify-center flex-1 rounded-full h-full max-h-10" style={{ background: 'linear-gradient(to bottom, #3D3D3DB3 0%, #3D3D3DB3 30%, #808080B3 70%, #808080B3 100%)' }}>
          <a href="tel:0722XXXXXX" className="flex items-center gap-1.5 text-gray-800 hover:text-gray-600 hover:opacity-80 transition-all duration-300 relative group">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm font-semibold" style={{ fontSize: '13.23px' }}>Sună-ne: 0722 XXX XXX</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>

        {/* Right Part - CTA Button & Mobile Menu */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Desktop CTA Button */}
          <a
            href="#cerere-oferta"
            onClick={(e) => handleSmoothScroll(e, 'cerere-oferta')}
            className="hidden sm:flex bg-[#000000] text-white text-sm sm:text-base px-3 sm:px-4 py-1.5 rounded-full items-center gap-1.5 transition-all duration-300 font-semibold h-8 hover:opacity-80 hover:scale-105"
          >
            <div className="w-[22px] h-[22px] rounded flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #1A6AE7, #20C2F4)' }}>
              <MailIcon className="w-[20px] h-[12px] text-white" />
            </div>
            <span className="hidden md:inline font-inter font-semibold text-[15px]">Cerere Ofertă</span>
          </a>

          {/* Mobile CTA Button */}
          <a
            href="#cerere-oferta"
            onClick={(e) => handleSmoothScroll(e, 'cerere-oferta')}
            className="sm:hidden bg-[#000000] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 transition-all duration-300 font-semibold h-8 hover:opacity-80 hover:scale-105"
          >
            <div className="w-[18px] h-[18px] rounded flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #1A6AE7, #20C2F4)' }}>
              <MailIcon className="w-[16px] h-[10px] text-white" />
            </div>
            <span>Cerere Ofertă</span>
          </a>

        </div>
      </div>

    </header>
  );
}

