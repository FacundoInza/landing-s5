'use client'

import { useState } from 'react'
import { useLanguage } from '../../contexts/language-context'
import { 
  MessageSquare, 
  Shield, 
  Users, 
  Eye,
  Clock,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Play,
  Calendar,
  ArrowRight,
  Zap,
  Lock,
  Monitor,
  User,
  Bot
} from 'lucide-react'

// Componentes compartidos
import HeroSection from '../components/shared/HeroSection'
import PainPointSection from '../components/shared/PainPointSection'
import BenefitsGrid from '../components/shared/BenefitsGrid'
import CTASection from '../components/shared/CTASection'
import ContactForm from '../components/ContactForm'

export default function ChatsCentralizadosPage() {
  const { language } = useLanguage()
  const [showForm, setShowForm] = useState(false)

  // Datos específicos para Chats Centralizados
  const heroData = {
    badge: "Módulo Especializado P2P Manager",
    title: "Chats Centralizados",
    titleHighlight: "Multicuenta",
    titleEnd: "sin Compartir Credenciales",
    description: "Gestiona todas las conversaciones P2P de múltiples cuentas Binance desde una única interfaz. Tu equipo opera sin acceso a credenciales, con visibilidad completa y control total.",
    primaryCta: "Ver Demo del Módulo",
    secondaryCta: "Descargar Caso de Uso",
    stats: [
      { value: "100%", label: "Visibilidad de Chats" },
      { value: "0", label: "Credenciales Compartidas" },
      { value: "24/7", label: "Monitoreo Activo" }
    ]
  }

  const painPointsData = {
    title: "¿Tu Equipo Necesita las Credenciales de Binance para Responder Chats?",
    subtitle: "Los riesgos ocultos de la gestión descentralizada de chats P2P",
    description: "Cada vez que das acceso a credenciales para que tu equipo pueda responder chats, expones tu operación a riesgos innecesarios y pierdes control operativo.",
    painPoints: [
      {
        problem: "Operadores necesitan credenciales para acceder a chats",
        consequence: "Riesgo de seguridad extremo y pérdida de control sobre fondos",
        icon: <Lock className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Imposible supervisar conversaciones en tiempo real",
        consequence: "Pérdida de oportunidades y falta de quality control",
        icon: <Eye className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Gestión fragmentada entre múltiples cuentas",
        consequence: "Ineficiencia operativa y respuestas inconsistentes",
        icon: <Users className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Sin historial unificado de conversaciones",
        consequence: "Imposible hacer seguimiento o mejorar procesos",
        icon: <MessageSquare className="w-6 h-6 text-red-400" />
      }
    ],
    solutionTitle: "Chats Centralizados: La Solución Definitiva",
    solutionDescription: "Nuestro módulo de Chats Centralizados permite que tu equipo gestione todas las conversaciones P2P sin nunca tener acceso a las credenciales de Binance.",
    solutionPoints: [
      "Interfaz unificada para todas las cuentas P2P",
      "Operadores trabajan sin acceso a credenciales",
      "Supervisión en tiempo real de todas las conversaciones",
      "Historial completo y searchable de chats",
      "Asignación automática de chats por operador"
    ]
  }

  const benefitsData = {
    title: "Beneficios Inmediatos del Módulo de Chats Centralizados",
    subtitle: "Resultados comprobados en los primeros 7 días de implementación",
    benefits: [
      {
        title: "Seguridad Máxima",
        description: "Elimina completamente la necesidad de compartir credenciales con operadores",
        value: "100%",
        metric: "Reducción de riesgo",
        icon: <Shield className="w-8 h-8" />,
        highlight: true
      },
      {
        title: "Visibilidad Total",
        description: "Supervisa todas las conversaciones P2P en tiempo real desde un panel",
        value: "360°",
        metric: "Vista unificada",
        icon: <Monitor className="w-8 h-8" />
      },
      {
        title: "Respuesta Más Rápida",
        description: "Reduce el tiempo de respuesta promedio con asignación inteligente",
        value: "60%",
        metric: "Más rápido",
        icon: <Clock className="w-8 h-8" />
      },
      {
        title: "Escalabilidad Ilimitada",
        description: "Agrega operadores sin complejidad adicional o riesgos de seguridad",
        value: "∞",
        metric: "Operadores",
        icon: <Users className="w-8 h-8" />
      },
      {
        title: "Quality Control",
        description: "Monitorea y mejora la calidad de atención al cliente P2P",
        value: "+40%",
        metric: "Satisfacción cliente",
        icon: <TrendingUp className="w-8 h-8" />
      },
      {
        title: "Compliance Automático",
        description: "Registra automáticamente todas las conversaciones para auditorías",
        value: "100%",
        metric: "Trazabilidad",
        icon: <CheckCircle className="w-8 h-8" />
      }
    ]
  }

  const featuresData = {
    title: "Características Técnicas del Módulo",
    subtitle: "Tecnología avanzada para máxima eficiencia operativa",
    benefits: [
      {
        title: "Interfaz Unificada",
        description: "Un solo dashboard para gestionar chats de todas tus cuentas Binance",
        icon: <Monitor className="w-8 h-8" />
      },
      {
        title: "Asignación Inteligente",
        description: "Distribuye automáticamente los chats según carga de trabajo y especialización",
        icon: <Zap className="w-8 h-8" />
      },
      {
        title: "Historial Completo",
        description: "Base de datos searchable con todo el historial de conversaciones",
        icon: <MessageSquare className="w-8 h-8" />
      },
      {
        title: "Alertas en Tiempo Real",
        description: "Notificaciones instantáneas para chats urgentes o palabras clave",
        icon: <AlertTriangle className="w-8 h-8" />
      }
    ]
  }

  const ctaData = {
    title: "¿Listo para Centralizar tus Chats P2P de Forma Segura?",
    description: "Únete a VASPs líderes que ya gestionan sus chats sin compartir credenciales. Implementación en menos de 48 horas.",
    buttons: [
      {
        text: "Ver Demo del Módulo",
        action: () => setShowForm(true),
        variant: 'primary' as const,
        icon: <Play className="w-5 h-5" />
      },
      {
        text: "Hablar con Especialista",
        action: () => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, '_blank'),
        variant: 'secondary' as const,
        icon: <Calendar className="w-5 h-5" />
      }
    ],
    urgency: "⚡ Implementación Express: 48 horas",
    guarantee: "Demo personalizada gratuita de 30 minutos",
    testimonialQuote: "El módulo de Chats Centralizados nos permitió escalar de 2 a 8 operadores sin comprometer la seguridad. Ahora supervisamos todo en tiempo real.",
    testimonialAuthor: "María González",
    testimonialCompany: "VASP Líder México"
  }

  // Funciones para las acciones
  const handlePrimaryAction = () => {
    setShowForm(true)
  }

  const handleSecondaryAction = () => {
    window.open('/recursos/caso-uso-chats-centralizados.pdf', '_blank')
  }

  return (
    <div className="min-h-screen">
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
        backgroundVariant="chats"
        stats={heroData.stats}
        heroVisual={
          <div className="relative">
            {/* Chat Interface Mockup */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-silver5-chats/20 rounded-lg p-6 shadow-2xl">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-silver5-chats mr-2" />
                <div className="text-lg font-semibold text-white">Chats Centralizados</div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-silver5-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-silver5-green-400">En línea</span>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-silver5-chats to-silver5-orders rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-silver5-chats/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">¿Cuál es el precio actual de USDT?</p>
                    <span className="text-xs text-silver5-chats">Cliente A • 14:23</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-silver5-bot to-silver5-ai rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-silver5-bot/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">El precio actual es $0.9998. ¿Te interesa comprar?</p>
                    <span className="text-xs text-silver5-bot">Bot Auto • 14:23</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-silver5-kyc to-silver5-navy rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-silver5-orders/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">Sí, quiero comprar $500</p>
                    <span className="text-xs text-silver5-orders">Cliente B • 14:24</span>
                  </div>
                </div>
              </div>
              
              {/* Active Chats Counter */}
              <div className="mt-4 pt-4 border-t border-silver5-chats/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Chats activos</span>
                  <span className="text-silver5-chats font-semibold">23</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-silver5-chats to-silver5-orders rounded-full flex items-center justify-center shadow-lg">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-silver5-ai to-silver5-chats rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        }
      />

      {/* Pain Points Section */}
      <PainPointSection
        title={painPointsData.title}
        subtitle={painPointsData.subtitle}
        description={painPointsData.description}
        painPoints={painPointsData.painPoints}
        solutionTitle={painPointsData.solutionTitle}
        solutionDescription={painPointsData.solutionDescription}
        solutionPoints={painPointsData.solutionPoints}
        variant="chats"
      />

      {/* Benefits Section */}
      <BenefitsGrid
        title={benefitsData.title}
        subtitle={benefitsData.subtitle}
        benefits={benefitsData.benefits}
        variant="chats"
        layout="grid"
      />

      {/* Features Section */}
      <BenefitsGrid
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        benefits={featuresData.benefits}
        variant="chats"
        layout="cards"
      />

      {/* How it Works Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Cómo Funciona?
            </h2>
            <p className="text-xl text-gray-300">
              Implementación simple en 3 pasos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Conexión Segura",
                description: "Conectamos de forma segura tus cuentas Binance usando API keys con permisos mínimos necesarios"
              },
              {
                step: "02", 
                title: "Configuración de Equipo",
                description: "Configuras tu equipo de operadores con roles y permisos específicos, sin acceso a credenciales"
              },
              {
                step: "03",
                title: "Operación Inmediata",
                description: "Tu equipo comienza a gestionar todos los chats desde la interfaz unificada en menos de 1 hora"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-silver5-chats to-silver5-orders rounded-full text-white font-bold text-xl mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title={ctaData.title}
        description={ctaData.description}
        buttons={ctaData.buttons}
        variant="chats"
        urgency={ctaData.urgency}
        guarantee={ctaData.guarantee}
        testimonialQuote={ctaData.testimonialQuote}
        testimonialAuthor={ctaData.testimonialAuthor}
        testimonialCompany={ctaData.testimonialCompany}
      />

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