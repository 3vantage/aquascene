import React, { useState } from 'react'
import { products } from '@/data/products'
import { 
  Globe, TreePine, Fish, Mountain, Waves, 
  Thermometer, Droplets, Wind, Sun, Leaf,
  MapPin, Camera, BookOpen, Target, Award
} from 'lucide-react'

export function BiotopeSpecialistDesign() {
  const [selectedBiotope, setSelectedBiotope] = useState('amazon')
  
  const biotopes = [
    {
      id: 'amazon',
      name: 'Amazon Basin',
      region: 'South America',
      difficulty: 'Intermediate',
      temperature: '24-28°C',
      ph: '6.0-7.0',
      hardness: '1-5 dGH',
      substrate: 'Fine sand, leaf litter',
      plants: ['Echinodorus amazonicus', 'Cabomba caroliniana', 'Vallisneria americana'],
      fish: ['Cardinal Tetra', 'Angelfish', 'Corydoras'],
      image: 'bg-gradient-to-br from-green-600 to-emerald-700',
      icon: <TreePine className="w-6 h-6" />
    },
    {
      id: 'malawi',
      name: 'Lake Malawi',
      region: 'East Africa',
      difficulty: 'Advanced',
      temperature: '24-26°C',
      ph: '7.8-8.6',
      hardness: '10-25 dGH',
      substrate: 'Coral sand, rocks',
      plants: ['Vallisneria spiralis', 'Anubias barteri'],
      fish: ['Mbuna Cichlids', 'Peacock Cichlids', 'Haplochromis'],
      image: 'bg-gradient-to-br from-blue-600 to-cyan-700',
      icon: <Mountain className="w-6 h-6" />
    },
    {
      id: 'borneo',
      name: 'Borneo Stream',
      region: 'Southeast Asia',
      difficulty: 'Expert',
      temperature: '22-26°C',
      ph: '5.5-6.5',
      hardness: '1-3 dGH',
      substrate: 'River rocks, driftwood',
      plants: ['Cryptocoryne wendtii', 'Bucephalandra', 'Java moss'],
      fish: ['Rasbora species', 'Loaches', 'Otocinclus'],
      image: 'bg-gradient-to-br from-amber-600 to-orange-700',
      icon: <Waves className="w-6 h-6" />
    },
    {
      id: 'madagascar',
      name: 'Madagascar Rivers',
      region: 'Madagascar',
      difficulty: 'Expert',
      temperature: '20-24°C',
      ph: '6.5-7.5',
      hardness: '5-15 dGH',
      substrate: 'Sandy bottom, granite rocks',
      plants: ['Aponogeton madagascariensis', 'Crinum natans'],
      fish: ['Pachypanchax', 'Paretroplus', 'Bedotia'],
      image: 'bg-gradient-to-br from-red-600 to-pink-700',
      icon: <Sun className="w-6 h-6" />
    }
  ]

  const currentBiotope = biotopes.find(b => b.id === selectedBiotope) || biotopes[0]

  const conservationEfforts = [
    {
      region: 'Amazon Basin',
      status: 'Critical',
      protected: '12.3M hectares',
      threat: 'Deforestation',
      action: 'Habitat preservation'
    },
    {
      region: 'Lake Malawi',
      status: 'Vulnerable',
      protected: '94,000 hectares',
      threat: 'Overfishing',
      action: 'Species protection'
    },
    {
      region: 'Borneo Streams',
      status: 'Endangered',
      protected: '2.1M hectares',
      threat: 'Palm oil expansion',
      action: 'Corridor creation'
    }
  ]

  const fieldStudies = [
    {
      title: 'Amazon Blackwater Research',
      location: 'Rio Negro, Brazil',
      duration: '6 months',
      species: '47 documented',
      lead: 'Dr. Maria Santos'
    },
    {
      title: 'Malawi Cichlid Evolution',
      location: 'Lake Malawi, Malawi',
      duration: '2 years',
      species: '200+ studied',
      lead: 'Prof. James Mkandawire'
    },
    {
      title: 'Borneo Endemic Survey',
      location: 'Kinabatangan River',
      duration: '1 year',
      species: '31 new species',
      lead: 'Dr. Lim Wei Ming'
    }
  ]

  const equipment = [
    {
      name: 'pH Buffer System',
      use: 'Water chemistry control',
      biotopes: ['Amazon', 'Borneo'],
      price: '€89'
    },
    {
      name: 'Mineral Supplement',
      use: 'Hardness adjustment',
      biotopes: ['Malawi', 'Madagascar'],
      price: '€34'
    },
    {
      name: 'Tannin Extract',
      use: 'Blackwater simulation',
      biotopes: ['Amazon', 'Borneo'],
      price: '€25'
    }
  ]

  const speciesCatalog = products.filter(p => p.category === 'plant' || p.category === 'fish')

  return (
    <div className="pt-20 bg-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="inline-flex items-center bg-gradient-to-r from-brown-100 to-green-100 rounded-full px-6 py-3 mb-8" style={{backgroundColor: '#fef7ed'}}>
              <Globe className="w-5 h-5 text-amber-700 mr-3" />
              <span className="text-amber-800 font-semibold">Natural Habitat Recreation</span>
            </div>
            
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-amber-700 via-green-700 to-cyan-700 bg-clip-text text-transparent">
                Biotope
              </span>
              <br />
              <span className="text-gray-900">Specialist</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Authentic recreation of natural aquatic habitats. Study indigenous ecosystems, 
              replicate environmental conditions, and preserve biodiversity through scientific aquascaping.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-green-700">45</div>
                <div className="text-gray-600">Biotopes</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Fish className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-amber-700">1,247</div>
                <div className="text-gray-600">Species</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-cyan-700">6</div>
                <div className="text-gray-600">Continents</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-emerald-700">98%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Globe className="w-6 h-6" />
                Explore Biotopes
              </button>
              <button className="border-2 border-green-600 text-green-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all">
                Species Database
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Biotope Selection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
              Select Natural Habitat
            </h2>
            <p className="text-lg text-gray-600">
              Choose a biotope to explore its unique characteristics and requirements
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap justify-center gap-2 bg-gray-100 rounded-2xl p-2">
              {biotopes.map((biotope) => (
                <button
                  key={biotope.id}
                  onClick={() => setSelectedBiotope(biotope.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    selectedBiotope === biotope.id
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  {biotope.icon}
                  {biotope.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Biotope Details */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Biotope Header */}
            <div className={`rounded-3xl p-12 text-white mb-12 ${currentBiotope.image}`}>
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {currentBiotope.icon}
                </div>
                <h2 className="font-display font-bold text-4xl mb-4">{currentBiotope.name}</h2>
                <p className="text-xl opacity-90 mb-6">{currentBiotope.region}</p>
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2">
                  <Target className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Difficulty: {currentBiotope.difficulty}</span>
                </div>
              </div>
            </div>

            {/* Environment Parameters */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-6">Water Parameters</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Thermometer className="w-5 h-5 text-red-500" />
                      <span className="text-gray-700">Temperature</span>
                    </div>
                    <span className="font-semibold text-gray-900">{currentBiotope.temperature}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Droplets className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">pH Range</span>
                    </div>
                    <span className="font-semibold text-gray-900">{currentBiotope.ph}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Wind className="w-5 h-5 text-cyan-500" />
                      <span className="text-gray-700">Hardness</span>
                    </div>
                    <span className="font-semibold text-gray-900">{currentBiotope.hardness}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">Substrate</div>
                    <div className="text-gray-900 font-medium">{currentBiotope.substrate}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-6">Indigenous Plants</h3>
                <div className="space-y-3">
                  {currentBiotope.plants.map((plant, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <Leaf className="w-4 h-4 text-green-600" />
                      <span className="text-gray-800 text-sm italic">{plant}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-6">Native Fish Species</h3>
                <div className="space-y-3">
                  {currentBiotope.fish.map((fish, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Fish className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-800 text-sm">{fish}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Status */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Conservation Efforts
            </h2>
            <p className="text-xl text-gray-600">
              Supporting habitat preservation through education and awareness
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {conservationEfforts.map((effort, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-green-100">
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-900">{effort.region}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    effort.status === 'Critical' ? 'bg-red-100 text-red-700' :
                    effort.status === 'Vulnerable' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {effort.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Protected Area:</span>
                    <span className="font-medium text-green-700">{effort.protected}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Main Threat:</span>
                    <span className="font-medium text-red-600">{effort.threat}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Conservation:</span>
                    <span className="font-medium text-blue-600">{effort.action}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Studies */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Active Field Research
            </h2>
            <p className="text-xl text-gray-600">
              Ongoing scientific expeditions documenting natural habitats
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {fieldStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{study.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {study.location}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="font-bold text-lg text-gray-900">{study.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                  <div className="text-center bg-green-50 rounded-lg p-3">
                    <div className="font-bold text-lg text-green-700">{study.species}</div>
                    <div className="text-xs text-gray-500">Species</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Lead: {study.lead}</span>
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                    View Progress
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biotope Equipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Biotope-Specific Equipment
            </h2>
            <p className="text-xl text-gray-600">
              Specialized tools for authentic habitat recreation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-amber-100">
                
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center text-white">
                    <TreePine className="w-6 h-6" />
                  </div>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Biotope Grade
                  </span>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.use}</p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Suitable for:</div>
                  <div className="flex flex-wrap gap-2">
                    {item.biotopes.map((biotope, i) => (
                      <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                        {biotope}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl text-amber-700">{item.price}</span>
                  <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all">
                    Add to Setup
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Species Catalog */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Indigenous Species Catalog
            </h2>
            <p className="text-xl text-gray-600">
              Documented flora and fauna from natural biotopes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speciesCatalog.slice(0, 6).map((species) => (
              <div key={species.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                
                <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      {species.category === 'plant' ? <Leaf className="w-8 h-8 text-white" /> : <Fish className="w-8 h-8 text-white" />}
                    </div>
                    <span className="text-green-700 font-medium text-sm uppercase tracking-wider">
                      {species.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {species.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {species.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-2xl text-green-700">€{species.price}</span>
                      <div className="text-xs text-gray-500">Native Species</div>
                    </div>
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-3 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-110 shadow-lg">
                      <BookOpen className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 mx-auto mb-8 opacity-90" />
            <h2 className="font-display font-bold text-4xl mb-6">
              Start Your Biotope Journey
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Create authentic natural habitats and contribute to conservation efforts
            </p>
            
            <form className="max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
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
                <option value="" className="text-gray-800">Choose Biotope Interest</option>
                <option value="amazon" className="text-gray-800">Amazon Basin - South America</option>
                <option value="malawi" className="text-gray-800">Lake Malawi - East Africa</option>
                <option value="borneo" className="text-gray-800">Borneo Stream - Southeast Asia</option>
                <option value="madagascar" className="text-gray-800">Madagascar Rivers - Madagascar</option>
              </select>
              <textarea
                placeholder="Tell us about your biotope goals and experience..."
                rows={4}
                className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent mb-6"
              />
              <button
                type="submit"
                className="w-full bg-white text-green-600 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Begin Biotope Project
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}