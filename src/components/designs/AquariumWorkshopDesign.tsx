import React, { useState, useRef, useEffect, useCallback } from 'react'
import { products } from '@/data/products'
import { useDebouncedCallback } from '@/hooks/useDebounce'
import { TankSizeSelector } from '@/components/workshop/TankSizeSelector'
import { ProductLibrary } from '@/components/workshop/ProductLibrary'
import { TankDesigner } from '@/components/workshop/TankDesigner'
import { ElementControls } from '@/components/workshop/ElementControls'
import { CompatibilityChecker } from '@/components/workshop/CompatibilityChecker'
import { CostCalculator } from '@/components/workshop/CostCalculator'
import { SavedDesigns } from '@/components/workshop/SavedDesigns'
import { SaveDialog } from '@/components/workshop/SaveDialog'
import { WorkshopContactForm } from '@/components/workshop/WorkshopContactForm'

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

  const handleDragStart = useCallback((e: React.DragEvent, product: any) => {
    if (e?.dataTransfer) {
      setDraggedProduct(product)
      e.dataTransfer.effectAllowed = 'copy'
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e?.preventDefault?.()
    if (e?.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy'
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e?.preventDefault?.()
    if (!draggedProduct || !tankRef.current || !e?.dataTransfer) return

    try {
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
    } catch (error) {
      console.error('Error handling drop:', error)
    }
  }, [draggedProduct, tankElements])

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
          
          <TankSizeSelector 
            tankSizes={TANK_SIZES}
            selectedTank={selectedTank}
            onTankSelect={setSelectedTank}
          />
        </div>
      </section>

      {/* Main Workshop */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            
            <ProductLibrary 
              categorizedProducts={categorizedProducts}
              onDragStart={handleDragStart}
            />

            {/* Tank Designer */}
            <div className="lg:col-span-2 space-y-6">
              
              <TankDesigner 
                ref={tankRef}
                selectedTank={selectedTank}
                tankElements={tankElements}
                selectedElement={selectedElement}
                onElementSelect={setSelectedElement}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClearTank={clearTank}
                onSaveDesign={() => setShowSaveDialog(true)}
              />

              <ElementControls 
                selectedElement={selectedElement}
                tankElements={tankElements}
                onUpdateElement={updateElement}
                onDeleteElement={deleteElement}
              />
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              
              <CompatibilityChecker warnings={compatibilityWarnings} />

              <CostCalculator 
                tankElements={tankElements}
                totalCost={calculateCost()}
              />

              <SavedDesigns 
                savedDesigns={savedDesigns}
                onLoadDesign={loadDesign}
              />
            </div>
          </div>
        </div>
      </section>

      <SaveDialog 
        isOpen={showSaveDialog}
        designName={designName}
        onDesignNameChange={setDesignName}
        onSave={saveDesign}
        onCancel={() => setShowSaveDialog(false)}
      />

      <WorkshopContactForm />
    </div>
  )
}