import React from 'react';

export default function ServicesSection() {
  return (
    <section id="servicii" className="py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">SERVICIILE</span>
          <span className="text-gray-900"> NOASTRE</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          De la web și aplicații mobile, până la branding și video promo - oferim soluții digitale complete.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Branding */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Branding</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white rounded p-2 text-xs">Logo Design</div>
                <div className="bg-white rounded p-2 text-xs">Brand Identity</div>
                <div className="bg-white rounded p-2 text-xs">Business Cards</div>
                <div className="bg-white rounded p-2 text-xs">Style Guide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Website-uri */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Website-uri</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="space-y-2">
                <div className="bg-white rounded p-3 text-sm">Marketing is hard. Let AI do it for you.</div>
                <div className="bg-gray-800 rounded p-3 text-sm text-white">Chaos & Profits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Aplicații mobile */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aplicații mobile</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex gap-2">
                <div className="bg-blue-500 rounded p-2 text-xs text-white">App 1</div>
                <div className="bg-green-500 rounded p-2 text-xs text-white">App 2</div>
                <div className="bg-purple-500 rounded p-2 text-xs text-white">App 3</div>
              </div>
            </div>
          </div>
        </div>

        {/* Software custom */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Software custom</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="bg-gray-900 rounded p-3 text-sm text-white">Scale Your Business, Maximize Your OUTPUT</div>
            </div>
          </div>
        </div>

        {/* Video promo */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-8V6a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Video promo</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="bg-blue-500 rounded p-3 text-sm text-white">Meet the Best. Recruitment All in One Place.</div>
            </div>
          </div>
        </div>

        {/* Web design */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Web design</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="space-y-2">
                <div className="bg-white rounded p-2 text-xs">Modern Design</div>
                <div className="bg-red-500 rounded p-2 text-xs text-white">Creative Elements</div>
              </div>
            </div>
          </div>
        </div>
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
