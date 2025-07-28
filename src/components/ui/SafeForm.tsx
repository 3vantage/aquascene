'use client'

import React, { FormEvent, useState, useCallback } from 'react'
import { handleFormSubmit } from '@/utils/forms'

interface SafeFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'onError'> {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void | Promise<void>
  onError?: (error: Error) => void
  children: React.ReactNode
}

export function SafeForm({ onSubmit, onError, children, ...props }: SafeFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    setError(null)
    setIsSubmitting(true)

    handleFormSubmit(
      e,
      async () => {
        try {
          await onSubmit(e)
        } finally {
          setIsSubmitting(false)
        }
      },
      (error) => {
        setError(error.message)
        setIsSubmitting(false)
        onError?.(error)
      }
    )
  }, [onSubmit, onError])

  return (
    <form {...props} onSubmit={handleSubmit}>
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}
      
      {/* Disable form while submitting */}
      <fieldset disabled={isSubmitting} className="contents">
        {children}
      </fieldset>
    </form>
  )
}