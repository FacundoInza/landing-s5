'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bot, Shield, Cpu, Code, Mail, MapPin, Instagram, Linkedin, MessageSquare, ClipboardList, Users, Brain, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/app/contexts/language-context'

interface FooterProps {
  /** URL de Calendly personalizada */
  calendlyUrl?: string
}

export function Footer({ calendlyUrl = 'https://calendly.com/silver-5-ai/silver-5-p2p' }: FooterProps) {
  const { language } = useLanguage()

  // Traducciones
  const translations = {
    es: {
      company: {
        description: 'Soluciones tecnológicas especializadas para el sector financiero y criptomonedas.'
      },
      quickLinks: {
        title: 'Enlaces Rápidos',
        services: 'Servicios',
        p2pManager: 'P2P Manager',
        contact: 'Contacto',
        aboutUs: 'Sobre Nosotros'
      },
      p2pModules: {
        title: 'P2P Manager',
        chats: 'Chats Centralizados',
        bot: 'Bot de Posicionamiento',
        orders: 'Gestión de Órdenes',
        clients: 'Gestión de Clientes (KYC)',
        ai: 'Agente IA'
      },
      services: {
        title: 'Servicios',
        p2pBinance: 'Bot P2P Binance',
        webDevelopment: 'Desarrollo Web',
        compliance: 'Compliance',
        automation: 'Automatización'
      },
      contact: {
        title: 'Contacto',
        email: 'office@silver5ai.com',
        location: 'Buenos Aires, Argentina',
        seeDemo: 'Ver Demo'
      },
      footer: {
        copyright: 'Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio'
      }
    },
    en: {
      company: {
        description: 'Specialized technology solutions for the financial and cryptocurrency sector.'
      },
      quickLinks: {
        title: 'Quick Links',
        services: 'Services',
        p2pBot: 'P2P Bot',
        p2pManager: 'P2P Manager',
        contact: 'Contact',
        aboutUs: 'About Us'
      },
      p2pModules: {
        title: 'P2P Manager',
        chats: 'Centralized Chats',
        bot: 'Positioning Bot',
        orders: 'Order Management',
        clients: 'Client Management (KYC)',
        ai: 'AI Agent'
      },
      services: {
        title: 'Services',
        p2pBinance: 'P2P Binance Bot',
        webDevelopment: 'Web Development',
        compliance: 'Compliance',
        automation: 'Automation'
      },
      contact: {
        title: 'Contact',
        email: 'office@silver5ai.com',
        location: 'Buenos Aires, Argentina',
        seeDemo: 'See Demo'
      },
      footer: {
        copyright: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    }
  }

  const t = translations[language as keyof typeof translations]

  return (
    <footer className="bg-gradient-to-b from-silver5-dark via-gray-900/95 to-gray-900 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Columna 1: Información de la empresa */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative overflow-hidden rounded-full p-1">
                <Image src="/logo-s5-w.png" alt="Silver5 AI" width={32} height={32} className="transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Silver5</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.company.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/silver5ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-silver5-cyan-400 hover:text-gray-900 hover:border-silver5-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/silver5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-silver5-cyan-400 hover:text-gray-900 hover:border-silver5-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center">
              <div className="w-2 h-2 rounded-full bg-silver5-cyan-400 mr-2"></div>
              {t.quickLinks.title}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#servicios" 
                  className="text-gray-400 hover:text-silver5-cyan-400 transition-colors duration-200 flex items-center group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-silver5-cyan-400/50 group-hover:bg-silver5-cyan-400 mr-3 transition-colors duration-200"></div>
                  <span className="text-sm">{t.quickLinks.services}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/p2p-manager" 
                  className="text-gray-400 hover:text-silver5-cyan-400 transition-colors duration-200 flex items-center group"
                >
                  <Bot className="w-4 h-4 mr-3 text-silver5-orders-400/70 group-hover:text-silver5-orders-400 transition-colors duration-200" />
                  <span className="text-sm">{t.quickLinks.p2pManager}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#contacto" 
                  className="text-gray-400 hover:text-silver5-cyan-400 transition-colors duration-200 flex items-center group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-silver5-cyan-400/50 group-hover:bg-silver5-cyan-400 mr-3 transition-colors duration-200"></div>
                  <span className="text-sm">{t.quickLinks.contact}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#sobre-nosotros" 
                  className="text-gray-400 hover:text-silver5-cyan-400 transition-colors duration-200 flex items-center group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-silver5-cyan-400/50 group-hover:bg-silver5-cyan-400 mr-3 transition-colors duration-200"></div>
                  <span className="text-sm">{t.quickLinks.aboutUs}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Módulos P2P Manager */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center">
              <div className="w-2 h-2 rounded-full bg-silver5-orders-400 mr-2"></div>
              {t.p2pModules.title}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/p2p-manager/chats-centralizados" 
                  className="text-gray-400 hover:text-silver5-chats transition-colors duration-200 flex items-center group"
                >
                  <MessageSquare className="w-4 h-4 mr-3 text-silver5-chats/70 group-hover:text-silver5-chats transition-colors duration-200" />
                  <span className="text-sm">{t.p2pModules.chats}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/p2p-manager/bot-posicionamiento" 
                  className="text-gray-400 hover:text-silver5-bot transition-colors duration-200 flex items-center group"
                >
                  <Bot className="w-4 h-4 mr-3 text-silver5-bot/70 group-hover:text-silver5-bot transition-colors duration-200" />
                  <span className="text-sm">{t.p2pModules.bot}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/p2p-manager/gestion-ordenes" 
                  className="text-gray-400 hover:text-silver5-orders transition-colors duration-200 flex items-center group"
                >
                  <ClipboardList className="w-4 h-4 mr-3 text-silver5-orders/70 group-hover:text-silver5-orders transition-colors duration-200" />
                  <span className="text-sm">{t.p2pModules.orders}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/p2p-manager/gestion-clientes" 
                  className="text-gray-400 hover:text-silver5-kyc transition-colors duration-200 flex items-center group"
                >
                  <Users className="w-4 h-4 mr-3 text-silver5-kyc/70 group-hover:text-silver5-kyc transition-colors duration-200" />
                  <span className="text-sm">{t.p2pModules.clients}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/p2p-manager/agente-ia" 
                  className="text-gray-400 hover:text-silver5-ai transition-colors duration-200 flex items-center group"
                >
                  <Brain className="w-4 h-4 mr-3 text-silver5-ai/70 group-hover:text-silver5-ai transition-colors duration-200" />
                  <span className="text-sm">{t.p2pModules.ai}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center">
              <div className="w-2 h-2 rounded-full bg-silver5-cyan-400 mr-2"></div>
              {t.contact.title}
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`mailto:${t.contact.email}`}
                  className="text-gray-400 hover:text-silver5-cyan-400 transition-colors duration-200 flex items-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center mr-3 group-hover:bg-silver5-cyan-400/10 group-hover:border-silver5-cyan-400/30 transition-all duration-200">
                    <Mail className="w-4 h-4 text-silver5-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Email</div>
                    <div className="text-sm">{t.contact.email}</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="text-gray-400 flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center mr-3">
                    <MapPin className="w-4 h-4 text-silver5-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Ubicación</div>
                    <div className="text-sm">{t.contact.location}</div>
                  </div>
                </div>
              </li>
              <li className="pt-2">
                <Link 
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-gray-900 bg-gradient-to-r from-silver5-cyan-400 to-silver5-cyan-500 hover:from-silver5-cyan-500 hover:to-silver5-cyan-600 transition-all duration-200 shadow-lg shadow-silver5-cyan-400/20 hover:shadow-silver5-cyan-400/40 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {t.contact.seeDemo}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador con gradiente */}
        <div className="relative mt-12 pt-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              <span className="mr-2">©</span>
              <span>{new Date().getFullYear()}</span>
              <span className="mx-2 text-silver5-cyan-400">•</span>
              <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Silver5 AI</span>
              <span className="mx-2 text-silver5-cyan-400">•</span>
              <span>{t.footer.copyright}</span>
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                href="/politicas" 
                className="text-gray-400 hover:text-silver5-cyan-400 text-sm transition-colors duration-200 flex items-center"
              >
                <Shield className="w-3 h-3 mr-1" />
                {t.footer.privacy}
              </Link>
              <Link 
                href="/terminos" 
                className="text-gray-400 hover:text-silver5-cyan-400 text-sm transition-colors duration-200 flex items-center"
              >
                <Code className="w-3 h-3 mr-1" />
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 