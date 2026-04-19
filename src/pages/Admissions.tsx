// src/pages/Admissions.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendAdmissionEmail } from '../utils/emailService';

const steps = [
  { step: '01', title: 'Enquire', desc: 'Contact us via phone, WhatsApp, or fill our online enquiry form to learn about courses.', icon: 'fas fa-phone-alt' },
  { step: '02', title: 'Visit Campus', desc: 'Schedule a campus visit to meet our faculty, see facilities, and understand our teaching approach.', icon: 'fas fa-school' },
  { step: '03', title: 'Registration', desc: 'Fill the admission form and submit required documents for registration.', icon: 'fas fa-file-alt' },
  { step: '04', title: 'Assessment', desc: 'Optional entrance assessment to determine the right batch and level for your child.', icon: 'fas fa-pencil-alt' },
  { step: '05', title: 'Fee Payment', desc: 'Pay admission fee and first month\'s fee to confirm your seat in the batch.', icon: 'fas fa-rupee-sign' },
  { step: '06', title: 'Begin Classes', desc: 'Start your journey towards JNV/Sainik School success with our expert faculty!', icon: 'fas fa-graduation-cap' },
];

const documents = [
  'Recent Passport-size Photographs (4)',
  'Birth Certificate (Original + Photocopy)',
  'Previous School Transfer Certificate',
  'Mark Sheet of Last Examination',
  'Aadhaar Card of Student & Parent',
  'Category Certificate (if SC/ST/OBC)',
  'BPL Certificate (for fee concession)',
  'Residence Proof',
];

// ── Form State Type ───────────────────────────────────────────
interface AdmissionFormState {
  student_name: string
  father_name: string
  date_of_birth: string
  gender: string
  phone: string
  email: string
  class_applying: string
  last_class_passed: string
  previous_school: string
  address: string
  mother_name: string
  message: string
}

const INITIAL_FORM: AdmissionFormState = {
  student_name:     '',
  father_name:      '',
  date_of_birth:    '',
  gender:           '',
  phone:            '',
  email:            '',
  class_applying:   '',
  last_class_passed:'',
  previous_school:  '',
  address:          '',
  mother_name:      '',
  message:          '',
};

