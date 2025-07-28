import React from 'react'
import { ReactNode } from 'react'

interface Benefit {
  icon: ReactNode
  title: string
  value: string
  description: string
  color: string
}

interface BenefitsDisplayProps {
  benefits: Benefit[]
}

export function BenefitsDisplay({ benefits }: BenefitsDisplayProps) {
  return (
    <div className="grid md:grid-cols-4 gap-8 mb-12">
      {benefits.map((benefit, index) => (
        <div key={index} className="text-center">
          <div className={`w-16 h-16 bg-gradient-to-br from-current to-current rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${benefit.color}`} style={{opacity: 0.1}}>
            <div className={`${benefit.color}`}>
              {benefit.icon}
            </div>
          </div>
          <div className={`font-bold text-2xl ${benefit.color}`}>{benefit.value}</div>
          <div className="text-gray-600 text-sm">{benefit.title}</div>
        </div>
      ))}
    </div>
  )
}