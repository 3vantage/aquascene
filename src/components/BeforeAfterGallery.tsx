'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Play, Maximize2, Eye, Palette, Sparkles } from 'lucide-react'

interface BeforeAfterProject {
  id: string
  title: string
  theme: string
  description: string
  beforeImage: string
  afterImage: string
  transformationType: 'complete-redesign' | 'theme-switch' | 'enhancement'
  duration: string
  complexity: 'simple' | 'medium' | 'complex'
  tags: string[]
}

interface BeforeAfterGalleryProps {
  variant?: 'light' | 'dark' | 'gradient'
  className?: string
  showLightbox?: boolean
  maxItems?: number
}

// Sample transformation projects showcasing the 15 themes
const transformationProjects: BeforeAfterProject[] = [
  {
    id: '1',
    title: 'Minimalist Corporate Transformation',
    theme: 'Minimalist Professional',
    description: 'Transformed a cluttered business site into a clean, professional Green Aqua-inspired design',
    beforeImage: '/api/placeholder/600/400',
    afterImage: '/api/placeholder/600/400',
    transformationType: 'complete-redesign',
    duration: '2 days',
    complexity: 'medium',
    tags: ['Corporate', 'Clean Design', 'Green Aqua Style']
  },
  {
    id: '2',
    title: 'Modern E-commerce Revolution',
    theme: 'Modern E-commerce',
    description: 'Elevated a basic product catalog to a sophisticated dark-mode shopping experience',
    beforeImage: '/api/placeholder/600/400',
    afterImage: '/api/placeholder/600/400',
    transformationType: 'complete-redesign',
    duration: '3 days',
    complexity: 'complex',
    tags: ['E-commerce', 'Dark Mode', 'Product Showcase']
  },
  {
    id: '3',
    title: 'Nature-Inspired Immersion',
    theme: 'Nature Immersive',
    description: 'Converted static content into flowing, organic aquatic-themed experience',
    beforeImage: '/api/placeholder/600/400',
    afterImage: '/api/placeholder/600/400',
    transformationType: 'theme-switch',
    duration: '2 days',
    complexity: 'medium',
    tags: ['Nature Theme', 'Animations', 'Aquatic Design']
  },
  {
    id: '4',
    title: 'Portfolio Excellence Showcase',
    theme: 'Portfolio Showcase',
    description: 'Enhanced photography presentation with elegant gallery layouts',
    beforeImage: '/api/placeholder/600/400',
    afterImage: '/api/placeholder/600/400',
    transformationType: 'enhancement',
    duration: '1 day',
    complexity: 'simple',
    tags: ['Portfolio', 'Photography', 'Gallery Design']
  },
  {
    id: '5',
    title: 'Hungarian Business Localization',
    theme: 'Hungarian Business',
    description: 'Adapted design for Hungarian market with bilingual support and local aesthetics',
    beforeImage: '/api/placeholder/600/400',
    afterImage: '/api/placeholder/600/400',
    transformationType: 'complete-redesign',
    duration: '4 days',
    complexity: 'complex',
    tags: ['Localization', 'Hungarian Market', 'Bilingual']
  },
  {
    id: '6',
    title: 'Underwater Ecosystem Experience',
    theme: 'Underwater Ecosystem',
    description: 'Created immersive aquatic environment with advanced visual effects',
    beforeImage: '/api/placeholder/600/400',
    afterImage: '/api/placeholder/600/400',
    transformationType: 'complete-redesign',
    duration: '5 days',
    complexity: 'complex',
    tags: ['Immersive', 'Aquatic Effects', 'Advanced Design']
  }
]

