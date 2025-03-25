'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '../contexts/language-context'
import { trackWhatsAppAgentSubmission } from '../utils/analytics'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface WhatsAppAgentFormProps {
  onSubmit: (formData: WhatsAppAgentFormData) => void
  className?: string
}

export interface WhatsAppAgentFormData {
  fullName: string
  whatsappNumber: string
  email: string
  webProfile: string
  businessDescription: string
  messageVolume: string
  frequentQuestions: string
  mainChallenge: string
  expectedImpact: string
  countryCode: string
  acceptTerms?: boolean
  language?: string
}

// Lista de códigos de país con sus nombres
const countryCodes = [
  { code: '+54', name: 'Argentina (+54)' }, // Primero Argentina para que aparezca al inicio
  { code: '+1', name: 'Estados Unidos/Canadá (+1)' },
  { code: '+57', name: 'Colombia (+57)' },
  { code: '+52', name: 'México (+52)' },
  { code: '+51', name: 'Perú (+51)' },
  { code: '+56', name: 'Chile (+56)' },
  { code: '+593', name: 'Ecuador (+593)' },
  { code: '+58', name: 'Venezuela (+58)' },
  { code: '+55', name: 'Brasil (+55)' },
  { code: '+34', name: 'España (+34)' },
  { code: '+502', name: 'Guatemala (+502)' },
  { code: '+503', name: 'El Salvador (+503)' },
  { code: '+504', name: 'Honduras (+504)' },
  { code: '+505', name: 'Nicaragua (+505)' },
  { code: '+506', name: 'Costa Rica (+506)' },
  { code: '+507', name: 'Panamá (+507)' },
  { code: '+591', name: 'Bolivia (+591)' },
  { code: '+595', name: 'Paraguay (+595)' },
  { code: '+598', name: 'Uruguay (+598)' },
  { code: '+53', name: 'Cuba (+53)' },
  { code: '+809', name: 'República Dominicana (+809)' },
  { code: '+39', name: 'Italia (+39)' },
  { code: '+33', name: 'Francia (+33)' },
  { code: '+49', name: 'Alemania (+49)' },
  { code: '+44', name: 'Reino Unido (+44)' },
];

const messageVolumeOptions = [
  '1-10 mensajes diarios',
  '11-30 mensajes diarios',
  '31-50 mensajes diarios',
  '51-100 mensajes diarios',
  'Más de 100 mensajes diarios',
  'No estoy seguro',
]

