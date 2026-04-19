// src/utils/emailService.ts
import emailjs from '@emailjs/browser'

const SERVICE_ID            = import.meta.env.VITE_EMAILJS_SERVICE_ID
const CONTACT_TEMPLATE_ID   = import.meta.env.VITE_EMAILJS_ENQUIRY_TEMPLATE_ID   // template_j5ytsd8
const ADMISSION_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMISSION_TEMPLATE_ID // template_7f95jon
const PUBLIC_KEY            = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

console.log('========== EmailJS STARTUP CHECK ==========')
console.log('SERVICE_ID       :', SERVICE_ID            ?? '❌ MISSING')
console.log('CONTACT_TMPL     :', CONTACT_TEMPLATE_ID   ?? '❌ MISSING')
console.log('ADMISSION_TMPL   :', ADMISSION_TEMPLATE_ID ?? '❌ MISSING')
console.log('PUBLIC_KEY       :', PUBLIC_KEY            ?? '❌ MISSING')
console.log('===========================================')

if (PUBLIC_KEY) {
  emailjs.init({ publicKey: PUBLIC_KEY })
  console.log('✅ EmailJS initialized successfully')
} else {
  console.error('❌ EmailJS init FAILED - PUBLIC_KEY missing')
}

// ── Helpers ───────────────────────────────────────────────────
const getDateTime = (): string => {
  try {
    return new Intl.DateTimeFormat('en-PK', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Karachi',
    }).format(new Date())
  } catch {
    return new Date().toLocaleString()
  }
}

const cleanPhone = (phone: string): string => {
  let p = phone.replace(/[\s\-\(\)]/g, '')
  if (p.startsWith('0')) p = '92' + p.slice(1)
  return p
}

const checkCredentials = (templateId: string, label: string) => {
  if (!SERVICE_ID || !templateId || !PUBLIC_KEY) {
    console.error(`❌ ${label} - credentials missing:`, {
      SERVICE_ID:  !!SERVICE_ID,
      templateId:  !!templateId,
      PUBLIC_KEY:  !!PUBLIC_KEY,
    })
    return false
  }
  return true
}

export type EmailResult = { success: boolean; message: string }

// ── Types ─────────────────────────────────────────────────────

// Form 1: Homepage contact form
export interface HomeContactFormData {
  full_name: string
  phone: string
  email: string
  course_interested: string
  message: string
}

// Form 2: Contact page enquiry form
export interface EnquiryFormData {
  student_name: string
  interested_class: string
  parent_name: string
  phone: string
  email: string
  message: string
}

// Form 3: Admissions form
export interface AdmissionFormData {
  student_name: string
  date_of_birth: string
  gender: string
  class_applying: string
  previous_school: string
  last_class_passed: string
  father_name: string
  mother_name: string
  phone: string
  email: string
  address: string
  message: string
}

// ─────────────────────────────────────────────────────────────
// FORM 1: Homepage Contact Form → uses CONTACT_TEMPLATE_ID
// ─────────────────────────────────────────────────────────────
export const sendHomeContactEmail = async (
  formData: HomeContactFormData
): Promise<EmailResult> => {
  console.log('📤 sendHomeContactEmail() called')

  if (!checkCredentials(CONTACT_TEMPLATE_ID, 'HomeContact')) {
    return { success: false, message: 'Configuration error. Please call us directly.' }
  }

  const params = {
    form_type:       'HOMEPAGE ENQUIRY',
    from_name:       formData.full_name,
    email:           formData.email || 'not-provided@nirwanacademy.pk',
    reply_to:        formData.email || 'not-provided@nirwanacademy.pk',
    phone:           formData.phone,
    phone_raw:       cleanPhone(formData.phone),
    interested_in:   formData.course_interested || 'Not specified',
    student_name:    'N/A (Homepage form)',
    message:         formData.message || 'No message provided.',
    submission_time: getDateTime(),
  }

  console.log('📦 HomeContact params:', params)

  try {
    const res = await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, params)
    console.log('✅ HomeContact sent:', res.status, res.text)
    return {
      success: true,
      message: 'Message sent successfully! We will contact you within 24 hours.',
    }
  } catch (err: unknown) {
    const e = err as { status?: number; text?: string; message?: string }
    console.error('❌ HomeContact failed:', e.status, e.text)
    return { success: false, message: 'Failed to send. Please call us directly.' }
  }
}

