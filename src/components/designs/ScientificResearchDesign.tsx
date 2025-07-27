import React, { useState } from 'react'
import { products } from '@/data/products'
import { 
  Microscope, BarChart3, FlaskConical, BookOpen, 
  TrendingUp, Database, Atom, Beaker, LineChart,
  Activity, Zap, Thermometer, Droplets, Calculator
} from 'lucide-react'

export function ScientificResearchDesign() {
  const [activeTab, setActiveTab] = useState('research')
  
  const researchAreas = [
    {
      id: 'algae',
      title: 'Algae Control Research',
      description: 'Advanced studies on nutrient dynamics and algae prevention',
      icon: <Microscope className="w-6 h-6" />,
      studies: 23,
      publications: 8
    },
    {
      id: 'co2',
      title: 'CO₂ Optimization',
      description: 'Carbon dioxide efficiency and plant growth correlation',
      icon: <Activity className="w-6 h-6" />,
      studies: 31,
      publications: 12
    },
    {
      id: 'lighting',
      title: 'LED Spectrum Analysis',
      description: 'Light wavelength effects on photosynthesis and coloration',
      icon: <Zap className="w-6 h-6" />,
      studies: 18,
      publications: 6
    },
    {
      id: 'filtration',
      title: 'Biological Filtration',
      description: 'Beneficial bacteria colonies and nitrogen cycle optimization',
      icon: <FlaskConical className="w-6 h-6" />,
      studies: 27,
      publications: 9
    }
  ]

  const datasets = [
    {
      parameter: 'pH Level',
      value: '6.8',
      range: '6.5-7.2',
      trend: '+0.2',
      status: 'optimal',
      icon: <Droplets className="w-5 h-5" />
    },
    {
      parameter: 'Temperature',
      value: '24.5°C',
      range: '22-26°C',
      trend: '-0.1',
      status: 'optimal',
      icon: <Thermometer className="w-5 h-5" />
    },
    {
      parameter: 'CO₂ Concentration',
      value: '28 ppm',
      range: '20-30ppm',
      trend: '+2.1',
      status: 'good',
      icon: <Activity className="w-5 h-5" />
    },
    {
      parameter: 'Light Intensity',
      value: '45 PAR',
      range: '30-50 PAR',
      trend: '+1.8',
      status: 'optimal',
      icon: <Zap className="w-5 h-5" />
    }
  ]

  const equipment = [
    {
      name: 'pH Controller Pro',
      type: 'Monitoring Equipment',
      accuracy: '±0.01 pH',
      price: '€299',
      research: 'Used in 15+ studies'
    },
    {
      name: 'CO₂ Analyzer Digital',
      type: 'Gas Measurement',
      accuracy: '±1 ppm',
      price: '€449',
      research: 'Published in 8 papers'
    },
    {
      name: 'PAR Meter Professional',
      type: 'Light Measurement',
      accuracy: '±3%',
      price: '€179',
      research: 'Standard in research'
    }
  ]

  const publications = [
    {
      title: 'Optimal CO₂ Concentrations for Carpeting Plants',
      journal: 'Aquatic Botany Research',
      year: '2024',
      citations: 47,
      impact: 'High'
    },
    {
      title: 'LED Spectrum Effects on Plant Coloration',
      journal: 'Journal of Aquatic Sciences',
      year: '2023',
      citations: 62,
      impact: 'High'
    },
    {
      title: 'Nitrogen Cycle Dynamics in Planted Aquariums',
      journal: 'Freshwater Biology',
      year: '2023',
      citations: 38,
      impact: 'Medium'
    }
  ]

  const methodologies = [
    {
      name: 'Controlled Experiment Design',
      description: 'Isolated variable testing with control groups',
      usage: '85%'
    },
    {
      name: 'Statistical Analysis',
      description: 'Advanced statistical methods and data validation',
      usage: '92%'
    },
    {
      name: 'Peer Review Process',
      description: 'Independent validation and reproducibility',
      usage: '100%'
    },
    {
      name: 'Long-term Monitoring',
      description: 'Extended observation periods for reliable data',
      usage: '78%'
    }
  ]

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-gray-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-8">
              <Microscope className="w-5 h-5 text-purple-600 mr-3" />
              <span className="text-purple-700 font-semibold">Research Laboratory</span>
            </div>
            
            <h1 className="font-display font-bold text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Scientific
              </span>
              <br />
              <span className="text-gray-900">Research</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Advancing aquascaping through rigorous scientific methodology. Data-driven insights, 
              peer-reviewed research, and evidence-based practices for optimal aquatic ecosystems.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-purple-600">127</div>
                <div className="text-gray-600">Publications</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-blue-600">2.5M</div>
                <div className="text-gray-600">Data Points</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FlaskConical className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-emerald-600">45</div>
                <div className="text-gray-600">Active Studies</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-2xl text-indigo-600">98.7%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Microscope className="w-6 h-6" />
                View Research Data
              </button>
              <button className="border-2 border-purple-500 text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all">
                Download Papers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              {[
                { id: 'research', label: 'Research Areas', icon: <Microscope className="w-4 h-4" /> },
                { id: 'data', label: 'Live Data', icon: <BarChart3 className="w-4 h-4" /> },
                { id: 'methodology', label: 'Methodology', icon: <Calculator className="w-4 h-4" /> },
                { id: 'publications', label: 'Publications', icon: <BookOpen className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-purple-600 shadow-md'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Content */}
      {activeTab === 'research' && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
                Active Research Areas
              </h2>
              <p className="text-xl text-gray-600">
                Current scientific investigations advancing aquascaping knowledge
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {researchAreas.map((area) => (
                <div key={area.id} className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-purple-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{area.title}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-purple-100">
                      <div className="font-bold text-2xl text-purple-600">{area.studies}</div>
                      <div className="text-sm text-gray-500">Active Studies</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-purple-100">
                      <div className="font-bold text-2xl text-emerald-600">{area.publications}</div>
                      <div className="text-sm text-gray-500">Publications</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Live Data Content */}
      {activeTab === 'data' && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
                Real-Time Research Data
              </h2>
              <p className="text-xl text-gray-600">
                Live monitoring from our research aquariums and field studies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {datasets.map((data, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border-l-4 border-purple-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                      {data.icon}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      data.status === 'optimal' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {data.status}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">{data.parameter}</h3>
                  <div className="font-bold text-2xl text-gray-900 mb-1">{data.value}</div>
                  <div className="text-sm text-gray-500 mb-2">Range: {data.range}</div>
                  
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-emerald-600 font-medium">{data.trend}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Data Visualization Placeholder */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-gray-900 mb-6 text-center">pH Levels Over Time</h3>
              <div className="h-64 bg-white rounded-xl flex items-center justify-center border border-purple-200">
                <div className="text-center">
                  <LineChart className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive data visualization</p>
                  <p className="text-sm text-gray-500">Real-time pH monitoring across 12 research tanks</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Methodology Content */}
      {activeTab === 'methodology' && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
                Research Methodology
              </h2>
              <p className="text-xl text-gray-600">
                Rigorous scientific approaches ensuring reliable and reproducible results
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                {methodologies.map((method, index) => (
                  <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-bold text-lg text-gray-900">{method.name}</h3>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {method.usage}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: method.usage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <h3 className="font-bold text-xl text-gray-900 mb-6">Quality Standards</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Hypothesis Formation</div>
                      <div className="text-sm text-gray-600">Clear, testable predictions based on existing knowledge</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Controlled Variables</div>
                      <div className="text-sm text-gray-600">Isolation of test parameters with proper controls</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Statistical Validation</div>
                      <div className="text-sm text-gray-600">Appropriate sample sizes and statistical significance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      4
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Peer Review</div>
                      <div className="text-sm text-gray-600">Independent evaluation and reproducibility testing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Publications Content */}
      {activeTab === 'publications' && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
                Recent Publications
              </h2>
              <p className="text-xl text-gray-600">
                Peer-reviewed research contributing to aquascaping science
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{pub.title}</h3>
                      <p className="text-purple-600 font-medium mb-1">{pub.journal}</p>
                      <p className="text-sm text-gray-500">{pub.year}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-2xl text-gray-900">{pub.citations}</div>
                      <div className="text-sm text-gray-500">Citations</div>
                      <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                        pub.impact === 'High' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {pub.impact} Impact
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Equipment */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              Research-Grade Equipment
            </h2>
            <p className="text-xl text-gray-600">
              Professional instruments used in our scientific studies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                    <Beaker className="w-6 h-6" />
                  </div>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Research Grade
                  </span>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.type}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Accuracy:</span>
                    <span className="font-medium">{item.accuracy}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Research:</span>
                    <span className="font-medium text-purple-600">{item.research}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl text-purple-600">{item.price}</span>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all">
                    View Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Contact */}
      <section className="py-24 bg-gradient-to-br from-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Microscope className="w-16 h-16 mx-auto mb-8 opacity-90" />
            <h2 className="font-display font-bold text-4xl mb-6">
              Join Our Research Community
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Collaborate with scientists and contribute to advancing aquascaping knowledge
            </p>
            
            <form className="max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>
              <select className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-white focus:border-transparent mb-6">
                <option value="" className="text-gray-800">Research Interest</option>
                <option value="algae" className="text-gray-800">Algae Control Research</option>
                <option value="co2" className="text-gray-800">CO₂ Optimization</option>
                <option value="lighting" className="text-gray-800">LED Spectrum Analysis</option>
                <option value="filtration" className="text-gray-800">Biological Filtration</option>
              </select>
              <textarea
                placeholder="Describe your research background or interests..."
                rows={4}
                className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent mb-6"
              />
              <button
                type="submit"
                className="w-full bg-white text-purple-600 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Join Research Network
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}