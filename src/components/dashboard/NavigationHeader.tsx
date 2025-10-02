import React from 'react';
import MailIcon from '/public/icons/dashboard/header/mail.svg';
import StripeIcon from '/public/icons/dashboard/header/stripe.svg';
import ServiceIcon from '/public/icons/dashboard/header/service.svg';
import ConnectIcon from '/public/icons/dashboard/header/connect.svg';
import PortfolioIcon from '/public/icons/dashboard/header/portfolio.svg';

export default function NavigationHeader() {
  return (
    <header className="mb-8">
      <div className="rounded-full h-[40px] px-4 flex items-center gap-4">
        {/* Left Part - Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <StripeIcon className="w-[32px] h-[32px] text-gray-800" />
          </div>
        </div>

        {/* Center Part - Navigation Items */}
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

        {/* Right Part - CTA Button */}
        <a
          href="#cerere-oferta"
          className="bg-[#000000] text-white text-base px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-colors font-semibold h-8"
        >
          <div className="w-[22px] h-[22px] rounded flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #1A6AE7, #20C2F4)' }}>
            <MailIcon className="w-[20px] h-[12px] text-white" />
          </div>
          <span>Cerere Ofertă</span>
        </a>
      </div>
    </header>
  );
}