export function WhatsAppAgentForm({ onSubmit, className = '' }: WhatsAppAgentFormProps) {
  const { language } = useLanguage()
  
  const [formData, setFormData] = useState<WhatsAppAgentFormData>({
    fullName: '',
    whatsappNumber: '',
    email: '',
    webProfile: '',
    businessDescription: '',
    messageVolume: '',
    frequentQuestions: '',
    mainChallenge: '',
    expectedImpact: '',
    countryCode: '+54', // Por defecto Argentina
    acceptTerms: false,
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const translations = {
    es: {
      title: 'Formulario de solicitud',
      fullName: 'Nombre Completo',
      whatsapp: 'Número de WhatsApp',
      email: 'Correo Electrónico',
      webProfile: 'Página Web / Instagram / Facebook',
      description: 'Describe brevemente tu actividad principal o la de tu negocio',
      volume: '¿Qué volumen de mensajes por Whatsapp manejas diariamente que te gustaría automatizar?',
      questions: '¿Qué tipo de preguntas o información solicitan sus clientes con mayor frecuencia a través de WhatsApp?',
      challenge: '¿Cuál es el principal desafío que enfrenta actualmente al gestionar las consultas de sus clientes a través de WhatsApp?',
      impact: '¿Cómo cree que un agente de WhatsApp que responda preguntas frecuentes podría impactar la eficiencia y la satisfacción del cliente en su negocio?',
      acceptTerms: 'Acepto los términos y condiciones y la política de privacidad',
      submit: 'Enviar solicitud',
      required: 'Este campo es obligatorio',
      invalidEmail: 'Por favor, introduce un email válido',
      invalidPhone: 'Por favor, introduce un número de teléfono válido',
      requiredCheckbox: 'Debes aceptar los términos',
      privacyPolicy: 'Política de Privacidad',
      termsAndConditions: 'Términos y Condiciones',
      loading: 'Enviando...',
      successMessage: 'Gracias por tu interés. Te contactaremos pronto.',
      errorMessage: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.',
    },
    en: {
      title: 'Request Form',
      fullName: 'Full Name',
      whatsapp: 'WhatsApp Number',
      email: 'Email',
      webProfile: 'Website / Instagram / Facebook',
      description: 'Briefly describe your main activity or that of your business',
      volume: 'What volume of WhatsApp messages do you handle daily that you would like to automate?',
      questions: 'What type of questions or information do your customers most frequently request through WhatsApp?',
      challenge: 'What is the main challenge you currently face when managing customer inquiries through WhatsApp?',
      impact: 'How do you think a WhatsApp agent that answers frequently asked questions could impact efficiency and customer satisfaction in your business?',
      acceptTerms: 'I accept the terms and conditions and privacy policy',
      submit: 'Submit request',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email',
      invalidPhone: 'Please enter a valid phone number',
      requiredCheckbox: 'You must accept the terms',
      privacyPolicy: 'Privacy Policy',
      termsAndConditions: 'Terms and Conditions',
      loading: 'Sending...',
      successMessage: 'Thank you for your interest. We will contact you soon.',
      errorMessage: 'There was an error submitting the form. Please try again.',
    }
  }
  
  const t = translations[language as keyof typeof translations]
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    // Validación de nombre completo
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.required
    }
    
    // Validación de número de WhatsApp
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = t.required
    } else if (!/^[0-9]{6,15}$/.test(formData.whatsappNumber.replace(/\s/g, ''))) {
      newErrors.whatsappNumber = t.invalidPhone
    }
    
    // Validación de email
    if (!formData.email.trim()) {
      newErrors.email = t.required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.invalidEmail
    }
    
    // Validación de página web/perfil social
    if (!formData.webProfile.trim()) {
      newErrors.webProfile = t.required
    }
    
    // Validación de descripción del negocio
    if (!formData.businessDescription.trim()) {
      newErrors.businessDescription = t.required
    }
    
    // Validación de términos y condiciones
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = t.requiredCheckbox
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Combinar código de país con número de teléfono
      const fullPhoneNumber = `${formData.countryCode}${formData.whatsappNumber.replace(/\D/g, '')}`;
      
      // Obtener el nombre del país a partir del código de país
      const countryObj = countryCodes.find(country => country.code === formData.countryCode);
      const countryName = countryObj ? countryObj.name.split(' ')[0] : 'Argentina'; // Extraer solo el nombre del país
      
      const dataToSubmit = {
        ...formData,
        whatsappNumber: fullPhoneNumber,
        country: countryName, // Añadir el país
        language: language, // Añadir el idioma configurado
        formType: 'whatsapp-agent' // Identificar el tipo de formulario
      };
      
      // No enviamos acceptTerms a n8n
      const dataToSend = { ...dataToSubmit };
      delete dataToSend.acceptTerms;
      
      // Enviar datos a nuestra API en lugar del webhook directo
      const response = await fetch('https://n8n.silver5ai.com/webhook/25eceb2f-ca50-4120-814d-6d1018d3e3a1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
      
      if (response.ok) {
        // Trackear el evento en Meta
        try {
          trackWhatsAppAgentSubmission(dataToSend as WhatsAppAgentFormData)
        } catch (error) {
          console.error('Error al trackear lead:', error)
        }
        
        // Llamar a la función onSubmit para redirigir a la página de confirmación
        onSubmit(dataToSubmit)
      } else {
        console.error('Error al enviar el formulario')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }
  
  return (
    <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 shadow-xl border border-gray-700/50 backdrop-blur-sm ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre Completo */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-800/50 transition-colors duration-300">
          <Label htmlFor="fullName" className="text-white text-base mb-2 block font-medium">{t.fullName} *</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`bg-gray-700/70 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 ${errors.fullName ? 'border-red-500' : ''}`}
            required
          />
          {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
        </div>
        
        {/* Número de WhatsApp */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-800/50 transition-colors duration-300">
          <Label htmlFor="whatsappNumber" className="text-white text-base mb-2 block font-medium">{t.whatsapp} *</Label>
          <div className="flex space-x-2">
            <div className="w-1/3">
              <Select
                value={formData.countryCode}
                onValueChange={value => setFormData({ ...formData, countryCode: value })}
                required
              >
                <SelectTrigger className="bg-gray-700/70 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300">
                  <SelectValue placeholder={formData.countryCode} />
                </SelectTrigger>
                <SelectContent className="max-h-[300px] bg-gray-800 border-gray-700">
                  {countryCodes.map(country => (
                    <SelectItem key={country.code} value={country.code} className="text-white hover:bg-cyan-900/30">
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-2/3">
              <Input
                id="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className={`bg-gray-700/70 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 ${errors.whatsappNumber ? 'border-red-500' : ''}`}
                placeholder="123456789"
                required
              />
            </div>
          </div>
          {errors.whatsappNumber && <p className="text-red-400 text-sm mt-1">{errors.whatsappNumber}</p>}
        </div>
        
        {/* Correo Electrónico */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-800/50 transition-colors duration-300">
          <Label htmlFor="email" className="text-white text-base mb-2 block font-medium">{t.email} *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`bg-gray-700/70 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
            required
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>
        
        {/* Perfil Web/Social */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-800/50 transition-colors duration-300">
          <Label htmlFor="webProfile" className="text-white text-base mb-2 block font-medium">{t.webProfile} *</Label>
          <Input
            id="webProfile"
            value={formData.webProfile}
            onChange={handleChange}
            className={`bg-gray-700/70 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 ${errors.webProfile ? 'border-red-500' : ''}`}
            placeholder="https://www.tuwebsite.com o https://instagram.com/tu_perfil"
            required
          />
          {errors.webProfile && <p className="text-red-400 text-sm mt-1">{errors.webProfile}</p>}
        </div>
        
        {/* Descripción del Negocio */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-800/50 transition-colors duration-300">
          <Label htmlFor="businessDescription" className="text-white text-base mb-2 block font-medium">{t.description} *</Label>
          <Textarea
            id="businessDescription"
            value={formData.businessDescription}
            onChange={handleChange}
            className={`bg-gray-700/70 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 ${errors.businessDescription ? 'border-red-500' : ''}`}
            rows={3}
            required
          />
          {errors.businessDescription && <p className="text-red-400 text-sm mt-1">{errors.businessDescription}</p>}
        </div>
        
        {/* Volumen de Mensajes */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-800/50 transition-colors duration-300">
          <Label htmlFor="messageVolume" className="text-white text-base mb-2 block font-medium">{t.volume}</Label>
          <Select
            value={formData.messageVolume}
            onValueChange={value => setFormData({ ...formData, messageVolume: value })}
          >
            <SelectTrigger id="messageVolume" className="bg-gray-700/70 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300">
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {messageVolumeOptions.map(option => (
                <SelectItem key={option} value={option} className="text-white hover:bg-cyan-900/30">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Preguntas Frecuentes */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-800/50 transition-colors duration-300">
          <Label htmlFor="frequentQuestions" className="text-white text-base mb-2 block font-medium">{t.questions}</Label>
          <Textarea
            id="frequentQuestions"
            value={formData.frequentQuestions}
            onChange={handleChange}
            className="bg-gray-700/70 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
            rows={3}
          />
        </div>
        
        {/* Principal Desafío */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-800/50 transition-colors duration-300">
          <Label htmlFor="mainChallenge" className="text-white text-base mb-2 block font-medium">{t.challenge}</Label>
          <Textarea
            id="mainChallenge"
            value={formData.mainChallenge}
            onChange={handleChange}
            className="bg-gray-700/70 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
            rows={3}
          />
        </div>
        
        {/* Impacto Esperado */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-cyan-800/50 transition-colors duration-300">
          <Label htmlFor="expectedImpact" className="text-white text-base mb-2 block font-medium">{t.impact}</Label>
          <Textarea
            id="expectedImpact"
            value={formData.expectedImpact}
            onChange={handleChange}
            className="bg-gray-700/70 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
            rows={3}
          />
        </div>
        
        {/* Términos y Condiciones */}
        <div className="flex items-start space-x-2 p-2">
          <Checkbox 
            id="acceptTerms" 
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => 
              setFormData({...formData, acceptTerms: checked as boolean})
            }
            className={`text-cyan-400 border-gray-500 focus:ring-cyan-400 mt-1 ${errors.acceptTerms ? 'border-red-500' : ''}`}
          />
          <Label 
            htmlFor="acceptTerms" 
            className="text-gray-300 text-sm cursor-pointer"
          >
            {t.acceptTerms} *
            <div className="inline-flex ml-2">
              (<Link href="/politicas" className="text-cyan-400 hover:underline mx-1 hover:text-cyan-300 transition-colors">{t.privacyPolicy}</Link> y
              <Link href="/terminos" className="text-cyan-400 hover:underline mx-1 hover:text-cyan-300 transition-colors">{t.termsAndConditions}</Link>)
            </div>
          </Label>
        </div>
        {errors.acceptTerms && <p className="text-red-400 text-sm mt-1">{errors.acceptTerms}</p>}
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-medium py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/20"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t.loading}
            </span>
          ) : t.submit}
        </Button>
      </form>
    </div>
  )
} 