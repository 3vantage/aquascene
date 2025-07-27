'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { DesignTheme } from '@/types'
import { designThemes } from '@/data/themes'
import { ChevronDown, Palette, Check } from 'lucide-react'

interface ThemeSwitcherProps {
  currentTheme: string
  onThemeChange: (themeId: string) => void
}

export function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const currentThemeData = designThemes.find(t => t.id === currentTheme)
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleThemeSelect = (themeId: string) => {
    onThemeChange(themeId)
    setIsOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <span className="font-display font-bold text-xl text-gray-900">AquaScene</span>
              <div className="text-xs text-gray-500">Premium Aquascaping Designs</div>
            </div>
          </div>
          
          {/* Theme Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl px-4 py-3 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent min-w-[280px]"
            >
              <div className="flex items-center gap-3 flex-1">
                <div 
                  className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: currentThemeData?.colorScheme.primary }}
                />
                <div className="text-left flex-1">
                  <div className="font-semibold text-gray-900 text-sm">
                    {currentThemeData?.name}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {currentThemeData?.description}
                  </div>
                </div>
              </div>
              <ChevronDown className={cn(
                "w-5 h-5 text-gray-400 transition-transform duration-200",
                isOpen && "rotate-180"
              )} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                <div className="p-2 border-b border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-2 px-3 py-2">
                    <Palette className="w-4 h-4 text-gray-600" />
                    <span className="font-medium text-sm text-gray-700">Choose Design Theme</span>
                    <span className="text-xs text-gray-500 ml-auto">{designThemes.length} themes</span>
                  </div>
                </div>
                
                <div className="max-h-80 overflow-y-auto">
                  {designThemes.map((theme, index) => (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeSelect(theme.id)}
                      className={cn(
                        "w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 flex items-center gap-3 border-b border-gray-50 last:border-b-0",
                        currentTheme === theme.id && "bg-cyan-50 hover:bg-cyan-50"
                      )}
                    >
                      {/* Theme Number */}
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 flex-shrink-0">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                      
                      {/* Theme Color */}
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                        style={{ backgroundColor: theme.colorScheme.primary }}
                      />
                      
                      {/* Theme Info */}
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-900 flex items-center gap-2">
                          {theme.name}
                          {currentTheme === theme.id && (
                            <Check className="w-4 h-4 text-cyan-600" />
                          )}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {theme.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="p-3 bg-gray-50 border-t border-gray-100">
                  <div className="text-xs text-gray-500 text-center">
                    Click any theme to preview • More themes coming soon
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}