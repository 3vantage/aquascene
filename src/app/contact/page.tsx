'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, Phone, MapPin, Clock, Award, Users, Monitor, Smartphone } from 'lucide-react'
import { ServiceInquiryForm } from '@/components/ServiceInquiryForm'
import { MobileOptimizedContactForm } from '@/components/MobileOptimizedContactForm'

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileForm, setShowMobileForm] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      // Auto-show mobile form on iPhone 16 and similar screens
      setShowMobileForm(window.innerWidth <= 428 && window.innerHeight >= 800)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // iPhone 16 optimized experience
  if (showMobileForm) {
    return <MobileOptimizedContactForm variant="default" showDecorations={true} autoFocus={true} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Let's Create Your Dream Aquascape
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Transform your space with a stunning aquascape that combines artistry with nature. 
            Our expert team specializes in creating underwater masterpieces that captivate and inspire.
          </p>

          {/* Mobile/Desktop Form Toggle (for tablet/small desktop) */}
          {isMobile && !showMobileForm && (
            <div className="mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-lg">
                <p className="text-sm text-gray-700 mb-4">Choose your preferred contact experience:</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowMobileForm(true)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all"
                  >
                    <Smartphone className="w-4 h-4" />
                    Mobile Form
                  </button>
                  <button
                    onClick={() => setShowMobileForm(false)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
                  >
                    <Monitor className="w-4 h-4" />
                    Desktop View
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <Mail className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:gerasimovkris@gmail.com" className="text-cyan-600 hover:text-cyan-700 transition-colors">
                gerasimovkris@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <Phone className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <MapPin className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <span className="text-gray-700">San Francisco Bay Area</span>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center">
              <Clock className="w-10 h-10 text-cyan-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">24-Hour Response</h4>
              <p className="text-sm text-gray-600">Quick project assessment and detailed proposals</p>
            </div>
            <div className="text-center">
              <Award className="w-10 h-10 text-cyan-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Certified Experts</h4>
              <p className="text-sm text-gray-600">Professional aquascaping specialists</p>
            </div>
            <div className="text-center">
              <Users className="w-10 h-10 text-cyan-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Full Service</h4>
              <p className="text-sm text-gray-600">Design, installation, and ongoing maintenance</p>
            </div>
          </div>
        </div>

        {/* Service Inquiry Form */}
        <div className="max-w-4xl mx-auto mb-16">
          <ServiceInquiryForm variant="light" />
        </div>

        {/* Back to Home */}
        <div className="text-center">
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
  )
}