import React, { useState, useEffect } from 'react'
import { products } from '@/data/products'
import { 
  Monitor, Cpu, Wifi, Smartphone, Camera, 
  Activity, Zap, BarChart3, Cloud, Settings,
  Eye, Brain, Waves, Database, Target
} from 'lucide-react'

export function DigitalAquascapingDesign() {
  const [systemStatus, setSystemStatus] = useState('optimal')
  const [sensorData, setSensorData] = useState({
    ph: 6.8,
    temp: 24.2,
    co2: 28,
    light: 42,
    flow: 85
  })

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        ph: Math.max(6.0, Math.min(7.5, prev.ph + (Math.random() - 0.5) * 0.1)),
        temp: Math.max(22, Math.min(28, prev.temp + (Math.random() - 0.5) * 0.2)),
        co2: Math.max(20, Math.min(35, prev.co2 + (Math.random() - 0.5) * 2)),
        light: Math.max(30, Math.min(60, prev.light + (Math.random() - 0.5) * 3)),
        flow: Math.max(70, Math.min(100, prev.flow + (Math.random() - 0.5) * 5))
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const technologies = [
    {
      category: 'IoT Sensors',
      items: [
        { name: 'pH Monitor', status: 'active', accuracy: '±0.1 pH', price: '€89' },
        { name: 'Temperature Probe', status: 'active', accuracy: '±0.1°C', price: '€45' },
        { name: 'CO₂ Detector', status: 'active', accuracy: '±2 ppm', price: '€156' },
        { name: 'Flow Sensor', status: 'warning', accuracy: '±2%', price: '€78' }
      ]
    },
    {
      category: 'AI Systems',
      items: [
        { name: 'Growth Prediction', status: 'active', accuracy: '94%', price: '€299' },
        { name: 'Disease Detection', status: 'active', accuracy: '97%', price: '€399' },
        { name: 'Nutrient Optimization', status: 'active', accuracy: '91%', price: '€249' },
        { name: 'Behavior Analysis', status: 'active', accuracy: '89%', price: '€199' }
      ]
    },
    {
      category: 'Automation',
      items: [
        { name: 'Smart Dosing Pump', status: 'active', accuracy: '±1ml', price: '€134' },
        { name: 'LED Controller', status: 'active', accuracy: '±1%', price: '€167' },
        { name: 'Feeding System', status: 'active', accuracy: '±0.1g', price: '€89' },
        { name: 'Water Changer', status: 'maintenance', accuracy: '±2%', price: '€234' }
      ]
    }
  ]

  const vrFeatures = [
    {
      title: 'Virtual Tank Designer',
      description: 'Design and preview your aquascape before implementation',
      capabilities: ['3D Layout Planning', 'Plant Growth Simulation', 'Lighting Preview'],
      maturity: 'Beta',
      platforms: ['VR Headset', 'Desktop', 'Mobile AR']
    },
    {
      title: 'Underwater Exploration',
      description: 'Immersive virtual tours of natural biotopes',
      capabilities: ['360° Environment', 'Species Interaction', 'Educational Content'],
      maturity: 'Commercial',
      platforms: ['VR Headset', 'Web Browser']
    },
    {
      title: 'Maintenance Training',
      description: 'Virtual reality training for complex procedures',
      capabilities: ['Step-by-step Guidance', 'Safety Protocols', 'Equipment Familiarization'],
      maturity: 'Development',
      platforms: ['VR Headset', 'Mixed Reality']
    }
  ]

  const aiInsights = [
    {
      type: 'Growth Prediction',
      confidence: 94,
      prediction: 'Optimal growth conditions detected. Plants will reach 95% maturity in 12 days.',
      recommendation: 'Increase CO₂ to 30ppm for accelerated growth.',
      impact: 'high'
    },
    {
      type: 'Disease Alert',
      confidence: 87,
      prediction: 'Early stage algae detected on glass surface. Risk level: Low.',
      recommendation: 'Reduce lighting duration by 1 hour for 3 days.',
      impact: 'medium'
    },
    {
      type: 'Optimization',
      confidence: 96,
      prediction: 'Current nutrient balance will maintain stable ecosystem for 2 weeks.',
      recommendation: 'Next water change scheduled in 5 days.',
      impact: 'low'
    }
  ]

  const digitalProducts = products.filter(p => p.featured)

  return (
    <div className="pt-20 bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-blue-400/30">
              <Cpu className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-blue-300 font-semibold">Next-Generation Technology</span>
            </div>
            
            <h1 className="font-display font-bold text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              <span className="text-white">Aquascaping</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The future of aquascaping is here. IoT sensors, AI monitoring, VR planning, and smart automation 
              create the world's most intelligent aquatic ecosystems.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-blue-400">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-emerald-400">95%</div>
                <div className="text-gray-400">AI Accuracy</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-purple-400">VR</div>
                <div className="text-gray-400">Planning</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-cyan-400">Auto</div>
                <div className="text-gray-400">Control</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Monitor className="w-6 h-6" />
                Launch Control Center
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-400/10 transition-all backdrop-blur-sm">
                VR Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Dashboard */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Live System Dashboard
            </h2>
            <p className="text-xl text-gray-300">
              Real-time monitoring and control of your digital aquascape
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            
            {/* Status Overview */}
            <div className="grid md:grid-cols-5 gap-6 mb-12">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <Eye className="w-6 h-6 text-blue-400" />
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    sensorData.ph >= 6.5 && sensorData.ph <= 7.2 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {sensorData.ph >= 6.5 && sensorData.ph <= 7.2 ? 'Optimal' : 'Monitor'}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{sensorData.ph.toFixed(1)}</div>
                <div className="text-sm text-gray-400">pH Level</div>
                <div className="text-xs text-gray-500 mt-1">Target: 6.5-7.2</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <Activity className="w-6 h-6 text-red-400" />
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                    Normal
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{sensorData.temp.toFixed(1)}°C</div>
                <div className="text-sm text-gray-400">Temperature</div>
                <div className="text-xs text-gray-500 mt-1">Target: 24-26°C</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <Waves className="w-6 h-6 text-cyan-400" />
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                    Good
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{Math.round(sensorData.co2)}</div>
                <div className="text-sm text-gray-400">CO₂ ppm</div>
                <div className="text-xs text-gray-500 mt-1">Target: 25-30</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{Math.round(sensorData.light)}</div>
                <div className="text-sm text-gray-400">PAR μmol</div>
                <div className="text-xs text-gray-500 mt-1">Target: 40-50</div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <Database className="w-6 h-6 text-emerald-400" />
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                    Strong
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{Math.round(sensorData.flow)}%</div>
                <div className="text-sm text-gray-400">Flow Rate</div>
                <div className="text-xs text-gray-500 mt-1">Target: 80-100%</div>
              </div>
            </div>

            {/* AI Insights Panel */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-600 mb-12">
              <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6 text-purple-400" />
                AI Insights & Predictions
              </h3>
              
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-blue-400" />
                        <span className="font-semibold text-white">{insight.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Confidence:</span>
                        <span className="font-bold text-emerald-400">{insight.confidence}%</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-3">{insight.prediction}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-400">{insight.recommendation}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        insight.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                        insight.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {insight.impact} impact
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Digital Technology Stack
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive smart aquascaping solutions
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {technologies.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <h3 className="font-bold text-2xl text-white mb-8">{category.category}</h3>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {category.items.map((item, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:border-blue-500/50 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            item.status === 'active' ? 'bg-green-400' :
                            item.status === 'warning' ? 'bg-yellow-400' :
                            'bg-red-400'
                          }`}></div>
                          <h4 className="font-semibold text-white">{item.name}</h4>
                        </div>
                        <span className="text-blue-400 font-bold">{item.price}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Accuracy: {item.accuracy}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'active' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VR/AR Features */}
      <section className="py-24 bg-gradient-to-br from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Virtual Reality Integration
            </h2>
            <p className="text-xl text-gray-300">
              Immersive planning, education, and maintenance experiences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {vrFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-xl p-8 border border-purple-500/30">
                
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-bold text-xl text-white">{feature.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    feature.maturity === 'Commercial' ? 'bg-green-500/20 text-green-400' :
                    feature.maturity === 'Beta' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {feature.maturity}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="text-sm font-medium text-gray-400 mb-3">Capabilities:</div>
                  {feature.capabilities.map((capability, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Eye className="w-3 h-3 text-purple-400" />
                      {capability}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-400">Platforms:</div>
                  <div className="flex flex-wrap gap-2">
                    {feature.platforms.map((platform, i) => (
                      <span key={i} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Products */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Smart Aquascaping Equipment
            </h2>
            <p className="text-xl text-gray-300">
              Next-generation products with built-in intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalProducts.map((product) => (
              <div key={product.id} className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-600 hover:border-blue-500/50">
                
                {/* Smart Badge */}
                <div className="p-4 pb-0">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Smart Enabled
                  </span>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-blue-300 font-medium text-sm uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Tech overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-x-12 animate-pulse"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-2xl text-blue-400">€{product.price}</span>
                      <div className="text-xs text-gray-500">Smart Device</div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-110 shadow-lg">
                      <Smartphone className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Monitor className="w-16 h-16 mx-auto mb-8 opacity-90" />
            <h2 className="font-display font-bold text-4xl mb-6">
              Shape the Future of Aquascaping
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join the digital revolution where technology meets nature. Create, monitor, and optimize with AI-powered precision.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Cloud className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Cloud Integration</div>
                <div className="text-sm opacity-80">Global data synchronization</div>
              </div>
              <div className="text-center">
                <BarChart3 className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Predictive Analytics</div>
                <div className="text-sm opacity-80">AI-driven optimization</div>
              </div>
              <div className="text-center">
                <Camera className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Computer Vision</div>
                <div className="text-sm opacity-80">Automated monitoring</div>
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
                <option value="" className="text-gray-800">Technology Interest</option>
                <option value="iot" className="text-gray-800">IoT Sensors & Monitoring</option>
                <option value="ai" className="text-gray-800">AI & Machine Learning</option>
                <option value="vr" className="text-gray-800">VR/AR Integration</option>
                <option value="automation" className="text-gray-800">Smart Automation</option>
              </select>
              <textarea
                placeholder="Tell us about your digital aquascaping vision..."
                rows={4}
                className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent mb-6"
              />
              <button
                type="submit"
                className="w-full bg-white text-blue-600 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                <Cpu className="w-6 h-6" />
                Enter the Digital Age
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}