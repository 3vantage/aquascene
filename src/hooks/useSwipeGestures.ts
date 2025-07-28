'use client'

import { useCallback, useRef, useEffect } from 'react'

interface SwipeHandlers {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  onTap?: () => void
}

interface SwipeOptions {
  threshold?: number
  preventScroll?: boolean
  detectVertical?: boolean
}

export function useSwipeGestures(
  handlers: SwipeHandlers,
  options: SwipeOptions = {}
) {
  const {
    threshold = 50,
    preventScroll = false,
    detectVertical = false
  } = options

  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null)
  const elementRef = useRef<HTMLElement | null>(null)

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0]
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    }

    if (preventScroll) {
      e.preventDefault()
    }
  }, [preventScroll])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!touchStartRef.current) return

    if (preventScroll) {
      e.preventDefault()
    }
  }, [preventScroll])

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStartRef.current) return

    const touch = e.changedTouches[0]
    const deltaX = touch.clientX - touchStartRef.current.x
    const deltaY = touch.clientY - touchStartRef.current.y
    const deltaTime = Date.now() - touchStartRef.current.time

    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    // Check if it's a tap (small movement, quick time)
    if (absDeltaX < 10 && absDeltaY < 10 && deltaTime < 300) {
      handlers.onTap?.()
    }
    // Check for horizontal swipes
    else if (absDeltaX > threshold && absDeltaX > absDeltaY) {
      if (deltaX > 0) {
        handlers.onSwipeRight?.()
      } else {
        handlers.onSwipeLeft?.()
      }
    }
    // Check for vertical swipes (if enabled)
    else if (detectVertical && absDeltaY > threshold && absDeltaY > absDeltaX) {
      if (deltaY > 0) {
        handlers.onSwipeDown?.()
      } else {
        handlers.onSwipeUp?.()
      }
    }

    touchStartRef.current = null
  }, [handlers, threshold, detectVertical])

  const attachListeners = useCallback((element: HTMLElement) => {
    if (!element) return

    elementRef.current = element

    element.addEventListener('touchstart', handleTouchStart, { passive: !preventScroll })
    element.addEventListener('touchmove', handleTouchMove, { passive: !preventScroll })
    element.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, preventScroll])

  // Auto-attach to document body if no specific element
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const cleanup = attachListeners(document.body)
    return cleanup
  }, [attachListeners])

  return {
    attachListeners,
    isTouch: typeof window !== 'undefined' && 'ontouchstart' in window
  }
}

// Hook specifically for theme switching
export function useThemeSwipeGestures(
  themes: string[],
  currentTheme: string,
  onThemeChange: (theme: string) => void
) {
  const currentIndex = themes.indexOf(currentTheme)

  const nextTheme = () => {
    const nextIndex = (currentIndex + 1) % themes.length
    onThemeChange(themes[nextIndex])
  }

  const previousTheme = () => {
    const prevIndex = currentIndex === 0 ? themes.length - 1 : currentIndex - 1
    onThemeChange(themes[prevIndex])
  }

  const { attachListeners, isTouch } = useSwipeGestures({
    onSwipeLeft: nextTheme,
    onSwipeRight: previousTheme,
  }, {
    threshold: 80,
    preventScroll: false
  })

  return {
    attachListeners,
    isTouch,
    nextTheme,
    previousTheme,
    currentIndex,
    totalThemes: themes.length
  }
}