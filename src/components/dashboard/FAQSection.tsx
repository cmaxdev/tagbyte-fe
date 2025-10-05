import React, { useState } from 'react';

import EmailIcon from "/public/icons/dashboard/hero/email.svg"
import FaqIcon from '/public/icons/dashboard/faq/thinking.svg';

const faqData = [
  {
    question: "Ce include pachetul de start pentru un website?",
    answer: "👉 Pachetul de start include design modern, optimizare pentru mobil și SEO basic, cu livrare în max. 2 săptămâni."
  },
  {
    question: "În cât timp este livrat un proiect standard?",
    answer: "👉 Un website standard se livrează în aproximativ 2 săptămâni, iar o aplicație mobilă în 3–4 săptămâni, în funcție de complexitate."
  },
  {
    question: "Oferiți și mentenanță după finalizare?",
    answer: "👉 Da, oferim pachete de mentenanță lunară de la 30 €/lună, care includ suport tehnic, update-uri și optimizări."
  },
  {
    question: "Puteți dezvolta aplicații mobile pentru iOS și Android?",
    answer: "👉 Da, dezvoltăm aplicații native și cross-platform, compatibile atât cu iOS, cât și cu Android."
  },
  {
    question: "Care este diferența între pachetul Start și Custom?",
    answer: "👉 Pachetul Start include servicii standard la un preț fix, iar Custom este complet personalizat, cu funcționalități avansate și la cerere."
  },
  {
    question: "Cum comunicăm pe parcursul proiectului?",
    answer: "👉 Comunicăm constant prin email, telefon sau call video, iar progresul este actualizat transparent pe tot parcursul proiectului."
  },
  {
    question: "Ce aveți nevoie pentru a începe colaborarea?",
    answer: "👉 Avem nevoie de o discuție inițială pentru a înțelege nevoile tale, după care semnăm contractul și începem lucrul imediat."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div 
              onClick={() => toggleFAQ(index)}
              className="cursor-pointer flex gap-3 items-center p-3 lg:p-4 h-[56px]"
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}
                >
                  <path d="M0.79086 6.83079H15.7909V9.37625H0.79086V6.83079ZM7.01813 0.603521H9.56359V15.6035H7.01813V0.603521Z" fill="#FF4400"/>
                </svg>
              </div>
              <span className="font-inter font-medium text-base leading-4 tracking-[-0.16px] text-[#2E323D] flex-1">
                {faq.question}
              </span>
            </div>
            {openIndex === index && (
              <div className="px-3 lg:px-4 pb-3 lg:pb-4 pt-0">
                <div className="ml-10 lg:ml-12">
                  <p className="font-inter text-sm leading-5 text-[#4A5568] bg-[#F7FAFC] p-3 rounded-lg border-l-4 border-[#FF4400]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
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
          CERERE OFERTĂ
        </a>
      </div>
    </section>
  );
}
