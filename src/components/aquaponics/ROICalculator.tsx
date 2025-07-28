import React from 'react'

export function ROICalculator() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Investment Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Calculate your aquaponics system ROI and payback period
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Input Parameters */}
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-6">System Parameters</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      System Size (m²)
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      defaultValue="100"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>10m²</span>
                      <span>100m²</span>
                      <span>1000m²</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Initial Investment (€)
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>€5,000 - Small Scale</option>
                      <option>€15,000 - Medium Scale</option>
                      <option>€50,000 - Commercial Scale</option>
                      <option>€150,000 - Industrial Scale</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Crops
                    </label>
                    <div className="space-y-2">
                      {['Leafy Greens', 'Herbs', 'Tomatoes', 'Fish Production'].map((crop) => (
                        <label key={crop} className="flex items-center">
                          <input type="checkbox" className="rounded text-green-600" />
                          <span className="ml-2 text-sm text-gray-700">{crop}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Results Preview */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-6">Projected Returns</h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">18 months</div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-xl font-bold text-gray-900">€3,200</div>
                      <div className="text-xs text-gray-500">Monthly Revenue</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-xl font-bold text-blue-600">€800</div>
                      <div className="text-xs text-gray-500">Monthly Savings</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Water Savings:</span>
                      <span className="font-medium text-blue-600">€2,400/year</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Crop Yield:</span>
                      <span className="font-medium text-green-600">3.2 tons/year</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Fish Production:</span>
                      <span className="font-medium text-orange-600">480 kg/year</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-green-600 transition-colors">
                  Get Detailed Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}