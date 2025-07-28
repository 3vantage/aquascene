'use client'

import React from 'react'
import Link from 'next/link'
import { Heart, ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our Story
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Born from a passion for underwater landscapes, AquaScene represents the pinnacle of aquascaping artistry. 
            We combine Japanese aesthetic principles with cutting-edge technology to create living masterpieces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-medium hover:from-green-600 hover:to-teal-600 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}