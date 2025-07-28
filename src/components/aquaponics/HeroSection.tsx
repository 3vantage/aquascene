import React from 'react'
import { Recycle, Sprout } from 'lucide-react'
import { BenefitsDisplay } from './BenefitsDisplay'

interface Benefit {
  icon: React.ReactNode
  title: string
  value: string
  description: string
  color: string
}

interface HeroSectionProps {
  benefits: Benefit[]
}

export function HeroSection({ benefits }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3 mb-8">
            <Recycle className="w-5 h-5 text-green-600 mr-3" />
            <span className="text-green-700 font-semibold">Sustainable Food Systems</span>
          </div>
          
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Aquaponics
            </span>
            <br />
            <span className="text-gray-900">Innovation</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionary food production systems combining aquaculture with hydroponics. 
            Sustainable, efficient, and productive farming solutions for the future of agriculture.
          </p>
          
          <BenefitsDisplay benefits={benefits} />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
              <Sprout className="w-6 h-6" />
              Start Growing
            </button>
            <button className="border-2 border-green-500 text-green-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all">
              System Calculator
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}