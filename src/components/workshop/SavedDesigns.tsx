import React from 'react'

interface SavedDesign {
  id: number
  name: string
  tank: any
  elements: any[]
  createdAt: string
}

interface SavedDesignsProps {
  savedDesigns: SavedDesign[]
  onLoadDesign: (design: SavedDesign) => void
}

export function SavedDesigns({ savedDesigns, onLoadDesign }: SavedDesignsProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h3 className="font-bold text-lg text-white mb-4">Saved Designs</h3>
      
      {savedDesigns.length > 0 ? (
        <div className="space-y-2">
          {savedDesigns.map((design) => (
            <div key={design.id} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
              <div>
                <div className="font-medium text-white text-sm">{design.name}</div>
                <div className="text-xs text-gray-400">{design.elements.length} elements</div>
              </div>
              <button
                onClick={() => onLoadDesign(design)}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
              >
                Load
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center py-4 text-sm">
          No saved designs yet
        </div>
      )}
    </div>
  )
}