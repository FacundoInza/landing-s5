'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../contexts/language-context'

// Importa la variable de entorno del correo electrónico
const emailContact = process.env.NEXT_PUBLIC_EMAIL_CONTACT || "office@silver5.ai"

export default function ConfirmationPage() {
  const { language } = useLanguage()
  
  const translations = {
    es: {
      title: '¡Gracias por tu interés!',
      message: 'Hemos recibido tu información y nos pondremos en contacto contigo pronto.',
      contact: `Si tienes alguna pregunta, no dudes en escribirnos a ${emailContact}`,
      backHome: 'Volver al inicio',
      nextSteps: 'Próximos pasos:',
      steps: [
        'Recibirás un correo electrónico con los datos de tu cuenta para acceder al bot',
        'En el correo encontrarás un video tutorial que explica cómo configurar las API keys de Binance',
        'Te contactaremos por WhatsApp en las próximas 24 horas hábiles',
        'Te ayudaremos a configurar tu bot para Binance P2P si necesitas asistencia',
        'Comenzarás tu prueba gratuita de 7 días'
      ]
    },
    en: {
      title: 'Thank you for your interest!',
      message: 'We have received your information and will contact you soon.',
      contact: `If you have any questions, feel free to email us at ${emailContact}`,
      backHome: 'Back to home',
      nextSteps: 'Next steps:',
      steps: [
        'You will receive an email with your account details to access the bot',
        'In the email you will find a video tutorial explaining how to configure the Binance API keys',
        'We will contact you via WhatsApp within the next 24 business hours',
        'We will help you set up your Binance P2P bot if you need assistance',
        'You will start your 7-day free trial'
      ]
    }
  }
  
  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className=" w-full space-y-8 text-center">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 shadow-xl border border-gray-700">
          <div className="mb-6 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-cyan-400/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-cyan-400 mb-4">{t.title}</h1>
          
          <p className="text-lg mb-6 text-gray-200">{t.message}</p>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 mb-6">
            <h3 className="font-semibold text-cyan-400 mb-3">{t.nextSteps}</h3>
            <ul className="text-left space-y-3">
              {t.steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 mr-2 flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <p className="text-gray-400 mb-8">{t.contact}</p>
          
          <Link href="/">
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full font-bold px-6 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50">
              {t.backHome}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 