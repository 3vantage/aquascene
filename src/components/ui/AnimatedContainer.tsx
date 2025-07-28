'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedContainerProps {
  children: React.ReactNode
  className?: string
  variant?: 'slide' | 'fade' | 'scale' | 'slideUp'
  delay?: number
  duration?: number
  stagger?: number
}

const variants = {
  slide: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }
}

export function AnimatedContainer({
  children,
  className,
  variant = 'fade',
  delay = 0,
  duration = 0.5,
  stagger = 0.1
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={variants[variant].initial}
      animate={variants[variant].animate}
      exit={variants[variant].exit}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredGridProps {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export function StaggeredGrid({ children, className, stagger = 0.1 }: StaggeredGridProps) {
  const childArray = React.Children.toArray(children)
  
  return (
    <div className={cn(className)}>
      {childArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * stagger,
            ease: 'easeOut'
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

interface PageTransitionProps {
  children: React.ReactNode
  id: string
}

export function PageTransition({ children, id }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={id}
        initial={{ 
          opacity: 0, 
          scale: 0.98,
          filter: 'blur(4px)',
          rotateX: 10
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          filter: 'blur(0px)',
          rotateX: 0
        }}
        exit={{ 
          opacity: 0, 
          scale: 1.02,
          filter: 'blur(4px)',
          rotateX: -10
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 }
        }}
        style={{
          transformPerspective: 1000,
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}