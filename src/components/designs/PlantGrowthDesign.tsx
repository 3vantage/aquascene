import React, { useState, useEffect } from 'react'
import { products } from '@/data/products'
import { Sun, Moon, Droplets, Zap, Thermometer, Eye, Clock, Play, Pause } from 'lucide-react'

interface PlantStage {
  name: string
  height: number
  color: string
  leafCount: number
  description: string
}

export function PlantGrowthDesign() {
  const [currentTime, setCurrentTime] = useState(12) // 12 = noon
  const [isAutoRunning, setIsAutoRunning] = useState(false)
  const [plantAge, setPlantAge] = useState(0) // Days
  const [waterLevel, setWaterLevel] = useState(85)
  const [co2Level, setCo2Level] = useState(30)
  const [lightIntensity, setLightIntensity] = useState(50)
  
  const plantProducts = products.filter(p => p.category === 'plant')
  const fertilizers = products.filter(p => p.category === 'fertilizer')

  const plantStages: PlantStage[] = [
    { name: 'Seedling', height: 10, color: 'text-green-300', leafCount: 2, description: 'First delicate leaves emerge' },
    { name: 'Young Plant', height: 25, color: 'text-green-400', leafCount: 5, description: 'Establishing root system' },
    { name: 'Growing', height: 45, color: 'text-green-500', leafCount: 8, description: 'Rapid vertical growth phase' },
    { name: 'Mature', height: 70, color: 'text-green-600', leafCount: 12, description: 'Full development reached' },
    { name: 'Thriving', height: 85, color: 'text-emerald-500', leafCount: 15, description: 'Peak health and vitality' }
  ]

  const currentStage = Math.min(Math.floor(plantAge / 7), plantStages.length - 1)
  const isDay = currentTime >= 6 && currentTime <= 18
  
  // Calculate lighting color based on time of day
  const getLightingColor = () => {
    if (currentTime >= 6 && currentTime <= 8) return 'from-orange-300 to-yellow-300' // Dawn
    if (currentTime >= 8 && currentTime <= 16) return 'from-yellow-200 to-white' // Day
    if (currentTime >= 16 && currentTime <= 18) return 'from-yellow-300 to-orange-400' // Dusk
    return 'from-blue-900 to-indigo-900' // Night
  }

  const getBackgroundColor = () => {
    if (currentTime >= 6 && currentTime <= 8) return 'from-orange-900 via-amber-900 to-blue-900'
    if (currentTime >= 8 && currentTime <= 16) return 'from-blue-600 via-cyan-700 to-teal-800'
    if (currentTime >= 16 && currentTime <= 18) return 'from-orange-800 via-red-900 to-purple-900'
    return 'from-gray-900 via-blue-900 to-indigo-900'
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoRunning) {
      interval = setInterval(() => {
        setCurrentTime(prev => (prev + 1) % 24)
        setPlantAge(prev => prev + 0.1) // Accelerated growth
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isAutoRunning])

  // Simulate CO2 bubbles
  const generateBubbles = () => {
    return [...Array(co2Level / 5)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white/60 rounded-full co2-bubble"
        style={{
          left: `${20 + (i * 8)}%`,
          bottom: '15%',
          animationDelay: `${i * 0.3}s`,
          animationDuration: `${2 + Math.random()}s`
        }}
      />
    ))
  }

  return (
    <div className={`bg-gradient-to-br ${getBackgroundColor()} min-h-screen text-white transition-all duration-2000`}>
      {/* Day/Night Lighting Overlay */}
      <div className={`fixed inset-0 bg-gradient-to-b ${getLightingColor()} opacity-20 transition-all duration-2000 pointer-events-none z-10`}></div>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-6xl lg:text-7xl mb-8">
            <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Living
            </span>
            <br />
            <span className="bg-gradient-to-r from-lime-300 via-green-300 to-emerald-300 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Watch plants grow in real-time. Experience the complete lifecycle from seedling to thriving aquatic forest 
            with realistic day/night cycles and environmental factors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setIsAutoRunning(!isAutoRunning)}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 ${
                isAutoRunning 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
              }`}
            >
              {isAutoRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              {isAutoRunning ? 'Pause Growth' : 'Start Life Cycle'}
            </button>
            
            <button
              onClick={() => {
                setPlantAge(0)
                setCurrentTime(12)
                setIsAutoRunning(false)
              }}
              className="px-8 py-4 bg-gray-700 text-white rounded-full font-semibold text-lg hover:bg-gray-600 transition-all"
            >
              Reset Ecosystem
            </button>
          </div>

          {/* Time and Status Display */}
          <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-green-400/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {isDay ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-300" />}
                  <span className="text-sm font-semibold">Time</span>
                </div>
                <div className="text-xl font-bold">{currentTime.toFixed(0).padStart(2, '0')}:00</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-semibold">Age</span>
                </div>
                <div className="text-xl font-bold">{plantAge.toFixed(1)} days</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Droplets className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-semibold">Stage</span>
                </div>
                <div className="text-sm font-bold text-green-400">{plantStages[currentStage]?.name}</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-semibold">Health</span>
                </div>
                <div className="text-xl font-bold text-emerald-400">
                  {Math.min(100, Math.round((waterLevel + co2Level + lightIntensity) / 3))}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Aquarium View */}
      <section className="py-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Aquarium Simulation */}
              <div className="lg:col-span-2">
                <div className="aspect-video relative bg-gradient-to-b from-cyan-900/50 to-blue-900/80 rounded-2xl overflow-hidden border-4 border-gray-600 shadow-2xl">
                  
                  {/* Water with lighting effect */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${isDay ? 'from-cyan-300/20 to-blue-600/40' : 'from-blue-900/40 to-indigo-900/60'} transition-all duration-2000`}>
                    <div className="absolute inset-0 water-surface-animation opacity-30"></div>
                  </div>

                  {/* Substrate */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-800 to-amber-600">
                    <div className="absolute inset-0 substrate-texture opacity-50"></div>
                  </div>

                  {/* Plants - Multiple specimens at different growth stages */}
                  <div className="absolute bottom-16 left-0 right-0">
                    {/* Background plants */}
                    {plantAge > 5 && (
                      <div className="absolute bottom-0 left-1/4 plant-sway">
                        <div 
                          className="w-3 bg-gradient-to-t from-green-700 to-green-500 rounded-t-full transition-all duration-1000"
                          style={{ height: `${plantStages[currentStage]?.height * 0.8}px` }}
                        >
                          {/* Leaves */}
                          {[...Array(Math.min(plantStages[currentStage]?.leafCount || 0, 10))].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-1 bg-green-400 rounded-full leaf-flutter"
                              style={{
                                left: `${(i % 2 === 0 ? -8 : 8)}px`,
                                bottom: `${i * 6}px`,
                                animationDelay: `${i * 0.2}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Main plant */}
                    {plantAge > 0 && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 plant-sway">
                        <div 
                          className={`w-4 bg-gradient-to-t from-green-800 to-green-400 rounded-t-full transition-all duration-1000 ${plantStages[currentStage]?.color}`}
                          style={{ height: `${plantStages[currentStage]?.height}px` }}
                        >
                          {/* Main plant leaves */}
                          {[...Array(plantStages[currentStage]?.leafCount || 0)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-3 h-2 bg-green-400 rounded-full leaf-flutter"
                              style={{
                                left: `${(i % 2 === 0 ? -12 : 12)}px`,
                                bottom: `${i * 4}px`,
                                animationDelay: `${i * 0.1}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Foreground plants */}
                    {plantAge > 10 && (
                      <div className="absolute bottom-0 right-1/4 plant-sway">
                        <div 
                          className="w-2 bg-gradient-to-t from-green-600 to-green-300 rounded-t-full transition-all duration-1000"
                          style={{ height: `${plantStages[currentStage]?.height * 0.6}px` }}
                        >
                          {/* Small leaves */}
                          {[...Array(Math.min(plantStages[currentStage]?.leafCount || 0, 8))].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-green-300 rounded-full leaf-flutter"
                              style={{
                                left: `${(i % 2 === 0 ? -4 : 4)}px`,
                                bottom: `${i * 3}px`,
                                animationDelay: `${i * 0.15}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CO2 Bubbles */}
                  {co2Level > 0 && (
                    <div className="absolute inset-0">
                      {generateBubbles()}
                    </div>
                  )}

                  {/* Lighting Effect */}
                  {isDay && (
                    <div className="absolute top-4 left-4 right-4 h-8 bg-gradient-to-b from-yellow-200/30 to-transparent light-rays"></div>
                  )}

                  {/* Current Stage Indicator */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-sm font-semibold text-white">{plantStages[currentStage]?.name}</div>
                    <div className="text-xs text-green-300">{plantStages[currentStage]?.description}</div>
                  </div>

                  {/* Environmental Status */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-xs text-gray-300 space-y-1">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-3 h-3" />
                        <span>24°C</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplets className="w-3 h-3" />
                        <span>pH 6.8</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-3 h-3" />
                        <span>CO₂ {co2Level}ppm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls and Information */}
              <div className="space-y-8">
                
                {/* Environmental Controls */}
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-green-400/30">
                  <h3 className="font-bold text-xl text-white mb-6">Environmental Controls</h3>
                  
                  <div className="space-y-6">
                    {/* Light Intensity */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-300">Light Intensity</span>
                        <span className="text-sm text-yellow-400">{lightIntensity}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={lightIntensity}
                        onChange={(e) => {
                          const value = parseInt(e.target.value, 10)
                          if (!isNaN(value)) setLightIntensity(value)
                        }}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-yellow"
                      />
                    </div>

                    {/* CO2 Level */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-300">CO₂ Level</span>
                        <span className="text-sm text-blue-400">{co2Level}ppm</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={co2Level}
                        onChange={(e) => {
                          const value = parseInt(e.target.value, 10)
                          if (!isNaN(value)) setCo2Level(value)
                        }}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-blue"
                      />
                    </div>

                    {/* Water Quality */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-300">Water Quality</span>
                        <span className="text-sm text-cyan-400">{waterLevel}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={waterLevel}
                        onChange={(e) => {
                          const value = parseInt(e.target.value, 10)
                          if (!isNaN(value)) setWaterLevel(value)
                        }}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-cyan"
                      />
                    </div>
                  </div>
                </div>

                {/* Plant Care Products */}
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-green-400/30">
                  <h3 className="font-bold text-xl text-white mb-6">Plant Nutrition</h3>
                  
                  <div className="space-y-4">
                    {fertilizers.map(product => (
                      <div key={product.id} className="flex items-center justify-between bg-green-500/10 rounded-lg p-3 border border-green-400/20">
                        <div>
                          <h4 className="font-semibold text-white text-sm">{product.name.split(' - ')[1] || product.name}</h4>
                          <p className="text-xs text-green-300">Essential nutrients</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-400">€{product.price}</div>
                          <button className="text-xs text-green-300 hover:text-green-200 transition-colors">
                            Add Nutrients
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Plants */}
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-green-400/30">
                  <h3 className="font-bold text-xl text-white mb-6">Plant Collection</h3>
                  
                  <div className="space-y-3">
                    {plantProducts.map(product => (
                      <div key={product.id} className="flex items-center justify-between bg-green-500/10 rounded-lg p-3 border border-green-400/20">
                        <div>
                          <h4 className="font-semibold text-white text-sm line-clamp-1">{product.name.split(' - ')[1] || product.name}</h4>
                          <p className="text-xs text-green-300 capitalize">{product.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-400">€{product.price}</div>
                          <button className="text-xs text-green-300 hover:text-green-200 transition-colors">
                            Plant
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-t from-black/50 to-transparent relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-5xl text-white mb-8">
              Grow With Us
            </h2>
            <p className="text-xl text-green-100 mb-12">
              Ready to cultivate your own aquatic garden? Let's nurture your vision together.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-green-400/30 rounded-xl text-white placeholder-green-300 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-green-400/30 rounded-xl text-white placeholder-green-300 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <select className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-green-400/30 rounded-xl text-white focus:ring-2 focus:ring-green-400 focus:border-transparent">
                <option value="">Experience Level</option>
                <option value="beginner">Beginner - New to planted tanks</option>
                <option value="intermediate">Intermediate - Some experience</option>
                <option value="advanced">Advanced - Experienced aquascaper</option>
              </select>
              <textarea
                placeholder="What plants interest you most?"
                rows={4}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-green-400/30 rounded-xl text-white placeholder-green-300 focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Growing Together
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}