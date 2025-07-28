import React from 'react'
import { Zap } from 'lucide-react'

interface Innovation {
  title: string
  description: string
  applications: string[]
  maturity: string
  impact: string
}

interface InnovationAreasProps {
  innovations: Innovation[]
}

export function InnovationAreas({ innovations }: InnovationAreasProps) {
  return (
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
          {innovations.map((innovation, index) => (
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
  )
}