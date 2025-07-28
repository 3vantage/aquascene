import React from 'react'

interface TankElement {
  id: string
  type: 'stone' | 'plant' | 'fish' | 'soil'
  product: any
  x: number
  y: number
  width: number
  height: number
  rotation: number
  zIndex: number
}

interface CostCalculatorProps {
  tankElements: TankElement[]
  totalCost: string
}

export function CostCalculator({ tankElements, totalCost }: CostCalculatorProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h3 className="font-bold text-lg text-white mb-4">Cost Estimate</h3>
      
      <div className="space-y-3">
        {tankElements.map((element) => (
          <div key={element.id} className="flex justify-between text-sm">
            <span className="text-gray-300 truncate">
              {element.product.name.split(' ').slice(-2).join(' ')}
            </span>
            <span className="text-white">€{element.product.price}</span>
          </div>
        ))}
        
        {tankElements.length > 0 && (
          <>
            <hr className="border-gray-600" />
            <div className="flex justify-between font-bold text-lg">
              <span className="text-white">Total</span>
              <span className="text-cyan-400">€{totalCost}</span>
            </div>
          </>
        )}
        
        {tankElements.length === 0 && (
          <div className="text-gray-500 text-center py-4">
            Add elements to see cost
          </div>
        )}
      </div>
    </div>
  )
}