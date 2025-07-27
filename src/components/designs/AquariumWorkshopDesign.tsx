import React, { useState, useRef, useEffect } from 'react'
import { products } from '@/data/products'
import { 
  Layers, Save, Share2, RotateCcw, Zap, AlertTriangle, 
  CheckCircle, Settings, Eye, Trash2, Copy, Download
} from 'lucide-react'

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

const TANK_SIZES = [
  { name: 'Nano (20L)', width: 300, height: 200, volume: 20 },
  { name: 'Small (40L)', width: 400, height: 250, volume: 40 },
  { name: 'Medium (80L)', width: 500, height: 300, volume: 80 },
  { name: 'Large (120L)', width: 600, height: 350, volume: 120 },
  { name: 'XL (200L)', width: 700, height: 400, volume: 200 }
]

const COMPATIBILITY_RULES = {
  'betta-splendens-crown-tail': {
    incompatible: ['betta-splendens-crown-tail'], // No other bettas
    minVolume: 20,
    waterParams: { ph: [6.5, 7.5], temp: [24, 28] }
  }
}

export function AquariumWorkshopDesign() {
  const [selectedTank, setSelectedTank] = useState<TankConfig>(TANK_SIZES[1])
  const [tankElements, setTankElements] = useState<TankElement[]>([])
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [draggedProduct, setDraggedProduct] = useState<any>(null)
  const [compatibilityWarnings, setCompatibilityWarnings] = useState<string[]>([])
  const [savedDesigns, setSavedDesigns] = useState<any[]>([])
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [designName, setDesignName] = useState('')
  
  const tankRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<HTMLDivElement>(null)

  const categorizedProducts = {
    soil: products.filter(p => p.category === 'soil'),
    stone: products.filter(p => p.category === 'stone'),
    plant: products.filter(p => p.category === 'plant'),
    fish: products.filter(p => p.category === 'fish'),
    fertilizer: products.filter(p => p.category === 'fertilizer')
  }

  // Check compatibility when elements change
  useEffect(() => {
    const warnings: string[] = []
    const fishElements = tankElements.filter(el => el.type === 'fish')
    
    // Check tank volume vs fish bioload
    const totalFish = fishElements.length
    const minVolumeNeeded = totalFish * 20 // Basic rule: 20L per small fish
    
    if (minVolumeNeeded > selectedTank.volume) {
      warnings.push(`Tank too small: Need ${minVolumeNeeded}L for ${totalFish} fish (have ${selectedTank.volume}L)`)
    }
    
    // Check for incompatible fish
    const bettas = fishElements.filter(f => f.product.id.includes('betta'))
    if (bettas.length > 1) {
      warnings.push('Multiple bettas detected - they will fight!')
    }
    
    setCompatibilityWarnings(warnings)
  }, [tankElements, selectedTank])

  const handleDragStart = (e: React.DragEvent, product: any) => {
    setDraggedProduct(product)
    e.dataTransfer.effectAllowed = 'copy'
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (!draggedProduct || !tankRef.current) return

    const rect = tankRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    const newElement: TankElement = {
      id: `${draggedProduct.id}-${Date.now()}`,
      type: draggedProduct.category,
      product: draggedProduct,
      x: Math.max(0, Math.min(90, x)),
      y: Math.max(0, Math.min(90, y)),
      width: draggedProduct.category === 'fish' ? 8 : draggedProduct.category === 'plant' ? 6 : 12,
      height: draggedProduct.category === 'fish' ? 6 : draggedProduct.category === 'plant' ? 8 : 10,
      rotation: 0,
      zIndex: tankElements.length
    }

    setTankElements(prev => [...prev, newElement])
    setDraggedProduct(null)
  }

  const updateElement = (id: string, updates: Partial<TankElement>) => {
    setTankElements(prev => 
      prev.map(el => el.id === id ? { ...el, ...updates } : el)
    )
  }

  const deleteElement = (id: string) => {
    setTankElements(prev => prev.filter(el => el.id !== id))
    setSelectedElement(null)
  }

  const clearTank = () => {
    setTankElements([])
    setSelectedElement(null)
  }

  const saveDesign = () => {
    if (!designName.trim()) return
    
    const design = {
      id: Date.now(),
      name: designName,
      tank: selectedTank,
      elements: tankElements,
      createdAt: new Date().toISOString()
    }
    
    setSavedDesigns(prev => [...prev, design])
    setShowSaveDialog(false)
    setDesignName('')
  }

  const loadDesign = (design: any) => {
    setSelectedTank(design.tank)
    setTankElements(design.elements)
    setSelectedElement(null)
  }

  const calculateCost = () => {
    const productCosts = tankElements.reduce((total, element) => {
      return total + element.product.price
    }, 0)
    return productCosts.toFixed(2)
  }

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
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 min-h-screen text-white">
      
      {/* Header */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="font-display font-bold text-5xl lg:text-6xl mb-6">
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Aquarium
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-300 via-green-300 to-emerald-300 bg-clip-text text-transparent">
                Workshop
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Design, build, and visualize your perfect aquascape. Drag and drop elements, 
              check compatibility, and save your creations.
            </p>
          </div>
          
          {/* Tank Size Selector */}
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="font-semibold text-lg text-white mb-4 text-center">Choose Tank Size</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {TANK_SIZES.map(tank => (
                <button
                  key={tank.name}
                  onClick={() => setSelectedTank(tank)}
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
        </div>
      </section>

      {/* Main Workshop */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Product Library */}
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
                      {productList.map(product => (
                        <div
                          key={product.id}
                          draggable
                          onDragStart={(e) => handleDragStart(e, product)}
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

            {/* Tank Designer */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Tank View */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl text-white">Tank Designer</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={clearTank}
                      className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all"
                      title="Clear Tank"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setShowSaveDialog(true)}
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
                    ref={tankRef}
                    className="relative bg-gradient-to-b from-cyan-900/30 to-blue-900/50 border-4 border-gray-600 rounded-xl overflow-hidden mx-auto"
                    style={{ 
                      width: `${selectedTank.width}px`, 
                      height: `${selectedTank.height}px`,
                      maxWidth: '100%',
                      aspectRatio: `${selectedTank.width}/${selectedTank.height}`
                    }}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
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
                        onClick={() => setSelectedElement(element.id)}
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

              {/* Element Controls */}
              {selectedElement && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                  <h3 className="font-bold text-lg text-white mb-4">Element Controls</h3>
                  
                  {(() => {
                    const element = tankElements.find(el => el.id === selectedElement)
                    if (!element) return null
                    
                    return (
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
                              onChange={(e) => updateElement(element.id, { 
                                width: parseInt(e.target.value),
                                height: element.type === 'fish' ? parseInt(e.target.value) * 0.7 : parseInt(e.target.value)
                              })}
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
                              onChange={(e) => updateElement(element.id, { rotation: parseInt(e.target.value) })}
                              className="w-full"
                            />
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => updateElement(element.id, { 
                              zIndex: Math.max(0, element.zIndex - 1) 
                            })}
                            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                          >
                            Send Back
                          </button>
                          <button
                            onClick={() => updateElement(element.id, { 
                              zIndex: element.zIndex + 1 
                            })}
                            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                          >
                            Bring Forward
                          </button>
                          <button
                            onClick={() => deleteElement(element.id)}
                            className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm ml-auto"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )
                  })()}
                </div>
              )}
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              
              {/* Compatibility Check */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Compatibility
                </h3>
                
                {compatibilityWarnings.length > 0 ? (
                  <div className="space-y-2">
                    {compatibilityWarnings.map((warning, index) => (
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

              {/* Cost Calculator */}
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
                        <span className="text-cyan-400">€{calculateCost()}</span>
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

              {/* Saved Designs */}
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
                          onClick={() => loadDesign(design)}
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
            </div>
          </div>
        </div>
      </section>

      {/* Save Dialog */}
      {showSaveDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 max-w-md w-full">
            <h3 className="font-bold text-xl text-white mb-4">Save Design</h3>
            <input
              type="text"
              placeholder="Enter design name..."
              value={designName}
              onChange={(e) => setDesignName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-4"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowSaveDialog(false)}
                className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
              >
                Cancel
              </button>
              <button
                onClick={saveDesign}
                disabled={!designName.trim()}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-all"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-t from-black/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-5xl text-white mb-8">
              Ready to Build?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Turn your digital design into reality. We'll help source all the elements and guide your build.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                placeholder="Preferred Tank Size"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <textarea
                placeholder="Tell us about your design and any questions..."
                rows={4}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Building My Aquascape
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}