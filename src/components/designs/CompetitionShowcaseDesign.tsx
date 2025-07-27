import React, { useState } from 'react'
import { products } from '@/data/products'
import { 
  Trophy, Medal, Star, Award, Users, Clock, 
  Eye, Target, ChevronRight, Crown, Zap, Camera
} from 'lucide-react'

export function CompetitionShowcaseDesign() {
  const [selectedCategory, setSelectedCategory] = useState('iaplc')
  
  const competitions = [
    {
      id: 'iaplc',
      name: 'IAPLC',
      fullName: 'International Aquatic Plants Layout Contest',
      year: '2024',
      entries: '2,847',
      prize: '€50,000',
      status: 'Active',
      deadline: '2024-05-31'
    },
    {
      id: 'cips',
      name: 'CIPS',
      fullName: 'China International Pet Show Contest',
      year: '2024',
      entries: '1,432',
      prize: '€25,000',
      status: 'Judging',
      deadline: '2024-03-15'
    },
    {
      id: 'eaplc',
      name: 'EAPLC',
      fullName: 'European Aquatic Plants Layout Contest',
      year: '2024',
      entries: '892',
      prize: '€15,000',
      status: 'Results',
      deadline: '2024-02-28'
    }
  ]

  const awards = [
    {
      rank: 1,
      title: 'Grand Prize Winner',
      aquascaper: 'Takashi Amano Memorial',
      location: 'Tokyo, Japan',
      tank: '180cm Nature Aquarium',
      points: 2847,
      badge: 'gold'
    },
    {
      rank: 2,
      title: 'Silver Excellence',
      aquascaper: 'European Champion',
      location: 'Amsterdam, Netherlands',
      tank: '120cm Dutch Style',
      points: 2654,
      badge: 'silver'
    },
    {
      rank: 3,
      title: 'Bronze Achievement',
      aquascaper: 'Rising Star',
      location: 'Sofia, Bulgaria',
      tank: '90cm Iwagumi',
      points: 2431,
      badge: 'bronze'
    }
  ]

  const judgingCriteria = [
    { name: 'Composition & Layout', weight: 30, description: 'Balance, focal points, rule of thirds' },
    { name: 'Plant Health & Growth', weight: 25, description: 'Vitality, color, pruning technique' },
    { name: 'Artistic Impression', weight: 20, description: 'Creativity, emotional impact, uniqueness' },
    { name: 'Technical Execution', weight: 15, description: 'Water clarity, equipment hiding, maintenance' },
    { name: 'Innovation & Originality', weight: 10, description: 'New techniques, creative approaches' }
  ]

  const competitionProducts = products.filter(p => p.featured)

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-yellow-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-yellow-100 rounded-full px-6 py-3 mb-8">
              <Trophy className="w-5 h-5 text-red-600 mr-3" />
              <span className="text-red-700 font-semibold">World Championship Arena</span>
            </div>
            
            <h1 className="font-display font-bold text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-yellow-600 to-red-600 bg-clip-text text-transparent">
                Competition
              </span>
              <br />
              <span className="text-gray-900">Showcase</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Where aquascaping legends are born. Witness award-winning masterpieces, study championship techniques, 
              and prepare your own entry for international recognition.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-red-600">5,000+</div>
                <div className="text-gray-600">Global Entries</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Medal className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-yellow-600">€100K+</div>
                <div className="text-gray-600">Prize Pool</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-gray-600">12</div>
                <div className="text-gray-600">Categories</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Trophy className="w-6 h-6" />
                Submit Entry
              </button>
              <button className="border-2 border-red-500 text-red-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Competitions */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Active Competitions
            </h2>
            <p className="text-xl text-gray-600">
              Current contests accepting entries and in judging phases
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {competitions.map((comp) => (
              <div key={comp.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                
                {/* Status Badge */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      comp.status === 'Active' ? 'bg-green-100 text-green-700' :
                      comp.status === 'Judging' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {comp.status}
                    </span>
                    <span className="text-sm text-gray-500">{comp.year}</span>
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{comp.name}</h3>
                  <p className="text-sm text-gray-600 mb-6">{comp.fullName}</p>
                </div>
                
                {/* Stats */}
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="font-bold text-lg text-gray-900">{comp.entries}</div>
                      <div className="text-xs text-gray-500">Entries</div>
                    </div>
                    <div className="text-center bg-red-50 rounded-lg p-3">
                      <div className="font-bold text-lg text-red-600">{comp.prize}</div>
                      <div className="text-xs text-gray-500">Prize Pool</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Deadline:</span>
                    <span className="font-semibold">{comp.deadline}</span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedCategory(comp.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      selectedCategory === comp.id
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Championship Winners */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Hall of Champions
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating the world's most exceptional aquascaping achievements
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-6">
                    
                    {/* Rank Badge */}
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ${
                      award.badge === 'gold' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                      award.badge === 'silver' ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                      'bg-gradient-to-br from-orange-400 to-orange-600'
                    }`}>
                      {award.rank}
                    </div>
                    
                    {/* Award Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-xl text-gray-900 mb-2">{award.title}</h3>
                          <p className="text-gray-600 mb-1">by {award.aquascaper}</p>
                          <p className="text-sm text-gray-500">{award.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-2xl text-red-600">{award.points}</div>
                          <div className="text-sm text-gray-500">points</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{award.tank}</span>
                        <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm">
                          View Setup
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
                Championship Judging Criteria
              </h2>
              <p className="text-xl text-gray-600">
                Understanding what separates good aquascapes from legendary ones
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {judgingCriteria.map((criteria, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-lg text-gray-900">{criteria.name}</h3>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {criteria.weight}%
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{criteria.description}</p>
                    
                    {/* Progress bar showing weight */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-red-500 to-yellow-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${criteria.weight}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-6">Competition Tips</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Perfect Your Timing</div>
                      <div className="text-sm text-gray-600">Submit photos when plants are at peak health</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Photography Excellence</div>
                      <div className="text-sm text-gray-600">Professional lighting and angles are crucial</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Innovation Bonus</div>
                      <div className="text-sm text-gray-600">Original techniques can set you apart</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Maturation Period</div>
                      <div className="text-sm text-gray-600">Allow 3-6 months for optimal development</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Championship Grade Equipment
            </h2>
            <p className="text-xl text-gray-600">
              Professional tools used by winning aquascapers worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitionProducts.map((product) => (
              <div key={product.id} className="bg-gradient-to-br from-white to-red-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                
                {/* Pro Badge */}
                <div className="p-4 pb-0">
                  <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Competition Grade
                  </span>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-200/30 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-red-700 font-medium text-sm uppercase tracking-wider">
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
                      <span className="font-bold text-2xl text-red-600">€{product.price}</span>
                      <div className="text-xs text-gray-500">Professional Grade</div>
                    </div>
                    <button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-3 rounded-full hover:from-red-600 hover:to-yellow-600 transition-all transform hover:scale-110 shadow-lg">
                      <Crown className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Contact */}
      <section className="py-24 bg-gradient-to-br from-red-500 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="w-16 h-16 mx-auto mb-8 opacity-90" />
            <h2 className="font-display font-bold text-4xl mb-6">
              Ready to Compete?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join thousands of aquascapers competing for international recognition and substantial prizes
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Expert Mentorship</div>
                <div className="text-sm opacity-80">Learn from champions</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Global Recognition</div>
                <div className="text-sm opacity-80">International exposure</div>
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
                <option value="" className="text-gray-800">Competition Interest</option>
                <option value="iaplc" className="text-gray-800">IAPLC - International Contest</option>
                <option value="cips" className="text-gray-800">CIPS - China Pet Show</option>
                <option value="eaplc" className="text-gray-800">EAPLC - European Contest</option>
                <option value="local" className="text-gray-800">Local/Regional Competitions</option>
              </select>
              <button
                type="submit"
                className="w-full bg-white text-red-600 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Enter Championship Arena
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}