export default function Admissions() {
  const [formData, setFormData] = useState<AdmissionFormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  // ── Handle Input Change ───────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ── Handle Submit → sends email via template_7f95jon ─────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setFormError('');

    const result = await sendAdmissionEmail({
      student_name:      formData.student_name,
      date_of_birth:     formData.date_of_birth,
      gender:            formData.gender,
      class_applying:    formData.class_applying,
      previous_school:   formData.previous_school,
      last_class_passed: formData.last_class_passed,
      father_name:       formData.father_name,
      mother_name:       formData.mother_name,
      phone:             formData.phone,
      email:             formData.email,
      address:           formData.address,
      message:           formData.message,
    });

    if (result.success) {
      setSubmitted(true);
      setFormStatus('idle');
      setFormData(INITIAL_FORM);
    } else {
      setFormStatus('error');
      setFormError(result.message);
    }
  };

  return (
    <div>
      {/* ── Page Hero ── */}
      <div className="page-hero text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb mb-4">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-white">Admissions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-['Playfair_Display'] mb-4">
            Admissions 2025-26
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Limited seats available! Join Nirwan Academy and give your child the best
            start towards JNV & Sainik School success
          </p>
        </div>
      </div>

      {/* ── Urgent Banner ── */}
      <div className="bg-[#D97706] py-3 text-white text-center">
        <p className="text-sm font-semibold">
          🔥 Admissions Open for 2025-26 Batch! Limited Seats — Apply Now!
          <a
            href="tel:7891387813"
            className="ml-3 bg-white text-[#D97706] px-4 py-1 rounded-full text-xs font-bold hover:bg-yellow-50 transition-colors"
          >
            Call: +91 7891387813
          </a>
        </p>
      </div>

      {/* ── Eligibility ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">
              Eligibility
            </p>
            <h2 className="section-title mb-3">Who Can Apply?</h2>
            <div className="gold-divider mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📖', title: 'JNV Class 6',    eligibility: 'Students currently in Class 5', age: 'Age: 9-13 years',  note: 'Must be studying in Govt school in same district' },
              { icon: '📚', title: 'JNV Class 9',    eligibility: 'Students currently in Class 8', age: 'Age: 13-16 years', note: 'Must be studying in Govt/recognized school' },
              { icon: '⚔️', title: 'Sainik School',  eligibility: 'Class 5 pass students',         age: 'Age: 10-12 years (Class 6)', note: 'Also Class 8 pass for Class 9 entry' },
              { icon: '🏫', title: 'Higher Primary', eligibility: 'Any student (Class 1-8)',        age: 'Age: 6-14 years', note: 'Open to all without restriction' },
            ].map((item, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm font-medium mb-1">{item.eligibility}</p>
                <p className="text-[#D97706] text-xs font-bold mb-2">{item.age}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admission Process (CLEAN - NO FORMS INSIDE) ── */}
      <section className="py-16 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">
              Process
            </p>
            <h2 className="section-title mb-3">How to Get Admitted</h2>
            <div className="gold-divider mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden"
              >
                {/* Background step number */}
                <div className="absolute top-0 right-0 text-7xl font-black text-gray-50 leading-none select-none">
                  {s.step}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center mb-4">
                    <i className={`${s.icon} text-white text-lg`}></i>
                  </div>
                  <div className="text-[#D97706] font-black text-3xl mb-1">{s.step}</div>
                  <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Apply Now CTA below steps */}
          <div className="text-center mt-10">
            <a
              href="#apply"
              className="btn-primary text-base py-3 px-8 inline-flex items-center gap-2"
            >
              <i className="fas fa-paper-plane"></i> Apply Now — Scroll to Form
            </a>
          </div>
        </div>
      </section>

      {/* ── Fee Structure ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Fees</p>
            <h2 className="section-title mb-2">Fee Structure 2025-26</h2>
            <p className="text-gray-500 text-sm">
              Affordable fees with quality education — scholarship available for meritorious students
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white p-4 grid grid-cols-4 font-semibold text-sm">
              <span>Course</span>
              <span className="text-center">Day Scholar</span>
              <span className="text-center">Hostel + Food</span>
              <span className="text-center">Admission Fee</span>
            </div>
            {[
              { course: 'JNV Class 6',    day: '₹3,500/mo', hostel: '₹5,000/mo', admission: '₹1,000' },
              { course: 'JNV Class 9',    day: '₹4,000/mo', hostel: '₹5,000/mo', admission: '₹1,000' },
              { course: 'Sainik School',  day: '₹5,000/mo', hostel: '₹6,000/mo', admission: '₹1,500' },
              { course: 'Higher Primary', day: '₹1,800/mo', hostel: '₹4,500/mo', admission: '₹500'   },
            ].map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 p-4 text-sm border-b border-gray-50 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                }`}
              >
                <span className="font-semibold text-[#1E3A8A]">{row.course}</span>
                <span className="text-center font-medium">{row.day}</span>
                <span className="text-center font-bold text-[#D97706]">{row.hostel}</span>
                <span className="text-center text-gray-600">{row.admission}</span>
              </div>
            ))}
            <div className="p-4 bg-green-50 text-center">
              <p className="text-green-700 text-sm font-medium">
                <i className="fas fa-info-circle mr-2"></i>
                Special fee concession available for SC/ST students and meritorious children. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Documents Required ── */}
      <section className="py-12 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-title mb-2">Documents Required</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <i className="fas fa-file-check text-[#1E3A8A] flex-shrink-0"></i>
                  <span className="text-sm text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM (sends to template_7f95jon) ── */}
      <section className="py-16 bg-white" id="apply">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">
              Apply Online
            </p>
            <h2 className="section-title mb-2">Online Application Form</h2>
            <p className="text-gray-500 text-sm">
              Fill the form below and our team will contact you to complete the admission process
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">

            {/* ── Success State ── */}
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-green-700 font-bold text-2xl mb-3">Application Submitted!</h3>
                <p className="text-green-600">
                  Thank you for applying to Nirwan Academy. Our admission team will contact
                  you within 24 hours to guide you through the next steps.
                </p>
                <p className="text-gray-500 text-sm mt-4">
                  For immediate help, call:{' '}
                  <a href="tel:7891387813" className="text-[#1E3A8A] font-bold">
                    +91 7891387813
                  </a>
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-[#1E3A8A] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition text-sm font-medium"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (

              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Error Banner */}
                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                    <span className="text-red-500 text-xl">⚠️</span>
                    <div>
                      <p className="text-red-800 font-semibold text-sm">Failed to submit application</p>
                      <p className="text-red-600 text-xs mt-0.5">{formError}</p>
                      <p className="text-red-600 text-xs mt-1">
                        Please call us directly:{' '}
                        <a href="tel:+917891387813" className="font-bold underline">
                          +91 7891387813
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {/* Row 1: Student Name + Father Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="adm_student_name" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Student's Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="adm_student_name"
                      name="student_name"
                      type="text"
                      required
                      value={formData.student_name}
                      onChange={handleChange}
                      placeholder="Enter student's full name"
                      autoComplete="name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="adm_father_name" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Father's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="adm_father_name"
                      name="father_name"
                      type="text"
                      required
                      value={formData.father_name}
                      onChange={handleChange}
                      placeholder="Father's full name"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 2: Mother Name + DOB */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="adm_mother_name" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Mother's Name <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <input
                      id="adm_mother_name"
                      name="mother_name"
                      type="text"
                      value={formData.mother_name}
                      onChange={handleChange}
                      placeholder="Mother's full name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="adm_dob" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="adm_dob"
                      name="date_of_birth"
                      type="date"
                      required
                      value={formData.date_of_birth}
                      onChange={handleChange}
                      max={new Date().toISOString().split('T')[0]}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 3: Gender + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="adm_gender" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="adm_gender"
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="adm_phone" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="adm_phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 4: Email */}
                <div>
                  <label htmlFor="adm_email" className="text-sm font-medium text-gray-700 mb-1.5 block">
                    Email Address <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    id="adm_email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="form-input"
                  />
                </div>

                {/* Row 5: Course Applying + Last Class Passed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="adm_class_applying" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Course Applying For <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="adm_class_applying"
                      name="class_applying"
                      required
                      value={formData.class_applying}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select Course</option>
                      <option value="JNV Class 6 Coaching">JNV Class 6 Coaching</option>
                      <option value="JNV Class 9 Coaching">JNV Class 9 Coaching</option>
                      <option value="Sainik School Coaching">Sainik School Coaching</option>
                      <option value="Military School Coaching">Military School Coaching</option>
                      <option value="Higher Primary (Class 1-8)">Higher Primary (Class 1-8)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="adm_last_class" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Current Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="adm_last_class"
                      name="last_class_passed"
                      required
                      value={formData.last_class_passed}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select Class</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(c => (
                        <option key={c} value={`Class ${c}`}>Class {c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 6: Previous School */}
                <div>
                  <label htmlFor="adm_prev_school" className="text-sm font-medium text-gray-700 mb-1.5 block">
                    Previous School Name <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    id="adm_prev_school"
                    name="previous_school"
                    type="text"
                    value={formData.previous_school}
                    onChange={handleChange}
                    placeholder="School name"
                    className="form-input"
                  />
                </div>

                {/* Row 7: Address */}
                <div>
                  <label htmlFor="adm_address" className="text-sm font-medium text-gray-700 mb-1.5 block">
                    Home Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="adm_address"
                    name="address"
                    rows={2}
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Village/City, District, State"
                    className="form-input resize-none"
                  />
                </div>

                {/* Row 8: Message */}
                <div>
                  <label htmlFor="adm_message" className="text-sm font-medium text-gray-700 mb-1.5 block">
                    Additional Message <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <textarea
                    id="adm_message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special requirements or questions?"
                    className="form-input resize-none"
                  />
                </div>

                {/* Agree Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    id="adm_agree"
                    className="rounded mt-0.5 w-4 h-4 accent-[#1E3A8A]"
                  />
                  <label htmlFor="adm_agree" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the terms and confirm that the information provided is accurate
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`btn-primary w-full justify-center text-base py-3.5 ${
                    formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting Application...
                    </span>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Submit Application
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  <i className="fas fa-lock mr-1"></i>
                  Your information is safe and will not be shared with anyone
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}