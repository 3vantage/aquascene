import React from 'react'
import Image from 'next/image'
import { products } from '@/data/products'
import { 
  Crown, Star, Mail, Phone, MapPin, Gem, Award, 
  Shield, Clock, Eye, Palette, Users, ArrowRight 
} from 'lucide-react'

export function MinimalistDesign() {
  const exclusiveProducts = products.filter(p => p.featured).slice(0, 3)
  const luxuryServices = [
    {
      name: "Private Aquascaping Consultation",
      description: "1-on-1 design sessions with master aquascapers",
      price: "€500",
      duration: "3 hours",
      badge: "Exclusive"
    },
    {
      name: "Bespoke Installation Service", 
      description: "Custom aquarium installation with rare materials",
      price: "€2,500+",
      duration: "2-3 days",
      badge: "Luxury"
    },
    {
      name: "VIP Maintenance Package",
      description: "White-glove monthly care with priority support",
      price: "€300/month",
      duration: "Ongoing",
      badge: "Premium"
    }
  ]
  
  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full px-4 py-2 mb-8">
                <Crown className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-orange-700 text-sm font-medium">Luxury Aquascaping Boutique</span>
              </div>
              
              <h1 className="font-display font-light text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
                <span className="font-extralight">Exclusive</span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent font-normal">
                  Aquatic
                </span>
                <br />
                <span className="font-extralight">Artistry</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                For discerning clients who demand nothing less than perfection. 
                We create one-of-a-kind aquatic masterpieces using the world's rarest materials and most innovative techniques.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center">
                  <Gem className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-gray-700 font-medium">Rare Materials Only</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-gray-700 font-medium">Award-Winning Designs</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-gray-700 font-medium">Lifetime Guarantee</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-gray-700 font-medium">24/7 VIP Support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-full font-medium text-lg hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-105 shadow-xl">
                  Book Private Consultation
                </button>
                <button className="border-2 border-orange-500 text-orange-600 px-10 py-4 rounded-full font-medium text-lg hover:bg-orange-50 transition-all backdrop-blur-sm">
                  View Portfolio
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-orange-200/30 to-amber-200/30 flex flex-col items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Palette className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-800 mb-3">Bespoke Creations</h3>
                    <p className="text-gray-600 font-light">Every piece uniquely crafted for your space</p>
                    
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full ${
                          i === 0 ? 'bg-gradient-to-br from-amber-400 to-orange-500' :
                          i === 1 ? 'bg-gradient-to-br from-emerald-400 to-teal-500' :
                          i === 2 ? 'bg-gradient-to-br from-blue-400 to-indigo-500' :
                          i === 3 ? 'bg-gradient-to-br from-purple-400 to-pink-500' :
                          i === 4 ? 'bg-gradient-to-br from-red-400 to-rose-500' :
                          'bg-gradient-to-br from-gray-400 to-slate-500'
                        } shadow-md animate-pulse`} style={{animationDelay: `${i * 0.2}s`}} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating quality badges */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full text-sm font-semibold transform rotate-12 shadow-lg">
                Museum Quality
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold transform -rotate-12 shadow-lg">
                Collector's Choice
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-orange-100 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-orange-600 mr-2" />
              <span className="text-orange-700 text-sm font-medium">Signature Services</span>
            </div>
            <h2 className="font-display font-light text-5xl text-gray-900 mb-6">
              Exclusive <span className="font-normal text-orange-600">Experiences</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Each service is meticulously crafted to exceed the expectations of our most discerning clientele
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {luxuryServices.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-orange-100 group-hover:border-orange-200 transform group-hover:-translate-y-2">
                  
                  {/* Service Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.badge === 'Exclusive' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' :
                      service.badge === 'Luxury' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white' :
                      'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                  
                  {/* Visual Header */}
                  <div className="aspect-video bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-200/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-gradient-to-br from-purple-500 to-indigo-500' :
                        index === 1 ? 'bg-gradient-to-br from-orange-500 to-amber-500' :
                        'bg-gradient-to-br from-emerald-500 to-teal-500'
                      } shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                        {index === 0 ? <Eye className="w-10 h-10 text-white" /> :
                         index === 1 ? <Gem className="w-10 h-10 text-white" /> :
                         <Shield className="w-10 h-10 text-white" />}
                      </div>
                    </div>
                    
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
                          style={{
                            top: `${20 + (i * 8)}%`,
                            left: `${10 + (i * 7)}%`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-semibold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 font-light leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="font-bold text-2xl text-orange-600">{service.price}</div>
                        <div className="text-xs text-gray-500 font-light">{service.duration}</div>
                      </div>
                      <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-105 shadow-lg text-sm">
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Collection */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display font-light text-5xl text-gray-900 mb-6">
              Curator's <span className="font-normal text-orange-600">Selection</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Handpicked rarities and limited editions available exclusively to our collectors
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {exclusiveProducts.map((product, index) => (
              <div key={product.id} className="group relative">
                <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform group-hover:-translate-y-1">
                  
                  {/* Exclusive Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Limited Edition
                    </span>
                  </div>
                  
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-transparent"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Gem className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-orange-700 font-medium text-sm uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>
                    
                    {/* Luxury shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-light">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-2xl text-orange-600">€{product.price}</span>
                        <div className="text-xs text-gray-500 font-light">Collector's Price</div>
                      </div>
                      <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-110 shadow-lg">
                        <Crown className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Clientele Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display font-light text-5xl text-gray-900 mb-6">
              Trusted by <span className="font-normal text-orange-600">Connoisseurs</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Our clientele includes award-winning architects, luxury hotels, and private collectors worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Private Collectors</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Exclusive installations for discerning individuals who appreciate true artistry and rarity in their aquatic displays.
              </p>
              <div className="mt-4 text-sm text-orange-600 font-medium">500+ Elite Installations</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Luxury Hospitality</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Statement pieces for five-star hotels, exclusive resorts, and world-class spas seeking to create unforgettable experiences.
              </p>
              <div className="mt-4 text-sm text-orange-600 font-medium">50+ Luxury Venues</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl">
                <Gem className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Celebrity Homes</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Bespoke aquascapes for celebrity residences, penthouse suites, and architectural masterpieces around the globe.
              </p>
              <div className="mt-4 text-sm text-orange-600 font-medium">25+ Celebrity Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Contact Experience */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Crown className="w-5 h-5 text-orange-400 mr-3" />
                <span className="text-orange-300 font-medium">VIP Concierge Service</span>
              </div>
              
              <h2 className="font-display font-light text-5xl text-white mb-6">
                Experience <span className="font-normal text-orange-400">Excellence</span>
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Begin your journey into luxury aquascaping with our white-glove consultation service
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="font-semibold text-2xl text-white mb-8">VIP Access</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-orange-300 font-medium mb-1">Exclusive Communication</div>
                      <div className="text-gray-400">concierge@aquascene.com</div>
                      <div className="text-sm text-gray-500 mt-1">Direct line to our master designers</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-emerald-300 font-medium mb-1">Priority Hotline</div>
                      <div className="text-gray-400">+359 XX XXX XXXX</div>
                      <div className="text-sm text-gray-500 mt-1">Available 24/7 for VIP clients</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-purple-300 font-medium mb-1">Private Showroom</div>
                      <div className="text-gray-400">Sofia Design District</div>
                      <div className="text-sm text-gray-500 mt-1">By appointment only</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <h3 className="font-semibold text-xl text-white mb-6">Request Private Consultation</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-orange-300/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent font-light"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-orange-300/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent font-light"
                    />
                  </div>
                  <select className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-orange-300/30 rounded-xl text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent font-light">
                    <option value="" className="text-gray-800">Project Type</option>
                    <option value="residential" className="text-gray-800">Private Residence</option>
                    <option value="commercial" className="text-gray-800">Commercial Space</option>
                    <option value="hospitality" className="text-gray-800">Luxury Hospitality</option>
                    <option value="yacht" className="text-gray-800">Yacht Installation</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your vision and space requirements..."
                    rows={4}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-orange-300/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none font-light"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-medium text-lg hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
                  >
                    <Crown className="w-5 h-5" />
                    Schedule VIP Consultation
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-sm text-gray-400 font-light">
                    Initial consultation fee of €500 is fully credited toward your project investment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}