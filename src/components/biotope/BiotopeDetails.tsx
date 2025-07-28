import React from 'react'
import { Thermometer, Droplets, Wind, Target, Leaf, Fish } from 'lucide-react'

interface BiotopeData {
  id: string
  name: string
  region: string
  difficulty: string
  temperature: string
  ph: string
  hardness: string
  substrate: string
  plants: string[]
  fish: string[]
  image: string
  icon: React.ReactNode
}

interface BiotopeDetailsProps {
  biotope: BiotopeData
}

export function BiotopeDetails({ biotope }: BiotopeDetailsProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Biotope Header */}
          <div className={`rounded-3xl p-12 text-white mb-12 ${biotope.image}`}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                {biotope.icon}
              </div>
              <h2 className="font-display font-bold text-4xl mb-4">{biotope.name}</h2>
              <p className="text-xl opacity-90 mb-6">{biotope.region}</p>
              <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Difficulty: {biotope.difficulty}</span>
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
                  <span className="font-semibold text-gray-900">{biotope.temperature}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">pH Range</span>
                  </div>
                  <span className="font-semibold text-gray-900">{biotope.ph}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wind className="w-5 h-5 text-cyan-500" />
                    <span className="text-gray-700">Hardness</span>
                  </div>
                  <span className="font-semibold text-gray-900">{biotope.hardness}</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Substrate</div>
                  <div className="text-gray-900 font-medium">{biotope.substrate}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-xl text-gray-900 mb-6">Indigenous Plants</h3>
              <div className="space-y-3">
                {biotope.plants.map((plant, index) => (
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
                {biotope.fish.map((fish, index) => (
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
  )
}