'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import CheckBadge from '../../../public/icons/dashboard/pricing/check-badge.svg';


export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('website');
  const [leftCardToggle, setLeftCardToggle] = useState(false);
  const [rightCardToggle, setRightCardToggle] = useState(true);


  return (
    <section id="preturi" className="py-[84px] lg:pt-[167px] lg:pb-[151px]">
      <div className="text-center mb-[73px] flex justify-center flex-col items-center gap-[3px]">
        <p className="text-[11px] font-medium italic font-jetbrains-mono leading-3 text-[#1D2633] uppercase">Prețuri de start + oferte custom</p>
        <h2 className="w-full lg:w-[430px] bg-gradient-to-r from-[#588AFF]/90 from-[43%] to-white/60 to-[100%] bg-clip-text text-transparent text-[40.52px] font-extrabold font-inter leading-[48.3px] tracking-[-0.4px]">
          PREȚURI
        </h2>
      </div>
      
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-[43px] px-4">
        <div className="bg-black rounded-lg p-1 flex relative">
          <button 
            onClick={() => setActiveTab('website')}
            className={`px-4 sm:px-6 py-2 font-medium font-inter transition-all duration-300 relative z-10 text-sm sm:text-base ${
              activeTab === 'website' 
                ? 'text-black' 
                : 'text-white'
            }`}
          >
            Website
          </button>
          <button 
            onClick={() => setActiveTab('branding')}
            className={`px-4 sm:px-6 py-2 font-medium font-inter transition-all duration-300 relative z-10 text-sm sm:text-base ${
              activeTab === 'branding' 
                ? 'text-black' 
                : 'text-white'
            }`}
          >
            Branding
          </button>
          {/* Sliding background */}
          <div 
            className={`absolute top-1 bottom-1 bg-white rounded-md transition-transform duration-300 ${
              activeTab === 'website' 
                ? 'left-1 w-[calc(50%-0.25rem)]' 
                : 'left-1/2 w-[calc(50%-0.25rem)]'
            } shadow-[inset_0px_0px_12px_rgba(0,0,0,0.7)]`}
          />
        </div>
      </div>
      
      {/* Pricing Cards */}
      <div className="bg-white/70 rounded-[30px] border-[3px] border-white w-full max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-4">
        {/* Website Card */}
        <div className="p-4 sm:p-6 lg:p-[34px] h-full flex flex-col justify-between pb-5 rounded-l-[30px]">
          <div className="w-full flex flex-col gap-4 sm:gap-[18px] mb-6 sm:mb-[44px]">
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-full flex items-center gap-1.5">
                <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.64922 7.16329C8.56206 7.07622 8.49291 6.97282 8.44573 6.85901C8.39855 6.7452 8.37427 6.62321 8.37427 6.5C8.37427 6.3768 8.39855 6.25481 8.44573 6.141C8.49291 6.02719 8.56206 5.92379 8.64922 5.83672L13.3367 1.14922C13.4238 1.06206 13.5272 0.992909 13.641 0.94573C13.7548 0.898551 13.8768 0.874268 14 0.874268C14.1232 0.874268 14.2452 0.898551 14.359 0.94573C14.4728 0.992909 14.5762 1.06206 14.6633 1.14922L19.3508 5.83672C19.438 5.92379 19.5071 6.02719 19.5543 6.141C19.6015 6.25481 19.6257 6.3768 19.6257 6.5C19.6257 6.62321 19.6015 6.7452 19.5543 6.85901C19.5071 6.97282 19.438 7.07622 19.3508 7.16329L14.6633 11.8508C14.5762 11.938 14.4728 12.0071 14.359 12.0543C14.2452 12.1015 14.1232 12.1257 14 12.1257C13.8768 12.1257 13.7548 12.1015 13.641 12.0543C13.5272 12.0071 13.4238 11.938 13.3367 11.8508L8.64922 7.16329ZM14.6633 16.1492C14.5762 16.0621 14.4728 15.9929 14.359 15.9457C14.2452 15.8985 14.1232 15.8743 14 15.8743C13.8768 15.8743 13.7548 15.8985 13.641 15.9457C13.5272 15.9929 13.4238 16.0621 13.3367 16.1492L8.64922 20.8367C8.56206 20.9238 8.49291 21.0272 8.44573 21.141C8.39855 21.2548 8.37427 21.3768 8.37427 21.5C8.37427 21.6232 8.39855 21.7452 8.44573 21.859C8.49291 21.9728 8.56206 22.0762 8.64922 22.1633L13.3367 26.8508C13.4238 26.938 13.5272 27.0071 13.641 27.0543C13.7548 27.1015 13.8768 27.1257 14 27.1257C14.1232 27.1257 14.2452 27.1015 14.359 27.0543C14.4728 27.0071 14.5762 26.938 14.6633 26.8508L19.3508 22.1633C19.438 22.0762 19.5071 21.9728 19.5543 21.859C19.6015 21.7452 19.6257 21.6232 19.6257 21.5C19.6257 21.3768 19.6015 21.2548 19.5543 21.141C19.5071 21.0272 19.438 20.9238 19.3508 20.8367L14.6633 16.1492ZM26.8508 13.3367L22.1633 8.64922C22.0762 8.56206 21.9728 8.49291 21.859 8.44573C21.7452 8.39855 21.6232 8.37427 21.5 8.37427C21.3768 8.37427 21.2548 8.39855 21.141 8.44573C21.0272 8.49291 20.9238 8.56206 20.8367 8.64922L16.1492 13.3367C16.0621 13.4238 15.9929 13.5272 15.9457 13.641C15.8985 13.7548 15.8743 13.8768 15.8743 14C15.8743 14.1232 15.8985 14.2452 15.9457 14.359C15.9929 14.4728 16.0621 14.5762 16.1492 14.6633L20.8367 19.3508C20.9238 19.438 21.0272 19.5071 21.141 19.5543C21.2548 19.6015 21.3768 19.6257 21.5 19.6257C21.6232 19.6257 21.7452 19.6015 21.859 19.5543C21.9728 19.5071 22.0762 19.438 22.1633 19.3508L26.8508 14.6633C26.938 14.5762 27.0071 14.4728 27.0543 14.359C27.1015 14.2452 27.1257 14.1232 27.1257 14C27.1257 13.8768 27.1015 13.7548 27.0543 13.641C27.0071 13.5272 26.938 13.4238 26.8508 13.3367ZM11.8508 13.3367L7.16329 8.64922C7.07622 8.56206 6.97282 8.49291 6.85901 8.44573C6.7452 8.39855 6.62321 8.37427 6.5 8.37427C6.3768 8.37427 6.25481 8.39855 6.141 8.44573C6.02719 8.49291 5.92379 8.56206 5.83672 8.64922L1.14922 13.3367C1.06206 13.4238 0.992909 13.5272 0.94573 13.641C0.898551 13.7548 0.874268 13.8768 0.874268 14C0.874268 14.1232 0.898551 14.2452 0.94573 14.359C0.992909 14.4728 1.06206 14.5762 1.14922 14.6633L5.83672 19.3508C5.92379 19.438 6.02719 19.5071 6.141 19.5543C6.25481 19.6015 6.3768 19.6257 6.5 19.6257C6.62321 19.6257 6.7452 19.6015 6.85901 19.5543C6.97282 19.5071 7.07622 19.438 7.16329 19.3508L11.8508 14.6633C11.938 14.5762 12.0071 14.4728 12.0543 14.359C12.1015 14.2452 12.1257 14.1232 12.1257 14C12.1257 13.8768 12.1015 13.7548 12.0543 13.641C12.0071 13.5272 11.938 13.4238 11.8508 13.3367Z" fill="black"/>
                </svg>
                <h3 className="text-black text-xl sm:text-2xl font-bold font-inter">Website</h3>
              </div>
              <div className='w-full'>
                <p className="text-sm text-[#00000080] font-medium font-inter">Preț de start pentru site-uri profesionale</p>
              </div>
            </div>
            
            <div className="flex items-end gap-0.5">
              <p className="text-sm text-[#00000080] font-medium font-inter">Preț de la</p>
              <div className="text-3xl sm:text-4xl font-bold text-black font-inter">400€</div>
            </div>
            
            <div className="flex items-center justify-between h-auto sm:h-[58px] bg-white gap-2 p-3 rounded-xl">
              <div className="flex items-center gap-2 flex-1">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.11 3.4175L10.94 0.4275C9.95 -0.1425 8.4 -0.1425 7.41 0.4275L2.19 3.4375C0.12 4.8375 0 5.0475 0 7.2775V12.7075C0 14.9375 0.12 15.1575 2.23 16.5775L7.4 19.5675C7.9 19.8575 8.54 19.9975 9.17 19.9975C9.8 19.9975 10.44 19.8575 10.93 19.5675L16.15 16.5575C18.22 15.1575 18.34 14.9475 18.34 12.7175V7.2775C18.34 5.0475 18.22 4.8375 16.11 3.4175ZM9.17 13.2475C7.38 13.2475 5.92 11.7875 5.92 9.9975C5.92 8.2075 7.38 6.7475 9.17 6.7475C10.96 6.7475 12.42 8.2075 12.42 9.9975C12.42 11.7875 10.96 13.2475 9.17 13.2475Z" fill="#292D32"/>
                </svg>

                <span className="text-xs sm:text-sm text-black font-semibold font-inter">Mentenanță & suport 30€/lună</span>
              </div>
              <div 
                className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors flex-shrink-0 ${
                  leftCardToggle ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setLeftCardToggle(!leftCardToggle)}
              >
                <div 
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    leftCardToggle ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                ></div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 h-auto sm:h-[168px] flex flex-col justify-between">
              <div className="flex flex-row w-full justify-between items-start sm:items-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Image src="/images/pricing/andrei.png" alt="Testimonial Avatar" width={40} height={40} className="w-full h-full rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-900 text-sm sm:text-base font-semantic">Andrei M.</span>
                      <CheckBadge className="w-4 h-4 sm:w-auto sm:h-auto" />

                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 font-inter font-normal">Antreprenor</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="15" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9547 1.17207C10.6015 0.322851 9.39852 0.322851 9.04531 1.17207L7.03144 6.01402L1.80415 6.43309C0.887349 6.50659 0.515604 7.65071 1.2141 8.24905L5.19674 11.6606L3.97999 16.7616C3.76658 17.6562 4.73984 18.3633 5.52474 17.8839L10 15.1504L14.4754 17.8839C15.2602 18.3633 16.2335 17.6562 16.0201 16.7616L14.8033 11.6606L18.7859 8.24905C19.4844 7.65071 19.1127 6.50659 18.1959 6.43309L12.9686 6.01402L10.9547 1.17207Z" fill="black"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-xs lg:text-[15px] text-gray-600 leading-relaxed font-semantic">
              Website-ul nostru arată modern și funcționează rapid. Proiectul a fost livrat în mai puțin de 2 săptămâni. Comunicarea a fost excelentă.
              </p>
            </div>
            
            <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
              <span>Cere oferta</span>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0377 0.343262L10.6268 1.76078L13.8971 5.01579L0.291992 5.02939L0.294012 7.02939L13.8618 7.01579L10.6466 10.246L12.0642 11.6569L17.7078 5.98689L12.0377 0.343262Z" fill="white"/>
              </svg>
            </button>
          </div>
          
          {/* Features */}
          <div className="flex flex-col gap-2 sm:gap-2.5 w-full h-full">
            {[
              "Livrare în max. 2 săptămâni",
              "Design modern",
              "SEO basic inclus",
              "Optimizat pentru desktop, tabletă și mobil",
              "Suport inițial & mentenanță",
              "Revizii nelimitate"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-3 sm:w-5 sm:h-4 flex-shrink-0">
                  <path d="M6.75661 14.0596L0.321533 7.62452L2.3 5.64628L6.75661 10.1029L16.3386 0.520996L18.317 2.4992L6.75661 14.0596Z" fill="black"/>
                </svg>

                <span className="text-xs sm:text-sm text-black leading-tight font-inter font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Website Custom Card */}
        <div className="bg-black rounded-[30px] p-4 sm:p-6 lg:p-[34px] h-full flex flex-col justify-between pb-5 relative text-white">
          <div className="w-full flex flex-col gap-4 sm:gap-[18px] mb-6 sm:mb-[44px]">
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-full flex items-center gap-1.5">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2446 12.039H21.8446V19.239C21.8446 19.899 21.6096 20.4641 21.1396 20.934C20.6696 21.4041 20.1046 21.639 19.4446 21.639H12.2446V12.039ZM12.2446 9.63904V0.0390625H19.4446C20.1046 0.0390625 20.6696 0.27407 21.1396 0.744062C21.6096 1.21407 21.8446 1.77906 21.8446 2.43906V9.63904H12.2446ZM9.84457 9.63904H0.244629V2.43906C0.244629 1.77906 0.479625 1.21407 0.949629 0.744062C1.41963 0.27407 1.98463 0.0390625 2.64463 0.0390625H9.84457V9.63904ZM9.84457 12.039V21.639H2.64463C1.98463 21.639 1.41963 21.4041 0.949629 20.934C0.479625 20.4641 0.244629 19.899 0.244629 19.239V12.039H9.84457Z" fill="white"/>
                </svg>

                <h3 className="text-white text-xl sm:text-2xl font-semibold font-inter">Website Custom</h3>
              </div>
              <div className='w-full'>
                <p className="text-sm text-[#a3a3a3] text-left w-full">Proiecte complexe, la cerere</p>
              </div>
            </div>
            
            <div className="flex items-end gap-3">
              <p className="text-sm text-white/64 font-medium font-inter">Preț de la</p>
              <div className="text-3xl sm:text-4xl font-bold text-white font-inter">€?</div>
            </div>
            
            <div className="flex items-center justify-between h-auto sm:h-[58px] bg-[#303030] gap-2 p-3 rounded-xl">
              <div className="flex items-center gap-2 flex-1">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.11 3.4175L10.94 0.4275C9.95 -0.1425 8.4 -0.1425 7.41 0.4275L2.19 3.4375C0.12 4.8375 0 5.0475 0 7.2775V12.7075C0 14.9375 0.12 15.1575 2.23 16.5775L7.4 19.5675C7.9 19.8575 8.54 19.9975 9.17 19.9975C9.8 19.9975 10.44 19.8575 10.93 19.5675L16.15 16.5575C18.22 15.1575 18.34 14.9475 18.34 12.7175V7.2775C18.34 5.0475 18.22 4.8375 16.11 3.4175ZM9.17 13.2475C7.38 13.2475 5.92 11.7875 5.92 9.9975C5.92 8.2075 7.38 6.7475 9.17 6.7475C10.96 6.7475 12.42 8.2075 12.42 9.9975C12.42 11.7875 10.96 13.2475 9.17 13.2475Z" fill="white"/>
                </svg>

                <span className="text-xs sm:text-sm text-white font-semibold font-inter">Mentenanță & suport ?€/lună</span>
              </div>
              <div 
                className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors flex-shrink-0 ${
                  rightCardToggle ? 'bg-blue-500' : 'bg-gray-600'
                }`}
                onClick={() => setRightCardToggle(!rightCardToggle)}
              >
                <div 
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    rightCardToggle ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                ></div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 h-auto sm:h-[168px] flex flex-col justify-between">
              <div className="flex flex-row w-full justify-between items-start sm:items-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 rounded-full flex items-center justify-center">
                    <Image src="/images/pricing/eduard.png" alt="Testimonial Avatar" width={40} height={40} className="w-full h-full rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-black text-sm sm:text-base font-semantic">Eduard C.</span>
                      <CheckBadge className="w-4 h-4 sm:w-auto sm:h-auto" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#6c6c6c] font-inter font-normal">Fondator startup tech</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="15" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9547 1.17207C10.6015 0.322851 9.39852 0.322851 9.04531 1.17207L7.03144 6.01402L1.80415 6.43309C0.887349 6.50659 0.515604 7.65071 1.2141 8.24905L5.19674 11.6606L3.97999 16.7616C3.76658 17.6562 4.73984 18.3633 5.52474 17.8839L10 15.1504L14.4754 17.8839C15.2602 18.3633 16.2335 17.6562 16.0201 16.7616L14.8033 11.6606L18.7859 8.24905C19.4844 7.65071 19.1127 6.50659 18.1959 6.43309L12.9686 6.01402L10.9547 1.17207Z" fill="black"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-xs lg:text-[15px] text-[#3d3d3d] leading-relaxed font-semantic">
                Site-ul nostru custom este captivant și funcționează impecabil. Proiectul a fost finalizat în doar 4 săptămâni. Colaborarea a fost remarcabilă.
              </p>
            </div>
            
            <button className="w-full bg-white text-black py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
              <span>Cere oferta custom</span>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0377 0.343262L10.6268 1.76078L13.8971 5.01579L0.291992 5.02939L0.294012 7.02939L13.8618 7.01579L10.6466 10.246L12.0642 11.6569L17.7078 5.98689L12.0377 0.343262Z" fill="black"/>
              </svg>
            </button>
          </div>
          
          {/* Features */}
          <div className="flex flex-col gap-2 sm:gap-2.5 w-full h-full">
            {[
              "Livrare în funcție de complexitate",
              "Funcționalități avansate",
              "Integrare sisteme externe",
              "Securitate și optimizare viteză",
              "Suport dedicat pe termen lung",
              "Re-design & scalare ulterioară"
            ].map((feature, index) => (
              <div key={`feature_${index}`} className="flex items-center gap-2">
                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-3 sm:w-5 sm:h-4 flex-shrink-0">
                  <path d="M6.75661 14.0596L0.321533 7.62452L2.3 5.64628L6.75661 10.1029L16.3386 0.520996L18.317 2.4992L6.75661 14.0596Z" fill="white"/>
                </svg>
                <span className="text-xs sm:text-sm text-white leading-tight font-inter font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
