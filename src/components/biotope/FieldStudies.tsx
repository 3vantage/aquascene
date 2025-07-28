import React from 'react'
import { Camera, MapPin } from 'lucide-react'

interface FieldStudy {
  title: string
  location: string
  duration: string
  species: string
  lead: string
}

interface FieldStudiesProps {
  studies: FieldStudy[]
}

export function FieldStudies({ studies }: FieldStudiesProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
            Active Field Research
          </h2>
          <p className="text-xl text-gray-600">
            Ongoing scientific expeditions documenting natural habitats
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white">
                  <Camera className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{study.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {study.location}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-900">{study.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Species:</span>
                  <span className="font-medium text-green-600">{study.species}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Lead Researcher:</span>
                  <span className="font-medium text-blue-600">{study.lead}</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all">
                View Research
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}