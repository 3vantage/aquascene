import React from 'react'

interface TankConfig {
  width: number
  height: number
  volume: number
  name: string
}

interface TankSizeSelectorProps {
  tankSizes: TankConfig[]
  selectedTank: TankConfig
  onTankSelect: (tank: TankConfig) => void
}

export function TankSizeSelector({ tankSizes, selectedTank, onTankSelect }: TankSizeSelectorProps) {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <h3 className="font-semibold text-lg text-white mb-4 text-center">Choose Tank Size</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {tankSizes.map(tank => (
          <button
            key={tank.name}
            onClick={() => onTankSelect(tank)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedTank.name === tank.name
                ? 'border-cyan-400 bg-cyan-400/20 text-white'
                : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500'
            }`}
          >
            <div className="font-semibold text-sm">{tank.name}</div>
            <div className="text-xs text-gray-400">{tank.width}×{tank.height}</div>
          </button>
        ))}
      </div>
    </div>
  )
}