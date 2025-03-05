'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LeadForm } from '../components/lead-form'
import { useLanguage } from '../contexts/language-context'

// Asegúrate de que la variable de entorno esté disponible

export default function LeadFormPage() {
  const router = useRouter()
  const { language } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleFormSubmit = () => {
    setIsSubmitted(true)

  
    // Redirigir a la página de confirmación después de un breve retraso
    setTimeout(() => {
      router.push('/confirmation')
    }, 1000)
  }
  
  const translations = {
    es: {
      title: 'Solicitud de contacto',
      subtitle: 'Completa este formulario para que podamos contactarte',
      success: 'Redirigiendo...',
    },
    en: {
      title: 'Contact request',
      subtitle: 'Complete this form so we can contact you',
      success: 'Redirecting...',
    }
  }
  
  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{t.success}</h2>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400 mx-auto"></div>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-cyan-400 mb-2">{t.title}</h1>
              <p className="text-gray-400">{t.subtitle}</p>
            </div>
            <LeadForm onSubmit={handleFormSubmit} />
          </>
        )}
      </div>
    </div>
  )
} 