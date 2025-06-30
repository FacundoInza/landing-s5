'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bot, Shield, Cpu, Menu, X, ChevronDown, ExternalLink, MessageSquare, ClipboardList, Users, Brain } from 'lucide-react'
import { LanguageSwitcher } from '@/components/language-switcher'
import { RegisterButton } from '@/components/RegisterButton'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/app/contexts/language-context'

interface NavbarProps {
  calendlyUrl: string;
}

export function Navbar({ calendlyUrl }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { language } = useLanguage()
  
  // Traducciones
  const translations = {
    es: {
      services: 'Servicios',
      botP2P: 'Bot P2P',
      silverP2PManager: 'Silver P2P Manager',
      contact: 'Contacto',
      pricing: 'Precios',
      seeDemo: 'Ver Demo',
      mainMenu: 'Menú principal',
      modules: {
        chats: 'Chats Centralizados',
        bot: 'Bot de Posicionamiento',
        orders: 'Gestión de Órdenes',
        clients: 'Gestión de Clientes (KYC)',
        ai: 'Agente IA'
      }
    },
    en: {
      services: 'Services',
      botP2P: 'P2P Bot',
      silverP2PManager: 'Silver P2P Manager',
      contact: 'Contact',
      pricing: 'Pricing',
      seeDemo: 'See Demo',
      mainMenu: 'Main menu',
      modules: {
        chats: 'Centralized Chats',
        bot: 'Positioning Bot',
        orders: 'Order Management',
        clients: 'Client Management (KYC)',
        ai: 'AI Agent'
      }
    }
  }

  const t = translations[language as keyof typeof translations]
  
  // Lista de servicios para el desplegable con iconos específicos
  const servicios = [
    { 
      path: '/p2p-manager/chats-centralizados', 
      name: t.modules.chats, 
      icon: <MessageSquare className="w-4 h-4 mr-2 text-silver5-chats" /> 
    },
    { 
      path: '/p2p-manager/bot-posicionamiento', 
      name: t.modules.bot, 
      icon: <Bot className="w-4 h-4 mr-2 text-silver5-bot" /> 
    },
    { 
      path: '/p2p-manager/gestion-ordenes', 
      name: t.modules.orders, 
      icon: <ClipboardList className="w-4 h-4 mr-2 text-silver5-orders" /> 
    },
    { 
      path: '/p2p-manager/gestion-clientes', 
      name: t.modules.clients, 
      icon: <Users className="w-4 h-4 mr-2 text-silver5-kyc" /> 
    },
    { 
      path: '/p2p-manager/agente-ia', 
      name: t.modules.ai, 
      icon: <Brain className="w-4 h-4 mr-2 text-silver5-ai" /> 
    },
  ];

  // Añadir efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 mx-4 mt-4">
          {/* Logo a la izquierda */}
          <div className="flex items-center min-w-[160px]">
            <Link href="/" className="flex items-center space-x-3 group px-4 py-2">
              <div className="relative overflow-hidden rounded-full p-1">
                <Image src="/logo-s5-w.png" alt="Silver5 AI" width={32} height={32} priority className="transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Silver5</span>
            </Link>
          </div>

          {/* Navegación central */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-2">
            {/* Menú desplegable de servicios */}
            <div className="relative">
              <button 
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group flex items-center rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>{t.services}</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown menu */}
              {servicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl z-50 py-3"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {servicios.map((servicio, index) => (
                    <Link
                      key={index}
                      href={servicio.path}
                      className="flex items-center px-4 py-3 hover:bg-white/10 text-gray-300 hover:text-white transition-colors rounded-xl mx-2"
                    >
                      {servicio.icon}
                      <span className="text-sm font-medium">{servicio.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              href="https://p2p.silver5ai.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group flex items-center rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <Bot className="w-4 h-4 mr-2 text-silver5-cyan-400" />
              <span>{t.botP2P}</span>
              <ExternalLink className="h-3.5 w-3.5 ml-1 text-gray-500" />
            </Link>

            <Link 
              href="/p2p-manager" 
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group flex items-center rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <Bot className="w-4 h-4 mr-2 text-silver5-orders-400" />
              <span>{t.silverP2PManager}</span>
            </Link>
            
            <Link 
              href="/contacto" 
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <span>{t.contact}</span>
            </Link>
            
            <Link 
              href="/pricing" 
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <span>{t.pricing}</span>
            </Link>
          </div>

          {/* Elementos de la derecha */}
          <div className="hidden md:flex items-center space-x-3 min-w-[280px] justify-end">
            <div className="backdrop-blur-md bg-white/5 rounded-full border border-white/10">
              <LanguageSwitcher />
            </div>

            {/* Botón Regístrate gratis usando el componente */}
            <RegisterButton />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-4">
            <div className="backdrop-blur-md bg-white/5 rounded-full border border-white/10">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 ${
                mobileMenuOpen 
                  ? "bg-silver5-cyan-400/20 text-silver5-cyan-400" 
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
              aria-label={t.mainMenu}
            >
              <div className="relative">
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} z-40`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto backdrop-blur-md bg-white/10 border border-white/20 mx-4 mt-2 rounded-2xl">
          {/* Desplegable de servicios en móvil */}
          <div className="rounded-xl bg-white/10 p-3">
            <div className="font-medium text-white mb-2 text-sm">{t.services}</div>
            <div className="space-y-2 ml-2">
              {servicios.map((servicio, index) => (
                <Link
                  key={index}
                  href={servicio.path}
                  className="flex items-center py-2 px-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {servicio.icon}
                  <span className="text-sm">{servicio.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <Link
            href="https://p2p.silver5ai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Bot className="w-4 h-4 mr-2 text-silver5-cyan-400" />
            {t.botP2P}
            <ExternalLink className="h-3.5 w-3.5 ml-1 text-gray-500" />
          </Link>
          
          <Link
            href="/p2p-manager"
            className="block px-3 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Bot className="w-4 h-4 mr-2 text-silver5-orders-400" />
            {t.silverP2PManager}
          </Link>
          
          <Link
            href="/contacto"
            className="block px-3 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.contact}
          </Link>
          
          <Link
            href="/pricing"
            className="block px-3 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.pricing}
          </Link>
          
          <div className="mt-3 px-3 space-y-2">
            {/* Botón de registro móvil usando el componente */}
            <RegisterButton 
              fullWidth={true} 
              onClick={() => setMobileMenuOpen(false)}
            />
            <Link
              href={calendlyUrl}
              className="block text-center w-full px-4 py-3 border border-white/20 text-sm font-medium rounded-xl text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.seeDemo}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

