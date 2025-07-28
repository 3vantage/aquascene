import React from 'react'
import { Globe } from 'lucide-react'

export function BiotopeContactForm() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="w-16 h-16 mx-auto mb-8 opacity-90" />
          <h2 className="font-display font-bold text-4xl mb-6">
            Start Your Biotope Journey
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Create authentic natural habitats and contribute to conservation efforts
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
              <option value="" className="text-gray-800">Choose Biotope Interest</option>
              <option value="amazon" className="text-gray-800">Amazon Basin - South America</option>
              <option value="malawi" className="text-gray-800">Lake Malawi - East Africa</option>
              <option value="borneo" className="text-gray-800">Borneo Stream - Southeast Asia</option>
              <option value="madagascar" className="text-gray-800">Madagascar Rivers - Madagascar</option>
            </select>
            <textarea
              placeholder="Tell us about your biotope goals and experience..."
              rows={4}
              className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent mb-6"
            />
            <button
              type="submit"
              className="w-full bg-white text-green-600 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Begin Biotope Project
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}