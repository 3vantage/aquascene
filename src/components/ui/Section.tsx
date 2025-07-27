import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'gray' | 'dark' | 'gradient'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  containerWidth?: 'full' | 'container' | 'narrow' | 'wide'
}

const variants = {
  default: 'bg-white',
  gray: 'bg-gray-50',
  dark: 'bg-gray-900 text-white',
  gradient: 'bg-gradient-to-br from-gray-50 to-white'
}

const paddings = {
  none: '',
  sm: 'py-8 sm:py-12',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-24',
  xl: 'py-24 sm:py-32'
}

const containerWidths = {
  full: 'w-full',
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  wide: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    variant = 'default', 
    padding = 'lg',
    containerWidth = 'container',
    children, 
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          variants[variant],
          paddings[padding],
          className
        )}
        {...props}
      >
        <div className={cn(containerWidths[containerWidth])}>
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ 
    className, 
    title,
    subtitle,
    description,
    centered = true,
    children,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mb-12 sm:mb-16',
          centered && 'text-center',
          className
        )}
        {...props}
      >
        {subtitle && (
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            {subtitle}
          </div>
        )}
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        {children}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'