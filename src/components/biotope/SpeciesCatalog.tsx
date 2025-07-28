import React from 'react'
import { Leaf, Fish, BookOpen } from 'lucide-react'

interface Species {
  id: string
  name: string
  description: string
  price: number
  category: string
}

interface SpeciesCatalogProps {
  species: Species[]
}

export function SpeciesCatalog({ species }: SpeciesCatalogProps) {
  return (
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
          {species.slice(0, 6).map((speciesItem) => (
            <div key={speciesItem.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {speciesItem.category === 'plant' ? <Leaf className="w-8 h-8 text-white" /> : <Fish className="w-8 h-8 text-white" />}
                  </div>
                  <span className="text-green-700 font-medium text-sm uppercase tracking-wider">
                    {speciesItem.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {speciesItem.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {speciesItem.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-2xl text-green-700">€{speciesItem.price}</span>
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
  )
}