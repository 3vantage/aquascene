import React from 'react'
import { Zap, AlertTriangle, CheckCircle } from 'lucide-react'

interface CompatibilityCheckerProps {
  warnings: string[]
}

export function CompatibilityChecker({ warnings }: CompatibilityCheckerProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5" />
        Compatibility
      </h3>
      
      {warnings.length > 0 ? (
        <div className="space-y-2">
          {warnings.map((warning, index) => (
            <div key={index} className="flex items-start gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-red-200">{warning}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-2 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-sm text-green-200">All elements compatible!</span>
        </div>
      )}
    </div>
  )
}