"use client";

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
    <div className="min-h-screen bg-[#FFFFFFF2]">
      {/* Header */}
      <NavigationHeader />
      
      <div className="max-w-[960px] w-full mx-auto pt-20">
        
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
      </div>

      {/* Footer */}
      <FooterSection />
      
      {/* Contact Widget - Fixed at bottom right */}
      <ContactWidget />
    </div>
  );
}