import React from 'react';

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gray-900">EXPERIENȚE</span>
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> REALE</span>
        </h2>
        <p className="text-lg text-gray-600">
          Află direct de la clienții noștri
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Main Testimonial */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-8 relative">
            {/* Floating Checkmark */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Lit</span>
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
              "Am <strong>analizat</strong> mai multe <strong>echipe de web design</strong> înainte să alegem și pot spune cu încredere că am făcut alegerea <strong>corectă</strong>. Site-ul livrat este <strong>modern, rapid și bine optimizat</strong>. În prima lună după lansare am observat o creștere cu <strong>30%</strong> a cererilor de ofertă și o scădere a ratei de <strong>abandon</strong>. Colaborarea a fost simplă și eficientă."
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <div className="font-semibold text-gray-900">Andrei M.</div>
                <div className="text-sm text-gray-600">Antreprenor</div>
              </div>
            </div>
          </div>
          
          {/* Client Logos */}
          <div className="grid grid-cols-2 md:flex items-center gap-6 mt-8 overflow-x-auto">
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-semibold text-gray-900">Lit</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L13.09 8.26L20 9L15 14.74L16.18 21.02L10 17.77L3.82 21.02L5 14.74L0 9L6.91 8.26L10 2Z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">nim</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"></div>
              <span className="font-semibold text-gray-900">Client 3</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">Client 4</span>
            </div>
          </div>
        </div>
        
        {/* Contact Options */}
        <div className="space-y-4">
          {/* WhatsApp */}
          <div className="bg-green-500 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Scrie-ne pe WhatsApp</span>
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">1</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="text-sm">WhatsApp</span>
            </div>
          </div>
          
          {/* Phone */}
          <div className="bg-green-600 rounded-lg p-4 text-white">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">0722 XXX XXX</span>
            </div>
          </div>
          
          {/* Request Offer */}
          <div className="bg-gray-900 rounded-lg p-4 text-white">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold">Cerere Ofertă</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

