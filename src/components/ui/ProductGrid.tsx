'use client'

import React from 'react'
import { Product } from '@/types'
import { ProductCard } from './ProductCard'
import { cn } from '@/lib/utils'

interface ProductGridProps {
  products: Product[]
  columns?: 2 | 3 | 4
  variant?: 'default' | 'compact' | 'detailed'
  onAddToCart?: (product: Product) => void
  onQuickView?: (product: Product) => void
  className?: string
  showEmpty?: boolean
  emptyMessage?: string
}

const columnClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
}

export function ProductGrid({
  products,
  columns = 3,
  variant = 'default',
  onAddToCart,
  onQuickView,
  className,
  showEmpty = true,
  emptyMessage = 'No products found'
}: ProductGridProps) {
  if (products.length === 0 && showEmpty) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Products</h3>
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className={cn(
      'grid gap-4 sm:gap-6 lg:gap-8',
      columnClasses[columns],
      className
    )}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          variant={variant}
          onAddToCart={onAddToCart}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  )
}