'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  animation?: 'pulse' | 'wave' | 'none'
  lines?: number
}

export function Skeleton({ 
  className, 
  variant = 'rectangular',
  animation = 'pulse',
  lines = 1
}: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-gray-200'
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full aspect-square',  
    rectangular: 'rounded-lg'
  }

  const animationVariants = {
    pulse: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as const
      }
    },
    wave: {
      backgroundPosition: ['-200px 0', '200px 0', '-200px 0'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: [0, 0, 1, 1] as const
      }
    },
    none: {}
  }

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }, (_, i) => (
          <motion.div
            key={i}
            className={cn(
              baseClasses,
              variantClasses.text,
              i === lines - 1 ? 'w-3/4' : 'w-full', // Last line is shorter
              className
            )}
            animate={animation !== 'none' ? animationVariants[animation] : {}}
            style={animation === 'wave' ? {
              backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              backgroundSize: '200px 100%',
              backgroundRepeat: 'no-repeat'
            } : {}}
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className={cn(baseClasses, variantClasses[variant], className)}
      animate={animation !== 'none' ? animationVariants[animation] : {}}
      style={animation === 'wave' ? {
        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        backgroundSize: '200px 100%',
        backgroundRepeat: 'no-repeat'
      } : {}}
    />
  )
}

// Pre-built skeleton components for common patterns
export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <Skeleton className="h-48 mb-4" />
      <Skeleton variant="text" className="h-6 mb-2" />
      <Skeleton variant="text" lines={2} className="mb-4" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Skeleton className="h-12 w-32 mb-8" />
            <Skeleton variant="text" lines={3} className="h-8 mb-6" />
            <Skeleton variant="text" lines={2} className="mb-8" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
          <div>
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function NavigationSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex items-center gap-8">
            {Array.from({ length: 4 }, (_, i) => (
              <Skeleton key={i} className="h-6 w-16" />
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Skeleton className="h-10 w-20" />
            <Skeleton variant="circular" className="h-10 w-10" />
            <Skeleton variant="circular" className="h-10 w-10" />
          </div>
          <Skeleton className="md:hidden h-6 w-6" />
        </div>
      </div>
    </div>
  )
}

export function BlogPostSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <Skeleton className="h-48" />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Skeleton variant="circular" className="h-10 w-10" />
          <div>
            <Skeleton className="h-4 w-24 mb-1" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
        <Skeleton variant="text" className="h-6 mb-2" />
        <Skeleton variant="text" lines={3} className="mb-4" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
      </div>
    </div>
  )
}

// Themed skeleton loader for aquascaping content
export function AquascapeLoader({ theme = 'cyan' }: { theme?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="text-center">
        {/* Animated aquarium tank */}
        <div className="relative w-32 h-24 mx-auto mb-8">
          <div className={`w-full h-full border-4 border-${theme}-200 rounded-lg bg-${theme}-50`}>
            {/* Animated bubbles */}
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 bg-${theme}-300 rounded-full`}
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: '10%'
                }}
                animate={{
                  y: [0, -60, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}
            
            {/* Water level */}
            <motion.div
              className={`absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-${theme}-100 to-${theme}-200 opacity-30`}
              animate={{
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </div>
        
        <motion.h3 
          className="text-xl font-semibold text-gray-700 mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading Aquascape...
        </motion.h3>
        
        <p className="text-gray-500 text-sm">
          Preparing your underwater experience
        </p>
      </div>
    </div>
  )
}