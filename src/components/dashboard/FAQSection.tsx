import React from 'react';

import EmailIcon from "/public/icons/dashboard/hero/email.svg"
import FaqIcon from '/public/icons/dashboard/faq/thinking.svg';


export default function FAQSection() {
  return (
    <section id="faq" className="py-8 lg:py-12">
      <div className="text-center lg:text-left mb-4 gap-[9px] flex flex-col">
        <p className="text-sm font-semibold italic text-[#171E29] leading-relaxed opacity-70 px-4">AI NEVOIE DE RĂSPUNSURI?</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center lg:justify-start p-[5px]">
          <span className="text-xl lg:text-2xl mr-0 lg:mr-2 mb-2 lg:mb-0">
            <FaqIcon />
          </span>
          <span className="text-gray-900">ÎNTREBĂRI ȘI</span>
          &nbsp;
          <span className="bg-[linear-gradient(to_right,#588AFF_0%,#C2E0FF_100%)] bg-clip-text text-transparent"> RĂSPUNSURI</span>
        </h2>
      </div>
      
      <div className="w-full space-y-[10px] mb-12 px-4">
        {[
          "What happens if my project scope changes mid-way?",
          "Can you collaborate with our in-house team?",
          "Why not hire designers full-time?",
          "Designme vs other contractors",
          "How many people work on my project?",
          "Do you work on one-offs or only subscription?",
          "Can you handle branding, product, and website work?",
          "What do you need to start working together?",
          "How do you communicate and manage work?",
          "How soon can you start?"
        ].map((question, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm h-auto min-h-[56px] lg:h-14 hover:shadow-md transition-shadow cursor-pointer flex gap-3 items-center p-3 lg:p-0">
            <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.79086 6.83079H15.7909V9.37625H0.79086V6.83079ZM7.01813 0.603521H9.56359V15.6035H7.01813V0.603521Z" fill="#FF4400"/>
              </svg>
            </div>
            <span className="text-gray-900 font-medium text-sm lg:text-base leading-tight">{question}</span>
          </div>
        ))}
      </div>
      
      <div className="w-full flex justify-center">
        <a
          href="#cerere-oferta"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('cerere-oferta');
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }}
          className="w-[145px] bg-black rounded-full h-[34px] text-white font-semibold text-sm flex items-center justify-center gap-1"
        > 
          <EmailIcon className="w-[23px] h-[22px]" />
          Cerere Ofertă
        </a>
      </div>
    </section>
  );
}
