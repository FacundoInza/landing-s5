'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Smartphone, ArrowLeft, Layers, Zap, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../../contexts/language-context'

export default function AppsMoviles() {
  const { language } = useLanguage()
  const isSpanish = language === 'es'

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-cyan-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {isSpanish ? 'Volver al inicio' : 'Back to home'}
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {isSpanish ? 'Desarrollo de Apps Móviles' : 'Mobile App Development'}
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              {isSpanish 
                ? 'Creamos aplicaciones móviles nativas y multiplataforma que destacan en el mercado.'
                : 'We create native and cross-platform mobile applications that stand out in the market.'}
            </p>
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900">
              {isSpanish ? 'Consultar ahora' : 'Inquire now'}
            </Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
            <Image
              src="/placeholder.svg"
              alt={isSpanish ? "Apps Móviles" : "Mobile Apps"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Smartphone className="h-8 w-8 text-cyan-400" />,
              title: isSpanish ? 'Apps Nativas' : 'Native Apps',
              description: isSpanish 
                ? 'Desarrollo de aplicaciones nativas para iOS y Android.'
                : 'Native application development for iOS and Android.'
            },
            {
              icon: <Globe className="h-8 w-8 text-cyan-400" />,
              title: isSpanish ? 'Apps Multiplataforma' : 'Cross-platform Apps',
              description: isSpanish
                ? 'Soluciones multiplataforma con React Native y Flutter.'
                : 'Cross-platform solutions with React Native and Flutter.'
            },
            {
              icon: <Zap className="h-8 w-8 text-cyan-400" />,
              title: isSpanish ? 'Alto Rendimiento' : 'High Performance',
              description: isSpanish
                ? 'Optimización para máximo rendimiento y experiencia de usuario.'
                : 'Optimization for maximum performance and user experience.'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isSpanish ? 'Tecnologías' : 'Technologies'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square relative rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src="/placeholder.svg"
                  alt={`Technology ${item}`}
                  fill
                  className="object-contain p-8"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isSpanish ? 'Portafolio' : 'Portfolio'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative aspect-[9/16] rounded-lg overflow-hidden bg-gray-800 group">
                <Image
                  src="/placeholder.svg"
                  alt={isSpanish ? `App ${item}` : `App ${item}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">
                    {isSpanish ? `Aplicación ${item}` : `Application ${item}`}
                  </h3>
                  <p className="text-gray-300">
                    {isSpanish 
                      ? 'Descripción breve de la aplicación móvil.'
                      : 'Brief description of the mobile application.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isSpanish ? '¿Tienes una idea?' : 'Got an idea?'}
          </h2>
          <p className="text-gray-400 mb-8">
            {isSpanish 
              ? 'Convirtamos tu idea en una aplicación exitosa.'
              : "Let's turn your idea into a successful app."}
          </p>
          <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900">
            {isSpanish ? 'Contactar' : 'Contact Us'}
          </Button>
        </div>
      </div>
    </div>
  )
}

