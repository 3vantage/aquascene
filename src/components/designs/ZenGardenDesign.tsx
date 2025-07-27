import React, { useState, useEffect } from 'react'
import { products } from '@/data/products'
import { Waves, Circle, Heart, Wind, Leaf, MoreHorizontal } from 'lucide-react'

export function ZenGardenDesign() {
  const [isBreathing, setIsBreathing] = useState(false)
  const [ripplePositions, setRipplePositions] = useState<Array<{x: number, y: number, id: number}>>([])
  const [flowParticles, setFlowParticles] = useState<Array<{x: number, y: number, id: number, direction: number}>>([])
  const [nextId, setNextId] = useState(0)

  const zenProducts = products.filter(p => 
    ['plant', 'stone', 'soil'].includes(p.category)
  ).slice(0, 6)

  // Generate ripple on click
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    const newRipple = { x, y, id: nextId }
    setRipplePositions(prev => [...prev, newRipple])
    setNextId(prev => prev + 1)
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipplePositions(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 2000)
  }

  // Initialize flow particles
  useEffect(() => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      id: i,
      direction: Math.random() * 360
    }))
    setFlowParticles(particles)

    const interval = setInterval(() => {
      setFlowParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + Math.cos(particle.direction * Math.PI / 180) * 0.1) % 100,
        y: (particle.y + Math.sin(particle.direction * Math.PI / 180) * 0.1) % 100,
        direction: particle.direction + (Math.random() - 0.5) * 5
      })))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0c4a6e 0%, #075985 25%, #0369a1 50%, #0284c7 75%, #0ea5e9 100%)'
      }}
    >
      {/* Aquarium Water Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Water Caustics Animation */}
        <div className="absolute inset-0 opacity-15">
          <div className="water-caustics w-full h-full animate-water-flow"></div>
        </div>
        
        {/* Gentle Water Movement */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-blue-900/20 water-wave"></div>
        
        {/* Deep Water Depth Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
      </div>
      
      {/* Floating Water Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {flowParticles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-300/60 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 4px rgba(103, 232, 249, 0.4)'
            }}
          />
        ))}
      </div>

      {/* Interactive Ripple Container */}
      <div 
        className="fixed inset-0 pointer-events-auto z-20 cursor-crosshair"
        onClick={handleContainerClick}
      >
        {ripplePositions.map(ripple => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="zen-ripple w-4 h-4 border-2 border-cyan-400/60 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 pointer-events-none">
        
        {/* Hero Section */}
        <section className="pt-20 pb-32 text-center pointer-events-auto">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Breathing Circle Animation */}
              <div className="mb-12 flex justify-center">
                <div 
                  className={`w-32 h-32 rounded-full border-4 border-cyan-400/40 flex items-center justify-center cursor-pointer transition-all duration-1000 ${
                    isBreathing ? 'breathing-animation' : 'hover:scale-110'
                  }`}
                  onClick={() => setIsBreathing(!isBreathing)}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-300/50 to-blue-300/50 flex items-center justify-center">
                    <Heart className={`w-8 h-8 text-cyan-600 ${isBreathing ? 'animate-pulse' : ''}`} />
                  </div>
                </div>
              </div>
              
              <h1 className="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent">
                  Find Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-cyan-100 to-white bg-clip-text text-transparent font-extralight">
                  Flow
                </span>
              </h1>
              
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                Create a space of tranquility where water, stone, and life move in perfect harmony. 
                Every element carefully placed to inspire peace and contemplation.
              </p>
              
              <div className="text-sm text-cyan-200/80 mb-8 italic">
                Click anywhere to create ripples • {isBreathing ? 'Breathing with you' : 'Click the circle to breathe together'}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-gradient-to-r from-cyan-500/80 to-blue-500/80 backdrop-blur-sm text-white px-10 py-4 rounded-full font-light text-lg hover:from-cyan-600/80 hover:to-blue-600/80 transition-all transform hover:scale-105 shadow-lg border border-white/20">
                  <span className="flex items-center gap-3">
                    <Circle className="w-5 h-5 group-hover:animate-spin" />
                    Begin Journey
                  </span>
                </button>
                <button className="border-2 border-cyan-400/60 text-cyan-700 px-10 py-4 rounded-full font-light text-lg hover:bg-cyan-50 transition-all backdrop-blur-sm">
                  Meditation Guide
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Zen Elements Grid */}
        <section className="py-32 pointer-events-auto">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-20">
                <h2 className="font-display font-light text-5xl text-gray-700 mb-6">
                  Elements of Harmony
                </h2>
                <p className="text-lg text-gray-600 font-light">
                  Each piece chosen for its ability to create balance and inspire mindfulness
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {zenProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="zen-card group relative"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/80 transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1 shadow-xl border border-white/30 group-hover:shadow-2xl">
                      
                      {/* Floating Ripple Effect on Hover */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-cyan-300/20 rounded-full group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:left-0 transition-all duration-1000 transform -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                      </div>
                      
                      {/* Product Visual */}
                      <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-cyan-100 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-cyan-200/20"></div>
                        
                        <div className="relative z-10 text-center">
                          {product.category === 'plant' && (
                            <div className="space-y-2">
                              <Leaf className="w-16 h-16 text-green-600 mx-auto" />
                              <div className="flex justify-center space-x-1">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="w-2 h-6 bg-green-400 rounded-full floating-leaf" style={{animationDelay: `${i * 0.3}s`}} />
                                ))}
                              </div>
                            </div>
                          )}
                          {product.category === 'stone' && (
                            <div className="space-y-2">
                              <div className="w-16 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg mx-auto shadow-lg"></div>
                              <div className="flex justify-center space-x-2">
                                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                              </div>
                            </div>
                          )}
                          {product.category === 'soil' && (
                            <div className="space-y-2">
                              <div className="w-16 h-8 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full mx-auto"></div>
                              <div className="flex justify-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <div key={i} className="w-1 h-1 bg-amber-500 rounded-full soil-grain" style={{animationDelay: `${i * 0.2}s`}} />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Subtle particle effects */}
                        <div className="absolute inset-0">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-cyan-300/40 rounded-full zen-particle"
                              style={{
                                top: `${20 + (i * 15)}%`,
                                left: `${10 + (i * 12)}%`,
                                animationDelay: `${i * 0.8}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-8 relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <span className="text-xs font-medium text-cyan-600 bg-cyan-100/50 px-3 py-1 rounded-full uppercase tracking-wider">
                            {product.category}
                          </span>
                          <div className="text-right">
                            <div className="font-light text-2xl text-gray-700">
                              €{product.price}
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="font-medium text-lg text-gray-800 mb-4 group-hover:text-cyan-700 transition-colors line-clamp-2">
                          {product.name.replace(/^[^-]*-\s*/, '')}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-6 line-clamp-3 font-light leading-relaxed">
                          {product.description}
                        </p>
                        
                        <button className="w-full bg-gradient-to-r from-gray-200/80 to-cyan-200/80 text-gray-700 py-3 rounded-full font-light hover:from-cyan-300/80 hover:to-blue-300/80 hover:text-white transition-all transform hover:scale-105 shadow-md backdrop-blur-sm border border-white/30">
                          Add to Collection
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meditation Principles */}
        <section className="py-32 bg-gradient-to-r from-white/50 to-cyan-50/50 backdrop-blur-sm pointer-events-auto">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-20">
                <h2 className="font-display font-light text-5xl text-gray-700 mb-6">
                  Principles of Flow
                </h2>
                <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
                  Ancient wisdom meets modern aquascaping. Create not just beauty, but a living meditation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {[
                  {
                    icon: <Circle className="w-8 h-8" />,
                    title: "Ma (間)",
                    subtitle: "Negative Space",
                    description: "The power of emptiness to create breathing room and visual rest"
                  },
                  {
                    icon: <Waves className="w-8 h-8" />,
                    title: "Nagare (流れ)",
                    subtitle: "Natural Flow",
                    description: "Water's path teaches us about organic movement and gentle persistence"
                  },
                  {
                    icon: <Wind className="w-8 h-8" />,
                    title: "Wabi-Sabi",
                    subtitle: "Imperfect Beauty",
                    description: "Finding beauty in asymmetry, weathering, and the passage of time"
                  },
                  {
                    icon: <MoreHorizontal className="w-8 h-8" />,
                    title: "Kanso (簡素)",
                    subtitle: "Simplicity",
                    description: "Eliminating the unnecessary to reveal essential beauty"
                  }
                ].map((principle, index) => (
                  <div key={index} className="zen-principle text-center group">
                    <div className="w-24 h-24 bg-gradient-to-br from-white/80 to-cyan-100/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 border border-white/40 shadow-lg">
                      <div className="text-cyan-600 group-hover:text-cyan-700 transition-colors">
                        {principle.icon}
                      </div>
                    </div>
                    <h3 className="font-medium text-xl text-gray-800 mb-2">{principle.title}</h3>
                    <h4 className="font-light text-sm text-cyan-600 mb-4 uppercase tracking-wider">{principle.subtitle}</h4>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mindful Contact Form */}
        <section className="py-32 pointer-events-auto">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              
              <div className="mb-12">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-300/30 to-blue-300/30 rounded-full flex items-center justify-center mx-auto mb-6 breathing-slow">
                  <Circle className="w-8 h-8 text-cyan-600" />
                </div>
                
                <h2 className="font-display font-light text-5xl text-gray-700 mb-6">
                  Begin Your Practice
                </h2>
                <p className="text-lg text-gray-600 font-light">
                  Start your journey toward creating a space that nurtures both aquatic life and inner peace.
                </p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-8 py-5 bg-white/70 backdrop-blur-md border border-cyan-200/50 rounded-2xl text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all font-light"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-8 py-5 bg-white/70 backdrop-blur-md border border-cyan-200/50 rounded-2xl text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all font-light"
                  />
                </div>
                <select className="w-full px-8 py-5 bg-white/70 backdrop-blur-md border border-cyan-200/50 rounded-2xl text-gray-700 focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all font-light">
                  <option value="">What brings you to aquascaping?</option>
                  <option value="meditation">Meditation and mindfulness</option>
                  <option value="beauty">Creating natural beauty</option>
                  <option value="hobby">New hobby exploration</option>
                  <option value="wellness">Wellness and stress relief</option>
                </select>
                <textarea
                  placeholder="Share your vision for your peaceful space..."
                  rows={5}
                  className="w-full px-8 py-5 bg-white/70 backdrop-blur-md border border-cyan-200/50 rounded-2xl text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all resize-none font-light"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400/80 to-blue-400/80 backdrop-blur-sm text-white py-5 rounded-2xl font-light text-lg hover:from-cyan-500/80 hover:to-blue-500/80 transition-all transform hover:scale-105 shadow-lg border border-white/20"
                >
                  Begin This Journey
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}