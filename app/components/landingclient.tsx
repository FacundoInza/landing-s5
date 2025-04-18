"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "../contexts/language-context"
import { translations } from "../translations"
import { trackContact, trackCustomEvent, trackViewContent } from "../utils/analytics"
import { VSLPlayer } from "./vsl-player"
import { Check, Mail, ArrowRight, X, Shield, Lock, Box, Bot, Cpu, Eye, ArrowUpDown, Wallet, Settings, KeyRound, HelpCircle, Zap, MessageCircle, HeadphonesIcon, Calendar, Users, Clock } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Importa la variable de entorno del correo electrónico
const emailContact = process.env.NEXT_PUBLIC_EMAIL_CONTACT || "office@silver5.ai"
const apiUrl = "https://api.silver5ai.com/api/v1"

export default function Home() {
  const { language, setLanguage } = useLanguage()
  const router = useRouter()
  const [searchParamsReady, setSearchParamsReady] = useState(false)
  const t = translations[language]

  // Estado para los productos
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Definimos la interfaz para Product
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    features: string[];
    amount: string;
  }

  // Fetch de productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${apiUrl}/products`)
        if (!response.ok) {
          throw new Error("Error al obtener productos")
        }
        const data = await response.json()
        setProducts(data)
        setIsLoading(false)
      } catch (err: unknown) {
        console.error("Error fetching products:", err)
        setError(err instanceof Error ? err.message : 'Error desconocido')
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Mover la lógica de useSearchParams a un efecto que se ejecuta solo en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      const langParam = url.searchParams.get("language")

      if (langParam && (langParam === "es" || langParam === "en")) {
        setLanguage(langParam)
      }

      setSearchParamsReady(true)
    }
  }, [setLanguage])

  useEffect(() => {
    if (typeof window === "undefined") return

    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Rastrear vista de secciones importantes
  useEffect(() => {
    if (typeof window === "undefined") return

    // Rastrear vista de la página principal
    trackViewContent("Homepage", "Landing Page")

    // Configurar observadores para secciones importantes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            switch (sectionId) {
              case "tecnologias":
                trackViewContent("Tecnologías", "Section")
                break
              case "casos-de-uso":
                trackViewContent("Casos de Uso", "Section")
                break
              case "identificacion-de-dolor":
                trackViewContent("Puntos de Dolor", "Section")
                break
              case "servicios-automatizados":
                trackViewContent("Servicios Automatizados", "Section")
                break
              case "contacto":
                trackViewContent("Contacto", "Section")
                break
            }
            // Desconectar después de ver la sección
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    // Observar todas las secciones importantes
    const sections = ["tecnologias", "casos-de-uso", "identificacion-de-dolor", "servicios-automatizados", "contacto"]

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Rastrear cuando alguien contacta por email
  const handleEmailContact = () => {
    trackContact()
    trackCustomEvent("EmailContact")
  }

  // Rastrear cuando alguien hace clic en un botón de pricing
  const handlePricingClick = (productId: number, productName: string) => {
    trackCustomEvent("PricingRegisterCTAClick", { productId, productName })
    // Redirect to external registration page
    if (typeof window !== "undefined") {
      window.location.href = "https://app.silver5ai.com/register";
    }
  }

  if (!searchParamsReady && typeof window !== "undefined") {
    return (
      <div className="min-h-screen bg-[#0A0B14] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Background Elements Globales */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient Overlays Base */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent animate-gradient" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent animate-gradient-delayed" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.05),transparent_70%)]" />
        </div>

        {/* Crypto Symbols Flotantes */}
        <div className="absolute top-1/4 right-[15%] animate-pulse">
          <div className="text-cyan-400/30 text-6xl font-bold filter blur-sm">₿</div>
        </div>
        <div className="absolute bottom-1/3 left-[15%] animate-pulse delay-300">
          <div className="text-purple-400/30 text-6xl font-bold filter blur-sm">Ξ</div>
        </div>

        {/* Trading Graph */}
        <div className="absolute bottom-1/4 right-[30%] w-32 h-16 opacity-20 group">
          <svg viewBox="0 0 100 50" className="w-full h-full transform transition-transform group-hover:scale-110">
            <path 
              d="M0,25 L10,20 L20,30 L30,15 L40,25 L50,10 L60,20 L70,5 L80,15 L90,10 L100,20" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              className="text-cyan-400"
            />
          </svg>
        </div>
      </div>

      {/* Navbar */}
      <nav className="border-b border-gray-800/50 sticky top-0 z-50 bg-[#0A0B14]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative w-10 h-10 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                  <Image src="/logo-s5-w.png" alt="Silver5 AI" width={40} height={40} className="object-contain" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                  Silver5
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="#pricing"
                className="text-white hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {t.nav.pricing}
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center bg-transparent">
        <div className="absolute inset-0 z-0">
          {/* Floating Icons */}
          <div className="absolute top-40 left-[20%] animate-float transition-all duration-300">
            <Box className="h-8 w-8 text-purple-400/50 filter blur-[2px] transform hover:scale-110 hover:blur-none hover:text-purple-400" />
          </div>
          <div className="absolute top-32 right-[25%] animate-float-delayed transition-all duration-300">
            <Shield className="h-8 w-8 text-cyan-400/50 filter blur-[2px] transform hover:scale-110 hover:blur-none hover:text-cyan-400" />
          </div>
          <div className="absolute bottom-40 left-[35%] animate-float transition-all duration-300">
            <Bot className="h-8 w-8 text-purple-400/50 filter blur-[2px] transform hover:scale-110 hover:blur-none hover:text-purple-400" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {t.hero.title} 
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://app.silver5ai.com/register"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCustomEvent("HeroRegisterCTAClick")}
              >
                <Button className="group bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 transform hover:scale-105">
                  <span className="flex items-center">
                    {t.registerCTA}
                    <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
            </div>

            {/* Video Player Section */}
            <div className="mt-12 mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 animate-gradient"></div>
                  <div className="relative rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-cyan-400/10">
                    <VSLPlayer className="w-full aspect-video" />
                  </div>
                </div>
              </div>
              
              {/* Texto debajo del video */}
              <p className="text-gray-400 text-sm text-center mt-4">
                {t.hero.noCard}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap justify-center gap-6 items-center">
              {[
                { icon: <Shield className="h-5 w-5" />, text: "Compliance AML/KYC" },
                { icon: <Bot className="h-5 w-5" />, text: "Bots de Trading P2P" },
                { icon: <Cpu className="h-5 w-5" />, text: "Automatización Financiera" }
              ].map((badge, index) => (
                <div key={index} className="group flex items-center space-x-2 bg-gradient-to-r from-gray-800/50 to-gray-800/30 px-6 py-3 rounded-full backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:border-cyan-400/20">
                  <div className="text-cyan-400 transition-colors group-hover:text-cyan-300">
                    {badge.icon}
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Seguridad y API Keys */}
      <section id="seguridad" className="relative py-24 border-t border-gray-800/50 bg-transparent">
        <div className="absolute inset-0 z-0">
          {/* Floating Security Icons */}
          <div className="absolute top-40 left-[20%] animate-float transition-all duration-300">
            <Lock className="h-8 w-8 text-purple-400/50 filter blur-[2px] transform hover:scale-110 hover:blur-none hover:text-purple-400" />
          </div>
          <div className="absolute top-32 right-[25%] animate-float-delayed transition-all duration-300">
            <Shield className="h-8 w-8 text-cyan-400/50 filter blur-[2px] transform hover:scale-110 hover:blur-none hover:text-cyan-400" />
          </div>
          <div className="absolute bottom-40 left-[35%] animate-float transition-all duration-300">
            <KeyRound className="h-8 w-8 text-purple-400/50 filter blur-[2px] transform hover:scale-110 hover:blur-none hover:text-purple-400" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block group">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/40">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Seguridad de Nivel Empresarial
                </span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {t.security.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.security.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Permisos de API */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-cyan-400/20 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/10">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                {t.security.apiPermissions}
              </h3>
              <div className="space-y-8">
                {/* Permisos Requeridos */}
                <div className="bg-gray-900/40 rounded-xl p-6 border border-gray-800/50">
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    {t.security.requiredPermissions}
                  </h4>
                  <div className="space-y-4 ml-11">
                    {[
                      {
                        title: t.security.enableReading,
                        description: t.security.readingDescription,
                        icon: <Eye className="h-5 w-5 text-cyan-400" />
                      },
                      {
                        title: t.security.enableTrading,
                        description: t.security.tradingDescription,
                        icon: <ArrowUpDown className="h-5 w-5 text-cyan-400" />
                      }
                    ].map((permission, index) => (
                      <div key={index} className="group bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-all duration-300">
                        <div className="flex items-center mb-2">
                          {permission.icon}
                          <p className="text-gray-300 font-medium ml-3">{permission.title}</p>
                        </div>
                        <p className="text-gray-400 text-sm ml-8">{permission.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Permisos No Requeridos */}
                <div className="bg-gray-900/40 rounded-xl p-6 border border-gray-800/50">
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                    {t.security.notRequiredPermissions}
                  </h4>
                  <div className="space-y-4 ml-11">
                    {[
                      {
                        title: t.security.enableWithdrawals,
                        description: t.security.withdrawalsDescription,
                        icon: <Wallet className="h-5 w-5 text-red-400" />
                      },
                      {
                        title: t.security.accountModification,
                        description: t.security.modificationDescription,
                        icon: <Settings className="h-5 w-5 text-red-400" />
                      }
                    ].map((permission, index) => (
                      <div key={index} className="group bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-all duration-300">
                        <div className="flex items-center mb-2">
                          {permission.icon}
                          <p className="text-gray-300 font-medium ml-3">{permission.title}</p>
                        </div>
                        <p className="text-gray-400 text-sm ml-8">{permission.description}</p>
                      </div>
                    ))}
                      </div>
                    </div>
                        </div>
                      </div>

            {/* Seguridad Adicional y Control */}
            <div className="space-y-8">
              {/* Seguridad Adicional */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-cyan-400/20 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-cyan-400" />
                      </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ml-4">
                    {t.security.additionalSecurity}
                  </h3>
                    </div>
                <div className="space-y-6">
                  <div className="bg-gray-900/40 rounded-xl p-6 border border-gray-800/50">
                    <h4 className="text-white font-semibold mb-4">{t.security.restrictedWithdrawals}</h4>
                    <p className="text-gray-300 mb-4">{t.security.withdrawalRequirements}</p>
                    <ul className="space-y-3">
                      {[t.security.twoFactor, t.security.emailConfirmation, t.security.whitelistAddresses].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-400">
                          <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center mr-3">
                            <Check className="h-4 w-4 text-cyan-400" />
                  </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                </div>
              </div>
            </div>

              {/* Control Total */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-cyan-400/20 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-cyan-400" />
                    </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ml-4">
                    {t.security.fullControl}
                  </h3>
                  </div>
                <div className="bg-gray-900/40 rounded-xl p-6 border border-gray-800/50">
                  <h4 className="text-white font-semibold mb-4">{t.security.instantRevocation}</h4>
                      <p className="text-gray-300">{t.security.revocationDescription}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://app.silver5ai.com/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCustomEvent("SecurityRegisterCTAClick")}
            >
              <Button className="group bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 transform hover:scale-105">
                <span className="flex items-center">
                  {t.registerCTA}
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-24 border-t border-gray-800/50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block group">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/40">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  FAQ
                </span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {t.faq.title}
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.faq.description || "Resolvemos tus dudas más comunes sobre nuestros servicios"}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {t.faq.questions.map((question, index) => (
                <Accordion key={`item-${index + 1}`} type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index + 1}`} className="border-none">
                    <AccordionTrigger className="group bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 px-8 py-6 text-left hover:no-underline data-[state=open]:rounded-b-none transition-all duration-300 hover:border-cyan-400/20">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 flex items-center justify-center mr-4 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                          <HelpCircle className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                          {question.title}
                        </h3>
                      </div>
                  </AccordionTrigger>
                    <AccordionContent className="bg-gradient-to-r from-gray-900/30 to-gray-800/20 backdrop-blur-sm px-8 py-6 rounded-b-2xl border-x border-b border-gray-800/50">
                      <div className="ml-14">
                        <p className="text-gray-300 leading-relaxed">{question.content}</p>
                        {question.list && (
                          <ul className="mt-4 space-y-2">
                            {question.list.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center text-gray-400">
                                <div className="w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center mr-3">
                                  <Check className="w-3 h-3 text-cyan-400" />
                                </div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {question.cta && (
                          <div className="mt-6">
                            <Link
                              href={question.cta.link || "https://app.silver5ai.com/register"}
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                              target={question.cta.link && question.cta.link.startsWith('http') ? "_blank" : "_self"}
                              rel="noopener noreferrer"
                            >
                              {question.cta.text}
                              <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        )}
                      </div>
                  </AccordionContent>
                </AccordionItem>
            </Accordion>
              ))}
          </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8 hover:border-cyan-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t.faq.ctaTitle || "¿Tienes más preguntas?"}
                </h3>
                <p className="text-gray-400 mb-6">
                  {t.faq.ctaDescription || "Nuestro equipo está listo para ayudarte con cualquier duda adicional"}
                </p>
                <a
                  href="https://app.silver5ai.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCustomEvent("FAQRegisterCTAClick")}
                >
                  <Button className="group bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 transform hover:scale-105">
                    <span className="flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      {t.registerCTA}
                      <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </a>
          </div>
          </div>
          </div>
        </div>
      </section>

      {/* Sección de Integración con Binance */}
      <section id="binance-integration" className="relative py-24 border-t border-gray-800/50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block group">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#F3BA2F]/10 to-[#F3BA2F]/20 border border-[#F3BA2F]/20 text-[#F3BA2F] text-sm font-medium mb-8 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-105 group-hover:border-[#F3BA2F]/40">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F3BA2F] to-yellow-500">
                  Powered by Binance
                </span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Conexión Segura con
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F3BA2F] to-yellow-500 ml-3">
                Binance
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Integración directa y segura con la plataforma líder en el mercado de criptomonedas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Ilustración Interactiva */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F3BA2F]/20 to-cyan-400/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-8 hover:border-[#F3BA2F]/20 transition-all duration-500">
                {/* API Connection Animation */}
                <div className="relative h-96 flex items-center justify-center">
                  {/* Silver5 Node */}
                  <div className="absolute left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl border border-cyan-400/20 flex items-center justify-center group-hover:border-cyan-400/40 transition-all duration-500">
                    <Image src="/logo-s5-w.png" alt="Silver5 AI" width={64} height={64} className="transform group-hover:scale-110 transition-all duration-500" />
                </div>

                  {/* Connection Lines */}
                  <div className="absolute left-[calc(50%-80px)] top-1/2 -translate-y-1/2 w-40 h-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-[#F3BA2F] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-[#F3BA2F]/30 rounded-full animate-pulse"></div>
              </div>

                  {/* Data Packets */}
                  <div className="absolute left-[calc(50%-60px)] top-1/2 -translate-y-1/2 flex space-x-2 animate-packet-flow">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <div className="w-2 h-2 rounded-full bg-[#F3BA2F]"></div>
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          </div>

                  {/* Binance Node */}
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#F3BA2F]/10 to-yellow-500/10 rounded-2xl border border-[#F3BA2F]/20 flex items-center justify-center group-hover:border-[#F3BA2F]/40 transition-all duration-500">
                    <Image src="/binance-logo.svg" alt="Binance" width={64} height={64} className="transform group-hover:scale-110 transition-all duration-500" />
        </div>

                  {/* Security Shield */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-full border border-gray-800/50 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-[#F3BA2F] transform group-hover:scale-110 transition-all duration-500" />
          </div>

                  {/* Floating Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-10 left-20 animate-float">
                      <Lock className="w-6 h-6 text-cyan-400/50" />
          </div>
                    <div className="absolute bottom-10 right-20 animate-float delay-100">
                      <KeyRound className="w-6 h-6 text-[#F3BA2F]/50" />
                    </div>
                    <div className="absolute top-10 right-20 animate-float delay-200">
                      <Eye className="w-6 h-6 text-cyan-400/50" />
                    </div>
                  </div>
                </div>
              </div>
          </div>

            {/* Características */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8 hover:border-[#F3BA2F]/20 transition-all duration-500 transform hover:scale-[1.02]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F3BA2F]/20 to-yellow-500/20 flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-[#F3BA2F]" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Conexión Segura
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Integración directa con la API oficial de Binance, garantizando la máxima seguridad en todas tus operaciones.
                </p>
        </div>

              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8 hover:border-[#F3BA2F]/20 transition-all duration-500 transform hover:scale-[1.02]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F3BA2F]/20 to-yellow-500/20 flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-[#F3BA2F]" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Tiempo Real
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Acceso instantáneo a datos del mercado y ejecución inmediata de operaciones en la plataforma de Binance.
                </p>
          </div>

              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8 hover:border-[#F3BA2F]/20 transition-all duration-500 transform hover:scale-[1.02]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F3BA2F]/20 to-yellow-500/20 flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-[#F3BA2F]" />
                </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Control Total
                  </h3>
                  </div>
                <p className="text-gray-400 leading-relaxed">
                  Gestiona tus operaciones P2P con total control y transparencia, manteniendo siempre el poder sobre tus fondos.
                </p>
                </div>
              </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://app.silver5ai.com/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCustomEvent("BinanceRegisterCTAClick")}
            >
              <Button className="group bg-gradient-to-r from-[#F3BA2F] to-yellow-500 hover:from-yellow-500 hover:to-[#F3BA2F] text-gray-900 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg shadow-[#F3BA2F]/20 hover:shadow-[#F3BA2F]/40 transform hover:scale-105">
                <span className="flex items-center">
                  {t.registerCTA}
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </a>
        </div>
        </div>

        {/* Agregar estilos para la animación de los paquetes */}
        <style jsx>{`
          @keyframes packet-flow {
            0% {
              transform: translateX(0) translateY(-50%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(160px) translateY(-50%);
              opacity: 0;
            }
          }
          .animate-packet-flow {
            animation: packet-flow 3s infinite;
          }
        `}</style>
      </section>
     

      {/* Sección de Pricing */}
      <section id="pricing" className="relative border-t border-gray-800/50 py-24 bg-transparent">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Mejoramos los elementos de fondo para dar más profundidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.07),transparent_70%)]" />
          <div className="absolute top-5 left-[25%] animate-float opacity-20 blur-sm">
            <img src="/binance-logo.svg" alt="" className="h-12 w-12" aria-hidden="true" />
          </div>
          <div className="absolute bottom-5 right-[30%] animate-float-delayed opacity-20 blur-sm">
            <img src="/binance-logo.svg" alt="" className="h-8 w-8" aria-hidden="true" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Encabezado mejorado */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 backdrop-blur-sm mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">
              {t.pricing.title}
                </span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Planes diseñados para tu éxito
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Elige el plan que mejor se adapte a tus necesidades y comienza a automatizar tus operaciones P2P
            </p>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-12 bg-red-500/10 rounded-xl border border-red-500/20">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xl font-medium">{t.pricing.error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products &&
                [...products]
                  .sort((a, b) => {
                    if (a.price === 0) return 1;
                    if (b.price === 0) return -1;
                    return a.price - b.price;
                  })
                  .map((product: Product) => (
                  <div
                    key={product.id}
                      className={`group relative ${
                        product.price === 0 
                          ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/50' 
                          : 'bg-gray-900/50'
                      } backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/10 transform hover:scale-[1.02]`}
                    >
                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-cyan-400/5"></div>
                      </div>

                      <div className="relative p-8">
                        {/* Encabezado del plan */}
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                            <p className="text-gray-400 text-sm">{product.description}</p>
                          </div>
                          <img src="/binance-logo.svg" alt="Binance" className="h-8 w-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Precio */}
                        <div className="mb-8">
                          <div className="flex items-baseline">
                            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {product.price === 0 ? (
                                "Personalizado"
                          ) : (
                            <>
                              ${product.price}
                                  <span className="text-base text-gray-400 ml-1">
                                {t.pricing.perMonth}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                        </div>

                        {/* Características */}
                        <div className="space-y-4 mb-8">
                          {product.features && product.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3 group/feature">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center mt-0.5 group-hover/feature:bg-cyan-400/30 transition-colors">
                                <Check className="h-3 w-3 text-cyan-400" />
                              </div>
                              <span className="text-gray-300 group-hover/feature:text-white transition-colors">{feature}</span>
                              </div>
                            ))}
                          </div>

                        {/* Información adicional */}
                        <div className="bg-gray-800/30 rounded-xl p-4 mb-8">
                          <div className="flex items-center space-x-2 mb-2">
                            <Bot className="h-5 w-5 text-cyan-400" />
                            <span className="text-white font-medium">
                              {product.amount} {t.pricing.botsIncluded}
                          </span>
                        </div>
                          <div className="flex items-center space-x-2">
                            <HelpCircle className="h-5 w-5 text-cyan-400" />
                            <span className="text-gray-400">{t.pricing.support}</span>
                        </div>
                        </div>

                        {/* Botón CTA */}
                      <button
                        onClick={product.price === 0 
                          ? () => window.open('https://calendly.com/silver-5-ai/silver-5-p2p', '_blank')
                          : () => handlePricingClick(product.id, product.name)}
                          className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 font-bold py-4 px-6 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 transition-all duration-300 flex items-center justify-center group/button"
                      >
                          <span className="mr-2">
                        {product.price === 0 ? t.pricing.scheduleMeeting : t.registerCTA}
                          </span>
                          <ArrowRight className="h-5 w-5 transform group-hover/button:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Sección de contacto mejorada */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg mb-4">{t.pricing.customPlan}</p>
            <a
              href={`mailto:${emailContact}`}
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium group"
              onClick={handleEmailContact}
            >
              <Mail className="h-5 w-5" />
              <span>{emailContact}</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Badges de confianza */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 bg-gray-900/30 rounded-full px-4 py-2">
                <img src="/binance-logo.svg" alt="Binance" className="h-5 w-5" />
                <span className="text-gray-400 text-sm">{t.pricing.allPayments}</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-900/30 rounded-full px-4 py-2">
                <Lock className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-400 text-sm">Pagos Seguros</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-900/30 rounded-full px-4 py-2">
                <Shield className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-400 text-sm">Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="relative border-t border-gray-800/50 py-24 bg-transparent">
        {/* Efectos de fondo mejorados */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.07),transparent_70%)]" />
          
          {/* Elementos flotantes */}
          <div className="absolute top-20 left-[10%] animate-float">
            <Mail className="h-8 w-8 text-cyan-400/20" aria-hidden="true" />
          </div>
          <div className="absolute bottom-20 right-[10%] animate-float-delayed">
            <HelpCircle className="h-8 w-8 text-purple-400/20" aria-hidden="true" />
          </div>
          <div className="absolute top-40 right-[20%] animate-float">
            <MessageCircle className="h-8 w-8 text-cyan-400/20" aria-hidden="true" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Encabezado */}
            <div className="text-center mb-16">
              <div className="inline-block">
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 backdrop-blur-sm mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">
                    {t.contact.title}
                  </span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Estamos aquí para ayudarte
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            {/* Grid de Contacto */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Columna de Información */}
              <div className="space-y-8">
                {/* Tarjeta de Email */}
                <div className="group bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Correo Electrónico</h3>
                      <a
                        href={`mailto:${emailContact}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group/link"
                        onClick={handleEmailContact}
                      >
                        <span>{emailContact}</span>
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Tarjeta de Soporte */}
                <div className="group bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                        <HeadphonesIcon className="h-6 w-6 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Soporte 24/7</h3>
                      <p className="text-gray-400">Estamos disponibles para ayudarte en cualquier momento</p>
                    </div>
                  </div>
                </div>

                {/* Tarjeta de Reunión */}
                <div className="group bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                        <Calendar className="h-6 w-6 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Agenda una Reunión</h3>
                      <button 
                        onClick={() => window.open('https://calendly.com/silver-5-ai/silver-5-p2p', '_blank')}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group/link"
                      >
                        <span>Reserva tu espacio</span>
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna de Ilustración */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-8 hover:border-cyan-400/20 transition-all duration-500">
                  <div className="aspect-square relative">
                    <Image
                      src="/blueprint.png"
                      alt="Contacto Ilustración"
                      fill
                      className="object-contain p-8 transform group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Badges de Confianza */}
            <div className="mt-16 flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-3 bg-gray-900/30 rounded-full px-6 py-3">
                <Shield className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">Comunicación Segura</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-900/30 rounded-full px-6 py-3">
                <Clock className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">Respuesta Rápida</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-900/30 rounded-full px-6 py-3">
                <Users className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">Equipo Especializado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">{t.footer.company}</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#tecnologias"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    Tecnologías
                  </Link>
                </li>
                <li>
                  <Link
                    href="#casos-de-uso"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    Casos de Uso
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contacto"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">{t.footer.services}</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#tecnologias"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    Tecnologías
                  </Link>
                </li>
                <li>
                  <Link
                    href="#casos-de-uso"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    Casos de Uso
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {t.nav.pricing}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">{t.footer.legal}</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/politicas"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terminos"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col items-center">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                <Image src="/logo-s5-w.png" alt="Silver5 AI" width={40} height={40} className="object-contain" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Silver5
              </span>
            </Link>
            <p className="text-gray-400 text-sm text-center">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

