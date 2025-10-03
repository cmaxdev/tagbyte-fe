import React from 'react';

export default function ShowcaseSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Mockup - AI Agent Builder */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900">
              Build AI Agents that <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">shape tomorrow</span>
            </h3>
            
            <p className="text-gray-600">
              Create intelligent solutions that evolve with your needs. Our platform empowers you to build, deploy, and scale sophisticated AI agents.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-semibold text-gray-900 mb-2">Configure</div>
                <div className="space-y-2">
                  <div className="bg-white rounded px-3 py-1 text-xs">Agentic Type: Chatbot</div>
                  <div className="bg-white rounded px-3 py-1 text-xs">Reactive: Yes</div>
                  <div className="bg-white rounded px-3 py-1 text-xs">Intelligence: 5/10</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-semibold text-gray-900 mb-2">Deploy</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>LLM StandT2</span>
                    <span className="text-green-600">+19%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>LLana 1.2</span>
                    <span className="text-green-600">+11%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Organic</span>
                    <span className="text-green-600">+45%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Book Free Demo
              </button>
              <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold">
                How it works
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>Empowering 250+ organizations globally</span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>CALIFORNIA</span>
              <span>babylon</span>
              <span>Aura</span>
              <span>Colorado</span>
              <span>Buenos A.</span>
            </div>
          </div>
        </div>
        
        {/* Right Mockup - Email Writing Assistant */}
        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-green-200 text-sm mb-2">✨ Your reputation starts with the first email! ✨</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Write the perfect email in seconds without stress!
              </h3>
              <p className="text-green-100 mb-6">
                Over 3 million users have already elevated their communication. Join us!
              </p>
              <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold">
                Start Free
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold text-sm">James Carter</div>
                    <div className="text-gray-400 text-xs">Hey, how do we get our brand noticed more in such a competitive market?</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold text-sm">David Bennett</div>
                    <div className="text-gray-400 text-xs">How can we drive more people to use the new product? Any ideas for boosting adoption?</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Subject: Keeping the Remote Team Engaged</div>
                    <div className="text-gray-400 text-xs">Hi Rob, Engagement is key, so let's ensure we have regular check-ins and offer virtual team-building activities...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
