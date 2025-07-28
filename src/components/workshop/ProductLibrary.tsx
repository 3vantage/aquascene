import React from 'react'
import { Layers } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  category: string
}

interface CategorizedProducts {
  soil: Product[]
  stone: Product[]
  plant: Product[]
  fish: Product[]
  fertilizer: Product[]
}

interface ProductLibraryProps {
  categorizedProducts: CategorizedProducts
  onDragStart: (e: React.DragEvent, product: Product) => void
}

export function ProductLibrary({ categorizedProducts, onDragStart }: ProductLibraryProps) {
  const getElementIcon = (type: string) => {
    switch (type) {
      case 'fish': return '🐠'
      case 'plant': return '🌱'
      case 'stone': return '🪨'
      case 'soil': return '🟤'
      default: return '❓'
    }
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
        <Layers className="w-6 h-6" />
        Elements Library
      </h3>
      
      <div className="space-y-6">
        {Object.entries(categorizedProducts).map(([category, productList]) => (
          <div key={category}>
            <h4 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wider">
              {category}
            </h4>
            <div className="space-y-2">
              {productList.map((product: any) => (
                <div
                  key={product.id}
                  draggable
                  onDragStart={(e) => onDragStart(e, product)}
                  className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg cursor-grab hover:bg-gray-700 transition-all border border-gray-600/50 hover:border-gray-500"
                >
                  <div className="text-lg">{getElementIcon(product.category)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-white truncate">
                      {product.name.split(' - ')[1] || product.name}
                    </div>
                    <div className="text-xs text-gray-400">€{product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}