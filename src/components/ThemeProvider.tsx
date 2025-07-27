'use client'

import React from 'react'
import { DesignTheme } from '@/types'
import { designThemes } from '@/data/themes'

interface ThemeProviderProps {
  children: React.ReactNode
  currentTheme: string
}

export function ThemeProvider({ children, currentTheme }: ThemeProviderProps) {
  const theme = designThemes.find(t => t.id === currentTheme) || designThemes[0]
  
  // Apply theme styles to CSS custom properties
  React.useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--theme-primary', theme.colorScheme.primary)
    root.style.setProperty('--theme-secondary', theme.colorScheme.secondary)
    root.style.setProperty('--theme-accent', theme.colorScheme.accent)
    root.style.setProperty('--theme-background', theme.colorScheme.background)
    root.style.setProperty('--theme-text', theme.colorScheme.text)
  }, [theme])
  
  const getThemeClasses = () => {
    switch (theme.style) {
      case 'minimalist':
        return 'bg-white text-gray-900'
      case 'nature':
        return 'bg-gradient-to-br from-ocean-900 via-ocean-800 to-aqua-900 text-white min-h-screen'
      case 'modern':
        return 'bg-gray-900 text-gray-100'
      case 'portfolio':
        return 'bg-gray-50 text-gray-900'
      case 'business':
        return 'bg-gray-50 text-gray-900'
      case 'underwater':
        return 'bg-gradient-to-b from-blue-900 via-blue-800 to-cyan-900 text-white min-h-screen overflow-hidden'
      case 'timeline':
        return 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen'
      case 'growth':
        return 'bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white min-h-screen'
      case 'zen':
        return 'bg-gradient-to-br from-slate-50 to-stone-100 text-slate-800 min-h-screen'
      case 'workshop':
        return 'bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 text-white min-h-screen'
      default:
        return 'bg-white text-gray-900'
    }
  }
  
  return (
    <div className={getThemeClasses()} data-theme={theme.id}>
      {children}
    </div>
  )
}