'use client'

import React, { lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AccessibilityProvider } from '@/components/AccessibilityProvider'
import { Navigation } from '@/components/Navigation'
import { MobileOnboardingTour } from '@/components/MobileOnboardingTour'
import { PageTransition } from '@/components/ui/AnimatedContainer'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { AquaticEffects } from '@/components/effects/AquaticEffects'
import { SwipeIndicator } from '@/components/SwipeIndicator'
import { designThemes } from '@/data/themes'
import { useTheme } from '@/hooks/useTheme'
import { useThemeSwipeGestures } from '@/hooks/useSwipeGestures'

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

// Import the aquascape loader
import { AquascapeLoader } from '@/components/ui/SkeletonLoader'

// Loading component
function DesignLoader() {
  return <AquascapeLoader theme="cyan" />
}

export default function HomePage() {
  const { currentTheme, switchTheme } = useTheme()
  
  const themeIds = designThemes.map(theme => theme.id)
  const { isTouch, currentIndex, totalThemes, nextTheme, previousTheme } = useThemeSwipeGestures(
    themeIds,
    currentTheme,
    switchTheme
  )
  
  const DesignComponent = designComponents[currentTheme as keyof typeof designComponents] || designComponents.minimalist
  
  return (
    <ErrorBoundary>
      <ThemeProvider currentTheme={currentTheme}>
        <AccessibilityProvider currentTheme={currentTheme}>
          <AquaticEffects 
            intensity="medium" 
            theme={currentTheme.includes('nature') ? 'teal' : currentTheme.includes('modern') ? 'blue' : 'cyan'}
          >
            <Navigation 
              currentTheme={currentTheme} 
              onThemeChange={switchTheme}
              themes={designThemes}
            />
            <main id="main-content" role="main">
              <PageTransition id={currentTheme}>
                <ErrorBoundary>
                  <Suspense fallback={<DesignLoader />}>
                    <DesignComponent />
                  </Suspense>
                </ErrorBoundary>
              </PageTransition>
            </main>
            <ErrorBoundary>
              <MobileOnboardingTour />
            </ErrorBoundary>
            
            <SwipeIndicator
              currentIndex={currentIndex}
              totalThemes={totalThemes}
              isTouch={isTouch}
              onNext={nextTheme}
              onPrevious={previousTheme}
            />
          </AquaticEffects>
        </AccessibilityProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}