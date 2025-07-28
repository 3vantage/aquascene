import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          {/* Animated 404 */}
          <div className="relative">
            <h1 className="text-9xl font-bold text-white/10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🐠</div>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Looks like this fish swam too far from home. The page you're looking for doesn't exist.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-300 rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Explore Themes
          </Link>
        </div>
      </div>
    </div>
  )
}