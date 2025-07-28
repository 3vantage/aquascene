'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Let's Connect
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Ready to transform your space with a stunning aquascape? 
            Our team of experts is here to bring your underwater vision to life.
          </p>
          
          <div className="grid gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-cyan-500" />
              <a href="mailto:gerasimovkris@gmail.com" className="hover:text-cyan-600 transition-colors">
                gerasimovkris@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Phone className="w-5 h-5 text-cyan-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-cyan-500" />
              <span>San Francisco, California</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            
            <button
              onClick={() => alert('Contact form coming soon!')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium hover:from-blue-600 hover:to-cyan-600 transition-all"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}