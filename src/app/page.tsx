'use client'

import React, { lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { PageTransition } from '@/components/ui/AnimatedContainer'
import { designThemes } from '@/data/themes'
import { useTheme } from '@/hooks/useTheme'

// Lazy load design components for better performance
const designComponents = {
  minimalist: dynamic(() => import('@/components/designs/MinimalistDesign').then(mod => ({ default: mod.MinimalistDesign })), { loading: () => <DesignLoader /> }),
  modern: dynamic(() => import('@/components/designs/ModernDesign').then(mod => ({ default: mod.ModernDesign })), { loading: () => <DesignLoader /> }),
  nature: dynamic(() => import('@/components/designs/NatureDesign').then(mod => ({ default: mod.NatureDesign })), { loading: () => <DesignLoader /> }),
  portfolio: dynamic(() => import('@/components/designs/PortfolioDesign').then(mod => ({ default: mod.PortfolioDesign })), { loading: () => <DesignLoader /> }),
  business: dynamic(() => import('@/components/designs/BusinessDesign').then(mod => ({ default: mod.BusinessDesign })), { loading: () => <DesignLoader /> }),
  underwater: dynamic(() => import('@/components/designs/UnderwaterEcosystemDesign').then(mod => ({ default: mod.UnderwaterEcosystemDesign })), { loading: () => <DesignLoader /> }),
  timeline: dynamic(() => import('@/components/designs/AquascapingTimelineDesign').then(mod => ({ default: mod.AquascapingTimelineDesign })), { loading: () => <DesignLoader /> }),
  growth: dynamic(() => import('@/components/designs/PlantGrowthDesign').then(mod => ({ default: mod.PlantGrowthDesign })), { loading: () => <DesignLoader /> }),
  zen: dynamic(() => import('@/components/designs/ZenGardenDesign').then(mod => ({ default: mod.ZenGardenDesign })), { loading: () => <DesignLoader /> }),
  workshop: dynamic(() => import('@/components/designs/AquariumWorkshopDesign').then(mod => ({ default: mod.AquariumWorkshopDesign })), { loading: () => <DesignLoader /> }),
  competition: dynamic(() => import('@/components/designs/CompetitionShowcaseDesign').then(mod => ({ default: mod.CompetitionShowcaseDesign })), { loading: () => <DesignLoader /> }),
  scientific: dynamic(() => import('@/components/designs/ScientificResearchDesign').then(mod => ({ default: mod.ScientificResearchDesign })), { loading: () => <DesignLoader /> }),
  biotope: dynamic(() => import('@/components/designs/BiotopeSpecialistDesign').then(mod => ({ default: mod.BiotopeSpecialistDesign })), { loading: () => <DesignLoader /> }),
  aquaponics: dynamic(() => import('@/components/designs/AquaponicsInnovationDesign').then(mod => ({ default: mod.AquaponicsInnovationDesign })), { loading: () => <DesignLoader /> }),
  digital: dynamic(() => import('@/components/designs/DigitalAquascapingDesign').then(mod => ({ default: mod.DigitalAquascapingDesign })), { loading: () => <DesignLoader /> }),
}

// Loading component
function DesignLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading theme...</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  const { currentTheme, switchTheme } = useTheme()
  
  const DesignComponent = designComponents[currentTheme as keyof typeof designComponents] || designComponents.minimalist
  
  return (
    <ThemeProvider currentTheme={currentTheme}>
      <Navigation 
        currentTheme={currentTheme} 
        onThemeChange={switchTheme}
        themes={designThemes}
      />
      <PageTransition id={currentTheme}>
        <Suspense fallback={<DesignLoader />}>
          <DesignComponent />
        </Suspense>
      </PageTransition>
    </ThemeProvider>
  )
}