import React from 'react';
import {
  NavigationHeader,
  HeroSection,
  ShowcaseSection,
  ServicesSection,
  HowWeWorkSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  FooterSection,
  ContactWidget
} from '@/components/dashboard';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFFF2] pt-6 md:pt-8">
      <div className="max-w-[960px] w-full mx-auto">
        {/* Header */}
        <NavigationHeader />
        
        {/* Hero Section */}
        <HeroSection />

        {/* Showcase Section */}
        <ShowcaseSection />

        {/* Services Section */}
        <ServicesSection />

        {/* How We Work Section */}
        <HowWeWorkSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Form Section */}
        <section id="cerere-oferta" className="py-16 lg:py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gray-900">CERE</span>
              <span className="bg-[linear-gradient(to_right,#588AFF_0%,#C2E0FF_60%)] bg-clip-text text-transparent"> OFERTĂ</span>
            </h2>
            <p className="text-lg text-gray-600">
              Contactează-ne pentru o ofertă personalizată
            </p>
          </div>
          
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nume complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Introdu numele tău"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@exemplu.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0722 XXX XXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descrie proiectul tău..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Trimite cererea
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <FooterSection />
      
      {/* Contact Widget - Fixed at bottom right */}
      <ContactWidget />
    </div>
  );
}