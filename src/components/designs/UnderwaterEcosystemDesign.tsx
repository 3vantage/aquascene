import React, { useEffect, useState } from 'react'
import { products } from '@/data/products'
import { Fish, Waves, Droplets, Eye, ShoppingCart } from 'lucide-react'

export function UnderwaterEcosystemDesign() {
  const [scrollY, setScrollY] = useState(0)
  const featuredProducts = products.filter(p => p.featured)
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 min-h-screen text-white overflow-hidden">
      {/* Aquarium Frame - Fixed positioning to create immersive effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="aquarium-frame h-full w-full border-8 border-gray-700 rounded-lg shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-600 to-gray-700 rounded-t"></div>
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-gray-600 to-gray-700 rounded-b"></div>
        </div>
      </div>

      {/* Swimming Fish - Animated across different depths */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {/* Tropical Fish 1 */}
        <div className="fish-swim-1 absolute top-1/4 left-0 w-16 h-12 text-yellow-400 opacity-80">
          <Fish className="w-full h-full transform scale-x-[-1]" />
        </div>
        
        {/* Tropical Fish 2 */}
        <div className="fish-swim-2 absolute top-1/2 right-0 w-12 h-8 text-orange-400 opacity-70">
          <Fish className="w-full h-full" />
        </div>
        
        {/* Deep Sea Fish */}
        <div className="fish-swim-3 absolute top-3/4 left-0 w-20 h-14 text-purple-300 opacity-60">
          <Fish className="w-full h-full transform scale-x-[-1]" />
        </div>
        
        {/* Small School Fish */}
        <div className="fish-school absolute top-1/3 left-1/4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-6 h-4 text-cyan-300 opacity-50"
              style={{
                top: `${i * 8}px`,
                left: `${i * 12}px`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              <Fish className="w-full h-full transform scale-x-[-1]" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Bubbles */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bubble absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 6}s`
            }}
          />
        ))}
      </div>

      {/* Water Caustics Effect */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="water-caustics absolute inset-0 opacity-30"></div>
      </div>

      {/* Main Content with Parallax */}
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div 
            className="container mx-auto px-4 text-center"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <h1 className="font-display font-bold text-7xl lg:text-8xl mb-8 leading-tight">
              <span className="underwater-text-glow bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Dive Into
              </span>
              <br />
              <span className="underwater-text-glow bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Wonder
              </span>
            </h1>
            
            <p className="text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the mesmerizing beauty of underwater life. Create your own 
              aquatic paradise with our premium collection of aquascaping essentials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-5 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl underwater-glow">
                <span className="flex items-center gap-3">
                  <Eye className="w-6 h-6" />
                  Explore Depths
                </span>
              </button>
              <button className="border-2 border-cyan-400 text-cyan-200 px-12 py-5 rounded-full font-semibold text-lg hover:bg-cyan-400/20 transition-all backdrop-blur-sm">
                Watch Fish Swim
              </button>
            </div>
          </div>

          {/* Depth Indicator */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-cyan-300 font-mono">
            <div className="writing-mode-vertical text-sm opacity-60">
              DEPTH: 0m - SURFACE LEVEL
            </div>
          </div>
        </section>

        {/* Product Cards Swimming Through */}
        <section className="py-32 relative">
          <div 
            className="container mx-auto px-4"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <div className="text-center mb-20">
              <h2 className="font-display font-bold text-6xl text-white mb-6 underwater-text-glow">
                Marine Collection
              </h2>
              <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
                Each product carefully selected to thrive in your underwater ecosystem
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="product-float group relative"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="underwater-card bg-white/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 shadow-2xl">
                    
                    {/* Product Image Placeholder with Category Icon */}
                    <div className="aspect-square relative bg-gradient-to-br from-cyan-200/20 to-blue-300/20 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 underwater-shimmer opacity-50"></div>
                      <div className="relative z-10">
                        {product.category === 'soil' && <Droplets className="w-20 h-20 text-amber-300" />}
                        {product.category === 'stone' && <Waves className="w-20 h-20 text-gray-300" />}
                        {product.category === 'plant' && <div className="w-20 h-20 rounded-full bg-green-400 flex items-center justify-center text-green-900 font-bold text-sm">PLANT</div>}
                        {product.category === 'fish' && <Fish className="w-20 h-20 text-orange-300" />}
                        {product.category === 'fertilizer' && <div className="w-20 h-20 rounded-full bg-emerald-400 flex items-center justify-center text-emerald-900 font-bold text-xs">FERT</div>}
                      </div>
                      
                      {/* Floating particles around product */}
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-cyan-300/40 rounded-full particle-float"
                            style={{
                              top: `${Math.random() * 80 + 10}%`,
                              left: `${Math.random() * 80 + 10}%`,
                              animationDelay: `${Math.random() * 3}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-xs font-semibold text-cyan-300 bg-cyan-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
                          {product.category}
                        </span>
                        <div className="text-right">
                          <div className="font-bold text-2xl text-cyan-200">
                            €{product.price}
                          </div>
                          <div className="text-xs text-cyan-400">EUR</div>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-xl text-white mb-4 group-hover:text-cyan-200 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-cyan-200 text-sm mb-6 line-clamp-3 opacity-90">
                        {product.description}
                      </p>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        Add to Ecosystem
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Depth Indicator */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-cyan-300 font-mono">
            <div className="writing-mode-vertical text-sm opacity-60">
              DEPTH: 5m - CORAL REEF ZONE
            </div>
          </div>
        </section>

        {/* Ecosystem Balance Section */}
        <section className="py-32 relative">
          <div 
            className="container mx-auto px-4"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display font-bold text-6xl text-white mb-8 underwater-text-glow">
                Perfect Balance
              </h2>
              <p className="text-xl text-cyan-100 mb-16">
                Every element in your aquarium works together to create a thriving ecosystem
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: <Droplets className="w-12 h-12" />, title: "Water Chemistry", desc: "pH, hardness, and nutrients in perfect harmony" },
                  { icon: <Fish className="w-12 h-12" />, title: "Living Inhabitants", desc: "Fish and invertebrates that create natural cycles" },
                  { icon: <Waves className="w-12 h-12" />, title: "Natural Filtration", desc: "Plants and beneficial bacteria maintain clarity" },
                  { icon: <Eye className="w-12 h-12" />, title: "Visual Flow", desc: "Aesthetic placement following nature's principles" }
                ].map((item, index) => (
                  <div key={index} className="ecosystem-element group">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 border border-cyan-400/30 backdrop-blur-sm">
                      <div className="text-cyan-300 group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-white mb-4">{item.title}</h3>
                    <p className="text-cyan-200 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Depth Indicator */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-cyan-300 font-mono">
            <div className="writing-mode-vertical text-sm opacity-60">
              DEPTH: 10m - DEEP ECOSYSTEM
            </div>
          </div>
        </section>

        {/* Contact Form - Deep Ocean Theme */}
        <section className="py-32 bg-gradient-to-b from-transparent to-indigo-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display font-bold text-6xl text-white mb-8 underwater-text-glow">
                Dive Deeper
              </h2>
              <p className="text-xl text-cyan-100 mb-12">
                Ready to create your underwater masterpiece? Let's start your aquascaping journey.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-8 py-5 bg-white/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl text-white placeholder-cyan-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-8 py-5 bg-white/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl text-white placeholder-cyan-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Tank Size (in liters)"
                  className="w-full px-8 py-5 bg-white/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl text-white placeholder-cyan-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                />
                <textarea
                  placeholder="Describe your dream aquascape..."
                  rows={5}
                  className="w-full px-8 py-5 bg-white/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl text-white placeholder-cyan-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-5 rounded-2xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl underwater-glow"
                >
                  Begin Aquascaping Journey
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}