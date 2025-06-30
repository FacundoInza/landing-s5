'use client'

import { useState } from 'react'
import { useLanguage } from '../../contexts/language-context'
import { 
  Users, 
  Shield, 
  CheckCircle, 
  FileCheck,
  Clock,
  AlertTriangle,
  Play,
  Calendar,
  ArrowRight,
  DollarSign,
  Star,
  UserCheck,
  Database,
  Zap
} from 'lucide-react'

// Componentes compartidos
import HeroSection from '../components/shared/HeroSection'
import PainPointSection from '../components/shared/PainPointSection'
import BenefitsGrid from '../components/shared/BenefitsGrid'
import CTASection from '../components/shared/CTASection'
import ContactForm from '../components/ContactForm'

export default function GestionClientesPage() {
  const { language } = useLanguage()
  const [showForm, setShowForm] = useState(false)

  // Datos específicos para Gestión de Clientes
  const heroData = {
    badge: "Módulo Especializado P2P Manager",
    title: "Gestión de Clientes",
    titleHighlight: "KYC/AML Automatizado",
    titleEnd: "con Didit",
    description: "Sistema completo de gestión de clientes P2P con verificación KYC/AML automatizada mediante Didit. Cumplimiento regulatorio sin fricción para tus usuarios.",
    primaryCta: "Ver Sistema KYC",
    secondaryCta: "Integración Didit",
    stats: [
      { value: "2 min", label: "Verificación KYC" },
      { value: "99.8%", label: "Precisión AML" },
      { value: "24/7", label: "Compliance" }
    ]
  }

  const painPointsData = {
    title: "¿Cumplimiento Regulatorio Complejo?",
    subtitle: "Los desafíos de KYC/AML manual en operaciones P2P",
    description: "El cumplimiento regulatorio no puede ser opcional. Los procesos manuales son lentos, costosos y propensos a errores que pueden costar millones en multas.",
    painPoints: [
      {
        problem: "Procesos KYC manuales y lentos",
        consequence: "Abandono de usuarios y experiencia frustrante",
        icon: <Clock className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Verificación AML inconsistente",
        consequence: "Riesgo de multas regulatorias y pérdida de licencias",
        icon: <AlertTriangle className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Gestión fragmentada de clientes",
        consequence: "Imposible tener visión 360° del cliente",
        icon: <Users className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Documentación y reportes manuales",
        consequence: "Horas de trabajo administrativo y errores humanos",
        icon: <FileCheck className="w-6 h-6 text-red-400" />
      }
    ],
    solutionTitle: "KYC/AML Automatizado: Compliance Inteligente",
    solutionDescription: "Integración completa con Didit para verificación automática de identidad y screening AML en tiempo real.",
    solutionPoints: [
      "Verificación KYC en menos de 2 minutos",
      "Screening AML automático con 99.8% precisión",
      "Base de datos unificada de clientes",
      "Reportes regulatorios automáticos",
      "Cumplimiento continuo 24/7"
    ]
  }

  const benefitsData = {
    title: "Resultados del KYC/AML Automatizado",
    subtitle: "Impacto medible desde el primer día",
    benefits: [
      {
        title: "Reducción Tiempo KYC",
        description: "De 2-3 días a menos de 2 minutos por verificación",
        value: "95%",
        metric: "Más rápido",
        icon: <Clock className="w-8 h-8" />,
        highlight: true
      },
      {
        title: "Precisión AML",
        description: "Detección automática de riesgos con machine learning",
        value: "99.8%",
        metric: "Precisión",
        icon: <Shield className="w-8 h-8" />
      },
      {
        title: "Conversión de Usuarios",
        description: "Aumento en completado de registro por proceso fluido",
        value: "+67%",
        metric: "Más conversión",
        icon: <UserCheck className="w-8 h-8" />
      },
      {
        title: "Costos Operativos",
        description: "Reducción en costos de compliance y verificación manual",
        value: "80%",
        metric: "Menos costos",
        icon: <DollarSign className="w-8 h-8" />
      },
      {
        title: "Satisfacción Cliente",
        description: "Mejora en experiencia de onboarding y verificación",
        value: "+85%",
        metric: "Más satisfacción",
        icon: <Star className="w-8 h-8" />
      },
      {
        title: "Cumplimiento Regulatorio",
        description: "Garantía de cumplimiento continuo sin intervención manual",
        value: "100%",
        metric: "Compliance",
        icon: <FileCheck className="w-8 h-8" />
      }
    ]
  }

  const featuresData = {
    title: "Características del Sistema KYC/AML",
    subtitle: "Tecnología Didit integrada para máximo compliance",
    benefits: [
      {
        title: "Verificación Biométrica",
        description: "Reconocimiento facial y liveness detection para máxima seguridad",
        icon: <UserCheck className="w-8 h-8" />
      },
      {
        title: "Screening AML Automático",
        description: "Verificación contra listas de sanciones y PEPs en tiempo real",
        icon: <Shield className="w-8 h-8" />
      },
      {
        title: "Base de Datos Unificada",
        description: "Perfil completo del cliente con historial y scoring de riesgo",
        icon: <Database className="w-8 h-8" />
      },
      {
        title: "Reportes Automáticos",
        description: "Generación automática de reportes regulatorios y auditorías",
        icon: <FileCheck className="w-8 h-8" />
      }
    ]
  }

  const ctaData = {
    title: "¿Listo para Compliance Automático?",
    description: "Únete a VASPs que ya procesan 10,000+ verificaciones KYC mensuales de forma automática. Integración Didit incluida.",
    buttons: [
      {
        text: "Ver Sistema KYC",
        action: () => setShowForm(true),
        variant: 'primary' as const,
        icon: <Play className="w-5 h-5" />
      },
      {
        text: "Consultoría Compliance",
        action: () => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, '_blank'),
        variant: 'secondary' as const,
        icon: <Calendar className="w-5 h-5" />
      }
    ],
    urgency: "🛡️ Compliance Inmediato: Sin riesgo regulatorio",
    guarantee: "Garantía de cumplimiento 100% desde día 1",
    testimonialQuote: "Con el sistema KYC automatizado, reducimos el tiempo de verificación de 3 días a 2 minutos. Nuestros usuarios están encantados y cumplimos 100% con regulaciones.",
    testimonialAuthor: "Ana Martínez",
    testimonialCompany: "FinTech Regulada México"
  }

  // Funciones para las acciones
  const handlePrimaryAction = () => {
    setShowForm(true)
  }

  const handleSecondaryAction = () => {
    window.open('/recursos/integracion-didit.pdf', '_blank')
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
        backgroundVariant="clients"
        stats={heroData.stats}
        heroVisual={
          <div className="relative">
            {/* KYC Dashboard Mockup */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-silver5-kyc/20 rounded-lg p-6 shadow-2xl">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-silver5-kyc mr-2" />
                <div className="text-lg font-semibold text-white">Sistema KYC</div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-silver5-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-silver5-green-400">Didit Conectado</span>
                  </div>
                </div>
              </div>
              
              {/* KYC Status */}
              <div className="space-y-3">
                <div className="bg-silver5-kyc/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Juan Pérez</span>
                    <span className="text-xs bg-silver5-green-400/20 text-silver5-green-400 px-2 py-1 rounded-full">Verificado</span>
                  </div>
                  <div className="text-xs text-gray-400">DNI: 12.345.678 • Nivel: Completo</div>
                </div>
                
                <div className="bg-silver5-chats/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">María López</span>
                    <span className="text-xs bg-silver5-orders/20 text-silver5-orders px-2 py-1 rounded-full">En revisión</span>
                  </div>
                  <div className="text-xs text-gray-400">DNI: 87.654.321 • Nivel: Básico</div>
                </div>
                
                <div className="bg-silver5-bot/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Carlos Ruiz</span>
                    <span className="text-xs bg-silver5-ai/20 text-silver5-ai px-2 py-1 rounded-full">Pendiente</span>
                  </div>
                  <div className="text-xs text-gray-400">DNI: 11.222.333 • Nivel: Inicial</div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="mt-4 pt-4 border-t border-silver5-kyc/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-silver5-green-400">156</div>
                    <div className="text-xs text-gray-400">Verificados</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-silver5-orders">12</div>
                    <div className="text-xs text-gray-400">En revisión</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-silver5-ai">3</div>
                    <div className="text-xs text-gray-400">Pendientes</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-silver5-kyc to-silver5-navy rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-silver5-green-400 to-silver5-kyc rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
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
        variant="clients"
      />

      {/* Benefits Section */}
      <BenefitsGrid
        title={benefitsData.title}
        subtitle={benefitsData.subtitle}
        benefits={benefitsData.benefits}
        variant="clients"
        layout="grid"
      />

      {/* Features Section */}
      <BenefitsGrid
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        benefits={featuresData.benefits}
        variant="clients"
        layout="cards"
      />

      {/* Didit Integration Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integración Completa con Didit
            </h2>
            <p className="text-xl text-gray-300">
              La plataforma KYC/AML más avanzada de Latinoamérica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: "Verificación Biométrica",
                    description: "Reconocimiento facial con liveness detection para prevenir fraudes",
                    icon: <UserCheck className="w-6 h-6 text-purple-400" />
                  },
                  {
                    title: "Documentos Inteligentes",
                    description: "OCR avanzado para extraer y validar información de documentos oficiales",
                    icon: <FileCheck className="w-6 h-6 text-purple-400" />
                  },
                  {
                    title: "Screening AML",
                    description: "Verificación automática contra listas de sanciones y PEPs",
                    icon: <Shield className="w-6 h-6 text-purple-400" />
                  },
                  {
                    title: "API Instantánea",
                    description: "Integración simple con respuesta en tiempo real",
                    icon: <Zap className="w-6 h-6 text-purple-400" />
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-6">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Didit Powered</h3>
                <p className="text-gray-300 mb-6">
                  Tecnología de verificación de identidad más avanzada de Latinoamérica, 
                  integrada nativamente en P2P Manager.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-400">2 min</div>
                    <div className="text-sm text-gray-400">Verificación completa</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">99.8%</div>
                    <div className="text-sm text-gray-400">Precisión AML</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title={ctaData.title}
        description={ctaData.description}
        buttons={ctaData.buttons}
        variant="clients"
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