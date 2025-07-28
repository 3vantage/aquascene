import React from 'react'

interface Biotope {
  id: string
  name: string
  icon: React.ReactNode
}

interface BiotopeSelectorProps {
  biotopes: Biotope[]
  selectedBiotope: string
  onBiotopeSelect: (biotopeId: string) => void
}

export function BiotopeSelector({ biotopes, selectedBiotope, onBiotopeSelect }: BiotopeSelectorProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
            Select Natural Habitat
          </h2>
          <p className="text-lg text-gray-600">
            Choose a biotope to explore its unique characteristics and requirements
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-gray-100 rounded-2xl p-2">
            {biotopes.map((biotope) => (
              <button
                key={biotope.id}
                onClick={() => onBiotopeSelect(biotope.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  selectedBiotope === biotope.id
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {biotope.icon}
                {biotope.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}