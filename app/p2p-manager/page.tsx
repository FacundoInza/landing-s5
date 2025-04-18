'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bot, Shield, Code, Cpu, Mail, MapPin, Clock, CheckCircle, ChevronRight, Laptop, MessageSquare, LockKeyhole, Users, Twitter, Linkedin, Github, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../contexts/language-context'
import ContactForm from './components/ContactForm'

interface Benefit {
  title: string;
  description: string;
}

interface ChatFeatures {
  title: string;
  description: string;
  benefits: Benefit[];
}

interface IntegrationFeatures {
  title: string;
  description: string;
  benefits: Benefit[];
}

interface OTCPartners {
  title: string;
  description: string;
  features: string[];
  chatFeatures: ChatFeatures;
  integrationFeatures: IntegrationFeatures;
}

interface Translations {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  features: {
    title: string;
    subtitle: string;
    description: string;
  };
  keyFeatures: Array<{
    title: string;
    description: string;
    icon: JSX.Element;
    points: string[];
  }>;
  otcPartners: OTCPartners;
  demo: {
    title: string;
    description: string;
    cta: string;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      value: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
}

export default function P2PManagerPage() {
  const { language } = useLanguage();
  const [showForm, setShowForm] = useState(false);

  // Traducciones específicas para esta página
  const translations: Record<string, Translations> = {
    es: {
      hero: {
        badge: 'Silver P2P Manager',
        title: 'Gestión Centralizada',
        titleHighlight: 'Multicuenta P2P',
        titleEnd: 'para VASPs y OTC Partners',
        description: '🎯 Sistema integral para gestionar múltiples cuentas Binance P2P sin compartir credenciales. Asigná usuarios, gestioná órdenes y generá reportes financieros desde una única plataforma. Ideal para VASPs y OTC Crypto Partners que necesitan escalar sus operaciones.',
        primaryCta: 'Ver Demo',
        secondaryCta: 'Agendar Cita',
      },
      features: {
        title: 'Gestión Centralizada de Operaciones P2P',
        subtitle: 'Operá múltiples cuentas Binance desde una única plataforma',
        description: 'Silver P2P Manager te permite gestionar todas tus operaciones P2P de forma segura y eficiente, sin necesidad de compartir credenciales de Binance con tus empleados.',
      },
      keyFeatures: [
        {
          title: "Gestión Multicuenta Segura",
          description: "Administrá múltiples cuentas Binance sin compartir credenciales, asignando usuarios específicos a cada cuenta.",
          icon: <Bot className="h-12 w-12 text-cyan-400" />,
          points: [
            "Asignación de usuarios por cuenta",
            "Sin compartir credenciales de Binance",
            "Control de acceso granular",
            "Auditoría de operaciones"
          ]
        },
        {
          title: "Chat Centralizado P2P",
          description: "Gestioná todas las conversaciones P2P desde una única interfaz, independientemente de la cuenta de Binance.",
          icon: <Laptop className="h-12 w-12 text-purple-400" />,
          points: [
            "Panel unificado de conversaciones",
            "Asignación de operadores",
            "Notificaciones en tiempo real",
            "Historial completo de chats"
          ]
        },
        {
          title: "Gestión de Órdenes",
          description: "Administrá y resolvé órdenes P2P desde el sistema, con registro completo de todas las operaciones.",
          icon: <MessageSquare className="h-12 w-12 text-green-400" />,
          points: [
            "Panel central de órdenes",
            "Resolución de órdenes integrada",
            "Seguimiento de operaciones",
            "Reportes financieros"
          ]
        },
        {
          title: "Seguridad y Compliance",
          description: "Operá con tranquilidad gracias a nuestros protocolos de seguridad avanzados y sistema de permisos.",
          icon: <Shield className="h-12 w-12 text-yellow-400" />,
          points: [
            "Conexión segura con Binance",
            "Sistema de permisos multinivel",
            "Auditoría completa de acciones",
            "Registro de clientes"
          ]
        }
      ],
      otcPartners: {
        title: "Solución Integral para VASPs y OTC Partners",
        description: "Silver P2P Manager está diseñado específicamente para VASPs, OTCs y exchanges que necesitan gestionar múltiples cuentas Binance P2P de forma segura y eficiente, sin compartir credenciales con sus empleados.",
        features: [
          "Gestión multicuenta centralizada",
          "Panel unificado de chats P2P",
          "Sistema de permisos por usuario",
          "Reportes financieros detallados",
          "Registro de clientes y operaciones"
        ],
        chatFeatures: {
          title: "Chat Centralizado P2P",
          description: "Gestiona todas tus conversaciones P2P desde una única interfaz, independientemente de la cuenta de Binance.",
          benefits: [
            {
              title: "Gestión Unificada",
              description: "Administra todos tus chats P2P desde un solo panel, sin importar la cuenta de Binance."
            },
            {
              title: "Asignación de Operadores",
              description: "Asigna operadores específicos a cada cuenta y conversación."
            },
            {
              title: "Historial Completo",
              description: "Accede al historial completo de conversaciones y operaciones realizadas."
            }
          ]
        },
        integrationFeatures: {
          title: "Integración Segura con Binance",
          description: "Conecta tus cuentas de Binance de forma segura sin compartir credenciales.",
          benefits: [
            {
              title: "Conexión Segura",
              description: "Conecta tus cuentas de Binance sin compartir credenciales con tus empleados."
            },
            {
              title: "Gestión de Usuarios",
              description: "Asigna usuarios específicos a cada cuenta de Binance."
            },
            {
              title: "Reportes Financieros",
              description: "Genera reportes detallados de todas tus operaciones P2P."
            }
          ]
        }
      },
      demo: {
        title: "Ve la plataforma en acción",
        description: "Solicita una demostración personalizada y descubre cómo Silver P2P Manager puede transformar tu flujo de operaciones P2P.",
        cta: "Solicitar Demostración"
      },
      benefits: {
        title: "Beneficios comprobados",
        items: [
          {
            title: "Eficiencia Operativa",
            description: "Reduzca hasta un 80% el tiempo dedicado a la gestión manual de operaciones P2P.",
            value: "80%"
          },
          {
            title: "Seguridad Mejorada",
            description: "Minimice riesgos operativos con un sistema de permisos y validaciones multinivel.",
            value: "100%"
          },
          {
            title: "Cumplimiento Normativo",
            description: "Asegure el cumplimiento regulatorio con validaciones automáticas KYC/AML.",
            value: "24/7"
          },
          {
            title: "Experiencia de Cliente",
            description: "Mejore la satisfacción con tiempos de respuesta optimizados en órdenes P2P.",
            value: "95%"
          }
        ]
      },
      cta: {
        title: "¿Listo para escalar tus operaciones P2P?",
        description: "📩 Escribinos y empezá a escalar tu negocio P2P con la solución preferida por traders profesionales.",
        primary: "Ver Demo",
        secondary: "Agendar Cita"
      }
    },
    en: {
      hero: {
        badge: 'P2P Management System',
        title: 'Centralize, Optimize and Control',
        titleHighlight: 'all your P2P Operations',
        titleEnd: 'on Binance',
        description: 'Silver P2P Manager - the ultimate platform specifically designed for VASPs, Exchanges and Crypto OTC service providers who need to maximize the efficiency of their P2P operations on Binance.',
        primaryCta: 'Request Demo',
        secondaryCta: 'Contact Us',
      },
      features: {
        title: 'One platform. Total control.',
        subtitle: 'Advanced Solution for VASPs and Crypto Exchanges',
        description: 'Silver P2P Manager revolutionizes how financial companies manage their P2P operations.',
      },
      keyFeatures: [
        {
          title: "Centralized Management",
          description: "Integrate all your Binance accounts into a single dashboard with complete traceability and integrated compliance features.",
          icon: <Laptop className="h-12 w-12 text-cyan-400" />,
          points: [
            "Multiple Binance account integration",
            "Operation without credential access",
            "Automatic order logging",
            "Integrated AML/KYC validation"
          ]
        },
        {
          title: "Intelligent Automation",
          description: "Maximize your positioning in Binance's P2P market with our automated trading bot integrated into the platform.",
          icon: <Bot className="h-12 w-12 text-purple-400" />,
          points: [
            "Automatic positioning 24/7",
            "Customizable strategies",
            "Intelligent price optimization",
            "Complete parameter control"
          ]
        },
        {
          title: "Centralized Chat",
          description: "Manage all communications with your customers from a unified interface with complete history and real-time notifications.",
          icon: <MessageSquare className="h-12 w-12 text-green-400" />,
          points: [
            "Unified conversation panel",
            "Complete chat history",
            "Real-time notifications",
            "Operator assignment"
          ]
        },
        {
          title: "Security and Compliance",
          description: "Designed with the strict regulatory requirements for Stablecoin and Crypto operators in mind with automatic validation.",
          icon: <Shield className="h-12 w-12 text-yellow-400" />,
          points: [
            "Validation with risk lists",
            "Complete transaction audit",
            "Customizable compliance rules",
            "Certified secure architecture"
          ]
        }
      ],
      otcPartners: {
        title: "Ideal For Crypto OTC Partners",
        description: "Optimize your wholesale cryptocurrency and Stablecoin buying/selling operations with specialized tools for large volumes and efficient liquidity management.",
        features: [
          "Large volume management",
          "Real-time liquidity tracking",
          "Custom operation reports",
          "Automatic spread optimization"
        ],
        chatFeatures: {
          title: "Centralized P2P Chat",
          description: "Manage all your P2P conversations from a single intuitive interface.",
          benefits: [
            {
              title: "Unified Management",
              description: "Manage all your P2P chats from a single panel, regardless of account."
            },
            {
              title: "Real-time Notifications",
              description: "Receive instant alerts for new messages and important updates."
            },
            {
              title: "Complete History",
              description: "Access the complete history of conversations and operations."
            }
          ]
        },
        integrationFeatures: {
          title: "Native Binance Integration",
          description: "Make the most of direct integration with the leading cryptocurrency platform.",
          benefits: [
            {
              title: "Real-time Synchronization",
              description: "Keep your operations automatically updated with the Binance platform."
            },
            {
              title: "Automated Operations",
              description: "Configure automatic responses and manage operations efficiently."
            },
            {
              title: "Guaranteed Security",
              description: "Maintain total control of your operations with Binance security."
            }
          ]
        }
      },
      demo: {
        title: "See the platform in action",
        description: "Request a personalized demonstration and discover how Silver P2P Manager can transform your P2P operations.",
        cta: "Request Demonstration"
      },
      benefits: {
        title: "Proven Benefits",
        items: [
          {
            title: "Operational Efficiency",
            description: "Reduce time spent on manual P2P operations management by up to 80%.",
            value: "80%"
          },
          {
            title: "Enhanced Security",
            description: "Minimize operational risks with a multi-level permissions and validations system.",
            value: "100%"
          },
          {
            title: "Regulatory Compliance",
            description: "Ensure regulatory compliance with automatic KYC/AML validations.",
            value: "24/7"
          },
          {
            title: "Customer Experience",
            description: "Improve satisfaction with optimized response times on P2P orders.",
            value: "95%"
          }
        ]
      },
      cta: {
        title: "Ready to transform your P2P operations?",
        description: "Join the leading VASPs and exchanges already optimizing their operations with Silver P2P Manager.",
        primary: "Request Demo",
        secondary: "Talk to a Specialist"
      }
    }
  };

  const t = translations[language];

  const renderProcessFlow = () => {
    const processTranslations = {
      es: {
        title: 'Flujo de Operación P2P',
        description: 'Nuestro sistema automatiza y optimiza las operaciones P2P, permitiéndote escalar tu negocio de manera eficiente y segura.',
        steps: [
          {
            title: 'Recepción de Orden',
            description: 'Detección automática de órdenes Binance'
          },
          {
            title: 'Procesamiento',
            description: 'Visualización del registro en sistema'
          },
          {
            title: 'Verificación y Chat',
            description: 'Indicadores de KYC y AML'
          },
          {
            title: 'Finalización',
            description: 'Confirmación de orden completada'
          }
        ]
      },
      en: {
        title: 'P2P Operation Flow',
        description: 'Our system automates and optimizes P2P operations, allowing you to scale your business efficiently and securely.',
        steps: [
          {
            title: 'Order Reception',
            description: 'Automatic detection of Binance orders'
          },
          {
            title: 'Processing',
            description: 'System registration visualization'
          },
          {
            title: 'Verification & Chat',
            description: 'KYC and AML indicators'
          },
          {
            title: 'Completion',
            description: 'Order completion confirmation'
          }
        ]
      }
    };

    const pt = processTranslations[language];

    return (
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{pt.title}</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            {pt.description}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500 p-2 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{pt.steps[0].title}</h3>
                    <p className="text-gray-600">{pt.steps[0].description}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 p-2 rounded-full">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{pt.steps[1].title}</h3>
                    <p className="text-gray-600">{pt.steps[1].description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{pt.steps[2].title}</h3>
                    <p className="text-gray-600">{pt.steps[2].description}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{pt.steps[3].title}</h3>
                    <p className="text-gray-600">{pt.steps[3].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const footerTranslations = {
    es: {
      company: {
        description: 'Soluciones tecnológicas especializadas para el sector financiero y criptomonedas.'
      },
      quickLinks: {
        title: 'Enlaces Rápidos',
        links: {
          services: 'Servicios',
          p2pBot: 'Bot P2P',
          technologies: 'Tecnologías',
          aboutUs: 'Sobre Nosotros'
        }
      },
      services: {
        title: 'Servicios',
        items: {
          p2pBot: 'Bot P2P Binance',
          webDev: 'Desarrollo Web',
          compliance: 'Compliance',
          automation: 'Automatización'
        }
      },
      contact: {
        title: 'Contacto'
      },
      legal: {
        copyright: '© {year} Silver5 AI. Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio'
      }
    },
    en: {
      company: {
        description: 'Specialized technological solutions for the financial and cryptocurrency sector.'
      },
      quickLinks: {
        title: 'Quick Links',
        links: {
          services: 'Services',
          p2pBot: 'P2P Bot',
          technologies: 'Technologies',
          aboutUs: 'About Us'
        }
      },
      services: {
        title: 'Services',
        items: {
          p2pBot: 'Binance P2P Bot',
          webDev: 'Web Development',
          compliance: 'Compliance',
          automation: 'Automation'
        }
      },
      contact: {
        title: 'Contact'
      },
      legal: {
        copyright: '© {year} Silver5 AI. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    }
  };

  const ft = footerTranslations[language];

  if (showForm) {
    const formTranslations = {
      es: {
        title: 'Solicitud de Demo',
        subtitle: 'Completá el formulario',
        description: 'Contanos sobre tu operación P2P y nos pondremos en contacto contigo para coordinar una demo personalizada.'
      },
      en: {
        title: 'Demo Request',
        subtitle: 'Complete the form',
        description: 'Tell us about your P2P operation and we will contact you to coordinate a personalized demo.'
      }
    };

    const formT = formTranslations[language];

    return (
      <div className="min-h-screen bg-[#0A0B14] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              {formT.title}
            </div>
            <h2 className="text-4xl font-bold mb-4">{formT.subtitle}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {formT.description}
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent" />
          
          {/* Elementos gráficos financieros */}
          <div className="absolute top-1/4 right-[15%] animate-pulse">
            <div className="text-cyan-400 opacity-30 text-6xl font-bold">₿</div>
          </div>
          <div className="absolute bottom-1/3 left-[15%] animate-pulse delay-300">
            <div className="text-purple-400 opacity-30 text-6xl font-bold">Ξ</div>
          </div>
          
          {/* Gráfico de trading estilizado */}
          <div className="absolute bottom-1/4 right-[30%] w-32 h-16 opacity-20">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path d="M0,25 L10,20 L20,30 L30,15 L40,25 L50,10 L60,20 L70,5 L80,15 L90,10 L100,20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    className="text-cyan-400" />
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                {t.hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {t.hero.title} <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                {t.hero.description}
              </p>
              <div className="flex justify-center md:justify-start">
                <Button 
                  onClick={() => setShowForm(true)}
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full px-12 py-5 text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] w-full sm:w-auto animate-float"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></span>
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
                      Ver Demo Gratis
                    </span>
                    <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  </div>
                </Button>
              </div>
            </div>
            
            {/* Hero Images - Dispositivos */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                {/* MacBook */}
                <div className="relative z-20 transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/macbook-1.png" 
                    alt="Silver P2P Manager Dashboard" 
                    width={600} 
                    height={375}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                
                {/* Phone - Posicionado sobre el MacBook */}
                <div className="absolute -right-6 -bottom-10 w-1/3 z-30 transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/phone-1.png" 
                    alt="Silver P2P Manager Mobile" 
                    width={200} 
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                
                {/* Efectos decorativos */}
                <div className="absolute -inset-4 bg-cyan-400/20 blur-xl rounded-xl -z-10"></div>
                <div className="absolute -top-2 -right-2 animate-pulse">
                  <div className="text-cyan-400 opacity-70 text-4xl font-bold">₿</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-cyan-400 text-xl mb-6">{t.features.subtitle}</p>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t.features.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {t.keyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 flex flex-col h-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                
                <div className="bg-gray-800/50 rounded-xl p-4 mb-6 inline-block group-hover:bg-gray-800/80 transition-colors duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                <div className="mt-auto">
                  <ul className="space-y-2 mb-6">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => setShowForm(true)}
                    className="group relative overflow-hidden bg-gradient-to-r from-cyan-500/80 to-purple-500/80 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full px-6 py-3 text-base font-bold transition-all duration-300 transform hover:scale-105 w-full"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></span>
                    <div className="relative flex items-center justify-center gap-2">
                      <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
                        Ver Demo
                      </span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTC Partners Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#0A0B14] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium">
                  Integración Oficial
                </div>
                <Image 
                  src="/Binance.svg" 
                  alt="Binance" 
                  width={150} 
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.otcPartners.title}</h2>
              <p className="text-gray-400 mb-8">
                {t.otcPartners.description}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.otcPartners.chatFeatures.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                      <h3 className="font-semibold text-cyan-400 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-400">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">{t.otcPartners.integrationFeatures.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.otcPartners.integrationFeatures.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-cyan-400/10 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{benefit.title}</p>
                        <p className="text-sm text-gray-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                onClick={() => setShowForm(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></span>
                <div className="relative flex items-center justify-center gap-3">
                  <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
                    Ver Demo Ahora
                  </span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
              </Button>
            </div>
            
            {/* Right side - MacBook Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-cyan-400/20 blur-xl rounded-xl"></div>
                <div className="relative transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/macbook-1.png" 
                    alt="Silver P2P Manager Dashboard" 
                    width={600} 
                    height={375}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                    Chat Centralizado P2P
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-24 relative border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              <Image 
                src="/Binance.svg" 
                alt="Binance" 
                width={80} 
                height={24}
                className="h-5 w-auto animate-binance-pulse"
              />
              <span className="border-l border-cyan-400/20 pl-3">Integración Oficial</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Flujo de Operación P2P en Binance</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Descubre cómo nuestro sistema se integra nativamente con Binance para automatizar y optimizar todo el proceso de operaciones P2P.
            </p>
          </div>

          {/* Process Flow Animation */}
          <div className="relative mt-20">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-400"></div>

            {/* Step 1: Orden Binance */}
            <div className="group relative mb-32">
              <div className="flex items-center justify-center mb-8">
                <div className="absolute -left-3 w-6 h-6 rounded-full bg-yellow-400 animate-pulse"></div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 ml-8 transform transition-all duration-500 hover:scale-105 w-full max-w-2xl border border-yellow-400/20">
                  <div className="flex items-start gap-6">
                    <div className="bg-yellow-400/10 rounded-xl p-4">
                      <Image 
                        src="/Binance.svg" 
                        alt="Binance" 
                        width={32} 
                        height={32}
                        className="animate-binance-pulse"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Recepción de Orden en Binance</h3>
                      <p className="text-gray-400">Detección automática de órdenes P2P directamente desde la API oficial de Binance.</p>
                    </div>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-xl border border-gray-700">
                    <div className="bg-gray-900/50 p-4">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
                        <span className="text-yellow-400">Orden P2P Detectada en Binance</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">ID: 1234567</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Carga en Sistema */}
            <div className="group relative mb-32">
              <div className="flex items-center justify-center mb-8">
                <div className="absolute -left-3 w-6 h-6 rounded-full bg-blue-400 animate-pulse delay-300"></div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 ml-8 transform transition-all duration-500 hover:scale-105 w-full max-w-2xl border border-blue-400/20">
                  <div className="flex items-start gap-6">
                    <div className="bg-blue-400/10 rounded-xl p-4 relative">
                      <div className="absolute -top-2 -right-2">
                        <Image 
                          src="/Binance.svg" 
                          alt="Binance" 
                          width={24} 
                          height={24}
                          className="animate-binance-pulse"
                        />
                      </div>
                      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Procesamiento de Orden Binance</h3>
                      <p className="text-gray-400">Sincronización automática con la API de Binance y asignación inteligente de operadores.</p>
                    </div>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-xl border border-gray-700">
                    <div className="bg-gray-900/50 p-4">
                      <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-2">
                          <div className="h-2 bg-blue-400/20 rounded w-3/4"></div>
                          <div className="h-2 bg-blue-400/20 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Chat y KYC */}
            <div className="group relative mb-32">
              <div className="flex items-center justify-center mb-8">
                <div className="absolute -left-3 w-6 h-6 rounded-full bg-purple-400 animate-pulse delay-500"></div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 ml-8 transform transition-all duration-500 hover:scale-105 w-full max-w-2xl border border-purple-400/20">
                  <div className="flex items-start gap-6">
                    <div className="bg-purple-400/10 rounded-xl p-4 relative">
                      <div className="absolute -top-2 -right-2">
                        <Image 
                          src="/Binance.svg" 
                          alt="Binance" 
                          width={24} 
                          height={24}
                          className="animate-binance-pulse"
                        />
                      </div>
                      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Chat P2P Integrado con Binance</h3>
                      <p className="text-gray-400">Gestión centralizada del chat P2P de Binance con verificación KYC/AML en tiempo real.</p>
                    </div>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-xl border border-gray-700">
                    <div className="bg-gray-900/50 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="text-sm text-purple-400">Chat Binance Sincronizado</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="text-sm text-green-400">Verificación KYC/AML</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Completar Orden */}
            <div className="group relative">
              <div className="flex items-center justify-center">
                <div className="absolute -left-3 w-6 h-6 rounded-full bg-green-400 animate-pulse delay-700"></div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 ml-8 transform transition-all duration-500 hover:scale-105 w-full max-w-2xl border border-green-400/20">
                  <div className="flex items-start gap-6">
                    <div className="bg-green-400/10 rounded-xl p-4 relative">
                      <div className="absolute -top-2 -right-2">
                        <Image 
                          src="/Binance.svg" 
                          alt="Binance" 
                          width={24} 
                          height={24}
                          className="animate-binance-pulse"
                        />
                      </div>
                      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Confirmación Automática en Binance</h3>
                      <p className="text-gray-400">Finalización y confirmación automática de la orden directamente en la plataforma de Binance.</p>
                    </div>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-xl border border-gray-700">
                    <div className="bg-gray-900/50 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-green-400">Orden Completada en Binance</span>
                        </div>
                        <Button 
                          onClick={() => setShowForm(true)}
                          className="group relative overflow-hidden bg-gradient-to-r from-cyan-500/80 to-purple-500/80 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 transform hover:scale-105"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></span>
                          <div className="relative flex items-center justify-center gap-2">
                            <span>Ver Demo</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              Resultados Comprobados
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.benefits.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Nuestros clientes han experimentado mejoras significativas en sus operaciones P2P.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 text-center"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  {item.value}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                
                <Button 
                  onClick={() => setShowForm(true)}
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500/80 to-purple-500/80 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 transform hover:scale-105 w-full"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></span>
                  <div className="relative flex items-center justify-center gap-2">
                    <span>Ver Demo</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#0A0B14] border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              ¿Listo para comenzar?
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-gray-400 text-lg mb-8">
              {t.cta.description}
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={() => setShowForm(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full px-12 py-5 text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] w-full sm:w-auto animate-float"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></span>
                <div className="relative flex items-center justify-center gap-3">
                  <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
                    Ver Demo Gratis
                  </span>
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Columna 1: Información de la empresa */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo-s5-w.png" alt="Silver5 AI" width={32} height={32} />
                <span className="font-bold text-lg">Silver5</span>
              </Link>
              <p className="text-gray-400 text-sm">
                {ft.company.description}
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/silver5ai"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com/company/silver5" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {ft.quickLinks.title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="#servicios" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                    {ft.quickLinks.links.services}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#p2pbot" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                    {ft.quickLinks.links.p2pBot}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#tecnologias" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                    {ft.quickLinks.links.technologies}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#sobre-nosotros" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                    {ft.quickLinks.links.aboutUs}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Servicios */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {ft.services.title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="https://p2p.silver5ai.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <Bot className="w-4 h-4 mr-2 text-cyan-400" />
                    {ft.services.items.p2pBot}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#servicios" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <Code className="w-4 h-4 mr-2 text-purple-400" />
                    {ft.services.items.webDev}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#servicios" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    {ft.services.items.compliance}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#servicios" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <Cpu className="w-4 h-4 mr-2 text-yellow-400" />
                    {ft.services.items.automation}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {ft.contact.title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:office@silver5ai.com" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    office@silver5ai.com
                  </a>
                </li>
                <li>
                  <div className="text-gray-400 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Buenos Aires, Argentina
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                {ft.legal.copyright}
              </p>
              <div className="flex space-x-6">
                <Link 
                  href="/privacidad" 
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                >
                  {ft.legal.privacy}
                </Link>
                <Link 
                  href="/terminos" 
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                >
                  {ft.legal.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 