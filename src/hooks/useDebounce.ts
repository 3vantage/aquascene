import { useCallback, useRef } from 'react'

export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout>()
  const isExecutingRef = useRef(false)

  return useCallback(
    ((...args: Parameters<T>) => {
      // Prevent execution if already executing
      if (isExecutingRef.current) {
        return
      }

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Set executing flag
      isExecutingRef.current = true

      // Execute the callback
      const result = callback(...args)

      // Set timeout to reset the executing flag
      timeoutRef.current = setTimeout(() => {
        isExecutingRef.current = false
      }, delay)

      return result
    }) as T,
    [callback, delay]
  )
}

export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const lastCallRef = useRef<number>(0)
  const timeoutRef = useRef<NodeJS.Timeout>()

  return useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now()
      const timeSinceLastCall = now - lastCallRef.current

      if (timeSinceLastCall >= delay) {
        lastCallRef.current = now
        return callback(...args)
      } else {
        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        // Set timeout for remaining time
        timeoutRef.current = setTimeout(() => {
          lastCallRef.current = Date.now()
          callback(...args)
        }, delay - timeSinceLastCall)
      }
    }) as T,
    [callback, delay]
  )
}

// Alias for useDebouncedCallback
export const useDebouncedCallback = useDebounce