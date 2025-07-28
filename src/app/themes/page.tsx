'use client'

import React from 'react'
import Link from 'next/link'
import { Palette, ArrowLeft } from 'lucide-react'
import { designThemes } from '@/data/themes'
import { useTheme } from '@/hooks/useTheme'

export default function ThemesPage() {
  const { currentTheme, switchTheme } = useTheme()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Palette className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              All Design Themes
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Explore our complete collection of 15 unique aquascaping website designs. 
              Each theme is crafted to showcase different aspects of the aquascaping art.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {designThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => switchTheme(theme.id)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  currentTheme === theme.id
                    ? 'border-purple-500 bg-purple-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {theme.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {theme.description}
                </p>
                {currentTheme === theme.id && (
                  <span className="inline-flex items-center px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                    Active Theme
                  </span>
                )}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}