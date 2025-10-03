import React from 'react';

export default function PricingSection() {
  return (
    <section id="preturi" className="py-16 lg:py-24">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">PREȚURI DE START + OFERTE CUSTOM</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">PREȚURI</span>
        </h2>
      </div>
      
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-200 rounded-lg p-1 flex">
          <button className="px-6 py-2 bg-gray-900 text-white rounded-md font-semibold transition-colors">
            Website
          </button>
          <button className="px-6 py-2 text-gray-600 font-semibold transition-colors">
            Branding
          </button>
        </div>
      </div>
      
      {/* Pricing Cards */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Website Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Website</h3>
              <p className="text-sm text-gray-600">Preț de start pentru site-uri profesionale</p>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-1">Preț de la</p>
            <div className="text-4xl font-bold text-gray-900">400€</div>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-600">Mentenanță & suport 30€/lună</span>
            </div>
            <div className="w-12 h-6 bg-gray-300 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-gray-900">Andrei M.</span>
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Antreprenor</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              "Website-ul nostru arată modern și funcționează rapid. Proiectul a fost livrat în mai puțin de 2 săptămâni. Comunicarea a fost excelentă."
            </p>
          </div>
          
          <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 mb-6">
            <span>Cere oferta</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Features */}
          <div className="space-y-2">
            {[
              "Livrare în max. 2 săptămâni",
              "Design modern",
              "SEO basic inclus",
              "Optimizat pentru desktop, tabletă și mobil",
              "Suport inițial & mentenanță",
              "Revizii nelimitate"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Website Custom Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 relative text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Website Custom</h3>
              <p className="text-sm text-gray-300">Proiecte complexe, la cerere</p>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-sm text-gray-300 mb-1">Preț de la</p>
            <div className="text-4xl font-bold text-white">€?</div>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-300">Mentenanță & suport ?€/lună</span>
            </div>
            <div className="w-12 h-6 bg-gray-600 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-gray-700 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-white">Eduard C.</span>
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">Fondator startup tech</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              "Site-ul nostru custom este captivant și funcționează impecabil. Proiectul a fost finalizat în doar 4 săptămâni. Colaborarea a fost remarcabilă."
            </p>
          </div>
          
          <button className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 mb-6">
            <span>Cere oferta custom</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Features */}
          <div className="space-y-2">
            {[
              "Livrare în funcție de complexitate",
              "Funcționalități avansate",
              "Integrare sisteme externe",
              "Securitate și optimizare viteză",
              "Suport dedicat pe termen lung",
              "Re-design & scalare ulterioară"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
