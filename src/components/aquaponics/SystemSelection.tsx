import React from 'react'
import { Sprout, Fish, Leaf } from 'lucide-react'

interface System {
  id: string
  name: string
  fullName: string
  efficiency: string
  waterUse: string
  yield: string
  plants: string[]
  fish: string[]
  difficulty: string
  investment: string
}

interface SystemSelectionProps {
  systems: System[]
  activeSystem: string
  onSystemChange: (systemId: string) => void
  currentSystem: System
}

export function SystemSelection({ systems, activeSystem, onSystemChange, currentSystem }: SystemSelectionProps) {
  return (
    <>
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
                  onClick={() => onSystemChange(system.id)}
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
    </>
  )
}