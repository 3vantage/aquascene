export interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: string
  category: 'soil' | 'stone' | 'fertilizer' | 'plant' | 'fish'
  image: string
  url: string
  inStock: boolean
  featured?: boolean
}

export interface DesignTheme {
  id: string
  name: string
  description: string
  colorScheme: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  style: 'minimalist' | 'nature' | 'modern' | 'portfolio' | 'business'
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  message: string
  type: 'general' | 'partnership' | 'order'
}

export interface AquariumProject {
  id: string
  title: string
  description: string
  images: string[]
  timeline: string
  materials: Product[]
  status: 'planning' | 'in_progress' | 'completed'
}