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
import { Check, Mail, ArrowRight, X, Shield, Lock, Bot } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Importa la variable de entorno del correo electrónico
const emailContact = process.env.NEXT_PUBLIC_EMAIL_CONTACT || "office@silver5ai.com"
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
    trackCustomEvent("PricingCTAClick", { productId, productName })
    router.push("/lead-form")
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
      <section
        id="hero"
        className="relative flex flex-col justify-start items-center overflow-hidden min-h-screen bg-[#0A0B14]"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-10 left-[10%] animate-float opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12" />
          </div>
          <div className="absolute bottom-10 right-[20%] animate-float-delayed opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8" />
          </div>
          <div className="absolute top-5 right-[30%] animate-float opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6" />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.1),transparent_70%)]" />
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 w-full lg:max-w-7xl">
          <div className="text-center mx-auto max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm">
              <span className="mr-1 h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              {t.hero.title}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              {t.hero.description.split(" ").map((word, index) => {
                if (
                  word === "Anuncios" ||
                  word === "Volumen" ||
                  word === "Bot" ||
                  word === "Sin" ||
                  word === "Pantalla" ||
                  word === "Manual" ||
                  word === "Margen" ||
                  word === "Without" ||
                  word === "Screen" ||
                  word === "Manual" ||
                  word === "Margin"
                ) {
                  return (
                    <span key={index} className="text-cyan-400">
                      {word}{" "}
                    </span>
                  )
                }
                return word + " "
              })}
            </h1>

            {/* Botón CTA en la parte superior del hero */}
            <div className="mb-12">
              <Link
                href="/lead-form"
                onClick={(e) => {
                  e.preventDefault()
                  router.push("/lead-form")
                  trackCustomEvent("HeroTopCTAClick")
                }}
              >
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                  {t.hero.trialButton}
                </Button>
              </Link>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-6 text-white">{t.hero.cta}</h2>

            {/* Video player with enhanced styling */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl shadow-cyan-400/10 border border-gray-800/50">
                <VSLPlayer className="w-full" />
              </div>
            </div>

            {/* Botón CTA después del video */}
            <div className="mt-12 space-y-4">
              <Link
                href="/lead-form"
                onClick={(e) => {
                  e.preventDefault()
                  router.push("/lead-form")
                  trackCustomEvent("HeroBottomCTAClick")
                }}
              >
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                  {t.hero.trialButton}
                </Button>
              </Link>
              <p className="text-gray-400 mt-2 text-sm">{t.hero.noCard}</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Banner del Agente WhatsApp */}
      <section className="relative py-6 overflow-hidden border-t border-b border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-blue-900/10 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full p-2 mr-3">
                <Bot className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  {language === 'es' ? '¡Nuevo! Agente Inteligente para WhatsApp' : 'New! Intelligent WhatsApp Agent'}
                </h3>
                <p className="text-gray-400 text-sm">
                  {language === 'es' ? 'Automatiza las respuestas a preguntas frecuentes de tus clientes' : 'Automate responses to your customers\' frequently asked questions'}
                </p>
              </div>
            </div>
            <Link href="/agent">
              <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.02]">
                {language === 'es' ? 'Conocer más' : 'Learn more'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Seguridad y API Keys */}
      <section id="seguridad" className="relative py-24 border-t border-gray-800/50 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.05),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.security.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
              {t.security.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">{t.security.apiPermissions}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {t.security.requiredPermissions}
                  </h4>
                  <div className="space-y-4 ml-7">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-300 font-medium">{t.security.enableReading}</p>
                        <p className="text-gray-400 text-sm">{t.security.readingDescription}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-300 font-medium">{t.security.enableTrading}</p>
                        <p className="text-gray-400 text-sm">{t.security.tradingDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    {t.security.notRequiredPermissions}
                  </h4>
                  <div className="space-y-4 ml-7">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-300 font-medium">{t.security.enableWithdrawals}</p>
                        <p className="text-gray-400 text-sm">{t.security.withdrawalsDescription}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-300 font-medium">{t.security.accountModification}</p>
                        <p className="text-gray-400 text-sm">{t.security.modificationDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">{t.security.additionalSecurity}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-cyan-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">{t.security.restrictedWithdrawals}</h4>
                      <p className="text-gray-300">{t.security.withdrawalRequirements}</p>
                      <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                        <li>{t.security.twoFactor}</li>
                        <li>{t.security.emailConfirmation}</li>
                        <li>{t.security.whitelistAddresses}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">{t.security.fullControl}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Lock className="h-6 w-6 text-cyan-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">{t.security.instantRevocation}</h4>
                      <p className="text-gray-300">{t.security.revocationDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/lead-form"
              onClick={(e) => {
                e.preventDefault()
                router.push("/lead-form")
                trackCustomEvent("SecurityCTAClick")
              }}
            >
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                {t.security.tryButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-24 border-t border-gray-800/50 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.faq.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {t.faq.questions.map((question, index) => (
                <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`} className="border-b-0">
                  <AccordionTrigger className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 px-6 text-left hover:no-underline">
                    <h3 className="text-xl font-bold text-cyan-400">{question.title}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-4">
                    <p className="text-gray-300">{question.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section id="tecnologias" className="relative py-24 border-t border-gray-800/50 bg-[#0A0B14]">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-10 left-[10%] animate-float opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12" />
          </div>
          <div className="absolute bottom-10 right-[20%] animate-float-delayed opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8" />
          </div>
          <div className="absolute top-5 right-[30%] animate-float opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6" />
          </div>

          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.05),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.technologies.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.technologies.techs.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-cyan-400/10 group"
              >
                <div className="mb-6 p-4 rounded-full bg-gray-800/50 group-hover:bg-cyan-400/10 transition-colors duration-300">
                  <img
                    src={tech.name === "Binance" ? "/binance-logo.svg" : `/${tech.name.toLowerCase()}.png`}
                    alt={tech.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3
                  className={`text-2xl font-bold mb-3 ${tech.name === "Binance" ? "text-yellow-500" : "text-white group-hover:text-cyan-400"} transition-colors duration-300`}
                >
                  {tech.name}
                </h3>
                <p className="text-gray-400 text-center">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios / Casos de Éxito */}
      <section id="testimonios" className="relative border-t border-gray-800/50 py-24 bg-[#0A0B14]">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-5 left-[25%] animate-float opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12" />
          </div>
          <div className="absolute bottom-5 right-[30%] animate-float-delayed opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8" />
          </div>
          <div className="absolute top-10 right-[15%] animate-float opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6" />
          </div>

          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.05),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.testimonials.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.testimonials.cases.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-cyan-400/10"
              >
                <div className="relative">
                  <svg
                    className="absolute -top-4 -left-4 h-10 w-10 text-cyan-400/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 italic leading-relaxed mb-6">&quot;{testimonial.content}&quot;</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-white">{testimonial.author}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Pricing */}
      <section id="pricing" className="relative border-t border-gray-800/50 py-24 bg-[#0A0B14]">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-5 left-[25%] animate-float opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12" />
          </div>
          <div className="absolute bottom-5 right-[30%] animate-float-delayed opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8" />
          </div>
          <div className="absolute top-10 right-[15%] animate-float opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6" />
          </div>

          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.05),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.pricing.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

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
                products.map((product: Product) => (
                  <div
                    key={product.id}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/10 transform hover:scale-[1.02]"
                  >
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                      <div className="flex items-center mb-6">
                        <div className="text-4xl font-bold text-cyan-400">
                          {product.price === 0 ? (
                            "Hablemos"
                          ) : (
                            <>
                              ${product.price}
                              <span className="text-sm text-gray-400 ml-1">
                                {t.pricing.currency}
                                {t.pricing.perMonth}
                              </span>
                            </>
                          )}
                        </div>
                        <img src="/binance-logo.svg" alt="Binance" className="h-6 w-6 ml-3" />
                      </div>
                      <p className="text-gray-300 mb-4">{product.description}</p>
                      <p className="text-gray-500 text-sm mb-6 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t.pricing.paymentMethod}
                      </p>

                      {/* Características del producto desde la base de datos */}
                      {product.features && product.features.length > 0 && (
                        <div className="mb-6 bg-gray-800/70 p-5 rounded-xl">
                          <div className="space-y-3">
                            {product.features.map((feature: string, index: number) => (
                              <div key={index} className="flex items-start">
                                <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mb-8 space-y-3">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-300">
                            <strong className="text-white">{product.amount}</strong> {t.pricing.botsIncluded}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-300">{t.pricing.support}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-300">{t.pricing.updates}</span>
                        </div>
                      </div>
                      <button
                        onClick={product.price === 0 
                          ? () => window.open('https://calendly.com/silver5ai/15min', '_blank')
                          : () => handlePricingClick(product.id, product.name)}
                        className="w-full rounded-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-4 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center"
                      >
                        {product.price === 0 ? t.pricing.scheduleMeeting : t.pricing.startTrial}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg mb-4">{t.pricing.customPlan}</p>
            <a
              href={`mailto:${emailContact}`}
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium inline-flex items-center group"
              onClick={handleEmailContact}
            >
              {emailContact}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <div className="mt-6 flex justify-center items-center">
              <div className="p-3 bg-gray-900/70 rounded-full mr-3">
                <img src="/binance-logo.svg" alt="Binance" className="h-6 w-6" />
              </div>
              <p className="text-gray-400 text-sm">{t.pricing.allPayments}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="relative border-t border-gray-800/50 py-24 bg-[#0A0B14]">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-5 left-[20%] animate-float opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-10 w-10" />
          </div>
          <div className="absolute bottom-5 right-[25%] animate-float-delayed opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8" />
          </div>
          <div className="absolute top-10 right-[10%] animate-float opacity-20">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6" />
          </div>

          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.05),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                {t.contact.title}
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">{t.contact.description}</p>
              <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{t.contact.emailText}</p>
                  <a
                    href={`mailto:${emailContact}`}
                    className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors"
                    onClick={handleEmailContact}
                  >
                    {emailContact}
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
                <img
                  src="/blueprint.png"
                  alt="Contact Illustration"
                  className="relative w-80 h-80 object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 bg-gray-900/30">
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

