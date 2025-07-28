import { useState, useEffect } from 'react'

export type Breakpoint = 'mobile' | 'tablet' | 'desktop'

const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
} as const

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop')

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') return

    const checkBreakpoint = () => {
      const width = window.innerWidth
      
      if (width < BREAKPOINTS.mobile) {
        setBreakpoint('mobile')
      } else if (width < BREAKPOINTS.tablet) {
        setBreakpoint('tablet')
      } else {
        setBreakpoint('desktop')
      }
    }

    // Check initial breakpoint
    checkBreakpoint()

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkBreakpoint, 150)
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  return breakpoint
}

export function useIsMobile(): boolean {
  const breakpoint = useBreakpoint()
  return breakpoint === 'mobile'
}

export function useIsTablet(): boolean {
  const breakpoint = useBreakpoint()
  return breakpoint === 'tablet'
}

export function useIsDesktop(): boolean {
  const breakpoint = useBreakpoint()
  return breakpoint === 'desktop'
}