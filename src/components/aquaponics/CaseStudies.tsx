import React from 'react'
import { Globe } from 'lucide-react'

interface CaseStudy {
  location: string
  project: string
  scale: string
  production: string
  saving: string
  year: string
}

interface CaseStudiesProps {
  studies: CaseStudy[]
}

export function CaseStudies({ studies }: CaseStudiesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
            Global Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Real-world implementations demonstrating aquaponics potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {studies.map((study, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-green-100">
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{study.project}</h3>
                    <p className="text-sm text-gray-600">{study.location}</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                  {study.year}
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Scale:</span>
                  <span className="font-medium text-gray-900">{study.scale}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Production:</span>
                  <span className="font-medium text-green-600">{study.production}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Resource Saving:</span>
                  <span className="font-medium text-blue-600">{study.saving}</span>
                </div>
              </div>
              
              <button className="w-full bg-green-50 text-green-600 py-3 rounded-lg font-medium hover:bg-green-100 transition-colors">
                View Case Study
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}