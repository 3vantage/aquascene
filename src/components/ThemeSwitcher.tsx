'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { DesignTheme } from '@/types'
import { designThemes } from '@/data/themes'

interface ThemeSwitcherProps {
  currentTheme: string
  onThemeChange: (themeId: string) => void
}

export function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-aqua-500 to-ocean-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-display font-semibold text-gray-900">AquaScene</span>
            <span className="text-xs text-gray-500 hidden sm:block">10 Amazing Designs</span>
          </div>
          
          <div className="flex items-center">
            <div className="overflow-x-auto scrollbar-hide max-w-2xl">
              <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1 min-w-max">
                {designThemes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => onThemeChange(theme.id)}
                    className={cn(
                      "px-2 py-1.5 text-xs font-medium rounded-md transition-all duration-200 whitespace-nowrap",
                      "hover:bg-white hover:shadow-sm",
                      currentTheme === theme.id
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                    title={theme.description}
                  >
                    <span className="hidden sm:inline">{theme.name}</span>
                    <span className="sm:hidden">{theme.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Current Theme Indicator */}
        <div className="pb-2">
          <div className="text-center">
            <span className="text-xs text-gray-500">Current: </span>
            <span className="text-xs font-medium text-gray-700">
              {designThemes.find(t => t.id === currentTheme)?.name}
            </span>
            <span className="text-xs text-gray-400 ml-2">
              {designThemes.find(t => t.id === currentTheme)?.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}