import React from 'react';

export default function HowWeWorkSection() {
  return (
    <section id="cum-lucram" className="py-16 lg:py-24">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">SIMPLU, RAPID ȘI TRANSPARENT</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gray-900">CUM</span>
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> LUCRĂM?</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Step 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-xs text-gray-600">Video call interface</div>
              </div>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">PASUL 1</h3>
          <h4 className="text-xl font-bold text-gray-900 mb-4">Programăm un apel gratuit</h4>
          <p className="text-gray-600">
            Discutăm despre afacerea ta și găsim soluția potrivită pentru buget și obiective.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="space-y-2">
                  <div className="bg-blue-50 rounded p-2 text-xs">Task Backlog (2)</div>
                  <div className="bg-gray-50 rounded p-2 text-xs">• Task Scheduling</div>
                  <div className="bg-gray-50 rounded p-2 text-xs">• UI/UX Design</div>
                  <div className="bg-gray-50 rounded p-2 text-xs">• Mobile & Web Apps</div>
                </div>
              </div>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">PASUL 2</h3>
          <h4 className="text-xl font-bold text-gray-900 mb-4">Alocăm echipa potrivită</h4>
          <p className="text-gray-600">
            O echipă dedicată se ocupă de proiect, ca tu să te concentrezi pe business.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="space-y-2">
                  <div className="text-xs font-semibold">Project Overview</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-50 rounded p-1 text-xs">100+</div>
                    <div className="bg-green-50 rounded p-1 text-xs">2023</div>
                  </div>
                  <div className="text-xs text-gray-600">Dashboard metrics</div>
                </div>
              </div>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">PASUL 3</h3>
          <h4 className="text-xl font-bold text-gray-900 mb-4">Livrăm și optimizăm</h4>
          <p className="text-gray-600">
            Vezi progresul constant și primești livrările la timp, fără bătăi de cap.
          </p>
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
