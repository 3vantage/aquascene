import React, { useState, useEffect } from 'react'
import { products } from '@/data/products'
import { TimelapseAssetVideo } from '@/components/AssetVideo'
import { AquariumAssetImage } from '@/components/AssetImage'
import { Play, ArrowRight, CheckCircle, Clock, Droplets, Leaf, Fish, Mountain } from 'lucide-react'

interface TimelineStep {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  duration: string
  products: string[]
  color: string
  bgColor: string
}

export function AquascapingTimelineDesign() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const timelineSteps: TimelineStep[] = [
    {
      id: 'planning',
      title: 'Planning & Design',
      description: 'Sketch your vision, choose tank size, and plan the layout using the golden ratio and rule of thirds.',
      icon: <Mountain className="w-8 h-8" />,
      duration: '1-2 days',
      products: [],
      color: 'text-purple-400',
      bgColor: 'from-purple-500/20 to-indigo-500/20'
    },
    {
      id: 'substrate',
      title: 'Add Substrate',
      description: 'Layer nutrient-rich aqua soil to create the foundation for healthy plant growth.',
      icon: <div className="w-8 h-8 bg-amber-600 rounded-full"></div>,
      duration: '30 minutes',
      products: ['ada-aqua-soil-amazonia'],
      color: 'text-amber-400',
      bgColor: 'from-amber-500/20 to-orange-500/20'
    },
    {
      id: 'hardscape',
      title: 'Create Hardscape',
      description: 'Position stones and driftwood to create depth, focal points, and natural pathways.',
      icon: <Mountain className="w-8 h-8" />,
      duration: '2-3 hours',
      products: ['wild-rhino-stone'],
      color: 'text-gray-400',
      bgColor: 'from-gray-500/20 to-slate-500/20'
    },
    {
      id: 'planting',
      title: 'Plant Installation',
      description: 'Carefully plant according to zones: foreground carpets, midground features, background stems.',
      icon: <Leaf className="w-8 h-8" />,
      duration: '1-2 hours',
      products: ['alternanthera-reineckii-mini', 'micranthemum-monte-carlo', 'taxiphyllum-spiky-moss', 'anubias-barteri-nana'],
      color: 'text-green-400',
      bgColor: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'filling',
      title: 'Fill With Water',
      description: 'Slowly add water using a plate to avoid disturbing the substrate and plants.',
      icon: <Droplets className="w-8 h-8" />,
      duration: '45 minutes',
      products: [],
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'cycling',
      title: 'Nitrogen Cycle',
      description: 'Allow beneficial bacteria to establish over 4-6 weeks. Add fertilizers and monitor parameters.',
      icon: <div className="w-8 h-8 rounded-full border-4 border-emerald-400 border-dashed animate-spin"></div>,
      duration: '4-6 weeks',
      products: ['green-aqua-wellness-pack'],
      color: 'text-emerald-400',
      bgColor: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 'livestock',
      title: 'Add Fish & Life',
      description: 'Introduce fish and invertebrates gradually to complete your thriving ecosystem.',
      icon: <Fish className="w-8 h-8" />,
      duration: '1-2 weeks',
      products: ['betta-splendens-crown-tail'],
      color: 'text-orange-400',
      bgColor: 'from-orange-500/20 to-red-500/20'
    }
  ]

  const stepProducts = timelineSteps[currentStep]?.products.map(id => 
    products.find(p => p.id === id)
  ).filter((product): product is NonNullable<typeof product> => Boolean(product)) || []

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev < timelineSteps.length - 1) {
            setCompletedSteps(completed => [...completed, prev])
            return prev + 1
          } else {
            setIsAutoPlaying(false)
            return prev
          }
        })
      }, 4000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, timelineSteps.length])

  const startAutoPlay = () => {
    setCurrentStep(0)
    setCompletedSteps([])
    setIsAutoPlaying(true)
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Aquascaping
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Timeline
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Follow the step-by-step journey from empty tank to thriving aquatic ecosystem. 
            Watch each stage unfold with precise timing and expert guidance.
          </p>
          
          <button
            onClick={startAutoPlay}
            disabled={isAutoPlaying}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center gap-3">
              <Play className="w-6 h-6" />
              {isAutoPlaying ? 'Playing Timeline...' : 'Start Time-lapse'}
            </span>
          </button>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Timeline Progress */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-700 rounded-full"></div>
              <div 
                className="absolute left-0 top-1/2 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                style={{ width: `${(currentStep / (timelineSteps.length - 1)) * 100}%` }}
              ></div>
              
              {/* Timeline Steps */}
              <div className="relative flex justify-between">
                {timelineSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(index)}
                    className={`relative group ${index === currentStep ? 'z-20' : 'z-10'}`}
                  >
                    <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                      completedSteps.includes(index) 
                        ? 'bg-green-500 border-green-400 text-white' 
                        : index === currentStep
                        ? `bg-gradient-to-br ${step.bgColor} border-white text-white scale-110`
                        : 'bg-gray-700 border-gray-600 text-gray-400 hover:border-gray-500'
                    }`}>
                      {completedSteps.includes(index) ? (
                        <CheckCircle className="w-8 h-8" />
                      ) : (
                        <div className={step.color}>
                          {step.icon}
                        </div>
                      )}
                    </div>
                    
                    {/* Step Label */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
                      <div className={`font-semibold text-sm ${
                        index === currentStep ? 'text-white' : 'text-gray-400'
                      }`}>
                        Step {index + 1}
                      </div>
                      <div className={`text-xs mt-1 whitespace-nowrap ${
                        index === currentStep ? 'text-cyan-300' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Current Step Details */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Step Information */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${timelineSteps[currentStep].bgColor} flex items-center justify-center`}>
                      <div className={timelineSteps[currentStep].color}>
                        {timelineSteps[currentStep].icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-4xl text-white">
                        {timelineSteps[currentStep].title}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{timelineSteps[currentStep].duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {timelineSteps[currentStep].description}
                  </p>
                </div>

                {/* Required Products */}
                {stepProducts.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-xl text-white mb-4">Required Products:</h3>
                    <div className="space-y-3">
                      {stepProducts.map(product => (
                        <div key={product.id} className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gray-600">
                          <div>
                            <h4 className="font-semibold text-white">{product.name}</h4>
                            <p className="text-sm text-gray-300 capitalize">{product.category}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg text-cyan-300">€{product.price}</div>
                            <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="px-6 py-3 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous Step
                  </button>
                  <button
                    onClick={() => setCurrentStep(Math.min(timelineSteps.length - 1, currentStep + 1))}
                    disabled={currentStep === timelineSteps.length - 1}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Visual Representation */}
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Tank Frame */}
                  <div className="absolute inset-0 border-8 border-gray-600 rounded-lg overflow-hidden">
                    {/* Background Asset */}
                    <AquariumAssetImage 
                      themeId="timeline"
                      className="absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-800/60"></div>
                    
                    {/* Substrate Layer */}
                    {currentStep >= 1 && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-800 to-amber-600 substrate-appear">
                        <div className="absolute inset-0 opacity-50 substrate-texture"></div>
                      </div>
                    )}
                    
                    {/* Hardscape Elements */}
                    {currentStep >= 2 && (
                      <>
                        <div className="absolute bottom-16 left-8 w-20 h-16 bg-gray-600 rounded-lg transform rotate-12 hardscape-appear"></div>
                        <div className="absolute bottom-16 right-12 w-16 h-20 bg-gray-700 rounded-lg transform -rotate-6 hardscape-appear" style={{animationDelay: '0.5s'}}></div>
                      </>
                    )}
                    
                    {/* Plants */}
                    {currentStep >= 3 && (
                      <>
                        {/* Foreground plants */}
                        <div className="absolute bottom-16 left-4 w-8 h-8 bg-green-500 rounded-full plant-grow"></div>
                        <div className="absolute bottom-16 right-4 w-6 h-6 bg-green-400 rounded-full plant-grow" style={{animationDelay: '0.3s'}}></div>
                        {/* Background plants */}
                        <div className="absolute bottom-20 left-1/2 w-4 h-12 bg-green-600 rounded-t-full plant-grow" style={{animationDelay: '0.6s'}}></div>
                        <div className="absolute bottom-20 left-1/3 w-3 h-10 bg-green-500 rounded-t-full plant-grow" style={{animationDelay: '0.9s'}}></div>
                      </>
                    )}
                    
                    {/* Water Level */}
                    {currentStep >= 4 && (
                      <div className="absolute inset-x-0 top-8 bottom-0 bg-gradient-to-b from-cyan-500/20 to-blue-600/30 water-fill">
                        <div className="absolute inset-0 water-ripple-effect opacity-30"></div>
                      </div>
                    )}
                    
                    {/* Bubbles during cycling */}
                    {currentStep >= 5 && (
                      <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/40 rounded-full bubble-rise"
                            style={{
                              left: `${20 + (i * 10)}%`,
                              bottom: '20%',
                              animationDelay: `${i * 0.5}s`
                            }}
                          />
                        ))}
                      </div>
                    )}
                    
                    {/* Fish */}
                    {currentStep >= 6 && (
                      <>
                        <div className="absolute top-1/3 left-1/4 w-8 h-6 text-orange-400 fish-swim-in">
                          <Fish className="w-full h-full" />
                        </div>
                        <div className="absolute top-1/2 right-1/4 w-6 h-4 text-blue-400 fish-swim-in" style={{animationDelay: '1s'}}>
                          <Fish className="w-full h-full transform scale-x-[-1]" />
                        </div>
                      </>
                    )}
                    
                    {/* Step Progress Indicator */}
                    <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-semibold text-white">
                      Step {currentStep + 1} of {timelineSteps.length}
                    </div>
                  </div>
                </div>
                
                {/* Current Step Highlight */}
                <div className="mt-8 text-center">
                  <h3 className="font-bold text-2xl text-white mb-2">
                    {timelineSteps[currentStep].title}
                  </h3>
                  <p className="text-gray-300">
                    {timelineSteps[currentStep].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-t from-black/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-5xl text-white mb-8">
              Start Your Timeline
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Ready to begin your aquascaping journey? Let us guide you through each step.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <select className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                <option value="">Select Tank Size</option>
                <option value="small">Small (20-40L)</option>
                <option value="medium">Medium (50-100L)</option>
                <option value="large">Large (120L+)</option>
              </select>
              <textarea
                placeholder="What's your aquascaping goal?"
                rows={4}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Begin My Aquascaping Timeline
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}