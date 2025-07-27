'use client'

import React from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { MinimalistDesign } from '@/components/designs/MinimalistDesign'
import { ModernDesign } from '@/components/designs/ModernDesign'
import { NatureDesign } from '@/components/designs/NatureDesign'
import { PortfolioDesign } from '@/components/designs/PortfolioDesign'
import { BusinessDesign } from '@/components/designs/BusinessDesign'

export default function HomePage() {
  const [currentTheme, setCurrentTheme] = React.useState('minimalist')
  
  const renderDesign = () => {
    switch (currentTheme) {
      case 'minimalist':
        return <MinimalistDesign />
      case 'modern':
        return <ModernDesign />
      case 'nature':
        return <NatureDesign />
      case 'portfolio':
        return <PortfolioDesign />
      case 'business':
        return <BusinessDesign />
      default:
        return <MinimalistDesign />
    }
  }
  
  return (
    <ThemeProvider currentTheme={currentTheme}>
      <ThemeSwitcher 
        currentTheme={currentTheme} 
        onThemeChange={setCurrentTheme} 
      />
      {renderDesign()}
    </ThemeProvider>
  )
}