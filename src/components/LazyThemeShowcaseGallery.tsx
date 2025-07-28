'use client'

import React, { Suspense, lazy } from 'react'
import { Palette, Loader2 } from 'lucide-react'

// Lazy load the theme showcase gallery
const ThemeShowcaseGalleryComponent = lazy(() => 
  import('./ThemeShowcaseGallery').then(module => ({ default: module.ThemeShowcaseGallery }))
)

interface LazyThemeShowcaseGalleryProps {
  variant?: 'light' | 'dark' | 'gradient'
  className?: string
  showDetails?: boolean
  highlightGreenAqua?: boolean
}

// Loading component for the gallery
function ThemeGalleryLoading({ variant = 'light' }: { variant?: 'light' | 'dark' | 'gradient' }) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return {
          container: 'bg-gray-900 text-white',
          card: 'bg-gray-800 border-gray-700',
          accent: 'text-cyan-400',
          text: 'text-gray-300'
        }
      case 'gradient':
        return {
          container: 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white',
          card: 'bg-white/10 backdrop-blur-md border-white/20',
          accent: 'text-cyan-200',
          text: 'text-white/90'
        }
      default:
        return {
          container: 'bg-white text-gray-900',
          card: 'bg-white border-gray-200',
          accent: 'text-cyan-600',
          text: 'text-gray-600'
        }
    }
  }

  const classes = getVariantClasses()

  return (
    <section className={`py-20 ${classes.container}`}>
      <div className="container mx-auto px-4">
        {/* Header Loading State */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Palette className={`w-12 h-12 ${classes.accent} animate-pulse`} />
            <div className="h-12 bg-gray-300 rounded w-96 animate-pulse"></div>
            <Palette className={`w-12 h-12 ${classes.accent} animate-pulse`} />
          </div>
          
          {/* Green Aqua highlight loading */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded animate-pulse"></div>
              <div className="h-8 bg-white/20 rounded w-72 animate-pulse"></div>
              <div className="w-8 h-8 bg-white/20 rounded animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <div className="h-6 bg-white/20 rounded max-w-3xl mx-auto animate-pulse"></div>
              <div className="h-6 bg-white/20 rounded max-w-2xl mx-auto animate-pulse"></div>
              <div className="h-6 bg-white/20 rounded max-w-xl mx-auto animate-pulse"></div>
            </div>
          </div>
          
          <div className="space-y-3 mb-8">
            <div className="h-6 bg-gray-300 rounded max-w-4xl mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded max-w-3xl mx-auto animate-pulse"></div>
          </div>

          {/* Category Filter Loading */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-24 bg-gray-300 rounded-full animate-pulse"></div>
            ))}
          </div>

          {/* View Mode Toggle Loading */}
          <div className="flex justify-center">
            <div className={`inline-flex rounded-lg p-1 ${classes.card} border`}>
              <div className="h-10 w-20 bg-gray-300 rounded-md animate-pulse mr-1"></div>
              <div className="h-10 w-20 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Gallery Loading Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`${classes.card} border rounded-xl overflow-hidden p-6`}>
              {/* Preview loading */}
              <div className="aspect-video rounded-lg bg-gray-300 mb-4 animate-pulse"></div>
              
              {/* Content loading */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                  <div className="h-5 bg-gray-300 rounded w-16 animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
                <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Loader2 className={`w-8 h-8 ${classes.accent} animate-spin`} />
            <span className={`text-lg font-medium ${classes.text}`}>
              Loading Theme Gallery...
            </span>
          </div>
          <p className={`text-sm ${classes.text} opacity-70`}>
            Preparing 15 premium design themes for your review
          </p>
        </div>
      </div>
    </section>
  )
}

// Error boundary component
class ThemeGalleryErrorBoundary extends React.Component<
  { children: React.ReactNode; variant?: 'light' | 'dark' | 'gradient' },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; variant?: 'light' | 'dark' | 'gradient' }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ThemeShowcaseGallery error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      const variant = this.props.variant || 'light'
      const getVariantClasses = () => {
        switch (variant) {
          case 'dark':
            return {
              container: 'bg-gray-900 text-white',
              card: 'bg-gray-800 border-gray-700',
              accent: 'text-cyan-400',
              text: 'text-gray-300'
            }
          case 'gradient':
            return {
              container: 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white',
              card: 'bg-white/10 backdrop-blur-md border-white/20',
              accent: 'text-cyan-200',
              text: 'text-white/90'
            }
          default:
            return {
              container: 'bg-white text-gray-900',
              card: 'bg-white border-gray-200',
              accent: 'text-cyan-600',
              text: 'text-gray-600'
            }
        }
      }

      const classes = getVariantClasses()

      return (
        <section className={`py-20 ${classes.container}`}>
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className={`${classes.card} border rounded-2xl p-12 max-w-2xl mx-auto`}>
                <Palette className={`w-16 h-16 ${classes.accent} mx-auto mb-6`} />
                <h3 className="text-2xl font-bold mb-4">
                  Theme Gallery Temporarily Unavailable
                </h3>
                <p className={`${classes.text} mb-6`}>
                  We're having trouble loading the theme gallery. Please refresh the page to try again.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className={`px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all`}
                >
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}

export function LazyThemeShowcaseGallery({
  variant = 'light',
  className = '',
  showDetails = true,
  highlightGreenAqua = true
}: LazyThemeShowcaseGalleryProps) {
  return (
    <ThemeGalleryErrorBoundary variant={variant}>
      <Suspense fallback={<ThemeGalleryLoading variant={variant} />}>
        <ThemeShowcaseGalleryComponent
          variant={variant}
          className={className}
          showDetails={showDetails}
          highlightGreenAqua={highlightGreenAqua}
        />
      </Suspense>
    </ThemeGalleryErrorBoundary>
  )
}