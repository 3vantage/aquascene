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
          </div>
          
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            {designThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  "hover:bg-white hover:shadow-sm",
                  currentTheme === theme.id
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
                title={theme.description}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}