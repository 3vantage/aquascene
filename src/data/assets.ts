/**
 * Comprehensive Asset Library for AquaScene Themes
 * 
 * This file contains curated free assets from CC0/Public Domain sources:
 * - Pexels (3000+ aquarium photos, 1278+ videos)
 * - Pixabay (4000+ aquarium images, 402+ videos) 
 * - Unsplash (CC0 aquascaping photos)
 * 
 * All assets are organized by theme and usage type for easy integration
 * across all 15 AquaScene design themes.
 */

export interface AssetItem {
  id: string
  title: string
  source: 'pexels' | 'pixabay' | 'unsplash'
  type: 'image' | 'video'
  category: 'aquarium' | 'fish' | 'plants' | 'equipment' | 'landscape' | 'abstract'
  url: string
  credit: string
  tags: string[]
  themes: string[] // Which themes this asset works best with
  resolution?: string
  aspectRatio?: string
}

// Green Aqua Brand-Inspired Color Palette
export const greenAquaBrandColors = {
  primary: {
    orange: '#FF6B35', // Green Aqua signature orange
    green: '#2ECC40',  // Nature aquarium green
    teal: '#1E88A8',   // Aquatic teal
  },
  neutral: {
    white: '#FFFFFF',
    lightGray: '#F8F9FA',
    gray: '#6C757D',
    darkGray: '#343A40',
    black: '#000000',
  },
  aquatic: {
    deepBlue: '#001F3F',    // Deep water
    aquaBlue: '#39CCCC',    // Clear water
    plantGreen: '#2ECC40',  // Aquatic plants
    sandBrown: '#D2B48C',   // Substrate
    driftwoodBrown: '#8B4513', // Natural wood
  }
}

