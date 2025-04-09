'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../../contexts/language-context'
import Link from 'next/link'
import Script from 'next/script'

interface FormData {
  fullName: string
  email: string
  phone: string
  website: string
  activeAds: string
  country: string
  platforms: string[]
  monthlyVolume: string
  accountsCount: string
  challenge: string
  needsAssistance: boolean
}

export default function ContactForm() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    activeAds: '',
    country: '',
    platforms: [],
    monthlyVolume: '',
    accountsCount: '',
    challenge: '',
    needsAssistance: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [calendlyUrl, setCalendlyUrl] = useState('https://calendly.com/silver5ai/15min')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validar que al menos un exchange esté seleccionado
    if (formData.platforms.length === 0) {
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('https://n8n.silver5ai.com/webhook/fe00e0d2-518d-47d9-bbf7-cdc95ea7547e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setCalendlyUrl('https://calendly.com/silver5ai/15min')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      if (name === 'platforms') {
        setFormData(prev => ({
          ...prev,
          platforms: checkbox.checked 
            ? [...prev.platforms, value]
            : prev.platforms.filter(p => p !== value)
        }))
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checkbox.checked
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-block p-3 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">¡Gracias por contactarnos!</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Nos pondremos en contacto contigo pronto. Mientras tanto, ¿te gustaría agendar una demo personalizada?
        </p>
        
        <div className="mb-12">
          <Link href={calendlyUrl}>
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 mb-8">
              Agendar Demo Personalizada
            </Button>
          </Link>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 rounded-2xl blur-xl -z-10"></div>
          <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Seleccioná un horario para tu demo</h3>
            <div className="calendly-inline-widget" data-url="https://calendly.com/silver5ai/15min" style={{ minWidth: '320px', height: '700px' }}></div>
          </div>
        </div>

        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Nombre completo</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Correo electrónico</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">URL de sitio web o LinkedIn</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Cantidad de anuncios activos</label>
          <input
            type="text"
            name="activeAds"
            required
            value={formData.activeAds}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">País de residencia</label>
          <input
            type="text"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Exchanges que utilizas <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-2 gap-4">
          {['Binance', 'OKX', 'Bybit', 'Otra'].map((platform) => (
            <label key={platform} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="platforms"
                value={platform}
                checked={formData.platforms.includes(platform)}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-cyan-400 bg-gray-800 border-gray-700 rounded focus:ring-cyan-400"
                required={formData.platforms.length === 0}
              />
              <span className="text-gray-300">{platform}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Volumen mensual estimado en P2P</label>
        <select
          name="monthlyVolume"
          required
          value={formData.monthlyVolume}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
        >
          <option value="">Seleccionar volumen</option>
          <option value="Menos de $1,000">Menos de $1,000</option>
          <option value="$1,000 - $10,000">$1,000 - $10,000</option>
          <option value="$10,000 - $50,000">$10,000 - $50,000</option>
          <option value="Más de $50,000">Más de $50,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">¿Cuántas cuentas manejás actualmente?</label>
        <input
          type="text"
          name="accountsCount"
          required
          value={formData.accountsCount}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">¿Cuál es tu mayor desafío con el P2P hoy?</label>
        <textarea
          name="challenge"
          required
          value={formData.challenge}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
        />
      </div>

      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="needsAssistance"
            checked={formData.needsAssistance}
            onChange={handleChange}
            className="form-checkbox h-4 w-4 text-cyan-400 bg-gray-800 border-gray-700 rounded focus:ring-cyan-400"
          />
          <span className="text-gray-300">¿Querés recibir asistencia personalizada para escalar tu operación?</span>
        </label>
      </div>

      <div className="pt-4">
        <Button 
          type="submit" 
          className={`w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-lg py-4 text-lg font-medium transition-all duration-300 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : 'Enviar Mensaje'}
        </Button>
      </div>
    </form>
  )
} 