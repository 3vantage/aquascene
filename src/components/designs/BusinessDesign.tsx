import React from 'react'
import { products } from '@/data/products'
import { HeroAssetImage, AquariumAssetImage } from '@/components/AssetImage'
import { 
  Award, Globe, Users, Zap, ArrowRight, CheckCircle, 
  Target, Handshake, TrendingUp, Star, Mail, Phone, MapPin,
  Package, Truck, Shield, Clock
} from 'lucide-react'

export function BusinessDesign() {
  const featuredProducts = products.filter(p => p.featured)
  
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Green Aqua Partnership Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-blue-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
                  <Handshake className="w-4 h-4 text-orange-600 mr-2" />
                  <span className="text-orange-700 text-sm font-medium">Partnership Proposal</span>
                </div>
                
                <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Partner with
                  <span className="text-primary-500 block" style={{color: '#DE521D'}}>Green Aqua</span>
                  Excellence
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  AquaScene brings proven aquascaping expertise, international market reach, and 
                  technical innovation to complement Green Aqua's market leadership in premium aquarium solutions.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">ADA Certified</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">EU Market Access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Tech Innovation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Contest Winners</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors" style={{backgroundColor: '#DE521D'}}>
                    Partnership Proposal
                  </button>
                  <button className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    View Capabilities
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <HeroAssetImage 
                    themeId="business"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200/70 to-blue-200/70 flex flex-col items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm bg-opacity-90" style={{backgroundColor: '#DE521D'}}>
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-white mb-2 drop-shadow-lg">Partnership Ready</h3>
                      <p className="text-white/90 drop-shadow-md">Complete business proposal & technical capabilities</p>
                    </div>
                  </div>
                </div>
                
                {/* Partnership Badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold transform rotate-12">
                  Ready to Partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with AquaScene */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Why Choose AquaScene as Your Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring complementary strengths that enhance Green Aqua's market position
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-primary-500" style={{color: '#DE521D'}} />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">International Reach</h3>
              <p className="text-gray-600">
                Established distribution networks across Eastern Europe and growing presence in Western markets
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Tech Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge digital solutions including AR tank visualization and automated monitoring systems
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Competition Success</h3>
              <p className="text-gray-600">
                Multiple international aquascaping contest wins demonstrating world-class design expertise
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Community Building</h3>
              <p className="text-gray-600">
                Active education programs and workshops that expand the aquascaping community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Multiple collaboration models designed for mutual growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-primary-500" style={{color: '#DE521D'}} />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Product Distribution</h3>
              <p className="text-gray-600 mb-6">
                Exclusive regional distribution rights for Green Aqua products with guaranteed minimum volumes 
                and marketing support.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Minimum €50K monthly orders
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Dedicated marketing budget
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Technical training provided
                </li>
              </ul>
              <button className="w-full bg-orange-50 text-primary-600 py-3 rounded-lg font-medium hover:bg-orange-100 transition-colors">
                Explore Distribution
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                Co-Development
                <span className="ml-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">Recommended</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Joint product development leveraging Green Aqua's market insights and our technical innovation capabilities.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Shared IP ownership
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Joint marketing campaigns
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Revenue sharing model
                </li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Preferred Partnership
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">Market Expansion</h3>
              <p className="text-gray-600 mb-6">
                Strategic partnership to enter new geographic markets with combined expertise and resources.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Joint market entry strategy
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Shared customer acquisition
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cross-promotional activities
                </li>
              </ul>
              <button className="w-full bg-green-50 text-green-600 py-3 rounded-lg font-medium hover:bg-green-100 transition-colors">
                Market Strategy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Proven success metrics that demonstrate partnership value
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2" style={{color: '#DE521D'}}>€2.5M</div>
              <div className="text-gray-600">Annual Revenue</div>
              <div className="text-sm text-gray-500 mt-1">25% YoY Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
              <div className="text-sm text-gray-500 mt-1">Expanding to 25</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">5-star average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">12</div>
              <div className="text-gray-600">Contest Awards</div>
              <div className="text-sm text-gray-500 mt-1">International recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Aqua Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Ready to Showcase Green Aqua Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Our platform is prepared for seamless Green Aqua product integration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <AquariumAssetImage 
                    themeId="business"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/70 to-blue-100/70 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm bg-opacity-90" style={{backgroundColor: '#DE521D'}}>
                        <Package className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-white font-medium drop-shadow-md">{product.category.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-2xl text-primary-500" style={{color: '#DE521D'}}>
                      €{product.price}
                    </span>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Contact */}
      <section className="py-20 bg-primary-500" style={{backgroundColor: '#DE521D'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-display font-bold text-4xl mb-6">
              Ready to Partner with Green Aqua?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's schedule a meeting to discuss how AquaScene can contribute to Green Aqua's continued success
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Quick Response</div>
                <div className="text-sm opacity-80">24-hour reply guarantee</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">NDA Ready</div>
                <div className="text-sm opacity-80">Confidentiality assured</div>
              </div>
              <div className="text-center">
                <Handshake className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Partnership Focus</div>
                <div className="text-sm opacity-80">Long-term collaboration</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Partnership Meeting
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Partnership Proposal
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  partnerships@aquascene.com
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +359 XX XXX XXXX
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Sofia, Bulgaria
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}