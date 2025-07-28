'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, Palette, Mail, Sparkles, ArrowUp } from 'lucide-react'

interface OnboardingStep {
  id: string
  title: string
  description: string
  target?: string
  icon: React.ReactNode
  mobileDescription?: string
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to AquaScene! 🌊',
    description: 'Discover premium aquascaping designs and products. Let me show you around!',
    mobileDescription: 'Explore 15 unique aquascaping website themes designed for luxury aquarium businesses.',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'theme-switcher',
    title: 'Explore Different Designs',
    description: 'Tap the "Theme" button in the top menu to explore 15 different aquascaping website designs!',
    mobileDescription: 'Swipe or tap the menu to see themes ranging from minimalist to underwater ecosystems.',
    target: '#theme-menu-button',
    icon: <Palette className="w-5 h-5" />
  },
  {
    id: 'mobile-navigation',
    title: 'Mobile Navigation',
    description: 'Use the hamburger menu to explore different sections of the website.',
    mobileDescription: 'The mobile menu gives you access to Shop, Portfolio, About, and Contact pages.',
    icon: <ArrowUp className="w-5 h-5" />
  },
  {
    id: 'contact',
    title: 'Need Help?',
    description: 'Have questions or want custom aquascaping solutions? Contact gerasimovkris@gmail.com for expert assistance.',
    mobileDescription: 'Ready to create your dream aquascape? Get in touch for personalized consultations.',
    icon: <Mail className="w-5 h-5" />
  }
]

export function MobileOnboardingTour() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Check if user has seen the tour before
    if (typeof window === 'undefined') return
    
    const hasSeenTour = localStorage.getItem('aquascape-tour-completed')
    if (!hasSeenTour) {
      // Delay to ensure page is loaded
      setTimeout(() => {
        setIsOpen(true)
      }, 1500)
    }
  }, [])

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
    if (typeof window !== 'undefined') {
      localStorage.setItem('aquascape-tour-completed', 'true')
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
        className="fixed inset-0 bg-black/60 z-[100] pointer-events-auto"
        onClick={skipTour}
      />

      {/* Floating Bubbles Animation */}
      <div className="fixed inset-0 z-[101] pointer-events-none overflow-hidden">
        {[...Array(isMobile ? 4 : 8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-cyan-400/40 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 20,
              scale: 0
            }}
            animate={{ 
              y: -20,
              scale: [0, 1, 0.8, 0],
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Mobile Bottom Sheet */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-[103] pointer-events-auto"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        <div className="bg-white rounded-t-3xl shadow-2xl border-t border-gray-200 p-6 mx-2 mb-2">
          {/* Handle */}
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
          
          {/* Close button */}
          <button
            onClick={skipTour}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
            aria-label="Close tour"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                {currentStepData.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-xl">
                {currentStepData.title}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              {isMobile && currentStepData.mobileDescription 
                ? currentStepData.mobileDescription 
                : currentStepData.description}
            </p>

            {/* Progress indicator */}
            <div className="flex gap-2 mb-6">
              {onboardingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-cyan-500 flex-[2]' 
                      : index < currentStep 
                        ? 'bg-cyan-200 flex-1' 
                        : 'bg-gray-200 flex-1'
                  }`}
                />
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={skipTour}
                className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium transition-colors"
              >
                Skip Tour
              </button>
              
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center gap-2 shadow-lg"
              >
                {currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Highlight for target elements (mobile-adapted) */}
      {currentStepData.target && (
        <motion.div
          className="fixed z-[102] pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute -top-2 -left-2 w-4 h-4 border-l-4 border-t-4 border-cyan-400 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-r-4 border-t-4 border-cyan-400 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-4 border-b-4 border-cyan-400 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-4 border-b-4 border-cyan-400 rounded-br-lg" />
        </motion.div>
      )}
    </>
  )
}