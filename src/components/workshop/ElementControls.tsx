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

interface ElementControlsProps {
  selectedElement: string | null
  tankElements: TankElement[]
  onUpdateElement: (id: string, updates: Partial<TankElement>) => void
  onDeleteElement: (id: string) => void
}

export function ElementControls({ selectedElement, tankElements, onUpdateElement, onDeleteElement }: ElementControlsProps) {
  if (!selectedElement) return null

  const element = tankElements.find(el => el.id === selectedElement)
  if (!element) return null

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h3 className="font-bold text-lg text-white mb-4">Element Controls</h3>
      
      <div className="space-y-4">
        <div>
          <div className="text-sm text-gray-300 mb-2">{element.product.name}</div>
          <div className="text-xs text-gray-500">€{element.product.price}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-400">Size</label>
            <input
              type="range"
              min="4"
              max="20"
              value={element.width}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10)
                if (!isNaN(value)) {
                  onUpdateElement(element.id, { 
                    width: value,
                    height: element.type === 'fish' ? value * 0.7 : value
                  })
                }
              }}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400">Rotation</label>
            <input
              type="range"
              min="0"
              max="360"
              value={element.rotation}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10)
                if (!isNaN(value)) onUpdateElement(element.id, { rotation: value })
              }}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => onUpdateElement(element.id, { 
              zIndex: Math.max(0, element.zIndex - 1) 
            })}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
          >
            Send Back
          </button>
          <button
            onClick={() => onUpdateElement(element.id, { 
              zIndex: element.zIndex + 1 
            })}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
          >
            Bring Forward
          </button>
          <button
            onClick={() => onDeleteElement(element.id)}
            className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm ml-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}