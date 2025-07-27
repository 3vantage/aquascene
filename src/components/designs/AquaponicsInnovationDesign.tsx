import React, { useState } from 'react'
import { products } from '@/data/products'
import { 
  Sprout, Fish, Recycle, Droplets, Sun, 
  BarChart3, Leaf, Zap, Target, Settings,
  TrendingUp, Users, Globe, Award, Calculator
} from 'lucide-react'

export function AquaponicsInnovationDesign() {
  const [activeSystem, setActiveSystem] = useState('nft')
  
  const systems = [
    {
      id: 'nft',
      name: 'NFT System',
      fullName: 'Nutrient Film Technique',
      efficiency: '95%',
      waterUse: '-90%',
      yield: '+300%',
      plants: ['Lettuce', 'Herbs', 'Spinach'],
      fish: ['Tilapia', 'Trout', 'Catfish'],
      difficulty: 'Intermediate',
      investment: '€2,500 - €8,000'
    },
    {
      id: 'dwc',
      name: 'DWC System',
      fullName: 'Deep Water Culture',
      efficiency: '92%',
      waterUse: '-85%',
      yield: '+250%',
      plants: ['Tomatoes', 'Peppers', 'Cucumbers'],
      fish: ['Bass', 'Perch', 'Bluegill'],
      difficulty: 'Beginner',
      investment: '€1,500 - €5,000'
    },
    {
      id: 'media',
      name: 'Media Bed',
      fullName: 'Gravel Bed System',
      efficiency: '88%',
      waterUse: '-80%',
      yield: '+200%',
      plants: ['Root vegetables', 'Beans', 'Corn'],
      fish: ['Goldfish', 'Koi', 'Carp'],
      difficulty: 'Beginner',
      investment: '€800 - €3,000'
    }
  ]

  const benefits = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Water Conservation',
      value: '90%',
      description: 'Less water usage than traditional farming',
      color: 'text-blue-600'
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: 'Faster Growth',
      value: '300%',
      description: 'Accelerated plant development',
      color: 'text-green-600'
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Zero Waste',
      value: '100%',
      description: 'Complete nutrient recycling',
      color: 'text-emerald-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Space Efficiency',
      value: '10x',
      description: 'Higher yield per square meter',
      color: 'text-purple-600'
    }
  ]

  const innovationAreas = [
    {
      title: 'IoT Monitoring',
      description: 'Smart sensors for automated system management',
      applications: ['pH monitoring', 'Temperature control', 'Nutrient tracking'],
      maturity: 'Commercial',
      impact: 'High'
    },
    {
      title: 'AI Optimization',
      description: 'Machine learning for yield prediction and optimization',
      applications: ['Growth prediction', 'Disease detection', 'Resource optimization'],
      maturity: 'Research',
      impact: 'Very High'
    },
    {
      title: 'Vertical Farming',
      description: 'Multi-level systems for urban environments',
      applications: ['Urban agriculture', 'Indoor farming', 'Rooftop gardens'],
      maturity: 'Commercial',
      impact: 'High'
    },
    {
      title: 'Renewable Energy',
      description: 'Solar and wind power integration',
      applications: ['Solar pumps', 'LED grow lights', 'Heating systems'],
      maturity: 'Commercial',
      impact: 'Medium'
    }
  ]

  const caseStudies = [
    {
      location: 'Singapore',
      project: 'Sky Greens Vertical Farm',
      scale: '120 towers',
      production: '1 ton/day',
      saving: '95% water',
      year: '2023'
    },
    {
      location: 'Netherlands',
      project: 'Growing Underground',
      scale: '2.5 hectares',
      production: '20 tons/month',
      saving: '70% energy',
      year: '2023'
    },
    {
      location: 'Dubai',
      project: 'Desert Aquaponics',
      scale: '1 hectare',
      production: '15 tons/month',
      saving: '85% water',
      year: '2024'
    }
  ]

  const currentSystem = systems.find(s => s.id === activeSystem) || systems[0]

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3 mb-8">
              <Recycle className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-green-700 font-semibold">Sustainable Food Systems</span>
            </div>
            
            <h1 className="font-display font-bold text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Aquaponics
              </span>
              <br />
              <span className="text-gray-900">Innovation</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Revolutionary food production systems combining aquaculture with hydroponics. 
              Sustainable, efficient, and productive farming solutions for the future of agriculture.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-current to-current rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${benefit.color}`} style={{opacity: 0.1}}>
                    <div className={`${benefit.color}`}>
                      {benefit.icon}
                    </div>
                  </div>
                  <div className={`font-bold text-2xl ${benefit.color}`}>{benefit.value}</div>
                  <div className="text-gray-600 text-sm">{benefit.title}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Sprout className="w-6 h-6" />
                Start Growing
              </button>
              <button className="border-2 border-green-500 text-green-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all">
                System Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* System Selection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
              Aquaponics Systems
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect system for your space and requirements
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap justify-center gap-2 bg-white rounded-2xl p-2 shadow-lg">
              {systems.map((system) => (
                <button
                  key={system.id}
                  onClick={() => setActiveSystem(system.id)}
                  className={`px-6 py-4 rounded-xl text-sm font-medium transition-all ${
                    activeSystem === system.id
                      ? 'bg-green-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <div className="font-bold">{system.name}</div>
                  <div className="text-xs opacity-80">{system.fullName}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected System Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* System Overview */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 text-white mb-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display font-bold text-4xl mb-4">{currentSystem.fullName}</h2>
                <p className="text-xl opacity-90 mb-8">
                  Difficulty: {currentSystem.difficulty} • Investment: {currentSystem.investment}
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{currentSystem.efficiency}</div>
                    <div className="opacity-80">System Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{currentSystem.waterUse}</div>
                    <div className="opacity-80">Water Usage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{currentSystem.yield}</div>
                    <div className="opacity-80">Yield Increase</div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Components */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-3">
                  <Sprout className="w-6 h-6 text-green-600" />
                  Suitable Plants
                </h3>
                <div className="space-y-3">
                  {currentSystem.plants.map((plant, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                      <Leaf className="w-4 h-4 text-green-600" />
                      <span className="text-gray-800 font-medium">{plant}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-3">
                  <Fish className="w-6 h-6 text-blue-600" />
                  Compatible Fish
                </h3>
                <div className="space-y-3">
                  {currentSystem.fish.map((fish, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                      <Fish className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-800 font-medium">{fish}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Technology Innovations
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge advances shaping the future of aquaponics
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {innovationAreas.map((innovation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8">
                
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-bold text-xl text-gray-900">{innovation.title}</h3>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      innovation.maturity === 'Commercial' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {innovation.maturity}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      innovation.impact === 'Very High' ? 'bg-red-100 text-red-700' :
                      innovation.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {innovation.impact} Impact
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{innovation.description}</p>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700 mb-3">Applications:</div>
                  {innovation.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <Zap className="w-3 h-3 text-green-500" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Global Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real-world implementations demonstrating aquaponics potential
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-green-100">
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{study.project}</h3>
                      <p className="text-sm text-gray-600">{study.location}</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                    {study.year}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Scale:</span>
                    <span className="font-medium text-gray-900">{study.scale}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Production:</span>
                    <span className="font-medium text-green-600">{study.production}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Resource Saving:</span>
                    <span className="font-medium text-blue-600">{study.saving}</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-50 text-green-600 py-3 rounded-lg font-medium hover:bg-green-100 transition-colors">
                  View Case Study
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
                Investment Calculator
              </h2>
              <p className="text-xl text-gray-600">
                Calculate your aquaponics system ROI and payback period
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Input Parameters */}
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-6">System Parameters</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        System Size (m²)
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="1000"
                        defaultValue="100"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>10m²</span>
                        <span>100m²</span>
                        <span>1000m²</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Initial Investment (€)
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option>€5,000 - Small Scale</option>
                        <option>€15,000 - Medium Scale</option>
                        <option>€50,000 - Commercial Scale</option>
                        <option>€150,000 - Industrial Scale</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Target Crops
                      </label>
                      <div className="space-y-2">
                        {['Leafy Greens', 'Herbs', 'Tomatoes', 'Fish Production'].map((crop) => (
                          <label key={crop} className="flex items-center">
                            <input type="checkbox" className="rounded text-green-600" />
                            <span className="ml-2 text-sm text-gray-700">{crop}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Results Preview */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-6">Projected Returns</h3>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">18 months</div>
                      <div className="text-sm text-gray-600">Payback Period</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-white rounded-lg p-4">
                        <div className="text-xl font-bold text-gray-900">€3,200</div>
                        <div className="text-xs text-gray-500">Monthly Revenue</div>
                      </div>
                      <div className="text-center bg-white rounded-lg p-4">
                        <div className="text-xl font-bold text-blue-600">€800</div>
                        <div className="text-xs text-gray-500">Monthly Savings</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Water Savings:</span>
                        <span className="font-medium text-blue-600">€2,400/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Crop Yield:</span>
                        <span className="font-medium text-green-600">3.2 tons/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Fish Production:</span>
                        <span className="font-medium text-orange-600">480 kg/year</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-green-600 transition-colors">
                    Get Detailed Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              System Components
            </h2>
            <p className="text-xl text-gray-600">
              Essential equipment for your aquaponics setup
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.featured).slice(0, 6).map((product) => (
              <div key={product.id} className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                
                <div className="p-4 pb-0">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Aquaponics Ready
                  </span>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-green-700 font-medium text-sm uppercase tracking-wider">
                      {product.category}
                    </span>
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
                    <div>
                      <span className="font-bold text-2xl text-green-600">€{product.price}</span>
                      <div className="text-xs text-gray-500">System Component</div>
                    </div>
                    <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-110 shadow-lg">
                      <TrendingUp className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-green-500 to-emerald-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Recycle className="w-16 h-16 mx-auto mb-8 opacity-90" />
            <h2 className="font-display font-bold text-4xl mb-6">
              Start Your Aquaponics Journey
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join the sustainable farming revolution with our expert guidance and support
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Calculator className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Free Consultation</div>
                <div className="text-sm opacity-80">System design & planning</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Proven Systems</div>
                <div className="text-sm opacity-80">Tested configurations</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Ongoing Support</div>
                <div className="text-sm opacity-80">24/7 expert assistance</div>
              </div>
            </div>
            
            <form className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>
              <select className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-white focus:border-transparent mb-6">
                <option value="" className="text-gray-800">System Interest</option>
                <option value="nft" className="text-gray-800">NFT System - Nutrient Film Technique</option>
                <option value="dwc" className="text-gray-800">DWC System - Deep Water Culture</option>
                <option value="media" className="text-gray-800">Media Bed - Gravel Bed System</option>
                <option value="custom" className="text-gray-800">Custom Solution</option>
              </select>
              <textarea
                placeholder="Tell us about your goals, space, and experience level..."
                rows={4}
                className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent mb-6"
              />
              <button
                type="submit"
                className="w-full bg-white text-green-600 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                <Sprout className="w-6 h-6" />
                Start Growing Sustainably
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}