'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../contexts/language-context'
import { WhatsAppAgentForm } from '../components/whatsapp-agent-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { LanguageSwitcher } from '@/components/language-switcher'

// Importamos componentes UI
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Clock,
  Bot,
  Sparkles,
  Users,
  LineChart,
  Repeat,
  Calendar,
  ChevronLeft,
  MoreVertical,
  Send,
  Phone,
  Video,
  Image as ImageIcon,
  Menu,
  X,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Code,
  Shield,
  Box,
  Cpu
} from 'lucide-react'

export default function AgentPage() {
  const router = useRouter()
  const { language } = useLanguage()
  const [visibleMessages, setVisibleMessages] = useState<number>(0)
  const [visibleUseCaseMessages, setVisibleUseCaseMessages] = useState<number>(0)
  const [visibleFaqMessages, setVisibleFaqMessages] = useState<{[key: number]: number}>({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0
  })
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const useCaseChatContainerRef = useRef<HTMLDivElement>(null)
  const faqChatRefs = useRef<{[key: number]: HTMLDivElement | null}>({})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  
  // Definición de tipos para los mensajes
  type BaseMessage = {
    type: string;
    text: string;
    time: string;
  };
  
  type UserMessage = BaseMessage;
  
  type BotMessage = BaseMessage & {
    hasFeatures?: boolean;
    hasCalendars?: boolean;
    hasReminders?: boolean;
    hasCustomization?: boolean;
    hasBusinesses?: boolean;
    hasOptions?: boolean;
    hasCalendar?: boolean;
    hasConfirmation?: boolean;
    isCalendar?: boolean;
    isConfirmation?: boolean;
  };
  
  type MessageType = UserMessage | BotMessage;
  
  // Modificar la definición de faqMessages para incluir los tipos correctos
  const faqMessages: {[key: number]: MessageType[]} = {
    0: [
      { type: 'user', text: '¿Cómo funciona el agente de WhatsApp?', time: '10:30' },
      { type: 'bot', text: 'El agente utiliza IA avanzada para:', time: '10:30', hasFeatures: true }
    ],
    1: [
      { type: 'user', text: '¿Qué calendarios puedo usar?', time: '10:31' },
      { type: 'bot', text: 'Nos integramos con:', time: '10:31', hasCalendars: true }
    ],
    2: [
      { type: 'user', text: '¿Cómo funcionan los recordatorios?', time: '10:32' },
      { type: 'bot', text: 'Te enviaré recordatorios automáticos:', time: '10:32', hasReminders: true }
    ],
    3: [
      { type: 'user', text: '¿Puedo personalizar el proceso de agendamiento?', time: '10:33' },
      { type: 'bot', text: '¡Por supuesto! Puedes configurar:', time: '10:33', hasCustomization: true }
    ],
    4: [
      { type: 'user', text: '¿Es compatible con mi negocio?', time: '10:34' },
      { type: 'bot', text: '¡Sí! Nos adaptamos a diversos negocios:', time: '10:34', hasBusinesses: true }
    ]
  }

  const messages = [
    { type: 'user', text: 'Hola, ¿pueden atenderme ahora?', time: '10:30' },
    { type: 'bot', text: '¡Hola! Por supuesto, estoy aquí para ayudarte 24/7. ¿En qué puedo asistirte?', time: '10:30' },
    { type: 'user', text: 'Quisiera agendar una cita para mañana', time: '10:31' },
    { type: 'bot', isCalendar: true, text: '¡Claro! Aquí tienes los horarios disponibles para mañana:', time: '10:31' },
    { type: 'user', text: 'Me gustaría la cita de las 10:30 AM', time: '10:32' },
    { type: 'bot', isConfirmation: true, text: '¡Perfecto! He agendado tu cita para mañana a las 10:30 AM.', time: '10:32' }
  ]

  const useCaseMessages = [
    { type: 'user', text: '¿Tienen disponibilidad para una cita mañana?', time: '10:30' },
    { type: 'bot', text: '¡Por supuesto! Aquí tienes los horarios disponibles para mañana:', time: '10:30', hasCalendar: true },
    { type: 'user', text: 'Me gustaría el horario de las 11:30 AM', time: '10:31' },
    { type: 'bot', text: '¡Perfecto! He agendado tu cita para mañana a las 11:30 AM.', time: '10:31', hasConfirmation: true },
    { type: 'bot', text: '¿Necesitas algo más? Puedo ayudarte con:', time: '10:32', hasOptions: true }
  ]

  useEffect(() => {
    // Función para mostrar mensajes secuencialmente en la sección hero
    const showNextMessage = () => {
      setVisibleMessages(prev => {
        if (prev < messages.length) {
          return prev + 1
        }
        return 0 // Reiniciar cuando se llega al final
      })
    }

    // Configurar el intervalo para mostrar mensajes
    const interval = setInterval(showNextMessage, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Función para mostrar mensajes secuencialmente en la sección de casos de uso
    const showNextUseCaseMessage = () => {
      setVisibleUseCaseMessages(prev => {
        if (prev < useCaseMessages.length) {
          return prev + 1
        }
        return 0 // Reiniciar cuando se llega al final
      })
    }

    // Configurar el intervalo para mostrar mensajes de casos de uso
    const interval = setInterval(showNextUseCaseMessage, 3500)

    return () => clearInterval(interval)
  }, [])

  // Efecto para el auto-scroll en la sección hero
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [visibleMessages])

  // Efecto para el auto-scroll en la sección de casos de uso
  useEffect(() => {
    if (useCaseChatContainerRef.current) {
      useCaseChatContainerRef.current.scrollTop = useCaseChatContainerRef.current.scrollHeight
    }
  }, [visibleUseCaseMessages])

  // Efecto para mostrar mensajes secuencialmente en la sección FAQ
  useEffect(() => {
    if (activeFaq !== null) {
      const showNextFaqMessage = () => {
        setVisibleFaqMessages(prev => {
          const currentFaqMessages = faqMessages[activeFaq];
          const currentVisibleCount = prev[activeFaq] || 0;
          
          if (currentVisibleCount < currentFaqMessages.length) {
            return {
              ...prev,
              [activeFaq]: currentVisibleCount + 1
            };
          }
          return {
            ...prev,
            [activeFaq]: 0 // Reiniciar para este FAQ específico
          };
        });
      };
      
      // Configurar el intervalo para el FAQ activo - Un poco más rápido para mejor feedback al scroll
      const interval = setInterval(showNextFaqMessage, 2000);
      
      return () => clearInterval(interval);
    }
  }, [activeFaq]);

  // Efecto para detectar cuando un FAQ entra en el viewport y activarlo
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const faqIndex = Number(entry.target.getAttribute('data-faq-index'));
          if (!isNaN(faqIndex)) {
            // Solo establecer el FAQ activo si ha cambiado
            setActiveFaq(prevActiveFaq => 
              prevActiveFaq !== faqIndex ? faqIndex : prevActiveFaq
            );
            
            // Reiniciar la animación si no hay mensajes visibles
            if ((visibleFaqMessages[faqIndex] || 0) === 0) {
              setVisibleFaqMessages(prev => ({
                ...prev,
                [faqIndex]: 1 // Empezar mostrando el primer mensaje
              }));
            }
          }
        } else {
          // Cuando el FAQ sale del viewport, podemos pausar su animación
          const faqIndex = Number(entry.target.getAttribute('data-faq-index'));
          if (!isNaN(faqIndex) && activeFaq === faqIndex) {
            // Opcional: podemos quitar el FAQ activo o dejarlo como está
            // Si lo quitamos, la animación se pausará
            // setActiveFaq(null);
          }
        }
      });
    }, { 
      threshold: 0.3, // Reducir el threshold para activar antes
      rootMargin: '0px 0px -10% 0px' // Activar un poco antes de que esté completamente visible
    });
    
    // Observar todos los chats de FAQ
    document.querySelectorAll('.faq-chat').forEach(chat => {
      observer.observe(chat);
    });
    
    return () => observer.disconnect();
  }, [activeFaq, visibleFaqMessages]);

  // Efecto para el auto-scroll en los chats de FAQ
  useEffect(() => {
    Object.keys(faqChatRefs.current).forEach(key => {
      const numKey = Number(key);
      const ref = faqChatRefs.current[numKey];
      if (ref) {
        ref.scrollTop = ref.scrollHeight;
      }
    });
  }, [visibleFaqMessages]);

  // Añadir efecto para bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  // Añadir efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const handleFormSubmit = () => {
    setTimeout(() => {
      router.push('/confirmation')
    }, 1000)
  }
  
  const translations = {
    es: {
      title: 'Agente Inteligente para WhatsApp',
      subtitle: 'Automatiza las respuestas a tus clientes y libera tiempo valioso',
      description: 'Nuestro asistente virtual responde automáticamente a las preguntas frecuentes de tus clientes en WhatsApp y gestiona citas de forma inteligente, utilizando inteligencia artificial avanzada.',
      ctaButton: 'Solicitar información',
      features: {
        title: 'Beneficios principales',
        list: [
          {
            title: 'Ahorro de tiempo',
            description: 'Automatiza la respuesta a preguntas frecuentes y el agendamiento de citas, liberando tiempo para tareas más importantes',
            icon: Clock,
          },
          {
            title: 'Atención 24/7',
            description: 'Proporciona respuestas instantáneas y permite agendar citas en cualquier momento del día',
            icon: Repeat,
          },
          {
            title: 'Inteligencia Artificial',
            description: 'Utiliza IA avanzada para entender preguntas complejas y gestionar el calendario de forma inteligente',
            icon: Sparkles,
          },
          {
            title: 'Mejora la experiencia',
            description: 'Ofrece un servicio rápido y consistente con confirmación instantánea de citas y recordatorios automáticos',
            icon: Users,
          },
          {
            title: 'Personalizable',
            description: 'Adaptable a las necesidades específicas de tu negocio, base de conocimiento y sistema de calendario',
            icon: Bot,
          },
          {
            title: 'Análisis detallado',
            description: 'Obtén insights sobre consultas frecuentes y patrones de agendamiento para optimizar tu servicio',
            icon: LineChart,
          },
        ],
      },
      use_cases: {
        title: 'Casos de uso',
        subtitle: 'Ideal para negocios que:',
        list: [
          'Reciben un alto volumen de consultas repetitivas por WhatsApp',
          'Necesitan gestionar citas y agendamientos de forma eficiente',
          'Quieren ofrecer servicio al cliente 24/7 sin aumentar costos',
          'Buscan automatizar la confirmación y recordatorios de citas',
          'Necesitan integración con Google Calendar u otros sistemas',
          'Quieren mejorar la experiencia de agendamiento de sus clientes'
        ]
      },
      faq: {
        title: 'Preguntas frecuentes',
        questions: [
          {
            question: '¿Cómo funciona el Agente para WhatsApp?',
            answer: 'Nuestro agente se integra con tu WhatsApp Business y utiliza inteligencia artificial para responder automáticamente a las preguntas frecuentes de tus clientes y gestionar citas, basándose en una base de conocimiento personalizada y tu calendario.'
          },
          {
            question: '¿Con qué sistemas de calendario es compatible?',
            answer: 'El agente es compatible con Google Calendar, Microsoft Outlook, y la mayoría de los sistemas de calendario populares. También podemos integrarlo con tu sistema de citas personalizado.'
          },
          {
            question: '¿Cómo maneja los recordatorios de citas?',
            answer: 'El sistema envía recordatorios automáticos por WhatsApp 24 horas y 30 minutos antes de la cita. Los clientes pueden confirmar o reagendar directamente desde el mensaje.'
          },
          {
            question: '¿Se puede personalizar el proceso de agendamiento?',
            answer: 'Sí, puedes configurar horarios disponibles, duración de citas, tiempo entre citas, y reglas específicas para tu negocio. El agente respetará todas estas configuraciones al agendar citas.'
          },
          {
            question: '¿Es compatible con mi negocio?',
            answer: 'Sí, nuestro agente es adaptable a cualquier tipo de negocio que requiera gestión de citas: consultorios médicos, salones de belleza, restaurantes, servicios profesionales, etc.'
          }
        ]
      },
      testimonials: {
        title: 'Lo que dicen nuestros clientes',
        list: [
          {
            name: 'María González',
            business: 'Centro de Estética',
            quote: 'El agente no solo responde preguntas, sino que gestiona todas nuestras citas. Hemos reducido las cancelaciones en un 60% gracias a los recordatorios automáticos.'
          },
          {
            name: 'Carlos Mendoza',
            business: 'Consultorio Dental',
            quote: 'La integración con nuestro calendario es perfecta. Los pacientes pueden agendar citas 24/7 y el sistema mantiene todo organizado automáticamente.'
          },
          {
            name: 'Laura Pérez',
            business: 'Academia de idiomas',
            quote: 'Los estudiantes adoran poder agendar sus clases directamente por WhatsApp. El proceso es tan simple que nuestras conversiones aumentaron significativamente.'
          }
        ]
      },
      contact: {
        title: 'Solicita información',
        text: 'Completa el formulario y te contactaremos para mostrarte cómo nuestro agente puede ayudar a automatizar tu negocio.'
      }
    },
    en: {
      title: 'Intelligent WhatsApp Agent',
      subtitle: 'Automate customer responses and appointment scheduling',
      description: 'Our virtual assistant automatically responds to your customers\' frequent questions on WhatsApp and intelligently manages appointments using advanced artificial intelligence.',
      ctaButton: 'Request information',
      features: {
        title: 'Key benefits',
        list: [
          {
            title: 'Time saving',
            description: 'Automate responses to frequent questions and appointment scheduling, freeing up time for more important tasks',
            icon: Clock,
          },
          {
            title: '24/7 Service',
            description: 'Provides instant responses and allows appointment scheduling at any time of day',
            icon: Repeat,
          },
          {
            title: 'Artificial Intelligence',
            description: 'Uses advanced AI to understand complex questions and manage calendar intelligently',
            icon: Sparkles,
          },
          {
            title: 'Improved experience',
            description: 'Offers fast and consistent service with instant appointment confirmation and automatic reminders',
            icon: Users,
          },
          {
            title: 'Customizable',
            description: 'Adaptable to your business needs, knowledge base, and calendar system',
            icon: Bot,
          },
          {
            title: 'Detailed analytics',
            description: 'Gain insights about frequent queries and scheduling patterns to optimize your service',
            icon: LineChart,
          },
        ],
      },
      use_cases: {
        title: 'Use cases',
        subtitle: 'Ideal for businesses that:',
        list: [
          'Receive a high volume of repetitive queries via WhatsApp',
          'Need to manage appointments and scheduling efficiently',
          'Want to offer 24/7 customer service without increasing costs',
          'Need to automate appointment confirmation and reminders',
          'Require integration with Google Calendar or other systems',
          'Want to improve their customers\' scheduling experience'
        ]
      },
      faq: {
        title: 'Frequently asked questions',
        questions: [
          {
            question: 'How does the WhatsApp Agent work?',
            answer: 'Our agent integrates with your WhatsApp Business and uses artificial intelligence to automatically respond to your customers\' frequent questions and manage appointments, based on a customized knowledge base and your calendar.'
          },
          {
            question: 'Which calendar systems is it compatible with?',
            answer: 'The agent is compatible with Google Calendar, Microsoft Outlook, and most popular calendar systems. We can also integrate it with your custom appointment system.'
          },
          {
            question: 'How does it handle appointment reminders?',
            answer: 'The system sends automatic WhatsApp reminders 24 hours and 30 minutes before the appointment. Clients can confirm or reschedule directly from the message.'
          },
          {
            question: 'Can the scheduling process be customized?',
            answer: 'Yes, you can configure available times, appointment duration, time between appointments, and specific rules for your business. The agent will respect all these settings when scheduling appointments.'
          },
          {
            question: 'Is it compatible with my business?',
            answer: 'Yes, our agent is adaptable to any type of business that requires appointment management: medical offices, beauty salons, restaurants, professional services, etc.'
          }
        ]
      },
      testimonials: {
        title: 'What our customers say',
        list: [
          {
            name: 'Maria Gonzalez',
            business: 'Beauty Center',
            quote: 'The agent not only answers questions but manages all our appointments. We\'ve reduced cancellations by 60% thanks to automatic reminders.'
          },
          {
            name: 'Carlos Mendoza',
            business: 'Dental Office',
            quote: 'The integration with our calendar is perfect. Patients can schedule appointments 24/7 and the system keeps everything automatically organized.'
          },
          {
            name: 'Laura Perez',
            business: 'Language Academy',
            quote: 'Students love being able to schedule their classes directly through WhatsApp. The process is so simple that our conversions increased significantly.'
          }
        ]
      },
      contact: {
        title: 'Request information',
        text: 'Complete the form and we will contact you to show you how our agent can help automate your business.'
      }
    }
  }
  
  const t = translations[language as keyof typeof translations]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    const offset = 100 // Ajuste para el navbar fijo
    if (section) {
      const topPos = section.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      })
    }
  }

  // Efecto para iniciar animación de FAQs visibles al cargar la página
  useEffect(() => {
    // Dar un pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      // Verificar qué FAQs están visibles al cargar
      const checkInitialVisibility = () => {
        document.querySelectorAll('.faq-chat').forEach(chat => {
          const rect = chat.getBoundingClientRect();
          const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
          
          if (isVisible) {
            const faqIndex = Number(chat.getAttribute('data-faq-index'));
            if (!isNaN(faqIndex)) {
              setActiveFaq(faqIndex);
              // Iniciar con el primer mensaje
              setVisibleFaqMessages(prev => ({
                ...prev,
                [faqIndex]: 1
              }));
            }
          }
        });
      };
      
      checkInitialVisibility();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Overlay para el menú móvil */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navbar - Diseño mejorado */}
      <nav className={`border-b transition-all duration-300 sticky top-0 z-50 ${
        scrolled 
          ? "border-gray-800/60 bg-[#0A0B14]/95 backdrop-blur-md shadow-lg" 
          : "border-gray-800/20 bg-[#0A0B14]/80 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative overflow-hidden rounded-full p-1 group-hover:bg-cyan-400/10 transition-all duration-300">
                  <Image src="/logo-s5-w.png" alt="Silver5 AI" width={38} height={38} priority className="transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Silver5</span>
              </Link>
            </div>

            {/* Desktop Navigation - Mejorado */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { href: "features", label: "Beneficios", icon: <CheckCircle2 className="h-4 w-4" /> },
                { href: "use_cases", label: "Casos de Uso", icon: <Users className="h-4 w-4" /> },
                { href: "testimonials", label: "Testimonios", icon: <MessageSquare className="h-4 w-4" /> },
                { href: "faq", label: "FAQ", icon: <Bot className="h-4 w-4" /> },
                { href: "contactForm", label: "Contacto", icon: <Mail className="h-4 w-4" /> }
              ].map((item, index) => (
                <button 
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group flex items-center space-x-2"
                >
                  <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
              <div className="ml-2">
                <LanguageSwitcher />
              </div>
              <Button 
                onClick={() => scrollToSection('contactForm')}
                className="ml-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-medium rounded-full px-4 py-2 text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] flex items-center"
              >
                Solicitar Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Navigation Button - Mejorado */}
            <div className="flex md:hidden items-center space-x-4">
              <Button 
                onClick={() => {
                  document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-medium rounded-full px-4 py-2 text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] flex items-center"
              >
                Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <LanguageSwitcher />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  mobileMenuOpen 
                    ? "bg-cyan-400/20 text-cyan-400" 
                    : "bg-gray-800/70 text-gray-400 hover:bg-gray-700 hover:text-cyan-400"
                }`}
                aria-label="Menú principal"
              >
                <div className="relative">
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </div>
                <span className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
                  mobileMenuOpen 
                    ? "border-cyan-400/50" 
                    : "border-gray-700"
                }`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Mejorado */}
        <div 
          className={`md:hidden fixed top-16 left-0 right-0 z-50 transform transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="mx-4 mt-2 rounded-xl overflow-hidden bg-gray-900/95 backdrop-blur-md border border-gray-800/50 shadow-2xl">
            <div className="px-3 pt-3 pb-4 space-y-1">
              {[
                { href: "features", label: "Beneficios", icon: <CheckCircle2 className="h-4 w-4" /> },
                { href: "use_cases", label: "Casos de Uso", icon: <Users className="h-4 w-4" /> },
                { href: "testimonials", label: "Testimonios", icon: <MessageSquare className="h-4 w-4" /> },
                { href: "faq", label: "FAQ", icon: <Bot className="h-4 w-4" /> },
                { href: "contactForm", label: "Contacto", icon: <Mail className="h-4 w-4" /> }
              ].map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/80 transition-all duration-200"
                  onClick={() => {
                    scrollToSection(item.href)
                    setMobileMenuOpen(false)
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center mr-3">
                    <span className="text-cyan-400">{item.icon}</span>
                  </div>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 z-0"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full backdrop-blur-sm mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Silver5 AI
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {t.title}
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl">
                {t.subtitle}
              </p>
              
              <p className="text-gray-400">
                {t.description}
              </p>
              
              <div className="pt-4 space-y-4">
                <Button 
                  onClick={() => {
                    document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-medium rounded-lg px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  {t.ctaButton}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-gray-400 text-sm">¡Comienza a automatizar tu atención al cliente hoy!</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative bg-gradient-to-r from-cyan-950 to-blue-950 p-1 rounded-2xl shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-30 blur-sm"></div>
                <div className="relative bg-[#111B21] rounded-xl overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-[#202C33] p-3 flex items-center">
                    <ChevronLeft className="h-6 w-6 text-gray-300 mr-4" />
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 mr-3 relative overflow-hidden">
                      <Bot className="h-6 w-6 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">Silver5 AI Assistant</h4>
                      <p className="text-gray-400 text-sm">en línea</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Video className="h-5 w-5 text-gray-300" />
                      <Phone className="h-5 w-5 text-gray-300" />
                      <MoreVertical className="h-5 w-5 text-gray-300" />
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div 
                    ref={chatContainerRef} 
                    className="bg-[#0B141A] p-4 h-[400px] overflow-hidden space-y-4 chat-container pointer-events-none select-none"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50l-25-25L0 50l25 25 25-25zm0 0l25 25 25-25-25-25-25 25z' fill='%23FFFFFF' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                      backgroundSize: '400px 400px'
                    }}></div>

                    {messages.slice(0, visibleMessages).map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : ''} mb-4 animate-${message.type === 'user' ? 'fade-left' : 'fade-right'}`}>
                        <div className={`whatsapp-message ${message.type === 'user' ? 'sent bg-[#005C4B]' : 'received bg-[#202C33]'} text-white p-3 rounded-lg max-w-[80%] shadow space-y-3`}>
                          <p>{message.text}</p>
                          
                          {message.isCalendar && (
                            <div className="bg-[#111B21] p-3 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <Calendar className="h-5 w-5 text-cyan-400" />
                                <span className="text-cyan-400 text-sm">Horarios Disponibles</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="calendar-button bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">09:00 AM</div>
                                <div className="calendar-button bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">10:30 AM</div>
                                <div className="calendar-button bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">02:00 PM</div>
                                <div className="calendar-button bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">04:30 PM</div>
                              </div>
                            </div>
                          )}
                          
                          {message.isConfirmation && (
                            <div className="bg-[#111B21] p-3 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span className="text-green-500">Cita Confirmada</span>
                              </div>
                              <div className="mt-2 text-sm text-gray-300">
                                <p>📅 Fecha: Mañana, 10:30 AM</p>
                                <p>📍 La cita ha sido agregada a tu calendario</p>
                                <p>📱 Recibirás un recordatorio 30 min antes</p>
                              </div>
                            </div>
                          )}
                          
                          <span className="text-xs text-gray-400 flex justify-end mt-1">{message.time}</span>
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator - Show only when not all messages are visible */}
                    {visibleMessages < messages.length && (
                      <div className="flex mb-4 animate-fade-right">
                        <div className="bg-[#202C33] text-white p-3 rounded-lg shadow">
                          <div className="typing-animation">
                            <span className="typing-dot"></span>
                            <span className="typing-dot"></span>
                            <span className="typing-dot"></span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Chat Input */}
                  <div className="bg-[#202C33] p-3 flex items-center space-x-2">
                    <button className="p-2 text-gray-300">
                      <ImageIcon className="h-6 w-6" />
                    </button>
                    <div className="message-input flex-1 bg-[#2A3942] rounded-lg px-4 py-2 text-gray-300">
                      Escribe un mensaje...
                    </div>
                    <button className="send-button p-2 text-cyan-400">
                      <Send className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section id="features" className="relative py-20 px-4 bg-gradient-to-b from-[#0A0B14] to-[#101224] overflow-hidden">
        {/* Gradientes y elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 z-0"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {t.features.title}
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.list.map((feature, index) => (
              <div 
                key={index} 
                className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300 group"
              >
                {/* Gradiente hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10">
                  {/* Ilustración específica para cada beneficio */}
                  <div className="mb-6">
                    {index === 0 && (
                      <div className="relative h-32 w-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg p-4">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <Clock className="h-12 w-12 text-cyan-400 animate-float" />
                            <div className="absolute -top-2 -right-2">
                              <Sparkles className="h-6 w-6 text-blue-400 animate-float-delayed" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2">
                          <CheckCircle2 className="h-8 w-8 text-green-400 opacity-50" />
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="relative h-32 w-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg p-4">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <MessageSquare className="h-12 w-12 text-cyan-400 animate-float" />
                              <div className="absolute -top-1 -right-1">
                                <span className="flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                                </span>
                              </div>
                            </div>
                            <Clock className="h-10 w-10 text-blue-400 animate-float-delayed" />
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="relative h-32 w-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg p-4">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <Bot className="h-12 w-12 text-cyan-400 animate-float" />
                            <div className="absolute -top-2 -right-2">
                              <Sparkles className="h-6 w-6 text-blue-400 animate-float-delayed" />
                            </div>
                            <div className="absolute -bottom-2 -left-2">
                              <Sparkles className="h-6 w-6 text-cyan-400 animate-float" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 3 && (
                      <div className="relative h-32 w-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg p-4">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="flex items-center space-x-3">
                            <Users className="h-12 w-12 text-cyan-400 animate-float" />
                            <div className="flex flex-col items-center">
                              <ArrowRight className="h-6 w-6 text-blue-400 animate-float-delayed" />
                              <CheckCircle2 className="h-6 w-6 text-green-400 animate-float" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 4 && (
                      <div className="relative h-32 w-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg p-4">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="grid grid-cols-2 gap-3">
                            <Calendar className="h-8 w-8 text-cyan-400 animate-float" />
                            <MessageSquare className="h-8 w-8 text-blue-400 animate-float-delayed" />
                            <Clock className="h-8 w-8 text-blue-400 animate-float" />
                            <Bot className="h-8 w-8 text-cyan-400 animate-float-delayed" />
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 5 && (
                      <div className="relative h-32 w-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg p-4">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <LineChart className="h-12 w-12 text-cyan-400 animate-float" />
                            <div className="absolute -top-2 right-0">
                              <ArrowRight className="h-6 w-6 text-green-400 rotate-45 animate-float-delayed" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full p-3 inline-block mb-4 group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
                  {/* Después de Features Section - Agregar CTA */}
      <div className="text-center mt-12">
        <Button 
          onClick={() => {
            document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-medium rounded-lg px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
        >
          Automatiza tu WhatsApp
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
        </div>

      
      </section>
      
      {/* Use Cases con ilustración de chat */}
      <section id="use_cases" className="relative py-20 px-4 bg-[#101224] overflow-hidden">
        {/* Gradientes y elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="text-center lg:text-left mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {t.use_cases.title}
                  </span>
                </h2>
                <p className="text-xl text-gray-300">{t.use_cases.subtitle}</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8">
                <div className="space-y-6">
                  {t.use_cases.list.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all duration-300">
                        <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                      </div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Ilustración de chat animada (similar a hero section) */}
            <div className="w-full lg:w-1/2">
              <div className="relative bg-gradient-to-r from-cyan-950 to-blue-950 p-1 rounded-2xl shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-30 blur-sm"></div>
                <div className="relative bg-[#111B21] rounded-xl overflow-hidden">
                  {/* Chat Header Simplificado */}
                  <div className="bg-[#202C33] p-4 flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                      <Bot className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-white font-medium">Asistente IA</h4>
                      <p className="text-cyan-400 text-sm">Siempre disponible</p>
                    </div>
                  </div>

                  {/* Chat Messages con animación secuencial (como en hero) */}
                  <div 
                    ref={useCaseChatContainerRef}
                    className="bg-[#0B141A] p-4 h-[350px] overflow-hidden space-y-4 chat-container pointer-events-none select-none"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50l-25-25L0 50l25 25 25-25zm0 0l25 25 25-25-25-25-25 25z' fill='%23FFFFFF' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                      backgroundSize: '400px 400px'
                    }}></div>

                    {useCaseMessages.slice(0, visibleUseCaseMessages).map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : ''} mb-4 animate-${message.type === 'user' ? 'fade-left' : 'fade-right'}`}>
                        <div className={`whatsapp-message ${message.type === 'user' ? 'sent bg-[#005C4B]' : 'received bg-[#202C33]'} text-white p-3 rounded-lg max-w-[80%] shadow space-y-3`}>
                          <p>{message.text}</p>
                          
                          {message.hasCalendar && (
                            <div className="bg-[#111B21] p-3 rounded-lg mt-2">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">09:00 AM</div>
                                <div className="bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">11:30 AM</div>
                                <div className="bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">02:00 PM</div>
                                <div className="bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">04:30 PM</div>
                              </div>
                            </div>
                          )}
                          
                          {message.hasConfirmation && (
                            <div className="bg-[#111B21] p-3 rounded-lg mt-2">
                              <div className="flex items-center space-x-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span className="text-green-500">Cita Confirmada</span>
                              </div>
                              <div className="mt-2 text-sm text-gray-300">
                                <p>📅 Fecha: Mañana, 11:30 AM</p>
                                <p>📍 La cita ha sido agregada a tu calendario</p>
                                <p>📱 Recibirás recordatorios:</p>
                                <p className="ml-4">• 24 horas antes</p>
                                <p className="ml-4">• 30 minutos antes</p>
                              </div>
                            </div>
                          )}

                          {message.hasOptions && (
                            <div className="bg-[#111B21] p-3 rounded-lg mt-2">
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center space-x-2">
                                  <Calendar className="h-4 w-4 text-cyan-400" />
                                  <span>Reagendar cita</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                  <MessageSquare className="h-4 w-4 text-cyan-400" />
                                  <span>Consultar servicios</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                  <Clock className="h-4 w-4 text-cyan-400" />
                                  <span>Horarios disponibles</span>
                                </li>
                              </ul>
                            </div>
                          )}
                          
                          <span className="text-xs text-gray-400 flex justify-end mt-1">{message.time}</span>
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator - Show only when not all messages are visible */}
                    {visibleUseCaseMessages < useCaseMessages.length && (
                      <div className="flex mb-4 animate-fade-right">
                        <div className="bg-[#202C33] text-white p-3 rounded-lg shadow">
                          <div className="typing-animation">
                            <span className="typing-dot"></span>
                            <span className="typing-dot"></span>
                            <span className="typing-dot"></span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Chat Input */}
                  <div className="bg-[#202C33] p-3 flex items-center space-x-2">
                    <button className="p-2 text-gray-300">
                      <ImageIcon className="h-6 w-6" />
                    </button>
                    <div className="message-input flex-1 bg-[#2A3942] rounded-lg px-4 py-2 text-gray-300">
                      Escribe un mensaje...
                    </div>
                    <button className="send-button p-2 text-cyan-400">
                      <Send className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button 
             onClick={() => {
              document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })
            }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-medium rounded-lg px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
            >
              Mejora la Experiencia de tus Clientes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>



      {/* Testimonials con efectos mejorados */}
      <section id="testimonials" className="relative py-20 px-4 bg-gradient-to-b from-[#101224] to-[#0A0B14] overflow-hidden">
        {/* Gradientes y elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 z-0"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {t.testimonials.title}
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.list.map((testimonial, index) => (
              <div 
                key={index} 
                className="group bg-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 relative hover:border-cyan-400/30 transition-all duration-500"
              >
                {/* Gradiente hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                {/* Quote icon con gradiente */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <span className="text-2xl text-cyan-400">"</span>
                </div>
                
                <div className="relative z-10">
                  <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-cyan-400 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-cyan-400">{testimonial.business}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
        <Button 
          onClick={() => {
            document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-medium rounded-lg px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
        >
          Únete a Nuestros Casos de Éxito
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
        </div>
              {/* Después de Testimonials Section - Agregar CTA */}

      </section>



      {/* FAQ con ilustraciones de chat */}
      <section id="faq" className="relative py-20 px-4 bg-[#0A0B14] overflow-hidden">
        {/* Gradientes y elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center lg:text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {t.faq.title}
              </span>
            </h2>
          </div>
          
          <div className="space-y-12">
            {t.faq.questions.map((faq, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Pregunta y respuesta */}
                <div className="w-full lg:w-1/2">
                  <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </div>
                
                {/* Chat ilustrativo animado */}
                <div className="w-full lg:w-1/2">
                  <div 
                    className="relative bg-gradient-to-r from-cyan-950 to-blue-950 p-1 rounded-2xl shadow-2xl faq-chat scroll-trigger-animation"
                    data-faq-index={index}
                    data-animate-on-scroll="true"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-30 blur-sm"></div>
                    <div className="relative bg-[#111B21] rounded-xl overflow-hidden">
                      {/* Chat Header */}
                      <div className="bg-[#202C33] p-4 flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                          <Bot className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-white font-medium">Silver5 AI Assistant</h4>
                          <p className="text-cyan-400 text-sm">en línea</p>
                        </div>
                      </div>

                      {/* Chat Messages con animación */}
                      <div 
                        className="bg-[#0B141A] p-4 space-y-4 h-[300px] overflow-hidden pointer-events-none select-none"
                        ref={(el) => {
                          faqChatRefs.current[index] = el;
                          return undefined;
                        }}
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5" style={{ 
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50l-25-25L0 50l25 25 25-25zm0 0l25 25 25-25-25-25-25 25z' fill='%23FFFFFF' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                          backgroundSize: '400px 400px'
                        }}></div>

                        {/* Mensajes animados */}
                        {(faqMessages[index as keyof typeof faqMessages] || []).slice(0, visibleFaqMessages[index] || 0).map((message, msgIndex) => {
                          // Type guard para las propiedades opcionales
                          const botMessage = message as BotMessage;
                          
                          return (
                          <div key={msgIndex} className={`flex ${message.type === 'user' ? 'justify-end' : ''} mb-4 animate-${message.type === 'user' ? 'fade-left' : 'fade-right'}`}>
                            <div className={`whatsapp-message ${message.type === 'user' ? 'sent bg-[#005C4B]' : 'received bg-[#202C33]'} text-white p-3 rounded-lg max-w-[80%] shadow space-y-3`}>
                              <p>{message.text}</p>
                              
                              {botMessage.hasFeatures && (
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center">
                                    <CheckCircle2 className="h-4 w-4 text-cyan-400 mr-2" />
                                    <span>Responder preguntas automáticamente</span>
                                  </li>
                                  <li className="flex items-center">
                                    <CheckCircle2 className="h-4 w-4 text-cyan-400 mr-2" />
                                    <span>Gestionar tu calendario</span>
                                  </li>
                                  <li className="flex items-center">
                                    <CheckCircle2 className="h-4 w-4 text-cyan-400 mr-2" />
                                    <span>Personalizar respuestas</span>
                                  </li>
                                </ul>
                              )}

                              {botMessage.hasCalendars && (
                                <div className="space-y-2">
                                  <div className="grid grid-cols-2 gap-2 mt-2">
                                    <div className="calendar-button bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm flex items-center">
                                      <Calendar className="h-4 w-4 mr-2" />
                                      Google Calendar
                                    </div>
                                    <div className="calendar-button bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm flex items-center">
                                      <Calendar className="h-4 w-4 mr-2" />
                                      Outlook
                                    </div>
                                    <div className="calendar-button bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm flex items-center">
                                      <Calendar className="h-4 w-4 mr-2" />
                                      iCal
                                    </div>
                                    <div className="calendar-button bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm flex items-center">
                                      <Calendar className="h-4 w-4 mr-2" />
                                      Personalizado
                                    </div>
                                  </div>
                                </div>
                              )}

                              {botMessage.hasReminders && (
                                <div className="bg-[#111B21] p-3 rounded-lg mt-2">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Clock className="h-5 w-5 text-cyan-400" />
                                    <span className="text-cyan-400">Recordatorios</span>
                                  </div>
                                  <ul className="space-y-2 text-sm">
                                    <li>📅 24 horas antes</li>
                                    <li>⏰ 30 minutos antes</li>
                                    <li>✅ Opción de confirmar</li>
                                    <li>🔄 Opción de reagendar</li>
                                  </ul>
                                </div>
                              )}

                              {botMessage.hasCustomization && (
                                <div className="bg-[#111B21] p-3 rounded-lg mt-2">
                                  <div className="space-y-2">
                                    <div className="flex items-center">
                                      <Clock className="h-4 w-4 text-cyan-400 mr-2" />
                                      <span>Duración de citas</span>
                                    </div>
                                    <div className="flex items-center">
                                      <Calendar className="h-4 w-4 text-cyan-400 mr-2" />
                                      <span>Horarios disponibles</span>
                                    </div>
                                    <div className="flex items-center">
                                      <MessageSquare className="h-4 w-4 text-cyan-400 mr-2" />
                                      <span>Mensajes personalizados</span>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {botMessage.hasBusinesses && (
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                  <div className="bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">
                                    🏥 Consultorios
                                  </div>
                                  <div className="bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">
                                    💇‍♀️ Salones
                                  </div>
                                  <div className="bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">
                                    🍽️ Restaurantes
                                  </div>
                                  <div className="bg-cyan-500/20 text-cyan-400 p-2 rounded text-sm">
                                    👔 Servicios
                                  </div>
                                </div>
                              )}
                              
                              <span className="text-xs text-gray-400 flex justify-end mt-1">{message.time}</span>
                            </div>
                          </div>
                          );
                        })}
                        
                        {/* Typing Indicator - Show only when not all messages are visible */}
                        {(visibleFaqMessages[index] || 0) < (faqMessages[index as keyof typeof faqMessages] || []).length && activeFaq === index && (
                          <div className="flex mb-4 animate-fade-right">
                            <div className="bg-[#202C33] text-white p-3 rounded-lg shadow">
                              <div className="typing-animation">
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Chat Input */}
                      <div className="bg-[#202C33] p-3 flex items-center space-x-2">
                        <button className="p-2 text-gray-300">
                          <ImageIcon className="h-6 w-6" />
                        </button>
                        <div className="message-input flex-1 bg-[#2A3942] rounded-lg px-4 py-2 text-gray-300">
                          Escribe un mensaje...
                        </div>
                        <button className="send-button p-2 text-cyan-400">
                          <Send className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Mostrar siempre el formulario */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0B14] to-[#101224]" id="contactForm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {t.contact.title}
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">{t.contact.text}</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <WhatsAppAgentForm onSubmit={handleFormSubmit} />
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
                Automatización inteligente para WhatsApp Business. Mejora la atención al cliente y optimiza la gestión de citas con IA.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/silver5ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com/company/silver5ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com/silver5ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Columna 2: Características */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Características
              </h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center w-full text-left"
                  >
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    Ahorro de Tiempo
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center w-full text-left"
                  >
                    <Repeat className="w-4 h-4 mr-2 text-cyan-400" />
                    Atención 24/7
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center w-full text-left"
                  >
                    <Bot className="w-4 h-4 mr-2 text-cyan-400" />
                    IA Avanzada
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center w-full text-left"
                  >
                    <LineChart className="w-4 h-4 mr-2 text-cyan-400" />
                    Análisis Detallado
                  </button>
                </li>
              </ul>
            </div>

            {/* Columna 3: Recursos */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Recursos
              </h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('use_cases')}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center w-full text-left"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2 text-cyan-400" />
                    Casos de Uso
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center w-full text-left"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 text-cyan-400" />
                    Testimonios
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center w-full text-left"
                  >
                    <Bot className="w-4 h-4 mr-2 text-cyan-400" />
                    Preguntas Frecuentes
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contactForm')}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center w-full text-left"
                  >
                    <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contacto
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
                <li>
                  <Button 
                    onClick={() => {
                      document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-gray-900 bg-cyan-400 hover:bg-cyan-500 transition-colors duration-200"
                  >
                    Solicitar Demostración
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </li>
                <li>
                  <p className="text-sm text-gray-400 mt-2">
                    Respuesta garantizada en menos de 24 horas
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Silver5 AI. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <Link 
                  href="/privacidad" 
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                >
                  Política de Privacidad
                </Link>
                <Link 
                  href="/terminos" 
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                >
                  Términos de Servicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 