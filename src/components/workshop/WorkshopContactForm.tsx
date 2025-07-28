import React, { useState } from 'react'
import { SafeForm } from '@/components/ui/SafeForm'
import { SafeButton } from '@/components/ui/SafeButton'
import { validateEmail, createFormValidator } from '@/utils/forms'

interface FormData {
  name: string
  email: string
  tankSize: string
  message: string
}

const validator = createFormValidator<FormData>({
  name: (value) => !value?.trim() ? 'Name is required' : null,
  email: (value) => !validateEmail(value) ? 'Valid email is required' : null,
  tankSize: (value) => !value?.trim() ? 'Tank size is required' : null,
  message: (value) => !value?.trim() ? 'Message is required' : null,
})

export function WorkshopContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    tankSize: '',
    message: ''
  })
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})  
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    const validation = validator(formData)
    if (!validation.isValid) {
      setValidationErrors(validation.errors)
      return
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSuccess(true)
    setFormData({ name: '', email: '', tankSize: '', message: '' })
    setValidationErrors({})
    
    // Reset success message after 5 seconds
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <section className="py-24 bg-gradient-to-t from-black/50 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-5xl text-white mb-8">
            Ready to Build?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Turn your digital design into reality. We'll help source all the elements and guide your build.
          </p>
          
          {success && (
            <div className="mb-6 p-4 bg-green-500/20 backdrop-blur-md border border-green-400/50 rounded-xl text-green-300">
              Thank you! We'll help you build your dream aquascape.
            </div>
          )}
          
          <SafeForm className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    setValidationErrors({ ...validationErrors, name: '' })
                  }}
                  className={`w-full px-6 py-4 bg-white/10 backdrop-blur-md border rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                    validationErrors.name ? 'border-red-500' : 'border-blue-400/30'
                  }`}
                />
                {validationErrors.name && (
                  <p className="mt-1 text-sm text-red-400">{validationErrors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    setValidationErrors({ ...validationErrors, email: '' })
                  }}
                  className={`w-full px-6 py-4 bg-white/10 backdrop-blur-md border rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                    validationErrors.email ? 'border-red-500' : 'border-blue-400/30'
                  }`}
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Preferred Tank Size"
                value={formData.tankSize}
                onChange={(e) => {
                  setFormData({ ...formData, tankSize: e.target.value })
                  setValidationErrors({ ...validationErrors, tankSize: '' })
                }}
                className={`w-full px-6 py-4 bg-white/10 backdrop-blur-md border rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                  validationErrors.tankSize ? 'border-red-500' : 'border-blue-400/30'
                }`}
              />
              {validationErrors.tankSize && (
                <p className="mt-1 text-sm text-red-400">{validationErrors.tankSize}</p>
              )}
            </div>
            <div>
              <textarea
                placeholder="Tell us about your design and any questions..."
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value })
                  setValidationErrors({ ...validationErrors, message: '' })
                }}
                className={`w-full px-6 py-4 bg-white/10 backdrop-blur-md border rounded-xl text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                  validationErrors.message ? 'border-red-500' : 'border-blue-400/30'
                }`}
              />
              {validationErrors.message && (
                <p className="mt-1 text-sm text-red-400">{validationErrors.message}</p>
              )}
            </div>
            <SafeButton
              type="submit"
              fullWidth
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg"
            >
              Start Building My Aquascape
            </SafeButton>
          </SafeForm>
        </div>
      </div>
    </section>
  )
}