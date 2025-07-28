'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, Palette, Mail, Sparkles } from 'lucide-react'
import { useIsMobile } from '@/hooks/useBreakpoint'

interface OnboardingStep {
  id: string
  title: string
  description: string
  target: string
  position: 'top' | 'bottom' | 'left' | 'right'
  icon: React.ReactNode
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to AquaScene! 🌊',
    description: 'Discover premium aquascaping designs and products. Let me show you around!',
    target: 'body',
    position: 'bottom',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'theme-switcher',
    title: 'Change Website Layouts',
    description: 'Click the "Theme" button to explore 15 different aquascaping website designs - from minimalist to underwater ecosystems!',
    target: '#theme-menu-button',
    position: 'bottom',
    icon: <Palette className="w-5 h-5" />
  },
  {
    id: 'contact',
    title: 'Need Help?',
    description: 'Have questions or want custom aquascaping solutions? Contact gerasimovkris@gmail.com for expert assistance.',
    target: 'body',
    position: 'bottom',
    icon: <Mail className="w-5 h-5" />
  }
]

export function OnboardingTour() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Check if user has seen the tour before
    const hasSeenTour = localStorage.getItem('aquascape-tour-completed')
    if (!hasSeenTour) {
      // Delay to ensure page is loaded
      setTimeout(() => {
        setIsOpen(true)
      }, 1000)
    }
  }, [])

  useEffect(() => {
    if (isOpen && onboardingSteps[currentStep]) {
      const step = onboardingSteps[currentStep]
      if (step.target !== 'body') {
        try {
          const element = document.querySelector(step.target) as HTMLElement | null
          setTargetElement(element)
        } catch (error) {
          console.warn('Target element not found:', step.target)
          setTargetElement(null)
        }
      } else {
        setTargetElement(null)
      }
    }
  }, [isOpen, currentStep])

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeTour()
    }
  }

  const skipTour = () => {
    completeTour()
  }

  const completeTour = () => {
    setIsOpen(false)
    localStorage.setItem('aquascape-tour-completed', 'true')
  }

  const getTooltipPosition = () => {
    if (!targetElement || typeof window === 'undefined') {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    }

    try {
      const rect = targetElement.getBoundingClientRect()
      const step = onboardingSteps[currentStep]

    switch (step.position) {
      case 'bottom':
        return {
          top: rect.bottom + window.scrollY + 16,
          left: rect.left + rect.width / 2,
          transform: 'translateX(-50%)'
        }
      case 'top':
        return {
          top: rect.top + window.scrollY - 16,
          left: rect.left + rect.width / 2,
          transform: 'translateX(-50%) translateY(-100%)'
        }
      case 'right':
        return {
          top: rect.top + rect.height / 2 + window.scrollY,
          left: rect.right + 16,
          transform: 'translateY(-50%)'
        }
      case 'left':
        return {
          top: rect.top + rect.height / 2 + window.scrollY,
          left: rect.left - 16,
          transform: 'translateY(-50%) translateX(-100%)'
        }
      default:
        return {
          top: rect.bottom + window.scrollY + 16,
          left: rect.left + rect.width / 2,
          transform: 'translateX(-50%)'
        }
    }
    } catch (error) {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    }
  }

  const getHighlightStyle = () => {
    if (!targetElement || typeof window === 'undefined') return {}

    try {
      const rect = targetElement.getBoundingClientRect()
      return {
        top: rect.top + window.scrollY - 4,
        left: rect.left - 4,
        width: rect.width + 8,
        height: rect.height + 8
      }
    } catch (error) {
      return {}
    }
  }

  if (!isOpen) return null

  const currentStepData = onboardingSteps[currentStep]

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-[100] pointer-events-auto"
        onClick={skipTour}
      />

      {/* Floating Bubbles */}
      <div className="fixed inset-0 z-[101] pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-cyan-400/30 rounded-full"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? window.innerHeight + 20 : 0,
              scale: 0
            }}
            animate={{ 
              y: -20,
              scale: [0, 1, 0],
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Highlight Ring */}
      {targetElement && (
        <motion.div
          className="fixed z-[102] pointer-events-none"
          style={getHighlightStyle()}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full border-4 border-cyan-400 rounded-lg shadow-lg">
            <div className="w-full h-full border-4 border-white/50 rounded-lg animate-pulse" />
          </div>
          
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 border-2 border-cyan-400 rounded-lg"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.1, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
        </motion.div>
      )}

      {/* Tooltip */}
      <motion.div
        className={`fixed z-[103] ${isMobile ? 'inset-x-4 bottom-4 max-w-none' : 'max-w-sm'}`}
        style={isMobile ? {} : getTooltipPosition()}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 relative">
          {/* Arrow pointing to target - hide on mobile */}
          {targetElement && !isMobile && (
            <div 
              className={`absolute w-3 h-3 bg-white border rotate-45 ${
                currentStepData.position === 'bottom' ? '-top-1.5 left-1/2 -translate-x-1/2 border-r-0 border-b-0' :
                currentStepData.position === 'top' ? '-bottom-1.5 left-1/2 -translate-x-1/2 border-l-0 border-t-0' :
                currentStepData.position === 'right' ? '-left-1.5 top-1/2 -translate-y-1/2 border-t-0 border-r-0' :
                '-right-1.5 top-1/2 -translate-y-1/2 border-b-0 border-l-0'
              }`}
            />
          )}

          {/* Close button */}
          <button
            onClick={skipTour}
            className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close tour"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="pr-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                {currentStepData.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                {currentStepData.title}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {currentStepData.description}
            </p>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {onboardingSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentStep ? 'bg-cyan-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={skipTour}
                  className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium transition-colors"
                >
                  Skip
                </button>
                <button
                  onClick={nextStep}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center gap-2"
                >
                  {currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}