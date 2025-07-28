import React from 'react'
import { products } from '@/data/products'
import { ImmersiveAssetVideo } from '@/components/AssetVideo'
import { Waves, Fish, Leaf, Droplets } from 'lucide-react'

export function NatureDesign() {
  const featuredProducts = products.filter(p => p.featured)
  
  return (
    <div className="pt-20 relative min-h-screen text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <ImmersiveAssetVideo 
          themeId="nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/70 via-ocean-800/60 to-aqua-900/70"></div>
      </div>
      
      {/* Hero Section with Water Effects */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="water-ripple absolute top-20 left-1/4 w-64 h-64"></div>
          <div className="water-ripple absolute top-40 right-1/3 w-48 h-48" style={{animationDelay: '1s'}}></div>
          <div className="water-ripple absolute bottom-20 left-1/2 w-56 h-56" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 animate-fade-in leading-tight">
              <span className="bg-gradient-to-r from-aqua-300 to-cyan-300 bg-clip-text text-transparent">
                Immerse Yourself
              </span>
              <br />
              <span className="text-white">in Nature</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-aqua-100 mb-8 sm:mb-10 lg:mb-12 leading-relaxed animate-slide-up">
              Creating underwater landscapes that bring the beauty of nature into your space.
              Every aquascape tells a story of harmony between earth, water, and life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-gradient-to-r from-aqua-500 to-cyan-500 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:from-aqua-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg">
                Explore Collection
              </button>
              <button className="border-2 border-aqua-400 text-aqua-200 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-aqua-400/10 transition-all">
                Watch Process
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ocean-900/50 to-transparent"></div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
              Nature's Ecosystem
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-aqua-100 max-w-2xl mx-auto">
              Each element plays a vital role in creating a thriving underwater world
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-aqua-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-white mb-4">Plants</h3>
              <p className="text-aqua-200">
                Living foundations that create oxygen and natural beauty
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Waves className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-white mb-4">Hardscape</h3>
              <p className="text-aqua-200">
                Stones and wood that form the landscape's backbone
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Droplets className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-white mb-4">Nutrients</h3>
              <p className="text-aqua-200">
                Essential elements that sustain life and growth
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Fish className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-white mb-4">Life</h3>
              <p className="text-aqua-200">
                Fish and invertebrates that bring movement and vitality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products with Organic Layout */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-aqua-900/20 to-ocean-800/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl text-white mb-6">
              Curated Collection
            </h2>
            <p className="text-xl text-aqua-100">
              Handpicked elements for your perfect aquascape
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`group ${index % 2 === 0 ? 'lg:mt-8' : ''}`}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-square bg-gradient-to-br from-aqua-200/20 to-ocean-300/20 flex items-center justify-center">
                    <span className="text-aqua-200 font-semibold">{product.category.toUpperCase()}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-white mb-3 group-hover:text-aqua-200 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-aqua-200 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-2xl text-aqua-300">
                        €{product.price}
                      </span>
                      <button className="bg-gradient-to-r from-aqua-500 to-cyan-500 text-white px-4 py-2 rounded-full hover:from-aqua-600 hover:to-cyan-600 transition-all transform hover:scale-105">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-gradient-to-r from-ocean-800/50 to-aqua-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-5xl text-white mb-8">
              Your Aquascaping Journey
            </h2>
            <p className="text-xl text-aqua-100 mb-12">
              From conception to completion, we guide you through every step of creating your aquatic masterpiece
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-aqua-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold text-xl text-white mb-3">Design</h3>
                <p className="text-aqua-200">Conceptualize your vision with our expert guidance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-aqua-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold text-xl text-white mb-3">Build</h3>
                <p className="text-aqua-200">Carefully place each element to create harmony</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-aqua-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold text-xl text-white mb-3">Thrive</h3>
                <p className="text-aqua-200">Watch your underwater world come alive and flourish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-5xl text-white mb-8">
              Begin Your Journey
            </h2>
            <p className="text-xl text-aqua-100 mb-12">
              Ready to create your own piece of underwater paradise?
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-aqua-400/30 rounded-full text-white placeholder-aqua-300 focus:ring-2 focus:ring-aqua-400 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-aqua-400/30 rounded-full text-white placeholder-aqua-300 focus:ring-2 focus:ring-aqua-400 focus:border-transparent"
                />
              </div>
              <textarea
                placeholder="Tell us about your vision..."
                rows={4}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-aqua-400/30 rounded-2xl text-white placeholder-aqua-300 focus:ring-2 focus:ring-aqua-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-aqua-500 to-cyan-500 text-white py-4 rounded-full font-semibold text-lg hover:from-aqua-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Conversation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}