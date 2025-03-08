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
import { trackLeadSubmission } from '../utils/analytics'

interface LeadFormProps {
  onSubmit: (formData: LeadFormData) => void
  className?: string
}

export interface LeadFormData {
  name: string
  phone: string
  countryCode: string
  isVerifiedTrader: boolean
  exchanges: string[]
  primaryCurrency: string
  tradingFrequency: string
  acceptContact?: boolean
}

// Lista de códigos de país con sus nombres
const countryCodes = [
  { code: '+54', name: 'Argentina (+54)' }, // Primero Argentina para que aparezca al inicio
  { code: '+1', name: 'Estados Unidos/Canadá (+1)' },
  { code: '+7', name: 'Rusia/Kazajistán (+7)' },
  { code: '+20', name: 'Egipto (+20)' },
  { code: '+27', name: 'Sudáfrica (+27)' },
  { code: '+30', name: 'Grecia (+30)' },
  { code: '+31', name: 'Países Bajos (+31)' },
  { code: '+32', name: 'Bélgica (+32)' },
  { code: '+33', name: 'Francia (+33)' },
  { code: '+34', name: 'España (+34)' },
  { code: '+36', name: 'Hungría (+36)' },
  { code: '+39', name: 'Italia (+39)' },
  { code: '+40', name: 'Rumania (+40)' },
  { code: '+41', name: 'Suiza (+41)' },
  { code: '+43', name: 'Austria (+43)' },
  { code: '+44', name: 'Reino Unido (+44)' },
  { code: '+45', name: 'Dinamarca (+45)' },
  { code: '+46', name: 'Suecia (+46)' },
  { code: '+47', name: 'Noruega (+47)' },
  { code: '+48', name: 'Polonia (+48)' },
  { code: '+49', name: 'Alemania (+49)' },
  { code: '+51', name: 'Perú (+51)' },
  { code: '+52', name: 'México (+52)' },
  { code: '+53', name: 'Cuba (+53)' },
  { code: '+55', name: 'Brasil (+55)' },
  { code: '+56', name: 'Chile (+56)' },
  { code: '+57', name: 'Colombia (+57)' },
  { code: '+58', name: 'Venezuela (+58)' },
  { code: '+60', name: 'Malasia (+60)' },
  { code: '+61', name: 'Australia (+61)' },
  { code: '+62', name: 'Indonesia (+62)' },
  { code: '+63', name: 'Filipinas (+63)' },
  { code: '+64', name: 'Nueva Zelanda (+64)' },
  { code: '+65', name: 'Singapur (+65)' },
  { code: '+66', name: 'Tailandia (+66)' },
  { code: '+81', name: 'Japón (+81)' },
  { code: '+82', name: 'Corea del Sur (+82)' },
  { code: '+84', name: 'Vietnam (+84)' },
  { code: '+86', name: 'China (+86)' },
  { code: '+90', name: 'Turquía (+90)' },
  { code: '+91', name: 'India (+91)' },
  { code: '+92', name: 'Pakistán (+92)' },
  { code: '+93', name: 'Afganistán (+93)' },
  { code: '+94', name: 'Sri Lanka (+94)' },
  { code: '+95', name: 'Myanmar (+95)' },
  { code: '+98', name: 'Irán (+98)' },
  { code: '+212', name: 'Marruecos (+212)' },
  { code: '+213', name: 'Argelia (+213)' },
  { code: '+216', name: 'Túnez (+216)' },
  { code: '+218', name: 'Libia (+218)' },
  { code: '+220', name: 'Gambia (+220)' },
  { code: '+221', name: 'Senegal (+221)' },
  { code: '+222', name: 'Mauritania (+222)' },
  { code: '+223', name: 'Malí (+223)' },
  { code: '+224', name: 'Guinea (+224)' },
  { code: '+225', name: 'Costa de Marfil (+225)' },
  { code: '+226', name: 'Burkina Faso (+226)' },
  { code: '+227', name: 'Níger (+227)' },
  { code: '+228', name: 'Togo (+228)' },
  { code: '+229', name: 'Benín (+229)' },
  { code: '+230', name: 'Mauricio (+230)' },
  { code: '+231', name: 'Liberia (+231)' },
  { code: '+232', name: 'Sierra Leona (+232)' },
  { code: '+233', name: 'Ghana (+233)' },
  { code: '+234', name: 'Nigeria (+234)' },
  { code: '+235', name: 'Chad (+235)' },
  { code: '+236', name: 'República Centroafricana (+236)' },
  { code: '+237', name: 'Camerún (+237)' },
  { code: '+238', name: 'Cabo Verde (+238)' },
  { code: '+239', name: 'Santo Tomé y Príncipe (+239)' },
  { code: '+240', name: 'Guinea Ecuatorial (+240)' },
  { code: '+241', name: 'Gabón (+241)' },
  { code: '+242', name: 'República del Congo (+242)' },
  { code: '+243', name: 'República Democrática del Congo (+243)' },
  { code: '+244', name: 'Angola (+244)' },
  { code: '+245', name: 'Guinea-Bissau (+245)' },
  { code: '+246', name: 'Territorio Británico del Océano Índico (+246)' },
  { code: '+248', name: 'Seychelles (+248)' },
  { code: '+249', name: 'Sudán (+249)' },
  { code: '+250', name: 'Ruanda (+250)' },
  { code: '+251', name: 'Etiopía (+251)' },
  { code: '+252', name: 'Somalia (+252)' },
  { code: '+253', name: 'Yibuti (+253)' },
  { code: '+254', name: 'Kenia (+254)' },
  { code: '+255', name: 'Tanzania (+255)' },
  { code: '+256', name: 'Uganda (+256)' },
  { code: '+257', name: 'Burundi (+257)' },
  { code: '+258', name: 'Mozambique (+258)' },
  { code: '+260', name: 'Zambia (+260)' },
  { code: '+261', name: 'Madagascar (+261)' },
  { code: '+262', name: 'Reunión (+262)' },
  { code: '+263', name: 'Zimbabue (+263)' },
  { code: '+264', name: 'Namibia (+264)' },
  { code: '+265', name: 'Malaui (+265)' },
  { code: '+266', name: 'Lesoto (+266)' },
  { code: '+267', name: 'Botsuana (+267)' },
  { code: '+268', name: 'Suazilandia (+268)' },
  { code: '+269', name: 'Comoras (+269)' },
  { code: '+297', name: 'Aruba (+297)' },
  { code: '+298', name: 'Islas Feroe (+298)' },
  { code: '+299', name: 'Groenlandia (+299)' },
  { code: '+350', name: 'Gibraltar (+350)' },
  { code: '+351', name: 'Portugal (+351)' },
  { code: '+352', name: 'Luxemburgo (+352)' },
  { code: '+353', name: 'Irlanda (+353)' },
  { code: '+354', name: 'Islandia (+354)' },
  { code: '+355', name: 'Albania (+355)' },
  { code: '+356', name: 'Malta (+356)' },
  { code: '+357', name: 'Chipre (+357)' },
  { code: '+358', name: 'Finlandia (+358)' },
  { code: '+359', name: 'Bulgaria (+359)' },
  { code: '+370', name: 'Lituania (+370)' },
  { code: '+371', name: 'Letonia (+371)' },
  { code: '+372', name: 'Estonia (+372)' },
  { code: '+373', name: 'Moldavia (+373)' },
  { code: '+374', name: 'Armenia (+374)' },
  { code: '+375', name: 'Bielorrusia (+375)' },
  { code: '+376', name: 'Andorra (+376)' },
  { code: '+377', name: 'Mónaco (+377)' },
  { code: '+378', name: 'San Marino (+378)' },
  { code: '+380', name: 'Ucrania (+380)' },
  { code: '+381', name: 'Serbia (+381)' },
  { code: '+382', name: 'Montenegro (+382)' },
  { code: '+383', name: 'Kosovo (+383)' },
  { code: '+385', name: 'Croacia (+385)' },
  { code: '+386', name: 'Eslovenia (+386)' },
  { code: '+387', name: 'Bosnia y Herzegovina (+387)' },
  { code: '+389', name: 'Macedonia del Norte (+389)' },
  { code: '+420', name: 'República Checa (+420)' },
  { code: '+421', name: 'Eslovaquia (+421)' },
  { code: '+423', name: 'Liechtenstein (+423)' },
  { code: '+500', name: 'Islas Malvinas (+500)' },
  { code: '+501', name: 'Belice (+501)' },
  { code: '+502', name: 'Guatemala (+502)' },
  { code: '+503', name: 'El Salvador (+503)' },
  { code: '+504', name: 'Honduras (+504)' },
  { code: '+505', name: 'Nicaragua (+505)' },
  { code: '+506', name: 'Costa Rica (+506)' },
  { code: '+507', name: 'Panamá (+507)' },
  { code: '+509', name: 'Haití (+509)' },
  { code: '+590', name: 'Guadalupe (+590)' },
  { code: '+591', name: 'Bolivia (+591)' },
  { code: '+592', name: 'Guyana (+592)' },
  { code: '+593', name: 'Ecuador (+593)' },
  { code: '+595', name: 'Paraguay (+595)' },
  { code: '+597', name: 'Surinam (+597)' },
  { code: '+598', name: 'Uruguay (+598)' },
  { code: '+599', name: 'Antillas Neerlandesas (+599)' },
  { code: '+670', name: 'Timor Oriental (+670)' },
  { code: '+672', name: 'Antártida (+672)' },
  { code: '+673', name: 'Brunéi (+673)' },
  { code: '+674', name: 'Nauru (+674)' },
  { code: '+675', name: 'Papúa Nueva Guinea (+675)' },
  { code: '+676', name: 'Tonga (+676)' },
  { code: '+677', name: 'Islas Salomón (+677)' },
  { code: '+678', name: 'Vanuatu (+678)' },
  { code: '+679', name: 'Fiyi (+679)' },
  { code: '+680', name: 'Palaos (+680)' },
  { code: '+681', name: 'Wallis y Futuna (+681)' },
  { code: '+682', name: 'Islas Cook (+682)' },
  { code: '+683', name: 'Niue (+683)' },
  { code: '+685', name: 'Samoa (+685)' },
  { code: '+686', name: 'Kiribati (+686)' },
  { code: '+687', name: 'Nueva Caledonia (+687)' },
  { code: '+688', name: 'Tuvalu (+688)' },
  { code: '+689', name: 'Polinesia Francesa (+689)' },
  { code: '+690', name: 'Tokelau (+690)' },
  { code: '+691', name: 'Micronesia (+691)' },
  { code: '+692', name: 'Islas Marshall (+692)' },
  { code: '+850', name: 'Corea del Norte (+850)' },
  { code: '+852', name: 'Hong Kong (+852)' },
  { code: '+853', name: 'Macao (+853)' },
  { code: '+855', name: 'Camboya (+855)' },
  { code: '+856', name: 'Laos (+856)' },
  { code: '+880', name: 'Bangladés (+880)' },
  { code: '+886', name: 'Taiwán (+886)' },
  { code: '+960', name: 'Maldivas (+960)' },
  { code: '+961', name: 'Líbano (+961)' },
  { code: '+962', name: 'Jordania (+962)' },
  { code: '+963', name: 'Siria (+963)' },
  { code: '+964', name: 'Irak (+964)' },
  { code: '+965', name: 'Kuwait (+965)' },
  { code: '+966', name: 'Arabia Saudita (+966)' },
  { code: '+967', name: 'Yemen (+967)' },
  { code: '+968', name: 'Omán (+968)' },
  { code: '+970', name: 'Palestina (+970)' },
  { code: '+971', name: 'Emiratos Árabes Unidos (+971)' },
  { code: '+972', name: 'Israel (+972)' },
  { code: '+973', name: 'Baréin (+973)' },
  { code: '+974', name: 'Catar (+974)' },
  { code: '+975', name: 'Bután (+975)' },
  { code: '+976', name: 'Mongolia (+976)' },
  { code: '+977', name: 'Nepal (+977)' },
  { code: '+992', name: 'Tayikistán (+992)' },
  { code: '+993', name: 'Turkmenistán (+993)' },
  { code: '+994', name: 'Azerbaiyán (+994)' },
  { code: '+995', name: 'Georgia (+995)' },
  { code: '+996', name: 'Kirguistán (+996)' },
  { code: '+998', name: 'Uzbekistán (+998)' },
];


