'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, Search, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

interface NavigationProps {
  currentTheme: string
  onThemeChange: (theme: string) => void
  themes: Array<{ id: string; name: string; description: string }>
}

export function Navigation({ currentTheme, onThemeChange, themes }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-display text-xl sm:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            AquaScene
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2"
                aria-label="Change theme"
                aria-expanded={isThemeMenuOpen}
              >
                <Sun className="w-4 h-4" />
                Theme
              </button>
              
              {isThemeMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsThemeMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => {
                          onThemeChange(theme.id)
                          setIsThemeMenuOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                          currentTheme === theme.id ? 'bg-gray-100' : ''
                        }`}
                      >
                        <div className="font-medium text-gray-900">{theme.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{theme.description}</div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Theme Section */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-3">Select Theme</div>
              <div className="grid grid-cols-2 gap-2">
                {themes.slice(0, 6).map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      onThemeChange(theme.id)
                      setIsMenuOpen(false)
                    }}
                    className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                      currentTheme === theme.id 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
              <Link
                href="/themes"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-3 text-sm text-center text-gray-600 hover:text-gray-900"
              >
                View all themes →
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
                <Search className="w-4 h-4" />
                Search
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 rounded-lg text-white hover:bg-gray-800 transition-colors">
                <ShoppingCart className="w-4 h-4" />
                Cart (0)
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}