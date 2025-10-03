import React from 'react';

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">AI NEVOIE DE RĂSPUNSURI?</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-2xl mr-2">🤔</span>
          <span className="text-gray-900">ÎNTREBĂRI ȘI</span>
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> RĂSPUNSURI</span>
        </h2>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-4 mb-12">
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
          <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
            <span className="text-gray-900 font-medium">{question}</span>
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Button */}
      <div className="text-center">
        <a
          href="#cerere-oferta"
          className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Cerere Ofertă
        </a>
      </div>
    </section>
  );
}
