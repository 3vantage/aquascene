import React, { useState } from 'react'
import { products } from '@/data/products'
import { 
  Sprout, Fish, Recycle, Droplets, Target
} from 'lucide-react'
import { HeroSection } from '@/components/aquaponics/HeroSection'
import { SystemSelection } from '@/components/aquaponics/SystemSelection'
import { InnovationAreas } from '@/components/aquaponics/InnovationAreas'
import { CaseStudies } from '@/components/aquaponics/CaseStudies'
import { ROICalculator } from '@/components/aquaponics/ROICalculator'
import { EquipmentShowcase } from '@/components/aquaponics/EquipmentShowcase'
import { ContactForm } from '@/components/aquaponics/ContactForm'

export function AquaponicsInnovationDesign() {
  const [activeSystem, setActiveSystem] = useState('nft')
  
  const systems = [
    {
      id: 'nft',
      name: 'NFT System',
      fullName: 'Nutrient Film Technique',
      efficiency: '95%',
      waterUse: '-90%',
      yield: '+300%',
      plants: ['Lettuce', 'Herbs', 'Spinach'],
      fish: ['Tilapia', 'Trout', 'Catfish'],
      difficulty: 'Intermediate',
      investment: '€2,500 - €8,000'
    },
    {
      id: 'dwc',
      name: 'DWC System',
      fullName: 'Deep Water Culture',
      efficiency: '92%',
      waterUse: '-85%',
      yield: '+250%',
      plants: ['Tomatoes', 'Peppers', 'Cucumbers'],
      fish: ['Bass', 'Perch', 'Bluegill'],
      difficulty: 'Beginner',
      investment: '€1,500 - €5,000'
    },
    {
      id: 'media',
      name: 'Media Bed',
      fullName: 'Gravel Bed System',
      efficiency: '88%',
      waterUse: '-80%',
      yield: '+200%',
      plants: ['Root vegetables', 'Beans', 'Corn'],
      fish: ['Goldfish', 'Koi', 'Carp'],
      difficulty: 'Beginner',
      investment: '€800 - €3,000'
    }
  ]

  const benefits = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Water Conservation',
      value: '90%',
      description: 'Less water usage than traditional farming',
      color: 'text-blue-600'
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: 'Faster Growth',
      value: '300%',
      description: 'Accelerated plant development',
      color: 'text-green-600'
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Zero Waste',
      value: '100%',
      description: 'Complete nutrient recycling',
      color: 'text-emerald-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Space Efficiency',
      value: '10x',
      description: 'Higher yield per square meter',
      color: 'text-purple-600'
    }
  ]

  const innovationAreas = [
    {
      title: 'IoT Monitoring',
      description: 'Smart sensors for automated system management',
      applications: ['pH monitoring', 'Temperature control', 'Nutrient tracking'],
      maturity: 'Commercial',
      impact: 'High'
    },
    {
      title: 'AI Optimization',
      description: 'Machine learning for yield prediction and optimization',
      applications: ['Growth prediction', 'Disease detection', 'Resource optimization'],
      maturity: 'Research',
      impact: 'Very High'
    },
    {
      title: 'Vertical Farming',
      description: 'Multi-level systems for urban environments',
      applications: ['Urban agriculture', 'Indoor farming', 'Rooftop gardens'],
      maturity: 'Commercial',
      impact: 'High'
    },
    {
      title: 'Renewable Energy',
      description: 'Solar and wind power integration',
      applications: ['Solar pumps', 'LED grow lights', 'Heating systems'],
      maturity: 'Commercial',
      impact: 'Medium'
    }
  ]

  const caseStudies = [
    {
      location: 'Singapore',
      project: 'Sky Greens Vertical Farm',
      scale: '120 towers',
      production: '1 ton/day',
      saving: '95% water',
      year: '2023'
    },
    {
      location: 'Netherlands',
      project: 'Growing Underground',
      scale: '2.5 hectares',
      production: '20 tons/month',
      saving: '70% energy',
      year: '2023'
    },
    {
      location: 'Dubai',
      project: 'Desert Aquaponics',
      scale: '1 hectare',
      production: '15 tons/month',
      saving: '85% water',
      year: '2024'
    }
  ]

  const currentSystem = systems.find(s => s.id === activeSystem) || systems[0]

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <HeroSection benefits={benefits} />

      {/* System Selection and Details */}
      <SystemSelection 
        systems={systems}
        activeSystem={activeSystem}
        onSystemChange={setActiveSystem}
        currentSystem={currentSystem}
      />

      {/* Innovation Areas */}
      <InnovationAreas innovations={innovationAreas} />

      {/* Global Case Studies */}
      <CaseStudies studies={caseStudies} />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Equipment & Services */}
      <EquipmentShowcase products={products} />

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}