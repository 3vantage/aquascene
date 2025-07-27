import { DesignTheme } from '@/types'

export const designThemes: DesignTheme[] = [
  {
    id: 'minimalist',
    name: 'Luxury Boutique',
    description: 'Exclusive aquascaping boutique targeting high-end clientele with bespoke installations, rare materials, and VIP concierge services.',
    colorScheme: {
      primary: '#f97316', // Orange luxury
      secondary: '#fef3c7', // Warm amber
      accent: '#0ea5e9', // Sky blue
      background: '#ffffff',
      text: '#1e293b'
    },
    style: 'minimalist'
  },
  {
    id: 'nature',
    name: 'Nature Immersive',
    description: 'Deep aqua/teal colors with full-screen aquarium backgrounds. Organic flowing layouts.',
    colorScheme: {
      primary: '#14b8a6', // Teal
      secondary: '#1e3a5f', // Deep ocean blue
      accent: '#4fd1c7', // Light aqua
      background: '#0f1419',
      text: '#f1f5f9'
    },
    style: 'nature'
  },
  {
    id: 'modern',
    name: 'Modern E-commerce',
    description: 'Dark mode with bright product highlights. Card-based layouts with advanced features.',
    colorScheme: {
      primary: '#3b82f6', // Blue
      secondary: '#1f2937', // Dark gray
      accent: '#10b981', // Emerald
      background: '#111827',
      text: '#f9fafb'
    },
    style: 'modern'
  },
  {
    id: 'portfolio',
    name: 'Portfolio Showcase',
    description: 'Photography-first approach with elegant galleries. Personal branding focus.',
    colorScheme: {
      primary: '#8b5cf6', // Purple
      secondary: '#f1f5f9', // Light blue gray
      accent: '#06b6d4', // Cyan
      background: '#ffffff',
      text: '#334155'
    },
    style: 'portfolio'
  },
  {
    id: 'business',
    name: 'Green Aqua Partnership',
    description: 'Specifically designed to impress Green Aqua as a potential business partner, showcasing our aquascaping expertise and international capabilities.',
    colorScheme: {
      primary: '#DE521D', // Green Aqua signature orange
      secondary: '#2563eb', // Professional blue
      accent: '#059669', // Success green
      background: '#f8fafc',
      text: '#1e293b'
    },
    style: 'business'
  },
  {
    id: 'underwater',
    name: 'Underwater Ecosystem',
    description: 'Immersive 3D aquarium experience with swimming fish, floating bubbles, and water caustics effects.',
    colorScheme: {
      primary: '#0891b2', // Cyan
      secondary: '#1e3a8a', // Deep blue
      accent: '#06b6d4', // Light cyan
      background: '#0c4a6e',
      text: '#f0f9ff'
    },
    style: 'underwater'
  },
  {
    id: 'timeline',
    name: 'Aquascaping Timeline',
    description: 'Interactive step-by-step aquarium creation journey with animated timeline and progress tracking.',
    colorScheme: {
      primary: '#2563eb', // Blue
      secondary: '#1e293b', // Slate
      accent: '#0ea5e9', // Sky blue
      background: '#0f172a',
      text: '#f8fafc'
    },
    style: 'timeline'
  },
  {
    id: 'growth',
    name: 'Plant Growth Simulator',
    description: 'Living ecosystem with animated plant growth, day/night cycles, and environmental controls.',
    colorScheme: {
      primary: '#059669', // Emerald
      secondary: '#064e3b', // Dark green
      accent: '#10b981', // Light emerald
      background: '#022c22',
      text: '#ecfdf5'
    },
    style: 'growth'
  },
  {
    id: 'zen',
    name: 'Zen Garden Flow',
    description: 'Meditation-inspired peaceful aquascape with flowing water, ripples, and Japanese aesthetic.',
    colorScheme: {
      primary: '#64748b', // Slate
      secondary: '#f1f5f9', // Light slate
      accent: '#0ea5e9', // Sky blue
      background: '#f8fafc',
      text: '#1e293b'
    },
    style: 'zen'
  },
  {
    id: 'workshop',
    name: 'Aquarium Workshop',
    description: 'Interactive tank builder with drag-and-drop elements, compatibility checker, and live preview.',
    colorScheme: {
      primary: '#1d4ed8', // Blue
      secondary: '#374151', // Gray
      accent: '#059669', // Emerald
      background: '#111827',
      text: '#f9fafb'
    },
    style: 'workshop'
  }
]