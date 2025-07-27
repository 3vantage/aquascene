'use client'

import { useState, useEffect, useCallback } from 'react'

export interface Theme {
  id: string
  name: string
  description: string
}

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<string>('minimalist')
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('aquascape-theme')
    if (savedTheme) {
      setCurrentTheme(savedTheme)
    }

    // Check system dark mode preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const switchTheme = useCallback((themeId: string) => {
    setCurrentTheme(themeId)
    localStorage.setItem('aquascape-theme', themeId)
    
    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme: themeId } }))
  }, [])

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev)
  }, [])

  return {
    currentTheme,
    isDarkMode,
    switchTheme,
    toggleDarkMode
  }
}