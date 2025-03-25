'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../contexts/language-context'
import { ArrowLeft, Bot, Calendar, CheckCircle2, MessageSquare, Send, Sparkles } from 'lucide-react'
import Image from 'next/image'

// Importa la variable de entorno del correo electrónico
const emailContact = process.env.NEXT_PUBLIC_EMAIL_CONTACT || "office@silver5ai.com"

export default function ConfirmationPage() {
  const { language } = useLanguage()
  
  const translations = {
    es: {
      title: '¡Gracias por tu interés en Silver5 AI!',
      message: 'Hemos recibido tu información y te contactaremos lo antes posible para iniciar con la implementación de tu Agente Inteligente para WhatsApp.',
      contact: `Si tienes alguna pregunta, no dudes en escribirnos a ${emailContact}`,
      backHome: 'Volver al inicio',
      nextSteps: 'Próximos pasos:',
      steps: [
        'Recibirás un correo electrónico de confirmación con los detalles de tu solicitud',
        'Nuestro equipo te contactará dentro de las próximas 24 horas hábiles',
        'Programaremos una demostración personalizada de nuestro Agente para WhatsApp',
        'Crearemos un plan de implementación adaptado a las necesidades de tu negocio',
        'Te ayudaremos con la configuración e integración con tu sistema de calendario'
      ]
    },
    en: {
      title: 'Thank you for your interest in Silver5 AI!',
      message: 'We have received your information and will contact you as soon as possible to start implementing your Intelligent WhatsApp Agent.',
      contact: `If you have any questions, feel free to email us at ${emailContact}`,
      backHome: 'Back to home',
      nextSteps: 'Next steps:',
      steps: [
        'You will receive a confirmation email with your request details',
        'Our team will contact you within the next 24 business hours',
        'We will schedule a personalized demonstration of our WhatsApp Agent',
        'We will create an implementation plan tailored to your business needs',
        'We will help you with configuration and integration with your calendar system'
      ]
    }
  }
  
  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-2xl space-y-8 text-center relative z-10">
        <div className="relative bg-gradient-to-r from-cyan-950 to-blue-950 p-1 rounded-2xl shadow-2xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-30 blur-sm"></div>
          <div className="relative bg-[#101224]/95 backdrop-blur-sm rounded-xl overflow-hidden p-8">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-cyan-400" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-6 w-6 text-blue-400 animate-float-delayed" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {t.title}
              </span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-200">{t.message}</p>
            
            {/* Ilustración de WhatsApp mini */}
            <div className="mb-8 max-w-sm mx-auto">
              <div className="bg-[#111B21] rounded-lg overflow-hidden">
                <div className="bg-[#202C33] p-3 flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="ml-2">
                    <h4 className="text-white text-sm font-medium">Silver5 AI Assistant</h4>
                    <p className="text-cyan-400 text-xs">en línea</p>
                  </div>
                </div>
                <div className="p-3 space-y-2">
                  <div className="flex justify-start">
                    <div className="bg-[#202C33] text-white p-2 rounded-lg max-w-[80%] text-sm">
                      <p>¡Tu solicitud ha sido recibida con éxito! 🎉</p>
                      <p className="mt-1">¡Pronto te contactaremos para iniciar la implementación de tu agente!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                {t.nextSteps}
              </h3>
              <ul className="text-left space-y-4">
                {t.steps.map((step, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mr-3 flex-shrink-0 mt-0.5 group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all duration-300">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-gray-400 mb-8">{t.contact}</p>
            
            <Link href="/">
              <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-medium rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                {t.backHome}
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Logo en el footer */}
        <div className="flex justify-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative overflow-hidden rounded-full p-1 group-hover:bg-cyan-400/10 transition-all duration-300">
              <Image src="/logo-s5-w.png" alt="Silver5 AI" width={32} height={32} priority className="transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Silver5</span>
          </Link>
        </div>
      </div>
    </div>
  )
} 