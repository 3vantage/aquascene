import React, { useState, useCallback } from 'react'
import { Button, ButtonProps } from './Button'

interface SafeButtonProps extends ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
  debounceMs?: number
}

export const SafeButton = React.forwardRef<HTMLButtonElement, SafeButtonProps>(
  ({ onClick, debounceMs = 300, disabled, ...props }, ref) => {
    const [isProcessing, setIsProcessing] = useState(false)

    const handleClick = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
      // Prevent default and stop propagation
      e?.preventDefault?.()
      e?.stopPropagation?.()

      // Prevent double clicks
      if (isProcessing || disabled) return

      setIsProcessing(true)

      try {
        if (onClick) {
          const result = onClick(e)
          
          // Handle async onClick
          if (result instanceof Promise) {
            await result
          }
        }
      } catch (error) {
        console.error('Button click error:', error)
      } finally {
        // Debounce reset
        setTimeout(() => {
          setIsProcessing(false)
        }, debounceMs)
      }
    }, [onClick, isProcessing, disabled, debounceMs])

    return (
      <Button
        ref={ref}
        onClick={handleClick}
        disabled={disabled || isProcessing}
        loading={isProcessing}
        {...props}
      />
    )
  }
)

SafeButton.displayName = 'SafeButton'