'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, User, Calendar, DollarSign, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

interface ServiceInquiryFormProps {
  variant?: 'light' | 'dark' | 'gradient'
  className?: string
}

type ServiceType = 
  | 'aquascape-design' 
  | 'maintenance' 
  | 'consultation' 
  | 'installation' 
  | 'equipment-supply' 
  | 'custom-project'

type ProjectBudget = 
  | 'under-500' 
  | '500-1500' 
  | '1500-5000' 
  | '5000-15000' 
  | 'over-15000'

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: ServiceType | ''
  projectBudget: ProjectBudget | ''
  projectDescription: string
  timeline: string
  hasExistingSystem: boolean
  location: string
}

export function ServiceInquiryForm({ variant = 'light', className = '' }: ServiceInquiryFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectBudget: '',
    projectDescription: '',
    timeline: '',
    hasExistingSystem: false,
    location: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const serviceOptions = [
    { value: 'aquascape-design', label: 'Complete Aquascape Design', description: 'Full design and setup of new aquarium' },
    { value: 'maintenance', label: 'Maintenance Services', description: 'Regular care and upkeep' },
    { value: 'consultation', label: 'Expert Consultation', description: 'Professional advice and planning' },
    { value: 'installation', label: 'Installation Services', description: 'Professional setup and installation' },
    { value: 'equipment-supply', label: 'Equipment & Supplies', description: 'Premium products and materials' },
    { value: 'custom-project', label: 'Custom Project', description: 'Unique or specialized requirements' }
  ]

  const budgetOptions = [
    { value: 'under-500', label: 'Under $500', description: 'Small projects & consultations' },
    { value: '500-1500', label: '$500 - $1,500', description: 'Medium aquascapes' },
    { value: '1500-5000', label: '$1,500 - $5,000', description: 'Premium installations' },
    { value: '5000-15000', label: '$5,000 - $15,000', description: 'Large custom projects' },
    { value: 'over-15000', label: '$15,000+', description: 'Enterprise & commercial' }
  ]

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service'
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real app, send data to your backend
      console.log('Service inquiry submitted:', formData)
      console.log('Estimated value:', getEstimatedValue())
      
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          projectBudget: '',
          projectDescription: '',
          timeline: '',
          hasExistingSystem: false,
          location: ''
        })
        setSubmitStatus('idle')
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getEstimatedValue = (): string => {
    const budgetRanges = {
      'under-500': '$300-500',
      '500-1500': '$500-1,500',
      '1500-5000': '$1,500-5,000',
      '5000-15000': '$5,000-15,000',
      'over-15000': '$15,000+'
    }
    return budgetRanges[formData.projectBudget as keyof typeof budgetRanges] || 'Contact for quote'
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return {
          container: 'bg-gray-900 text-white',
          input: 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500',
          button: 'bg-cyan-600 hover:bg-cyan-700 text-white',
          accent: 'text-cyan-400'
        }
      case 'gradient':
        return {
          container: 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white',
          input: 'bg-white/20 backdrop-blur-md border-white/30 text-white placeholder-white/70 focus:ring-white focus:border-transparent',
          button: 'bg-white text-cyan-600 hover:bg-gray-100',
          accent: 'text-cyan-200'
        }
      default:
        return {
          container: 'bg-white text-gray-900',
          input: 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500',
          button: 'bg-cyan-600 hover:bg-cyan-700 text-white',
          accent: 'text-cyan-600'
        }
    }
  }

  const classes = getVariantClasses()

  if (submitStatus === 'success') {
    return (
      <div className={`rounded-2xl p-8 ${classes.container} ${className}`}>
        <div className="text-center">
          <CheckCircle className={`w-16 h-16 mx-auto mb-6 ${classes.accent}`} />
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p className="text-lg mb-4">
            Your service inquiry has been received. We'll contact you within 24 hours to discuss your project.
          </p>
          <div className={`text-sm ${classes.accent}`}>
            Estimated project value: {getEstimatedValue()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl p-8 ${classes.container} ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Start Your Aquascaping Project</h2>
        <p className="text-lg opacity-90">
          Tell us about your vision, and we'll create a custom proposal for your dream aquascape.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg ${classes.input} ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg ${classes.input} ${errors.email ? 'border-red-500' : ''}`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg ${classes.input}`}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg ${classes.input}`}
              placeholder="City, State"
            />
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium mb-3">
            Service Type *
          </label>
          <div className="grid md:grid-cols-2 gap-3">
            {serviceOptions.map((service) => (
              <label
                key={service.value}
                className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  formData.serviceType === service.value
                    ? `${classes.accent} border-current bg-current/10`
                    : `border-gray-300 hover:border-gray-400 ${variant === 'dark' ? 'border-gray-600 hover:border-gray-500' : ''}`
                }`}
              >
                <input
                  type="radio"
                  name="serviceType"
                  value={service.value}
                  checked={formData.serviceType === service.value}
                  onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value as ServiceType }))}
                  className="sr-only"
                />
                <div>
                  <div className="font-semibold">{service.label}</div>
                  <div className="text-sm opacity-70">{service.description}</div>
                </div>
              </label>
            ))}
          </div>
          {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
        </div>

        {/* Budget Selection */}
        <div>
          <label className="block text-sm font-medium mb-3">
            <DollarSign className="w-4 h-4 inline mr-2" />
            Project Budget
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {budgetOptions.map((budget) => (
              <label
                key={budget.value}
                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  formData.projectBudget === budget.value
                    ? `${classes.accent} border-current bg-current/10`
                    : `border-gray-300 hover:border-gray-400 ${variant === 'dark' ? 'border-gray-600 hover:border-gray-500' : ''}`
                }`}
              >
                <input
                  type="radio"
                  name="projectBudget"
                  value={budget.value}
                  checked={formData.projectBudget === budget.value}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectBudget: e.target.value as ProjectBudget }))}
                  className="sr-only"
                />
                <div>
                  <div className="font-semibold">{budget.label}</div>
                  <div className="text-sm opacity-70">{budget.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Desired Timeline
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg ${classes.input}`}
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP (Rush job)</option>
              <option value="1-2-weeks">1-2 weeks</option>
              <option value="1-month">Within 1 month</option>
              <option value="2-3-months">2-3 months</option>
              <option value="flexible">Flexible timing</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hasExistingSystem}
                onChange={(e) => setFormData(prev => ({ ...prev, hasExistingSystem: e.target.checked }))}
                className="mr-3 w-5 h-5 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <span className="text-sm">I have an existing aquarium system</span>
            </label>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Project Description *
          </label>
          <textarea
            value={formData.projectDescription}
            onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg ${classes.input} ${errors.projectDescription ? 'border-red-500' : ''}`}
            placeholder="Describe your vision, tank size, preferred style, specific requirements, and any challenges you're facing..."
          />
          {errors.projectDescription && <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-500 mb-4 p-4 bg-red-50 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-3 ${classes.button} ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:scale-105'
            } shadow-lg`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Send My Project Inquiry
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}