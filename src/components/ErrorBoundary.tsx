'use client'

import React from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{error?: Error; reset: () => void}>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
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

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} reset={this.reset} />
      }

      return <DefaultErrorFallback error={this.state.error} reset={this.reset} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, reset }: { error?: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Oops! Something went wrong
        </h2>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          The aquascape encountered an unexpected issue. Don't worry, our team has been notified 
          and we're working to fix this.
        </p>
        
        {process.env.NODE_ENV === 'development' && error && (
          <details className="text-left bg-gray-100 rounded-lg p-4 mb-6 text-sm">
            <summary className="cursor-pointer font-medium text-gray-700 mb-2">
              Error Details (Development)
            </summary>
            <pre className="text-red-600 overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </button>
        </div>
      </div>
    </div>
  )
}

// Functional component wrapper for easier usage
export function ErrorBoundaryWrapper({ 
  children, 
  fallback 
}: {
  children: React.ReactNode
  fallback?: React.ComponentType<{error?: Error; reset: () => void}>
}) {
  return (
    <ErrorBoundary fallback={fallback}>
      {children}
    </ErrorBoundary>
  )
}