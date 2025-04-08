'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bot, ArrowLeft, Brain, Network, CheckCircle, Code, Cpu, Shield, MessageSquare, ArrowRight, Laptop, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../../contexts/language-context'

// Asegúrate de que la variable de entorno esté disponible
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver5-ai';

export default function InteligenciaArtificial() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // Datos y traducciones específicas para esta página
  const translations = {
    es: {
      hero: {
        title: 'Agentes Inteligentes',
        subtitle: 'Soluciones Avanzadas de IA',
        description: 'Automatiza procesos, aumenta la productividad y mejora la toma de decisiones con nuestros agentes de inteligencia artificial diseñados para resolver desafíos empresariales específicos.'
      },
      features: {
        title: 'Agentes de IA adaptados a tu negocio',
        description: 'Desarrollamos soluciones de inteligencia artificial que transforman la manera en que las empresas operan y brindan servicio.',
      },
      agentTypes: [
        {
          title: "Asistentes Virtuales",
          description: "Agentes conversacionales que atienden consultas y brindan soporte 24/7 a tus clientes o empleados.",
          icon: <MessageSquare className="h-12 w-12 text-cyan-400" />,
          points: [
            "Disponibilidad constante para atención al cliente",
            "Respuestas contextuales personalizadas",
            "Capacidad multiidioma y escalable",
            "Integración con tus sistemas existentes"
          ]
        },
        {
          title: "Agentes de Automatización",
          description: "Sistemas inteligentes que automatizan tareas repetitivas y flujos de trabajo completos para liberar el potencial humano.",
          icon: <Bot className="h-12 w-12 text-purple-400" />,
          points: [
            "Procesamiento de datos a alta velocidad",
            "Automatización de tareas administrativas",
            "Reducción de errores humanos",
            "Análisis y reportes automatizados"
          ]
        },
        {
          title: "Agentes de Análisis Predictivo",
          description: "Soluciones que procesan grandes volúmenes de datos para identificar patrones y realizar predicciones accionables.",
          icon: <Cpu className="h-12 w-12 text-green-400" />,
          points: [
            "Modelos predictivos personalizados",
            "Detección temprana de tendencias",
            "Optimización de procesos basada en datos",
            "Insights accionables para tu negocio"
          ]
        },
        {
          title: "Agentes de Compliance",
          description: "Sistemas especializados en monitoreo y verificación para asegurar el cumplimiento normativo en sectores regulados.",
          icon: <Shield className="h-12 w-12 text-yellow-400" />,
          points: [
            "Verificación KYC/AML automatizada",
            "Monitoreo continuo de transacciones",
            "Alertas en tiempo real ante irregularidades",
            "Generación de reportes regulatorios"
          ]
        }
      ],
      useCases: {
        title: 'Casos de Uso',
        cases: [
          {
            title: 'Asistentes de Gmail Inteligentes',
            description: 'Agentes que categorizan, responden y priorizan emails automáticamente, ahorrando tiempo y mejorando la productividad.',
            image: '/email-assistant.png',
          },
          {
            title: 'Chatbots para Atención al Cliente',
            description: 'Agentes conversacionales que responden consultas 24/7, escalan a agentes humanos cuando es necesario y mejoran con cada interacción.',
            image: '/customer-service-bot.png',
          },
          {
            title: 'Asistentes de Análisis Financiero',
            description: 'Agentes que procesan datos financieros, identifican anomalías y generan reportes automatizados con insights accionables.',
            image: '/financial-analysis.png',
          },
          {
            title: 'Agentes para Automatización de Marketing',
            description: 'Soluciones que optimizan campañas, personalizan mensajes y analizan resultados para maximizar el ROI.',
            image: '/marketing-automation.png',
          }
        ],
      },
      workflow: {
        title: 'Nuestro Proceso',
        steps: [
          {
            title: 'Análisis de Necesidades',
            description: 'Identificamos los desafíos específicos y oportunidades de mejora en tus procesos.'
          },
          {
            title: 'Diseño del Agente',
            description: 'Desarrollamos la arquitectura del agente y definimos sus capacidades y límites.'
          },
          {
            title: 'Entrenamiento e Integración',
            description: 'Entrenamos al agente con tus datos y lo integramos con tus sistemas existentes.'
          },
          {
            title: 'Monitoreo y Mejora Continua',
            description: 'Supervisamos el rendimiento y optimizamos constantemente su funcionamiento.'
          }
        ]
      },
      benefits: {
        title: 'Beneficios Comprobados',
        items: [
          {
            title: "Aumento de Productividad",
            description: "Automatiza tareas repetitivas para que tu equipo se enfoque en lo que realmente importa.",
            value: "40%"
          },
          {
            title: "Atención 24/7",
            description: "Proporciona servicio ininterrumpido a clientes y usuarios en cualquier momento.",
            value: "24/7"
          },
          {
            title: "Reducción de Costos",
            description: "Optimiza recursos y reduce gastos operativos a largo plazo.",
            value: "30%"
          },
          {
            title: "Precisión Mejorada",
            description: "Minimiza errores humanos y garantiza consistencia en los procesos.",
            value: "95%"
          }
        ]
      },
      cta: {
        title: "¿Listo para implementar agentes inteligentes en tu empresa?",
        description: "Agenda una demostración personalizada y descubre cómo nuestros agentes de IA pueden transformar tu negocio.",
        primary: "Solicitar Demo",
        secondary: "Contactar un Especialista"
      }
    },
    en: {
      hero: {
        title: 'Intelligent Agents',
        subtitle: 'Advanced AI Solutions',
        description: 'Automate processes, increase productivity, and improve decision-making with our artificial intelligence agents designed to solve specific business challenges.'
      },
      features: {
        title: 'AI Agents tailored to your business',
        description: 'We develop artificial intelligence solutions that transform the way companies operate and provide service.',
      },
      agentTypes: [
        {
          title: "Virtual Assistants",
          description: "Conversational agents that attend to inquiries and provide 24/7 support to your customers or employees.",
          icon: <MessageSquare className="h-12 w-12 text-cyan-400" />,
          points: [
            "Constant availability for customer service",
            "Personalized contextual responses",
            "Multi-language and scalable capability",
            "Integration with your existing systems"
          ]
        },
        {
          title: "Automation Agents",
          description: "Intelligent systems that automate repetitive tasks and complete workflows to unleash human potential.",
          icon: <Bot className="h-12 w-12 text-purple-400" />,
          points: [
            "High-speed data processing",
            "Automation of administrative tasks",
            "Reduction of human errors",
            "Automated analysis and reports"
          ]
        },
        {
          title: "Predictive Analysis Agents",
          description: "Solutions that process large volumes of data to identify patterns and make actionable predictions.",
          icon: <Cpu className="h-12 w-12 text-green-400" />,
          points: [
            "Customized predictive models",
            "Early trend detection",
            "Data-based process optimization",
            "Actionable insights for your business"
          ]
        },
        {
          title: "Compliance Agents",
          description: "Specialized systems in monitoring and verification to ensure regulatory compliance in regulated sectors.",
          icon: <Shield className="h-12 w-12 text-yellow-400" />,
          points: [
            "Automated KYC/AML verification",
            "Continuous transaction monitoring",
            "Real-time alerts for irregularities",
            "Generation of regulatory reports"
          ]
        }
      ],
      useCases: {
        title: 'Use Cases',
        cases: [
          {
            title: 'Intelligent Gmail Assistants',
            description: 'Agents that automatically categorize, respond to, and prioritize emails, saving time and improving productivity.',
            image: '/email-assistant.png',
          },
          {
            title: 'Customer Service Chatbots',
            description: 'Conversational agents that respond to inquiries 24/7, escalate to human agents when necessary, and improve with each interaction.',
            image: '/customer-service-bot.png',
          },
          {
            title: 'Financial Analysis Assistants',
            description: 'Agents that process financial data, identify anomalies, and generate automated reports with actionable insights.',
            image: '/financial-analysis.png',
          },
          {
            title: 'Marketing Automation Agents',
            description: 'Solutions that optimize campaigns, personalize messages, and analyze results to maximize ROI.',
            image: '/marketing-automation.png',
          }
        ],
      },
      workflow: {
        title: 'Our Process',
        steps: [
          {
            title: 'Needs Analysis',
            description: 'We identify specific challenges and opportunities for improvement in your processes.'
          },
          {
            title: 'Agent Design',
            description: 'We develop the agent architecture and define its capabilities and limits.'
          },
          {
            title: 'Training and Integration',
            description: 'We train the agent with your data and integrate it with your existing systems.'
          },
          {
            title: 'Monitoring and Continuous Improvement',
            description: 'We monitor performance and constantly optimize its operation.'
          }
        ]
      },
      benefits: {
        title: 'Proven Benefits',
        items: [
          {
            title: "Increased Productivity",
            description: "Automate repetitive tasks so your team can focus on what really matters.",
            value: "40%"
          },
          {
            title: "24/7 Attention",
            description: "Provide uninterrupted service to customers and users at any time.",
            value: "24/7"
          },
          {
            title: "Cost Reduction",
            description: "Optimize resources and reduce long-term operational expenses.",
            value: "30%"
          },
          {
            title: "Improved Accuracy",
            description: "Minimize human errors and ensure consistency in processes.",
            value: "95%"
          }
        ]
      },
      cta: {
        title: "Ready to implement intelligent agents in your company?",
        description: "Schedule a personalized demonstration and discover how our AI agents can transform your business.",
        primary: "Request Demo",
        secondary: "Contact a Specialist"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent" />
          
          {/* Elementos gráficos */}
          <div className="absolute top-1/4 right-[15%] animate-pulse">
            <div className="text-cyan-400 opacity-30 text-6xl font-bold">AI</div>
          </div>
          <div className="absolute bottom-1/3 left-[15%] animate-pulse delay-300">
            <div className="text-purple-400 opacity-30 text-6xl font-bold">ML</div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              {t.hero.subtitle}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.hero.title} <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Silver5</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              {t.hero.description}
            </p>
            <div className="mt-10">
              <Link href={calendlyUrl}>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40">
                  {isSpanish ? 'Solicitar Demo' : 'Request Demo'}
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Imagen o mockup de un agente IA */}
          <div className="relative mx-auto max-w-4xl mt-16">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 blur-xl rounded-xl"></div>
            <div className="relative bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center p-6">
                  <Brain className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-xl text-cyan-400 font-semibold">Agentes de Inteligencia Artificial</p>
                  <p className="text-gray-400 mt-2">Automatización, análisis y asistencia inteligente para tu negocio</p>
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
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t.features.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {t.agentTypes.map((feature, index) => (
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
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-[#0A0B14] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.useCases.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {isSpanish ? 'Descubre cómo nuestros agentes de IA están transformando empresas en diferentes sectores' : 'Discover how our AI agents are transforming businesses across different sectors'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.useCases.cases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/30 rounded-xl overflow-hidden group hover:bg-gray-800/50 transition-all duration-300">
                <div className="h-56 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
                    <Brain className="h-12 w-12 text-cyan-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                  <div className="mt-4">
                    <Link href={calendlyUrl} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      <span>{isSpanish ? 'Saber más' : 'Learn more'}</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 relative border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.workflow.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {isSpanish ? 'Implementamos agentes de IA con un enfoque metódico y personalizado' : 'We implement AI agents with a methodical and personalized approach'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.workflow.steps.map((step, index) => (
              <div key={index} className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-cyan-400 text-gray-900 font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href={calendlyUrl}>
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full px-6 py-3 font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40">
                {isSpanish ? 'Consultar sobre nuestro proceso' : 'Inquire about our process'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-[#0A0B14] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.benefits.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {isSpanish ? 'Resultados tangibles que nuestros clientes han experimentado' : 'Tangible results our clients have experienced'}
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
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative border-t border-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-gray-400 text-lg mb-8">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={calendlyUrl}>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 w-full sm:w-auto">
                  {t.cta.primary}
                </Button>
              </Link>
              <Link href="#contacto">
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 w-full sm:w-auto">
                  {t.cta.secondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

