import React from 'react'
import { Settings, TrendingUp } from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  featured?: boolean
}

interface EquipmentShowcaseProps {
  products: Product[]
}

export function EquipmentShowcase({ products }: EquipmentShowcaseProps) {
  return (
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
          {products.filter(p => p.featured === true).slice(0, 6).map((product) => (
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
  )
}