// ─────────────────────────────────────────────────────────────
// FORM 2: Contact Page Enquiry Form → uses CONTACT_TEMPLATE_ID
// ─────────────────────────────────────────────────────────────
export const sendEnquiryEmail = async (
  formData: EnquiryFormData
): Promise<EmailResult> => {
  console.log('📤 sendEnquiryEmail() called')

  if (!checkCredentials(CONTACT_TEMPLATE_ID, 'Enquiry')) {
    return { success: false, message: 'Configuration error. Please call us directly.' }
  }

  const params = {
    form_type:       'CONTACT PAGE ENQUIRY',
    from_name:       formData.parent_name,
    email:           formData.email || 'not-provided@nirwanacademy.pk',
    reply_to:        formData.email || 'not-provided@nirwanacademy.pk',
    phone:           formData.phone,
    phone_raw:       cleanPhone(formData.phone),
    interested_in:   formData.interested_class,
    student_name:    formData.student_name,
    message:         formData.message || 'No message provided.',
    submission_time: getDateTime(),
  }

  console.log('📦 Enquiry params:', params)

  try {
    const res = await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, params)
    console.log('✅ Enquiry sent:', res.status, res.text)
    return {
      success: true,
      message: 'Enquiry sent successfully! We will contact you within 24 hours.',
    }
  } catch (err: unknown) {
    const e = err as { status?: number; text?: string; message?: string }
    console.error('❌ Enquiry failed:', e.status, e.text)
    return { success: false, message: 'Failed to send. Please call us directly.' }
  }
}

// ─────────────────────────────────────────────────────────────
// FORM 3: Admission Form → uses ADMISSION_TEMPLATE_ID
// ─────────────────────────────────────────────────────────────
export const sendAdmissionEmail = async (
  formData: AdmissionFormData
): Promise<EmailResult> => {
  console.log('📤 sendAdmissionEmail() called')

  if (!checkCredentials(ADMISSION_TEMPLATE_ID, 'Admission')) {
    return { success: false, message: 'Configuration error. Please call us directly.' }
  }

  const params = {
    form_type:         'ADMISSION APPLICATION',
    from_name:         formData.father_name,
    email:             formData.email || 'not-provided@nirwanacademy.pk',
    reply_to:          formData.email || 'not-provided@nirwanacademy.pk',
    phone:             formData.phone,
    phone_raw:         cleanPhone(formData.phone),
    student_name:      formData.student_name,
    date_of_birth:     formData.date_of_birth,
    gender:            formData.gender,
    class_applying:    formData.class_applying,
    previous_school:   formData.previous_school  || 'Not mentioned',
    last_class_passed: formData.last_class_passed || 'Not mentioned',
    father_name:       formData.father_name,
    mother_name:       formData.mother_name       || 'Not provided',
    address:           formData.address           || 'Not provided',
    message:           formData.message           || 'No additional info.',
    submission_time:   getDateTime(),
  }

  console.log('📦 Admission params:', params)

  try {
    const res = await emailjs.send(SERVICE_ID, ADMISSION_TEMPLATE_ID, params)
    console.log('✅ Admission sent:', res.status, res.text)
    return {
      success: true,
      message: 'Application submitted! We will contact you within 24 hours.',
    }
  } catch (err: unknown) {
    const e = err as { status?: number; text?: string; message?: string }
    console.error('❌ Admission failed:', e.status, e.text)
    return { success: false, message: 'Failed to submit. Please call us directly.' }
  }
}