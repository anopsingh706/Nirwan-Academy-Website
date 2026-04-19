// src/components/AdmissionForm.tsx
import { useState } from 'react'
import { sendAdmissionEmail, AdmissionFormData } from '../utils/emailService'

const CLASS_OPTIONS = [
  'Nursery', 'KG', 'Class 1', 'Class 2', 'Class 3', 'Class 4',
  'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10 (Matric)',
]

const INITIAL_FORM: AdmissionFormData = {
  student_name: '',
  date_of_birth: '',
  gender: '',
  class_applying: '',
  previous_school: '',
  last_class_passed: '',
  father_name: '',
  mother_name: '',
  phone: '',
  email: '',
  address: '',
  message: '',
}

export default function AdmissionForm() {
  const [formData, setFormData] = useState<AdmissionFormData>(INITIAL_FORM)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [errors, setErrors] = useState<Partial<AdmissionFormData>>({})
  const [currentStep, setCurrentStep] = useState(1)

  const validate = (step: number): boolean => {
    const newErrors: Partial<AdmissionFormData> = {}

    if (step === 1) {
      if (!formData.student_name.trim()) newErrors.student_name = 'Required'
      if (!formData.date_of_birth) newErrors.date_of_birth = 'Required'
      if (!formData.gender) newErrors.gender = 'Required'
      if (!formData.class_applying) newErrors.class_applying = 'Required'
    }

    if (step === 2) {
      if (!formData.father_name.trim()) newErrors.father_name = 'Required'
      if (!formData.phone.trim()) newErrors.phone = 'Required'
      else if (!/^[0-9+\s\-]{10,15}$/.test(formData.phone))
        newErrors.phone = 'Enter valid phone number'
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = 'Enter valid email'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof AdmissionFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleNext = () => {
    if (validate(currentStep)) setCurrentStep(2)
  }

  const handleBack = () => setCurrentStep(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate(2)) return

    setStatus('sending')
    const result = await sendAdmissionEmail(formData)

    if (result.success) {
      setStatus('success')
      setStatusMessage(result.message)
      setFormData(INITIAL_FORM)
      setCurrentStep(1)
    } else {
      setStatus('error')
      setStatusMessage(result.message)
    }
  }

  // Success Screen
  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-green-800 mb-3">
          Application Submitted!
        </h3>
        <p className="text-green-700 mb-2">{statusMessage}</p>
        <p className="text-green-600 text-sm mb-6">
          Our admission team will call you on <strong>{formData.phone || 'the number provided'}</strong>
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-medium"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Step Indicator */}
      <div className="flex items-center mb-8">
        <div className={`flex items-center gap-2 ${currentStep === 1 ? 'text-blue-600' : 'text-green-600'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
            currentStep === 1 ? 'bg-blue-600' : 'bg-green-500'
          }`}>
            {currentStep > 1 ? '✓' : '1'}
          </div>
          <span className="font-medium text-sm hidden sm:block">Student Info</span>
        </div>
        <div className={`flex-1 h-0.5 mx-3 ${currentStep === 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
        <div className={`flex items-center gap-2 ${currentStep === 2 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            currentStep === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            2
          </div>
          <span className="font-medium text-sm hidden sm:block">Parent Info</span>
        </div>
      </div>

      {/* Error Banner */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-5">
          <p className="text-red-800 font-semibold">⚠️ {statusMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>

        {/* ── STEP 1: Student Info ── */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text" name="student_name" value={formData.student_name}
                  onChange={handleChange} placeholder="Full name as per B-Form"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.student_name ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.student_name && <p className="text-red-500 text-xs mt-1">⚠ {errors.student_name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date" name="date_of_birth" value={formData.date_of_birth}
                  onChange={handleChange} max={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.date_of_birth ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.date_of_birth && <p className="text-red-500 text-xs mt-1">⚠ {errors.date_of_birth}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender" value={formData.gender} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.gender ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && <p className="text-red-500 text-xs mt-1">⚠ {errors.gender}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Applying for Class <span className="text-red-500">*</span>
                </label>
                <select
                  name="class_applying" value={formData.class_applying} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.class_applying ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                >
                  <option value="">Select Class</option>
                  {CLASS_OPTIONS.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
                {errors.class_applying && <p className="text-red-500 text-xs mt-1">⚠ {errors.class_applying}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Previous School <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="text" name="previous_school" value={formData.previous_school}
                  onChange={handleChange} placeholder="Previous school name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Class Passed <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="text" name="last_class_passed" value={formData.last_class_passed}
                  onChange={handleChange} placeholder="e.g. Class 5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              type="button" onClick={handleNext}
              className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Next: Parent Information →
            </button>
          </div>
        )}

        {/* ── STEP 2: Parent Info ── */}
        {currentStep === 2 && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Father's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text" name="father_name" value={formData.father_name}
                  onChange={handleChange} placeholder="Father's full name"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.father_name ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.father_name && <p className="text-red-500 text-xs mt-1">⚠ {errors.father_name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mother's Name <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="text" name="mother_name" value={formData.mother_name}
                  onChange={handleChange} placeholder="Mother's full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel" name="phone" value={formData.phone}
                  onChange={handleChange} placeholder="03XX-XXXXXXX"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">⚠ {errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="email" name="email" value={formData.email}
                  onChange={handleChange} placeholder="parent@email.com"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">⚠ {errors.email}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Home Address <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="text" name="address" value={formData.address}
                  onChange={handleChange} placeholder="Street, Area, City"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  rows={3} placeholder="Any special requirements or questions..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button" onClick={handleBack}
                className="flex-1 py-4 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition"
              >
                ← Back
              </button>
              <button
                type="submit" disabled={status === 'sending'}
                className={`flex-1 py-4 rounded-lg font-semibold text-white text-lg transition ${
                  status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Submitting...
                  </span>
                ) : '🎓 Submit Application'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}