import type React from "react"
import type { ReactNode } from "react"

interface PaperFormProps {
  children: ReactNode
  title?: string
}

export function PaperForm({ children, title }: PaperFormProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg border border-gray-200 min-h-[11in] p-12 relative">
          {/* Paper texture overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-transparent"></div>
          </div>

          {/* Red margin line */}
          <div className="absolute left-16 top-0 bottom-0 w-px bg-red-300 opacity-60"></div>

          {/* Hole punches */}
          <div className="absolute left-6 top-20 w-4 h-4 bg-gray-100 rounded-full border border-gray-300"></div>
          <div className="absolute left-6 top-40 w-4 h-4 bg-gray-100 rounded-full border border-gray-300"></div>
          <div className="absolute left-6 top-60 w-4 h-4 bg-gray-100 rounded-full border border-gray-300"></div>

          <div className="relative z-10 ml-8">
            {title && (
              <div className="text-center mb-8 pb-4 border-b-2 border-blue-600">
                <h1 className="text-2xl font-bold text-gray-800 tracking-wide">{title}</h1>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function PaperFormField({
  label,
  children,
  required = false,
  className = "",
}: {
  label?: string
  children: ReactNode
  required?: boolean
  className?: string
}) {
  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
    </div>
  )
}

export function PaperInput({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full border-0 border-b-2 border-gray-300 bg-transparent px-1 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0 ${className}`}
      {...props}
    />
  )
}

export function PaperTextarea({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full border-2 border-gray-300 bg-transparent px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0 resize-none ${className}`}
      {...props}
    />
  )
}

export function PaperSelect({ className = "", children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`w-full border-0 border-b-2 border-gray-300 bg-transparent px-1 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}

export function PaperCheckbox({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <label className={`flex items-center space-x-2 text-sm text-gray-700 ${className}`}>
      <input
        type="checkbox"
        className="w-4 h-4 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  )
}

export function PaperRadio({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <label className={`flex items-center space-x-2 text-sm text-gray-700 ${className}`}>
      <input type="radio" className="w-4 h-4 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2" {...props} />
      {label && <span>{label}</span>}
    </label>
  )
}

export function PaperButton({ className = "", children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-blue-600 text-white px-8 py-3 font-medium tracking-wide hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
