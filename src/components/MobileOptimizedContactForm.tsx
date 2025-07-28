'use client'

import React, { useState, useRef, useEffect } from 'react'
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, 
  User, MessageCircle, Calendar, DollarSign, ChevronDown,
  Star, Sparkles, Heart, Droplets
} from 'lucide-react'
import { ComponentErrorBoundary } from './ErrorBoundary'

interface MobileOptimizedContactFormProps {
  variant?: 'default' | 'green-aqua' | 'elegant' | 'playful'
  showDecorations?: boolean
  autoFocus?: boolean
}

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  timeline: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const serviceOptions = [
  { value: '', label: 'Select a service...', icon: '💭' },
  { value: 'custom-aquascape', label: 'Custom Aquascaping Design', icon: '🌿' },
  { value: 'maintenance', label: 'Aquarium Maintenance', icon: '🔧' },
  { value: 'consultation', label: 'Expert Consultation', icon: '👨‍🏫' },
  { value: 'installation', label: 'Complete Setup & Installation', icon: '🏗️' },
  { value: 'partnership', label: 'Business Partnership (Green Aqua)', icon: '🤝' },
  { value: 'other', label: 'Other Services', icon: '✨' }
]

const budgetOptions = [
  { value: '', label: 'Select budget range...' },
  { value: '500-1000', label: '€500 - €1,000' },
  { value: '1000-2500', label: '€1,000 - €2,500' },
  { value: '2500-5000', label: '€2,500 - €5,000' },
  { value: '5000-10000', label: '€5,000 - €10,000' },
  { value: '10000+', label: '€10,000+' },
]

const timelineOptions = [
  { value: '', label: 'When do you need this?' },
  { value: 'asap', label: 'As soon as possible' },
  { value: '1-2weeks', label: 'Within 1-2 weeks' },
  { value: '1month', label: 'Within 1 month' },
  { value: '2-3months', label: '2-3 months' },
  { value: 'flexible', label: 'I\'m flexible' },
]

