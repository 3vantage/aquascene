'use client'

import React, { useState } from 'react'
import { Palette, Eye, Award } from 'lucide-react'
import { allThemes, categories, type ThemeDetails } from '@/data/themeShowcaseData'

interface ThemeShowcaseGalleryProps {
  variant?: 'light' | 'dark' | 'gradient'
  className?: string
  showDetails?: boolean
  highlightGreenAqua?: boolean
}


export function ThemeShowcaseGallery({ 
  variant = 'light', 
  className = '', 
  showDetails = true,
  highlightGreenAqua = true 
}: ThemeShowcaseGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedTheme, setSelectedTheme] = useState<ThemeDetails | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  
  const filteredThemes = selectedCategory === 'All' 
    ? allThemes 
    : allThemes.filter(theme => theme.category === selectedCategory)

  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return {
          container: 'bg-gray-900 text-white',
          card: 'bg-gray-800 border-gray-700 hover:border-gray-600',
          accent: 'text-cyan-400',
          text: 'text-gray-300',
          overlay: 'bg-black/90'
        }
      case 'gradient':
        return {
          container: 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white',
          card: 'bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40',
          accent: 'text-cyan-200',
          text: 'text-white/90',
          overlay: 'bg-gradient-to-br from-cyan-900/95 to-blue-900/95'
        }
      default:
        return {
          container: 'bg-white text-gray-900',
          card: 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg',
          accent: 'text-cyan-600',
          text: 'text-gray-600',
          overlay: 'bg-white/95 backdrop-blur-md'
        }
    }
  }

  const classes = getVariantClasses()

  return (
    <section className={`py-20 ${classes.container} ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Palette className={`w-12 h-12 ${classes.accent}`} />
            <h2 className="text-4xl md:text-5xl font-bold">
              15 Premium Design Themes
            </h2>
            <Palette className={`w-12 h-12 ${classes.accent}`} />
          </div>
          
          {highlightGreenAqua && (
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Perfect for Green Aqua Partnership</h3>
                <Award className="w-8 h-8" />
              </div>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Each theme is carefully crafted to complement <strong>Green Aqua Hungary's</strong> brand aesthetic 
                and showcase the beauty of professional aquascaping. From minimalist corporate designs to 
                immersive aquatic experiences, these themes demonstrate our expertise in creating 
                sophisticated digital experiences for the aquascaping industry.
              </p>
            </div>
          )}
          
          <p className={`text-xl ${classes.text} max-w-4xl mx-auto mb-8`}>
            Explore our comprehensive collection of aquascaping-inspired design themes. 
            Each theme offers unique aesthetics, functionality, and user experiences 
            tailored for different business needs and target audiences.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? `bg-gradient-to-r ${classes.accent.replace('text-', 'from-')} to-blue-600 text-white shadow-lg`
                    : `${classes.card} border`
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center">
            <div className={`inline-flex rounded-lg p-1 ${classes.card} border`}>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  viewMode === 'grid' 
                    ? `${classes.accent.replace('text-', 'bg-')} text-white` 
                    : `${classes.text}`
                }`}
              >
                <Eye className="w-4 h-4 inline mr-2" />
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  viewMode === 'list' 
                    ? `${classes.accent.replace('text-', 'bg-')} text-white` 
                    : `${classes.text}`
                }`}
              >
                <Eye className="w-4 h-4 inline mr-2" />
                List
              </button>
            </div>
          </div>
        </div>

        {/* Theme Gallery */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-6'}>
          {filteredThemes.map((theme) => {
            const IconComponent = theme.icon
            
            return (
              <div
                key={theme.id}
                className={`${classes.card} border rounded-xl overflow-hidden transition-all cursor-pointer group ${
                  viewMode === 'list' ? 'flex items-center p-6' : 'p-6'
                }`}
                onClick={() => setSelectedTheme(theme)}
              >
                {viewMode === 'grid' ? (
                  /* Grid View */
                  <>
                    {/* Theme Preview */}
                    <div className={`aspect-video rounded-lg bg-gradient-to-br ${theme.primaryColor} mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${theme.secondaryColor} opacity-30`}></div>
                      <IconComponent className="w-12 h-12 text-white relative z-10" />
                      <div className="absolute bottom-2 right-2 text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded">
                        {theme.complexity}
                      </div>
                    </div>
                    
                    {/* Theme Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg group-hover:text-cyan-600 transition-colors">
                          {theme.name}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${classes.text} bg-gray-100`}>
                          {theme.category}
                        </span>
                      </div>
                      
                      <p className={`${classes.text} text-sm leading-relaxed`}>
                        {theme.description}
                      </p>
                      
                      {highlightGreenAqua && (
                        <div className={`text-xs ${classes.accent} bg-current/10 p-2 rounded-lg`}>
                          <strong>Green Aqua Appeal:</strong> {theme.greenAquaAppeal}
                        </div>
                      )}
                      
                      <div className="flex justify-between text-sm">
                        <span className={classes.text}>
                          {theme.implementationTime}
                        </span>
                        <span className={classes.accent}>
                          {theme.targetAudience.split(',')[0]}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* List View */
                  <>
                    <div className={`w-24 h-16 rounded-lg bg-gradient-to-br ${theme.primaryColor} flex items-center justify-center mr-6 flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-xl group-hover:text-cyan-600 transition-colors">
                          {theme.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${classes.text} bg-gray-100`}>
                            {theme.category}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${classes.accent} bg-current/10`}>
                            {theme.complexity}
                          </span>
                        </div>
                      </div>
                      
                      <p className={`${classes.text} mb-3`}>
                        {theme.description}
                      </p>
                      
                      {highlightGreenAqua && (
                        <div className={`text-sm ${classes.accent} mb-2`}>
                          <strong>Green Aqua Appeal:</strong> {theme.greenAquaAppeal}
                        </div>
                      )}
                      
                      <div className="flex justify-between text-sm">
                        <span className={classes.text}>
                          Target: {theme.targetAudience}
                        </span>
                        <span className={classes.text}>
                          Implementation: {theme.implementationTime}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>

        {/* Statistics */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className={`${classes.card} border rounded-xl p-6`}>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className={`text-sm ${classes.text}`}>Unique Themes</div>
            </div>
            <div className={`${classes.card} border rounded-xl p-6`}>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className={`text-sm ${classes.text}`}>Categories</div>
            </div>
            <div className={`${classes.card} border rounded-xl p-6`}>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className={`text-sm ${classes.text}`}>Green Aqua Ready</div>
            </div>
            <div className={`${classes.card} border rounded-xl p-6`}>
              <div className="text-4xl font-bold mb-2">1-6</div>
              <div className={`text-sm ${classes.text}`}>Days to Implement</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {highlightGreenAqua && (
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Partner with Green Aqua Hungary?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                These 15 professional themes showcase our expertise in creating 
                sophisticated digital experiences for the aquascaping industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
                >
                  <Award className="w-5 h-5" />
                  Discuss Partnership
                </a>
                <a
                  href="/themes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all"
                >
                  <Eye className="w-5 h-5" />
                  View Live Themes
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Theme Detail Modal */}
        {selectedTheme && (
          <div className={`fixed inset-0 z-50 ${classes.overlay} flex items-center justify-center p-4`}>
            <div className={`max-w-4xl w-full ${classes.card} rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto`}>
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedTheme.primaryColor} flex items-center justify-center`}>
                      <selectedTheme.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedTheme.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-sm px-2 py-1 rounded-full ${classes.text} bg-gray-100`}>
                          {selectedTheme.category}
                        </span>
                        <span className={`text-sm px-2 py-1 rounded-full ${classes.accent} bg-current/10`}>
                          {selectedTheme.complexity}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTheme(null)}
                    className={`p-2 rounded-full ${classes.text} hover:bg-gray-100 transition-colors`}
                  >
                    ✕
                  </button>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Description</h4>
                    <p className={`${classes.text} mb-6`}>{selectedTheme.description}</p>
                    
                    <h4 className="font-semibold mb-3">Target Audience</h4>
                    <p className={`${classes.text} mb-6`}>{selectedTheme.targetAudience}</p>
                    
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className={`${classes.text} space-y-2`}>
                      {selectedTheme.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${classes.accent.replace('text-', 'bg-')}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    {highlightGreenAqua && (
                      <>
                        <h4 className="font-semibold mb-3">Green Aqua Partnership Appeal</h4>
                        <p className={`${classes.accent} bg-current/10 p-4 rounded-lg mb-6`}>
                          {selectedTheme.greenAquaAppeal}
                        </p>
                      </>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`${classes.card} border p-4 rounded-lg text-center`}>
                        <div className="font-bold text-lg">{selectedTheme.implementationTime}</div>
                        <div className={`text-sm ${classes.text}`}>Implementation Time</div>
                      </div>
                      <div className={`${classes.card} border p-4 rounded-lg text-center`}>
                        <div className="font-bold text-lg">{selectedTheme.complexity}</div>
                        <div className={`text-sm ${classes.text}`}>Complexity Level</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}