const exchangeOptions = [
  'Binance',
  'Coinbase',
  'Kraken',
  'KuCoin',
  'Bitfinex',
  'Huobi',
  'Bybit',
  'OKX',
  'Bitget',
  'Gate.io',
  'Bitstamp',
  'Gemini',
]

export function LeadForm({ onSubmit, className = '' }: LeadFormProps) {
  const { language } = useLanguage()
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    countryCode: '+54', // Código predeterminado para Argentina
    isVerifiedTrader: false,
    exchanges: [],
    primaryCurrency: '',
    tradingFrequency: '',
    acceptContact: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const translations = {
    es: {
      title: 'Cuéntanos más sobre ti',
      subtitle: 'Completa el formulario para conseguir la prueba gratuita',
      name: 'Nombre completo',
      phone: 'WhatsApp para que te contactemos',
      countryCode: 'Código de país',
      verifiedTrader: '¿Eres comerciante verificado de Binance?',
      yes: 'Sí',
      no: 'No',
      exchanges: '¿Qué exchanges utilizas?',
      primaryCurrency: '¿Cuáles son las monedas que más operas?',
      tradingFrequency: '¿Cuántas horas en promedio operas por día?',
      acceptContact: 'Acepto y solicito que me contacten por WhatsApp al número proporcionado para obtener la prueba gratuita',
      submit: 'Enviar',
      required: 'Este campo es obligatorio',
      invalidPhone: 'Ingresa un número de teléfono válido',
      acceptRequired: 'Debes aceptar los términos para continuar',
      exchangesRequired: 'Selecciona al menos un exchange',
      success: 'Formulario enviado correctamente',
      searchCountry: 'Buscar país...',
      freeTrial: 'Prueba gratuita por 7 días - Sin tarjeta de crédito'
    },
    en: {
      title: 'Tell us more about you',
      subtitle: 'Complete the form to get your free trial',
      name: 'Full name',
      phone: 'WhatsApp where we can contact you',
      countryCode: 'Country code',
      verifiedTrader: 'Are you a verified Binance trader?',
      yes: 'Yes',
      no: 'No',
      exchanges: 'Which exchanges do you use?',
      primaryCurrency: 'Which cryptocurrencies do you trade the most?',
      tradingFrequency: 'How many hours on average do you trade per day?',
      acceptContact: 'I accept and request to be contacted via WhatsApp at the provided number to get my free trial',
      submit: 'Submit',
      required: 'This field is required',
      invalidPhone: 'Enter a valid phone number',
      acceptRequired: 'You must accept the terms to continue',
      exchangesRequired: 'Select at least one exchange',
      success: 'Form submitted successfully',
      searchCountry: 'Search country...',
      freeTrial: '7-day free trial - No credit card required'
    }
  }

  const t = translations[language as keyof typeof translations]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t.required
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t.required
    } else if (!/^[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = t.invalidPhone
    }
    
    if (formData.exchanges.length === 0) {
      newErrors.exchanges = t.exchangesRequired
    }
    
    if (!formData.primaryCurrency.trim()) {
      newErrors.primaryCurrency = t.required
    }
    
    if (!formData.tradingFrequency.trim()) {
      newErrors.tradingFrequency = t.required
    }
    
    if (!formData.acceptContact) {
      newErrors.acceptContact = t.acceptRequired
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
      const fullPhoneNumber = `${formData.countryCode}${formData.phone.replace(/\D/g, '')}`;
      const dataToSubmit = {
        ...formData,
        phone: fullPhoneNumber
      };
      
      // No enviamos acceptContact a n8n
      delete dataToSubmit.acceptContact;
      
      // Enviar datos al webhook de n8n
      const response = await fetch('https://n8n.silver5ai.com/webhook/75369307-a998-410a-acec-4196f0b707cd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      })
      
      if (response.ok) {
        // Trackear el evento en Meta
        trackLeadSubmission(dataToSubmit)
        
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

  const handleExchangeToggle = (exchange: string) => {
    setFormData(prev => {
      const exchanges = prev.exchanges.includes(exchange)
        ? prev.exchanges.filter(e => e !== exchange)
        : [...prev.exchanges, exchange]
      
      return { ...prev, exchanges }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  return (
    <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 shadow-xl border border-gray-700 ${className}`}>
      <div className="text-center mb-8">
        <h1 className="text-gray-300 text-lg font-bold">{t.subtitle}</h1>
        <div className="mt-4 inline-block bg-cyan-400/20 px-4 py-2 rounded-full">
          <p className="text-cyan-400 text-sm font-medium ">{t.freeTrial}</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <Label htmlFor="name" className="text-white text-base mb-2 block">{t.name}</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`bg-gray-700 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 ${errors.name ? 'border-red-500' : ''}`}
            required
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <Label htmlFor="phone" className="text-white text-base mb-2 block">{t.phone}</Label>
          <div className="flex space-x-2">
            <div className="w-1/3">
              <Select
                value={formData.countryCode}
                onValueChange={value => setFormData({ ...formData, countryCode: value })}
                required
              >
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400">
                  <SelectValue placeholder={formData.countryCode} />
                </SelectTrigger>
                <SelectContent className="max-h-[300px] bg-gray-800 border-gray-700">
                  {countryCodes.map(country => (
                    <SelectItem key={country.code} value={country.code} className="text-white hover:bg-gray-700">
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-2/3">
              <Input
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`bg-gray-700 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="123456789"
                required
              />
            </div>
          </div>
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <Label className="text-white text-base mb-2 block">{t.verifiedTrader}</Label>
          <RadioGroup
            value={formData.isVerifiedTrader ? 'yes' : 'no'}
            onValueChange={value => setFormData({ ...formData, isVerifiedTrader: value === 'yes' })}
            className="flex space-x-4 mt-2"
            required
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="verified-yes" className="text-cyan-400" />
              <Label htmlFor="verified-yes" className="text-white">{t.yes}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="verified-no" className="text-cyan-400" />
              <Label htmlFor="verified-no" className="text-white">{t.no}</Label>
            </div>
          </RadioGroup>
          {errors.isVerifiedTrader && <p className="text-red-400 text-sm mt-1">{errors.isVerifiedTrader}</p>}
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <Label className="text-white text-base mb-2 block">{t.exchanges}</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2 bg-gray-700/50 p-4 rounded-md">
            {exchangeOptions.map(exchange => (
              <div key={exchange} className="flex items-center space-x-2">
                <Checkbox
                  id={`exchange-${exchange}`}
                  checked={formData.exchanges.includes(exchange)}
                  onCheckedChange={() => handleExchangeToggle(exchange)}
                  className="text-cyan-400 border-gray-500 focus:ring-cyan-400"
                />
                <Label htmlFor={`exchange-${exchange}`} className="text-gray-200 text-sm">{exchange}</Label>
              </div>
            ))}
          </div>
          {errors.exchanges && <p className="text-red-400 text-sm mt-1">{errors.exchanges}</p>}
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <Label htmlFor="primaryCurrency" className="text-white text-base mb-2 block">{t.primaryCurrency}</Label>
          <Textarea
            id="primaryCurrency"
            value={formData.primaryCurrency}
            onChange={handleChange}
            placeholder="USDT, USDC, BTC, ETH, SOL, etc."
            className={`bg-gray-700 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 mt-1 ${errors.primaryCurrency ? 'border-red-500' : ''}`}
            rows={3}
            required
          />
          {errors.primaryCurrency && <p className="text-red-400 text-sm mt-1">{errors.primaryCurrency}</p>}
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <Label htmlFor="tradingFrequency" className="text-white text-base mb-2 block">{t.tradingFrequency}</Label>
          <Textarea
            id="tradingFrequency"
            value={formData.tradingFrequency}
            onChange={handleChange}
            placeholder="2-3 hs, 4 hs, etc."
            className={`bg-gray-700 border-gray-600 text-white focus:ring-cyan-400 focus:border-cyan-400 mt-1 ${errors.tradingFrequency ? 'border-red-500' : ''}`}
            rows={3}
            required
          />
          {errors.tradingFrequency && <p className="text-red-400 text-sm mt-1">{errors.tradingFrequency}</p>}
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex items-start space-x-3">
          <Checkbox
            id="acceptContact"
            checked={formData.acceptContact}
            onCheckedChange={(checked) => 
              setFormData({ ...formData, acceptContact: checked as boolean })
            }
            className={`mt-1 text-cyan-400 border-gray-500 focus:ring-cyan-400 ${errors.acceptContact ? 'border-red-500' : ''}`}
          />
          <div>
            <Label 
              htmlFor="acceptContact" 
              className="text-gray-200 font-normal"
            >
              {t.acceptContact}
            </Label>
            {errors.acceptContact && <p className="text-red-400 text-sm mt-1">{errors.acceptContact}</p>}
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full font-bold text-lg py-6 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Procesando...
            </div>
          ) : t.submit}
        </Button>
      </form>
    </div>
  )
} 