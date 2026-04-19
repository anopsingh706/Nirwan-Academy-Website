// src/vite-env.d.ts  ← Create this file in src/ folder
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_ENQUIRY_TEMPLATE_ID: string
  readonly VITE_EMAILJS_ADMISSION_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_OWNER_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}