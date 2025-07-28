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

  // Close mobile menu on resize and manage body scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Keyboard navigation for dropdown
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isThemeMenuOpen) return

      switch (event.key) {
        case 'Escape':
          setIsThemeMenuOpen(false)
          break
        case 'ArrowDown':
          event.preventDefault()
          // Focus next menu item
          const currentIndex = themes.findIndex(t => t.id === currentTheme)
          const nextIndex = (currentIndex + 1) % themes.length
          const nextButton = document.querySelector(`[data-theme-id="${themes[nextIndex].id}"]`) as HTMLElement
          nextButton?.focus()
          break
        case 'ArrowUp':
          event.preventDefault()
          // Focus previous menu item
          const prevCurrentIndex = themes.findIndex(t => t.id === currentTheme)
          const prevIndex = prevCurrentIndex === 0 ? themes.length - 1 : prevCurrentIndex - 1
          const prevButton = document.querySelector(`[data-theme-id="${themes[prevIndex].id}"]`) as HTMLElement
          prevButton?.focus()
          break
        case 'Enter':
        case ' ':
          event.preventDefault()
          const focusedElement = document.activeElement as HTMLElement
          focusedElement?.click()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isThemeMenuOpen, themes, currentTheme])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  // Helper function to get theme colors
  const getThemeColors = (themeId: string) => {
    const colorMap: { [key: string]: { primary: string; secondary: string } } = {
      'minimalist': { primary: '#f97316', secondary: '#fef3c7' },
      'nature': { primary: '#14b8a6', secondary: '#1e3a5f' },
      'modern': { primary: '#3b82f6', secondary: '#1f2937' },
      'portfolio': { primary: '#8b5cf6', secondary: '#f1f5f9' },
      'business': { primary: '#DE521D', secondary: '#2563eb' },
      'underwater': { primary: '#0891b2', secondary: '#1e3a8a' },
      'timeline': { primary: '#2563eb', secondary: '#1e293b' },
      'growth': { primary: '#059669', secondary: '#064e3b' },
      'zen': { primary: '#64748b', secondary: '#f1f5f9' },
      'workshop': { primary: '#1d4ed8', secondary: '#374151' },
      'competition': { primary: '#dc2626', secondary: '#fbbf24' },
      'scientific': { primary: '#7c3aed', secondary: '#e5e7eb' },
      'biotope': { primary: '#92400e', secondary: '#065f46' },
      'aquaponics': { primary: '#16a34a', secondary: '#0369a1' },
      'digital': { primary: '#3b82f6', secondary: '#1f2937' }
    }
    return colorMap[themeId] || { primary: '#6b7280', secondary: '#9ca3af' }
  }

  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[60] bg-white text-gray-900 px-4 py-2 rounded-md shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Skip to main content
      </a>
      
      <nav 
        role="navigation"
        aria-label="Main navigation"
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
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                aria-label="Change theme"
                aria-expanded={isThemeMenuOpen}
                aria-haspopup="true"
                id="theme-menu-button"
              >
                <Sun className="w-4 h-4" aria-hidden="true" />
                Theme
              </button>
              
              {isThemeMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsThemeMenuOpen(false)}
                  />
                  <div 
                    className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto"
                    role="menu"
                    aria-labelledby="theme-menu-button"
                  >
                    {themes.map((theme, index) => (
                      <button
                        key={theme.id}
                        onClick={() => {
                          onThemeChange(theme.id)
                          setIsThemeMenuOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors rounded-md mx-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-gray-50 ${
                          currentTheme === theme.id ? 'bg-gray-100 ring-2 ring-cyan-200' : ''
                        }`}
                        role="menuitem"
                        aria-current={currentTheme === theme.id ? 'true' : undefined}
                        tabIndex={isThemeMenuOpen ? 0 : -1}
                        data-theme-id={theme.id}
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

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed top-16 sm:top-20 left-0 right-0 bottom-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen 
              ? 'translate-x-0' 
              : 'translate-x-full'
          }`}
        >
          <div className="h-full overflow-y-auto">
            {/* Navigation Links */}
            <div className="px-4 py-6">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Mobile Theme Section - Enhanced */}
            <div className="px-4 py-6 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Design Themes</h3>
                <Link
                  href="/themes"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  View All
                </Link>
              </div>
              
              {/* Current Theme Display */}
              <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white">
                <div className="text-sm opacity-90">Current Theme</div>
                <div className="text-lg font-bold">
                  {themes.find(t => t.id === currentTheme)?.name || 'Unknown'}
                </div>
                <div className="text-sm opacity-80 mt-1">
                  {themes.find(t => t.id === currentTheme)?.description || ''}
                </div>
              </div>
              
              {/* Theme Grid - All Themes Visible */}
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {themes.map((theme) => {
                  const isActive = currentTheme === theme.id
                  const colors = getThemeColors(theme.id)
                  
                  return (
                    <button
                      key={theme.id}
                      onClick={() => {
                        onThemeChange(theme.id)
                        setIsMenuOpen(false)
                      }}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        isActive 
                          ? 'border-cyan-500 bg-cyan-50 shadow-md ring-2 ring-cyan-200' 
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center">
                        {/* Color Preview */}
                        <div className="flex flex-col gap-1 mr-3 flex-shrink-0">
                          <div 
                            className="w-8 h-3 rounded-sm"
                            style={{ background: colors.primary }}
                          />
                          <div 
                            className="w-8 h-2 rounded-sm opacity-60"
                            style={{ background: colors.secondary }}
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold truncate ${
                            isActive ? 'text-cyan-900' : 'text-gray-900'
                          }`}>
                            {theme.name}
                          </div>
                          <div className={`text-sm mt-1 line-clamp-2 ${
                            isActive ? 'text-cyan-700' : 'text-gray-600'
                          }`}>
                            {theme.description.length > 50 
                              ? `${theme.description.substring(0, 50)}...` 
                              : theme.description
                            }
                          </div>
                        </div>
                        
                        {isActive && (
                          <div className="ml-3 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="px-4 py-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 py-4 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors font-medium">
                  <Search className="w-5 h-5" />
                  Search
                </button>
                <button className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white hover:from-cyan-600 hover:to-blue-600 transition-colors font-medium shadow-lg">
                  <ShoppingCart className="w-5 h-5" />
                  Cart (0)
                </button>
              </div>
            </div>

            {/* Bottom Spacing */}
            <div className="h-6"></div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}