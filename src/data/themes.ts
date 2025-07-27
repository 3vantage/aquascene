import { DesignTheme } from '@/types'

export const designThemes: DesignTheme[] = [
  {
    id: 'minimalist',
    name: 'Minimalist Professional',
    description: 'Clean white background with Green Aqua inspired orange accents. Professional typography and grid layouts.',
    colorScheme: {
      primary: '#DE521D', // Green Aqua orange
      secondary: '#f8fafc', // Light gray
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
    name: 'Hungarian Business Focus',
    description: 'Sophisticated corporate aesthetic with partnership-focused messaging.',
    colorScheme: {
      primary: '#dc2626', // Red
      secondary: '#059669', // Green (Hungarian flag colors)
      accent: '#d97706', // Amber
      background: '#f9fafb',
      text: '#111827'
    },
    style: 'business'
  }
]