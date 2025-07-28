'use client'

import { useState, useEffect } from 'react'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface BreakpointValues {
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
  '2xl': boolean
}

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export function useResponsive() {
  const [breakpointValues, setBreakpointValues] = useState<BreakpointValues>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  })

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('xs')
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateBreakpoints = () => {
      if (typeof window === 'undefined') return

      const width = window.innerWidth
      const height = window.innerHeight

      setWindowSize({ width, height })

      const newBreakpointValues: BreakpointValues = {
        xs: width >= breakpoints.xs,
        sm: width >= breakpoints.sm,
        md: width >= breakpoints.md,
        lg: width >= breakpoints.lg,
        xl: width >= breakpoints.xl,
        '2xl': width >= breakpoints['2xl'],
      }

      setBreakpointValues(newBreakpointValues)

      // Determine current breakpoint
      let current: Breakpoint = 'xs'
      if (width >= breakpoints['2xl']) current = '2xl'
      else if (width >= breakpoints.xl) current = 'xl'
      else if (width >= breakpoints.lg) current = 'lg'
      else if (width >= breakpoints.md) current = 'md'
      else if (width >= breakpoints.sm) current = 'sm'

      setCurrentBreakpoint(current)
    }

    // Initial update
    updateBreakpoints()

    // Add event listener
    window.addEventListener('resize', updateBreakpoints)

    // Cleanup
    return () => window.removeEventListener('resize', updateBreakpoints)
  }, [])

  return {
    ...breakpointValues,
    currentBreakpoint,
    windowSize,
    isMobile: !breakpointValues.md,
    isTablet: breakpointValues.md && !breakpointValues.lg,
    isDesktop: breakpointValues.lg,
    isTouch: typeof window !== 'undefined' && 'ontouchstart' in window,
  }
}

// Hook for specific breakpoint checks
export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const updateMatch = () => {
      if (typeof window === 'undefined') return
      const width = window.innerWidth
      setMatches(width >= breakpoints[breakpoint])
    }

    updateMatch()
    window.addEventListener('resize', updateMatch)
    return () => window.removeEventListener('resize', updateMatch)
  }, [breakpoint])

  return matches
}

// Hook for media query matching
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [query])

  return matches
}