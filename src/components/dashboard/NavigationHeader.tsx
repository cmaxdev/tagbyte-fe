"use client";

import React, { useState } from 'react';
import MailIcon from '/public/icons/dashboard/header/mail.svg';
import StripeIcon from '/public/icons/dashboard/header/stripe.svg';
import ServiceIcon from '/public/icons/dashboard/header/service.svg';
import ConnectIcon from '/public/icons/dashboard/header/connect.svg';
import PortfolioIcon from '/public/icons/dashboard/header/portfolio.svg';

export default function NavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (e: React.MouseEvent | React.KeyboardEvent) => {
    console.log("Sdfsdf")
    e.preventDefault();
    e.stopPropagation();
    console.log('toggleMobileMenu clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log('toggleMobileMenu new state:', !isMobileMenuOpen);
  };

  return (
    <header className="mb-8 relative">
      {/* Debug info - remove this in production */}
      <div className="rounded-full h-[40px] px-2 sm:px-4 flex items-center md:justify-start justify-between gap-2 sm:gap-4">
        {/* Left Part - Logo */}
        <div className="flex items-center w-8 h-8 flex-shrink-0">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <StripeIcon className="w-[32px] h-[32px] text-gray-800" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 justify-center rounded-full h-full px-6 w-[552px]" style={{ background: 'linear-gradient(to bottom, #3D3D3DB3 0%, #3D3D3DB3 30%, #808080B3 70%, #808080B3 100%)' }}>
          <a href="#servicii" className="flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors">
            <ServiceIcon className="w-4 h-4" />
            <span className="text-sm font-semibold">Servicii</span>
          </a>

          <a href="#cum-lucram" className="flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors">
            <ConnectIcon className="w-4 h-4" />
            <span className="text-sm font-semibold">Cum lucrăm?</span>
          </a>

          <a href="#portofoliu" className="flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors">
            <PortfolioIcon className="w-4 h-4" />
            <span className="text-sm font-semibold">Portofoliu</span>
          </a>

          <a href="tel:0722XXXXXX" className="flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm font-semibold">Sună-ne: 0722 XXX XXX</span>
          </a>
        </nav>

        {/* Right Part - CTA Button & Mobile Menu */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Desktop CTA Button */}
          <a
            href="#cerere-oferta"
            className="hidden sm:flex bg-[#000000] text-white text-sm sm:text-base px-3 sm:px-4 py-1.5 rounded-full items-center gap-1.5 transition-colors font-semibold h-8"
          >
            <div className="w-[22px] h-[22px] rounded flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #1A6AE7, #20C2F4)' }}>
              <MailIcon className="w-[20px] h-[12px] text-white" />
            </div>
            <span className="hidden md:inline">Cerere Ofertă</span>
          </a>

          {/* Mobile CTA Button */}
          <a
            href="#cerere-oferta"
            className="sm:hidden bg-[#000000] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 transition-colors font-semibold h-8"
          >
            <div className="w-[18px] h-[18px] rounded flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #1A6AE7, #20C2F4)' }}>
              <MailIcon className="w-[16px] h-[10px] text-white" />
            </div>
            <span>Cerere Ofertă</span>
          </a>

          {/* Mobile Menu Button */}
          <div 
            onClick={(e) => {
              console.log('Button clicked directly!');
              toggleMobileMenu(e);
            }}
            className="xl:hidden flex flex-col items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors z-10 border border-gray-200 cursor-pointer bg-white"
            style={{ pointerEvents: 'auto' }}
            role="button"
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMobileMenu(e);
              }
            }}
          >
            <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mt-4 rounded-2xl p-4" style={{ background: 'linear-gradient(to bottom, #3D3D3DB3 0%, #3D3D3DB3 30%, #808080B3 70%, #808080B3 100%)' }}>
          <nav className="flex flex-col gap-3">
            <a 
              href="#servicii" 
              className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ServiceIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Servicii</span>
            </a>

            <a 
              href="#cum-lucram" 
              className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ConnectIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Cum lucrăm?</span>
            </a>

            <a 
              href="#portofoliu" 
              className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <PortfolioIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">Portofoliu</span>
            </a>

            <a 
              href="tel:0722XXXXXX" 
              className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-semibold">Sună-ne: 0722 XXX XXX</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

