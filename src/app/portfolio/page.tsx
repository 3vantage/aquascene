'use client'

import React from 'react'
import Link from 'next/link'
import { Camera, ArrowLeft } from 'lucide-react'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-8">
            <Camera className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Portfolio Gallery
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our aquascaping portfolio showcases award-winning designs and transformative projects. 
            From minimalist iwagumi to lush nature aquariums, explore our journey in creating underwater art.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            
            <button
              onClick={() => alert('Gallery coming soon!')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full font-medium hover:from-gray-800 hover:to-black transition-all"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}