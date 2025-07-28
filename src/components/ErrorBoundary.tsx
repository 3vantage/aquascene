'use client'

import React, { ErrorInfo, ReactNode } from 'react'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  showDetails?: boolean
  variant?: 'minimal' | 'detailed' | 'showcase'
}

export class GeneralErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  handleRefresh = () => {
    window.location.reload()
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      const variant = this.props.variant || 'detailed'

      if (variant === 'minimal') {
        return (
          <div className="flex items-center justify-center p-4">
            <div className="text-center">
              <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-3">Something went wrong</p>
              <button
                onClick={this.handleRetry}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )
      }

      if (variant === 'showcase') {
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
              {/* Aquascaping-themed error illustration */}
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <AlertTriangle className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Oops! Something's Not Quite Right
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our aquascaping showcase hit a snag, but don't worry – we're here to help you get back on track.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg"
                >
                  <RefreshCw className="w-5 h-5" />
                  Try Again
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </button>
              </div>
              
              <div className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                <p className="text-sm text-gray-500">
                  This is a demo showcase. If the problem persists, the component will gracefully recover.
                </p>
              </div>
            </div>
          </div>
        )
      }

      // Detailed variant
      return (
        <div className="min-h-[400px] flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Component Error
            </h3>
            <p className="text-gray-600 mb-6">
              A component has encountered an error. This doesn't affect the rest of the application.
            </p>
            
            {this.props.showDetails && this.state.error && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg text-left">
                <details className="text-sm">
                  <summary className="font-medium text-gray-700 cursor-pointer mb-2">
                    Error Details
                  </summary>
                  <pre className="text-xs text-gray-600 overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                </details>
              </div>
            )}
            
            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Retry Component
              </button>
              <button
                onClick={this.handleRefresh}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Specialized error boundaries for different sections
export function ShowcaseErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <GeneralErrorBoundary variant="showcase">
      {children}
    </GeneralErrorBoundary>
  )
}

export function ComponentErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <GeneralErrorBoundary variant="detailed" showDetails={false}>
      {children}
    </GeneralErrorBoundary>
  )
}

export function MinimalErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <GeneralErrorBoundary variant="minimal">
      {children}
    </GeneralErrorBoundary>
  )
}