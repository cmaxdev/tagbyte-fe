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
  FooterSection
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
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}