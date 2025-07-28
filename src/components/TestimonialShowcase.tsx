'use client'

import React, { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  location: string
  projectType: string
  rating: number
  testimonial: string
  projectValue: string
  beforeImage?: string
  afterImage?: string
  videoUrl?: string
  projectDuration: string
  featured?: boolean
}

interface TestimonialShowcaseProps {
  variant?: 'light' | 'dark' | 'gradient'
  className?: string
  showAll?: boolean
  maxItems?: number
}

// Sample testimonial data (in a real app, this would come from an API)
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    location: 'Palo Alto, CA',
    projectType: 'Living Room Aquascape',
    rating: 5,
    testimonial: "AquaScene transformed our living room with the most stunning 120-gallon aquascape. The attention to detail and artistic vision exceeded our expectations. Our guests are always amazed by the underwater garden they created!",
    projectValue: '$3,200',
    projectDuration: '2 weeks',
    featured: true
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    location: 'San Francisco, CA',
    projectType: 'Office Reception Aquarium',
    rating: 5,
    testimonial: "We hired AquaScene for our corporate office reception area. The 200-gallon reef system they designed has become the centerpiece of our workspace. Professional service from start to finish.",
    projectValue: '$8,500',
    projectDuration: '3 weeks',
    featured: true
  },
  {
    id: '3',
    name: 'Emily Watson',
    location: 'Mountain View, CA',
    projectType: 'Bedroom Nano Tank',
    rating: 5,
    testimonial: "I wanted a peaceful nano aquascape for my bedroom. The team created a beautiful 20-gallon planted tank that's both relaxing and low-maintenance. Perfect for a beginner like me!",
    projectValue: '$850',
    projectDuration: '1 week'
  },
  {
    id: '4',
    name: 'David Kim',
    location: 'Fremont, CA',
    projectType: 'Restaurant Feature Wall',
    rating: 5,
    testimonial: "AquaScene designed and installed a massive feature wall aquarium for our restaurant. It's become our signature attraction - customers love dining next to this underwater paradise.",
    projectValue: '$15,000',
    projectDuration: '4 weeks',
    featured: true
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    location: 'San Jose, CA',
    projectType: 'Home Aquaponics System',
    rating: 5,
    testimonial: "They set up an amazing aquaponics system in our backyard. We're now growing our own herbs and vegetables while enjoying beautiful fish. Sustainable and stunning!",
    projectValue: '$4,200',
    projectDuration: '2 weeks'
  },
  {
    id: '6',
    name: 'James Wilson',
    location: 'Berkeley, CA',
    projectType: 'Maintenance Service',
    rating: 5,
    testimonial: "Their monthly maintenance service keeps our aquarium in perfect condition. Professional, reliable, and they genuinely care about the health of our aquatic ecosystem.",
    projectValue: '$180/month',
    projectDuration: 'Ongoing'
  }
]

export function TestimonialShowcase({ 
  variant = 'light', 
  className = '', 
  showAll = false, 
  maxItems = 3 
}: TestimonialShowcaseProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, maxItems)
  const featuredTestimonials = testimonials.filter(t => t.featured)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredTestimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, featuredTestimonials.length])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % featuredTestimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? featuredTestimonials.length - 1 : prev - 1)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return {
          container: 'bg-gray-900 text-white',
          card: 'bg-gray-800 border-gray-700',
          accent: 'text-cyan-400',
          text: 'text-gray-300'
        }
      case 'gradient':
        return {
          container: 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white',
          card: 'bg-white/10 backdrop-blur-md border-white/20',
          accent: 'text-cyan-200',
          text: 'text-white/90'
        }
      default:
        return {
          container: 'bg-gray-50 text-gray-900',
          card: 'bg-white border-gray-200',
          accent: 'text-cyan-600',
          text: 'text-gray-600'
        }
    }
  }

  const classes = getVariantClasses()

  return (
    <section className={`py-16 ${classes.container} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className={`text-lg ${classes.text} max-w-2xl mx-auto`}>
            Don't just take our word for it. Here's what our satisfied customers have to say about their aquascaping experience.
          </p>
        </div>

        {showAll ? (
          /* Grid Layout for All Testimonials */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`p-6 rounded-xl border shadow-lg ${classes.card} hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-center mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <span className={`ml-2 text-sm ${classes.text}`}>
                    {testimonial.rating}.0
                  </span>
                </div>
                
                <Quote className={`w-8 h-8 ${classes.accent} mb-4 opacity-60`} />
                
                <p className={`${classes.text} mb-6 leading-relaxed`}>
                  "{testimonial.testimonial}"
                </p>
                
                <div className="space-y-2">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className={`text-sm ${classes.text}`}>
                    {testimonial.location}
                  </div>
                  <div className={`text-sm ${classes.accent} font-medium`}>
                    {testimonial.projectType}
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                    <span className={classes.text}>Value: {testimonial.projectValue}</span>
                    <span className={classes.text}>Duration: {testimonial.projectDuration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Carousel Layout for Featured Testimonials */
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className={`p-8 md:p-12 ${classes.card} border shadow-xl`}>
                      <div className="text-center">
                        <div className="flex justify-center mb-6">
                          {renderStars(testimonial.rating)}
                        </div>
                        
                        <Quote className={`w-12 h-12 ${classes.accent} mx-auto mb-6 opacity-60`} />
                        
                        <blockquote className={`text-xl md:text-2xl ${classes.text} mb-8 leading-relaxed font-light`}>
                          "{testimonial.testimonial}"
                        </blockquote>
                        
                        <div className="flex flex-col md:flex-row items-center justify-between">
                          <div className="text-center md:text-left mb-4 md:mb-0">
                            <div className="font-bold text-lg">{testimonial.name}</div>
                            <div className={`${classes.text} mb-2`}>{testimonial.location}</div>
                            <div className={`${classes.accent} font-semibold`}>
                              {testimonial.projectType}
                            </div>
                          </div>
                          
                          <div className="text-center md:text-right">
                            <div className="font-bold text-2xl">{testimonial.projectValue}</div>
                            <div className={`text-sm ${classes.text}`}>
                              Completed in {testimonial.projectDuration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${classes.card} border shadow-lg hover:shadow-xl transition-all`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${classes.card} border shadow-lg hover:shadow-xl transition-all`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? classes.accent.replace('text-', 'bg-')
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className={`text-sm ${classes.text}`}>Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9</div>
              <div className={`text-sm ${classes.text}`}>Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className={`text-sm ${classes.text}`}>Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className={`text-sm ${classes.text}`}>Years Experience</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className={`inline-flex items-center gap-2 px-8 py-4 ${classes.accent.replace('text-', 'bg-')} text-white rounded-full font-semibold hover:transform hover:scale-105 transition-all shadow-lg`}
          >
            Start Your Project Today
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}