export function MobileOptimizedContactForm({ 
  variant = 'default',
  showDecorations = true,
  autoFocus = false 
}: MobileOptimizedContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  
  const nameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus && nameInputRef.current) {
      // Delay to ensure smooth animation
      setTimeout(() => nameInputRef.current?.focus(), 100)
    }
  }, [autoFocus])

  const getVariantStyles = () => {
    switch (variant) {
      case 'green-aqua':
        return {
          primary: 'from-orange-500 to-red-500',
          secondary: 'from-cyan-500 to-blue-500', 
          accent: 'text-orange-600',
          bg: 'bg-gradient-to-br from-orange-50 via-white to-cyan-50',
          decoration: 'text-orange-400'
        }
      case 'elegant':
        return {
          primary: 'from-slate-600 to-gray-700',
          secondary: 'from-blue-500 to-cyan-500',
          accent: 'text-slate-600',
          bg: 'bg-gradient-to-br from-slate-50 via-white to-blue-50',
          decoration: 'text-slate-400'
        }
      case 'playful':
        return {
          primary: 'from-purple-500 to-pink-500',
          secondary: 'from-cyan-400 to-blue-500',
          accent: 'text-purple-600',
          bg: 'bg-gradient-to-br from-purple-50 via-white to-pink-50',
          decoration: 'text-purple-400'
        }
      default:
        return {
          primary: 'from-cyan-500 to-blue-500',
          secondary: 'from-emerald-500 to-teal-500',
          accent: 'text-cyan-600',
          bg: 'bg-gradient-to-br from-cyan-50 via-white to-blue-50',
          decoration: 'text-cyan-400'
        }
    }
  }

  const styles = getVariantStyles()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0]
      const element = document.querySelector(`[name="${firstErrorField}"]`)
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Auto-hide success message
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className={`min-h-screen ${styles.bg} flex items-center justify-center p-4`}>
        <div className="max-w-md w-full text-center">
          <div className="relative mb-8">
            <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${styles.primary} rounded-full flex items-center justify-center shadow-2xl`}>
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            {showDecorations && (
              <>
                <div className={`absolute -top-2 -right-2 w-6 h-6 ${styles.decoration} animate-bounce`}>
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className={`absolute -bottom-2 -left-2 w-5 h-5 ${styles.decoration} animate-pulse delay-300`}>
                  <Star className="w-5 h-5" />
                </div>
              </>
            )}
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Message Sent! 🎉
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Thank you for reaching out! We'll get back to you within 24 hours with a personalized response.
          </p>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
              <Heart className="w-4 h-4 text-red-400" />
              <span>We appreciate your interest</span>
              <Heart className="w-4 h-4 text-red-400" />
            </div>
            <p className="text-xs text-gray-500">
              Check your email for a confirmation and next steps
            </p>
          </div>
          
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                budget: '',
                timeline: '',
                message: ''
              })
            }}
            className="mt-6 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <ComponentErrorBoundary>
      <div className={`min-h-screen ${styles.bg} py-8 px-4`}>
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative mb-6">
              <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${styles.primary} rounded-2xl flex items-center justify-center shadow-xl`}>
                <Mail className="w-8 h-8 text-white" />
              </div>
              {showDecorations && (
                <>
                  <div className={`absolute -top-1 -right-1 w-4 h-4 ${styles.decoration} animate-pulse`}>
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div className={`absolute -bottom-1 -left-1 w-3 h-3 ${styles.decoration} animate-bounce delay-200`}>
                    <Sparkles className="w-3 h-3" />
                  </div>
                </>
              )}
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Let's Create Something Amazing
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Tell us about your aquascaping vision and we'll bring it to life
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <div className="relative">
                <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? styles.accent : 'text-gray-400'}`} />
                <input
                  ref={nameInputRef}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your full name"
                  className={`w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-0 ${
                    errors.name 
                      ? 'border-red-300 focus:border-red-500' 
                      : focusedField === 'name'
                        ? `border-cyan-300 focus:border-cyan-500`
                        : 'border-gray-200 focus:border-gray-300'
                  }`}
                />
              </div>
              {errors.name && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <div className="relative">
                <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? styles.accent : 'text-gray-400'}`} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your@email.com"
                  className={`w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-0 ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500' 
                      : focusedField === 'email'
                        ? `border-cyan-300 focus:border-cyan-500`
                        : 'border-gray-200 focus:border-gray-300'
                  }`}
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </div>
              )}
            </div>

            {/* Phone (Optional) */}
            <div className="relative">
              <div className="relative">
                <Phone className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? styles.accent : 'text-gray-400'}`} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Phone number (optional)"
                  className={`w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-0 ${
                    focusedField === 'phone'
                      ? `border-cyan-300 focus:border-cyan-500`
                      : 'border-gray-200 focus:border-gray-300'
                  }`}
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="relative">
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-4 pr-12 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl text-gray-900 transition-all focus:outline-none focus:ring-0 appearance-none ${
                    errors.service 
                      ? 'border-red-300 focus:border-red-500' 
                      : focusedField === 'service'
                        ? `border-cyan-300 focus:border-cyan-500`
                        : 'border-gray-200 focus:border-gray-300'
                  }`}
                >
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.icon} {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              {errors.service && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.service}
                </div>
              )}
            </div>

            {/* Budget & Timeline Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="relative">
                  <DollarSign className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'budget' ? styles.accent : 'text-gray-400'}`} />
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => handleChange('budget', e.target.value)}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-10 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl text-gray-900 transition-all focus:outline-none focus:ring-0 appearance-none ${
                      focusedField === 'budget'
                        ? `border-cyan-300 focus:border-cyan-500`
                        : 'border-gray-200 focus:border-gray-300'
                    }`}
                  >
                    {budgetOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <Calendar className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'timeline' ? styles.accent : 'text-gray-400'}`} />
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => handleChange('timeline', e.target.value)}
                    onFocus={() => setFocusedField('timeline')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-10 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl text-gray-900 transition-all focus:outline-none focus:ring-0 appearance-none ${
                      focusedField === 'timeline'
                        ? `border-cyan-300 focus:border-cyan-500`
                        : 'border-gray-200 focus:border-gray-300'
                    }`}
                  >
                    {timelineOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <div className="relative">
                <MessageCircle className={`absolute left-4 top-4 w-5 h-5 transition-colors ${focusedField === 'message' ? styles.accent : 'text-gray-400'}`} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  placeholder="Tell us about your vision, requirements, or any questions you have..."
                  className={`w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 rounded-2xl text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-0 resize-none ${
                    errors.message 
                      ? 'border-red-300 focus:border-red-500' 
                      : focusedField === 'message'
                        ? `border-cyan-300 focus:border-cyan-500`
                        : 'border-gray-200 focus:border-gray-300'
                  }`}
                />
              </div>
              {errors.message && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </div>
              )}
              <div className="text-right mt-2">
                <span className="text-xs text-gray-500">
                  {formData.message.length}/500
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 bg-gradient-to-r ${styles.primary} text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-3`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {/* Footer Info */}
            <div className="text-center pt-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting this form, you agree to our privacy policy. 
                We'll never share your information and will respond within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </ComponentErrorBoundary>
  )
}