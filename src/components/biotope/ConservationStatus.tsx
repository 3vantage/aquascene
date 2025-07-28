import React from 'react'

interface ConservationEffort {
  region: string
  status: string
  protected: string
  threat: string
  action: string
}

interface ConservationStatusProps {
  efforts: ConservationEffort[]
}

export function ConservationStatus({ efforts }: ConservationStatusProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
            Conservation Efforts
          </h2>
          <p className="text-xl text-gray-600">
            Supporting habitat preservation through education and awareness
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {efforts.map((effort, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-green-100">
              
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-lg text-gray-900">{effort.region}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  effort.status === 'Critical' ? 'bg-red-100 text-red-700' :
                  effort.status === 'Vulnerable' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {effort.status}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Protected Area:</span>
                  <span className="font-medium text-green-700">{effort.protected}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Main Threat:</span>
                  <span className="font-medium text-red-600">{effort.threat}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Conservation:</span>
                  <span className="font-medium text-blue-600">{effort.action}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}