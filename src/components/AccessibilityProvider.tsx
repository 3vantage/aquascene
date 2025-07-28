'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { designThemes } from '@/data/themes'
import { auditThemeAccessibility } from '@/utils/accessibility'

interface AccessibilityContextType {
  announcements: string[]
  announce: (message: string) => void
  reduceMotion: boolean
  highContrast: boolean
  toggleHighContrast: () => void
  currentThemeAudit: any
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}

interface AccessibilityProviderProps {
  children: React.ReactNode
  currentTheme: string
}

export function AccessibilityProvider({ children, currentTheme }: AccessibilityProviderProps) {
  const [announcements, setAnnouncements] = useState<string[]>([])
  const [reduceMotion, setReduceMotion] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [currentThemeAudit, setCurrentThemeAudit] = useState<any>(null)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Audit current theme for accessibility
  useEffect(() => {
    const theme = designThemes.find(t => t.id === currentTheme)
    if (theme) {
      const audit = auditThemeAccessibility(theme.colorScheme)
      setCurrentThemeAudit(audit)
      
      // Announce accessibility issues if found
      if (!audit.passed) {
        announce(`Accessibility issues detected in ${theme.name} theme`)
      }
    }
  }, [currentTheme])

  // Load high contrast preference
  useEffect(() => {
    const saved = localStorage.getItem('aquascape-high-contrast')
    if (saved === 'true') {
      setHighContrast(true)
      document.documentElement.classList.add('high-contrast')
    }
  }, [])

  const announce = (message: string) => {
    setAnnouncements(prev => [...prev, message])
    
    // Clear announcement after 5 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.slice(1))
    }, 5000)
  }

  const toggleHighContrast = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    localStorage.setItem('aquascape-high-contrast', newValue.toString())
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast')
      announce('High contrast mode enabled')
    } else {
      document.documentElement.classList.remove('high-contrast')
      announce('High contrast mode disabled')
    }
  }

  return (
    <AccessibilityContext.Provider
      value={{
        announcements,
        announce,
        reduceMotion,
        highContrast,
        toggleHighContrast,
        currentThemeAudit
      }}
    >
      {children}
      
      {/* Screen Reader Announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>
    </AccessibilityContext.Provider>
  )
}