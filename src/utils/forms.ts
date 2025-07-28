import { FormEvent } from 'react'

export interface FormValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

export function handleFormSubmit(
  e: FormEvent<HTMLFormElement>,
  onSubmit: () => void | Promise<void>,
  onError?: (error: Error) => void
) {
  // Safely prevent default
  e?.preventDefault?.()
  
  try {
    // Execute the submission
    const result = onSubmit()
    
    // Handle async submissions
    if (result instanceof Promise) {
      result.catch((error) => {
        console.error('Form submission error:', error)
        onError?.(error)
      })
    }
  } catch (error) {
    console.error('Form submission error:', error)
    onError?.(error as Error)
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  // Basic phone validation - adjust regex for specific formats
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

export function createFormValidator<T extends Record<string, any>>(
  rules: Record<keyof T, (value: any) => string | null>
) {
  return (formData: T): FormValidationResult => {
    const errors: Record<string, string> = {}
    let isValid = true

    for (const [field, validator] of Object.entries(rules)) {
      const error = validator(formData[field])
      if (error) {
        errors[field] = error
        isValid = false
      }
    }

    return { isValid, errors }
  }
}