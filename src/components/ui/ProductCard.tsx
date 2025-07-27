'use client'

import React from 'react'
import { Product } from '@/types'
import { Card, CardContent, CardFooter } from './Card'
import { Button } from './Button'
import { ShoppingCart, Eye, Droplets, Fish, Leaf, Mountain } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  variant?: 'default' | 'compact' | 'detailed'
  onAddToCart?: (product: Product) => void
  onQuickView?: (product: Product) => void
  className?: string
}

const categoryIcons = {
  plant: <Leaf className="w-6 h-6" />,
  fish: <Fish className="w-6 h-6" />,
  stone: <Mountain className="w-6 h-6" />,
  soil: <Droplets className="w-6 h-6" />,
  fertilizer: <Leaf className="w-6 h-6" />,
}

const categoryColors = {
  plant: 'from-green-500 to-emerald-500',
  fish: 'from-blue-500 to-cyan-500',
  stone: 'from-gray-500 to-slate-500',
  soil: 'from-amber-500 to-orange-500',
  fertilizer: 'from-emerald-500 to-teal-500',
}

export function ProductCard({ 
  product, 
  variant = 'default',
  onAddToCart,
  onQuickView,
  className 
}: ProductCardProps) {
  return (
    <Card 
      variant="hover" 
      padding="none"
      className={cn('group relative overflow-hidden', className)}
    >
      {/* Product Image Placeholder */}
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-20',
          categoryColors[product.category as keyof typeof categoryColors]
        )} />
        
        {/* Category Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className={cn(
            'w-20 h-20 rounded-full bg-gradient-to-br flex items-center justify-center text-white shadow-lg',
            categoryColors[product.category as keyof typeof categoryColors]
          )}>
            {categoryIcons[product.category as keyof typeof categoryIcons]}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Quick view"
            >
              <Eye className="w-5 h-5 text-gray-700" />
            </button>
          )}
        </div>

        {/* Badge */}
        {product.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Category */}
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          {product.category}
        </div>

        {/* Name */}
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        {variant !== 'compact' && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-bold text-2xl text-gray-900">€{product.price}</span>
          <span className="text-sm text-gray-500">EUR</span>
        </div>

        {/* Add to Cart Button */}
        {onAddToCart && (
          <Button
            variant="primary"
            size="sm"
            fullWidth
            onClick={() => onAddToCart(product)}
            icon={<ShoppingCart className="w-4 h-4" />}
            iconPosition="left"
          >
            Add to Cart
          </Button>
        )}
      </CardContent>
    </Card>
  )
}