'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react'

interface SwipeIndicatorProps {
  currentIndex: number
  totalThemes: number
  isTouch: boolean
  onNext: () => void
  onPrevious: () => void
}

export function SwipeIndicator({ 
  currentIndex, 
  totalThemes, 
  isTouch, 
  onNext, 
  onPrevious 
}: SwipeIndicatorProps) {
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    // Show swipe hint on first visit for mobile users
    if (isTouch && !localStorage.getItem('swipe-hint-shown')) {
      const timer = setTimeout(() => {
        setShowHint(true)
        localStorage.setItem('swipe-hint-shown', 'true')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isTouch])

  if (!isTouch) return null

  return (
    <>
      {/* Swipe Hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 mx-4 max-w-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-gray-900">Try swiping!</span>
              </div>
              <p className="text-sm text-gray-600">
                Swipe left or right to explore different themes
              </p>
              
              <motion.div
                className="flex justify-center mt-3 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="flex items-center"
                >
                  <ChevronLeft className="w-5 h-5 text-cyan-500" />
                  <ChevronRight className="w-5 h-5 text-cyan-500" />
                </motion.div>
              </motion.div>
              
              <button
                onClick={() => setShowHint(false)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center text-gray-500 text-xs"
                style={{ pointerEvents: 'auto' }}
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Progress Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevious}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center pointer-events-auto"
              aria-label="Previous theme"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalThemes }, (_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-cyan-500'
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={onNext}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center pointer-events-auto"
              aria-label="Next theme"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          
          <div className="text-xs text-center text-gray-500 mt-1">
            {currentIndex + 1} of {totalThemes}
          </div>
        </div>
      </motion.div>
    </>
  )
}