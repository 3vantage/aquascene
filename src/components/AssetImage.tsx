'use client'

import React, { useState, useEffect } from 'react'
import { AssetItem, getAssetsByTheme, getRandomAssets } from '@/data/assets'

interface AssetImageProps {
  themeId?: string
  category?: AssetItem['category']
  fallbackColor?: string
  className?: string
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:2'
  priority?: boolean
  showCredit?: boolean
  overlay?: boolean
  overlayOpacity?: number
}

export function AssetImage({
  themeId,
  category = 'aquarium',
  fallbackColor = 'from-slate-200 to-slate-300',
  className = '',
  aspectRatio = '16:9',
  priority = false,
  showCredit = true,
  overlay = false,
  overlayOpacity = 0.3
}: AssetImageProps) {
  const [selectedAsset, setSelectedAsset] = useState<AssetItem | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // Get appropriate assets based on theme and category
    let availableAssets: AssetItem[] = []
    
    if (themeId) {
      availableAssets = getAssetsByTheme(themeId).filter(asset => 
        asset.type === 'image' && 
        (category ? asset.category === category : true)
      )
    }
    
    // Fallback to random assets if no theme-specific assets found
    if (availableAssets.length === 0) {
      availableAssets = getRandomAssets(10).filter(asset => 
        asset.type === 'image' && 
        (category ? asset.category === category : true)
      )
    }
    
    // Select a random asset from available options
    if (availableAssets.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableAssets.length)
      setSelectedAsset(availableAssets[randomIndex])
    }
  }, [themeId, category])

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case '16:9': return 'aspect-video'
      case '4:3': return 'aspect-[4/3]'
      case '1:1': return 'aspect-square'
      case '3:2': return 'aspect-[3/2]'
      default: return 'aspect-video'
    }
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
    setImageError(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(false)
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${getAspectRatioClass()} ${className}`}>
      {selectedAsset && !imageError ? (
        <>
          {/* Main Image */}
          <img
            src={selectedAsset.url}
            alt={selectedAsset.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading={priority ? 'eager' : 'lazy'}
          />
          
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className={`absolute inset-0 bg-gradient-to-br ${fallbackColor} animate-pulse flex items-center justify-center`}>
              <div className="text-center text-gray-600">
                <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <div className="text-sm">Loading...</div>
              </div>
            </div>
          )}
          
          {/* Overlay */}
          {overlay && imageLoaded && (
            <div 
              className="absolute inset-0 bg-black transition-opacity duration-300"
              style={{ opacity: overlayOpacity }}
            />
          )}
          
          {/* Credit */}
          {showCredit && imageLoaded && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
              {selectedAsset.credit}
            </div>
          )}
        </>
      ) : (
        /* Fallback gradient when no asset or error */
        <div className={`w-full h-full bg-gradient-to-br ${fallbackColor} flex items-center justify-center`}>
          <div className="text-center text-gray-600">
            <div className="w-12 h-12 opacity-50 mb-2 mx-auto">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15.5 7.5L15.1 5.1C14.8 3.8 13.8 2.8 12.5 2.8S10.2 3.8 9.9 5.1L9.5 7.5L4 7V9L9.5 9.5L8.5 15L10.5 16L11.2 13L12.8 13L13.5 16L15.5 15L14.5 9.5L21 9Z"/>
              </svg>
            </div>
            <div className="text-sm opacity-70">Aquascaping Image</div>
          </div>
        </div>
      )}
    </div>
  )
}

// Specialized components for different asset types
export function HeroAssetImage({ themeId, className }: { themeId?: string; className?: string }) {
  return (
    <AssetImage
      themeId={themeId}
      category="landscape"
      className={className}
      aspectRatio="16:9"
      priority={true}
      overlay={true}
      overlayOpacity={0.4}
      fallbackColor="from-cyan-200 via-blue-200 to-teal-200"
    />
  )
}

export function ProductAssetImage({ themeId, className }: { themeId?: string; className?: string }) {
  return (
    <AssetImage
      themeId={themeId}
      category="equipment"
      className={className}
      aspectRatio="4:3"
      showCredit={false}
      fallbackColor="from-gray-100 to-gray-200"
    />
  )
}

export function PlantAssetImage({ themeId, className }: { themeId?: string; className?: string }) {
  return (
    <AssetImage
      themeId={themeId}
      category="plants"
      className={className}
      aspectRatio="1:1"
      showCredit={false}
      fallbackColor="from-green-100 to-emerald-200"
    />
  )
}

export function AquariumAssetImage({ themeId, className }: { themeId?: string; className?: string }) {
  return (
    <AssetImage
      themeId={themeId}
      category="aquarium"
      className={className}
      aspectRatio="16:9"
      overlay={true}
      overlayOpacity={0.2}
      fallbackColor="from-blue-100 via-cyan-100 to-teal-100"
    />
  )
}