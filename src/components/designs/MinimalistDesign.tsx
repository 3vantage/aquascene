import React from 'react'
import Image from 'next/image'
import { products } from '@/data/products'
import { ShoppingCart, Star, Mail, Phone, MapPin } from 'lucide-react'

export function MinimalistDesign() {
  const featuredProducts = products.filter(p => p.featured)
  
  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display font-bold text-5xl lg:text-6xl text-gray-900 mb-6">
                Premium
                <span className="text-primary-500 block">Aquascaping</span>
                Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional aquarium design and maintenance services with premium aquatic products. 
                Partner with us for exceptional aquatic experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                  View Products
                </button>
                <button className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Partnership Inquiry
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-aqua-100 to-ocean-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-aqua-200/50 to-ocean-200/50 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">Aquarium Showcase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Curated selection from our premium partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">{product.category.toUpperCase()}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-2xl text-primary-500">
                      €{product.price}
                    </span>
                    <button className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete aquascaping solutions for every need
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Custom Design</h3>
              <p className="text-gray-600">
                Personalized aquascape designs tailored to your space and preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Premium Products</h3>
              <p className="text-gray-600">
                Access to exclusive products from top aquascaping brands worldwide.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Maintenance</h3>
              <p className="text-gray-600">
                Regular maintenance services to keep your aquascape thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600">
                Ready to start your aquascaping journey?
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">info@aquascene.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">+359 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Sofia, Bulgaria</span>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}