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
import Image from 'next/image'

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
    titleHighlight: "KYC Automatizado",
    titleEnd: "con Integración Didit",
    description: "Verificación KYC completa en 2 minutos con integración nativa de Didit. Cumplimiento regulatorio automático, screening AML y onboarding sin fricción para tus clientes P2P.",
    primaryCta: "Regístrate gratis",
    secondaryCta: "Ponerse en contacto",
    stats: [
      { value: "2min", label: "Verificación KYC" },
      { value: "100%", label: "Compliance Automático" },
      { value: "0€", label: "Costo Adicional" }
    ]
  }

  const painPointsData = {
    title: "¿Cumplimiento Regulatorio Complejo?",
    subtitle: "Los desafíos de KYC manual en operaciones P2P",
    description: "El cumplimiento regulatorio no puede ser opcional. Los procesos manuales son lentos, costosos y propensos a errores que pueden costar millones en multas.",
    painPoints: [
      {
        problem: "Procesos KYC manuales y lentos",
        consequence: "Abandono de usuarios y experiencia frustrante",
        icon: <Clock className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Verificación KYC inconsistente",
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
    solutionTitle: "KYC Automatizado: Compliance Inteligente",
    solutionDescription: "Integración completa con Didit para verificación automática de identidad y screening KYC en tiempo real.",
    solutionPoints: [
      "Verificación KYC en menos de 2 minutos",
      "Screening KYC automático con 99.8% precisión",
      "Base de datos unificada de clientes",
      "Reportes regulatorios automáticos",
      "Cumplimiento continuo 24/7"
    ]
  }

  const benefitsData = {
    title: "Resultados del KYC Automatizado",
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
        title: "Precisión KYC",
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
    title: "Características del Sistema KYC",
    subtitle: "Tecnología Didit integrada para máximo compliance",
    benefits: [
      {
        title: "Verificación Biométrica",
        description: "Reconocimiento facial y liveness detection para máxima seguridad",
        icon: <UserCheck className="w-8 h-8" />
      },
      {
        title: "Screening KYC Automático",
        description: "Verificación automática de identidad y documentos en tiempo real",
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
    title: "¿Listo para Automatizar tu KYC sin Costos Adicionales?",
    description: "Únete a VASPs que ya procesan verificaciones KYC en minutos con integración Didit incluida. Implementación inmediata.",
    buttons: [
      {
        text: "Regístrate gratis",
        action: () => window.open('https://app.silver5ai.com/register', '_blank'),
        variant: 'primary' as const,
        icon: <ArrowRight className="w-5 h-5" />
      },
      {
        text: "Ponerse en contacto",
        action: () => setShowForm(true),
        variant: 'secondary' as const,
        icon: <Calendar className="w-5 h-5" />
      }
    ],
    urgency: "⚡ Integración Didit: Activación inmediata",
    guarantee: "KYC gratuito incluido - sin costos ocultos",
    testimonialQuote: "La integración con Didit nos ahorró miles de euros en costos de KYC. Ahora procesamos verificaciones en 2 minutos en lugar de días.",
    testimonialAuthor: "Patricia Morales",
    testimonialCompany: "FinTech Leader España"
  }

  // Funciones para las acciones
  const handlePrimaryAction = () => {
    window.open('https://app.silver5ai.com/register', '_blank')
  }

  const handleSecondaryAction = () => {
    setShowForm(true)
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
            {/* Binance Integration Badge - Más grande y llamativo */}
            <div className="absolute -top-6 -right-0 z-10 bg-gradient-to-br from-silver5-kyc/20 to-silver5-navy/20 backdrop-blur-sm border-2 border-silver5-kyc/40 rounded-full p-4 hover:scale-110 hover:border-silver5-kyc/60 transition-all duration-300 shadow-lg hover:shadow-silver5-kyc/25">
              <Image
                src="/Binance.svg"
                alt="Integración oficial con Binance"
                width={60}
                height={60}
                className="opacity-95 hover:opacity-100 transition-opacity"
              />
              </div>
              
            {/* Didit Integration Badge */}
            <div className="absolute -top-2 left-6 z-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-2 border-purple-500/40 rounded-full p-3 hover:scale-110 hover:border-purple-500/60 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              <Image
                src="https://didit.me/icons/logos/didit.svg"
                alt="Powered by Didit KYC"
                width={50}
                height={50}
                className="opacity-95 hover:opacity-100 transition-opacity"
              />
                </div>
                
            {/* KYC Clients Image */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/KYC-clients.png"
                alt="Gestión de Clientes KYC Dashboard - Sistema de verificación automática"
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
                  <Image
                    src="https://didit.me/icons/logos/didit.svg"
                    alt="Didit KYC Integration"
                    width={80}
                    height={20}
                    className="opacity-90"
                  />
                  <div className="h-6 w-px bg-white/40"></div>
                  <span className="text-white text-base font-semibold">Gestión de Clientes</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements específicos para KYC */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-silver5-kyc to-silver5-navy rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-silver5-green-400 to-silver5-kyc rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
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
            <div className="flex items-center justify-center mb-6">
              <Image
                src="https://didit.me/icons/logos/didit.svg"
                alt="Didit Logo"
                width={120}
                height={40}
                className="mr-4"
              />
              <div className="h-8 w-px bg-purple-500/40 mx-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Integración Completa
            </h2>
            </div>
            <p className="text-xl text-gray-300">
              La plataforma KYC más avanzada de Latinoamérica
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
                    title: "Screening KYC",
                    description: "Verificación automática de identidad y documentos oficiales",
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
                <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-6">
                  <Image
                    src="https://didit.me/icons/logos/didit.svg"
                    alt="Didit Powered"
                    width={60}
                    height={60}
                    className="opacity-90"
                  />
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
                    <div className="text-sm text-gray-400">Precisión KYC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Didit Features Showcase */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="https://didit.me/icons/logos/didit.svg"
                  alt="Didit"
                  width={100}
                  height={30}
                  className="mr-3"
                />
                <span className="text-2xl font-bold text-white">+ P2P Manager</span>
              </div>
              <p className="text-lg text-gray-300">La combinación perfecta para compliance automático</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Setup Inmediato",
                  description: "Integración plug-and-play sin desarrollo adicional",
                  value: "5 min"
                },
                {
                  title: "Cobertura Global",
                  description: "Verificación de documentos de +190 países",
                  value: "190+"
                },
                {
                  title: "Uptime Garantizado",
                  description: "Disponibilidad 24/7 con SLA empresarial",
                  value: "99.9%"
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-black/20 rounded-lg border border-purple-500/10">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{item.value}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
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