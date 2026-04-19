// src/components/EnquiryForm.tsx
import { sendEnquiryEmail, EnquiryFormData } from '../utils/emailService'
import { useState } from 'react'

const CLASS_OPTIONS = [
  'Nursery', 'KG', 'Class 1', 'Class 2', 'Class 3',
  'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8',
  'Class 9', 'Class 10 (Matric)',
]

const INITIAL_FORM: EnquiryFormData = {
  student_name: '',
  interested_class: '',
  parent_name: '',
  phone: '',
  email: '',
  message: '',
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<EnquiryFormData>(INITIAL_FORM)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [errors, setErrors] = useState<Partial<EnquiryFormData>>({})

  // ── Validation ────────────────────────────────────────────
  const validate = (): boolean => {
    const newErrors: Partial<EnquiryFormData> = {}

    if (!formData.student_name.trim())
      newErrors.student_name = 'Student name is required'
    
    if (!formData.interested_class)
      newErrors.interested_class = 'Please select a class'
    
    if (!formData.parent_name.trim())
      newErrors.parent_name = 'Parent name is required'
    
    if (!formData.phone.trim())
      newErrors.phone = 'Phone number is required'
    else if (!/^[0-9+\s\-]{10,15}$/.test(formData.phone))
      newErrors.phone = 'Please enter a valid phone number'
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email address'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ── Handle Input Change ───────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name as keyof EnquiryFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // ── Handle Submit ─────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('sending')

    const result = await sendEnquiryEmail(formData)

    if (result.success) {
      setStatus('success')
      setStatusMessage(result.message)
      setFormData(INITIAL_FORM) // Reset form
    } else {
      setStatus('error')
      setStatusMessage(result.message)
    }
  }

  // ── Success State ─────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Enquiry Sent Successfully!
        </h3>
        <p className="text-green-700 mb-6">{statusMessage}</p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Send Another Enquiry
        </button>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Error Banner */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-red-500 text-xl">⚠️</span>
          <div>
            <p className="text-red-800 font-semibold">Something went wrong</p>
            <p className="text-red-600 text-sm">{statusMessage}</p>
            <p className="text-red-600 text-sm mt-1">
              Call us directly:{' '}
              <a href="tel:+92XXXXXXXXXX" className="font-bold underline">
                +92-XXX-XXXXXXX
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Row 1: Student Name & Class */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="student_name"
            value={formData.student_name}
            onChange={handleChange}
            placeholder="Enter student's full name"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.student_name ? 'border-red-400 bg-red-50' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
          />
          {errors.student_name && (
            <p className="text-red-500 text-xs mt-1">⚠ {errors.student_name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Interested Class <span className="text-red-500">*</span>
          </label>
          <select
            name="interested_class"
            value={formData.interested_class}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.interested_class ? 'border-red-400 bg-red-50' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white`}
          >
            <option value="">Select Class</option>
            {CLASS_OPTIONS.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
          {errors.interested_class && (
            <p className="text-red-500 text-xs mt-1">⚠ {errors.interested_class}</p>
          )}
        </div>
      </div>

      {/* Row 2: Parent Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Parent / Guardian Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="parent_name"
            value={formData.parent_name}
            onChange={handleChange}
            placeholder="Father's or Mother's name"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.parent_name ? 'border-red-400 bg-red-50' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
          />
          {errors.parent_name && (
            <p className="text-red-500 text-xs mt-1">⚠ {errors.parent_name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="03XX-XXXXXXX"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">⚠ {errors.phone}</p>
          )}
        </div>
      </div>

      {/* Row 3: Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address{' '}
          <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="parent@email.com"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">⚠ {errors.email}</p>
        )}
      </div>

      {/* Row 4: Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message / Query{' '}
          <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Any specific questions or requirements..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full py-4 rounded-lg font-semibold text-white text-lg transition-all duration-300 ${
          status === 'sending'
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-95'
        }`}
      >
        {status === 'sending' ? (
          <span className="flex items-center justify-center gap-3">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending Enquiry...
          </span>
        ) : (
          '📩 Send Enquiry'
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        🔒 Your information is safe and will not be shared with anyone
      </p>
    </form>
  )
}