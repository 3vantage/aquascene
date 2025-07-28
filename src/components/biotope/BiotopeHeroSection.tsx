import React from 'react'
import { Globe, Fish, Leaf, Award } from 'lucide-react'

export function BiotopeHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="inline-flex items-center bg-gradient-to-r from-brown-100 to-green-100 rounded-full px-6 py-3 mb-8" style={{backgroundColor: '#fef7ed'}}>
            <Globe className="w-5 h-5 text-amber-700 mr-3" />
            <span className="text-amber-800 font-semibold">Natural Habitat Recreation</span>
          </div>
          
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-700 via-green-700 to-cyan-700 bg-clip-text text-transparent">
              Biotope
            </span>
            <br />
            <span className="text-gray-900">Specialist</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Authentic recreation of natural aquatic habitats. Study indigenous ecosystems, 
            replicate environmental conditions, and preserve biodiversity through scientific aquascaping.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-2xl text-green-700">45</div>
              <div className="text-gray-600">Biotopes</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Fish className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-2xl text-amber-700">1,247</div>
              <div className="text-gray-600">Species</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-2xl text-cyan-700">6</div>
              <div className="text-gray-600">Continents</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-2xl text-emerald-700">98%</div>
              <div className="text-gray-600">Accuracy</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
              <Globe className="w-6 h-6" />
              Explore Biotopes
            </button>
            <button className="border-2 border-green-600 text-green-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all">
              Species Database
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}