import React from 'react'
import { products } from '@/data/products'
import { ShoppingCart, Heart, Filter, Search, Star, Zap, Shield, Truck } from 'lucide-react'

export function ModernDesign() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const categories = ['all', 'soil', 'stone', 'fertilizer', 'plant', 'fish']
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)
  
  return (
    <div className="pt-20 bg-gray-900 min-h-screen text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">Next-Gen Aquascaping</span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-tight">
                The Future of
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                  Aquascaping
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Advanced e-commerce platform featuring the world's most innovative aquascaping products. 
                AI-powered recommendations, instant availability, and seamless checkout.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base">
                  Shop Now
                </button>
                <button className="border border-gray-600 text-gray-300 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all text-sm sm:text-base">
                  View Catalog
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-lg font-medium">Interactive 3D Showcase</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">NEW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-gray-800 border-y border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center justify-center text-center">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-2 sm:mr-3" />
              <span className="text-gray-300 font-medium text-sm sm:text-base">Free Shipping</span>
            </div>
            <div className="flex items-center justify-center text-center">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 sm:mr-3" />
              <span className="text-gray-300 font-medium text-sm sm:text-base">Secure Payment</span>
            </div>
            <div className="flex items-center justify-center text-center">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-2 sm:mr-3" />
              <span className="text-gray-300 font-medium text-sm sm:text-base">Premium Quality</span>
            </div>
            <div className="flex items-center justify-center text-center">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-2 sm:mr-3" />
              <span className="text-gray-300 font-medium text-sm sm:text-base">Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Search and Filter Header */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2">
                  Product Catalog
                </h2>
                <p className="text-gray-400">
                  {filteredProducts.length} products available
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </button>
              </div>
            </div>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                  }`}
                >
                  {category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-gray-700 hover:border-gray-600">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">{product.category.toUpperCase()}</span>
                  </div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <button className="w-8 h-8 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                      <Heart className="w-4 h-4 text-gray-300 hover:text-white" />
                    </button>
                    {product.featured && (
                      <div className="px-2 py-1 bg-green-500 rounded-full">
                        <span className="text-xs font-semibold text-white">FEATURED</span>
                      </div>
                    )}
                  </div>
                  {product.inStock && (
                    <div className="absolute bottom-3 left-3">
                      <div className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                        <span className="text-xs font-medium text-green-400">In Stock</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-2xl text-white">
                      €{product.price}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-400 text-sm ml-1">4.8</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-400 text-sm sm:text-base">Products Available</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400 text-sm sm:text-base">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm sm:text-base">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm sm:text-base">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              Get the latest products, deals, and aquascaping tips delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 sm:px-6 sm:py-4 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              />
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}