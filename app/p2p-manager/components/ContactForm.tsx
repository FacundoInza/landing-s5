'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../../contexts/language-context'
import Link from 'next/link'
import Script from 'next/script'
import { X, Send, CheckCircle, User, Mail, Phone, Globe, Target, MapPin, CreditCard, BarChart3, MessageSquare, HelpCircle } from 'lucide-react'

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

interface ContactFormProps {
  onClose?: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
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
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validación básica
    const newErrors: Partial<FormData> = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Campo requerido'
    if (!formData.email.trim()) newErrors.email = 'Campo requerido'
    if (!formData.phone.trim()) newErrors.phone = 'Campo requerido'
    if (!formData.website.trim()) newErrors.website = 'Campo requerido'
    if (!formData.activeAds.trim()) newErrors.activeAds = 'Campo requerido'
    if (!formData.country.trim()) newErrors.country = 'Campo requerido'
    if (formData.platforms.length === 0) newErrors.platforms = ['Al menos una plataforma es requerida']
    if (!formData.monthlyVolume) newErrors.monthlyVolume = 'Campo requerido'
    if (!formData.accountsCount.trim()) newErrors.accountsCount = 'Campo requerido'
    if (!formData.challenge.trim()) newErrors.challenge = 'Campo requerido'

    setErrors(newErrors)
    
    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

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

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <CheckCircle className="w-10 h-10 text-white" />
        </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {language === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!'}
        </h2>
          <p className="text-gray-300 mb-6">
          {language === 'es' 
              ? 'Gracias por tu interés. Nos pondremos en contacto contigo pronto para coordinar tu demo personalizada.'
              : 'Thank you for your interest. We will contact you soon to coordinate your personalized demo.'
            }
        </p>
        </div>
        <div className="space-y-4">
          <Button 
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            onClick={() => window.open('https://calendly.com/silver5ai/15min', '_blank')}
          >
            {language === 'es' ? 'Programar Demo Ahora' : 'Schedule Demo Now'}
          </Button>
          {onClose && (
            <Button 
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white py-3 rounded-xl transition-all duration-300"
              onClick={onClose}
            >
              {language === 'es' ? 'Cerrar' : 'Close'}
            </Button>
          )}
        </div>
      </div>
    )
  }

  const translations = {
    es: {
      fullName: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      website: 'Sitio Web',
      activeAds: 'Anuncios Activos',
      country: 'País',
      platforms: 'Plataformas que usas',
      monthlyVolume: 'Volumen mensual promedio',
      accountsCount: 'Número de cuentas que manejas',
      challenge: 'Cuéntanos sobre tu principal desafío en P2P',
      assistance: '¿Te gustaría recibir asistencia personalizada para escalar tu operación?',
      submit: 'Enviar Mensaje',
      sending: 'Enviando...',
      selectVolume: 'Seleccionar volumen',
      volumeRanges: {
        less1k: 'Menos de $1,000',
        from1kTo10k: '$1,000 - $10,000',
        from10kTo50k: '$10,000 - $50,000',
        more50k: 'Más de $50,000'
      }
    },
    en: {
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      website: 'Website',
      activeAds: 'Active Ads',
      country: 'Country',  
      platforms: 'Platforms you use',
      monthlyVolume: 'Average monthly volume',
      accountsCount: 'Number of accounts you manage',
      challenge: 'Tell us about your main P2P challenge',
      assistance: 'Would you like to receive personalized assistance to scale your operation?',
      submit: 'Send Message',
      sending: 'Sending...',
      selectVolume: 'Select volume',
      volumeRanges: {
        less1k: 'Less than $1,000',
        from1kTo10k: '$1,000 - $10,000',
        from10kTo50k: '$10,000 - $50,000',
        more50k: 'More than $50,000'
      }
    }
  };

  const t = translations[language];

  // Función para obtener el ícono correspondiente a cada campo
  const getFieldIcon = (fieldName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      fullName: <User className="w-5 h-5" />,
      email: <Mail className="w-5 h-5" />,
      phone: <Phone className="w-5 h-5" />,
      website: <Globe className="w-5 h-5" />,
      activeAds: <Target className="w-5 h-5" />,
      country: <MapPin className="w-5 h-5" />,
      monthlyVolume: <CreditCard className="w-5 h-5" />,
      accountsCount: <BarChart3 className="w-5 h-5" />,
      challenge: <MessageSquare className="w-5 h-5" />,
    };
    return iconMap[fieldName];
  };

  return (
    <div className="p-6 max-h-[90vh] overflow-y-auto">
      {/* Header mejorado */}
      {onClose && (
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700/50">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {language === 'es' ? 'Demo Personalizada' : 'Personalized Demo'}
          </h2>
            <p className="text-gray-400 mt-2">
              {language === 'es' 
                ? 'Cuéntanos sobre tu negocio para una experiencia personalizada'
                : 'Tell us about your business for a personalized experience'
              }
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-800/50 rounded-xl transition-all duration-200 hover:scale-110 group"
            aria-label={language === 'es' ? 'Cerrar formulario' : 'Close form'}
          >
            <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        {/* Sección de información personal */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            {language === 'es' ? 'Información Personal' : 'Personal Information'}
          </h3>
          
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo Nombre Completo */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                {getFieldIcon('fullName')}
                {t.fullName} <span className="text-red-400">*</span>
              </label>
              <div className="relative">
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
                  onFocus={() => handleFocus('fullName')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 hover:bg-gray-800/70 ${
                    errors.fullName ? 'border-red-400' : 'border-gray-700'
                  } ${focusedField === 'fullName' ? 'transform scale-[1.02]' : ''}`}
                  placeholder={language === 'es' ? 'Tu nombre completo' : 'Your full name'}
                />
                {focusedField === 'fullName' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 pointer-events-none animate-pulse" />
                )}
              </div>
              {errors.fullName && (
                <p className="text-red-400 text-sm flex items-center gap-1 animate-fade-in">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {errors.fullName}
                </p>
              )}
        </div>

            {/* Campo Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                {getFieldIcon('email')}
                {t.email} <span className="text-red-400">*</span>
              </label>
              <div className="relative">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 hover:bg-gray-800/70 ${
                    errors.email ? 'border-red-400' : 'border-gray-700'
                  } ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}
                  placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'}
                />
                {focusedField === 'email' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 pointer-events-none animate-pulse" />
                )}
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm flex items-center gap-1 animate-fade-in">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {errors.email}
                </p>
              )}
        </div>

            {/* Campo Teléfono */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                {getFieldIcon('phone')}
                {t.phone} <span className="text-red-400">*</span>
              </label>
              <div className="relative">
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 hover:bg-gray-800/70 ${
                    errors.phone ? 'border-red-400' : 'border-gray-700'
                  } ${focusedField === 'phone' ? 'transform scale-[1.02]' : ''}`}
                  placeholder={language === 'es' ? '+1 234 567 8900' : '+1 234 567 8900'}
                />
                {focusedField === 'phone' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 pointer-events-none animate-pulse" />
                )}
              </div>
              {errors.phone && (
                <p className="text-red-400 text-sm flex items-center gap-1 animate-fade-in">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {errors.phone}
                </p>
              )}
        </div>

            {/* Campo Website */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                {getFieldIcon('website')}
                {t.website} <span className="text-red-400">*</span>
              </label>
              <div className="relative">
          <input
            type="text"
            name="website"
            required
            value={formData.website}
            onChange={handleChange}
                  onFocus={() => handleFocus('website')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 hover:bg-gray-800/70 ${
                    errors.website ? 'border-red-400' : 'border-gray-700'
                  } ${focusedField === 'website' ? 'transform scale-[1.02]' : ''}`}
                  placeholder={language === 'es' ? 'www.tuempresa.com' : 'www.yourcompany.com'}
                />
                {focusedField === 'website' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 pointer-events-none animate-pulse" />
                )}
              </div>
              {errors.website && (
                <p className="text-red-400 text-sm flex items-center gap-1 animate-fade-in">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {errors.website}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Sección de información de negocio */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            {language === 'es' ? 'Información del Negocio' : 'Business Information'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo Anuncios Activos */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                {getFieldIcon('activeAds')}
                {t.activeAds} <span className="text-red-400">*</span>
              </label>
              <div className="relative">
          <input
            type="text"
            name="activeAds"
            required
            value={formData.activeAds}
            onChange={handleChange}
                  onFocus={() => handleFocus('activeAds')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 hover:bg-gray-800/70 ${
                    errors.activeAds ? 'border-red-400' : 'border-gray-700'
                  } ${focusedField === 'activeAds' ? 'transform scale-[1.02]' : ''}`}
                  placeholder={language === 'es' ? 'Ej: 15 anuncios activos' : 'Ex: 15 active ads'}
                />
                {focusedField === 'activeAds' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 pointer-events-none animate-pulse" />
                )}
              </div>
              {errors.activeAds && (
                <p className="text-red-400 text-sm flex items-center gap-1 animate-fade-in">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {errors.activeAds}
                </p>
              )}
        </div>

            {/* Campo País */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                {getFieldIcon('country')}
                {t.country} <span className="text-red-400">*</span>
              </label>
              <div className="relative">
          <input
            type="text"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
                  onFocus={() => handleFocus('country')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 hover:bg-gray-800/70 ${
                    errors.country ? 'border-red-400' : 'border-gray-700'
                  } ${focusedField === 'country' ? 'transform scale-[1.02]' : ''}`}
                  placeholder={language === 'es' ? 'Tu país de operación' : 'Your operating country'}
                />
                {focusedField === 'country' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 pointer-events-none animate-pulse" />
                )}
              </div>
              {errors.country && (
                <p className="text-red-400 text-sm flex items-center gap-1 animate-fade-in">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {errors.country}
                </p>
              )}
            </div>

            {/* Campo Número de Cuentas */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                {getFieldIcon('accountsCount')}
                {t.accountsCount} <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="accountsCount"
                  required
                  value={formData.accountsCount}
                  onChange={handleChange}
                  onFocus={() => handleFocus('accountsCount')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 hover:bg-gray-800/70 ${
                    errors.accountsCount ? 'border-red-400' : 'border-gray-700'
                  } ${focusedField === 'accountsCount' ? 'transform scale-[1.02]' : ''}`}
                  placeholder={language === 'es' ? 'Ej: 5 cuentas' : 'Ex: 5 accounts'}
                />
                {focusedField === 'accountsCount' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 pointer-events-none animate-pulse" />
                )}
              </div>
              {errors.accountsCount && (
                <p className="text-red-400 text-sm flex items-center gap-1 animate-fade-in">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {errors.accountsCount}
                </p>
              )}
            </div>

            {/* Campo Volumen Mensual */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
                {getFieldIcon('monthlyVolume')}
                {t.monthlyVolume} <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <select
                  name="monthlyVolume"
                  required
                  value={formData.monthlyVolume}
                  onChange={handleChange}
                  onFocus={() => handleFocus('monthlyVolume')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 hover:bg-gray-800/70 ${
                    errors.monthlyVolume ? 'border-red-400' : 'border-gray-700'
                  } ${focusedField === 'monthlyVolume' ? 'transform scale-[1.02]' : ''}`}
                >
                  <option value="" className="bg-gray-800">{t.selectVolume}</option>
                  <option value="Menos de $1,000" className="bg-gray-800">{t.volumeRanges.less1k}</option>
                  <option value="$1,000 - $10,000" className="bg-gray-800">{t.volumeRanges.from1kTo10k}</option>
                  <option value="$10,000 - $50,000" className="bg-gray-800">{t.volumeRanges.from10kTo50k}</option>
                  <option value="Más de $50,000" className="bg-gray-800">{t.volumeRanges.more50k}</option>
                </select>
                {focusedField === 'monthlyVolume' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 pointer-events-none animate-pulse" />
                )}
              </div>
              {errors.monthlyVolume && (
                <p className="text-red-400 text-sm flex items-center gap-1 animate-fade-in">
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {errors.monthlyVolume}
                </p>
              )}
        </div>
      </div>

          {/* Plataformas */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
              <Target className="w-5 h-5" />
              {t.platforms} <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Binance', 'OKX', 'Bybit', language === 'es' ? 'Otra' : 'Other'].map((platform) => (
                <label key={platform} className="relative group cursor-pointer">
              <input
                type="checkbox"
                name="platforms"
                value={platform}
                checked={formData.platforms.includes(platform)}
                onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                    formData.platforms.includes(platform)
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                      : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600 hover:bg-gray-800/70'
                  } group-hover:scale-105`}>
                    <span className="font-medium">{platform}</span>
                    {formData.platforms.includes(platform) && (
                      <CheckCircle className="w-5 h-5 mx-auto mt-2 text-cyan-400" />
                    )}
                  </div>
            </label>
          ))}
        </div>
            {errors.platforms && (
              <p className="text-red-400 text-sm flex items-center gap-1 animate-fade-in">
                <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                {errors.platforms}
              </p>
            )}
      </div>
      </div>

        {/* Sección de desafíos */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-white" />
      </div>
            {language === 'es' ? 'Cuéntanos Más' : 'Tell Us More'}
          </h3>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300 flex items-center gap-2">
              {getFieldIcon('challenge')}
              {t.challenge} <span className="text-red-400">*</span>
            </label>
            <div className="relative">
        <textarea
          name="challenge"
          required
          value={formData.challenge}
          onChange={handleChange}
                onFocus={() => handleFocus('challenge')}
                onBlur={handleBlur}
          rows={4}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 hover:bg-gray-800/70 resize-none ${
                  errors.challenge ? 'border-red-400' : 'border-gray-700'
                } ${focusedField === 'challenge' ? 'transform scale-[1.02]' : ''}`}
                placeholder={language === 'es' 
                  ? 'Describe tu principal desafío en operaciones P2P, qué te gustaría mejorar o automatizar...'
                  : 'Describe your main P2P operations challenge, what you would like to improve or automate...'
                }
              />
              {focusedField === 'challenge' && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 pointer-events-none animate-pulse" />
              )}
            </div>
            {errors.challenge && (
              <p className="text-red-400 text-sm flex items-center gap-1 animate-fade-in">
                <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                {errors.challenge}
              </p>
            )}
      </div>

          {/* Checkbox de asistencia */}
          <div className="space-y-2">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <div className="relative">
          <input
            type="checkbox"
            name="needsAssistance"
            checked={formData.needsAssistance}
            onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-6 h-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                  formData.needsAssistance
                    ? 'border-cyan-400 bg-cyan-400'
                    : 'border-gray-600 bg-transparent group-hover:border-gray-500'
                }`}>
                  {formData.needsAssistance && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
              <div className="flex-1">
                <span className="text-gray-300 group-hover:text-white transition-colors flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  {t.assistance} <span className="text-red-400">*</span>
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  {language === 'es' 
                    ? 'Esto nos ayuda a preparar recomendaciones específicas para tu caso'
                    : 'This helps us prepare specific recommendations for your case'
                  }
                </p>
              </div>
        </label>
          </div>
      </div>

        {/* Botón de envío mejorado */}
        <div className="pt-8 border-t border-gray-700/50">
        <Button 
          type="submit" 
            className={`w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-400/50 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed scale-100' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t.sending}
            </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                {t.submit}
              </span>
            )}
        </Button>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            {language === 'es' 
              ? 'Nos comprometemos a responder en menos de 24 horas habiles'
              : 'We commit to respond within 24 hours'
            }
          </p>
      </div>
    </form>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
} 