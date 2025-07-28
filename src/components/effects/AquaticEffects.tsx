'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface AquaticEffectsProps {
  intensity?: 'low' | 'medium' | 'high'
  theme?: 'cyan' | 'blue' | 'teal' | 'green'
  children?: React.ReactNode
}

export function AquaticEffects({ 
  intensity = 'medium', 
  theme = 'cyan', 
  children 
}: AquaticEffectsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  const bubbleCount = {
    low: 8,
    medium: 15,
    high: 25
  }[intensity]

  const colors = {
    cyan: ['#06b6d4', '#0891b2', '#0e7490'],
    blue: ['#3b82f6', '#2563eb', '#1d4ed8'],
    teal: ['#14b8a6', '#0d9488', '#0f766e'],
    green: ['#10b981', '#059669', '#047857']
  }[theme]

  // Canvas-based caustic light effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawCaustics = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create caustic light patterns
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      )
      
      gradient.addColorStop(0, `${colors[0]}15`)
      gradient.addColorStop(0.5, `${colors[1]}08`)
      gradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = gradient
      
      // Animate caustic patterns
      for (let i = 0; i < 3; i++) {
        ctx.save()
        ctx.translate(
          canvas.width / 2 + Math.sin(time * 0.001 + i) * 100,
          canvas.height / 2 + Math.cos(time * 0.002 + i) * 50
        )
        ctx.scale(
          1 + Math.sin(time * 0.003 + i) * 0.3,
          1 + Math.cos(time * 0.002 + i) * 0.2
        )
        ctx.beginPath()
        ctx.arc(0, 0, 200 + i * 50, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
      
      time += 16
      animationFrameRef.current = requestAnimationFrame(drawCaustics)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    drawCaustics()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [colors])

  return (
    <div className="relative overflow-hidden">
      {/* Caustic light canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{ mixBlendMode: 'overlay' }}
      />
      
      {/* Floating bubbles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: bubbleCount }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-tr from-${theme}-200 to-${theme}-300 opacity-30`}
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: Math.random() * 100 + '%',
            }}
            initial={{
              y: '100vh',
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: '-20vh',
              opacity: [0, 0.6, 0.3, 0],
              scale: [0, 1, 1.2, 0],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeOut',
              repeatDelay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Ripple effect on interaction */}
      <RippleEffect theme={theme} />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}

function RippleEffect({ theme }: { theme: string }) {
  const [ripples, setRipples] = React.useState<Array<{
    id: number
    x: number
    y: number
  }>>([])

  const handleInteraction = React.useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newRipple = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    
    setRipples(prev => [...prev, newRipple])
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 1000)
  }, [])

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      onMouseDown={handleInteraction as any}
    >
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className={`absolute border-2 border-${theme}-400 rounded-full pointer-events-none`}
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{
            width: 0,
            height: 0,
            opacity: 0.8,
          }}
          animate={{
            width: 200,
            height: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

// Liquid page transition component
export function LiquidTransition({ 
  isVisible, 
  theme = 'cyan' 
}: { 
  isVisible: boolean
  theme?: string 
}) {
  return (
    <motion.div
      className={`fixed inset-0 z-50 bg-gradient-to-br from-${theme}-500 to-${theme}-700`}
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{
        clipPath: isVisible 
          ? 'circle(150% at 50% 50%)' 
          : 'circle(0% at 50% 50%)'
      }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
    />
  )
}

// Water wave background
export function WaveBackground({ theme = 'cyan' }: { theme?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full h-64"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,100 C300,50 600,150 1200,100 L1200,200 L0,200 Z"
          className={`fill-${theme}-100 opacity-20`}
          animate={{
            d: [
              "M0,100 C300,50 600,150 1200,100 L1200,200 L0,200 Z",
              "M0,120 C300,70 600,170 1200,120 L1200,200 L0,200 Z",
              "M0,100 C300,50 600,150 1200,100 L1200,200 L0,200 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,120 C300,70 600,170 1200,120 L1200,200 L0,200 Z"
          className={`fill-${theme}-200 opacity-30`}
          animate={{
            d: [
              "M0,120 C300,70 600,170 1200,120 L1200,200 L0,200 Z",
              "M0,140 C300,90 600,190 1200,140 L1200,200 L0,200 Z",
              "M0,120 C300,70 600,170 1200,120 L1200,200 L0,200 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </div>
  )
}