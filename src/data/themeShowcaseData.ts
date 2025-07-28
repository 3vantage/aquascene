'use client'

import { Target, Briefcase, Leaf, Camera, Globe, Fish, Zap, Droplets, Heart, Award, Star, Microscope, Cpu } from 'lucide-react'

export interface ThemeDetails {
  id: string
  name: string
  description: string
  icon: React.ComponentType<any>
  primaryColor: string
  secondaryColor: string
  category: 'Business' | 'Creative' | 'Technical' | 'Artistic'
  targetAudience: string
  keyFeatures: string[]
  greenAquaAppeal: string
  complexity: 'Simple' | 'Medium' | 'Advanced'
  implementationTime: string
}

// All 15 theme configurations with Green Aqua appeal focus
export const allThemes: ThemeDetails[] = [
  {
    id: 'minimalist',
    name: 'Minimalist Professional',
    description: 'Clean, professional design inspired by Green Aqua\'s sophisticated branding',
    icon: Target,
    primaryColor: 'from-orange-500 to-red-500',
    secondaryColor: 'from-gray-100 to-white',
    category: 'Business',
    targetAudience: 'Corporate clients, B2B partnerships',
    keyFeatures: ['Green Aqua color scheme', 'Professional layouts', 'Clean typography'],
    greenAquaAppeal: 'Mirrors Green Aqua\'s clean, professional aesthetic perfectly',
    complexity: 'Simple',
    implementationTime: '1-2 days'
  },
  {
    id: 'modern',
    name: 'Modern E-commerce',
    description: 'Sophisticated dark-mode design for premium product showcases',
    icon: Briefcase,
    primaryColor: 'from-gray-800 to-black',
    secondaryColor: 'from-cyan-500 to-blue-500',
    category: 'Business',
    targetAudience: 'Online retailers, premium brands',
    keyFeatures: ['Advanced filtering', 'Product galleries', 'Shopping features'],
    greenAquaAppeal: 'Perfect for showcasing Green Aqua\'s premium product catalog',
    complexity: 'Advanced',
    implementationTime: '3-4 days'
  },
  {
    id: 'nature',
    name: 'Nature Immersive',
    description: 'Flowing, organic design with aquatic-inspired animations',
    icon: Leaf,
    primaryColor: 'from-teal-500 to-cyan-600',
    secondaryColor: 'from-green-400 to-emerald-500',
    category: 'Artistic',
    targetAudience: 'Nature enthusiasts, aquascaping artists',
    keyFeatures: ['Fluid animations', 'Organic layouts', 'Water effects'],
    greenAquaAppeal: 'Captures the essence of aquatic nature that Green Aqua represents',
    complexity: 'Advanced',
    implementationTime: '4-5 days'
  },
  {
    id: 'portfolio',
    name: 'Portfolio Showcase',
    description: 'Photography-focused design for stunning project presentations',
    icon: Camera,
    primaryColor: 'from-gray-700 to-gray-900',
    secondaryColor: 'from-amber-400 to-orange-500',
    category: 'Creative',
    targetAudience: 'Photographers, design agencies',
    keyFeatures: ['Image galleries', 'Project showcases', 'Before/after displays'],
    greenAquaAppeal: 'Ideal for showcasing Green Aqua\'s beautiful aquascape photography',
    complexity: 'Medium',
    implementationTime: '2-3 days'
  },
  {
    id: 'business',
    name: 'Hungarian Business Focus',
    description: 'Sophisticated corporate design with Hungarian localization',
    icon: Globe,
    primaryColor: 'from-red-600 to-green-600',
    secondaryColor: 'from-gray-100 to-white',
    category: 'Business',
    targetAudience: 'Hungarian market, international partnerships',
    keyFeatures: ['Bilingual support', 'Local aesthetics', 'Partnership focus'],
    greenAquaAppeal: 'Specifically designed for Hungarian market appeal like Green Aqua',
    complexity: 'Advanced',
    implementationTime: '4-5 days'
  },
  {
    id: 'underwater',
    name: 'Underwater Ecosystem',
    description: 'Immersive aquatic environment with advanced visual effects',
    icon: Fish,
    primaryColor: 'from-blue-600 to-indigo-700',
    secondaryColor: 'from-cyan-400 to-teal-500',
    category: 'Artistic',
    targetAudience: 'Aquarium enthusiasts, marine biologists',
    keyFeatures: ['3D effects', 'Particle systems', 'Immersive experience'],
    greenAquaAppeal: 'Creates the underwater world that Green Aqua customers dream of',
    complexity: 'Advanced',
    implementationTime: '5-6 days'
  },
  {
    id: 'timeline',
    name: 'Aquascaping Timeline',
    description: 'Process-focused design showing aquascaping journey progression',
    icon: Zap,
    primaryColor: 'from-emerald-500 to-teal-600',
    secondaryColor: 'from-blue-400 to-cyan-500',
    category: 'Technical',
    targetAudience: 'Educational content, process documentation',
    keyFeatures: ['Timeline layouts', 'Progress tracking', 'Educational focus'],
    greenAquaAppeal: 'Perfect for showing Green Aqua\'s aquascaping methodologies',
    complexity: 'Medium',
    implementationTime: '2-3 days'
  },
  {
    id: 'growth',
    name: 'Plant Growth Tracking',
    description: 'Scientific approach to plant development and aquarium evolution',
    icon: Droplets,
    primaryColor: 'from-green-500 to-emerald-600',
    secondaryColor: 'from-lime-400 to-green-500',
    category: 'Technical',
    targetAudience: 'Plant enthusiasts, researchers',
    keyFeatures: ['Growth analytics', 'Time-lapse displays', 'Scientific data'],
    greenAquaAppeal: 'Showcases the scientific expertise behind Green Aqua\'s plant knowledge',
    complexity: 'Advanced',
    implementationTime: '4-5 days'
  },
  {
    id: 'zen',
    name: 'Zen Garden Aquascaping',
    description: 'Peaceful, meditative design inspired by Japanese aesthetics',
    icon: Heart,
    primaryColor: 'from-slate-500 to-gray-600',
    secondaryColor: 'from-stone-400 to-slate-500',
    category: 'Artistic',
    targetAudience: 'Wellness enthusiasts, zen practitioners',
    keyFeatures: ['Minimalist layouts', 'Calming animations', 'Meditative experience'],
    greenAquaAppeal: 'Reflects the peaceful, zen-like quality of Green Aqua\'s iwagumi styles',
    complexity: 'Medium',
    implementationTime: '2-3 days'
  },
  {
    id: 'workshop',
    name: 'Aquarium Workshop',
    description: 'Interactive design and planning tools for aquarium creation',
    icon: Award,
    primaryColor: 'from-blue-500 to-cyan-600',
    secondaryColor: 'from-indigo-400 to-blue-500',
    category: 'Technical',
    targetAudience: 'DIY enthusiasts, workshop participants',
    keyFeatures: ['Interactive tools', 'Planning interfaces', 'Educational content'],
    greenAquaAppeal: 'Supports Green Aqua\'s educational workshops and tutorials',
    complexity: 'Advanced',
    implementationTime: '4-5 days'
  },
  {
    id: 'competition',
    name: 'Competition Showcase',
    description: 'High-energy design for aquascaping contests and achievements',
    icon: Star,
    primaryColor: 'from-yellow-500 to-orange-500',
    secondaryColor: 'from-red-400 to-pink-500',
    category: 'Creative',
    targetAudience: 'Competition participants, judges',
    keyFeatures: ['Winner displays', 'Competition layouts', 'Achievement focus'],
    greenAquaAppeal: 'Highlights Green Aqua\'s award-winning designs and competitions',
    complexity: 'Medium',
    implementationTime: '3-4 days'
  },
  {
    id: 'scientific',
    name: 'Scientific Research',
    description: 'Data-driven design for aquatic research and analysis',
    icon: Microscope,
    primaryColor: 'from-indigo-600 to-purple-700',
    secondaryColor: 'from-blue-400 to-indigo-500',
    category: 'Technical',
    targetAudience: 'Researchers, academic institutions',
    keyFeatures: ['Data visualization', 'Research layouts', 'Scientific accuracy'],
    greenAquaAppeal: 'Showcases the scientific research behind Green Aqua\'s innovations',
    complexity: 'Advanced',
    implementationTime: '5-6 days'
  },
  {
    id: 'biotope',
    name: 'Biotope Specialist',
    description: 'Ecosystem-focused design for natural habitat recreation',
    icon: Globe,
    primaryColor: 'from-amber-600 to-orange-700',
    secondaryColor: 'from-green-500 to-emerald-600',
    category: 'Technical',
    targetAudience: 'Biotope enthusiasts, conservationists',
    keyFeatures: ['Habitat displays', 'Species information', 'Conservation focus'],
    greenAquaAppeal: 'Aligns with Green Aqua\'s commitment to natural biotope accuracy',
    complexity: 'Advanced',
    implementationTime: '4-5 days'
  },
  {
    id: 'aquaponics',
    name: 'Aquaponics Innovation',
    description: 'Sustainable system design for aquaponics and eco-friendly solutions',
    icon: Leaf,
    primaryColor: 'from-green-600 to-emerald-700',
    secondaryColor: 'from-lime-400 to-green-500',
    category: 'Technical',
    targetAudience: 'Sustainability advocates, innovators',
    keyFeatures: ['System diagrams', 'Sustainability focus', 'Innovation showcase'],
    greenAquaAppeal: 'Supports Green Aqua\'s environmental sustainability initiatives',
    complexity: 'Advanced',
    implementationTime: '4-5 days'
  },
  {
    id: 'digital',
    name: 'Digital Aquascaping',
    description: 'Tech-forward design with digital tools and AR/VR integration',
    icon: Cpu,
    primaryColor: 'from-cyan-500 to-blue-600',
    secondaryColor: 'from-purple-400 to-pink-500',
    category: 'Technical',
    targetAudience: 'Tech enthusiasts, digital innovators',
    keyFeatures: ['AR/VR integration', 'Digital tools', 'Future-focused'],
    greenAquaAppeal: 'Positions Green Aqua as a tech-forward, innovative leader',
    complexity: 'Advanced',
    implementationTime: '5-6 days'
  }
]

export const categories = ['All', 'Business', 'Creative', 'Technical', 'Artistic']