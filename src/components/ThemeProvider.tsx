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