import React from 'react'

interface SaveDialogProps {
  isOpen: boolean
  designName: string
  onDesignNameChange: (name: string) => void
  onSave: () => void
  onCancel: () => void
}

export function SaveDialog({ isOpen, designName, onDesignNameChange, onSave, onCancel }: SaveDialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 max-w-md w-full">
        <h3 className="font-bold text-xl text-white mb-4">Save Design</h3>
        <input
          type="text"
          placeholder="Enter design name..."
          value={designName}
          onChange={(e) => onDesignNameChange(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-4"
          autoFocus
        />
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            disabled={!designName.trim()}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}