'use client'

import React from 'react'
import Link from 'next/link'
import { Palette, ArrowLeft, Award, Globe, Eye, Star } from 'lucide-react'
import { designThemes } from '@/data/themes'
import { useTheme } from '@/hooks/useTheme'
import { ThemeShowcaseGallery } from '@/components/ThemeShowcaseGallery'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'

export default function ThemesPage() {
  const { currentTheme, switchTheme } = useTheme()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
              <Globe className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            15 Premium Design Themes
          </h1>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Designed for Green Aqua Hungary Partnership</h2>
              <Award className="w-8 h-8" />
            </div>
            <p className="text-lg opacity-95 max-w-4xl mx-auto">
              This comprehensive collection showcases our expertise in creating sophisticated, 
              aquascaping-inspired digital experiences. Each theme demonstrates different aspects of 
              professional web design, perfectly suited for impressing international partners like 
              <strong> Green Aqua Hungary</strong> and establishing credible business relationships.
            </p>
          </div>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            From minimalist corporate designs to immersive aquatic experiences, our themes cover every 
            possible use case for aquascaping businesses. This diversity demonstrates our ability to 
            adapt to different market needs and aesthetic preferences.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-4xl font-bold text-gray-900 mb-2">15</div>
              <div className="text-sm text-gray-600">Unique Themes</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-4xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-sm text-gray-600">Design Categories</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600">Partnership Ready</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-4xl font-bold text-gray-900 mb-2">1-6</div>
              <div className="text-sm text-gray-600">Days Implementation</div>
            </div>
          </div>

          {/* Live Theme Switcher */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              <Eye className="w-6 h-6 inline mr-2" />
              Try Live Theme Switching
            </h3>
            <p className="text-gray-600 mb-8">
              Click any theme below to see it applied instantly to the current page. 
              This demonstrates the power and flexibility of our theme system.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {designThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => switchTheme(theme.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left hover:shadow-lg ${
                    currentTheme === theme.id
                      ? 'border-cyan-500 bg-cyan-50 shadow-lg ring-2 ring-cyan-200'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">
                      {theme.name}
                    </h4>
                    {currentTheme === theme.id && (
                      <Star className="w-5 h-5 text-cyan-500 fill-current" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {theme.description}
                  </p>
                  {currentTheme === theme.id && (
                    <span className="inline-flex items-center px-3 py-1 bg-cyan-500 text-white text-xs rounded-full font-semibold">
                      ACTIVE THEME
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Theme Showcase Gallery */}
        <ThemeShowcaseGallery 
          variant="light" 
          highlightGreenAqua={true}
          showDetails={true}
        />

        {/* Before/After Transformations */}
        <div className="mt-20">
          <BeforeAfterGallery 
            variant="light"
            showLightbox={true}
            maxItems={6}
          />
        </div>

        {/* Partnership Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-12 max-w-4xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-6">
              Perfect for International Partnerships
            </h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              These 15 themes demonstrate our comprehensive understanding of the aquascaping industry 
              and our ability to create professional digital experiences that complement brands like 
              <strong> Green Aqua Hungary</strong>. Each design showcases different aspects of 
              aquascaping culture, from minimalist elegance to technical innovation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
                <Award className="w-8 h-8 mb-3" />
                <h4 className="font-bold mb-2">Professional Quality</h4>
                <p className="text-sm opacity-90">Enterprise-grade designs that establish credibility and trust</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
                <Globe className="w-8 h-8 mb-3" />
                <h4 className="font-bold mb-2">Global Appeal</h4>
                <p className="text-sm opacity-90">Designs that work across cultures and markets</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
                <Palette className="w-8 h-8 mb-3" />
                <h4 className="font-bold mb-2">Versatile Portfolio</h4>
                <p className="text-sm opacity-90">15 distinct styles covering every business need</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg text-lg"
              >
                <Award className="w-6 h-6" />
                Discuss Partnership Opportunities
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all border border-white/30"
              >
                <Eye className="w-5 h-5" />
                View Client Success Stories
              </Link>
            </div>
          </div>
          
          {/* Navigation */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-lg text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}