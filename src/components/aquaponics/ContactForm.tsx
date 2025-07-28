import React from 'react'
import { Recycle, Calculator, Award, Users, Sprout } from 'lucide-react'

export function ContactForm() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-500 to-emerald-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Recycle className="w-16 h-16 mx-auto mb-8 opacity-90" />
          <h2 className="font-display font-bold text-4xl mb-6">
            Start Your Aquaponics Journey
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join the sustainable farming revolution with our expert guidance and support
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Calculator className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="font-semibold">Free Consultation</div>
              <div className="text-sm opacity-80">System design & planning</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="font-semibold">Proven Systems</div>
              <div className="text-sm opacity-80">Tested configurations</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="font-semibold">Ongoing Support</div>
              <div className="text-sm opacity-80">24/7 expert assistance</div>
            </div>
          </div>
          
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
              <option value="" className="text-gray-800">System Interest</option>
              <option value="nft" className="text-gray-800">NFT System - Nutrient Film Technique</option>
              <option value="dwc" className="text-gray-800">DWC System - Deep Water Culture</option>
              <option value="media" className="text-gray-800">Media Bed - Gravel Bed System</option>
              <option value="custom" className="text-gray-800">Custom Solution</option>
            </select>
            <textarea
              placeholder="Tell us about your goals, space, and experience level..."
              rows={4}
              className="w-full px-6 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent mb-6"
            />
            <button
              type="submit"
              className="w-full bg-white text-green-600 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
            >
              <Sprout className="w-6 h-6" />
              Start Growing Sustainably
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}