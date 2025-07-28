import React, { useState } from 'react'
import { products } from '@/data/products'
import { 
  TreePine, Mountain, Waves, Sun
} from 'lucide-react'
import { BiotopeHeroSection } from '@/components/biotope/BiotopeHeroSection'
import { BiotopeSelector } from '@/components/biotope/BiotopeSelector'
import { BiotopeDetails } from '@/components/biotope/BiotopeDetails'
import { ConservationStatus } from '@/components/biotope/ConservationStatus'
import { FieldStudies } from '@/components/biotope/FieldStudies'
import { BiotopeEquipment } from '@/components/biotope/BiotopeEquipment'
import { SpeciesCatalog } from '@/components/biotope/SpeciesCatalog'
import { BiotopeContactForm } from '@/components/biotope/BiotopeContactForm'

export function BiotopeSpecialistDesign() {
  const [selectedBiotope, setSelectedBiotope] = useState('amazon')
  
  const biotopes = [
    {
      id: 'amazon',
      name: 'Amazon Basin',
      region: 'South America',
      difficulty: 'Intermediate',
      temperature: '24-28°C',
      ph: '6.0-7.0',
      hardness: '1-5 dGH',
      substrate: 'Fine sand, leaf litter',
      plants: ['Echinodorus amazonicus', 'Cabomba caroliniana', 'Vallisneria americana'],
      fish: ['Cardinal Tetra', 'Angelfish', 'Corydoras'],
      image: 'bg-gradient-to-br from-green-600 to-emerald-700',
      icon: <TreePine className="w-6 h-6" />
    },
    {
      id: 'malawi',
      name: 'Lake Malawi',
      region: 'East Africa',
      difficulty: 'Advanced',
      temperature: '24-26°C',
      ph: '7.8-8.6',
      hardness: '10-25 dGH',
      substrate: 'Coral sand, rocks',
      plants: ['Vallisneria spiralis', 'Anubias barteri'],
      fish: ['Mbuna Cichlids', 'Peacock Cichlids', 'Haplochromis'],
      image: 'bg-gradient-to-br from-blue-600 to-cyan-700',
      icon: <Mountain className="w-6 h-6" />
    },
    {
      id: 'borneo',
      name: 'Borneo Stream',
      region: 'Southeast Asia',
      difficulty: 'Expert',
      temperature: '22-26°C',
      ph: '5.5-6.5',
      hardness: '1-3 dGH',
      substrate: 'River rocks, driftwood',
      plants: ['Cryptocoryne wendtii', 'Bucephalandra', 'Java moss'],
      fish: ['Rasbora species', 'Loaches', 'Otocinclus'],
      image: 'bg-gradient-to-br from-amber-600 to-orange-700',
      icon: <Waves className="w-6 h-6" />
    },
    {
      id: 'madagascar',
      name: 'Madagascar Rivers',
      region: 'Madagascar',
      difficulty: 'Expert',
      temperature: '20-24°C',
      ph: '6.5-7.5',
      hardness: '5-15 dGH',
      substrate: 'Sandy bottom, granite rocks',
      plants: ['Aponogeton madagascariensis', 'Crinum natans'],
      fish: ['Pachypanchax', 'Paretroplus', 'Bedotia'],
      image: 'bg-gradient-to-br from-red-600 to-pink-700',
      icon: <Sun className="w-6 h-6" />
    }
  ]

  const currentBiotope = biotopes.find(b => b.id === selectedBiotope) || biotopes[0]

  const conservationEfforts = [
    {
      region: 'Amazon Basin',
      status: 'Critical',
      protected: '12.3M hectares',
      threat: 'Deforestation',
      action: 'Habitat preservation'
    },
    {
      region: 'Lake Malawi',
      status: 'Vulnerable',
      protected: '94,000 hectares',
      threat: 'Overfishing',
      action: 'Species protection'
    },
    {
      region: 'Borneo Streams',
      status: 'Endangered',
      protected: '2.1M hectares',
      threat: 'Palm oil expansion',
      action: 'Corridor creation'
    }
  ]

  const fieldStudies = [
    {
      title: 'Amazon Blackwater Research',
      location: 'Rio Negro, Brazil',
      duration: '6 months',
      species: '47 documented',
      lead: 'Dr. Maria Santos'
    },
    {
      title: 'Malawi Cichlid Evolution',
      location: 'Lake Malawi, Malawi',
      duration: '2 years',
      species: '200+ studied',
      lead: 'Prof. James Mkandawire'
    },
    {
      title: 'Borneo Endemic Survey',
      location: 'Kinabatangan River',
      duration: '1 year',
      species: '31 new species',
      lead: 'Dr. Lim Wei Ming'
    }
  ]

  const equipment = [
    {
      name: 'pH Buffer System',
      use: 'Water chemistry control',
      biotopes: ['Amazon', 'Borneo'],
      price: '€89'
    },
    {
      name: 'Mineral Supplement',
      use: 'Hardness adjustment',
      biotopes: ['Malawi', 'Madagascar'],
      price: '€34'
    },
    {
      name: 'Tannin Extract',
      use: 'Blackwater simulation',
      biotopes: ['Amazon', 'Borneo'],
      price: '€25'
    }
  ]

  const speciesCatalog = products.filter(p => p.category === 'plant' || p.category === 'fish')

  return (
    <div className="pt-20 bg-green-50 min-h-screen">
      <BiotopeHeroSection />
      
      <BiotopeSelector 
        biotopes={biotopes}
        selectedBiotope={selectedBiotope}
        onBiotopeSelect={setSelectedBiotope}
      />

      <BiotopeDetails biotope={currentBiotope} />

      <ConservationStatus efforts={conservationEfforts} />

      <FieldStudies studies={fieldStudies} />

      <BiotopeEquipment equipment={equipment} />

      <SpeciesCatalog species={speciesCatalog} />

      <BiotopeContactForm />
    </div>
  )
}