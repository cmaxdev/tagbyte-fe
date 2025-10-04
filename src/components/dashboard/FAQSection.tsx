import React from 'react';

import EmailIcon from "/public/icons/dashboard/hero/email.svg"
import FaqIcon from '/public/icons/dashboard/faq/thinking.svg';


export default function FAQSection() {
  return (
    <section id="faq" className="my-8 lg:mt-[140px] lg:mb-6 px-4">
      <div className="text-center lg:text-left mb-6 gap-[9px] flex flex-col">
        <p className="text-[#1D2633] font-medium italic font-jetbrains-mono text-[11px] leading-3 tracking-normal">AI NEVOIE DE RĂSPUNSURI?</p>
        <div className="flex items-center justify-start">
          <FaqIcon />
          <h2 className="max-w-[519px] w-full bg-gradient-to-r from-[#588AFF] from-[76%] to-white to-[100%] bg-clip-text text-transparent text-[38.59px] font-extrabold font-inter leading-12 tracking-[-0.6px]">
            <span className="text-[#292D36]">ÎNTREBĂRI ȘI</span>
            &nbsp;
            <span> RĂSPUNSURI</span>
          </h2>
        </div>
      </div>
      
      <div className="w-full space-y-[10px] mb-8">
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
            <span className="font-inter font-medium text-base leading-4 tracking-[-0.16px] text-[#2E323D]">{question}</span>
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
          className="w-[145px] bg-black rounded-full h-[34px] text-white font-semibold font-inter text-[15px] flex items-center justify-center gap-1"
        > 
          <EmailIcon className="w-[23px] h-[22px]" />
          Cerere Ofertă
        </a>
      </div>
    </section>
  );
}