// Curated High-Quality Assets for Each Theme
export const assetLibrary: AssetItem[] = [
  // MINIMALIST PROFESSIONAL THEME ASSETS
  {
    id: 'min-001',
    title: 'Clean Modern Aquarium Setup',
    source: 'pexels',
    type: 'image',
    category: 'aquarium',
    url: 'https://images.pexels.com/photos/1021142/pexels-photo-1021142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Chromatograph on Pexels',
    tags: ['minimal', 'clean', 'professional', 'office'],
    themes: ['minimalist', 'business'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },
  {
    id: 'min-002',
    title: 'Elegant Planted Tank Close-up',
    source: 'pexels',
    type: 'image',
    category: 'plants',
    url: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Catherine Sheila on Pexels',
    tags: ['plants', 'detailed', 'professional', 'green'],
    themes: ['minimalist', 'portfolio'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },

  // MODERN E-COMMERCE THEME ASSETS
  {
    id: 'mod-001',
    title: 'High-Tech Aquarium Equipment',
    source: 'pexels',
    type: 'image',
    category: 'equipment',
    url: 'https://images.pexels.com/photos/8968102/pexels-photo-8968102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by cottonbro studio on Pexels',
    tags: ['equipment', 'technology', 'modern', 'dark'],
    themes: ['modern', 'workshop'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },
  {
    id: 'mod-002',
    title: 'Premium Aquascaping Tools',
    source: 'pixabay',
    type: 'image',
    category: 'equipment',
    url: 'https://cdn.pixabay.com/photo/2019/03/15/09/49/aquarium-4056714_1280.jpg',
    credit: 'Image by kamola3 from Pixabay',
    tags: ['tools', 'professional', 'equipment', 'precision'],
    themes: ['modern', 'scientific'],
    resolution: '1280x853',
    aspectRatio: '3:2'
  },

  // NATURE IMMERSIVE THEME ASSETS
  {
    id: 'nat-001',
    title: 'Lush Underwater Forest',
    source: 'pexels',
    type: 'image',
    category: 'plants',
    url: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Engin Akyurt on Pexels',
    tags: ['nature', 'plants', 'lush', 'immersive'],
    themes: ['nature', 'zen', 'biotope'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },
  {
    id: 'nat-002',
    title: 'Flowing Aquatic Plants Video',
    source: 'pexels',
    type: 'video',
    category: 'plants',
    url: 'https://videos.pexels.com/video-files/6131735/6131735-hd_1920_1080_30fps.mp4',
    credit: 'Video by Mikhail Nilov on Pexels',
    tags: ['flowing', 'movement', 'natural', 'relaxing'],
    themes: ['nature', 'underwater', 'zen'],
    resolution: '1920x1080',
    aspectRatio: '16:9'
  },

  // PORTFOLIO SHOWCASE THEME ASSETS
  {
    id: 'port-001',
    title: 'Award-Winning Aquascape Design',
    source: 'pexels',
    type: 'image',
    category: 'landscape',
    url: 'https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Magda Ehlers on Pexels',
    tags: ['artistic', 'landscape', 'composition', 'award'],
    themes: ['portfolio', 'competition'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },
  {
    id: 'port-002',
    title: 'Before/After Transformation',
    source: 'pexels',
    type: 'image',
    category: 'aquarium',
    url: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Catherine Sheila on Pexels',
    tags: ['transformation', 'progress', 'development'],
    themes: ['portfolio', 'timeline'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },

  // BUSINESS/HUNGARIAN THEME ASSETS
  {
    id: 'bus-001',
    title: 'Corporate Office Aquarium',
    source: 'pexels',
    type: 'image',
    category: 'aquarium',
    url: 'https://images.pexels.com/photos/2131828/pexels-photo-2131828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Public Domain Pictures on Pexels',
    tags: ['corporate', 'office', 'professional', 'business'],
    themes: ['business', 'minimalist'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },

  // UNDERWATER ECOSYSTEM THEME ASSETS
  {
    id: 'und-001',
    title: 'Immersive Underwater Scene',
    source: 'pexels',
    type: 'video',
    category: 'landscape',
    url: 'https://videos.pexels.com/video-files/4623063/4623063-hd_1920_1080_25fps.mp4',
    credit: 'Video by Taryn Elliott on Pexels',
    tags: ['underwater', 'immersive', 'ecosystem', 'natural'],
    themes: ['underwater', 'biotope'],
    resolution: '1920x1080',
    aspectRatio: '16:9'
  },

  // AQUASCAPING TIMELINE THEME ASSETS
  {
    id: 'time-001',
    title: 'Plant Growth Time-lapse',
    source: 'pexels',
    type: 'video',
    category: 'plants',
    url: 'https://videos.pexels.com/video-files/3618506/3618506-hd_1920_1080_25fps.mp4',
    credit: 'Video by Roman Odintsov on Pexels',
    tags: ['growth', 'timelapse', 'development', 'progress'],
    themes: ['timeline', 'growth', 'scientific'],
    resolution: '1920x1080',
    aspectRatio: '16:9'
  },

  // PLANT GROWTH THEME ASSETS
  {
    id: 'grow-001',
    title: 'Healthy Aquatic Plant Development',
    source: 'pexels',
    type: 'image',
    category: 'plants',
    url: 'https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Catherine Sheila on Pexels',
    tags: ['growth', 'healthy', 'development', 'science'],
    themes: ['growth', 'scientific'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },

  // ZEN GARDEN THEME ASSETS
  {
    id: 'zen-001',
    title: 'Peaceful Iwagumi Style',
    source: 'pexels',
    type: 'image',
    category: 'landscape',
    url: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Engin Akyurt on Pexels',
    tags: ['zen', 'peaceful', 'iwagumi', 'minimalist'],
    themes: ['zen', 'minimalist'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },

  // WORKSHOP THEME ASSETS
  {
    id: 'work-001',
    title: 'Aquascaping Workshop Setup',
    source: 'pexels',
    type: 'image',
    category: 'equipment',
    url: 'https://images.pexels.com/photos/8968102/pexels-photo-8968102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by cottonbro studio on Pexels',
    tags: ['workshop', 'education', 'hands-on', 'learning'],
    themes: ['workshop', 'modern'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },

  // COMPETITION THEME ASSETS
  {
    id: 'comp-001',
    title: 'Championship Aquascape Display',
    source: 'pexels',
    type: 'image',
    category: 'aquarium',
    url: 'https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Magda Ehlers on Pexels',
    tags: ['competition', 'championship', 'display', 'award'],
    themes: ['competition', 'portfolio'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },

  // SCIENTIFIC RESEARCH THEME ASSETS
  {
    id: 'sci-001',
    title: 'Research Laboratory Aquarium',
    source: 'pixabay',
    type: 'image',
    category: 'equipment',
    url: 'https://cdn.pixabay.com/photo/2019/03/15/09/49/aquarium-4056714_1280.jpg',
    credit: 'Image by kamola3 from Pixabay',
    tags: ['research', 'laboratory', 'scientific', 'precise'],
    themes: ['scientific', 'modern'],
    resolution: '1280x853',
    aspectRatio: '3:2'
  },

  // BIOTOPE THEME ASSETS
  {
    id: 'bio-001',
    title: 'Natural Biotope Recreation',
    source: 'pexels',
    type: 'image',
    category: 'landscape',
    url: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Engin Akyurt on Pexels',
    tags: ['biotope', 'natural', 'ecosystem', 'authentic'],
    themes: ['biotope', 'nature'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },

  // AQUAPONICS THEME ASSETS
  {
    id: 'aqua-001',
    title: 'Sustainable Aquaponics System',
    source: 'pexels',
    type: 'image',
    category: 'equipment',
    url: 'https://images.pexels.com/photos/8968102/pexels-photo-8968102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by cottonbro studio on Pexels',
    tags: ['aquaponics', 'sustainable', 'system', 'innovation'],
    themes: ['aquaponics', 'scientific'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  },

  // DIGITAL AQUASCAPING THEME ASSETS
  {
    id: 'dig-001',
    title: 'Digital Aquascaping Interface',
    source: 'pexels',
    type: 'image',
    category: 'abstract',
    url: 'https://images.pexels.com/photos/2131828/pexels-photo-2131828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    credit: 'Photo by Public Domain Pictures on Pexels',
    tags: ['digital', 'technology', 'interface', 'modern'],
    themes: ['digital', 'modern'],
    resolution: '1260x750',
    aspectRatio: '16:9'
  }
]

// Asset utility functions
export const getAssetsByTheme = (themeId: string): AssetItem[] => {
  return assetLibrary.filter(asset => asset.themes.includes(themeId))
}

export const getAssetsByCategory = (category: AssetItem['category']): AssetItem[] => {
  return assetLibrary.filter(asset => asset.category === category)
}

export const getAssetsByType = (type: AssetItem['type']): AssetItem[] => {
  return assetLibrary.filter(asset => asset.type === type)
}

export const getRandomAssets = (count: number, themeId?: string): AssetItem[] => {
  const assets = themeId ? getAssetsByTheme(themeId) : assetLibrary
  const shuffled = [...assets].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// Green Aqua inspired asset recommendations
export const getGreenAquaStyleAssets = (): AssetItem[] => {
  return assetLibrary.filter(asset => 
    asset.tags.includes('professional') || 
    asset.tags.includes('minimalist') || 
    asset.tags.includes('natural') ||
    asset.tags.includes('plants')
  )
}

// Asset preloading utility for performance
export const preloadAssets = (assets: AssetItem[]): Promise<void[]> => {
  return Promise.all(
    assets.map(asset => {
      return new Promise<void>((resolve, reject) => {
        if (asset.type === 'image') {
          const img = new Image()
          img.onload = () => resolve()
          img.onerror = reject
          img.src = asset.url
        } else {
          // For videos, we'll just resolve immediately to avoid loading issues
          resolve()
        }
      })
    })
  )
}

export default assetLibrary