'use client'

import React, { useState, useEffect, useRef } from 'react'
import { AssetItem, getAssetsByTheme, getRandomAssets } from '@/data/assets'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface AssetVideoProps {
  themeId?: string
  category?: AssetItem['category']
  className?: string
  aspectRatio?: '16:9' | '4:3' | '1:1'
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  overlay?: boolean
  overlayOpacity?: number
  showCredit?: boolean
  fallbackColor?: string
}

export function AssetVideo({
  themeId,
  category = 'landscape',
  className = '',
  aspectRatio = '16:9',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  overlay = false,
  overlayOpacity = 0.3,
  showCredit = true,
  fallbackColor = 'from-slate-200 to-slate-300'
}: AssetVideoProps) {
  const [selectedAsset, setSelectedAsset] = useState<AssetItem | null>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Get appropriate video assets based on theme and category
    let availableAssets: AssetItem[] = []
    
    if (themeId) {
      availableAssets = getAssetsByTheme(themeId).filter(asset => 
        asset.type === 'video' && 
        (category ? asset.category === category : true)
      )
    }
    
    // Fallback to random video assets if no theme-specific assets found
    if (availableAssets.length === 0) {
      availableAssets = getRandomAssets(10).filter(asset => 
        asset.type === 'video' && 
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
      default: return 'aspect-video'
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoLoad = () => {
    setVideoLoaded(true)
    setVideoError(false)
  }

  const handleVideoError = () => {
    setVideoError(true)
    setVideoLoaded(false)
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
  }

  const handleVideoPause = () => {
    setIsPlaying(false)
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${getAspectRatioClass()} ${className} group`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {selectedAsset && !videoError ? (
        <>
          {/* Main Video */}
          <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source src={selectedAsset.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Loading placeholder */}
          {!videoLoaded && (
            <div className={`absolute inset-0 bg-gradient-to-br ${fallbackColor} animate-pulse flex items-center justify-center`}>
              <div className="text-center text-gray-600">
                <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <div className="text-sm">Loading video...</div>
              </div>
            </div>
          )}
          
          {/* Overlay */}
          {overlay && videoLoaded && (
            <div 
              className="absolute inset-0 bg-black transition-opacity duration-300"
              style={{ opacity: overlayOpacity }}
            />
          )}
          
          {/* Custom Controls */}
          {(controls || showControls) && videoLoaded && (
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center gap-4 bg-black/70 backdrop-blur-sm rounded-full px-6 py-3">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-cyan-400 transition-colors"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </button>
                
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-cyan-400 transition-colors"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          )}
          
          {/* Credit */}
          {showCredit && videoLoaded && (
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
                <path d="m7,4l10,6l-10,6l0,-12z"/>
              </svg>
            </div>
            <div className="text-sm opacity-70">Aquascaping Video</div>
          </div>
        </div>
      )}
    </div>
  )
}

// Specialized video components for different themes
export function HeroAssetVideo({ themeId, className }: { themeId?: string; className?: string }) {
  return (
    <AssetVideo
      themeId={themeId}
      category="landscape"
      className={className}
      aspectRatio="16:9"
      autoPlay={true}
      loop={true}
      muted={true}
      overlay={true}
      overlayOpacity={0.4}
      controls={true}
      fallbackColor="from-cyan-200 via-blue-200 to-teal-200"
    />
  )
}

export function ImmersiveAssetVideo({ themeId, className }: { themeId?: string; className?: string }) {
  return (
    <AssetVideo
      themeId={themeId}
      category="plants"
      className={className}
      aspectRatio="16:9"
      autoPlay={true}
      loop={true}
      muted={true}
      overlay={false}
      controls={false}
      showCredit={false}
      fallbackColor="from-green-100 via-teal-100 to-cyan-100"
    />
  )
}

export function TimelapseAssetVideo({ themeId, className }: { themeId?: string; className?: string }) {
  return (
    <AssetVideo
      themeId={themeId}
      category="plants"
      className={className}
      aspectRatio="16:9"
      autoPlay={true}
      loop={true}
      muted={true}
      overlay={false}
      controls={true}
      fallbackColor="from-emerald-100 to-green-200"
    />
  )
}