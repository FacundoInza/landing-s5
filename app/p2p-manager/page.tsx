'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/language-context'
import { RegisterButton } from '@/components/RegisterButton'
import { 
  MessageSquare, 
  Bot, 
  ClipboardList, 
  Users, 
  Brain,
  Shield,
  Zap,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Calendar,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import Image from 'next/image'

// Componentes compartidos
import HeroSection from './components/shared/HeroSection'
import PainPointSection from './components/shared/PainPointSection'
import BenefitsGrid from './components/shared/BenefitsGrid'
import CTASection from './components/shared/CTASection'
import ContactForm from './components/ContactForm'

export default function P2PManagerPage() {
  const { language } = useLanguage()
  const [showForm, setShowForm] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Datos de la landing principal
  const heroData = {
    badge: "Integración Oficial con Binance",
    title: "Gestiona múltiples Cuentas Binance",
    titleHighlight: "con un Solo Panel",
    titleEnd: "sin Compartir Credenciales",
    description: "El único sistema que necesitas para escalar tu operación P2P de forma segura. Perfecto para VASPs establecidos y arbitradores que buscan profesionalizar su operación. Equipos de hasta 20+ operadores, reportes automáticos y compliance integrado.",
    primaryCta: "Ver Demo Personalizada",
    secondaryCta: "Registrarte Gratis",
    stats: [
      { value: "50+", label: "VASPs y Arbitradores" },
      { value: "20+", label: "Operadores por Panel" },
      { value: "99.9%", label: "Uptime Garantizado" }
    ]
  }

  const painPointsData = {
    title: "¿Tu Equipo Sigue Compartiendo Credenciales de Binance?",
    subtitle: "Los riesgos de la gestión descentralizada para VASPs y arbitradores",
    description: "Cada día que tu equipo comparte credenciales, expones tu operación a riesgos innecesarios y limitas tu capacidad de crecimiento. Ya seas un VASP establecido o un arbitrador buscando escalar, estos problemas te afectan directamente.",
    painPoints: [
      {
        problem: "Credenciales compartidas con empleados o socios",
        consequence: "Riesgo de seguridad extremo y pérdida de control sobre fondos",
        icon: <Shield className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Gestión descentralizada de múltiples cuentas",
        consequence: "Ineficiencia operativa y errores humanos costosos",
        icon: <Users className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Falta de visibilidad unificada de operaciones",
        consequence: "Imposible auditar, reportar o optimizar para crecer como VASP",
        icon: <TrendingUp className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Limitaciones para escalar el equipo y profesionalizar",
        consequence: "Crecimiento bloqueado por restricciones operativas y falta de estructura",
        icon: <Zap className="w-6 h-6 text-red-400" />
      }
    ],
    solutionTitle: "Nuestra Solución Integral",
    solutionDescription: "P2P Manager centraliza toda tu operación en una plataforma segura, permitiendo que tu equipo opere sin acceso a credenciales. Perfecto para arbitradores que quieren dar el salto a VASP.",
    solutionPoints: [
      "Gestión multicuenta sin compartir credenciales",
      "Panel unificado para todos los operadores",
      "Reportes automáticos y compliance integrado",
      "Escalabilidad ilimitada del equipo",
      "Auditoría completa de todas las operaciones"
    ]
  }

  const modulesData = {
    title: "5 Módulos Integrados para una Gestión Completa",
    subtitle: "Cada módulo resuelve un problema específico de tu operación P2P",
          benefits: [
            {
        title: "Chats Centralizados",
        description: "Gestiona todas las conversaciones P2P desde una única interfaz, sin importar la cuenta de Binance.",
        icon: <MessageSquare className="w-8 h-8" />,
        value: "100%",
        metric: "Visibilidad de chats",
        highlight: false
      },
      {
        title: "Bot de Posicionamiento",
        description: "Automatiza la actualización de precios con 3 modos: conservador, agresivo y precio fijo.",
        icon: <Bot className="w-8 h-8" />,
        value: "24/7",
        metric: "Operación automática",
        highlight: true
      },
      {
        title: "Gestión de Órdenes",
        description: "Captura y gestiona automáticamente todas las órdenes P2P desde un panel centralizado.",
        icon: <ClipboardList className="w-8 h-8" />,
        value: "0",
        metric: "Órdenes perdidas",
        highlight: false
      },
      {
        title: "KYC para Clientes",
        description: "Verificación KYC/AML automatizada con integración Didit. Cumplimiento regulatorio sin fricción.",
        icon: <Users className="w-8 h-8" />,
        value: "2 min",
        metric: "Verificación KYC",
        highlight: false
      },
      {
        title: "Agente IA",
        description: "Respuestas automáticas personalizadas en chats P2P con modo simulado y live.",
        icon: <Brain className="w-8 h-8" />,
        value: "Instant",
        metric: "Tiempo respuesta",
        highlight: true
      }
    ]
  }

  const benefitsData = {
    title: "Resultados Comprobados",
    subtitle: "Métricas reales de nuestros clientes en los primeros 30 días",
          benefits: [
            {
        title: "Reducción de Riesgos",
        description: "Elimina completamente el riesgo de credenciales compartidas",
        value: "100%",
        metric: "Menos riesgo",
        icon: <Shield className="w-8 h-8" />,
        highlight: true
      },
      {
        title: "Ahorro de Tiempo",
        description: "Automatización de tareas repetitivas y gestión centralizada",
        value: "15hrs",
        metric: "Semanales ahorradas",
        icon: <Clock className="w-8 h-8" />
      },
      {
        title: "Incremento de Ingresos",
        description: "Mayor eficiencia operativa y capacidad de procesamiento",
        value: "+35%",
        metric: "Ingresos promedio",
        icon: <DollarSign className="w-8 h-8" />
      },
      {
        title: "Escalabilidad",
        description: "Capacidad para manejar 10x más operadores sin complejidad",
        value: "20+",
        metric: "Operadores simultáneos",
        icon: <TrendingUp className="w-8 h-8" />
      },
      {
        title: "Compliance Automático",
        description: "Reportes y auditorías generados automáticamente",
        value: "0min",
        metric: "Para generar reportes",
        icon: <CheckCircle className="w-8 h-8" />
      },
      {
        title: "Uptime Garantizado",
        description: "Infraestructura robusta con monitoreo 24/7",
        value: "99.9%",
        metric: "Disponibilidad",
        icon: <Zap className="w-8 h-8" />
      }
    ]
  }

  // Testimoniales y casos de éxito
  const testimonials = [
    {
      quote: "P2P Manager nos permitió escalar de 3 a 15 operadores sin comprometer la seguridad. El ROI fue evidente desde el primer mes.",
      author: "Carlos Mendoza",
      company: "VASP Líder LATAM",
      rating: 5
    },
    {
      quote: "La integración con Didit para KYC fue un game-changer. Ahora tenemos compliance automático sin costos adicionales.",
      author: "Ana Rodriguez",
      company: "OTC Partners",
      rating: 5
    }
  ]

  const ctaData = {
    title: "¿Listo para Transformar tu Operación P2P?",
    description: "Únete a más de 50 VASPs y arbitradores que ya confían en P2P Manager para gestionar sus operaciones de forma segura y eficiente.",
    buttons: [
      {
        text: "Ver Demo Personalizada",
        action: () => setShowForm(true),
        variant: 'primary' as const,
        icon: <Play className="w-5 h-5" />
      },
      {
        text: "Registrarte Gratis",
        action: () => window.open('https://app.silver5ai.com/register', '_blank'),
        variant: 'secondary' as const,
        icon: <CheckCircle className="w-5 h-5" />
      }
    ],
    guarantee: "Registro gratuito sin tarjeta de crédito",
    testimonialQuote: "P2P Manager transformó completamente nuestra operación. Pasamos de gestionar 5 cuentas manualmente a 20+ cuentas de forma automatizada.",
    testimonialAuthor: "Mario",
    testimonialCompany: "Nexchange"
  }

  // Funciones para las acciones
  const handlePrimaryAction = () => {
    setShowForm(true)
  }

  const handleSecondaryAction = () => {
    window.open('https://app.silver5ai.com/register', '_blank')
  }

  // Función para manejar acordeones FAQ
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Preguntas frecuentes data
  const faqData = [
    {
      question: "¿Cómo funciona la gestión sin compartir credenciales?",
      answer: "P2P Manager se conecta a las APIs de Binance usando claves de solo lectura y operación limitada. Tu equipo opera a través de nuestro panel sin tener acceso directo a las credenciales principales. Tú mantienes el control total de los fondos."
    },
    {
      question: "¿Es seguro para VASPs y arbitradores grandes?",
      answer: "Absolutamente. Usamos arquitectura de grado empresarial con encriptación end-to-end, autenticación multifactor y auditorías de seguridad regulares. Más de 50 VASPs confían en nosotros para gestionar sus operaciones críticas."
    },
    {
      question: "¿Qué tan rápido puedo implementar P2P Manager?",
      answer: "La implementación típica toma 24-48 horas. Incluye configuración de cuentas, entrenamiento del equipo y puesta en marcha de todos los módulos. Ofrecemos soporte dedicado durante todo el proceso."
    },
    {
      question: "¿Los módulos funcionan independientemente?",
      answer: "Sí, cada módulo puede funcionar de forma independiente, pero están diseñados para trabajar mejor en conjunto. Puedes empezar con los módulos que más necesites y agregar otros gradualmente."
    },
    {
      question: "¿Qué incluye la integración con Didit?",
      answer: "La integración con Didit incluye verificación KYC completa, screening AML automático, verificación biométrica y cumplimiento regulatorio. Es completamente GRATUITA - no hay costos adicionales por verificaciones KYC."
    },
    {
      question: "¿Hay límites en el número de operadores?", 
      answer: "No hay límites estrictos. El sistema está diseñado para manejar equipos de 20+ operadores simultáneos. Para equipos más grandes, podemos configurar infraestructura dedicada."
    }
  ]

    return (
    <div className="min-h-screen bg-silver5-dark text-white">
      {/* Hero Section */}
      <HeroSection
        badge={heroData.badge}
        title={heroData.title}
        titleHighlight={heroData.titleHighlight}
        titleEnd={heroData.titleEnd}
        description={heroData.description}
        primaryCta={heroData.primaryCta}
        secondaryCta={heroData.secondaryCta}
        onPrimaryCta={handlePrimaryAction}
        onSecondaryCta={handleSecondaryAction}
        stats={heroData.stats}
        heroVisual={
          <div className="relative">
            {/* Binance Integration Badge - Más grande y llamativo */}
            <div className="absolute -top-6 -right-0 z-10 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border-2 border-yellow-400/40 rounded-full p-4 hover:scale-110 hover:border-yellow-400/60 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25">
              <Image
                src="/Binance.svg"
                alt="Integración oficial con Binance"
                width={60}
                height={60}
                className="opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
            
            {/* Silver Laptop Image */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/silver-laptop.png"
                alt="P2P Manager Dashboard en laptop - Gestión multicuenta Binance"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay con información adicional - Más prominente */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/Binance-3.svg"
                    alt="Powered by Binance"
                    width={100}
                    height={25}
                    className="opacity-90"
                  />
                  <div className="h-6 w-px bg-white/40"></div>
                  <span className="text-white text-base font-semibold">P2P Manager</span>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* Binance Integration Trust Bar - Más llamativa */}
      <section className="py-12 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 border-y-2 border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
              <Image
                src="/Binance.svg"
                alt="Binance"
                width={160}
                height={40}
                className="opacity-90"
              />
              <div className="h-10 w-px bg-white/30"></div>
              <div className="text-center">
                <span className="text-lg font-bold text-white block">Integración Oficial API</span>
                <span className="text-sm text-yellow-300">Certificado ✓</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-green-500/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span className="text-base font-semibold text-white">Certificado de Seguridad</span>
            </div>
            <div className="flex items-center space-x-3 bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-base font-semibold text-white">API Keys Protegidas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <PainPointSection
        title={painPointsData.title}
        subtitle={painPointsData.subtitle}
        description={painPointsData.description}
        painPoints={painPointsData.painPoints}
        solutionTitle={painPointsData.solutionTitle}
        solutionDescription={painPointsData.solutionDescription}
        solutionPoints={painPointsData.solutionPoints}
      />

      {/* Módulos Section - Nueva sección visual inspirada en Didit */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 backdrop-blur-sm rounded-full border-2 border-yellow-400/30 text-silver5-chats text-base font-bold mb-6 hover:scale-105 transition-all duration-300 shadow-lg">
              <Image
                src="/Binance-3.svg"
                alt="Binance"
                width={80}
                height={20}
                className="mr-3 opacity-90"
              />
              <div className="h-6 w-px bg-yellow-400/40 mx-2"></div>
              INTEGRACIÓN NATIVA VERIFICADA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Todo lo que necesitas para gestionar tu operación P2P
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              5 módulos integrados que resuelven cada aspecto de tu operación. Desde chats hasta compliance, 
              todo en una sola plataforma sin comprometer la seguridad.
            </p>
          </div>

          {/* Grid de módulos estilo Didit */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Fila superior - 3 módulos */}
            <div className="bg-gradient-to-br from-silver5-chats/10 to-silver5-orders/10 border border-silver5-chats/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-silver5-chats/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-silver5-chats" />
                </div>
                <div className="bg-yellow-400/10 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/20">
                  <Image
                    src="/Binance.svg"
                    alt="Binance Integration"
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Chats Centralizados</h3>
              <p className="text-gray-300 text-sm mb-4">
                ✓ Gestiona todos los chats desde un panel<br/>
                ✓ Sin importar la cuenta de Binance<br/>
                ✓ Historial unificado y búsqueda avanzada<br/>
                ✓ Notificaciones inteligentes
              </p>
              <a 
                href="/p2p-manager/chats-centralizados"
                className="block w-full bg-silver5-chats/20 hover:bg-silver5-chats/30 text-silver5-chats py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Saber más
              </a>
            </div>

            <div className="bg-gradient-to-br from-silver5-bot/10 to-silver5-ai/10 border border-silver5-bot/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-silver5-bot/20 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-silver5-bot" />
                </div>
                <div className="bg-yellow-400/10 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/20">
                  <Image
                    src="/Binance.svg"
                    alt="Binance Integration"
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bot de Posicionamiento</h3>
              <p className="text-gray-300 text-sm mb-4">
                ✓ Actualización automática 24/7<br/>
                ✓ 3 modos: Conservador, Agresivo, Fijo<br/>
                ✓ Monitoreo de competencia<br/>
                ✓ Configuración por par de monedas
              </p>
              <a 
                href="/p2p-manager/bot-posicionamiento"
                className="block w-full bg-silver5-bot/20 hover:bg-silver5-bot/30 text-silver5-bot py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Saber más
              </a>
            </div>
                
            <div className="bg-gradient-to-br from-silver5-orders/10 to-silver5-navy/10 border border-silver5-orders/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-silver5-orders/20 rounded-lg flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 text-silver5-orders" />
                </div>
                <div className="bg-yellow-400/10 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/20">
                  <Image
                    src="/Binance.svg"
                    alt="Binance Integration"
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Gestión de Órdenes</h3>
              <p className="text-gray-300 text-sm mb-4">
                ✓ Captura automática 100% de órdenes<br/>
                ✓ Priorización inteligente<br/>
                ✓ Estados en tiempo real<br/>
                ✓ Panel unificado multicuenta
              </p>
              <a 
                href="/p2p-manager/gestion-ordenes"
                className="block w-full bg-silver5-orders/20 hover:bg-silver5-orders/30 text-silver5-orders py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Saber más
              </a>
            </div>
          </div>
                
          {/* Fila inferior - 2 módulos centrados */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-silver5-kyc/10 to-silver5-navy/10 border border-silver5-kyc/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-silver5-kyc/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-silver5-kyc" />
                  </div>
                  <div className="ml-4">
                    <div className="bg-silver5-green-400/20 text-silver5-green-400 text-xs px-2 py-1 rounded-full font-semibold">
                      ✨ 100% GRATUITO
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-400/10 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/20">
                  <Image
                    src="/Binance.svg"
                    alt="Binance Integration"
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">KYC para Clientes</h3>
              <p className="text-gray-300 text-sm mb-4">
                ✓ Verificación KYC en 2 minutos<br/>
                ✓ Integración nativa con Didit<br/>
                ✓ Screening AML automático<br/>
                ✓ <span className="text-silver5-green-400 font-semibold">Completamente GRATIS</span>
              </p>
              <a 
                href="/p2p-manager/gestion-clientes"
                className="block w-full bg-silver5-kyc/20 hover:bg-silver5-kyc/30 text-silver5-kyc py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Saber más
              </a>
            </div>

            <div className="bg-gradient-to-br from-silver5-ai/10 to-silver5-chats/10 border border-silver5-ai/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-silver5-ai/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-silver5-ai" />
                </div>
                <div className="bg-yellow-400/10 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/20">
                  <Image
                    src="/Binance.svg"
                    alt="Binance Integration"
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Agente IA</h3>
              <p className="text-gray-300 text-sm mb-4">
                ✓ Respuestas automáticas en 2 segundos<br/>
                ✓ Modo simulado y modo live<br/>
                ✓ Conocimiento especializado P2P<br/>
                ✓ Escalamiento inteligente a humanos
              </p>
              <a 
                href="/p2p-manager/agente-ia"
                className="block w-full bg-silver5-ai/20 hover:bg-silver5-ai/30 text-silver5-ai py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Saber más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes Section con Acordeones */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Resolvemos las dudas más comunes sobre P2P Manager
            </p>
            <div className="flex items-center justify-center space-x-3 text-base text-gray-300 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/20">
              <Image
                src="/Binance-3.svg"
                alt="Binance"
                width={100}
                height={25}
                className="opacity-80"
              />
              <span>•</span>
              <span className="font-semibold">Integración Oficial Verificada</span>
            </div>
          </div>
            
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-silver5-chats flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-silver5-chats flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Casos de Éxito Reales
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              3 VASPs grandes que ya confían en P2P Manager para sus operaciones críticas
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <Image
                src="/Binance.svg"
                alt="Binance"
                width={80}
                height={20}
                className="opacity-60"
              />
              <span>•</span>
              <span>Operaciones verificadas en Binance P2P</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Nexchange */}
            <div className="bg-white/5 backdrop-blur-sm border border-silver5-chats/20 rounded-lg p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="bg-yellow-400/10 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/20">
                  <Image
                    src="/Binance.svg"
                    alt="Binance Integration"
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-300 mb-6 italic">
                &ldquo;P2P Manager transformó completamente nuestra operación. Pasamos de gestionar 5 cuentas manualmente a 20+ cuentas de forma automatizada. El ROI fue evidente desde la primera semana.&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-silver5-chats to-silver5-orders rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Mario</div>
                  <div className="text-sm text-gray-400">Director de Operaciones - Nexchange</div>
                </div>
              </div>
            </div>

            {/* Crypto Solutions */}
            <div className="bg-white/5 backdrop-blur-sm border border-silver5-bot/20 rounded-lg p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="bg-yellow-400/10 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/20">
                  <Image
                    src="/Binance.svg"
                    alt="Binance Integration"
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-300 mb-6 italic">
                &ldquo;Como arbitradores profesionales, necesitábamos una solución que nos permitiera escalar sin comprometer seguridad. P2P Manager nos dio exactamente eso y nos permitió triplicar nuestro volumen mensual.&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-silver5-bot to-silver5-ai rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Carlos</div>
                  <div className="text-sm text-gray-400">Fundador - Crypto Solutions</div>
                </div>
              </div>
            </div>

            {/* VASP Capital */}
            <div className="bg-white/5 backdrop-blur-sm border border-silver5-kyc/20 rounded-lg p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="bg-yellow-400/10 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/20">
                  <Image
                    src="/Binance.svg"
                    alt="Binance Integration"
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-300 mb-6 italic">
                &ldquo;La integración KYC fue fundamental para cumplir con las regulaciones locales. En 6 meses pasamos de ser arbitradores a un VASP totalmente licenciado gracias a P2P Manager.&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-silver5-kyc to-silver5-navy rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Andrea</div>
                  <div className="text-sm text-gray-400">CEO - VASP Capital</div>
                </div>
              </div>
            </div>
          </div>

          {/* Métricas de éxito */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
              <div className="flex items-center justify-center mb-3">
                <Image
                  src="/Binance.svg"
                  alt="Binance"
                  width={40}
                  height={40}
                  className="opacity-80 mr-2"
                />
                <span className="text-yellow-400 text-xs font-semibold">BINANCE P2P</span>
              </div>
              <div className="text-3xl font-bold text-silver5-green-400 mb-2">$2.5M+</div>
              <div className="text-gray-300">Volumen mensual gestionado</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
              <div className="flex items-center justify-center mb-3">
                <Image
                  src="/Binance.svg"
                  alt="Binance"
                  width={40}
                  height={40}
                  className="opacity-80 mr-2"
                />
                <span className="text-yellow-400 text-xs font-semibold">P2P MANAGER</span>
              </div>
              <div className="text-3xl font-bold text-silver5-green-400 mb-2">500+</div>
              <div className="text-gray-300">Operaciones diarias</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
              <div className="flex items-center justify-center mb-3">
                <Image
                  src="/Binance.svg"
                  alt="Binance"
                  width={40}
                  height={40}
                  className="opacity-80 mr-2"
                />
                <span className="text-yellow-400 text-xs font-semibold">INTEGRACIÓN</span>
              </div>
              <div className="text-3xl font-bold text-silver5-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime garantizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sublandings Preview */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explora Cada Módulo en Detalle
            </h2>
            <p className="text-xl text-gray-300">
              Cada módulo tiene su propia landing especializada
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Chats Centralizados", url: "/p2p-manager/chats-centralizados", color: "from-silver5-chats to-silver5-orders" },
              { name: "Bot Posicionamiento", url: "/p2p-manager/bot-posicionamiento", color: "from-silver5-bot to-silver5-ai" },
              { name: "Gestión Órdenes", url: "/p2p-manager/gestion-ordenes", color: "from-silver5-orders to-silver5-navy" },
              { name: "KYC para Clientes", url: "/p2p-manager/gestion-clientes", color: "from-silver5-kyc to-silver5-navy" },
              { name: "Agente IA", url: "/p2p-manager/agente-ia", color: "from-silver5-ai to-silver5-chats" }
            ].map((module, index) => (
              <a
                key={index} 
                href={module.url}
                className="group block"
              >
                <div className={`bg-gradient-to-br ${module.color} p-1 rounded-lg hover:scale-105 transition-all duration-300`}>
                  <div className="bg-slate-900 p-6 rounded-lg h-full">
                    <h3 className="text-xl font-bold text-white mb-2">{module.name}</h3>
                    <p className="text-gray-300 mb-4">Descubre cómo este módulo puede transformar tu operación</p>
                    <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                      <span className="mr-2">Explorar</span>
                      <ArrowRight className="w-4 h-4" />
                </div>
                  </div>
              </div>
              </a>
            ))}
          </div>

          {/* Botón usando RegisterButton */}
          <div className="text-center mt-12">
            <RegisterButton 
              size="lg"
              variant="primary"
            >
              Registrarte Gratis
            </RegisterButton>
            <p className="text-sm text-gray-400 mt-2">Sin tarjeta de crédito requerida</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-yellow-400/20 via-silver5-chats/20 to-yellow-400/20 border-t border-yellow-400/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Image
                src="/Binance.svg"
                alt="Binance"
                width={80}
                height={80}
                className="opacity-90"
              />
              <div className="text-4xl font-bold">×</div>
              <div className="text-2xl font-bold text-white">P2P Manager</div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Únete a la Revolución P2P
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              VASPs y arbitradores de toda <span className="text-yellow-400 font-bold">Latinoamérica</span> ya confían en nuestra integración oficial con Binance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Botón Primario - Ver Demo */}
              <button 
                onClick={() => setShowForm(true)}
                className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-xl shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:scale-105 active:scale-95 min-w-[200px]"
                aria-label="Abrir formulario para ver demo personalizada"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="tracking-wide">Ver Demo Personalizada</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
              </button>

              {/* Botón Secundario - Registrarte */}
              <a 
                href="https://app.silver5ai.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-white/30 focus:scale-105 active:scale-95 min-w-[200px]"
                aria-label="Ir a página de registro gratuito"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="tracking-wide">Registrarte Gratis</span>
                </div>
                <div className="absolute inset-0 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-4 text-sm text-gray-400 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-yellow-400 font-semibold">✓ Integración verificada por Binance</span>
                </div>
                <div className="h-4 w-px bg-white/20"></div>
                <span>Setup en 24 horas</span>
                <div className="h-4 w-px bg-white/20"></div>
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <ContactForm onClose={() => setShowForm(false)} />
            </div>
            </div>
      )}
    </div>
  )
} 