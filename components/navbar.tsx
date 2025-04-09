'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bot, Shield, Cpu, Menu, X, ChevronDown, ExternalLink } from 'lucide-react'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useState, useEffect } from 'react'

interface NavbarProps {
  calendlyUrl: string;
}

export function Navbar({ calendlyUrl }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  // Lista de servicios para el desplegable
  const servicios = [
    { path: '/servicios/compliance', name: 'Compliance', icon: <Shield className="w-4 h-4 mr-2 text-purple-400" /> },
    { path: '/servicios/inteligencia-artificial', name: 'Inteligencia Artificial', icon: <Cpu className="w-4 h-4 mr-2 text-yellow-400" /> },
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Menú desplegable de servicios */}
            <div className="relative">
              <button 
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group flex items-center"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Servicios</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              
              {/* Dropdown menu */}
              {servicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50 py-2"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {servicios.map((servicio, index) => (
                    <Link
                      key={index}
                      href={servicio.path}
                      className="flex items-center px-4 py-2.5 hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
                    >
                      {servicio.icon}
                      <span>{servicio.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              href="https://p2p.silver5ai.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group flex items-center"
            >
              <Bot className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Bot P2P</span>
              <ExternalLink className="h-3.5 w-3.5 ml-1 text-gray-500" />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            <Link 
              href="/p2p-manager" 
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group flex items-center"
            >
              <Bot className="w-4 h-4 mr-2 text-purple-400" />
              <span>Silver P2P Manager</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            
            <Link 
              href="/#sobre-nosotros" 
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
            >
              <span>Sobre Nosotros</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            
            <Link 
              href="/contacto" 
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
            >
              <span>Contacto</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-4">
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

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} z-40`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
          {/* Desplegable de servicios en móvil */}
          <div className="rounded-md bg-gray-800/50 p-3">
            <div className="font-medium text-white mb-2">Servicios</div>
            <div className="space-y-2 ml-2">
              {servicios.map((servicio, index) => (
                <Link
                  key={index}
                  href={servicio.path}
                  className="flex items-center py-2 px-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {servicio.icon}
                  <span>{servicio.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <Link
            href="https://p2p.silver5ai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Bot className="w-4 h-4 mr-2 text-cyan-400" />
            Bot P2P
            <ExternalLink className="h-3.5 w-3.5 ml-1 text-gray-500" />
          </Link>
          
          <Link
            href="/p2p-manager"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Bot className="w-4 h-4 mr-2 text-purple-400" />
            Silver P2P Manager
          </Link>
          
          <Link
            href="/#sobre-nosotros"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre Nosotros
          </Link>
          
          <Link
            href="/contacto"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </Link>
          
          <div className="mt-3 px-3">
            <Link
              href={calendlyUrl}
              className="block text-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ver Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

