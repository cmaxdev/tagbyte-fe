"use client";

import React, { useState } from 'react';
import NavigationHeader from '@/components/dashboard/NavigationHeader';

import TVIcon from '/public/icons/showcase/TV.svg';
import PhoneIcon from '/public/icons/showcase/iPhone.svg';

export default function ShowcasePage() {
  const [activeTab, setActiveTab] = useState('website');

  return (
    <div className="min-h-screen bg-[#F5F5F5] bg-opacity-85">
      {/* Header */}
      <NavigationHeader />
      
      <div className="w-full mx-auto pt-20 px-4 lg:px-0">
        {/* Main Title Section */}
        <div className="flex justify-center mb-12">
          <h1 className="w-full lg:max-w-[933px] lg:h-[196px] bg-[linear-gradient(to_right,_#588AFFcc_81%,_#FFFFFFcc_100%)] bg-clip-text text-transparent flex flex-col justify-center items-start text-[42px] font-semibold font-inter leading-12 tracking-[-0.4px] ">
            <div className="flex flex-col lg:flex-row lg:gap-4">
                <span className="text-black">DESCOPERĂ CÂTEVA DINTRE</span>
                <span className="">PROIECTELE</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-4">
                <span className="text-black">NOASTRE REALIZATE</span>
                <span className="">RECENT.</span>
            </div>
          </h1>
        </div>

        {/* Project Title and Tabs */}
        <div className="mb-16">
            <div className="text-center mb-8">
                <h2 className="text-[#171E29] text-2xl lg:text-[40px] font-semibold italic font-inter leading-[22px] tracking-normal opacity-70">Website restaurant X</h2>
            </div>

          {/* Tab Buttons */}
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
        </div>

        {/* Device Showcase Section */}
        <div className="flex gap-12 items-center justify-center">
          {/* Left Side - Laptop */}
            <div className="w-fit flex items-end">
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold text-black font-inter">LAPTOP (DESKTOP)</h3>
                    
                    <div className="relative">
                    {/* Navigation Button - Back */}
                        <button className="absolute -left-35 top-1/2 bg-[#588AFF] text-white min-w-[192px] min-h-[47px] rounded-full text-[15px] font-medium font-inter pl-7 flex justify-start items-center gap-[37px]">
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 7.00001C10.7348 7.00001 10.4805 6.89466 10.2929 6.70712C10.1054 6.51958 10 6.26523 10 6.00001V3.06101C10.0442 2.83454 10.0087 2.59976 9.89958 2.39647C9.79044 2.19318 9.61434 2.03389 9.40116 1.9456C9.18798 1.85732 8.95083 1.84547 8.72991 1.91207C8.50899 1.97867 8.3179 2.11961 8.18903 2.31101L1.35403 9.14701C1.24195 9.25909 1.15303 9.39216 1.09237 9.5386C1.03171 9.68504 1.00049 9.842 1.00049 10.0005C1.00049 10.159 1.03171 10.316 1.09237 10.4624C1.15303 10.6089 1.24195 10.7419 1.35403 10.854L8.18903 17.689C8.3179 17.8804 8.50899 18.0214 8.72991 18.088C8.95083 18.1546 9.18798 18.1427 9.40116 18.0544C9.61434 17.9661 9.79044 17.8068 9.89958 17.6036C10.0087 17.4003 10.0442 17.1655 10 16.939V14C10 13.7348 10.1054 13.4804 10.2929 13.2929C10.4805 13.1054 10.7348 13 11 13H17C17.2652 13 17.5196 12.8947 17.7071 12.7071C17.8947 12.5196 18 12.2652 18 12V8.00001C18 7.7348 17.8947 7.48044 17.7071 7.29291C17.5196 7.10537 17.2652 7.00001 17 7.00001H11Z" stroke="white" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            ÎNAPOI
                        </button>

                        <div className="max-w-[1044px]">
                            <TVIcon />
                        </div>

                    </div>
                </div>

                {/* Right Side - Smartphone */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold text-black font-inter">TELEFON</h3>
                    
                    <div className="relative">
                    {/* Navigation Button - Next */}
                        <button className="absolute -right-50 top-1/2 bg-[#588AFF] text-white min-w-[192px] min-h-[47px] rounded-full text-[15px] font-medium font-inter pr-7 flex justify-end items-center gap-4">
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 7.00001C8.26522 7.00001 8.51957 6.89466 8.70711 6.70712C8.89464 6.51958 9 6.26523 9 6.00001V3.06101C8.95581 2.83454 8.9913 2.59976 9.10045 2.39647C9.2096 2.19318 9.38569 2.03389 9.59887 1.9456C9.81205 1.85732 10.0492 1.84547 10.2701 1.91207C10.491 1.97867 10.6821 2.11961 10.811 2.31101L17.647 9.14701C17.7591 9.25909 17.848 9.39216 17.9087 9.5386C17.9693 9.68504 18.0005 9.842 18.0005 10.0005C18.0005 10.159 17.9693 10.316 17.9087 10.4624C17.848 10.6089 17.7591 10.7419 17.647 10.854L10.811 17.689C10.6821 17.8804 10.491 18.0214 10.2701 18.088C10.0492 18.1546 9.81205 18.1427 9.59887 18.0544C9.38569 17.9661 9.2096 17.8068 9.10045 17.6036C8.9913 17.4003 8.95581 17.1655 9 16.939V14C9 13.7348 8.89464 13.4804 8.70711 13.2929C8.51957 13.1054 8.26522 13 8 13H2C1.73478 13 1.48043 12.8947 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12V8.00001C1 7.7348 1.10536 7.48044 1.29289 7.29291C1.48043 7.10537 1.73478 7.00001 2 7.00001H8Z" stroke="white" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            URMĂTORUL
                        </button>

                        {/* Smartphone Mockup */}
                        <div className="max-w-[337px]">
                            <PhoneIcon />
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center mt-16 mb-8">
          <div className="flex items-center gap-4">
            <button className="w-3 h-3 bg-[#588AFF] rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
