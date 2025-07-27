'use client'

import React from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { MinimalistDesign } from '@/components/designs/MinimalistDesign'
import { ModernDesign } from '@/components/designs/ModernDesign'
import { NatureDesign } from '@/components/designs/NatureDesign'
import { PortfolioDesign } from '@/components/designs/PortfolioDesign'
import { BusinessDesign } from '@/components/designs/BusinessDesign'
import { UnderwaterEcosystemDesign } from '@/components/designs/UnderwaterEcosystemDesign'
import { AquascapingTimelineDesign } from '@/components/designs/AquascapingTimelineDesign'
import { PlantGrowthDesign } from '@/components/designs/PlantGrowthDesign'
import { ZenGardenDesign } from '@/components/designs/ZenGardenDesign'
import { AquariumWorkshopDesign } from '@/components/designs/AquariumWorkshopDesign'
import { CompetitionShowcaseDesign } from '@/components/designs/CompetitionShowcaseDesign'
import { ScientificResearchDesign } from '@/components/designs/ScientificResearchDesign'
import { BiotopeSpecialistDesign } from '@/components/designs/BiotopeSpecialistDesign'
import { AquaponicsInnovationDesign } from '@/components/designs/AquaponicsInnovationDesign'
import { DigitalAquascapingDesign } from '@/components/designs/DigitalAquascapingDesign'

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
      case 'underwater':
        return <UnderwaterEcosystemDesign />
      case 'timeline':
        return <AquascapingTimelineDesign />
      case 'growth':
        return <PlantGrowthDesign />
      case 'zen':
        return <ZenGardenDesign />
      case 'workshop':
        return <AquariumWorkshopDesign />
      case 'competition':
        return <CompetitionShowcaseDesign />
      case 'scientific':
        return <ScientificResearchDesign />
      case 'biotope':
        return <BiotopeSpecialistDesign />
      case 'aquaponics':
        return <AquaponicsInnovationDesign />
      case 'digital':
        return <DigitalAquascapingDesign />
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