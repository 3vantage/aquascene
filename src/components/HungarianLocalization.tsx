'use client'

import React, { useState } from 'react'
import { Flag, Globe, Heart, Star, Award } from 'lucide-react'
import { ComponentErrorBoundary } from './ErrorBoundary'

interface HungarianLocalizationProps {
  variant?: 'floating' | 'embedded' | 'header'
  showGreenAquaMessage?: boolean
  className?: string
}

const translations = {
  en: {
    switchToHungarian: 'Switch to Hungarian',
    welcomeMessage: 'Welcome to AquaScene',
    partnershipMessage: 'Perfect for Green Aqua Partnership',
    aquascapingExpertise: 'Professional Aquascaping Expertise',
    designThemes: 'Design Themes',
    getInTouch: 'Get in Touch',
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
    greenAquaSpecial: 'Designed for Green Aqua Hungary',
  },
  hu: {
    switchToHungarian: 'Magyar nyelvre váltás',
    welcomeMessage: 'Üdvözöljük az AquaScene-ben',
    partnershipMessage: 'Tökéletes a Green Aqua partnerséghez',
    aquascapingExpertise: 'Professzionális Aquascaping Szakértelem',
    designThemes: 'Tervezési Témák',
    getInTouch: 'Vegye fel velünk a kapcsolatot',
    portfolio: 'Portfólió',
    about: 'Rólunk',
    contact: 'Kapcsolat',
    greenAquaSpecial: 'Green Aqua Magyarország számára tervezve',
  }
} as const

export function HungarianLocalization({ 
  variant = 'floating', 
  showGreenAquaMessage = true,
  className = ''
}: HungarianLocalizationProps) {
  const [language, setLanguage] = useState<'en' | 'hu'>('en')
  const [isExpanded, setIsExpanded] = useState(false)
  
  const t = translations[language]

  if (variant === 'floating') {
    return (
      <ComponentErrorBoundary>
        <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
          {/* Hungarian Flag Button */}
          <div className="relative">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-14 h-14 bg-white rounded-full shadow-xl border-2 border-gray-200 flex items-center justify-center hover:scale-105 transition-all group"
              aria-label="Language options"
            >
              <div className="relative">
                <Flag className="w-6 h-6 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-4 h-3 rounded-sm overflow-hidden shadow-sm">
                  {/* Hungarian flag colors */}
                  <div className="w-full h-1 bg-red-600"></div>
                  <div className="w-full h-1 bg-white"></div>
                  <div className="w-full h-1 bg-green-600"></div>
                </div>
              </div>
            </button>

            {/* Expanded Panel */}
            {isExpanded && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsExpanded(false)}
                />
                <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-40 transform origin-bottom-right">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-red-600 via-white to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {t.partnershipMessage}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'en' 
                        ? 'This showcase is specially crafted for Green Aqua Hungary, featuring localized content and Hungarian design sensibilities.'
                        : 'Ez a bemutató kifejezetten a Green Aqua Magyarország számára készült, helyi tartalommal és magyar design érzékkel.'
                      }
                    </p>
                  </div>

                  {showGreenAquaMessage && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-semibold text-orange-900">
                          {t.greenAquaSpecial}
                        </span>
                      </div>
                      <p className="text-xs text-orange-800">
                        {language === 'en'
                          ? 'Professional aquascaping solutions with Hungarian cultural sensitivity'
                          : 'Professzionális aquascaping megoldások magyar kulturális érzékenységgel'
                        }
                      </p>
                    </div>
                  )}

                  {/* Language Toggle */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {language === 'en' ? 'Language' : 'Nyelv'}
                      </span>
                    </div>
                    <div className="flex bg-white rounded-lg p-1 shadow-sm">
                      <button
                        onClick={() => setLanguage('en')}
                        className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                          language === 'en' 
                            ? 'bg-blue-500 text-white shadow-sm' 
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => setLanguage('hu')}
                        className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                          language === 'hu' 
                            ? 'bg-red-500 text-white shadow-sm' 
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        HU
                      </button>
                    </div>
                  </div>

                  {/* Quick Links in Selected Language */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-3">
                      {language === 'en' ? 'Quick Navigation' : 'Gyors navigáció'}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <span className="text-gray-700">{t.portfolio}</span>
                      <span className="text-gray-700">{t.about}</span>
                      <span className="text-gray-700">{t.designThemes}</span>
                      <span className="text-gray-700">{t.contact}</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </ComponentErrorBoundary>
    )
  }

  if (variant === 'header') {
    return (
      <ComponentErrorBoundary>
        <div className={`flex items-center gap-3 ${className}`}>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
            <div className="w-4 h-3 rounded-sm overflow-hidden">
              <div className="w-full h-1 bg-red-600"></div>
              <div className="w-full h-1 bg-white"></div>
              <div className="w-full h-1 bg-green-600"></div>
            </div>
            <span className="text-sm text-white/90">
              {t.greenAquaSpecial}
            </span>
          </div>
          <div className="flex bg-white/20 rounded-lg">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-xs font-medium transition-all ${
                language === 'en' 
                  ? 'bg-white/30 text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hu')}
              className={`px-2 py-1 text-xs font-medium transition-all ${
                language === 'hu' 
                  ? 'bg-white/30 text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              HU
            </button>
          </div>
        </div>
      </ComponentErrorBoundary>
    )
  }

  // Embedded variant
  return (
    <ComponentErrorBoundary>
      <div className={`bg-gradient-to-r from-red-600 via-white to-green-600 p-6 rounded-2xl text-center ${className}`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-red-600" />
            <Star className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">
            {t.partnershipMessage}
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            {language === 'en'
              ? 'Showcasing professional aquascaping expertise designed specifically for the Hungarian market and Green Aqua partnership opportunities.'
              : 'Professzionális aquascaping szakértelem bemutatása, kifejezetten a magyar piac és a Green Aqua partnerségi lehetőségek számára tervezve.'
            }
          </p>
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium rounded transition-all ${
                  language === 'en' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hu')}
                className={`px-4 py-2 text-sm font-medium rounded transition-all ${
                  language === 'hu' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Magyar
              </button>
            </div>
          </div>
        </div>
      </div>
    </ComponentErrorBoundary>
  )
}