export function BeforeAfterGallery({ 
  variant = 'light', 
  className = '', 
  showLightbox = true,
  maxItems 
}: BeforeAfterGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<BeforeAfterProject | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [activeView, setActiveView] = useState<'grid' | 'slider'>('grid')

  const displayedProjects = maxItems ? transformationProjects.slice(0, maxItems) : transformationProjects

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % displayedProjects.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? displayedProjects.length - 1 : prev - 1)
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return {
          container: 'bg-gray-900 text-white',
          card: 'bg-gray-800 border-gray-700',
          accent: 'text-cyan-400',
          text: 'text-gray-300',
          overlay: 'bg-black/90'
        }
      case 'gradient':
        return {
          container: 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white',
          card: 'bg-white/10 backdrop-blur-md border-white/20',
          accent: 'text-cyan-200',
          text: 'text-white/90',
          overlay: 'bg-gradient-to-br from-cyan-900/95 to-blue-900/95'
        }
      default:
        return {
          container: 'bg-gray-50 text-gray-900',
          card: 'bg-white border-gray-200',
          accent: 'text-cyan-600',
          text: 'text-gray-600',
          overlay: 'bg-white/95 backdrop-blur-md'
        }
    }
  }

  const classes = getVariantClasses()

  const BeforeAfterSlider = ({ project }: { project: BeforeAfterProject }) => {
    return (
      <div className="relative overflow-hidden rounded-xl aspect-video group">
        {/* Before Image */}
        <div 
          className="absolute inset-0 bg-gray-200 flex items-center justify-center"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-sm font-semibold mb-2">BEFORE</div>
              <div className="text-xs">Basic Design</div>
            </div>
          </div>
        </div>
        
        {/* After Image */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-sm font-semibold mb-2">AFTER</div>
              <div className="text-xs">{project.theme}</div>
            </div>
          </div>
        </div>
        
        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10 flex items-center justify-center"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={(e) => {
            const rect = e.currentTarget.parentElement!.getBoundingClientRect()
            const handleMouseMove = (e: MouseEvent) => {
              const percentage = ((e.clientX - rect.left) / rect.width) * 100
              setSliderPosition(Math.max(0, Math.min(100, percentage)))
            }
            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove)
              document.removeEventListener('mouseup', handleMouseUp)
            }
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
          }}
        >
          <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-1 h-4 bg-gray-400 rounded"></div>
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
          BEFORE
        </div>
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
          AFTER
        </div>
      </div>
    )
  }

  return (
    <section className={`py-16 ${classes.container} ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className={`w-8 h-8 ${classes.accent}`} />
            <h2 className="text-3xl md:text-4xl font-bold">
              Design Transformations
            </h2>
            <Sparkles className={`w-8 h-8 ${classes.accent}`} />
          </div>
          <p className={`text-lg ${classes.text} max-w-3xl mx-auto mb-8`}>
            Experience the power of our 15 unique design themes. Each transformation showcases 
            how we can elevate your brand with professional aquascaping-inspired aesthetics, 
            perfect for impressing partners like <span className={classes.accent}>Green Aqua Hungary</span>.
          </p>
          
          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className={`inline-flex rounded-lg p-1 ${classes.card} border`}>
              <button
                onClick={() => setActiveView('grid')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeView === 'grid' 
                    ? `${classes.accent.replace('text-', 'bg-')} text-white` 
                    : `${classes.text} hover:bg-gray-100`
                }`}
              >
                <Eye className="w-4 h-4 inline mr-2" />
                Gallery View
              </button>
              <button
                onClick={() => setActiveView('slider')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeView === 'slider' 
                    ? `${classes.accent.replace('text-', 'bg-')} text-white` 
                    : `${classes.text} hover:bg-gray-100`
                }`}
              >
                <Palette className="w-4 h-4 inline mr-2" />
                Interactive View
              </button>
            </div>
          </div>
        </div>

        {activeView === 'grid' ? (
          /* Gallery Grid View */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className={`${classes.card} border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group`}
                onClick={() => showLightbox && setSelectedProject(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 opacity-50"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Maximize2 className="w-12 h-12 text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="text-white font-semibold">{project.theme}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${classes.accent} bg-current/10`}>
                      {project.complexity}
                    </span>
                  </div>
                  
                  <p className={`${classes.text} text-sm mb-4 leading-relaxed`}>
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag} 
                          className={`text-xs px-2 py-1 rounded-full ${classes.text} bg-gray-100`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={`text-sm ${classes.text}`}>
                      {project.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Interactive Slider View */
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <BeforeAfterSlider project={displayedProjects[currentSlide]} />
              
              {/* Navigation */}
              <button
                onClick={prevSlide}
                className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${classes.card} border shadow-lg hover:shadow-xl transition-all`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${classes.card} border shadow-lg hover:shadow-xl transition-all`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Project Info */}
            <div className={`mt-8 p-6 ${classes.card} border rounded-xl`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold mb-2 md:mb-0">
                  {displayedProjects[currentSlide].title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${classes.accent} bg-current/10`}>
                    {displayedProjects[currentSlide].theme}
                  </span>
                  <span className={`text-sm ${classes.text}`}>
                    {displayedProjects[currentSlide].duration}
                  </span>
                </div>
              </div>
              
              <p className={`${classes.text} mb-4`}>
                {displayedProjects[currentSlide].description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {displayedProjects[currentSlide].tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`text-sm px-3 py-1 rounded-full ${classes.text} bg-gray-100`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {displayedProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? classes.accent.replace('text-', 'bg-')
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">15</div>
              <div className={`text-sm ${classes.text}`}>Unique Themes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3 Days</div>
              <div className={`text-sm ${classes.text}`}>Average Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className={`text-sm ${classes.text}`}>Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Green Aqua</div>
              <div className={`text-sm ${classes.text}`}>Partnership Ready</div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {showLightbox && selectedProject && (
          <div className={`fixed inset-0 z-50 ${classes.overlay} flex items-center justify-center p-4`}>
            <div className={`max-w-4xl w-full ${classes.card} rounded-2xl overflow-hidden`}>
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {/* Interactive Slider */}
                <BeforeAfterSlider project={selectedProject} />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className={`${classes.text} mb-4`}>{selectedProject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`text-sm px-3 py-1 rounded-full ${classes.accent} bg-current/10`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className={classes.text}>Theme: {selectedProject.theme}</span>
                  <span className={classes.text}>Duration: {selectedProject.duration}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}