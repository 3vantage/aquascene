import React, { forwardRef } from 'react'
import { Trash2, Save } from 'lucide-react'

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

interface TankConfig {
  width: number
  height: number
  volume: number
  name: string
}

interface TankDesignerProps {
  selectedTank: TankConfig
  tankElements: TankElement[]
  selectedElement: string | null
  onElementSelect: (id: string) => void
  onDragOver: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent) => void
  onClearTank: () => void
  onSaveDesign: () => void
}

export const TankDesigner = forwardRef<HTMLDivElement, TankDesignerProps>(
  ({ selectedTank, tankElements, selectedElement, onElementSelect, onDragOver, onDrop, onClearTank, onSaveDesign }, ref) => {
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
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-xl text-white">Tank Designer</h3>
          <div className="flex gap-2">
            <button
              onClick={onClearTank}
              className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all"
              title="Clear Tank"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onSaveDesign}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
              title="Save Design"
            >
              <Save className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          {/* Tank Container */}
          <div
            ref={ref}
            className="relative bg-gradient-to-b from-cyan-900/30 to-blue-900/50 border-4 border-gray-600 rounded-xl overflow-hidden mx-auto"
            style={{ 
              width: `${selectedTank.width}px`, 
              height: `${selectedTank.height}px`,
              maxWidth: '100%',
              aspectRatio: `${selectedTank.width}/${selectedTank.height}`
            }}
            onDragOver={onDragOver}
            onDrop={onDrop}
          >
            {/* Water effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-blue-600/20"></div>
            <div className="absolute inset-0 water-shimmer opacity-20"></div>
            
            {/* Tank Elements */}
            {tankElements.map((element) => (
              <div
                key={element.id}
                className={`absolute cursor-pointer transition-all hover:scale-110 ${
                  selectedElement === element.id ? 'ring-2 ring-cyan-400' : ''
                }`}
                style={{
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                  width: `${element.width}%`,
                  height: `${element.height}%`,
                  zIndex: element.zIndex,
                  transform: `rotate(${element.rotation}deg)`
                }}
                onClick={() => onElementSelect(element.id)}
              >
                <div className="w-full h-full rounded-lg flex items-center justify-center text-2xl bg-black/20 backdrop-blur-sm border border-white/20">
                  {getElementIcon(element.type)}
                </div>
                
                {/* Element label */}
                <div className="absolute -bottom-6 left-0 right-0 text-xs text-center text-gray-300 bg-black/50 rounded px-1 truncate">
                  {element.product.name.split(' ').slice(-2).join(' ')}
                </div>
              </div>
            ))}
            
            {/* Drop zone indicator */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg pointer-events-none">
              {tankElements.length === 0 && (
                <div className="text-center">
                  <div className="text-4xl mb-2">🏗️</div>
                  <div>Drag elements here to build your aquascape</div>
                </div>
              )}
            </div>
          </div>
          
          {/* Tank Info */}
          <div className="mt-4 text-center text-sm text-gray-400">
            {selectedTank.name} • {selectedTank.width}×{selectedTank.height}px • {selectedTank.volume}L
          </div>
        </div>
      </div>
    )
  }
)

TankDesigner.displayName = 'TankDesigner'