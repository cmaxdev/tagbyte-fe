"use client";

import React, { useState } from 'react';
import NavigationHeader from '@/components/dashboard/NavigationHeader';
import FooterSection from '@/components/dashboard/FooterSection';

import StripeIcon from '/public/icons/dashboard/header/stripe.svg';
import EmailIcon from '/public/icons/dashboard/hero/email.svg';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavigationHeader />
      
      <div className="max-w-7xl mx-auto py-32 px-4">
        <div className="flex flex-col justify-center">
          
          {/* Contact Form */}
          <div className={`transition-all duration-500 ${isSubmitted ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'}`}>
            <div className="max-w-md mx-auto">
              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-inter">
                Hai să colaborăm
              </h1>
              
              {/* Description */}
              <p className="text-[13px] mb-8 font-inter w-[273px] font-medium text-gray-600">
                Completează formularul și te contactăm în 24h cu o soluție personalizată.
              </p>

              {/* Contact Information */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <StripeIcon />
                </div>
                <div>
                  <p className="text-sm font-medium text-black font-inter">Administrator</p>
                  <p className="text-sm text-black font-inter">code@tagbyte.dev</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                    Nume (obligatoriu)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nume"
                    required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors font-inter text-gray-900"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                    Telefon (obligatoriu)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Număr de telefon"
                    required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors font-inter text-gray-900"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Adresă de email"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors font-inter text-gray-900"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                    Selectează serviciul (obligatoriu)
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors appearance-none bg-white font-inter text-gray-900"
                    >
                      <option value="" className="text-gray-900">Select...</option>
                      <option value="website" className="text-gray-900">Website</option>
                      <option value="branding" className="text-gray-900">Branding</option>
                      <option value="mobile" className="text-gray-900">Aplicație Mobile</option>
                      <option value="ecommerce" className="text-gray-900">E-commerce</option>
                      <option value="consulting" className="text-gray-900">Consulting</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-[202px] bg-black rounded-full h-[34px] text-white font-semibold font-inter text-[15px] flex items-center justify-center gap-1 mx-auto cursor-pointer"> 
                    <EmailIcon className="w-[23px] h-[22px]" />
                    Solicită oferta acum
                </button>
                
              </form>
            </div>
          </div>

          {/* Confirmation Message */}
          <div className={`transition-all duration-500 ${isSubmitted ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'}`}>
            <div className="max-w-md mx-auto">
              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-inter">
                Solicitarea a fost înregistrată
              </h1>
              
              {/* Message */}
              <p className="text-gray-600 mb-8 font-inter">
                Îți mulțumim! Te vom contacta cât mai repede posibil
              </p>

              {/* Back Button */}
              <button
                onClick={handleBack}
                className="bg-gray-800 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors font-inter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Înapoi
              </button>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />

    </div>
  );
}
