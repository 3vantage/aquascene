import React from 'react'
import { TreePine } from 'lucide-react'

interface Equipment {
  name: string
  use: string
  biotopes: string[]
  price: string
}

interface BiotopeEquipmentProps {
  equipment: Equipment[]
}

export function BiotopeEquipment({ equipment }: BiotopeEquipmentProps) {
  return (
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
  )
}