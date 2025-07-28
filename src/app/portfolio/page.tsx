'use client'

import React from 'react'
import Link from 'next/link'
import { Camera, ArrowLeft, Star, Award, Users, Calendar } from 'lucide-react'
import { TestimonialShowcase } from '@/components/TestimonialShowcase'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-8">
            <Camera className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Portfolio & Client Stories
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Our aquascaping portfolio showcases award-winning designs and transformative projects. 
            From minimalist iwagumi to lush nature aquariums, discover how we create underwater masterpieces 
            that exceed client expectations.
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="w-8 h-8 text-gray-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Calendar className="w-8 h-8 text-gray-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Portfolio Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 aspect-video rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-cyan-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Living Room Masterpiece</div>
                  <div className="text-sm text-gray-600">120-gallon Nature Style</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 aspect-video rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Corporate Reception</div>
                  <div className="text-sm text-gray-600">200-gallon Reef System</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 aspect-video rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Restaurant Feature</div>
                  <div className="text-sm text-gray-600">500-gallon Wall Display</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={() => alert('Full gallery coming soon! In the meantime, contact us to see more examples of our work.')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full font-medium hover:from-gray-800 hover:to-black transition-all shadow-lg"
              >
                <Camera className="w-5 h-5" />
                View Full Gallery
              </button>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <TestimonialShowcase variant="light" />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Own Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our satisfied clients and transform your space with a custom aquascape design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}